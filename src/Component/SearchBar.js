import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, Checkbox } from 'antd';
import { Radio } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const RadioGroup = Radio.Group;

class SearchBar extends Component{

    constructor(props) {
        super(props);
  
      }


    render(){
        return(
            <div style={{backgroundColor:"pink",display: 'flex', justifyContent: 'center'
                        }}>
                <div>
                    <Row >
                        
                        <Col xs={12} sm={12} md={12} lg={3} span={3} offset={1} >
                        <div><RadioGroup>
                            <Radio value={1}>ที่พัก</Radio>
                            <Radio value={2}>รถทัวร์</Radio>
                            <Radio value={3}>ที่พัก + รถทัวร์</Radio>
                            </RadioGroup></div></Col>
        
                    </Row>
                    <div style={{height:"40px"}}></div>

               
                    <Row >
                        <Col xs={12} sm={12} md={6} lg={6}  span={6} offset={1}>
                        <div>จำนวนคน</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Number(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={6} lg={6}  span={6} offset={1}>
                        <div>วันไป</div>
                        <div><DatePicker onChange={(e) => 
                            { this.props.changefilter_Bus_date_going(e); }} />
                            
                        </div></Col>
                        <Col xs={12} sm={12} md={6} lg={6}  span={6} offset={1}>
                        <div>วันกลับ</div>
                        <div><DatePicker onChange={(e) => 
                            { this.props.changefilter_Bus_date_going(e); }} /></div></Col>    
                        
                    </Row>
                    <div style={{height:"5vh"}}></div>
                    <Row>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary">ค้นหา</Button>
                </div>
                    </Row>

                    


                    
                </div>

            </div>
        )
    }

}
export default SearchBar