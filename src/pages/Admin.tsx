import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import React, { PropsWithChildren } from 'react';
const Admin: React.FC = (props: PropsWithChildren) => {
  const { children } = props; // children是子页面的信息，可以把子页面嵌套在父页面中的任何一个位置
  return <PageContainer>{children}</PageContainer>;
};
export default Admin;
