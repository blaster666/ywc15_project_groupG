import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button } from 'antd'
import axios from "axios"

import FirstPageTop from './Component/FirstPageTop'
import FilterPageBus from './Component/FilterPageBus'
import FilterPageResort from './Component/FilterPageResort'
import SearchBar from './Component/SearchBar';
import SearchBar1 from './Component/SearchBar1';
import FilterPage from './Component/FilterPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "", //ข้อมูลทั้ง resort และ bus ที่ axios get มา
      optionsearch: "", //เลือกว่าจะเอา bus, resort, resort+bus
      selectedResort: "Resort บ้านทรายทอง", //เลือกว่าจะเอา resort ไหน
      selectedBus: "Bus อะไรก็ไม่รู้", // เลือกว่าจะเอา bus ไหน
      visibleState: 0, //0 = หน้าแรกก่อน search , 
                       //1 = ขึ้นหน้า filter หลังกด search, 
                       //2 = show resort ที่ select, 
                       //3 = show bus,
                       //4 = conclude,
      filterBudget: "",
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
      step:0

    };
    this.changeOptionSearch = this.changeOptionSearch.bind(this)
    this.changeState = this.changeState.bind(this)
    this.changeBudget = this.changeBudget.bind(this)
    this.changeResort = this.changeResort.bind(this)
    this.changeBus = this.changeBus.bind(this)
    this.changefilter_Resort_Place = this.changefilter_Resort_Place.bind(this)
    this.changefilter_Resort_Checkin = this.changefilter_Resort_Checkin.bind(this)
    this.changefilter_Resort_Checkout = this.changefilter_Resort_Checkout.bind(this)
    this.changefilter_Resort_Personal = this.changefilter_Resort_Personal.bind(this)
    this.changefilter_Resort_Money = this.changefilter_Resort_Money.bind(this)
    this.changefilter_Bus_from = this.changefilter_Bus_from.bind(this)
    this.changefilter_Bus_to = this.changefilter_Bus_to.bind(this)
    this.changefilter_Bus_date_going = this.changefilter_Bus_date_going.bind(this)
    this.changefilter_Bus_GoBack = this.changefilter_Bus_GoBack.bind(this)
    this.changefilter_Number = this.changefilter_Number.bind(this)
    this.changefilter_Bus_Money = this.changefilter_Bus_Money.bind(this)
    this.nextStep = this.nextStep.bind(this)

  }

  // componentWillMount(){
  //   axios.get('https://ywc15.ywc.in.th/api/interview')
  //       .then((res)=>{
  //           this.setState({data:res.data})
  //       })
  // }
  getData(value){
    this.setState({data:value})
  }

  changeBudget(value){
    this.setState({Budget:value})
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

  changefilter_Resort_Place(value){
    this.setState({filter_Resort_Place:value})
  }

  changefilter_Resort_Checkin(value){
    this.setState({filter_Resort_Checkin:value})
  }

  changefilter_Resort_Checkout(value){
    this.setState({filter_Resort_Checkout:value})
  }

  changefilter_Resort_Personal(value){
    this.setState({filter_Resort_Personal:value})
  }

  changefilter_Resort_Money(value){
    this.setState({filter_Resort_Money:value})
  }

  changefilter_Bus_from(value){
    this.setState({filter_Bus_from:value})
  }

  changefilter_Bus_to(value){
    this.setState({filter_Bus_to:value})
  }

  changefilter_Bus_date_going(value){
    this.setState({filter_Bus_date_going:value})
  }

  changefilter_Bus_GoBack(value){
    this.setState({filter_Bus_GoBack:value})
  }

  changefilter_Number(value){
    this.setState({filter_Number:value})
  }

  changefilter_Bus_Money(value){
    this.setState({filter_Bus_Money:value})
  }
  nextStep(){
    let next = this.state.step +=1
    this.setState({
      step : next
    })
    alert('next')
  }
  render() {
    return (
      <div>
        <div style={{margin:'auto'}}>
          <div>
            <FirstPageTop next={this.nextStep}/>
          </div>

          <FilterPage />
        </div>
      </div>
    );
  }
}

export default App;
