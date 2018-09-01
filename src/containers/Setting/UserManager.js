import React, { Component,Fragment } from 'react';
import {
  Card,
  Table,
  Form,
  Row,
  Col,
  Select,
  Button,
  Tooltip,
} from 'antd';
import {
  globalCardProps,
  globalFormItemLayout,
  globalTableProps,
  defaultSelect,
  globalDefineListSize,
} from 'globleConfig';
import PageHeader from 'components/PageHeader';
import { connect } from 'dva';

const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const { Option } = Select;
const tableColumnsProp = [
  {
    title: "用户编号",
    dataIndex: 'userId',
    key: 'userId',
    align: 'center',
  },
  {
    title: "用户名",
    dataIndex: 'username',
    key: 'username',
    align: 'center',
  },
  {
    title: "性别",
    dataIndex: 'male',
    key: 'male',
    align: 'center',
  },
  {
    title: "角色",
    dataIndex: 'role',
    key: 'role',
    align: 'center',
  },
  {
    title: "邮箱",
    dataIndex: 'email',
    key: 'email',
    align: 'center',
  },
  {
    title: "联系方式",
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
  },
  {
    title: "状态",
    dataIndex: 'status',
    key: 'status',
    align: 'center',
  },
];

const filterListObj = {
  user: null,
  pageNum: 1,
  pageSize: 10,
}

class UserManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...filterListObj,
    }
  }

  componentDidMount() {
    this.basePageRequest();
  }

  basePageRequest = () => {
    this.props.dispatch({
      type:'userManagerModel/filterList',
      payloadMain:globalDefineListSize,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleReset = (e) => {
    e.preventDefault();
    this.props.form.resetField();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { pageNum } = this.state;
    const { loading, userManagerModel } = this.props;
    const { resTotal,resList } = userManagerModel;
    return (
      <Fragment>
        <PageHeader
          breadcrumbList={[{}]}
          content={
            <Fragment>
              <Card
                {...globalCardProps}
                title="信息筛选"
              >
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col span={16}>
                      <FormItem label="账户名" {...globalFormItemLayout}>
                        {
                          getFieldDecorator('abc')(
                            <Select {...defaultSelect}>
                              <Option key={123}>123</Option>
                            </Select>
                          )
                        }
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <ButtonGroup>
                        <Button type="primary" icon="search" htmlType="submit">
                          查询
                        </Button>
                        <Button type="danger" icon="reload" onClick={this.handleReset}>
                          重置
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </Form>
              </Card>
              <Card
              {...globalCardProps}
              title="信息列表"
            >
              <Tooltip  >
                <Table
                  {...globalTableProps}
                  columns={tableColumnsProp}
                  dataSource={resList}
                  loading={loading}
                  pagination={{
                    current:pageNum,
                    total: resTotal,
                  }}
                />
              </Tooltip>
            </Card>
          </Fragment>
          }
        />
      </Fragment>
    )
  }
}

export default Form.create()(connect(({ userManagerModel,loading }) => ({
  userManagerModel,
  loading:loading.effects['userManagerModel/filterList'],
}))(UserManager));




