import React from 'react'
import { Link } from 'react-router-dom'

class Knife extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.knife.name}</h3>
                <img src={this.props.knife.img} alt={this.props.knife.name} />
                <Link to={'/Knives/' + this.props.knife.id}>Learn more</Link>
            </div>
        )
    }
}

export default Knife
