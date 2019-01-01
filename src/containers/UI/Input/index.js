import React, { Component,Fragment } from 'react'
import { Input } from 'antd';
import PageHeader from 'components/PageHeader';
import { globalCardProps } from 'globalConfig';

const inputProps = {
  addonBefore : 'String',
  addonAfter : 'String',
  defaultValue : 'String',
  disabled:false,
  id:'String',
  prefix:'String',
  suffix:'String',
  size:'small',
  type:'input',
  value : 'String',
  onPressEnter :  () =>{ },
}

const InputTextAreaProps = {
  autosize: {},
  defaultValue : 'String',
  value : 'String',
  onPressEnter :  () =>{ },
}

const InputSearchProps = {
  enterButton: false,
  onSearch: (value, e) => {
  }
}

const InputGroupProps = {
  compact: false,
  size:'large',
}

const BasicInput = () => {
  return
}

const TextAreaInput = () => {
  return
}

const SearchInput = () => {
  return
}

const GroupInput = () => {
  return
}

const content = () => {
  return (
    <Fragment>
      {BasicInput()}
      {TextAreaInput()}
      {SearchInput()}
      {GroupInput()}
    </Fragment>
  )
}

export default class oInput extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader breadcrumbList={[{}]} content={content()} />
      </Fragment>
    );
  }
}
