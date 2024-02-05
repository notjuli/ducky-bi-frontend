import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'BY JULII';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '西南交通大学',
          title: 'SWJTU  ',
          href: 'https://www.swjtu.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> Github{' '}
            </>
          ),
          href: 'https://github.com/paranoidrascal',
          blankTarget: true,
        },
        {
          key: '计算机与人工智能学院',
          title: 'SCAI',
          href: 'https://scai.swjtu.edu.cn/index.html',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
