import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Button, Row, Col, Card, Tooltip, Popover, Collapse, message } from 'antd';
import PageHeader from 'components/PageHeader';
import { globalCardProps } from 'globleConfig';

const { Component, Fragment } = React;
const { Panel } = Collapse;
const ButtonGroup = Button.Group;

const ButtonProps = {
  disabled: false,
  ghost: false,
  href: 'String',
  htmlType: 'button',
  icon:'-',
  loading: false,
  shape: 'circle',
  size: 'small',
  target: 'String',
  type: 'primary',
  onClick: function () {

  },
  block: true,
}


const BasicButton = () => {
  const input = `
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>`;

  return (
    <Row gutter="8">
      <Col span="24">
        <Card
          {...globalCardProps}
          title="按钮基础类型"
          extra={
            <Popover title="type" content="button-components-props === type">
              属性
            </Popover>
          }
        >
          <Collapse bordered={false}>
            <Panel
              header={
                <Row>
                  <Col offset={2} span="4">
                    <Tooltip title="type='primary'" placement="top">
                      <Button type="primary">主按钮</Button>
                    </Tooltip>
                  </Col>
                  <Col offset={2} span="4">
                    <Tooltip title="type='defalut'" placement="top">
                      <Button type="defalut">次按钮</Button>
                    </Tooltip>
                  </Col>
                  <Col offset={2} span="4">
                    <Tooltip title="type='dashed'" placement="top">
                      <Button type="dashed">虚线按钮</Button>
                    </Tooltip>
                  </Col>
                  <Col offset={2} span="4">
                    <Tooltip title="type='danger'" placement="top">
                      <Button type="danger">危险按钮</Button>
                    </Tooltip>
                  </Col>
                </Row>
              }
              key="1"
            >
              <ReactMarkdown source={input} />
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

const IconButton = () => {
  const input = `<Button type="primary" shape="circle" icon="search"/>

  <Button type='primary' icon="search">搜索</Button>`;

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
            <Panel
              header={
                <Row>
                  <Col offset="4" span="8">
                    <Tooltip title="type='primary'" placement="top">
                      <Button shape="circle" type="primary" icon="search" />
                    </Tooltip>
                  </Col>

                  <Col offset="4" span="8">
                    <Tooltip title="type='primary'" placement="top">
                      <Button type="primary" icon="search">
                        搜索
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              }
              key="1"
            >
              <ReactMarkdown source={input} />
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

const SizeButton = () => {
  const input = `
      <Button type="primary" icon="search" size="large">
          大号
      </Button>
      <Button type="primary" icon="search" size="default">
          默认
      </Button>
      <Button type="primary" icon="search" size="small">
          小号
      </Button>`;

  return (
    <Row gutter="8">
      <Col span="24">
        <Card
          {...globalCardProps}
          title="按钮尺寸"
          extra={
            <Popover
              title="size"
              content="button-components-props === size"
            >
              属性
            </Popover>
          }
        >
          <Collapse bordered={false}>
            <Panel
              header={
                <Row>
                  <Col offset="2" span="6">
                    <Tooltip title="type='primary'" placement="top">
                      <Button type="primary" icon="search" size="large">
                        大号
                      </Button>
                    </Tooltip>
                  </Col>

                  <Col offset="2" span="6">
                    <Tooltip title="type='primary'" placement="top">
                      <Button type="primary" icon="search" size="default">
                        默认
                      </Button>
                    </Tooltip>
                  </Col>

                  <Col offset="2" span="6">
                    <Tooltip title="type='primary'" placement="top">
                      <Button type="primary" icon="search" size="small">
                        小号
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              }
              key="1"
            >
              <ReactMarkdown source={input} />
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

const DisabledButton = () => {
  const input = `
      <Button disabled={false}>
          可以点击
      </Button>
      <Button disabled={true}>
          不可点击
      </Button>`;

  return (
    <Row gutter="8">
      <Col span="24">
        <Card
          {...globalCardProps}
          title="按钮可否点击"
          extra={
            <Popover
              title="size"
              content="button-components-props === disabled"
            >
              属性
            </Popover>
          }
        >
          <Collapse bordered={false}>
            <Panel
              header={
                <Row>
                  <Col offset="4" span="8">
                    <Tooltip title="disabled={false}'" placement="top">
                      <Button disabled={false} onClick={function () { (function () { message.info('我是被"可以点击"按钮点击的') })()}}>
                          可以点击
                      </Button>
                    </Tooltip>
                  </Col>

                  <Col offset="4" span="8">
                    <Tooltip title="disabled={true}" placement="top">
                      <Button disabled={true} >
                          不可点击
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              }
              key="1"
            >
              <ReactMarkdown source={input} />
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

const LoadingButton = () => {
  const input = `
      <Button loading={true}>
          loading ...
      </Button>
      <Button loading={false}>
          no loading ...
      </Button>`;

  return (
    <Row gutter="8">
      <Col span="24">
        <Card
          {...globalCardProps}
          title="按钮加载中"
          extra={
            <Popover
              title="size"
              content="button-components-props === loading"
            >
              属性
            </Popover>
          }
        >
          <Collapse bordered={false}>
            <Panel
              header={
                <Row>
                  <Col offset="4" span="8">
                    <Tooltip title="loading={false}'" placement="top">
                        <Button loading={true}>
                            loading ...
                        </Button>
                    </Tooltip>
                  </Col>

                  <Col offset="4" span="8">
                    <Tooltip title="loading={true}" placement="top">
                      <Button loading={false} >
                          no loading
                      </Button>
                    </Tooltip>
                  </Col>
                </Row>
              }
              key="1"
            >
              <ReactMarkdown source={input} />
            </Panel>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

const GroupButton = () => {
  const input = `
  <ButtonGroup>
    <Button>
      按
    </Button>
    <Button>
      钮
    </Button>
  </ButtonGroup>`;
  return (
    <Row gutter="8">
      <Col span="24">
        <Card
          {...globalCardProps}
          title="按钮组"
          extra={
            <Popover
              title="size"
              content="button-components-props === loading"
            >
              属性
            </Popover>
          }
        >
          <Collapse bordered={false}>
            <Panel
              header={
                <Row>
                  <Col offset="4" span="8">
                    <Tooltip title="loading={false}'" placement="top">
                      <ButtonGroup>
                        <Button>
                           按
                        </Button>
                        <Button>
                           钮
                        </Button>
                      </ButtonGroup>
                    </Tooltip>
                  </Col>
                </Row>
              }
              key="1"
            >
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
      {BasicButton()}
      {IconButton()}
      {SizeButton()}
      {DisabledButton()}
      {LoadingButton()}
      {GroupButton()}
    </Fragment>
  );
};

/**
 * @description 按钮
 */
export default class oButton extends Component {

  render() {
    return (
      <Fragment>
        <PageHeader breadcrumbList={[{}]} content={content()} />
      </Fragment>
    );
  }
}
