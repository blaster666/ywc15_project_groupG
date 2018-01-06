import React, { Component } from 'react'
import FilterPageBus from './FilterPageBus';
import FilterPageResort from './FilterPageResort';
class FilterPage extends Component{
    
    constructor(props) {
        super(props);
  
      }

    render(){
        return(
            <div style={{
                backgroundColor:"yellow",  
                width: "100vw",
                }}>
                
                <FilterPageBus></FilterPageBus>
                <FilterPageResort></FilterPageResort>
            </div>
        )
    }

}
export default FilterPage