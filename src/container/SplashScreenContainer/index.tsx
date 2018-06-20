import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplashScreen from './../../stories/screens/SplashScreen';
import {navigate,navigateLogin}   from './actions';


export interface Props {
    navigation: any;
    navigate: Function;
}
export interface State {

}

class SpalshContainer extends Component<Props, State> {
    componentDidMount() {
        this.props.navigate(this.props.navigation);
        // setTimeout(() => {
            
        // }, 2000);
    }
    render() {
        return (
        <SplashScreen/>
        )
    }
}
    function bindAction(dispatch) {
        return {
            navigate: (navigation)=>dispatch(navigate(navigation))
        }
    }
    const mapStateToProps = state => ( state);
    

export default connect(mapStateToProps, bindAction)(SpalshContainer);