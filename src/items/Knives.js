import React from 'react'
import Layout from '../components/Layout'
import KnivesList from './KnivesList'
import { styles } from '../styles/style'
import { data } from '../data/data'

class Knives extends React.Component {
    render() {
        return (
            <Layout>
                <div style={styles}>
                    <h1>Kitchen knives guide</h1>
                    <KnivesList knives={data} />
                </div>
            </Layout>
        )
    }
}

export default Knives
