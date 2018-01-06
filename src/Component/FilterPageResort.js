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
                name:'asdasdasd',
                a:'asdasdasd',
                b:'asdasdasd'
            },{
                name:'kkkkkk',
                a:'kkkkkk',
                b:'kkkkkk'
            },{
                name:'llllllll',
                a:'llllllll',
                b:'llllllll'
            },{
                name:'asdasdasd',
                a:'asdasdasd',
                b:'asdasdasd'
            },{
                name:'kkkkkk',
                a:'kkkkkk',
                b:'kkkkkk'
            },{
                name:'llllllll',
                a:'llllllll',
                b:'llllllll'
            },{
                name:'asdasdasd',
                a:'asdasdasd',
                b:'asdasdasd'
            },{
                name:'kkkkkk',
                a:'kkkkkk',
                b:'kkkkkk'
            },{
                name:'llllllll',
                a:'llllllll',
                b:'llllllll'
            }]
        }

        for(let i=0;i<this.state.resorts.length;i++){
            this.renderResortItem.push(
                <FilterResortItem key={i} data={this.state.resorts[i]} next={this.showModal}></FilterResortItem>
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