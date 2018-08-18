import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Card,
  Icon,
  Row,
  Col,
  Table,
} from 'antd';
import PageHeader from 'components/PageHeader';
import {
  globalCardProps,
  globalRowProps,
  globalColProps,
  globalTableProps,
} from 'globleConfig';
import styles from '../../styles/Home/backlog.less';

const { Meta } = Card;

const tableColumnsProp = [
  {
    title: "用户编号",
    dataIndex: 'userId',
    key: 'userId',
    align: 'center',
  },
];

const BacklogCardRender = (item) =>{
  return (
      <Card
        {...globalCardProps}
        actions={
          [
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />
          ]
        }>
        <Meta
          title={item.num}
          className={styles.cardMate}
          description={item.description}
        />
      </Card>
  )
}

const TableRender = () => {
  return (
    <Table
    {...globalTableProps}
    columns={tableColumnsProp}
    />
  )
}
/**
 * @description 待办
 */
@connect(({ backlogModel }) => ({ backlogModel }))
class Backlog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardList: [
        {
          num: '0',
          description:'全部待办'
        }
      ],
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'backlogModel/filterList',
    })
  }

  render() {
    const { backlogModel } = this.props;
    const { cardList } = backlogModel;
    return (
      <Fragment>
        <PageHeader
          breadcrumbList={[{}]}
          content={
            <Fragment>
              <Row {...globalRowProps}>
                {
                  cardList.map((item, index) => (
                    <Col {...globalColProps} key={index}>
                      {BacklogCardRender(item)}
                    </Col>
                  ))
                }
              </Row>
              {TableRender()}
            </Fragment>
          } />
      </Fragment>
    )
  }
}

export default Backlog;
