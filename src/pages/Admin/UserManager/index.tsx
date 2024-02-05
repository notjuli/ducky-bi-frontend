import { searchUsers } from '@/services/ant-design-pro/api';
import type { ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Image } from 'antd';
import { useRef } from 'react';
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
  | { dataIndex: string; valueType: string; width: number }
  | { dataIndex: string; title: string }
  | { dataIndex: string; title: string }
  | { dataIndex: string; title: string; render: (_, record) => JSX.Element }
  | { dataIndex: string; title: string }
  | { dataIndex: string; title: string }
  | { dataIndex: string; title: string }
  | {
      dataIndex: string;
      valueEnum: { '0': { text: string; status: string }; '1': { text: string; status: string } };
      filters: boolean;
      title: string;
    }
  | {
      dataIndex: string;
      valueType: string;
      valueEnum: { '0': { text: string }; '1': { text: string } };
      title: string;
    }
  | { dataIndex: string; valueType: string; title: string }
  | {
      valueType: string;
      title: string;
      render: (text, record, _, action) => JSX.Element[];
      key: string;
    }
)[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    // copyable: true,
  },
  {
    title: '用户账户',
    dataIndex: 'userAccount',
    // copyable: true,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    render: (_, record) => (
      <div>
        <Image src={record.userAvatar} width={100} />
      </div>
    ),
  },
  {
    title: '用户状态',
    dataIndex: 'isDelete',
    filters: true,
    valueEnum: {
      0: { text: '正常', status: 'Success' },
      1: {
        text: '异常',
        status: 'Default',
      },
    },
  },
  {
    title: '用户角色',
    dataIndex: 'userRole',
    //render: (_, record) => <Tag color={record.userRole.color}>{record.userRole.text}</Tag>,
    valueType: 'select', //可枚举的值，可筛选
    valueEnum: {
      user: { text: '普通用户' },
      admin: { text: '管理员' },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
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
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
    ],
  },
];

//组件
export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        //await waitTime(2000);
        const userList = await searchUsers();
        return {
          data: userList,
        };
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
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="用户列表"
    />
  );
};
