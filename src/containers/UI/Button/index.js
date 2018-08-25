import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import {
  Button,
  Row,
  Col,
  Card,
  Tooltip,
} from 'antd';
import PageHeader from 'components/PageHeader';

const { Component, Fragment } = React;

const input = `
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>`

const content = () => {
  return (
    <Fragment>
      <Row gutter="8">
        <Col span="12">
          <Card
            title="按钮基础类型"
            extra="button-components-props === type"
          >
            <Row>
              <Col span="6">
                <Tooltip
                  title="type='primary'"
                  placement="top"
                >
                  <Button type='primary'>主按钮</Button>
                </Tooltip>
              </Col>
              <Col span="6">
                <Tooltip
                  title="type='defalut'"
                  placement="top"
                >
                  <Button type='defalut'>次按钮</Button>
                </Tooltip>
              </Col>
              <Col span="6">
                <Tooltip
                  title="type='defalut'"
                  placement="top"
                >
                  <Button type='defalut'>次按钮</Button>
                </Tooltip>
              </Col>
              <Col span="6">
                <Tooltip
                  title="type='danger'"
                  placement="top"
                >
                  <Button type="danger">危险按钮</Button>
                </Tooltip>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span="12">
          <Card
            title="相关代码"
          >
            <ReactMarkdown source={input} />
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

/**
 * @description 按钮
 */
export default class Btn extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader
          breadcrumbList={[{}]}
          content={
            content()
          } />
      </Fragment>
    )
  }
}
