// component หน้า resort หลัง filter
import React, { Component } from 'react'
import FilterResortItem from './FilterResortItem';
import { Button,Modal } from 'antd';
import Resort from './Resort';
class FilterPageResort extends Component{
    renderResortItem = []
    state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.next()
    
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
    constructor(props) {
        super(props);
        this.state={
            resorts : [{
                name:'เคียงทะเล',
                img0:'resort1-1.jpg',
                img:['resort1-1.jpg','resort1-2.jpg','resort1-3.jpg']
            },{
                name:'บ้านรักทะเล',
                img0:'resort2-1.jpg',
                img:['resort2-1.jpg','resort2-2.jpg','resort2-3.jpg']
            },{
                name:'พาราไดซ์',
                img0:'resort3-1.jpg',
                img:['resort3-1.jpg']
            }]
        }

        for(let i=0;i<this.state.resorts.length;i++){
            this.renderResortItem.push(
                <FilterResortItem key={i} data={this.state.resorts[i]} next={this.showModal} next2={this.props.next2}></FilterResortItem>
            )
        }
    }
    
    render(){
        return(
            <div style={{margin:'auto'}}>
                <Modal
          title="รีสอร์ท..."
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Resort></Resort>
        </Modal>
                { this.renderResortItem }
            </div>
        )
    }

}
export default FilterPageResort