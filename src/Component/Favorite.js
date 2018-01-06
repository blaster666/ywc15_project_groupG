import React, { Component } from 'react'
import { Tabs, Button, Card } from 'antd';
const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;
class Favorite extends Component{
    
    constructor(props) {
        super(props);
  
        this.state = {
          
        };
      }

    render(){
        return(
            <div style={{backgroundColor:"lightblue",color:"black", }}>
                <div>
                <Card>
                </Card>
                <div style={{textAlign:"center"}}>
                
                    <br/>
                    <h3>   เคียงทะเลรีสอร์ท จ. ระยอง</h3>
                    <br/>
                    <h3>   map : url</h3>
                    <br/>
                    <h3>   ราคาโดยเฉลี่ย: 115,000 บาท</h3>
                    </div>
                
                </div>

                <div>
                <Card>
                </Card>
                <div style={{textAlign:"center"}}>
                
                    <br/>
                    <h3>   เคียงทะเลรีสอร์ท2 จ. ระยอง</h3>
                    <br/>
                    <h3>   map : url</h3>
                    <br/>
                    <h3>   ราคาโดยเฉลี่ย: 115,000 บาท</h3>
                    </div>
                
                </div>
            </div>
        )
    }

}
export default Favorite