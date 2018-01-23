import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        const pages = ['Home', 'Knives']
        const links = pages.map(page => {
            return (
                <Link to={'/' + page} key={page}>
                    {page}
                </Link>
            )
        })
        return <nav>{links}</nav>
    }
}

export default Nav
