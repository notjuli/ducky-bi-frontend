import { Footer } from '@/components';
import { userRegister } from '@/services/ant-design-pro/api';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { Tabs, message } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';

// 下面这段代码跟注册页面布局有关，不能删
const Lang = () => {
  useEmotionCss(({ token }) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });
  return;
};

const Register: React.FC = (body: API.LoginParams, options?: { [p: string]: any }) => {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  // 表单提交
  const handleSubmit = async (values: API.RegisterParams) => {
    const { userPassword, checkPassword } = values;
    // 校验
    if (userPassword !== checkPassword) {
      message.error('两次输入的密码不一致');
      return;
    }

    try {
      // 注册
      const id = await userRegister(values);
      if (id) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);

        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/user/login');
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'智能BI'}- {Settings.title}
        </title>
      </Helmet>
      <Lang />
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="智能BI"
          subTitle={'智能数据分析助手'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '注册',
              },
            ]}
          />
          {type === 'account' && ( // 选择注册类型，账号密码注册
            <>
              <ProFormText
                name="userAccount"
                // fieldProps={{
                //   size: 'large',
                //   prefix: <UserOutlined />,
                // }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '账号不能为空',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                // fieldProps={{
                //   size: 'large',
                //   prefix: <LockOutlined />,
                // }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    min: 8, // 密码字符串的最小长度
                    type: 'string',
                    message: '密码长度不能小于 8',
                  },
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                // fieldProps={{
                //   size: 'large',
                //   prefix: <LockOutlined />,
                // }}
                placeholder={'请确认密码'}
                rules={[
                  {
                    min: 8, // 密码字符串的最小长度
                    type: 'string',
                    message: '密码长度不能小于 8',
                  },
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                ]}
              />
            </>
          )}
          <a
            style={{
              height: 40,
              float: 'right',
            }}
            href={'/user/login'}
            target="_self"
            rel="noreferrer"
          >
            返回登录
          </a>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
