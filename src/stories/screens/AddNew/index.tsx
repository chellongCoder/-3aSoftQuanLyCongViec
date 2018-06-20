import * as React from "react";
import { Container, Toast, Badge, Header, Spinner, Input, Title, List, Content, Button, ListItem, Icon, Left, Right, Body } from "native-base";
import { View, Keyboard, Text, Alert, Platform } from 'react-native'
import styles from "./styles";
import commonColor from './../../../theme/variables/commonColor';
import Picker from './../Common/datePicker';
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';

export interface Props {
	navigation: any;
	onDateChange: Function;
	finished: Function;
	data: any;
	forward: Object
}
export interface State { }
class AddNew extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			status: {
				ngayThang: "",
				hanNop: "",
				kiHieu:"",
				yeuCau:"",
				noiBanHanh:"",
				nguoiNhanNhiemVu:"",
				noiDung:"",
				ghiChu:"",
			},
			showToast: false,
			isFinished: false,
		}
		if(this.props.forward!=undefined) {
			this.state.status.kiHieu = this.props.forward.kiHieu;
			this.state.status.ngayThang = this.props.forward.ngayThang;
			this.state.status.hanNop = this.props.forward.hanNop;
			this.state.status.yeuCau = this.props.forward.yeuCau;
			this.state.status.noiBanHanh = this.props.forward.noiBanHanh;
			this.state.status.nguoiNhanNhiemVu = this.props.forward.nhanNhiemVu;
			this.state.status.noiDung = this.props.forward.trichYeuNoiDung;
			this.state.status.ghiChu = this.props.forward.ghiChu;
		}

	}
	checkForm(status) {
		if(status.kiHieu==null || status.ngayThang==null || status.hanNop==null || status.yeuCau==null || status.nguoiNhanNhiemVu==null || status.noiDung==null || status.noiBanHanh==null) {
			Toast.show({
				text: "Các thông tin không được để trống!",
				buttonText: "Okay",
				duration: 3000
			})
			return false
		} else {
			if (status.kiHieu.trim()=="" || status.ngayThang.trim() == "" || status.hanNop.trim() == "" || status.yeuCau.trim() == "" || status.nguoiNhanNhiemVu.trim() == "" || status.noiDung.trim() == "" || status.noiBanHanh.trim()=="") {
				Toast.show({
					text: "Các thông tin không được để trống!",
					buttonText: "Okay",
					duration: 3000
				})
				return false;
			}
		}
		
		return true;
	}
	_finished() {

		if (this.checkForm(this.state.status)) {

			Alert.alert(
				'Bạn có muốn hoàn thành?',
				'',
				[
					{ text: 'Cancel', onPress: () => { }, style: 'cancel' },
					{
						text: 'OK', onPress: () => {
							this.setState({ isFinished: !this.state.isFinished })
							this.props.finished(this.state.status, (response) => {
								if (response != null) {
									this.setState({ isFinished: false })
									this.props.navigation.navigate('Drawer')
								}
							})
						}
					},
				],
				{ cancelable: false }
			)
		}
	}
	renderButton() {
		if (!this.state.isFinished) {
			return (
				<Button
					onPress={() => {
						this._finished();
					}}
					bordered
					style={{
						position: 'absolute',
						top: Platform.OS === 'ios' ? 30 : 0,
						right: 10,
						borderColor: styles.color.buttonLogin
					}}>
					<Title
						style={{
							color: styles.color.buttonLogin
						}}>Xong</Title>
				</Button>
			)
		}
		return (
			<Content
				style={{
					position: 'absolute',
					top: Platform.OS === 'ios' ? 10 : 0,
					right: 10,
					borderColor: styles.color.buttonLogin
				}}>
				<Spinner color={styles.color.buttonLogin} />
			</Content>
		)
	}
	render() {
		
		console.log('data')
		console.log(this.props.data)
		return (
			<Container>
				<Header
					style={{
						height: styles.device.height / 5,
						backgroundColor: styles.color.background,
					}}>
					<Button
						onPress={() => {
							this.props.navigation.goBack();
						}}
						transparent
						style={{
							position: 'absolute',
							top: Platform.OS === 'ios' ? 20 : 0,
							left: 0,
							alignItems: 'center',
						}}>
						<Icon android='md-backspace' ios='ios-arrow-back-outline'
							style={{
								color: styles.color.buttonLogin
							}} />
					</Button>
					{
						this.renderButton()
					}
					<View
						style={{
							position: 'absolute',
							bottom: 10,
							left: 10,
							flexDirection: 'row'
						}}>
						<Icon style={{ color: styles.color.buttonLogin }} ios='ios-briefcase-outline' android='md-briefcase' />
						<Title
							style={{
								color: styles.color.buttonLogin,
								fontSize: commonColor.fontSizeH2
							}}>  Khởi tạo công việc</Title>
					</View>
				</Header>
				<Content
					
					ref={c => (this.content = c)}
				>
					<List>
					<ListItem
							onPress={() => {
								Keyboard.dismiss()
							}}
							style={{
								borderBottomWidth: 0
							}}>
							<Badge
							>
								<Text style={{
									color: commonColor.segmentTextColor
								}}>1</Text>
							</Badge>
							<Text style={{
								color: styles.color.buttonLogin
							}}>  Kí hiệu</Text>
						</ListItem>
						<ListItem itemDivider
							style={{
								marginLeft: 0,
								paddingTop: 0,
								paddingBottom: 0,
								paddingLeft: 0
							}}>

							<Input
							onChangeText={(text) => {console.log(text);this.state.status.kiHieu=text; this.forceUpdate()}
								value={this.props.forward!=undefined ? this.props.forward.kiHieu : this.state.status.kiHieu}
								
								style={{ marginLeft: 20, }}
								placeholder="ví dụ: BCDK-"
								placeholderTextColor={commonColor.cardBorderColor}
							/>
						</ListItem>
						<View
							style={{
								flexDirection: 'row'
							}}>
							<View
								style={{ flex: 1 }}>
								<ListItem
									style={{
										borderBottomWidth: 0
									}}>
									<Badge
									>
										<Text style={{
											color: commonColor.segmentTextColor
										}}>2</Text>
									</Badge>
									<Text style={{
										color: styles.color.buttonLogin
									}}>  Ngày tháng</Text>
								</ListItem>
								<ListItem itemDivider
									style={{
										marginLeft: 0,
										paddingTop: 0,
										paddingBottom: 0,
										paddingLeft: 0
									}}>

									<Button
										// placeholder='DD/MM/YYYY'
										// placeholderTextColor={commonColor.cardBorderColor}
										// editable={true}
										style={{ width: styles.device.width, }}
										full
										transparent
									>
										<Picker 
										date={this.props.forward!=undefined ? this.props.forward.ngayThang : undefined}
										onDateChange={(date) => {
											this.state.status.ngayThang = date;
										}} />
									</Button>
								</ListItem>
							</View>
							<View
								style={{ flex: 1 }}>
								<ListItem
									style={{
										borderBottomWidth: 0
									}}>
									<Badge
									>
										<Text style={{
											color: commonColor.segmentTextColor
										}}>3</Text>
									</Badge>
									<Text style={{
										color: styles.color.buttonLogin
									}}>  Hạn nộp</Text>
								</ListItem>
								<ListItem itemDivider
									style={{
										marginLeft: 0,
										paddingTop: 0,
										paddingBottom: 0,
										paddingLeft: 0
									}}>

									<Button
										// placeholder='DD/MM/YYYY'
										// placeholderTextColor={commonColor.cardBorderColor}
										// editable={true}
										style={{ width: styles.device.width, }}
										full
										transparent
									>
										<Picker 
										date={this.props.forward!=undefined ? this.props.forward.hanNop : undefined}
										onDateChange={(date) => {
											this.state.status.hanNop = date
											console.log(this.state.status)
										}} />
									</Button>
								</ListItem>
							</View>
						</View>
						<View
						style={{flexDirection: 'row',}}>
							<View
							style={{flex: 1}}>
								<ListItem
									onPress={() => {
										Keyboard.dismiss()
									}}
									style={{
										borderBottomWidth: 0
									}}>
									<Badge
									>
										<Text style={{
											color: commonColor.segmentTextColor
										}}>4</Text>
									</Badge>
									<Text style={{
										color: styles.color.buttonLogin
									}}>  Yêu cầu</Text>
								</ListItem>
								<ListItem itemDivider
									style={{
										marginLeft: 0,
										paddingTop: 0,
										paddingBottom: 0,
										paddingLeft: 0
									}}>

									<Button
										// placeholder='DD/MM/YYYY'
										// placeholderTextColor={commonColor.cardBorderColor}
										// editable={true}
										style={{ width: styles.device.width, }}
										full
										transparent
									>
										<Dropdown
											containerStyle={{ width: styles.device.width - 20, position: 'absolute', left: 20, bottom: 0, borderBottomWidth: 0, }}
											value={this.props.forward!=undefined ? this.props.forward.yeuCau : "-- Chọn --"}
											data={[{
												value: 'Thông báo',
											}, {
												value: 'Chủ Trì',
											},]}
											onChangeText={(value) => { this.state.status.yeuCau = value }}
											textColor={commonColor.cardBorderColor}
										// dropdownOffset={{top: 50, left: 0}}
										/>
									</Button>
								</ListItem>
							</View>
							<View
							style={{flex: 1}}>
								<ListItem
									onPress={() => {
										Keyboard.dismiss()
									}}
									style={{
										borderBottomWidth: 0
									}}>
									<Badge
									>
										<Text style={{
											color: commonColor.segmentTextColor
										}}>5</Text>
									</Badge>
									<Text style={{
										color: styles.color.buttonLogin
									}}>  Nơi ban hành</Text>
								</ListItem>
								<ListItem itemDivider
									style={{
										marginLeft: 0,
										paddingTop: 0,
										paddingBottom: 0,
										paddingLeft: 0
									}}>

									<Button
										// placeholder='DD/MM/YYYY'
										// placeholderTextColor={commonColor.cardBorderColor}
										// editable={true}
										style={{ width: styles.device.width, }}
										full
										transparent
									>
										<Dropdown
											containerStyle={{ width: styles.device.width - 20, position: 'absolute', left: 20, bottom: 0, borderBottomWidth: 0, }}
											value={"-- Chọn --"}
											data={[
												{value: 'Công đoàn'},
												{value: 'Công ty'},
												{value: 'Tập đoàn'},
												{value: 'CMV'}
											]}
											onChangeText={(value) => { this.state.status.noiBanHanh = value }}
											textColor={commonColor.cardBorderColor}
										// dropdownOffset={{top: 50, left: 0}}
										/>
									</Button>
								</ListItem>
							</View>
						</View>
						<ListItem
							onPress={() => {
								Keyboard.dismiss()
							}}
							style={{
								borderBottomWidth: 0
							}}>
							<Badge
							>
								<Text style={{
									color: commonColor.segmentTextColor
								}}>6</Text>
							</Badge>
							<Text style={{
								color: styles.color.buttonLogin
							}}>  Người nhận công việc</Text>
						</ListItem>
						<ListItem itemDivider
							style={{
								marginLeft: 0,
								paddingTop: 0,
								paddingBottom: 0,
								paddingLeft: 0
							}}>

							<Input
								value={this.state.status.nguoiNhanNhiemVu}
								onChangeText={(text) => {
									this.state.status.nguoiNhanNhiemVu = text
									this.forceUpdate()
								}}
								style={{ marginLeft: 20, }}
								placeholder="ví dụ: Nguyễn Văn A"
								placeholderTextColor={commonColor.cardBorderColor}
							/>
						</ListItem>
						<ListItem
							onPress={() => {
								Keyboard.dismiss()
							}}
							style={{
								borderBottomWidth: 0
							}}>
							<Badge
							>
								<Text style={{
									color: commonColor.segmentTextColor
								}}>7</Text>
							</Badge>
							<Text style={{
								color: styles.color.buttonLogin
							}}>  Nội dung công việc</Text>
						</ListItem>
						<ListItem itemDivider
							style={{
								marginLeft: 0,
								paddingTop: 0,
								paddingBottom: 0,
								paddingLeft: 0
							}}>

							<Input
							value={this.props.forward!=undefined ? this.props.forward.trichYeuNoiDung : this.state.status.noiDung}
								multiline
								numberOfLines={3}
								style={{ marginLeft: 20, height: 80 }}
								onChangeText={(text) => {
									this.content._root.scrollToEnd()
									this.state.status.noiDung = text;
									this.forceUpdate()
								}}
								
							/>
						</ListItem>
						<ListItem
							onPress={() => {
								Keyboard.dismiss()
							}}
							style={{
								borderBottomWidth: 0
							}}>
							<Badge
							>
								<Text style={{
									color: commonColor.segmentTextColor
								}}>8</Text>
							</Badge>
							<Text style={{
								color: styles.color.buttonLogin
							}}>  Ghi chú</Text>
						</ListItem>
						<ListItem itemDivider
							style={{
								marginLeft: 0,
								paddingTop: 0,
								paddingBottom: 0,
								paddingLeft: 0
							}}>

							<Input
								value={this.props.forward!=undefined ? this.props.forward.ghiChu : this.state.status.ghiChu}
								style={{ marginLeft: 20 }}
								onChangeText={(text) => {
									this.content._root.scrollToEnd()
									this.state.status.ghiChu = text;
									this.forceUpdate()
								}}

							/>
						</ListItem>
					</List>
				</Content>
			</Container>
		)
	}
}

export default AddNew;
