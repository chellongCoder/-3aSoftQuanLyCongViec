import * as React from "react";
import { Text, Container, List, ListItem, Content, Header, Left,Right, Icon,Body,Badge } from "native-base";
import { NavigationActions } from "react-navigation";
import {View} from 'react-native'
import styles from './styles';

const phongBan = [
	{
		id: "",
		name: "Ban LĐ",
		amount: 60
	},
	{
		id: "",
		name: "P. Công đoàn",
		amount: 22
	},
	{
		id: "",
		name: "Ban LĐ",
		amount: 575
	},
	{
		id: "",
		name: "P. T.Trường",
		amount: 27
	},
];

export interface Props {
	navigation: any;
}
export interface State {}

export default class Sidebar extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
		}
	}
	render() {
		return (
			<Container>
				<Header style={{height: styles.heightScreen/8, backgroundColor: styles.color.header}}>
					<Left style={{flexDirection: 'row',  alignItems: 'center'}}>
						<Icon ios='ios-list-box-outline' android='md-list-box'/>
						<Text>  DS PHÒNG BẠN</Text>
					</Left>
				</Header>
				<Content>
					<List
						style={{ }}
						dataArray={phongBan}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										// data.route === "Login"
										// 	? this.props.navigation.dispatch(resetAction)
										// 	: this.props.navigation.navigate(data.route);
									}}
								>
									<Left style={{flex: 1/10}}>
										<Text style={{color: 'grey'}}>{this.state.index++}</Text>
									</Left>
									<Body style={{flex: 8/10, alignItems: 'flex-start'}}>
										<Text style={{color: styles.color.listItem}}>{data.name}</Text>
									</Body>
									<Right style={{flex: 2/10}}>
										<Badge>
											<Text style={{fontSize: 10}}>{data.amount}</Text>
										</Badge>
									</Right>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
