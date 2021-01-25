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
      <View source={{ uri: "null" }} style={styles.View_170_1} />
      <View style={styles.View_170_18} />
      <View style={styles.View_171_1}>
        <Text style={styles.Text_171_1}>USERNAME</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f07/77a4/4edd3ce8034c286483cce8d1c388d04e"
        }}
        style={styles.ImageBackground_171_3}
      />
      <View style={styles.View_171_4}>
        <Text style={styles.Text_171_4}>DATE OF BIRTH</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f07/77a4/4edd3ce8034c286483cce8d1c388d04e"
        }}
        style={styles.ImageBackground_171_5}
      />
      <View style={styles.View_171_8}>
        <Text style={styles.Text_171_8}>PHONE NUMBER / EMAIL</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f07/77a4/4edd3ce8034c286483cce8d1c388d04e"
        }}
        style={styles.ImageBackground_171_9}
      />
      <View style={styles.View_171_10}>
        <View style={styles.View_171_11} />
        <View style={styles.View_171_12}>
          <Text style={styles.Text_171_12}>REGISTER</Text>
        </View>
      </View>
      <View style={styles.View_174_8}>
        <View style={styles.View_171_2}>
          <Text style={styles.Text_171_2}>S H A R K</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fa3/98fc/4414cc8366c517ab213431d7ecba7a3f"
          }}
          style={styles.ImageBackground_171_13}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_170_1: {
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
  View_170_18: {
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
  View_171_1: {
    width: 103,
    minWidth: 103,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 175
  },
  Text_171_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_3: {
    width: 324.0015563964844,
    minWidth: 324.0015563964844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.999267578125,
    top: 235.506103515625
  },
  View_171_4: {
    width: 172,
    minWidth: 172,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.000732421875,
    top: 295
  },
  Text_171_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_5: {
    width: 324.0015563964844,
    minWidth: 324.0015563964844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 355.506103515625
  },
  View_171_8: {
    width: 229,
    minWidth: 229,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.000732421875,
    top: 429
  },
  Text_171_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_9: {
    width: 324.0015563964844,
    minWidth: 324.0015563964844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 489.506103515625
  },
  View_171_10: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 589
  },
  View_171_11: {
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
  View_171_12: {
    width: 101.25,
    minWidth: 101.25,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.71142578125,
    top: 13
  },
  Text_171_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_8: {
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
  View_171_2: {
    width: 136,
    minWidth: 136,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45
  },
  Text_171_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_171_13: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
