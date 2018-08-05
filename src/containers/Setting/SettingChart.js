import React, { Component } from 'react';
import { Tooltip, Icon, Layout } from 'antd';
import { ChartCard } from 'components/Charts';
import ReactDataSheet from 'react-datasheet';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-datasheet/lib/react-datasheet.css';

const { Content, Sider } = Layout;
export default class componentName extends Component {
  state = {
    collapsed: false,
    grid: [
      [{ value: 1 }, { value: 3 }],
      [{ value: 2 }, { value: 4 }],
    ],
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    const grid = [
      [{ value: 5, expr: '1 + 4' }, { value: 6, expr: '6' }, { value: new Date('2008-04-10') }],
      [{ value: 5, expr: '1 + 4' }, { value: 5, expr: '1 + 4' }, { value: new Date('2004-05-28') }],
    ]
    const onCellsChanged = (changes) => changes.forEach(({ cell, row, col, value }) => console.log("New expression :" + value))

    return (
      <div>
        <ReactDataSheet
          data={this.state.grid}
          valueRenderer={(cell) => cell.value}
          onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row])
            changes.forEach(({ cell, row, col, value }) => {
              grid[row][col] = { ...grid[row][col], value }
            })
            this.setState({ grid })
          }}
        />
        <ReactDataSheet
          data={grid}
          valueRenderer={(cell, i, j) => j == 2 ? cell.value.toDateString() : cell.value}
          dataRenderer={(cell, i, j) => j == 2 ? cell.value.toISOString() : cell.expr}
          onCellsChanged={onCellsChanged}
        />
        <ChartCard
          bordered={false}
          title="编辑表单"
          action={
            <Tooltip title="动态配置表单结构">
              <Icon type="info-circle-o" />
            </Tooltip>
          }
        >

        </ChartCard>
      </div>
    )
  }
}
