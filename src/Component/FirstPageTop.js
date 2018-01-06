//หน้าที่ใส่ logo
import React, { Component } from 'react'
class FirstPageTop extends Component{
    
    constructor(props) {
        super(props);
        

      }

    render(){
        return(
            <div style={{position: "relative",
                        width: "100vw",
                        height: '70vh',
                        backgroundColor:"red",}}>
                First Page
            </div>
        )
    }

}
export default FirstPageTop