import React, { Component } from 'react'
import './Card-List.styles.css'
import Card from './Card/Card'
export default class CardList extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div className="card-list">
                {this.props.monsters.map((monster)=>(
                   // console.log(monster);
                    <Card id={monster.id} monster={monster}></Card>
                ))}
            </div>
        )
    }
}
