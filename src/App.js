import React, { Component } from 'react';


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

    };
  }

  render() {
    return (
      <div className="App">
        Test Web
      </div>
    );
  }
}

export default App;
