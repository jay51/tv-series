import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            series: [],
            seriesName:""
        }
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }

    onSearchInputChange (e) {
        const {value} = e.target
        fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
            .then( response => response.json() )
            .then( json => this.setState( {series: json, seriesName: value}));
    }

    render(){
        const {seriesName, series} = this.state;
        const tvSeries = series.map( (show, index) => <Link to="series"> <li key={index}> {show.show.name}</li></Link>);
        return (
            <div>
                <input type="text" name="show" onChange={this.onSearchInputChange} placeholder="TV show"/>
                
                <ul>
                    {
                        !seriesName ? <p> please search your favote Tv show</p> 
                        :
                        tvSeries
                    }
                </ul>
            </div>
        );
    }
}