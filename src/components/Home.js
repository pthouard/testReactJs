import React from 'react'
import Layout from './Layout'
import img from './images'

class Home extends React.Component {
    render() {
        return (
            <div class="home">
                <Layout>
                    <hr />
                    <div class="home">
                        <h1>
                            Kitch<span class="y">y</span>Knivy. The 1st Kitchen
                            Knives Guide.
                        </h1>
                        <img src={img.knifeSet} alt="kitchen knife set" />
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Home
