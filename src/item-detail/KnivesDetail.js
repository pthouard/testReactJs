import React from 'react'
import Layout from '../components/Layout'
import KnifeDetail from './KnifeDetail'
import { data } from '../data/data'

class KnivesDetail extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <KnifeDetail knife={data[this.props.match.params.id]} />
                </div>
            </Layout>
        )
    }
}

export default KnivesDetail
