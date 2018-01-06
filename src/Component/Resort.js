import React, { Component } from 'react'
import { Tabs, Button, Card } from 'antd';
import map from '../Util/map.jpg'
const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;
class Resort extends Component{
    
    constructor(props) {
        super(props);
  

      }

    render(){
        //let data = this.props.selectedResort
        return(
            <div style={{backgroundColor:"white"}}>
                <div style={{height: "10vw"}}>

                </div>
                <Card
    cover={<img alt="example" src={map} />}
  >

  </Card>


              <div style={{textAlign:"center"}}>
                
                <br/>
                <h3>   เคียงทะเลรีสอร์ท จ. ระยอง</h3>
                <br/>
                <h3>   map : url</h3>
                <br/>
                <h3>   ราคาโดยเฉลี่ย: 115,000 บาท</h3>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                 
              <Button type="primary">Back</Button>
              <span style={{color:"white"}}>asdasdasd</span>
              <Button type="primary">Select</Button>
                 
              </div>
              <div >
              <Tabs defaultActiveKey="1" type="card" style={{padding: "20px"}}>
                <TabPane tab="รายละเอียด" key="1">
                    <h3>ถ้าผู้ใช้งานต้องการที่พักรองรับ 200 คน ค่าย 3 วัน 2 คืน</h3>
                    <h3>Star rate: 3 ดาว</h3>
                    <h3>ที่อยู่: 79/15-16 หมู่ 1, ถนนหาดแม่รำพึง, ตำบลเพ อำเภอเมืองระยอง ระยอง 21160</h3>
                    <h3>Contact:</h3>
                    <h3>Tel: 086-3188508</h3>
                    <h3>e-mail: kiangtalayresort@gmail.com </h3>
                    <h3>สถานที่จัดกิจกรรม: หอประชุม ลานกิจกรรม</h3>
                    <h3>สิ่งอำนวยความสะดวก: wi-fi ลานจอดรถ พื้นที่สูบบุหรี่</h3>
                    <h3>อาหาร: บุฟเฟต์ โต๊ะจีน</h3>
                    <h3>กิจกรรมพิเศษ: สระว่ายน้ำ</h3>
                    <h3>Entertainment & media: เครื่องเสียง คาราโอเกะ จอฉายภาพ</h3>
                    <h3>ข้อกำหนด: ห้ามเสียงดังหลัง 00:00</h3>
                    <h3>สิ่งแวดล้อม: ติดชายหาด</h3>
                    <h3>สถานที่สำคัญ: อุทยานแห่งชาติเขาแหลมหญ้า</h3>
                </TabPane>
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
export default Resort