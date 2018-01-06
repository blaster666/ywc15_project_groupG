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
          cancelText="ย้อนกลับ"
          okText="ต่อไป"
        >
          <div>
            <center>
            <div style={{display:'inline-block',marginRight:'30px'}}>
                <div style={{display:'inline-block',marginRight:'10px'}}>
                    <Checkbox checked></Checkbox>
                </div>
                <div style={{display:'inline-block'}}>
                    <img></img>
                    <p>ที่พัก + รถบัส</p>   
                </div>          
            </div>
            <div style={{display:'inline-block',marginRight:'30px'}}>
                <div style={{display:'inline-block',marginRight:'10px'}}>
                    <Checkbox checked></Checkbox>
                </div>
                <div style={{display:'inline-block'}}>
                    <img></img>
                    <p>ที่พัก</p>   
                </div>          
            </div>
            <div style={{display:'inline-block',marginRight:'30px'}}>
                <div style={{display:'inline-block',marginRight:'10px'}}>
                    <Checkbox checked></Checkbox>
                </div>
                <div style={{display:'inline-block'}}>
                    <img></img>
                    <p>รถบัส</p>   
                </div>          
            </div>
            </center>
          </div>
        </Modal>
        <Modal
          title="ต้องการอะไรบ้าง?"
          visible={this.state.visible2}
        //   onOk={this.handleOk2}this.props.next
          onOk={this.props.nextPage}
          onCancel={this.handleCancel}
        >
          <SearchBar changefilter_Number={this.changefilter_Number}
          changefilter_Bus_date_going={this.changefilter_Bus_date_going}
          changefilter_Bus_GoBack={this.changefilter_Bus_GoBack}/>
        </Modal>
     
                <div>
                    <div style={{width:"60%", margin:"auto"}}>
                    <center>
                        <Input placeholder="จังหวัด" style={{width:'500px',height:'40px',margin:'auto',borderRadius:'10px'}}></Input>
                    </center>
                    </div>
                    <br />

                    <div style={{width:"100%", margin:"auto"}}>
                    <center>
                    <Input placeholder="งบประมาณ" size="large" style={{width:'500px',height:'40px',margin:'auto',borderRadius:'10px'}} onChange={(e) => 
                            { this.props.changeBudget(e.target.value); }}></Input>
                    </center>
                    </div>
                    
                    
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={this.showModal} style={{backgroundColor:'#ffcc33',borderRadius:'10px',border:'0',cursor:'pointer',width:'135px',height:'40px'}}>ต่อไป</button>
                    {/* <Button type="primary" onClick={this.showModal}>ต่อไป</Button> */}
                </div>
                </div>
                
            </div>
        )
    }

}
export default SearchBar1