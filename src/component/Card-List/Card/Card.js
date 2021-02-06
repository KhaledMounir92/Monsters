import React, { Component } from 'react'
import './Card.style.css'
export default class extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div className="card-container">
                <img alt="monster" src={`https://robohash.org/${this.props.id}?set=set2`}></img>
                 <h2 key={this.props.id}>{this.props.monster.name}</h2>
                <p>{this.props.monster.email}</p>
            </div>
        )
    }
}
