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
      <View source={{ uri: "null" }} style={styles.View_174_10} />
      <View style={styles.View_174_11} />
      <View style={styles.View_174_12}>
        <Text style={styles.Text_174_12}>NAME</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f07/77a4/4edd3ce8034c286483cce8d1c388d04e"
        }}
        style={styles.ImageBackground_174_13}
      />
      <View style={styles.View_174_14}>
        <Text style={styles.Text_174_14}>BIO</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f07/77a4/4edd3ce8034c286483cce8d1c388d04e"
        }}
        style={styles.ImageBackground_174_15}
      />
      <View style={styles.View_174_16}>
        <Text style={styles.Text_174_16}>WEBSITE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f07/77a4/4edd3ce8034c286483cce8d1c388d04e"
        }}
        style={styles.ImageBackground_174_17}
      />
      <View style={styles.View_174_20}>
        <View style={styles.View_174_21} />
        <View style={styles.View_174_22}>
          <Text style={styles.Text_174_22}>DONE</Text>
        </View>
      </View>
      <View style={styles.View_174_23}>
        <View style={styles.View_174_24}>
          <Text style={styles.Text_174_24}>P R O F I L E</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f62/841e/027172a03bd763932ab943af2311ba00"
        }}
        style={styles.ImageBackground_174_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efdb/3abd/024beb4433e6b5796fa860a314570c54"
        }}
        style={styles.ImageBackground_174_27}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_174_10: {
    width: 20,
    minWidth: 20,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 228
  },
  View_174_11: {
    width: 24,
    minWidth: 24,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114,
    top: 559
  },
  View_174_12: {
    width: 103,
    minWidth: 103,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.000732421875,
    top: 276
  },
  Text_174_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_13: {
    width: 324.0015563964844,
    minWidth: 324.0015563964844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 336.506103515625
  },
  View_174_14: {
    width: 103,
    minWidth: 103,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.000732421875,
    top: 401
  },
  Text_174_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_15: {
    width: 324.0015563964844,
    minWidth: 324.0015563964844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 461.506103515625
  },
  View_174_16: {
    width: 229,
    minWidth: 229,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.000732421875,
    top: 525
  },
  Text_174_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_17: {
    width: 324.0015563964844,
    minWidth: 324.0015563964844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 585.506103515625
  },
  View_174_20: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 671
  },
  View_174_21: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_174_22: {
    width: 101.25,
    minWidth: 101.25,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.7115478515625,
    top: 13
  },
  Text_174_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_23: {
    width: 186,
    minWidth: 186,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 38
  },
  View_174_24: {
    width: 186,
    minWidth: 186,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_174_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_26: {
    width: 160,
    minWidth: 160,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 89
  },
  ImageBackground_174_27: {
    width: 89,
    minWidth: 89,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 143,
    top: 136,
    resizeMode: "cover"
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
