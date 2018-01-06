import React, { Component } from 'react'
import { Tabs, Button,Card } from 'antd';
const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;
class Bus extends Component{
    
    constructor(props) {
        super(props);
  
        this.state = {
          
        };
      }

    render(){
        return(
            <div style={{backgroundColor:"white"}}>
              <center><img src="img/bus1-1.png" width="80%"></img></center>
              <div style={{textAlign:"center"}}>
                
                <br/>
                <h3>   บริษัทรถทัวร์ : สมบัติ</h3>
                <br/>
                <h3>   ราคา : 10000 baht</h3>
              </div>
              <center><img src="img/bus1-2.jpg"  width="80%"></img></center>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                 
              {/* <Button type="primary" onClick={this.props.back}>Back</Button>
              <span style={{color:"white"}}>asdasdasd</span>
              <Button type="primary" onClick={this.props.next}>Select</Button> */}
                 
              </div>
              <div >
              <Tabs defaultActiveKey="1" type="card" style={{padding: "20px"}}>
                <TabPane tab="รายละเอียด" key="1">
                <h1>สมบัติทัวร์</h1>
                <p>บริษัท คอนเฟิร์ม ทัวร์ บริการให้ เช่ารถบัส เช่ารถบัสปรับอากาศ เช่ารถโค้ชปรับอากาศ ประเภท 8 ล้อ 2 ชั้น ขนาด 50 ที่นั่ง สำหรับการท่องเที่ยว สัมมนา ศึกษาดูงานนอกสถานที่

คุณสมบัติ รถโค้ชปรับอากาศ

ชั้นบนเก้าอี้ 41 - 43 ที่นั่ง
ชั้นล่างเก้าอี้ 4 - 8 ที่นั่ง พร้อมโซฟา
เบาะที่นั่งปรับเอนนอน 140 องศา
TV LCD 3 เครื่อง ชั้นล่าง 1 เครื่อง และ ชั้นบน 2 เครื่อง ขนาด 21” และ 14”
มีระบบฟอกอากาศภายในรถฆ่าเชื้อโรค ฝุ่นละออง และกำจัดกลิ่นภายในรถ
Safety belt ทุกที่นั่ง ประตูฉุกเฉิน 2 ประตู และชุดดับเพลิง
อุปการณ์อำนวยความสะดวกครบครัน อาทิ ภาพยนตร์ DVD คาราโอเกะ พร้อมสร้างสีสัน ความสุขตลอดการเดินทาง ระบบเครื่องเสียงลำโพงเซตใหญ่พร้อม DVD, VCD, Karaoke, Microphone

ต่างจังหวัด ระยะทางไป - กลับ ไม่เกิน 300 กิโลเมตร 9,000 - 12,000 บาท / วัน
ต่างจังหวัด ระยะทางไป - กลับ เกิน 300 กิโลเมตร 10,000 - 15,000 บาท / วัน</p></TabPane>
                <TabPane tab="Review" key="2">
                <Card>
                    <h3>Username: scidd.54</h3>
                    <h3>Comment : ห้องพักสะอาด แอร์เย็น เครื่องทำน้ำอุ่นดี แต่ปลั๊กในห้องน้อยไปหน่อย ลานจัดกิจกรรมรองรับคนได้มาก เหมาะกับการจัดกิจกรรมฐานดีครับ</h3>
                    </Card>
                    <Card>
                    <h3>Username: mmuay96</h3>
                    <h3>Comment : พื้นที่รีสอร์ทและหอประชุมกว้างมากๆค่ะ จัดค่ายให้กรุ๊ปใหญ่ๆ รองรับ 500 คนได้เลย บุฟเฟต์อาหารเช้าไม่ค่อยน่ากินเท่าไร แต่มื้อเย็นโอเคค่ะ</h3>
                    </Card><Card>
                    <h3>Username: camppypyy</h3>
                    <h3>Comment : ห้องพักสะอาด แอร์เย็น เครื่องทำน้ำอุ่นดี แต่ปลั๊กในห้องน้อยไปหน่อย ลานจัดกิจกรรมรองรับคนได้มาก เหมาะกับการจัดกิจกรรมฐานดีครับ</h3>
                    </Card><Card>
                    <h3>Username: scidd.54</h3>
                    <h3>Comment : มีทะเลอยู่หน้ารีสอร์ทเลยยยย พาน้องค่ายไปเล่นเกมชายหาดได้สะดวก อาหารบุฟเฟต์คุณภาพสมราคา เจ้าของใจดี อำนวยความสะดวกให้หลายอย่างเลยจ้า</h3>
                    </Card><Card>
                    <h3>Username: tamonwann_</h3>
                    <h3>Comment : ระบบเครื่องเสียงไม่ค่อยดี เวลาจัดกิจกรรมพร้อมกับกรุ๊ปอื่น แล้วมีเสียงแทรกเข้ามา และหอประชุมเสียงก้องมากๆ เวลาพิธีกรพูดเสียงจะสะท้อนเยอะ น้องๆไม่ค่อยได้ยินเสียง แต่ห้องพักโอเคนะ</h3>
                    </Card>
                
                </TabPane>
            </Tabs>
              </div>
            </div>
        )
    }

}
export default Bus