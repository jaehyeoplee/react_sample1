import React,{Component,Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Menu from "./components/Menu";
import MovieMain from "./components/MovieMain";

class MovieContainer extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu/>
                    <Switch>
                        <Route exact path={"/movie_home"} component={MovieMain} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default MovieContainer
