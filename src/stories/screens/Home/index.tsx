import * as React from "react";
import { View, Text, Platform, TouchableOpacity, Alert, } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  Card,
  CardItem,
  ListItem,
  Badge
} from "native-base";
import { NavigationActions } from "react-navigation";
import styles from "./styles";
import commonColor from './../../../theme/variables/commonColor';
import ListWork from './../Common/listWorkAnimation';
 import Interactable from 'react-native-interactable';

export interface Props {
  navigation: any;
  list: any;
  logout: Function;
  deleteItem: Function;
}
export interface State { }
const tinhTrang = {
  DA_XEM: 1,
  CAN_XEM: 2,
  HET_HAN: 0,
}

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })],
});
class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  viewDetail(item) {

  }
  renderRow(value, index) {
    return (
      <ListWork 
      navigation={this.props.navigation} 
      value={{value: value, index: index}} 
      deleteItem={(item)=>this.deleteItem(item)}
      viewDetail = {(item)=>this.viewDetail(item)}
      />
    )
  }
  deleteItem(item) {
    this.props.deleteItem(item)
  }
  logout() {
    Alert.alert(
      'Bạn có muốn đăng xuất không?',
      "",
      [
        { text: 'Cancel', onPress: () => { } },
        { text: 'OK', onPress: () => {
          this.props.navigation.dispatch(resetAction);
          this.props.logout()
        }}
      ],
      { cancelable: false }
    )
  }
  onDrawerSnap() {

  }
  render() {

    return (
      <Container>
        <Header androidStatusBarColor={styles.color.background} style={{
          height: styles.heightScreen / 3,
          backgroundColor: styles.color.background,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          flexDirection: 'column',
        }}>

          <View style={{ flex: 1 }}>
            <Button
              style={{
                position: 'absolute',
                top: Platform.OS === 'ios' ? 20 : 0,
                left: 0,

              }}
              transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>

            <TouchableOpacity
              onPress={() => {
                this.logout()
              }}
              style={{ position: 'absolute', top: Platform.OS === 'ios' ? 30 : 10, right: 10, }}>
              <Icon
                style={{ color: styles.color.buttonLogin }}
                ios='ios-exit-outline' android='md-exit' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: 'absolute', bottom: 10, left: 10 }}>
              <Title style={{ color: styles.color.buttonLogin, fontWeight: 'bold', fontSize: 30 }}>Quản Lý Công Việc</Title>
            </TouchableOpacity>

          </View>
        </Header>
        <View
          style={{
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
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('AddNew',{value: undefined})
            }}
            style={{ flex: 1, alignItems: 'center' }}>
            <Icon fontSize={30} android='md-add-circle' ios='ios-add-circle-outline' />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Icon fontSize={30} android='md-search' ios='ios-search-outline' />
          </View>
        </View>
       
        <Content>
        {/* <Interactable.View
          horizontalOnly={true}
          // springPoints={[{x: 0, tension: 6000, damping:3, influenceArea: {left: 10}}]}
          // gravityPoints={[{x: 0, y: 0, strength: 10000, falloff: 60, damping: 2, }]}
          // frictionAreas={[{damping: 1, influenceArea: {top: 0}, haptics: false}]}
          alertAreas={[{id: 'myArea', influenceArea: {top: 0}}]}
          onSnap={this.onDrawerSnap}> */}

          <List>
            {this.props.list.map((item, i) => {
              return this.renderRow(item, i);
            })}
          </List>
          {/* </Interactable.View> */}
        </Content>

      </Container>
    );
  }
}

export default Home;
