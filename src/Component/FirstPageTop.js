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
                        backgroundImage:'url(img/landing.jpg)',
                        backgroundSize:'cover'}}>
                <div style={{paddingTop:'70vh'}}>
                    <SearchBar1 changeBudget={this.changeBudget} nextPage={this.props.nextPage}/>
                </div>
            </div>
        )
    }

}
export default FirstPageTop