import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../imgs/logo.548dc5719c2345c22eef.png'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark border-bottom border-warning py-2">
                <div className="container">
                        
                        <Link className="navbar-brand" to="/"><img className='logo h-auto' src={logo} alt="" /><span className='text-warning fw-bold'>G</span>ame <span className='spinner-border spinner-border-sm text-warning fs-6'></span>ver</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            {!props.auth ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Game-Over">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/all">All</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Platforms
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/platforms/pc">pc</Link></li>
                                        <li><Link className="dropdown-item" to="/platforms/browser">browser</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sortby
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/sortby/releaseData">release-date</Link></li>
                                        <li><Link className="dropdown-item" to="/sortby/popularity">popularity</Link></li>
                                        <li><Link className="dropdown-item" to="/sortby/alphapet">alphabetical</Link></li>
                                        <li><Link className="dropdown-item" to="/sortby/relevance">relevance</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/categories/racing">ricing</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/sports">sports</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/social">social</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/shooter">shooter</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/open-world">open-world</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/zombie">zombie</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/fantasy">fantasy</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/action-rpg">action-rpg</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/action">action</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/flight">flight</Link></li>
                                        <li><Link className="dropdown-item" to="/categories/battle-royale">battle-royale</Link></li>
                                    </ul>
                                </li></> :
                                ""}
                        </ul>
                        {!props.auth ?
                            <Link className='text-decoration-none' to="/signin" ><button className='btn btn-outline-warning'>Logout</button></Link> :
                            <Link className='text-decoration-none' to="/signin" ><button className='btn btn-outline-warning'>Login</button></Link>}
                    </div>
                </div>
            </nav>

        </>
    )
}
