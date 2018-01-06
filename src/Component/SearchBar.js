import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, Checkbox } from 'antd';

class SearchBar extends Component{

    constructor(props) {
        super(props);
  
      }

    render(){
        return(
            <div style={{backgroundColor:"pink",
                        width: "100vw",
                        height: '32vh',}}>
                <div>
                    <Checkbox>ที่พัก</Checkbox>
                    <Row >
                        <Col span={3} offset={1} >สถานที่</Col>
                        <Col span={3} offset={1} >เช็คอิน</Col>
                        <Col span={3} offset={1} >checkout</Col>
                        <Col span={3} offset={1} >ผู้เข้าพัก</Col>
                        <Col span={3} offset={1} >เงิน</Col>
                    </Row>

                    
                    <Row>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Place(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Checkin(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Checkout(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Personal(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Resort_Money(e.target.value); }}/></Col>
                    </Row>

                    <Checkbox>รถทัวร์</Checkbox>
                    <Row >
                        <Col span={3} offset={1}>ต้นทาง</Col>
                        <Col span={3} offset={1}>ปลายทาง</Col>
                        <Col span={3} offset={1}>วันออกเดินทาง</Col>
                        <Col span={3} offset={1}>วันกลับ</Col>
                        <Col span={3} offset={1}>จำนวนผู้โดยสาร</Col>
  
                    </Row>

                    <Row>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Bus_from(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Bus_to(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Bus_date_going(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Bus_Goback(e.target.value); }}/></Col>
                        <Col span={3} offset={1} ><Input onChange={(e) => 
                            { this.props.changefilter_Bus_Number(e.target.value); }}/></Col>
                        
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