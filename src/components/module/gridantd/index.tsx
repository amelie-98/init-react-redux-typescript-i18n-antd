/* eslint-disable object-curly-newline */
import React from 'react';
import { Form, Row, Col, Select, Input } from 'antd';

const { Option } = Select;

const GridAntd = () => {
  const [form] = Form.useForm();
  const handelFormSubmit = (values: any) => {
    console.log(values);
  };
  const onFormChangeValue = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ padding: 10 }}>
      <Col>
        <h1>Thiết Lập</h1>
      </Col>

      <Row style={{ padding: 10 }}>
        <Col className="gutter-row" span={16}>
          <Row>
            {/* form 1 */}
            <Form
              layout="horizontal"
              labelAlign="left"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 10 }}
              form={form}
              onFinish={handelFormSubmit}
              onValuesChange={onFormChangeValue}
            >
              <Col className="gutter-row" span={12}>
                <span style={{ marginRight: 20 }}>Hiển thị trên số :</span>

                <Form.Item name="select1">
                  <Select defaultValue="lucy" style={{ width: 300, borderRadius: 5 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Form>
            {/* form 1 */}

            {/* form 2 */}
            <Form
              layout="horizontal"
              labelAlign="left"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 10 }}
              form={form}
              onFinish={handelFormSubmit}
              onValuesChange={onFormChangeValue}
            >
              <Col className="gutter-row" span={12}>
                <Row>
                  <Col className="gutter-row">
                    <span style={{ marginRight: 20 }}>Loại tiền :</span>
                    <Form.Item name={['select2', 'test1', 'test2']}>
                      <Select defaultValue="VND" style={{ width: 100, borderRadius: 5 }}>
                        <Option value="jack">VND</Option>
                        <Option value="lucy">USD</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col className="gutter-row" style={{ marginLeft: 20 }}>
                    <span style={{ marginRight: 20 }}>Tỷ Giá :</span>
                    <Form.Item name="input1">
                      <Input value="1.00" style={{ width: 100, borderRadius: 5 }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Form>
            {/* form 2 */}
          </Row>
        </Col>

        <Col>
          <button type="button" onClick={() => form.submit()}>
            submit
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default GridAntd;
