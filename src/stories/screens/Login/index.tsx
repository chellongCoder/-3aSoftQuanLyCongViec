import * as React from "react";
import { Image, Platform, TouchableHighlight, TouchableOpacity } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Card } from "native-base";
import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container style={{backgroundColor: styles.color.background}}>
				<Header style={{height: styles.heightScreen/3, backgroundColor: 'white', flexDirection: 'column', borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
					<TouchableOpacity style={{position: 'absolute', top: Platform.OS==='ios' ? 20 : 0, right: 10, }}>
					<Icon 
					style={{color: styles.color.buttonLogin}}
					ios='ios-log-out-outline' android='md-log-out'/>
					</TouchableOpacity>
					<View style={{alignItems: 'center'}}>
						<Image 
						style={{width: styles.deviceSize.width/2, height: styles.deviceSize.height/4}}
						source={require('./../../../../images/3ASoft-iCon.png')}/>
					</View>
					<View style={{alignItems: 'center',}}>
						<Text style={{fontWeight: '500', fontSize: 40, color: styles.color.title,textAlign: 'center'}}>Quản lý công việc Demo 2018</Text>
					</View>
				</Header>
				<Content style={{}}>
					<Card>
						{this.props.loginForm}
						<View padder>
							<Button style={{backgroundColor: styles.color.buttonLogin}} block onPress={() => this.props.onLogin()}>
								<Text>Login</Text>
							</Button>
						</View>
					</Card>
				</Content>

			</Container>
		);
	}
}

export default Login;
