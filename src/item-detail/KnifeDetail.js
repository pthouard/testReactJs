import React from 'react'

class KnifeDetail extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.knife.name}</h1>
                <img src={this.props.knife.img} alt={this.props.knife.name} />
                <p>{this.props.knife.description}</p>
                <p>Size : {this.props.knife.size}</p>
                <div>
                    <img src={this.props.knife.imageGrip} alt="" />
                    <p>{this.props.knife.grip}</p>
                </div>
            </div>
        )
    }
}

export default KnifeDetail
