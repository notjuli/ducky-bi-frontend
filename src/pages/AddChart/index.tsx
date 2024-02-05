import { genChartByAiUsingPOST } from '@/services/julii/chartController';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Row, Select, Space, Spin, Upload, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import ReactECharts from 'echarts-for-react';
import React, { useState } from 'react';

/**
 * 添加图表页面
 * @constructor
 */
const AddChart: React.FC = () => {
  const [chart, setChart] = useState<API.BiResponse>();
  const [option, setOption] = useState<any>();
  const [submitting, setSubmitting] = useState<boolean>(false);

  /**
   * 提交
   * @param values
   */
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);
    setChart(undefined);
    setOption(undefined);
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const res = await genChartByAiUsingPOST(params, {}, values.file.file.originFileObj);
      if (!res?.data) {
        message.error('分析失败');
      } else {
        message.success('分析成功');
        const chartOption = JSON.parse(res.data.genChart ?? '');
        if (!chartOption) {
          throw new Error('图表代码解析错误');
        } else {
          // 分析成功的数据
          setChart(res?.data);
          setOption(chartOption);
        }
      }
    } catch (e: any) {
      message.error('分析失败' + e.message);
    }
    setSubmitting(false); // 无论失败还是成功都要false
  };

  return (
    <div className="add-chart">
      <Row gutter={24}>
        <Col span={12}>
          <Card title="智能分析">
            <Form
              name="addChart"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 19 }}
              onFinish={onFinish}
              initialValues={{}}
              style={{ maxWidth: 600 }}
            >
              <Form.Item name="goal" label="分析目标" rules={[{ required: true }]}>
                <TextArea placeholder="请输入您的分析目标，如：分析网站用户的增长情况" />
              </Form.Item>

              <Form.Item name="name" label="图表名称">
                <TextArea placeholder="请输入图表名称" />
              </Form.Item>

              <Form.Item name="chartType" label="图表类型" rules={[{ required: true }]}>
                <Select
                  options={[
                    { value: '折线图', label: '折线图' },
                    { value: '柱状图', label: '柱状图' },
                    { value: '堆叠图', label: '堆叠图' },
                    { value: '饼图', label: '饼图' },
                    { value: '雷达图', label: '雷达图' },
                  ]}
                />
              </Form.Item>

              <Form.Item name="file" label="原始数据" rules={[{ required: true }]}>
                <Upload name="file">
                  <Button icon={<UploadOutlined />}>上传数据文件</Button>
                </Upload>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 12, offset: 4 }}>
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loding={submitting}
                    disabled={submitting}
                  >
                    提交
                  </Button>
                  <Button htmlType="reset">重置</Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="分析结论">
            {submitting ? (
              <Spin spinning={true} />
            ) : (
              <>{chart?.genResult ?? <div>请先在左侧进行提交</div>}</>
            )}
          </Card>
          <Card title="可视化图表">
            {submitting ? (
              <Spin spinning={true} />
            ) : (
              <>{option ? <ReactECharts option={option} /> : <div>请先在左侧进行提交</div>}</>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default AddChart;
