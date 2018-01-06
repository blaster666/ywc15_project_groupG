import React, { Component } from 'react'
import FilterPageResort from './FilterPageResort';
import FilterPageBus from './FilterPageBus';
import Booking from './Booking';

class FilterPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            ShowPage : 'resort'
        }
        this.ShowFilterPageResort = this.ShowFilterPageResort.bind(this)
        this.ShowFilterPageBus = this.ShowFilterPageBus.bind(this)
        this.ShowBookingPage = this.ShowBookingPage.bind(this)
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
    render(){
        return(
            <div style={{
                    backgroundColor:"yellow",  
                    marginTop:'20px'
                }}>
                
                <button onClick={this.ShowFilterPageResort}>1.Resort</button>
                <button onClick={this.ShowFilterPageBus}>2.Bus</button>
                <button onClick={this.ShowBookingPage}>3.Booking</button>

                {this.state.ShowPage=='resort'?<FilterPageResort></FilterPageResort>:
                this.state.ShowPage=='bus'?<FilterPageBus></FilterPageBus>:
                this.state.ShowPage=='booking'?<Booking></Booking>:''}
            </div>
        )
    }

}
export default FilterPage