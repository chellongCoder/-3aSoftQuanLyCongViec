import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import AddNew from "./container/AddNewContainer";
import Sidebar from "./container/SidebarContainer";
import Splash from './container/SplashScreenContainer';
import Animation from './stories/screens/Common/listWorkAnimation'
const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		Login: { screen: Login },
	}, 
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	},
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		AddNew: { screen: AddNew },
		Drawer: { screen: Drawer },
		Splash: {screen: Splash},
		Animation: {screen: Animation}
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none",
	},
);

export default () => (
	<Root>
		<App />
	</Root>
);
