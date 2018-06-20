import { Dimensions, StyleSheet } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const color = {
    background: "#33484C",
    cardLogin: "white",
    title: "#1D4AAD",
    buttonLogin: '#4AA3D2',
    header: '#FAFAFA',
    listItem: '#5BB3E0'
};
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FBFAFA",
    },
    shadow: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    bg: {
        flex: 1,
        marginTop: deviceHeight / 1.75,
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0,
    },
    input: {
        marginBottom: 20,
    },
    btn: {
        marginTop: 20,
        alignSelf: "center",
    },
});
export default {
    color: color,
    styles: styles,
    heightScreen: deviceHeight,
};
//# sourceMappingURL=styles.js.map