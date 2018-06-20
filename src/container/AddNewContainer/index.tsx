import * as React from "react";
import { connect } from "react-redux";
import AddNew from "../../stories/screens/AddNew";
import Config from './../../Util/config';
import Service from './../../Service/ManagerService';
import {create} from './actions';
import {fetchList} from './../HomeContainer/actions';
export interface Props {
	navigation: any,
	create: Function;
	oldList: Object,
	updateList: Function
}
export interface State {}
class AddNewPageContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		// console.log('>>>>')
		// console.log(this.props.data);
	}
	finished(data, callback) {
		console.log('data')
		console.log(data)
		var request = Config.createNewContent(data.kiHieu, data.ngayThang, data.hanNop, data.yeuCau, data.noiBanHanh, data.nguoiNhanNhiemVu, data.noiDung, data.ghiChu);

		this.service = new Service();
		this.service.post((response)=>{
			console.log(response)
			this.props.create(response.data)
			callback(response)
		}, request);
	}
	render() {
		const {params} = this.props.navigation.state;
		console.log(params)
		return <AddNew 
		navigation={this.props.navigation} 
		finished={(data, callback)=>this.finished(data, callback)} 
		data={this.props.oldList}
		forward={ params.value}
		/>;
	}
}

function bindAction(dispatch) {
	return {
		create: obj => dispatch(create(obj)),
	}
}

const mapStateToProps = state => {
	
	return ({
		oldList: state.homeReducer.list
	})
};

export default connect(mapStateToProps, bindAction)(AddNewPageContainer)