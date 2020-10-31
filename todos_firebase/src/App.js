import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import { Todos } from './containers/Todos/Todos';
import Layout from './hoc/layout/Layout';


export default function App() {
    return (
        <Layout>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/todos' component={Todos}></Route>
            <Redirect to='/'/>
        </Layout>
    )
}
