import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { fetchList, logout } from "./actions";
import Config from './../../Util/config';
import Service from './../../Service/ManagerService';

export interface Props {
	navigation: any;
	fetchList: Function;
	data: Object;
	logout: Function;
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	getData() {
		var request = Config.getData("5");

		this.service = new Service();
		this.service.post((datas)=>{
			console.log(datas.data)
			this.props.fetchList(datas.data);
		}, request);

	}
	componentDidMount() {//xu li getdata tu db
		this.getData();
		
	}
	deleteItem(item) {
		console.log(item)
		var request = Config.deleteItem(item.value.kiHieu);

		this.service = new Service();
		this.service.post((response)=>{
			console.log('response')
			console.log(response)
			for(var i in this.props.data) {
				if(this.props.data[i].kiHieu===response.data) {
					console.log('delete')
					var index = this.props.data.indexOf(this.props.data[i]);
					if (index > -1) {
						this.props.data.splice(index, 1);
					}
				}
			}
			this.props.fetchList(this.props.data);
			this.forceUpdate()
		}, request)
	}
	render() {
		return <Home 
		navigation={this.props.navigation} 
		list={this.props.data} 
		logout={()=>this.props.logout()}
		deleteItem={(item)=>this.deleteItem(item)}
		/>;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),//phai trung ten prop fetchList
		logout: () => dispatch(logout())
	};
}

const mapStateToProps = state => {
	return ({ //hỏi nháp cách lấy state ở bất kì trang nào
		data: state.homeReducer.list,
		isLoading: state.homeReducer.isLoading,
		isLogout: state.homeReducer.isLogout,
	});
};
export default connect(mapStateToProps, bindAction)(HomeContainer);
