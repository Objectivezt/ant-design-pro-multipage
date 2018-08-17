import React, { Component, Fragment } from 'react';
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

class Backlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      cardlist: [
        {
          num: '1',
          description:'全部待办'
        },
        {
          num: '0',
          description:'XX待办'
        },
        {
          num: '2',
          description:'XXX待办'
        }
      ]
    }
  }

  TableRender(){
    return (
      <Table
      {...globalTableProps}
      columns={tableColumnsProp}
      />
    )
  }

  BacklogCardRender(item){
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

  render() {
    const { cardlist } = this.state;
    return (
      <Fragment>
        <PageHeader
          breadcrumbList={[{}]}
          content={
            <Fragment>
              <Row {...globalRowProps}>
                {
                  cardlist.map((item, index) => (
                    <Col {...globalColProps} key={index}>
                      {this.BacklogCardRender(item)}
                    </Col>
                  ))
                }
              </Row>
              {this.TableRender()}
            </Fragment>
          } />
      </Fragment>
    )
  }
}

export default Backlog;


