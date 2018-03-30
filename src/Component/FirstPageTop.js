//หน้าที่ใส่ logo
import React, { Component } from 'react'
import SearchBar1 from './SearchBar1';
import landing from '../Util/landing.jpg'
class FirstPageTop extends Component{
    
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div style={{height:'100vh',
            width:'100vw',
                        backgroundImage:'url(img/landing.jpg)',
                        backgroundSize:'cover',
                        marginLeft:'-10px'}}>
                <center><img src="img/logo.png" width="180px" style={{paddingTop:'30vh'}}></img></center>
                <center><h2 style={{color:'white',paddingTop:'30px'}}>จัดค่ายที่ไหนดี ? - มีงบเท่าไหร่ ?</h2></center>
                <div style={{paddingTop:'30px'}}>
                    <SearchBar1 changeBudget={this.props.changeBudget} nextPage={this.props.nextPage}/>
                </div>
            </div>
        )
    }

}
export default FirstPageTop