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
      <View source={{ uri: "null" }} style={styles.View_174_29} />
      <View style={styles.View_174_30} />
      <View style={styles.View_174_39}>
        <View style={styles.View_174_40} />
        <View style={styles.View_174_41}>
          <Text style={styles.Text_174_41}>VERIFY</Text>
        </View>
      </View>
      <View style={styles.View_174_42}>
        <View style={styles.View_174_43}>
          <Text style={styles.Text_174_43}>S H A R K</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa3/98fc/4414cc8366c517ab213431d7ecba7a3f"
          }}
          style={styles.ImageBackground_174_44}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476e/f541/d016776d3a5ae9a4167e80c25e150d01"
        }}
        style={styles.ImageBackground_174_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476e/f541/d016776d3a5ae9a4167e80c25e150d01"
        }}
        style={styles.ImageBackground_174_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476e/f541/d016776d3a5ae9a4167e80c25e150d01"
        }}
        style={styles.ImageBackground_174_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476e/f541/d016776d3a5ae9a4167e80c25e150d01"
        }}
        style={styles.ImageBackground_174_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476e/f541/d016776d3a5ae9a4167e80c25e150d01"
        }}
        style={styles.ImageBackground_174_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/476e/f541/d016776d3a5ae9a4167e80c25e150d01"
        }}
        style={styles.ImageBackground_174_48}
      />
      <View style={styles.View_174_52}>
        <Text style={styles.Text_174_52}>
          ENTER THE 6 DIGIT CODE SENT TO YOUR EMAIL / PHONE NUMBER
        </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_174_29: {
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
  View_174_30: {
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
  View_174_39: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 457
  },
  View_174_40: {
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
  View_174_41: {
    width: 101.25,
    minWidth: 101.25,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.7115478515625,
    top: 13
  },
  Text_174_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_42: {
    width: 136,
    minWidth: 136,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 32
  },
  View_174_43: {
    width: 136,
    minWidth: 136,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45
  },
  Text_174_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_44: {
    width: 33,
    minWidth: 33,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_174_45: {
    width: 50.50566101074219,
    minWidth: 50.50566101074219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 380
  },
  ImageBackground_174_46: {
    width: 50.505680084228516,
    minWidth: 50.505680084228516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82.9278564453125,
    top: 380
  },
  ImageBackground_174_47: {
    width: 50.505680084228516,
    minWidth: 50.505680084228516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136.855712890625,
    top: 380
  },
  ImageBackground_174_49: {
    width: 50.505680084228516,
    minWidth: 50.505680084228516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245.5673828125,
    top: 380
  },
  ImageBackground_174_50: {
    width: 50.505680084228516,
    minWidth: 50.505680084228516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299.4952392578125,
    top: 380
  },
  ImageBackground_174_48: {
    width: 50.505680084228516,
    minWidth: 50.505680084228516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 190.7835693359375,
    top: 380
  },
  View_174_52: {
    width: 346,
    minWidth: 346,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 247
  },
  Text_174_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
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
