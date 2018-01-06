import React, { Component } from 'react'
import { Button,Modal } from 'antd';
class FilterResortItem extends Component{
    filename = ""
    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
    }
    constructor(props) {
        super(props);
        this.filename = 'url(img/'+this.props.data.img0+')';

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
                    width:'30%',
                    height:'198px',
                    display:'inline-block',
                    backgroundImage:this.filename,
                    backgroundSize:'cover',
                    
                    }}>
                    {this.props.data.name}
                </div>
                <div style={{
                    width:'68%',
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
export default FilterResortItem