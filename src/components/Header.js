import React from 'react'
import Nav from './Nav'
import img from './images'

const Header = () => (
    <header>
        <div>
            <img src={img.logo} alt="logo" />
            <span>
                Kitch<span class="y">y</span>Knivy
            </span>
        </div>
        <Nav />
    </header>
)

export default Header
