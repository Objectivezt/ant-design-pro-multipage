import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import {
  Button,
  Row,
  Col,
  Card,
  Tooltip,
  Popover,
  Collapse,
} from 'antd';
import PageHeader from 'components/PageHeader';
import { globalCardProps } from 'globleConfig';

const { Component, Fragment } = React;
const Panel = Collapse.Panel;

const BasicBtn = () => {
  const input = `
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>`

  return (
    <Row gutter="8">
      <Col span="24">
        <Card
          {...globalCardProps}
          title="按钮基础类型"
          extra={
            <Popover
              title="type"
              content="button-components-props === type"
            >
              属性
            </Popover>
          }
        >
          <Collapse bordered={false}>
            <Panel header={
                <Row>
                  <Col offset={2} span="4">
                    <Tooltip
                      title="type='primary'"
                      placement="top"
                    >
                      <Button type='primary'>主按钮</Button>
                    </Tooltip>
                  </Col>
                  <Col offset={2} span="4">
                    <Tooltip
                      title="type='defalut'"
                      placement="top"
                    >
                      <Button type='defalut'>次按钮</Button>
                    </Tooltip>
                  </Col>
                  <Col offset={2} span="4">
                    <Tooltip
                      title="type='dashed'"
                      placement="top"
                    >
                      <Button type='dashed' >虚线按钮</Button>
                    </Tooltip>
                  </Col>
                  <Col offset={2} span="4">
                    <Tooltip
                      title="type='danger'"
                      placement="top"
                    >
                      <Button type="danger">危险按钮</Button>
                    </Tooltip>
                  </Col>
                </Row>
            } key="1">
              <ReactMarkdown source={input} />
            </Panel>
          </Collapse>
         </Card>
      </Col>
    </Row>
  )
}

const IconBtn = () => {
  const input = `
  <Button type="primary" shape="circle" icon="search" />
  <Button type='primary' icon="search">搜索</Button>`

  return (
    <Row gutter="8">
      <Col span="24">
        <Card
          {...globalCardProps}
          title="图标按钮"
          extra={
            <Popover
              title="icon,shape"
              content="button-components-props === type,
              button-components-props === shape"
            >
              属性
            </Popover>
          }
        >
          <Collapse bordered={false}>
            <Panel header={
              <Row>
                <Col offset="4" span="8">
                  <Tooltip
                    title="type='primary'"
                    placement="top"
                  >
                    <Button shape="circle" type='primary' icon="search"></Button>
                  </Tooltip>
                </Col>

                <Col offset="4" span="8">
                  <Tooltip
                    title="type='primary'"
                    placement="top"
                  >
                    <Button type='primary' icon="search">搜索</Button>
                  </Tooltip>
                </Col>
              </Row>
            } key="1">
              <ReactMarkdown source={input} />
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  )
}

const content = () => {
  return (
    <Fragment>
      {
        BasicBtn()
      }
      {
        IconBtn()
      }
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
