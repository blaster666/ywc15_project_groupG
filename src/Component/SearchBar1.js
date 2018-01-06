import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, Checkbox } from 'antd';

class SearchBar1 extends Component{

    render(){
        return(
            <div>
                <div>
                    <div style={{width:"60%", margin:"auto"}}>
                    <Input placeholder="Money" size="large" onChange={(e) => 
                            { this.props.changeBudget(e.target.value); }}></Input>
                    </div>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type="primary">ต่อไป</Button>
                </div>
                </div>
                
            </div>
        )
    }

}
export default SearchBar1