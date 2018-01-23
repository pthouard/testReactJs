import React from 'react'
import Layout from '../components/Layout'
import KnivesList from './KnivesList'
import { data } from '../data/data'

class Knives extends React.Component {
    render() {
        return (
            <Layout>
                <div class="gallery">
                    <h1>Kitchen knives guide</h1>
                    <KnivesList knives={data} />
                </div>
            </Layout>
        )
    }
}

export default Knives
