// component หน้า resort หลัง filter
import React, { Component } from 'react'
import FilterResortItem from './FilterResortItem';
import { Button } from 'antd';
class FilterPageResort extends Component{
    renderResortItem = []
    constructor(props) {
        super(props);
        this.state={
            resorts : [{
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

        for(let i=0;i<this.state.resorts.length;i++){
            this.renderResortItem.push(
                <FilterResortItem key={i} data={this.state.resorts[i]} next={this.props.next}></FilterResortItem>
            )
        }
    }
    
    render(){
        return(
            <div style={{backgroundColor:'green',margin:'auto'}}>
                FilterPageResort
                <br/>
                { this.renderResortItem }
            </div>
        )
    }

}
export default FilterPageResort