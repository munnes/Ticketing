
import React, { Component } from "react";

import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import CheckStatus from './CheckStatComponent'
import { fetchTrips,postCard } from '../redux/ActionCreators';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import IssueCard from'./IssueCard'
import { actions } from 'react-redux-form';
const mapStateToProps = state => {
    return {
      
        trips: state.trips
    }
}
const mapDispatchToProps = (dispatch) => ({
   
    fetchTrips: () => { dispatch(fetchTrips()) },
    postCard:(card)=>{dispatch(postCard(card))},
    resetCard: () => { dispatch(actions.reset('card')) },

})
class Main extends Component {
    componentDidMount() {
        this.props.fetchTrips()
       
    }
    render() {
        const HomePage = () => {
            return(
                <Home 
                trips={this.props.trips.trips}
                tripsLoading={this.props.trips.isLoading}
                tripsErrMess={this.props.trips.errMess}
                />
            );
          }
          const Issue = () => {
            return (<IssueCard
                resetCard={this.props.resetCard}
                postCard={this.props.postCard}
            />)
        }
        return (
            <>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/chkStatus' component={()=><CheckStatus/>}/>
                    <Route exact path='/issueCard' component={Issue}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));