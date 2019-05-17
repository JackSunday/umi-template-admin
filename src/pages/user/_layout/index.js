import React from 'react'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    const {children} = this.props.children.props
    return(
      <div>
        <div>我是layout</div>
        <div>{children}</div>
      </div>
    )
  }
}