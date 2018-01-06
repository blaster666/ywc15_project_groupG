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
            <div style={{color:"black", }}>
                
                    <div style={{textAlign:"center"}}>
                        <h1>ตรวจสอบการจองของคุณ</h1>
                        <h3>เช็คอิน : 12-10-2560</h3>
                        <h3>เช็คเอาท์ : 15-10-2560</h3>
                        <h3>ชื่อผู้เข้าพัก : นายสมชาย เข็มกลัด</h3>
                        <hr />
                        <h1>รายละเอียดห้องพัก</h1>
                        <h3>จำนวนห้อง : 20</h3>
                        <h3>ผู้เข้าพัก(คน) : 120</h3>
                        <h3>ราคา(บาท) : 40,000</h3>
                        
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {/* <Button type="primary" style={{width:'100%',marginTop:'20px'}}>กลับสู่หน้าแรก</Button> */}
                    </div>
               
                
            </div>
        )
    }

}
export default Conclude