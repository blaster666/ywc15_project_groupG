// component หน้า resort หลัง filter
import React, { Component } from 'react'
import FilterResortItem from './FilterResortItem';
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
                <FilterResortItem key={this.state.resorts[i].name} data={this.state.resorts[i]}></FilterResortItem>
            )
        }
        console.log(14111)
    }
    
    render(){
        return(
            <div style={{backgroundColor:'green',width:'900px',height:'500px',margin:'auto'}}>
                FilterPageResort
                { this.renderResortItem }
            </div>
        )
    }

}
export default FilterPageResort