import { Footer } from '@/components';
import { listChartByPageUsingPOST } from '@/services/julii/chartController';
import { getLoginUserUsingGET, userLoginUsingPOST } from '@/services/julii/userController';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { Alert, Tabs, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';
const Lang = () => {
  const langClassName = useEmotionCss(({ token }) => {
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
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState] = useState<API.LoginResult>({});
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

  useEffect(() => {
    listChartByPageUsingPOST({}).then((res) => {
      console.error('res', res);
    });
  });

  /**
   * 登陆成功后，获取用户的登录信息
   */
  const fetchUserInfo = async () => {
    const userInfo = await getLoginUserUsingGET();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPOST({
        ...values,
        type,
      });
      if (res.code === 0) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        location.reload();
        return;
      } else {
        message.error(res.message);
      }
    } catch (error) {
      const defaultLoginFailureMessage = `登录失败，请重试！`;
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
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="智能BI"
          subTitle={'智能数据分析助手'}
          initialValues={{
            autoLogin: false,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '登录',
              },
            ]}
          />
          {type === 'account' && ( // 选择登陆类型，账号密码登录
            <>
              <ProFormText
                name="userAccount"
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
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            {/*<ProFormCheckbox noStyle name="autoLogin">*/}
            {/*  自动登录*/}
            {/*</ProFormCheckbox>*/}
            <a
              style={{
                height: 40,
                float: 'right',
              }}
              href={
                'https://mp.qzone.qq.com/u/2376015252?uin=2376015252&is_famous_space=0&brand_flag=0&g_f=2000000393\n'
              }
              target="_blank"
              rel="noreferrer"
            >
              忘记密码
            </a>
            <a
              style={{
                height: 40,
                float: 'left',
              }}
              href={'/user/register'}
              target="_self"
              rel="noreferrer"
            >
              新用户注册
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
