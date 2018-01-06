import React, { Component } from 'react'
import { Button,Modal } from 'antd';

class FilterBusItem extends Component{
    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
    }
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style={{
                backgroundColor:'white',
                width:'100%',
                height:'200px',
                margin:'10px auto',
                }} onClick={this.props.next}>
                
                
                <div style={{
                    backgroundColor:'blue',
                    width:'30%',
                    height:'198px',
                    display:'inline-block'
                    }}>
                    {this.props.data.name}
                </div>
                <div style={{
                    backgroundColor:'pink',
                    width:'69%',
                    height:'198px',
                    display:'inline-block'
                    }}>
                    <div>
                        {this.props.data.name}
                        <Button>ดูรายละเอียด</Button>
                        <Button type="primary" onClick={this.props.next2}>จองที่พักนี้</Button>
                    </div>
                </div>
            </div>
        )
    }

}
export default FilterBusItem