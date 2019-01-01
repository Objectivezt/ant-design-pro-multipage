import React, { Component,Fragment } from 'react';
import {
  Card,
  Row,
  Col,
  Tree,
  Input,
} from 'antd';
import PageHeader from 'components/PageHeader';
import {
  globalCardProps,
} from 'globalConfig';

const { TreeNode } = Tree;
const {Search} = Input;
const treeData = [{
  title: '全选',
  key: 'all',
  children: [{
    title: '查询岗',
    key: 'search',
  }, {
    title: '复合岗',
    key: 'check',
  }, {
    title: '提交岗',
    key: 'submit',
  }, {
    title: 'A岗位',
    key: 'A',
  }, {
    title: 'B岗位',
    key: 'B',
  }, {
    title: 'C岗位',
    key: 'C',
  }, {
    title: 'D岗位',
    key: 'D',
  }, {
    title: 'E岗位',
    key: 'E',
  }],
}];

const gData = [];

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i+=1 ) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i+=1) {
    const node = data[i];
    const { key } = node;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children, node.key);
    }
  }
};
// generateList(gData);

class RequestAuth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedKeys: [],
      selectedKeys: [],
    }
  }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }

  onChange = (e) => {
    const {value} = e.target;
    const expandedKeys = dataList.map((item) => {
      if (item.title.indexOf(value) > -1) {
        return getParentKey(item.key, gData);
      }
      return null;
    }).filter((item, i, self) => item && self.indexOf(item) === i);
    this.setState({
      // expandedKeys,
      // searchValue: value,
    });
  }

  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  }

  render() {
    return (
      <Fragment>
        <PageHeader
          breadcrumbList={[{}]}
          content={
            <Row>
            <Col span="11">
              <Card
                {...globalCardProps}
                title="角色权限申请"
              >
                <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={this.onChange} />
                <Tree
                  defaultExpandAll="true"
                  showLine="true"
                  draggable="true"
                  checkable
                  autoExpandParent="true"
                  onCheck={this.onCheck}
                  checkedKeys={this.state.checkedKeys}
                  onSelect={this.onSelect}
                  selectedKeys={this.state.selectedKeys}
                >
                  {this.renderTreeNodes(treeData)}
                </Tree>
              </Card>
            </Col>
            <Col span="1">{}</Col>
            <Col span="11">
              <Card
                {...globalCardProps}
                title="用户组权限申请"
              >
                123
              </Card>
            </Col>
            <Col span="1">{}</Col>
          </Row>
          }
        />
      </Fragment>
    );
  }
}

export default RequestAuth;
