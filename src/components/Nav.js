import React from 'react'

class Nav extends React.Component {
    render() {
        const pages = ['Home', 'Planes']
        const links = pages.map(page => {
            return <a href={'/' + page}>{page}</a>
        })
        return <nav>{links}</nav>
    }
}

export default Nav
