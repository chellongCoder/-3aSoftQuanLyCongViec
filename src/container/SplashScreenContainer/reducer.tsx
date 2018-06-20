import { NavigationActions } from 'react-navigation';
const initialState = {
    isNavigate: true,
}

const navigateAction = NavigationActions.navigate({
    routeName: 'Login',
  
    params: {},
  
  });
  
//   this.props.navigation.dispatch(navigateAction);
export default (state = initialState, action) => {
    console.log("navigate .2",action.type)
    if(action.type==="NAVIGATE_LOGIN") {
      setTimeout(() => {
        action.navigation.dispatch(navigateAction)
      }, 2000);
    }
    return state;
}