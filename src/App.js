import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
import Home from './components/Home'
import Planes from './components/Planes'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Planes" component={Planes} />
                </div>
            </Router>
        )
    }
}

export default App
