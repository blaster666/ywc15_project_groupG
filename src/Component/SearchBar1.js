import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, Checkbox } from 'antd';
import { Select } from 'antd';
const Option = Select.Option;
class SearchBar1 extends Component{

    render(){
        return(
            <div>
                <div>
                    <div style={{width:"60%", margin:"auto"}}>
                    <center><Select defaultValue="location"  >
                    <Option value="1">หัวหิน</Option>
                    <Option value="2">ระยอง</Option>
                    <Option value="3">ปราณบุรี</Option>
                    <Option value="4">กาญจนบุรี</Option>
                    <Option value="5">ชะอำ</Option>
                    </Select></center>
                    </div>
                    <br />

                    <div style={{width:"60%", margin:"auto"}}>
                    <Input placeholder="Money" size="large" onChange={(e) => 
                            { this.props.changeBudget(e.target.value); }}></Input>
                    </div>
                    
                    
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary">ต่อไป</Button>
                </div>
                </div>
                
            </div>
        )
    }

}
export default SearchBar1