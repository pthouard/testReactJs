import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Knives from './items/Knives'
import KnivesDetail from './item-detail/KnivesDetail'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route exact path="/Gallery" component={Knives} />
                    <Route path="/Gallery/:id" component={KnivesDetail} />
                </div>
            </Router>
        )
    }
}

export default App
