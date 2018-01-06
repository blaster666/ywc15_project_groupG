import React, { Component } from 'react'
import FilterPageResort from './FilterPageResort';
import FilterPageBus from './FilterPageBus';
import Booking from './Booking';
import Conclude from './Conclude';
import { Button,Modal } from 'antd';
import Resort from './Resort';
import Bus from './Bus';
import Fav from './Fav';

class FilterPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            ShowPage : 'resort'
        }
        this.ShowFilterPageResort = this.ShowFilterPageResort.bind(this)
        this.ShowFilterPageBus = this.ShowFilterPageBus.bind(this)
        this.ShowBookingPage = this.ShowBookingPage.bind(this)
        this.ShowConcludePage = this.ShowConcludePage.bind(this)
        this.ShowAresortPage = this.ShowAresortPage.bind(this)
        this.ShowAbusPage = this.ShowAbusPage.bind(this)
        this.ShowFav = this.ShowFav.bind(this)
    }
    ShowFilterPageResort(){
        this.setState({
            ShowPage : 'resort'
        })
    }
    ShowFilterPageBus(){
        this.setState({
            ShowPage : 'bus'
        })
    }
    ShowBookingPage(){
        this.setState({
            ShowPage : 'booking'
        })
    }
    ShowConcludePage(){
        this.setState({
            ShowPage : 'conclude'
        })
    }
    ShowAresortPage(){
        this.setState({
            ShowPage : 'Aresort'
        })
    }
    ShowAbusPage(){
        this.setState({
            ShowPage : 'Abus'
        })
    }
    ShowFav(){
        this.setState({
            ShowPage : 'fav'
        })
    }
    render(){
        return(
            <div className="FilterPage" style={{
                    marginTop:'20px',
                    maxWidth:'1020px',
                    margin:'auto'
                }}>
                {this.state.ShowPage=='resort'?
                 <button style={{border:"0",borderRadius:"10px 10px 0px 0px", backgroundColor:"#ffcc33", color:"000000"}}  onClick={this.ShowFilterPageResort} >ที่พักที่เหมาะกับคุณ</button>:
                 <button style={{border:"0",borderRadius:"10px 10px 0px 0px", backgroundColor:"#ccc", color:"000000"}}  onClick={this.ShowFilterPageResort} >ที่พักที่เหมาะกับคุณ</button>
                }
                
                {/* <Button type={this.state.ShowPage==''?"primary":''} onClick={this.ShowAresortPage}>1.A Resort</Button> */}
                {this.state.ShowPage=='bus'?
                 <button style={{border:"0",borderRadius:"0px 10px 0px 0px", backgroundColor:"#ffcc33", color:"000000"}}  onClick={this.ShowFilterPageBus}>รถบัส</button>:
                 <button style={{border:"0",borderRadius:"0px 10px 0px 0px", backgroundColor:"#ccc", color:"000000"}}  onClick={this.ShowFilterPageBus}>รถบัส</button>
                }

                {/* <Button type={this.state.ShowPage==''?"primary":''} onClick={this.ShowAbusPage}>2.5.A Bus</Button> */}
                {this.state.ShowPage=='booking'?
                   <button style={{border:"0",borderRadius:"0px 10px 0px 0px", backgroundColor:"#ffcc33", color:"000000"}} onClick={this.ShowBookingPage}>ยืนยันการจอง</button> :
                   <button style={{border:"0",borderRadius:"0px 10px 0px 0px", backgroundColor:"#ccc", color:"000000"}} onClick={this.ShowBookingPage}>ยืนยันการจอง</button>
                }
                {this.state.ShowPage=='conclude'?
                  <button style={{border:"0",borderRadius:"0px 10px 0px 0px", backgroundColor:"#ffcc33", color:"000000"}} onClick={this.ShowConcludePage}>เสร็จสมบูรณ์</button> :
                  <button style={{border:"0",borderRadius:"0px 10px 0px 0px", backgroundColor:"#ccc", color:"000000"}} onClick={this.ShowConcludePage}>เสร็จสมบูรณ์</button>
                }
                
                
                <Button type="danger" style={{width:'70px',float:'right'}} onClick={this.ShowFav}>ที่ถูกใจ</Button>
                <hr style={{marginTop:'1px'}}/>
                

                {this.state.ShowPage=='resort'?<FilterPageResort next={this.ShowFilterPageBus} next2={this.ShowFilterPageBus}/>:
                this.state.ShowPage=='Aresort'?<Resort back={this.ShowFilterPageResort} next={this.ShowFilterPageBus}/>:
                this.state.ShowPage=='bus'?<FilterPageBus back={this.ShowFilterPageResort} next={this.ShowBookingPage} next2={this.ShowBookingPage}/>:
                this.state.ShowPage=='Abus'?<Bus back={this.ShowFilterPageBus} next={this.ShowBookingPage}/>:
                this.state.ShowPage=='booking'?<Booking back={this.ShowAbusPage} next={this.ShowConcludePage}/>:
                this.state.ShowPage=='conclude'?<Conclude back={this.ShowBookingPage}/>: 
                this.state.ShowPage=='fav'?<Fav next={this.ShowBookingPage}/>: ''}

{this.state.ShowPage=='conclude'?<Button type="primary" style={{width:'100%',marginTop:'20px'}}>กลับสู่หน้าแรก</Button>:''}
                
            </div>
        )
    }

}
export default FilterPage