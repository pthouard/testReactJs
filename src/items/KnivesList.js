import React from 'react'
import Knife from './Knife.js'

class KnivesList extends React.Component {
    render() {
        return (
            <div>
                {this.props.knives.map(knife => {
                    return <Knife knife={knife} key={knife.id} />
                })}
            </div>
        )
    }
}

export default KnivesList
