import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class Menu extends Component{
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Movie Site</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink exact to={"/movie_home"}>Home</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu
