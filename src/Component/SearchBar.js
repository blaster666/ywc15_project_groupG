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
            <div style={{display: 'flex', justifyContent: 'center'
                        }}>
                <center>
                <div>
                    <div style={{height:"40px"}}></div>

               
                    <Row >
                        <Col xs={12} sm={12} md={7} lg={7}  span={7} offset={1}>
                        <div>จำนวนคน</div>
                        <div><Input type="number"/></div></Col>
                        <Col xs={12} sm={12} md={7} lg={7}  span={7} offset={1}>
                        <div>วันไป</div>
                        <div><DatePicker />
                            
                        </div></Col>
                        <Col xs={12} sm={12} md={7} lg={7}  span={7} offset={1}>
                        <div>วันกลับ</div>
                        <div><DatePicker/></div></Col>    
                        
                    </Row>
                    <div style={{height:"5vh"}}></div>
                    {/* <Row>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary">ค้นหา</Button>
                </div>
                    </Row> */}

                    


                    
                </div>
                </center>

            </div>
        )
    }

}
export default SearchBar