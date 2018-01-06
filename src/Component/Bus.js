import React, { Component } from 'react'
import { Tabs, Button } from 'antd';
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
                <div style={{height: "10vw"}}>

                </div>
              <div style={{ margin: "auto",
                            width: "50vw",
                            height: '30vh',
                            backgroundColor: "orange"}}>
              </div>
              <div style={{textAlign:"center"}}>
                
                <br/>
                <h3>   บริษัทรถทัวร์ : อิอิ</h3>
                <br/>
                <h3>   ราคา : 10000 baht</h3>
              </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                 
              <Button type="primary" onClick={this.props.back}>Back</Button>
              <span style={{color:"white"}}>asdasdasd</span>
              <Button type="primary" onClick={this.props.next}>Select</Button>
                 
              </div>
              <div >
              <Tabs defaultActiveKey="1" type="card" style={{padding: "20px"}}>
                <TabPane tab="รายละเอียด" key="1">
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                </TabPane>
                <TabPane tab="Review" key="2">
                <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 2</h1>
                    <h1>Content of Tab Pane 2</h1>
                    <h1>Content of Tab Pane 2</h1>
                    <h1>Content of Tab Pane 2</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                    <h1>Content of Tab Pane 1</h1>
                </TabPane>
            </Tabs>
              </div>
            </div>
        )
    }

}
export default Bus