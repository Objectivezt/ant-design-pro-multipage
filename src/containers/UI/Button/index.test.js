import React, { Fragment } from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
// import * as OButton from './index';
import Enzyme, { mount,shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
class Btn extends React.Component {
  render() {
    return (<Row>
      <Col offset={2} span="4">
        <Tooltip title="type='primary'" placement="top">
          <Button type="primary" id="primary">主按钮</Button>
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
    </Row>)
  }
}

describe('<Btn />', () => {
  it('renders Button components', () => {
    const wrapper = shallow(<Btn/>);
    expect(wrapper.find('#primary').simulate('click'));
  })
});
