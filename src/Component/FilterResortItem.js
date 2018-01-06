import React, { Component } from 'react'
class FilterResortItem extends Component{
    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
    }
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style={{
                backgroundColor:'black',width:'150px',height:'100px',display:'inline-block',marginLeft:'20px'
                }}>
                
            </div>
        )
    }

}
export default FilterResortItem