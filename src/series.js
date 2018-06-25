import React, { Component } from "react";

export default class Series extends Component{
    constructor(props){
        super(props);
        this.state = {
            series: ["nothing"]
        }
    }

    onSearchInputChange = e => {
        console.log(e.target);
        
        // fetch(`http://api.tvmaze.com/search/shows?q=vikings`)
            // .then( response => response.json() )
            // .then( json => this.setState( {series: json}));
        
    }
    render(){
        return (
            <div>
                <input type="text" name="show" onChagne={this.onSearchInputChange} placeholder="TV show"/>
                <ul>
                </ul>
            </div>
        );
    }
}