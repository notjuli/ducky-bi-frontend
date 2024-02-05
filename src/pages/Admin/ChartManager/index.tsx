import { listChartByPageUsingPOST } from '@/services/julii/chartController';
import { useModel } from '@umijs/max';
import { Card, List, message } from 'antd';
import Search from 'antd/es/input/Search';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

/**
 * 我的图表页面
 * @constructor
 *
 * @author Julii
 */
const AllChartPage: React.FC = () => {
  // 从全局状态中获取到当前用户的信息
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};

  // searchParams中的参数初始条件，提取出来便于后面恢复初始条件
  const initSearchParams = {
    current: 1, // 默认第一页
    pageSize: 10, // 每页展示四条数据
    sortField: 'createTime',
    sortOrder: 'desc',
  };

  // 要发送给后端的查询条件，在listMyChartByPageUsingPOST中可查看。这里是initSearchParams初始化搜索条件，后面的搜索条件更新时需要重置为它
  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({ ...initSearchParams });

  // 存获取到的图表数据，类型为数据的返回值Chart
  const [chartList, setChartList] = useState<API.Chart>();

  // 因为是分页，需要拿到数据总数，类型为number,初始化为0
  const [total, setTotal] = useState<number>(0);

  // 加载状态，用来控制页面是否加载，默认为正在加载
  const [loading, setLoading] = useState<boolean>(true);

  const lodeData = async () => {
    // 获取数据中，页面还在加载中
    setLoading(true);

    // 要使用await语法就要使用async，await就是把异步变成同步，等后端返回结果之后才会执行后面的代码
    try {
      const res = await listChartByPageUsingPOST(searchParams);
      if (res.data) {
        // 获取数据成功后，将数据展示到前端，还需要一个定义变量来存图表数据
        setChartList(res.data.records ?? []); // 因为是数据列表，所以拿到records，数据为空，则传一个空数组
        // 数据总数
        setTotal(res.data.total ?? 0); // 为空的话为0
      } else {
        message.error('获取图表失败');
      }
    } catch (e: any) {
      message.error('获取所有图表失败' + e.message);
    }

    // 数据加载完毕
    setLoading(false);
  };

  // 在React首次页面渲染的时候以及数组中一些变量发生变化的时候触发加载数据
  useEffect(() => {
    lodeData();
  }, [searchParams]); // 这里添加一个依赖，搜索条件searchParams发生改变时，可以自动触发重新搜索

  return (
    <div className="my-chart-page">
      {/*搜索框*/}
      <div>
        <Search
          placeholder="请输入图表名称"
          enterButton
          loading={loading}
          onSearch={(value) => {
            // 设置搜索条件为原始搜索条件
            setSearchParams({
              ...initSearchParams, // 搜索条件
              name: value, // 搜索词
            });
          }}
        ></Search>
      </div>
      <div className="margin-16" />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        pagination={{
          onChange: (page, pageSize) => {
            // 当切换分页，在当前偶所条件的基础上，把页数调整为当前的页数
            setSearchParams({
              ...searchParams,
              current: page,
              pageSize,
            });
          },
          current: searchParams.current, // 当前页数
          pageSize: searchParams.pageSize, // 页面参数
          total: total, // 页面总数
        }}
        loading={loading}
        dataSource={chartList}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card style={{ width: '100%' }}>
              <List.Item.Meta
                // avatar={<Avatar src={item.userid} />}
                title={'ID:' + item.id}
                date={item.createTime}
                description={
                  item.chartType
                    ? '图表名称：' + item.name + '  图表类型：' + item.chartType
                    : undefined
                }
              />
              <div style={{ marginBottom: 16 }} />
              <p>{'分析目标：' + item.goal}</p>
              <div style={{ marginBottom: 16 }} />
              <ReactECharts option={item.genChart && JSON.parse(item.genChart ?? '')} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default AllChartPage;
