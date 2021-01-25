import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_218_79}
      />
      <View style={styles.View_218_98}>
        <Text style={styles.Text_218_98}>F E E D</Text>
      </View>
      <View style={styles.View_218_206}>
        <Text style={styles.Text_218_206}>Trending</Text>
      </View>
      <View style={styles.View_218_207} />
      <View style={styles.View_218_208} />
      <View style={styles.View_218_209}>
        <Text style={styles.Text_218_209}>ON</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_218_79: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 31,
    resizeMode: "cover"
  },
  View_218_98: {
    width: 244,
    minWidth: 244,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 63
  },
  Text_218_98: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_206: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 121
  },
  Text_218_206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_207: {
    width: 50,
    minWidth: 50,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 125,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_208: {
    width: 30,
    minWidth: 30,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 125,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_209: {
    width: 21,
    minWidth: 21,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 306,
    top: 128
  },
  Text_218_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
