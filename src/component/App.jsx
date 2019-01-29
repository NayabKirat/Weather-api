
import React, { Component } from "react";
import { MyData } from "./myData";
import Slider from "./slider";


class App extends Component{
    state = {
    data: MyData,
    weather:{}
        }
    

componentDidMount(){
    fetch("http://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=f477ff22a97cc7bbd1643b5fd83c8841")
    .then(res => res.json())
    .then(data => 
        this.setState({
            weather:data
        })
    );
}

    render()
    {

if(this.state.weather.list){
    var temphtml=this.state.weather.list.map((v,i)=>{
        return(
            <div key={i}>
                <h1>{v.name}</h1>
                <p>Temprature:{v.main.temp} Pressure: {v.main.pressure} Humidity:{v.main.humidity}</p>
                <p>Weather : {v.weather.main} {v.weather.description}</p>
            </div>
        )
        
    })
}

return (
    <div>
        <Slider />
{/*         
        {temphtml} */}
       
    </div>
)
    }
}
export default App;