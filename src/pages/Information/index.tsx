import { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-table';
import { useModel } from '@umijs/max';
import React, { useRef } from 'react';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const columns: (
  | { copyable: boolean; dataIndex: string; title: string; key: string }
  | { dataIndex: string; title: string; key: string }
  | { dataIndex: string; title: string; key: string }
  | {
      dataIndex: string;
      valueType: string;
      valueEnum: { admin: { text: string }; user: { text: string } };
      title: string;
      key: string;
    }
  | { dataIndex: string; valueType: string; title: string; key: string }
  | {
      valueType: string;
      title: string;
      render: (text, record, _, action) => JSX.Element[];
      key: string;
    }
)[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    copyable: true,
    key: 'userName',
  },
  {
    title: '用户账户',
    dataIndex: 'userAccount',
    // copyable: true,
    key: 'userAccount',
  },
  // {
  //   title: '头像',
  //   dataIndex: 'avatar',
  //   render: (_, record) => (
  //     <div>
  //       <Image src={record.userAvatar} width={100}/>
  //     </div>
  //   ),
  // },
  {
    title: '用户角色',
    dataIndex: 'userRole',
    //render: (_, record) => <Tag color={record.userRole.color}>{record.userRole.text}</Tag>,
    valueType: 'select', //可枚举的值，可筛选
    valueEnum: {
      user: { text: '普通用户' },
      admin: { text: '管理员' },
    },
    key: 'isDelete',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    key: 'createTime',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
    ],
  },
];

const App: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};
  const actionRef = useRef<ActionType>();
  const data: { createTime: any; userAccount: any; userName: any; userRole: any }[] = [
    {
      userName: currentUser.userName,
      userAccount: 'juliaaaa',
      userRole: currentUser.userRole,
      createTime: currentUser.createTime,
    },
  ];

  return (
    <ProTable
      columns={columns}
      dataSource={data}
      search={false}
      pagination={false}
      rowKey="id"
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      dateFormatter="string"
      headerTitle="个人信息"
    />
  );
};

export default App;
