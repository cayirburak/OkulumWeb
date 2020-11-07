import React,{Component} from "react";
import './Home.css'

export class Home extends Component {
    render(){
        return(
            <div className="row">
                <h2>Okulum Uygulamasına Hoşgeldiniz !</h2>
                <img className="welcome-img" src={require('../static/images/HomePageSchoolImage.jpg')} />
            </div>
        )
    }
}