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
                border:'1px solid black',
                backgroundColor:'white',
                width:'100%',
                height:'200px',
                margin:'10px auto',
                }} onClick={this.props.next}>
                
                
                <div style={{
                    backgroundColor:'yellow',
                    width:'30%',
                    height:'198px',
                    display:'inline-block'
                    }}>
                    Picture
                </div>
                <div style={{
                    backgroundColor:'pink',
                    width:'69%',
                    height:'198px',
                    display:'inline-block'
                    }}>{this.props.data.name}</div>
            </div>
        )
    }

}
export default FilterResortItem