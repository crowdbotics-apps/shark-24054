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
        style={styles.ImageBackground_213_12}
      />
      <View style={styles.View_213_29}>
        <Text style={styles.Text_213_29}>Name</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d29/4d36/c88e55487274411ce6c849ec5c1d3e19"
        }}
        style={styles.ImageBackground_213_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d29/4d36/c88e55487274411ce6c849ec5c1d3e19"
        }}
        style={styles.ImageBackground_215_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d29/4d36/c88e55487274411ce6c849ec5c1d3e19"
        }}
        style={styles.ImageBackground_215_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d29/4d36/c88e55487274411ce6c849ec5c1d3e19"
        }}
        style={styles.ImageBackground_215_2}
      />
      <View style={styles.View_213_31}>
        <Text style={styles.Text_213_31}>Email</Text>
      </View>
      <View style={styles.View_213_33}>
        <Text style={styles.Text_213_33}>Phone</Text>
      </View>
      <View style={styles.View_213_37}>
        <Text style={styles.Text_213_37}>Birthday</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d29/4d36/c88e55487274411ce6c849ec5c1d3e19"
        }}
        style={styles.ImageBackground_218_12}
      />
      <View style={styles.View_218_13}>
        <Text style={styles.Text_218_13}>Username</Text>
      </View>
      <View style={styles.View_215_3} />
      <View style={styles.View_215_4} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a6b/7c63/1255d6b5e10eff082fab581b4fbbcf2b"
        }}
        style={styles.ImageBackground_216_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b20/6e95/34a32a453e7c421274cd2f9048485d0c"
        }}
        style={styles.ImageBackground_218_7}
      />
      <View style={styles.View_218_8}>
        <Text style={styles.Text_218_8}>PRIVATE</Text>
      </View>
      <View style={styles.View_218_9}>
        <Text style={styles.Text_218_9}>PUBLIC</Text>
      </View>
      <View style={styles.View_218_34}>
        <Text style={styles.Text_218_34}>A C C O U N T</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_213_12: {
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
  View_213_29: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 111
  },
  Text_213_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_213_30: {
    width: 200.00904846191406,
    minWidth: 200.00904846191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.998779296875,
    top: 137.5
  },
  ImageBackground_215_0: {
    width: 200.01356506347656,
    minWidth: 200.01356506347656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.998779296875,
    top: 201.5
  },
  ImageBackground_215_1: {
    width: 200.01296997070312,
    minWidth: 200.01296997070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.99969482421875,
    top: 266.25
  },
  ImageBackground_215_2: {
    width: 200.01808166503906,
    minWidth: 200.01808166503906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.998779296875,
    top: 339.5
  },
  View_213_31: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 176
  },
  Text_213_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_213_33: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 243
  },
  Text_213_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_213_37: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 316
  },
  Text_213_37: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_12: {
    width: 200.01808166503906,
    minWidth: 200.01808166503906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147.998779296875,
    top: 411.5
  },
  View_218_13: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 388
  },
  Text_218_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_215_3: {
    width: 123,
    minWidth: 123,
    height: 116,
    minHeight: 116,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 479,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(80, 199, 242, 1)",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_215_4: {
    width: 123,
    minWidth: 123,
    height: 116,
    minHeight: 116,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205,
    top: 479,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_216_4: {
    width: 64,
    minWidth: 64,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 78,
    top: 489,
    resizeMode: "cover"
  },
  ImageBackground_218_7: {
    width: 62,
    minWidth: 62,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 489,
    resizeMode: "cover"
  },
  View_218_8: {
    width: 87,
    minWidth: 87,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 555
  },
  Text_218_8: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_9: {
    width: 87,
    minWidth: 87,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 233,
    top: 555
  },
  Text_218_9: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_34: {
    width: 244,
    minWidth: 244,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 63
  },
  Text_218_34: {
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
