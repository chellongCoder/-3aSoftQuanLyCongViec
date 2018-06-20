import * as React from "react";
import { View, Platform, TouchableOpacity, Alert, } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, List } from "native-base";
import { NavigationActions } from "react-navigation";
import styles from "./styles";
import commonColor from './../../../theme/variables/commonColor';
import ListWork from './../Common/listWorkAnimation';
const tinhTrang = {
    DA_XEM: 1,
    CAN_XEM: 2,
    HET_HAN: 0,
};
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Login" })],
});
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    viewDetail(item) {
    }
    renderRow(value, index) {
        return (React.createElement(ListWork, { navigation: this.props.navigation, value: { value: value, index: index }, deleteItem: (item) => this.deleteItem(item), viewDetail: (item) => this.viewDetail(item) }));
    }
    deleteItem(item) {
        this.props.deleteItem(item);
    }
    logout() {
        Alert.alert('Bạn có muốn đăng xuất không?', "", [
            { text: 'Cancel', onPress: () => { } },
            { text: 'OK', onPress: () => {
                    this.props.navigation.dispatch(resetAction);
                    this.props.logout();
                } }
        ], { cancelable: false });
    }
    onDrawerSnap() {
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { androidStatusBarColor: styles.color.background, style: {
                    height: styles.heightScreen / 3,
                    backgroundColor: styles.color.background,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    flexDirection: 'column',
                } },
                React.createElement(View, { style: { flex: 1 } },
                    React.createElement(Button, { style: {
                            position: 'absolute',
                            top: Platform.OS === 'ios' ? 20 : 0,
                            left: 0,
                        }, transparent: true },
                        React.createElement(Icon, { active: true, name: "menu", onPress: () => this.props.navigation.navigate("DrawerOpen") })),
                    React.createElement(TouchableOpacity, { onPress: () => {
                            this.logout();
                        }, style: { position: 'absolute', top: Platform.OS === 'ios' ? 30 : 10, right: 10, } },
                        React.createElement(Icon, { style: { color: styles.color.buttonLogin }, ios: 'ios-exit-outline', android: 'md-exit' })),
                    React.createElement(TouchableOpacity, { style: { position: 'absolute', bottom: 10, left: 10 } },
                        React.createElement(Title, { style: { color: styles.color.buttonLogin, fontWeight: 'bold', fontSize: 30 } }, "Qu\u1EA3n L\u00FD C\u00F4ng Vi\u1EC7c")))),
            React.createElement(View, { style: {
                    shadowOffset: { width: 5, height: 5, },
                    shadowColor: 'grey',
                    shadowOpacity: 0.5,
                    backgroundColor: 'white',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    flexDirection: 'row',
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: commonColor.cardBorderColor
                } },
                React.createElement(TouchableOpacity, { onPress: () => {
                        this.props.navigation.navigate('AddNew', { value: undefined });
                    }, style: { flex: 1, alignItems: 'center' } },
                    React.createElement(Icon, { fontSize: 30, android: 'md-add-circle', ios: 'ios-add-circle-outline' })),
                React.createElement(View, { style: { flex: 1, alignItems: 'center' } },
                    React.createElement(Icon, { fontSize: 30, android: 'md-search', ios: 'ios-search-outline' }))),
            React.createElement(Content, null,
                React.createElement(List, null, this.props.list.map((item, i) => {
                    return this.renderRow(item, i);
                })))));
    }
}
export default Home;
//# sourceMappingURL=index.js.map