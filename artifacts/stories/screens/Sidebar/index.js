import * as React from "react";
import { Text, Container, List, ListItem, Content, Header, Left, Right, Icon, Body, Badge } from "native-base";
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
export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { height: styles.heightScreen / 8, backgroundColor: styles.color.header } },
                React.createElement(Left, { style: { flexDirection: 'row', alignItems: 'center' } },
                    React.createElement(Icon, { ios: 'ios-list-box-outline', android: 'md-list-box' }),
                    React.createElement(Text, null, "  DS PH\u00D2NG B\u1EA0N"))),
            React.createElement(Content, null,
                React.createElement(List, { style: {}, dataArray: phongBan, renderRow: data => {
                        return (React.createElement(ListItem, { button: true, onPress: () => {
                                // data.route === "Login"
                                // 	? this.props.navigation.dispatch(resetAction)
                                // 	: this.props.navigation.navigate(data.route);
                            } },
                            React.createElement(Left, { style: { flex: 1 / 10 } },
                                React.createElement(Text, { style: { color: 'grey' } }, this.state.index++)),
                            React.createElement(Body, { style: { flex: 8 / 10, alignItems: 'flex-start' } },
                                React.createElement(Text, { style: { color: styles.color.listItem } }, data.name)),
                            React.createElement(Right, { style: { flex: 2 / 10 } },
                                React.createElement(Badge, null,
                                    React.createElement(Text, { style: { fontSize: 10 } }, data.amount)))));
                    } }))));
    }
}
//# sourceMappingURL=index.js.map