import React from 'react';
import './App.less';
import Home from '../home'
import Detail from '../detail'
import Login from '../login'
import Layout from "../layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../styles/common.less';
import {  Dataprovider } from '../store/datacontext';
import Register from '../register';

const App = () =>{

  // const {searchRes,distFilter,searchFilter,detailData,navi} = useContext(useDataValue)

  return (
    <>
    <Dataprovider>
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>            
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/:slug">
              <Detail />
            </Route>     
          </Switch>
        </Layout>
      </Router>
    </div>
    </Dataprovider>
    </>
  );
}
export default App;
