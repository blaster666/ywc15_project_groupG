// component หน้า bus หลัง filter
import React, { Component } from 'react'
import FilterBusItem from './FilterBusItem';
import { Button,Modal } from 'antd';
import Bus from './Bus';

class FilterPageBus extends Component{
    renderBusItem = []
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
        this.state = {
            bus : [{
                name:'สุรศักดิ์',
                img:'bus1-1.png',
                
            },{
                name:'ตะวันคลับ',
                img:'bus2.jpg',
            },{
                name:'คอนเฟิร์มทัวร์',
                img:'bus3.png',
            }]
        }
        for(let i=0;i<this.state.bus.length;i++){
            this.renderBusItem.push(
                <FilterBusItem key={i} data={this.state.bus[i]} back={this.props.back} next={this.showModal} next2={this.props.next2}></FilterBusItem>
            )
        }
    }

    render(){
        return(
            <div style={{margin:'auto'}}>
                <Modal
          title="รถบัส"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <Bus/>
        </Modal>
                {this.renderBusItem}
                <Button type="primary" style={{width:'100%',marginTop:'20px'}} onClick={this.props.back}>Back</Button>
            </div>
        )
    }

}
export default FilterPageBus