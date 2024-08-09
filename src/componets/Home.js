import React from 'react'
import { Menu } from 'antd'
import ShowcaseLayout from './MyResponsiveGrid'
import GridStackComponent from './MyGridStack'


export default class Home extends React.Component {
  state = {
    current: '1',
  }

  menus = [
    {
      label: 'React-Grid-Layout',
      key: '1',
    },
    {
      label: 'Grid-Stack',
      key: '2',
    },
  ]

  click = ({ key }) => {
    this.setState({current: key })
  }

  render() {
    return <div>
      <Menu onClick={this.click} selectedKeys={[this.state.current]} mode="horizontal" items={this.menus} />
      {
        this.state.current === '1' ? <ShowcaseLayout/> : <GridStackComponent/>
      }
    </div>
  }
}
