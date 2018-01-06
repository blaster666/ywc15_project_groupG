import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button } from 'antd'
import axios from "axios"

import FirstPageTop from './Component/FirstPageTop'
import Resort from './Component/Resort'
import Bus from './Component/Bus'
import FilterPageBus from './Component/FilterPageBus'
import FilterPageResort from './Component/FilterPageResort'
import Conclude from './Component/Conclude'
import SearchBar from './Component/SearchBar';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "", //ข้อมูลทั้ง resort และ bus ที่ axios get มา
      optionsearch: "", //เลือกว่าจะเอา bus, resort, resort+bus
      selectedResort: "", //เลือกว่าจะเอา resort ไหน
      selectedBus: "", // เลือกว่าจะเอา bus ไหน
      visibleState: 0, //0 = หน้าแรกก่อน search , 
                       //1 = ขึ้นหน้า filter หลังกด search, 
                       //2 = show resort ที่ select, 
                       //3 = show bus,
                       //4 = conclude,
      filter_Resort_Place: "", //สถานที่
      filter_Resort_Checkin: "", //เช็คอิน
      filter_Resort_Checkout: "", //เช็คเอ้าท์
      filter_Resort_Personal: "", //ผู้เข้าพัก
      filter_Resort_Money: "", //เงิน
      filter_Bus_from: "", //ต้นทาง
      filter_Bus_to: "",//ปลายทาง
      filter_Bus_date_going: "",//วันออกเดินทาง
      filter_Bus_GoBack: "",//ไปกลับ ?
      filter_Bus_Number: "",//จำนวนผู้โดยสาร
      filter_Bus_Money: "",//เงิน

    };
    this.changeOptionSearch = this.changeOptionSearch.bind(this)
    this.changeState = this.changeState.bind(this)
    this.changeResort = this.changeResort.bind(this)
    this.changeBus = this.changeBus.bind(this)
  }

  componentWillMount(){
    axios.get('https://ywc15.ywc.in.th/api/interview')
        .then((res)=>{
            this.setState({data:res.data})
        })
  }

  changeOptionSearch(value){
    this.setState({ optionsearch: value });
  };

  changeState(value){
    this.setState({ visibleState: value });
  };

  changeResort(value){
    this.setState({ selectedResort: value });
  };

  changeBus(value) {
    this.setState({ selectedBus: value });
  };

  render() {
    return (
      <div>
        <div>
          <FirstPageTop />
          <SearchBar changeState = {this.changeState}
                     changeOptionSearch = {this.changeOptionSearch}
                     changeFilter/>
        </div>
      </div>
    );
  }
}

export default App;
