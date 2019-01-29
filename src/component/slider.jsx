
import React, { Component } from "react";

const Api_Key = "f477ff22a97cc7bbd1643b5fd83c8841";

class Slider extends React.Component{
    state={
        data:{}
    }
    // constructor(){
    //     this.getWeather=this.getWeather.bind(this)
    // }
    
    getWeather = (e) => {
        e.preventDefault()
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
      fetch(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=${Api_Key}`)
      .then(res => res.json())
      .then(res => this.setState({
            data:res    
        }))
        
    }

 

    render(){
        if(this.state.data.list){
            var temphtml=this.state.data.list.map((v,i)=>{
                return(
                    <div key={i} className="col">
                        <h1 style={{marginLeft:"70px"}}>{v.name}</h1>
                        <h2 style={{marginLeft:"70px"}}>{v.sys.country}</h2>
                        <p style={{marginLeft:"70px"}}>Temprature:{v.main.temp} <br />Pressure: {v.main.pressure}<br /> Humidity:{v.main.humidity}</p>
                        <p style={{marginLeft:"70px"}}>Weather : {v.weather.main} {v.weather.description}</p>
                    </div>
                )
                
            })
        }
        console.log(this.state.data);
return (
    <div className="h1">
    <form onSubmit={this.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>

    </form>
    <div>
        {temphtml}
    </div>
    <br />

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
)
    }
}
export default Slider;