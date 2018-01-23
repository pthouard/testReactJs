import React from 'react'
import { Link } from 'react-router-dom'

class Knife extends React.Component {
    render() {
        return (
            <div>
                <h3>
                    <Link to={'/Gallery/' + this.props.knife.id}>
                        Learn more
                    </Link>{' '}
                    about {this.props.knife.name}
                </h3>
                <img src={this.props.knife.img} alt={this.props.knife.name} />
            </div>
        )
    }
}

export default Knife
