/* eslint-disable object-curly-newline */
import React from 'react';
import { Row, Col, Select, Input } from 'antd';

const { Option } = Select;

const GridAntd = () => (
  // block 1
  <div style={{ padding: 10 }}>
    <Col>
      <h1>Thiết Lập</h1>
    </Col>

    <Row style={{ padding: 10 }}>
      <Col className="gutter-row" span={16}>
        <Row>
          <Col className="gutter-row" span={12}>
            <span style={{ marginRight: 20 }}>Hiển thị trên số :</span>

            <Select defaultValue="lucy" style={{ width: 300, borderRadius: 5 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>

          <Col className="gutter-row" span={12}>
            <Row>
              <Col className="gutter-row">
                <span style={{ marginRight: 20 }}>Loại tiền :</span>
                <Select defaultValue="VND" style={{ width: 100, borderRadius: 5 }}>
                  <Option value="jack">VND</Option>
                  <Option value="lucy">USD</Option>
                </Select>
              </Col>

              <Col className="gutter-row" style={{ marginLeft: 20 }}>
                <span style={{ marginRight: 20 }}>Tỷ Giá :</span>
                <Input value="1.00" style={{ width: 100, borderRadius: 5 }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default GridAntd;
