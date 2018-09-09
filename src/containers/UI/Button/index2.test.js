import React, { Component } from 'react';
import { render, mount } from 'enzyme';
import { Button } from 'antd';

describe('Button', () => {
  it('按钮测试', () => {
    const wrapper = render(
      <Button>测试</Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('测试加载中', () => {
    class DefaultButton extends Component {
      state = {
        loading: false,
      };
      enterLoading = () => {
        this.setState({ loading: true });
      }
      render() {
        return <Button loading={this.state.loading} onClick={this.enterLoading}>Button</Button>;
      }
    }
    const wrapper = mount(
      <DefaultButton />
    );
    wrapper.simulate('click');
    expect(wrapper.find('.ant-btn-loading').length).toBe(1);
  });
})
