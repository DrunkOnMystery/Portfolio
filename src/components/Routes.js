import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const Routes = () => {
    return (
        <Switch> 
            <Route exact path = "/" component ={Main}></Route>
            <Route exact path = "/portfolio/" component ={Main}></Route>
            <Route exact path = "/projects" component = {Portfolio}></Route>
            <Route exact path = "/contact" component = {Contact}></Route>
        </Switch>
    )
}

export default Routes;