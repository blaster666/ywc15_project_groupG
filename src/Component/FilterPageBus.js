// component หน้า bus หลัง filter
import React, { Component } from 'react'
import FilterBusItem from './FilterBusItem';
import { Button } from 'antd';
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
                <FilterBusItem key={i} data={this.state.bus[i]} back={this.props.back} next={this.props.next}></FilterBusItem>
            )
        }
    }

    render(){
        return(
            <div style={{backgroundColor:'blue',margin:'auto'}}>
                <Button type="primary" onClick={this.props.back}>Back</Button>
                {this.renderBusItem}
                
            </div>
        )
    }

}
export default FilterPageBus