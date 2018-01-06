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
                border:'1px solid black',backgroundColor:'white',width:'150px',height:'100px',display:'inline-block',marginLeft:'20px'
                }}>
                {this.props.data.name}
            </div>
        )
    }

}
export default FilterResortItem