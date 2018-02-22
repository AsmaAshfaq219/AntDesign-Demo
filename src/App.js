import React, { Component } from 'react';
import './App.css';
import { Button, Card, Col, Row } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Hope its working</Button>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default App;
