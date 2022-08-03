import React from "react";

const WeatherForm = props => {
    return(
        <div className="card card-body">
            <form onSubmit={props.getWeather}>
                <div className="form-group mb-2">
                    <input type="text" name="city" placeholder="CityName" className="form-control"  autoFocus/>
                </div>
                <div className="form-group mb-2">
                    <input type="text" name="country" placeholder="Your country Name" className="form-control"/>
                </div>
                <button className="btn btn-success btn-block">
                    Get Weather
                </button>
            </form>
            
        </div>
    )
}
export default WeatherForm