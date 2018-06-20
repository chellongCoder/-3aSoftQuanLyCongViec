import React, { Component } from 'react';
import { Animated, Alert, TouchableOpacity, PanResponder, View, Text, } from 'react-native';
import { Icon, ListItem, Badge, Thumbnail } from "native-base";
import Interactable from 'react-native-interactable';
import styles from "./../Home/styles";
import commonColor from './../../../theme/variables/commonColor';
export default class animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widthLayout: 0,
            heightLayout: 0,
            pan: new Animated.ValueXY(),
            trichYeuNoiDung: "Lorem Ipsum is simply dummy text of the p617203728 shell am start -n com.reactnativeseed/com.reactnativeseed.MainActivityrinting and typesetting industry. Lorem Ipsum has been the iof Lorem Ipsum.",
            offset: 0,
            dropdownStatus: false
        };
        console.log(this.props.value);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => {
                this.state.pan.setOffset({ x: 0, y: 0 });
                var xx = gesture.dx + this.state.offset.x;
                var newXVal;
                if (xx >= -100) {
                    if (xx < 0)
                        newXVal = xx;
                    else
                        newXVal = 0;
                }
                else {
                    newXVal = -100;
                }
                this.state.pan.x.setValue(newXVal);
                console.log(xx, newXVal);
            },
            onPanResponderRelease: (e, gesture) => {
            },
            onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset(this.state.pan.__getValue());
                this.setState({ offset: this.state.pan.__getValue() });
                if (this.state.offset < -100)
                    this.state.offset = -100;
                console.log('offset');
                console.log(this.state.offset);
                this.state.pan.setValue({ x: 0, y: 0 });
            }
        });
    }
    _onLayout(event) {
        const { x, y, width, height } = event.nativeEvent.layout;
        if (this.state.widthLayout == 0) {
            this.setState({ widthLayout: width, heightLayout: height });
        }
        console.log('width');
        console.log(width);
    }
    _deleteItem() {
        Alert.alert('Bạn có muốn xoá công việc này không?', '', [
            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
            { text: 'OK', onPress: () => { this.props.deleteItem(this.props.value); } },
        ], { cancelable: false });
    }
    _viewDetail(value) {
        var mess = "ghi chú: " + "\t" + (value.ghiChu != null ? value.ghiChu.trim() : "") + "\n" +
            "hạn nộp: " + "\t" + (value.hanNop != null ? value.hanNop.trim() : "") + "\n" +
            "ngày tháng: " + "\t" + (value.ngayThang != null ? value.ngayThang.trim() : "") + "\n" +
            "nhận nhiệm vụ: " + "\t" + (value.nhanNhiemVu != null ? value.nhanNhiemVu.trim() : "") + "\n" +
            "nơi ban hành: " + "\t" + (value.noiBanHanh != null ? value.noiBanHanh.trim() : "") + "\n" +
            "tình trạng: " + "\t" + (value.tinhTrang != null ? value.tinhTrang.trim() : "") + "\n" +
            "trích yếu nội dung: " + "\t" + (value.trichYeuNoiDung != null ? value.trichYeuNoiDung.trim() : "") + "\n" +
            "yêu cầu: " + "\t" + (value.yeuCau != null ? value.yeuCau.trim() : "") + "\n";
        Alert.alert('Thông tin chi tiết', mess, [
            { text: 'Chuyển tiếp', onPress: () => this.props.navigation.navigate('AddNew', { value: this.props.value.value }) },
            { text: 'OK', onPress: () => { } },
        ], { cancelable: false });
        this.props.viewDetail(value);
    }
    renderAllContent() {
        if (this.state.dropdownStatus) {
            return (React.createElement(View, null,
                React.createElement(View, { style: { flexDirection: 'row', marginTop: 15 } },
                    React.createElement(Text, { style: { flexWrap: "wrap", flex: 1 } }, this.props.value.value.trichYeuNoiDung.replace(/\r?\n?/g, ''))),
                React.createElement(View, { style: {
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingTop: 10
                    } },
                    React.createElement(Thumbnail, { small: true, style: {
                            borderWidth: 1,
                            borderColor: commonColor.cardBorderColor
                        }, source: require('./../../../../images/noavatar.gif') }),
                    React.createElement(View, { style: {
                            justifyContent: 'center',
                            alignItems: 'center',
                        } },
                        React.createElement(Text, { style: { fontWeight: 'bold' } },
                            " ",
                            this.props.value.value.nhanNhiemVu.replace(/\r?\n?/g, '')))),
                React.createElement(View, { style: {
                        flexDirection: 'row',
                        paddingTop: 10,
                        paddingLeft: 10
                    } },
                    React.createElement(Icon, { style: { fontSize: 20 }, android: 'md-build', ios: 'ios-build-outline' }),
                    React.createElement(Text, { style: { color: 'red' } },
                        " ",
                        this.props.value.value.yeuCau))));
        }
        return (React.createElement(View, null,
            React.createElement(View, { style: { flexDirection: 'row', marginTop: 15 } },
                React.createElement(Text, { style: { flexWrap: "wrap", flex: 1 } }, (this.props.value.value != null && this.props.value.value.trichYeuNoiDung.length < 20) ? this.props.value.value.trichYeuNoiDung : this.props.value.value.trichYeuNoiDung.slice(0, 20) + "..."))));
    }
    render() {
        return (React.createElement(ListItem, { onLayout: (e) => this._onLayout(e), style: {
                marginHorizontal: 15,
                borderRadius: 20,
                marginTop: 20,
                flex: 1,
                shadowOffset: { width: 5, height: 5, },
                shadowColor: 'grey',
                shadowOpacity: 0.5,
                backgroundColor: commonColor.cardDefaultBg,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: 0
            } },
            React.createElement(Animated.View
            //{...this.panResponder.panHandlers}
            , { 
                //{...this.panResponder.panHandlers}
                style: [
                    {
                        flexDirection: 'row',
                    },
                ] },
                React.createElement(Animated.View, { style: [
                        {
                            width: 100,
                            flexDirection: 'column',
                            borderRightWidth: 1,
                            borderRightColor: commonColor.cardBorderColor,
                            padding: 10,
                            backgroundColor: commonColor.brandInfo,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                            alignItems: 'flex-end',
                            position: 'relative',
                        }
                    ] },
                    React.createElement(View, { style: { position: 'absolute', top: 10, left: 10 } },
                        React.createElement(Badge, null,
                            React.createElement(Text, { style: { color: commonColor.segmentTextColor } }, this.props.value.index + 1))),
                    React.createElement(View, { style: {
                            flex: 1,
                            paddingBottom: 15
                        } },
                        React.createElement(Text, null, "K\u00ED hi\u1EC7u")),
                    React.createElement(View, { style: {
                            flex: 1,
                            justifyContent: 'center',
                        } },
                        React.createElement(Text, null, "N\u1ED9i dung")),
                    React.createElement(View, { style: {
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        } },
                        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
                            React.createElement(Text, { style: { fontSize: commonColor.btnTextSizeSmall, color: 'grey', fontStyle: 'italic' } }, this.props.value.value.ngayThang)),
                        React.createElement(View, { style: { height: 15, alignItems: 'center', justifyContent: 'center', } },
                            React.createElement(Icon, { style: {
                                    fontSize: 20,
                                    color: commonColor.cardBorderColor,
                                }, android: 'md-arrow-dropdown', ios: 'md-arrow-dropdown' })),
                        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
                            React.createElement(Text, { style: { fontSize: commonColor.btnTextSizeSmall, color: 'grey', fontStyle: 'italic' } }, this.props.value.value.hanNop)))),
                React.createElement(Interactable.View, { style: {
                        width: this.state.widthLayout - 100,
                        paddingTop: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        position: 'relative',
                        zIndex: 1000,
                        backgroundColor: 'white'
                    }, horizontalOnly: true, snapPoints: [{ x: 0 }, { x: -100 }], onSnap: this.onDrawerSnap },
                    React.createElement(Animated.View, { style: [
                            {
                                transform: [
                                    { translateX: this.state.pan.x }
                                ]
                            }
                        ] },
                        React.createElement(View, { style: {
                                flexDirection: 'row',
                                flex: 9 / 10,
                            } },
                            React.createElement(View, { style: {
                                    flex: 1 / 10,
                                    alignItems: 'center'
                                } },
                                React.createElement(Icon, { style: { fontSize: 15, color: commonColor.radioColor }, android: 'md-help-buoy', ios: 'md-help-buoy' }),
                                React.createElement(Icon, { style: { fontSize: 15, color: commonColor.radioColor }, android: 'md-more', ios: 'md-more' }),
                                React.createElement(Icon, { style: { fontSize: 15, color: commonColor.radioColor }, android: 'md-help-buoy', ios: 'md-help-buoy' })),
                            React.createElement(View, { style: {
                                    flex: 9 / 10
                                } },
                                React.createElement(View, null,
                                    React.createElement(Text, { style: { flexWrap: "wrap", fontWeight: 'bold' } }, this.props.value.value.kiHieu.trim().replace(/\r?\n?/g, ''))),
                                this.renderAllContent())),
                        React.createElement(View, { style: {
                                flexDirection: 'row',
                                flex: 1 / 10
                            } },
                            React.createElement(TouchableOpacity, { style: {
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                } },
                                React.createElement(Icon, { style: { fontSize: 15 }, android: 'md-add-circle', ios: 'ios-add-circle-outline' })),
                            React.createElement(TouchableOpacity, { onPress: () => this._viewDetail(this.props.value.value), style: {
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                } },
                                React.createElement(Icon, { style: {
                                        fontSize: 15,
                                        color: this.props.value.value.tinhTrang == 2 ? 'red' : styles.color.buttonLogin
                                    }, android: 'md-eye', ios: 'ios-eye-outline' })),
                            React.createElement(TouchableOpacity, { onPress: () => {
                                    this.setState({ dropdownStatus: !this.state.dropdownStatus });
                                }, style: {
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                                } },
                                React.createElement(Icon, { android: !this.state.dropdownStatus ? 'md-arrow-dropup-circle' : 'md-arrow-dropdown-circle', ios: this.state.dropdownStatus ? 'ios-arrow-dropup-outline' : 'ios-arrow-dropdown-outline' }))))),
                React.createElement(Animated.View, { style: {
                        width: 100,
                        flexDirection: 'column',
                        borderRightWidth: 1,
                        borderRightColor: commonColor.cardBorderColor,
                        padding: 10,
                        backgroundColor: commonColor.brandInfo,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        left: -100,
                    } },
                    React.createElement(View, { style: {
                            flex: 1,
                            justifyContent: 'center'
                        } },
                        React.createElement(TouchableOpacity, { onPress: () => this._deleteItem() },
                            React.createElement(Icon, { style: { color: 'red' }, ios: 'ios-trash-outline', android: 'md-trash' })))))));
    }
}
//# sourceMappingURL=listWorkAnimation.js.map