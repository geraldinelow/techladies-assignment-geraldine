import React, { Component } from 'react';

class WeatherApi extends Component {
    constructor(props) {
        super(props);
    this.state = { 
        loading:true,
        forecast: [],
     }
    }

async componentDidMount() {
    const url = 'https://api.data.gov.sg/v1/environment/2-hour-weather-forecast/';
    const response = await fetch(url);
    const data=await response.json();
    this.setState({forecast: data.items[0].forecasts, loading:false});
    console.log(data.items[0].forecasts[0]);
}

async componentWillReceiveProps(nextProps) {
    this.setState({
        forecast: nextProps.items
    })
}

handleChange(e) {
    let currentList = [];
    let newList = [];

    if(e.target.calue !== "") {
        currentList = this.forecast;
        newList = currentList.filter(item => {
            const lc = item.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lc.includes(filter);
        });
    } else {
        newList = this.props.items;
    }
    this.setState({
        forecast: newList
    });

    this.handleChange = this.handleChange.bind(this);
}

    render() { 
        if(this.state.loading) {
            return <div>loading...</div>
        }

        if(!this.state.forecast.length) {
            return <div>Didnt get results</div>
        }

        return ( 
            <div>
                <input type = "text" className="input" onChange={this.handleChange} placeholder="Search..." />
                <table className="table table-striped">
                    <thead>
                        <th>Area</th>
                        <th>Forecast</th>
                    </thead>
                    <tbody>
                {this.state.forecast.map((area,i) => {
                    return(
                        <tr key={i}>

                        <td>{area.area}</td>
                        <td>{area.forecast}</td>

                    </tr>
                    )
                })}
            </tbody>
            </table>
            </div>
            );
    }
}
 
export default WeatherApi;