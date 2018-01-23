import React from 'react'
import Layout from '../components/Layout'
import KnifeDetail from './KnifeDetail'
import { styles } from '../styles/style'
import { data } from '../data/data'

class KnivesDetail extends React.Component {
    render() {
        return (
            <Layout>
                <div style={styles}>
                    <KnifeDetail knife={data[this.props.match.params.id]} />
                </div>
            </Layout>
        )
    }
}

export default KnivesDetail
