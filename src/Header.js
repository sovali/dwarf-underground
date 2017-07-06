import React from 'react'
import './Header.css'
import Author from './Author'

const Header = () => {
    return (
    <div className="large-8 medium-12 columns article">
        <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
        <Author />
        </div>
    )
}

export default Header