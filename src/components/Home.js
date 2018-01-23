import React from 'react'
import Layout from './Layout'
import img from './images'
import { styles } from '../styles/style'

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <div style={styles}>
                    <h1>Kitchen knives</h1>
                    <img src={img.knifeSet} alt="kitchen knife set" />
                </div>
            </Layout>
        )
    }
}

export default Home
