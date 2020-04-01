import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          {/* switch allows to display only the path chosen. Path should be placed more specific to generic to display correctly */}
          <Switch>
            {/* route creates 3 additional props - history, location and match */}
            <Route path="/products/:id" component={ProductDetails}/>
            <Route path="/products" render={(props) => <Products sortBy="newest" {...props} />} />
            {/* ? makes parameter optional */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            
            {/* redirect from route to route */}
            <Redirect from="/messages" to="/posts" />
            <Route path="/notFound" component={NotFound}/>
            <Route path="/" exact component={Home} />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
