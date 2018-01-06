import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, Checkbox,Modal } from 'antd';
import { Select } from 'antd';
import SearchBar from './SearchBar';

const Option = Select.Option;
class SearchBar1 extends Component{
    
    state = { visible: false,visible2: false }
    constructor(props) {
        super(props);
      }
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
        this.setState({
            visible2: true,
          });
      }
      handleOk2 = (e) => {
        console.log(e);
        this.setState({
          visible2: false,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
          visible2:false
        });
      }
    render(){
        return(
            <div>
        <Modal
          title="ต้องการอะไรบ้าง?"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>ที่พัก + รถ</div>
          <div>ที่พัก</div>
          <div>รถ</div>
        </Modal>
        <Modal
          title="ต้องการอะไรบ้าง?"
          visible={this.state.visible2}
        //   onOk={this.handleOk2}this.props.next
          onOk={this.props.next}
          onCancel={this.handleCancel}
        >
          <SearchBar changefilter_Number={this.changefilter_Number}
          changefilter_Bus_date_going={this.changefilter_Bus_date_going}
          changefilter_Bus_GoBack={this.changefilter_Bus_GoBack}/>
        </Modal>
     
                <div>
                    <div style={{width:"60%", margin:"auto"}}>
                    <center>
                        <Input placeholder="เลือกสถานที่" style={{width:'100px',margin:'auto'}}></Input>
                    </center>
                    </div>
                    <br />

                    <div style={{width:"60%", margin:"auto"}}>
                    <Input placeholder="Money" size="large" onChange={(e) => 
                            { this.props.changeBudget(e.target.value); }}></Input>
                    </div>
                    
                    
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary" onClick={this.showModal}>ต่อไป</Button>
                </div>
                </div>
                
            </div>
        )
    }

}
export default SearchBar1