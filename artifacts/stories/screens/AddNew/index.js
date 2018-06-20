import * as React from "react";
import { Container, Toast, Badge, Header, Spinner, Input, Title, List, Content, Button, ListItem, Icon } from "native-base";
import { View, Keyboard, Text, Alert, Platform } from 'react-native';
import styles from "./styles";
import commonColor from './../../../theme/variables/commonColor';
import Picker from './../Common/datePicker';
import { Dropdown } from 'react-native-material-dropdown';
class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: {
                ngayThang: "",
                hanNop: "",
                kiHieu: "",
                yeuCau: "",
                noiBanHanh: "",
                nguoiNhanNhiemVu: "",
                noiDung: "",
                ghiChu: "",
            },
            showToast: false,
            isFinished: false,
        };
        if (this.props.forward != undefined) {
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
        if (status.kiHieu == null || status.ngayThang == null || status.hanNop == null || status.yeuCau == null || status.nguoiNhanNhiemVu == null || status.noiDung == null || status.noiBanHanh == null) {
            Toast.show({
                text: "Các thông tin không được để trống!",
                buttonText: "Okay",
                duration: 3000
            });
            return false;
        }
        else {
            if (status.kiHieu.trim() == "" || status.ngayThang.trim() == "" || status.hanNop.trim() == "" || status.yeuCau.trim() == "" || status.nguoiNhanNhiemVu.trim() == "" || status.noiDung.trim() == "" || status.noiBanHanh.trim() == "") {
                Toast.show({
                    text: "Các thông tin không được để trống!",
                    buttonText: "Okay",
                    duration: 3000
                });
                return false;
            }
        }
        return true;
    }
    _finished() {
        if (this.checkForm(this.state.status)) {
            Alert.alert('Bạn có muốn hoàn thành?', '', [
                { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                {
                    text: 'OK', onPress: () => {
                        this.setState({ isFinished: !this.state.isFinished });
                        this.props.finished(this.state.status, (response) => {
                            if (response != null) {
                                this.setState({ isFinished: false });
                                this.props.navigation.navigate('Drawer');
                            }
                        });
                    }
                },
            ], { cancelable: false });
        }
    }
    renderButton() {
        if (!this.state.isFinished) {
            return (React.createElement(Button, { onPress: () => {
                    this._finished();
                }, bordered: true, style: {
                    position: 'absolute',
                    top: Platform.OS === 'ios' ? 30 : 0,
                    right: 10,
                    borderColor: styles.color.buttonLogin
                } },
                React.createElement(Title, { style: {
                        color: styles.color.buttonLogin
                    } }, "Xong")));
        }
        return (React.createElement(Content, { style: {
                position: 'absolute',
                top: Platform.OS === 'ios' ? 10 : 0,
                right: 10,
                borderColor: styles.color.buttonLogin
            } },
            React.createElement(Spinner, { color: styles.color.buttonLogin })));
    }
    render() {
        console.log('data');
        console.log(this.props.data);
        return (React.createElement(Container, null,
            React.createElement(Header, { style: {
                    height: styles.device.height / 5,
                    backgroundColor: styles.color.background,
                } },
                React.createElement(Button, { onPress: () => {
                        this.props.navigation.goBack();
                    }, transparent: true, style: {
                        position: 'absolute',
                        top: Platform.OS === 'ios' ? 20 : 0,
                        left: 0,
                        alignItems: 'center',
                    } },
                    React.createElement(Icon, { android: 'md-backspace', ios: 'ios-arrow-back-outline', style: {
                            color: styles.color.buttonLogin
                        } })),
                this.renderButton(),
                React.createElement(View, { style: {
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        flexDirection: 'row'
                    } },
                    React.createElement(Icon, { style: { color: styles.color.buttonLogin }, ios: 'ios-briefcase-outline', android: 'md-briefcase' }),
                    React.createElement(Title, { style: {
                            color: styles.color.buttonLogin,
                            fontSize: commonColor.fontSizeH2
                        } }, "  Kh\u1EDFi t\u1EA1o c\u00F4ng vi\u1EC7c"))),
            React.createElement(Content, { ref: c => (this.content = c) },
                React.createElement(List, null,
                    React.createElement(ListItem, { onPress: () => {
                            Keyboard.dismiss();
                        }, style: {
                            borderBottomWidth: 0
                        } },
                        React.createElement(Badge, null,
                            React.createElement(Text, { style: {
                                    color: commonColor.segmentTextColor
                                } }, "1")),
                        React.createElement(Text, { style: {
                                color: styles.color.buttonLogin
                            } }, "  K\u00ED hi\u1EC7u")),
                    React.createElement(ListItem, { itemDivider: true, style: {
                            marginLeft: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingLeft: 0
                        } },
                        React.createElement(Input, { onChangeText: (text) => { console.log(text); this.state.status.kiHieu = text; this.forceUpdate(); }, value: this.props.forward != undefined ? this.props.forward.kiHieu : this.state.status.kiHieu, style: { marginLeft: 20, }, placeholder: "ví dụ: BCDK-", placeholderTextColor: commonColor.cardBorderColor })),
                    React.createElement(View, { style: {
                            flexDirection: 'row'
                        } },
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(ListItem, { style: {
                                    borderBottomWidth: 0
                                } },
                                React.createElement(Badge, null,
                                    React.createElement(Text, { style: {
                                            color: commonColor.segmentTextColor
                                        } }, "2")),
                                React.createElement(Text, { style: {
                                        color: styles.color.buttonLogin
                                    } }, "  Ng\u00E0y th\u00E1ng")),
                            React.createElement(ListItem, { itemDivider: true, style: {
                                    marginLeft: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0
                                } },
                                React.createElement(Button
                                // placeholder='DD/MM/YYYY'
                                // placeholderTextColor={commonColor.cardBorderColor}
                                // editable={true}
                                , { 
                                    // placeholder='DD/MM/YYYY'
                                    // placeholderTextColor={commonColor.cardBorderColor}
                                    // editable={true}
                                    style: { width: styles.device.width, }, full: true, transparent: true },
                                    React.createElement(Picker, { date: this.props.forward != undefined ? this.props.forward.ngayThang : undefined, onDateChange: (date) => {
                                            this.state.status.ngayThang = date;
                                        } })))),
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(ListItem, { style: {
                                    borderBottomWidth: 0
                                } },
                                React.createElement(Badge, null,
                                    React.createElement(Text, { style: {
                                            color: commonColor.segmentTextColor
                                        } }, "3")),
                                React.createElement(Text, { style: {
                                        color: styles.color.buttonLogin
                                    } }, "  H\u1EA1n n\u1ED9p")),
                            React.createElement(ListItem, { itemDivider: true, style: {
                                    marginLeft: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0
                                } },
                                React.createElement(Button
                                // placeholder='DD/MM/YYYY'
                                // placeholderTextColor={commonColor.cardBorderColor}
                                // editable={true}
                                , { 
                                    // placeholder='DD/MM/YYYY'
                                    // placeholderTextColor={commonColor.cardBorderColor}
                                    // editable={true}
                                    style: { width: styles.device.width, }, full: true, transparent: true },
                                    React.createElement(Picker, { date: this.props.forward != undefined ? this.props.forward.hanNop : undefined, onDateChange: (date) => {
                                            this.state.status.hanNop = date;
                                            console.log(this.state.status);
                                        } }))))),
                    React.createElement(View, { style: { flexDirection: 'row', } },
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(ListItem, { onPress: () => {
                                    Keyboard.dismiss();
                                }, style: {
                                    borderBottomWidth: 0
                                } },
                                React.createElement(Badge, null,
                                    React.createElement(Text, { style: {
                                            color: commonColor.segmentTextColor
                                        } }, "4")),
                                React.createElement(Text, { style: {
                                        color: styles.color.buttonLogin
                                    } }, "  Y\u00EAu c\u1EA7u")),
                            React.createElement(ListItem, { itemDivider: true, style: {
                                    marginLeft: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0
                                } },
                                React.createElement(Button
                                // placeholder='DD/MM/YYYY'
                                // placeholderTextColor={commonColor.cardBorderColor}
                                // editable={true}
                                , { 
                                    // placeholder='DD/MM/YYYY'
                                    // placeholderTextColor={commonColor.cardBorderColor}
                                    // editable={true}
                                    style: { width: styles.device.width, }, full: true, transparent: true },
                                    React.createElement(Dropdown, { containerStyle: { width: styles.device.width - 20, position: 'absolute', left: 20, bottom: 0, borderBottomWidth: 0, }, value: this.props.forward != undefined ? this.props.forward.yeuCau : "-- Chọn --", data: [{
                                                value: 'Thông báo',
                                            }, {
                                                value: 'Chủ Trì',
                                            },], onChangeText: (value) => { this.state.status.yeuCau = value; }, textColor: commonColor.cardBorderColor })))),
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(ListItem, { onPress: () => {
                                    Keyboard.dismiss();
                                }, style: {
                                    borderBottomWidth: 0
                                } },
                                React.createElement(Badge, null,
                                    React.createElement(Text, { style: {
                                            color: commonColor.segmentTextColor
                                        } }, "5")),
                                React.createElement(Text, { style: {
                                        color: styles.color.buttonLogin
                                    } }, "  N\u01A1i ban h\u00E0nh")),
                            React.createElement(ListItem, { itemDivider: true, style: {
                                    marginLeft: 0,
                                    paddingTop: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0
                                } },
                                React.createElement(Button
                                // placeholder='DD/MM/YYYY'
                                // placeholderTextColor={commonColor.cardBorderColor}
                                // editable={true}
                                , { 
                                    // placeholder='DD/MM/YYYY'
                                    // placeholderTextColor={commonColor.cardBorderColor}
                                    // editable={true}
                                    style: { width: styles.device.width, }, full: true, transparent: true },
                                    React.createElement(Dropdown, { containerStyle: { width: styles.device.width - 20, position: 'absolute', left: 20, bottom: 0, borderBottomWidth: 0, }, value: "-- Chọn --", data: [
                                            { value: 'Công đoàn' },
                                            { value: 'Công ty' },
                                            { value: 'Tập đoàn' },
                                            { value: 'CMV' }
                                        ], onChangeText: (value) => { this.state.status.noiBanHanh = value; }, textColor: commonColor.cardBorderColor }))))),
                    React.createElement(ListItem, { onPress: () => {
                            Keyboard.dismiss();
                        }, style: {
                            borderBottomWidth: 0
                        } },
                        React.createElement(Badge, null,
                            React.createElement(Text, { style: {
                                    color: commonColor.segmentTextColor
                                } }, "6")),
                        React.createElement(Text, { style: {
                                color: styles.color.buttonLogin
                            } }, "  Ng\u01B0\u1EDDi nh\u1EADn c\u00F4ng vi\u1EC7c")),
                    React.createElement(ListItem, { itemDivider: true, style: {
                            marginLeft: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingLeft: 0
                        } },
                        React.createElement(Input, { value: this.state.status.nguoiNhanNhiemVu, onChangeText: (text) => {
                                this.state.status.nguoiNhanNhiemVu = text;
                                this.forceUpdate();
                            }, style: { marginLeft: 20, }, placeholder: "ví dụ: Nguyễn Văn A", placeholderTextColor: commonColor.cardBorderColor })),
                    React.createElement(ListItem, { onPress: () => {
                            Keyboard.dismiss();
                        }, style: {
                            borderBottomWidth: 0
                        } },
                        React.createElement(Badge, null,
                            React.createElement(Text, { style: {
                                    color: commonColor.segmentTextColor
                                } }, "7")),
                        React.createElement(Text, { style: {
                                color: styles.color.buttonLogin
                            } }, "  N\u1ED9i dung c\u00F4ng vi\u1EC7c")),
                    React.createElement(ListItem, { itemDivider: true, style: {
                            marginLeft: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingLeft: 0
                        } },
                        React.createElement(Input, { value: this.props.forward != undefined ? this.props.forward.trichYeuNoiDung : this.state.status.noiDung, multiline: true, numberOfLines: 3, style: { marginLeft: 20, height: 80 }, onChangeText: (text) => {
                                this.content._root.scrollToEnd();
                                this.state.status.noiDung = text;
                                this.forceUpdate();
                            } })),
                    React.createElement(ListItem, { onPress: () => {
                            Keyboard.dismiss();
                        }, style: {
                            borderBottomWidth: 0
                        } },
                        React.createElement(Badge, null,
                            React.createElement(Text, { style: {
                                    color: commonColor.segmentTextColor
                                } }, "8")),
                        React.createElement(Text, { style: {
                                color: styles.color.buttonLogin
                            } }, "  Ghi ch\u00FA")),
                    React.createElement(ListItem, { itemDivider: true, style: {
                            marginLeft: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingLeft: 0
                        } },
                        React.createElement(Input, { value: this.props.forward != undefined ? this.props.forward.ghiChu : this.state.status.ghiChu, style: { marginLeft: 20 }, onChangeText: (text) => {
                                this.content._root.scrollToEnd();
                                this.state.status.ghiChu = text;
                                this.forceUpdate();
                            } }))))));
    }
}
export default AddNew;
//# sourceMappingURL=index.js.map