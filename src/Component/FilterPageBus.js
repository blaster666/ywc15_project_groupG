// component หน้า bus หลัง filter
import React, { Component } from 'react'
import FilterBusItem from './FilterBusItem';
class FilterPageBus extends Component{
    renderBusItem = []
    constructor(props) {
        super(props);
        this.state = {
            bus : [{
                name:'asdasdasd',
                a:'asdasdasd',
                b:'asdasdasd'
            },{
                name:'kkkkkk',
                a:'kkkkkk',
                b:'kkkkkk'
            },{
                name:'llllllll',
                a:'llllllll',
                b:'llllllll'
            },{
                name:'asdasdasd',
                a:'asdasdasd',
                b:'asdasdasd'
            },{
                name:'kkkkkk',
                a:'kkkkkk',
                b:'kkkkkk'
            },{
                name:'llllllll',
                a:'llllllll',
                b:'llllllll'
            },{
                name:'asdasdasd',
                a:'asdasdasd',
                b:'asdasdasd'
            },{
                name:'kkkkkk',
                a:'kkkkkk',
                b:'kkkkkk'
            },{
                name:'llllllll',
                a:'llllllll',
                b:'llllllll'
            }]
        }
        for(let i=0;i<this.state.bus.length;i++){
            this.renderBusItem.push(
                <FilterBusItem key={i} data={this.state.bus[i]}></FilterBusItem>
            )
        }
    }

    render(){
        return(
            <div style={{backgroundColor:'blue',width:'900px',margin:'auto'}}>
                {this.renderBusItem}
            </div>
        )
    }

}
export default FilterPageBus