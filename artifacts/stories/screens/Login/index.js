import * as React from "react";
import { Image, Platform, TouchableOpacity } from "react-native";
import { Container, Content, Header, Button, Text, View, Icon, Card } from "native-base";
import styles from "./styles";
class Login extends React.Component {
    render() {
        return (React.createElement(Container, { style: { backgroundColor: styles.color.background } },
            React.createElement(Header, { style: { height: styles.heightScreen / 3, backgroundColor: 'white', flexDirection: 'column', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 } },
                React.createElement(TouchableOpacity, { style: { position: 'absolute', top: Platform.OS === 'ios' ? 20 : 0, right: 10, } },
                    React.createElement(Icon, { style: { color: styles.color.buttonLogin }, ios: 'ios-log-out-outline', android: 'md-log-out' })),
                React.createElement(View, { style: { alignItems: 'center' } },
                    React.createElement(Image, { style: { width: styles.deviceSize.width / 2, height: styles.deviceSize.height / 4 }, source: require('./../../../../images/3ASoft-iCon.png') })),
                React.createElement(View, { style: { alignItems: 'center', } },
                    React.createElement(Text, { style: { fontWeight: '500', fontSize: 40, color: styles.color.title, textAlign: 'center' } }, "Qu\u1EA3n l\u00FD c\u00F4ng vi\u1EC7c Demo 2018"))),
            React.createElement(Content, { style: {} },
                React.createElement(Card, null,
                    this.props.loginForm,
                    React.createElement(View, { padder: true },
                        React.createElement(Button, { style: { backgroundColor: styles.color.buttonLogin }, block: true, onPress: () => this.props.onLogin() },
                            React.createElement(Text, null, "Login")))))));
    }
}
export default Login;
//# sourceMappingURL=index.js.map