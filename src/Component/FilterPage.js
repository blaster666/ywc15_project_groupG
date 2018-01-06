import React, { Component } from 'react'
import FilterPageResort from './FilterPageResort';
import FilterPageBus from './FilterPageBus';

class FilterPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            ShowPage : 'resort'
        }
        this.ShowFilterPageResort = this.ShowFilterPageResort.bind(this)
        this.ShowFilterPageBus = this.ShowFilterPageBus.bind(this)
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
    render(){
        return(
            <div style={{
                    backgroundColor:"yellow",  
                    width: "100vw",
                }}>
                
                <button onClick={this.ShowFilterPageResort}>Resort</button>
                <button onClick={this.ShowFilterPageBus}>Bus</button>

                {this.state.ShowPage=='resort'?<FilterPageResort></FilterPageResort>:<FilterPageBus></FilterPageBus>}
            </div>
        )
    }

}
export default FilterPage