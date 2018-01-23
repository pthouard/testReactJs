import React from 'react'

class KnifeDetail extends React.Component {
    render() {
        return (
            <div className="item">
                <h1>
                    Everything about <span>{this.props.knife.name}</span>
                </h1>
                <p>{this.props.knife.description}</p>
                <img src={this.props.knife.img} alt={this.props.knife.name} />
                <p>Size : {this.props.knife.size}</p>
                <div className="technical">
                    <img src={this.props.knife.imageGrip} alt="" />
                    <p>{this.props.knife.grip}</p>
                </div>
            </div>
        )
    }
}

export default KnifeDetail
