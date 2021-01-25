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
      <View style={styles.View_174_145}>
        <View style={styles.View_174_146} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1035/f5f1/f38491ceb2becc239bda0637092df79c"
          }}
          style={styles.ImageBackground_174_147}
        />
        <View style={styles.View_174_148}>
          <Text style={styles.Text_174_148}>Search</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_174_149}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0edc/7e40/e4ec6550ae7e922c6c6a02dd4987a6e2"
        }}
        style={styles.ImageBackground_174_150}
      />
      <View style={styles.View_174_151}>
        <Text style={styles.Text_174_151}>ACCOUNT</Text>
      </View>
      <View style={styles.View_174_154}>
        <Text style={styles.Text_174_154}>NOTIFICATIONS</Text>
      </View>
      <View style={styles.View_174_157}>
        <Text style={styles.Text_174_157}>SECURITY AND PRIVACY</Text>
      </View>
      <View style={styles.View_174_162}>
        <Text style={styles.Text_174_162}>FEED</Text>
      </View>
      <View style={styles.View_174_165}>
        <Text style={styles.Text_174_165}>ARCHIVE</Text>
      </View>
      <View style={styles.View_174_167}>
        <Text style={styles.Text_174_167}>LOG OUT</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04af/2f94/db02fb53bc93b242d9720be7a88d11f1"
        }}
        style={styles.ImageBackground_174_152}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04af/2f94/db02fb53bc93b242d9720be7a88d11f1"
        }}
        style={styles.ImageBackground_174_155}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04af/2f94/db02fb53bc93b242d9720be7a88d11f1"
        }}
        style={styles.ImageBackground_174_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04af/2f94/db02fb53bc93b242d9720be7a88d11f1"
        }}
        style={styles.ImageBackground_174_164}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04af/2f94/db02fb53bc93b242d9720be7a88d11f1"
        }}
        style={styles.ImageBackground_174_166}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01f4/95f0/02b6f0dc810edba3712a46fe11c27137"
        }}
        style={styles.ImageBackground_174_153}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c89/f402/5077f44c04ec62cde473d8fe1a424756"
        }}
        style={styles.ImageBackground_174_163}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b902/eaa4/425422f8885da1c92e71d1e0815bd363"
        }}
        style={styles.ImageBackground_174_168}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f66/86f2/cc4e625e00b8db22d70012bbd3811801"
        }}
        style={styles.ImageBackground_216_3}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_174_145: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 68
  },
  View_174_146: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_174_147: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 2,
    resizeMode: "cover"
  },
  View_174_148: {
    width: 218,
    minWidth: 218,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 1
  },
  Text_174_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_149: {
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
  ImageBackground_174_150: {
    width: 46,
    minWidth: 46,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 126,
    resizeMode: "cover"
  },
  View_174_151: {
    width: 103,
    minWidth: 103,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 134
  },
  Text_174_151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_154: {
    width: 206,
    minWidth: 206,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 202
  },
  Text_174_154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_157: {
    width: 250,
    minWidth: 250,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 279
  },
  Text_174_157: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_162: {
    width: 250,
    minWidth: 250,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 354
  },
  Text_174_162: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_165: {
    width: 250,
    minWidth: 250,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 430
  },
  Text_174_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_174_167: {
    width: 250,
    minWidth: 250,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 518
  },
  Text_174_167: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_174_152: {
    width: 329.0060729980469,
    minWidth: 329.0060729980469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 185
  },
  ImageBackground_174_155: {
    width: 329.0060729980469,
    minWidth: 329.0060729980469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 253
  },
  ImageBackground_174_158: {
    width: 329.0060729980469,
    minWidth: 329.0060729980469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 332
  },
  ImageBackground_174_164: {
    width: 329.0060729980469,
    minWidth: 329.0060729980469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 408
  },
  ImageBackground_174_166: {
    width: 329.0060729980469,
    minWidth: 329.0060729980469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 485
  },
  ImageBackground_174_153: {
    width: 48,
    minWidth: 48,
    height: 50.43037796020508,
    minHeight: 50.43037796020508,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 191,
    resizeMode: "cover"
  },
  ImageBackground_174_163: {
    width: 41,
    minWidth: 41,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 347,
    resizeMode: "cover"
  },
  ImageBackground_174_168: {
    width: 40,
    minWidth: 40,
    height: 32.63374328613281,
    minHeight: 32.63374328613281,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 428,
    resizeMode: "cover"
  },
  ImageBackground_216_3: {
    width: 42,
    minWidth: 42,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 269,
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
