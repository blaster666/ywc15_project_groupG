import React, { Component } from 'react'
import FilterPageResort from './FilterPageResort';
import FilterPageBus from './FilterPageBus';
import Booking from './Booking';
import Conclude from './Conclude';
import Resort from './Resort';
import Bus from './Bus';

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
    render(){
        return(
            <div style={{
                    backgroundColor:"yellow",  
                    marginTop:'20px'
                }}>
                
                <button onClick={this.ShowFilterPageResort}>0.Resort</button>
                <button onClick={this.ShowAresortPage}>1.A Resort</button>
                <button onClick={this.ShowFilterPageBus}>2.Bus</button>
                <button onClick={this.ShowAbusPage}>2.5.A Bus</button>
                <button onClick={this.ShowBookingPage}>3.Booking</button>
                <button onClick={this.ShowConcludePage}>4.Conclude</button>

                {this.state.ShowPage=='resort'?<FilterPageResort></FilterPageResort>:
                this.state.ShowPage=='Aresort'?<Resort/>:
                this.state.ShowPage=='bus'?<FilterPageBus></FilterPageBus>:
                this.state.ShowPage=='Abus'?<Bus/>:
                this.state.ShowPage=='booking'?<Booking></Booking>:<Conclude/>}
            </div>
        )
    }

}
export default FilterPage