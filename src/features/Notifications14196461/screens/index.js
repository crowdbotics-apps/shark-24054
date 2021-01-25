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
        style={styles.ImageBackground_218_36}
      />
      <View style={styles.View_218_55}>
        <Text style={styles.Text_218_55}>N O T I F I C A T I O N S</Text>
      </View>
      <View style={styles.View_218_176}>
        <Text style={styles.Text_218_176}>Chats</Text>
      </View>
      <View style={styles.View_218_177}>
        <Text style={styles.Text_218_177}>Comments</Text>
      </View>
      <View style={styles.View_218_178}>
        <Text style={styles.Text_218_178}>Bids</Text>
      </View>
      <View style={styles.View_218_179}>
        <Text style={styles.Text_218_179}>Purchases</Text>
      </View>
      <View style={styles.View_218_180}>
        <Text style={styles.Text_218_180}>Order Confirmations</Text>
      </View>
      <View style={styles.View_218_181} />
      <View style={styles.View_218_182} />
      <View style={styles.View_218_183}>
        <Text style={styles.Text_218_183}>ON</Text>
      </View>
      <View style={styles.View_218_184} />
      <View style={styles.View_218_185} />
      <View style={styles.View_218_186}>
        <Text style={styles.Text_218_186}>OFF</Text>
      </View>
      <View style={styles.View_218_187} />
      <View style={styles.View_218_188} />
      <View style={styles.View_218_189}>
        <Text style={styles.Text_218_189}>ON</Text>
      </View>
      <View style={styles.View_218_190} />
      <View style={styles.View_218_191} />
      <View style={styles.View_218_192}>
        <Text style={styles.Text_218_192}>OFF</Text>
      </View>
      <View style={styles.View_218_193} />
      <View style={styles.View_218_194} />
      <View style={styles.View_218_195}>
        <Text style={styles.Text_218_195}>OFF</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8696/4035/80d4ae5807bc706d5d9aae41a81b7cfe"
        }}
        style={styles.ImageBackground_218_196}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8696/4035/80d4ae5807bc706d5d9aae41a81b7cfe"
        }}
        style={styles.ImageBackground_218_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8696/4035/80d4ae5807bc706d5d9aae41a81b7cfe"
        }}
        style={styles.ImageBackground_218_198}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8696/4035/80d4ae5807bc706d5d9aae41a81b7cfe"
        }}
        style={styles.ImageBackground_218_199}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_218_36: {
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
  View_218_55: {
    width: 244,
    minWidth: 244,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 63
  },
  Text_218_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_176: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 116
  },
  Text_218_176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_177: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 161
  },
  Text_218_177: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_178: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 205
  },
  Text_218_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_179: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 251
  },
  Text_218_179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_180: {
    width: 192,
    minWidth: 192,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 295
  },
  Text_218_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_181: {
    width: 50,
    minWidth: 50,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 118,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_182: {
    width: 30,
    minWidth: 30,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 118,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_183: {
    width: 21,
    minWidth: 21,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 306,
    top: 121
  },
  Text_218_183: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_184: {
    width: 50,
    minWidth: 50,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 166,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_185: {
    width: 30,
    minWidth: 30,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319,
    top: 166,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_186: {
    width: 21,
    minWidth: 21,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 170
  },
  Text_218_186: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_187: {
    width: 50,
    minWidth: 50,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 209,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_188: {
    width: 30,
    minWidth: 30,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 209,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_189: {
    width: 21,
    minWidth: 21,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 306,
    top: 212
  },
  Text_218_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_190: {
    width: 50,
    minWidth: 50,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 253,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_191: {
    width: 30,
    minWidth: 30,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319,
    top: 253,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_192: {
    width: 21,
    minWidth: 21,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 257
  },
  Text_218_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_193: {
    width: 50,
    minWidth: 50,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 299,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_194: {
    width: 30,
    minWidth: 30,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 319,
    top: 299,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 10.5,
    borderTopRightRadius: 10.5,
    borderBottomLeftRadius: 10.5,
    borderBottomRightRadius: 10.5
  },
  View_218_195: {
    width: 21,
    minWidth: 21,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 326,
    top: 303
  },
  Text_218_195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_196: {
    width: 338,
    minWidth: 338,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 154
  },
  ImageBackground_218_197: {
    width: 338,
    minWidth: 338,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 200
  },
  ImageBackground_218_198: {
    width: 338,
    minWidth: 338,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 244
  },
  ImageBackground_218_199: {
    width: 338,
    minWidth: 338,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 285
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
