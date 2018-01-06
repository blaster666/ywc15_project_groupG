import React, { Component } from 'react'
import { Button } from 'antd';
class Conclude extends Component{
    
    constructor(props) {
        super(props);
  
        this.state = {
          
        };
      }

    render(){
        return(
            <div style={{backgroundColor:"lightblue",color:"black", }}>
                <div style={{textAlign:"center"}}>
                    <h1>ตรวจสอบการจองของคุณ</h1>
                    <h3>เช็คอิน </h3>
                    <h3>เช็คเอาท์ </h3>
                    <h3>ชื่อผู้เข้าพัก</h3>
                    <hr />
                    <h1>รายละเอียดห้องพัก</h1>
                    <h3>ประเภทห้อง</h3>
                    <h3>จำนวนห้อง</h3>
                    <h3>ผู้เข้าพักต่อเนื่อง</h3>
                    <h3>คำขอเพิ่มเติม</h3>
                    
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary">Finish !!</Button>
                </div>
            </div>
        )
    }

}
export default Conclude