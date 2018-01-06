import React, { Component } from 'react'
import { Input,Select,Checkbox,Button } from 'antd';
const Option = Select.Option;
class Booking extends Component{
    
    constructor(props) {
        super(props);
  
        this.state = {
            isVisitor : true
        };
        this.isVisitorChange = this.isVisitorChange.bind(this)
    }
    selectBefore = (
        <Select defaultValue="Http://" style={{ width: 90 }}>
          <Option value="Http://">Http://</Option>
          <Option value="Https://">Https://</Option>
        </Select>
    );
    isVisitorChange(){
        if(this.state.isVisitor)
            this.setState({isVisitor:false})
        else this.setState({isVisitor:true})
    }
    render(){
        return(
            <div style={{margin:'auto'}}>
                <div style={{width:'60%',display:'inline-block'}}>
                    <div style={{margin:'auto',}}>
                        ชื่อผู้จอง
                        <Input placeholder="Udomsub Naikorn"/>
                        <br/>
                        <br/>
                        โทรศัพท์
                        <Input addonBefore="+66" placeholder="812345678" />
                        <br/><br/>
                        อีเมลผู้จอง
                        <Input placeholder="yourname@site.com"/>
                        <Checkbox onChange={this.isVisitorChange} defaultChecked>ฉันคือผู้เข้าพัก</Checkbox>
                        <br/>
                        <br/>
                        {this.state.isVisitor?'':'ชื่อนามสกุลผู้เข้าพัก'}
                        <br/>
                        {this.state.isVisitor?'':<Input placeholder="yourname"/>}
                    </div>
                    <div style={{margin:'auto'}}>
                        <h2>นโยบายการจอง</h2>
                        <p>การจองนี้ไม่สามารถขอเงินคืนได้ เวลาที่ปรากฏเป็นเวลาท้องถิ่นของโรงแรม ระยะเวลาเข้าพักและประเภทของห้องไม่สามารถเปลี่ยนแปลงได้</p>
                    </div>
                    <div style={{width:'60%',padding:'20px',marginTop:'0'}}>
                    <div style={{margin:'auto'}}>
                        <h2>รายละเอียดการจอง</h2>
                        <h3>รีสอร์ท สกายไดร์ซ</h3>
                        <p>ราคา(บาท) : 40,000 </p>
                        <p>จำนวน(คน) : 120 </p>
                    </div>
                </div>
                    <div style={{margin:'auto'}}>
                        <h2>รายละเอียดราคา</h2>
                        <h3>56,750 .-</h3>
                    </div>
                </div>
                
                {/* <Button type="primary" onClick={this.props.back}>Back</Button> */}
                <Button type="primary" onClick={this.props.next} style={{marginLeft:'30px',width:'80%'}}>Submit</Button>
            </div>
        )
    }

}

export default Booking