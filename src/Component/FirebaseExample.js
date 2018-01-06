import React, { Component } from 'react'
import * as firebase from 'firebase'

class FirebaseExample extends Component{
    componentDidMount(){
        //PushData
        firebase.database().ref('resort/').push(
            {x:'aaaaa'}
        );

        //getData
        let resorts = [];
        firebase.database().ref('resort/').on('value', (snapshot) => {
			snapshot.forEach((childSnapshot) => {
				resorts.push(childSnapshot.val());
            });
            console.log(resorts)
		});
    }
    
    config = {
        apiKey: "AIzaSyCEa4cK-J596x7b5IVQQ4jhuTE1kHD0KDY",
        authDomain: "ywc15-groupg.firebaseapp.com",
        databaseURL: "https://ywc15-groupg.firebaseio.com",
        projectId: "ywc15-groupg",
        storageBucket: "ywc15-groupg.appspot.com",
        messagingSenderId: "290146856927"
      };
    constructor(props) {
        super(props);
        firebase.initializeApp(this.config);
    }

    render(){
        return(
            <div></div>
        )
    }

}
export default FirebaseExample