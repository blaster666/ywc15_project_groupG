import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, Checkbox } from 'antd';

class SearchBar extends Component{

    constructor(props) {
        super(props);
  
      }

    render(){
        return(
            <div style={{backgroundColor:"pink"
                        }}>
                <div>
                    <Checkbox>ที่พัก</Checkbox>
                    <Row >
                        
                        <Col xs={12} sm={12} md={3} lg={3} span={3} offset={1} >
                        <div>สถานที่</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Place(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} offset={1} >
                        <div>เช็คอิน</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Checkin(e.target.value); }}/></div>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} offset={1} >
                        <div>checkout</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Checkout(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} offset={1} >
                        <div>ผู้เข้าพัก</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Personal(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} offset={1} >
                        <div>เงิน</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Money(e.target.value); }}/></div></Col>
                    </Row>
                    <div style={{height:"40px"}}></div>
                    <div style={{offsetLeft:"100px"}}>
                    <Checkbox>รถทัวร์</Checkbox>
                    </div>
                    <Row >
                        <Col xs={12} sm={12} md={3} lg={3} span={3} span={3} offset={1}>
                        <div>ต้นทาง</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Bus_from(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} span={3} offset={1}>
                        <div>ปลายทาง</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Bus_to(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} span={3} offset={1}>
                        <div>วันออกเดินทาง</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Bus_date_going(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} span={3} offset={1}>
                        <div>วันกลับ</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Bus_Goback(e.target.value); }}/></div></Col>
                        <Col xs={12} sm={12} md={3} lg={3} span={3} span={3} offset={1}>
                        <div>จำนวนผู้โดยสาร</div>
                        <div><Input onChange={(e) => 
                            { this.props.changefilter_Bus_Number(e.target.value); }}/></div></Col>
  
                    </Row>

                    <div style={{height:"1vh"}}></div>
                    <Row>
                        <Col span={3} offset={1}><Button type="primary">Search</Button></Col>

                    </Row>


                    
                </div>

            </div>
        )
    }

}
export default SearchBar