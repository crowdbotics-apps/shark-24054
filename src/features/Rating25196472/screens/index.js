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
      <View style={styles.View_218_265}>
        <View style={styles.View_218_266}>
          <View style={styles.View_218_267} />
        </View>
        <View style={styles.View_218_268}>
          <Text style={styles.Text_218_268}>Write Message...</Text>
        </View>
      </View>
      <View style={styles.View_218_284} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25d8/e63b/e89593e4c8ba101469dd4ebb14dda400"
        }}
        style={styles.ImageBackground_218_211}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_218_214}
      />
      <View style={styles.View_218_215}>
        <Text style={styles.Text_218_215}>wunn_a</Text>
      </View>
      <View style={styles.View_218_223}>
        <View style={styles.View_218_224} />
        <View style={styles.View_218_225}>
          <Text style={styles.Text_218_225}>
            dem slides insane wunna fr go crazy
          </Text>
        </View>
      </View>
      <View style={styles.View_218_274}>
        <View style={styles.View_218_275} />
        <View style={styles.View_218_276}>
          <Text style={styles.Text_218_276}>
            dem slides insane wunna fr go crazy
          </Text>
        </View>
      </View>
      <View style={styles.View_218_277}>
        <View style={styles.View_218_278} />
        <View style={styles.View_218_279}>
          <Text style={styles.Text_218_279}>
            dem slides insane wunna fr go crazy
          </Text>
        </View>
      </View>
      <View style={styles.View_218_280}>
        <View style={styles.View_218_281} />
        <View style={styles.View_218_282}>
          <Text style={styles.Text_218_282}>
            yessir man u already know ima deliver soon cuh
          </Text>
        </View>
      </View>
      <View style={styles.View_218_286}>
        <View style={styles.View_218_287} />
        <View style={styles.View_218_288}>
          <Text style={styles.Text_218_288}>
            lesgo man issa pleasure doin bidness slime
          </Text>
        </View>
      </View>
      <View style={styles.View_218_241} />
      <View style={styles.View_218_242}>
        <View style={styles.View_218_243} />
        <View style={styles.View_218_244}>
          <View style={styles.View_218_245} />
          <View style={styles.View_218_246} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7ee/6169/3b2f454e6978d8186f5ca6e3e4f1ee57"
            }}
            style={styles.ImageBackground_218_247}
          />
        </View>
      </View>
      <View style={styles.View_218_264} />
      <View style={styles.View_218_252}>
        <Text style={styles.Text_218_252}>4:38pm</Text>
      </View>
      <View style={styles.View_218_269}>
        <Text style={styles.Text_218_269}>You bid $200 on Yeezy Slides.</Text>
      </View>
      <View style={styles.View_218_273}>
        <Text style={styles.Text_218_273}>
          Wunna approved your bid for $200.
        </Text>
      </View>
      <View style={styles.View_218_283}>
        <Text style={styles.Text_218_283}>
          Wunna has delivered Yeezy Slides.
        </Text>
      </View>
      <View style={styles.View_218_285}>
        <Text style={styles.Text_218_285}>RATE YOUR TRANSACTION</Text>
      </View>
      <View style={styles.View_218_253}>
        <View style={styles.View_218_254}>
          <View style={styles.View_218_255}>
            <View style={styles.View_218_256} />
            <View style={styles.View_218_257} />
          </View>
          <View style={styles.View_218_258} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_218_259}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_218_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_218_261}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_218_262}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_218_263}
        />
      </View>
      <View style={styles.View_218_248}>
        <Text style={styles.Text_218_248}>Yeezy Slides wunn_a</Text>
      </View>
      <View style={styles.View_218_270}>
        <View style={styles.View_218_271} />
        <View style={styles.View_218_272} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_218_265: {
    width: 393,
    minWidth: 393,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -19,
    top: 691
  },
  View_218_266: {
    width: 370.8874816894531,
    minWidth: 370.8874816894531,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.112548828125,
    top: 0
  },
  View_218_267: {
    width: 370.8874816894531,
    minWidth: 370.8874816894531,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(137, 136, 136, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_218_268: {
    width: 138.7058868408203,
    minWidth: 138.7058868408203,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9
  },
  Text_218_268: {
    color: "rgba(92, 91, 91, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_284: {
    width: 153,
    minWidth: 153,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101,
    top: 505,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_218_211: {
    width: 65,
    minWidth: 65,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 73
  },
  ImageBackground_218_214: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 29,
    resizeMode: "cover"
  },
  View_218_215: {
    width: 193,
    minWidth: 193,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91,
    top: 88
  },
  Text_218_215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_223: {
    width: 218,
    minWidth: 218,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 166
  },
  View_218_224: {
    width: 175,
    minWidth: 175,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_218_225: {
    width: 209,
    minWidth: 209,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_218_225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_274: {
    width: 218,
    minWidth: 218,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 166
  },
  View_218_275: {
    width: 175,
    minWidth: 175,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_218_276: {
    width: 209,
    minWidth: 209,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_218_276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_277: {
    width: 218,
    minWidth: 218,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 445
  },
  View_218_278: {
    width: 175,
    minWidth: 175,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_218_279: {
    width: 209,
    minWidth: 209,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_218_279: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_280: {
    width: 282.23394775390625,
    minWidth: 282.23394775390625,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 445
  },
  View_218_281: {
    width: 228.78440856933594,
    minWidth: 228.78440856933594,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_218_282: {
    width: 273.23394775390625,
    minWidth: 273.23394775390625,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_218_282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_286: {
    width: 281.23394775390625,
    minWidth: 281.23394775390625,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 540
  },
  View_218_287: {
    width: 202,
    minWidth: 202,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_218_288: {
    width: 273.23394775390625,
    minWidth: 273.23394775390625,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 6
  },
  Text_218_288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_241: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224,
    top: 327,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_218_242: {
    width: 130,
    minWidth: 130,
    height: 181,
    minHeight: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224,
    top: 202
  },
  View_218_243: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 51,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_218_244: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_218_245: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_218_246: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 124,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  ImageBackground_218_247: {
    width: 110,
    minWidth: 110,
    height: 101,
    minHeight: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 13,
    resizeMode: "cover"
  },
  View_218_264: {
    width: 130,
    minWidth: 130,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224,
    top: 318,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_218_252: {
    width: 134,
    minWidth: 134,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111,
    top: 138
  },
  Text_218_252: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_269: {
    width: 134,
    minWidth: 134,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111,
    top: 395
  },
  Text_218_269: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_273: {
    width: 184,
    minWidth: 184,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 416
  },
  Text_218_273: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_283: {
    width: 184,
    minWidth: 184,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 485
  },
  Text_218_283: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_285: {
    width: 116,
    minWidth: 116,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 506
  },
  Text_218_285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_253: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 733
  },
  View_218_254: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_218_255: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_218_256: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_218_257: {
    width: 47.61600112915039,
    minWidth: 47.61600112915039,
    height: 57.123077392578125,
    minHeight: 57.123077392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239.072021484375,
    top: 18.26361083984375
  },
  View_218_258: {
    width: 48,
    minWidth: 48,
    height: 59.55384063720703,
    minHeight: 59.55384063720703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 14.61749267578125
  },
  ImageBackground_218_259: {
    width: 33,
    minWidth: 33,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 15,
    resizeMode: "cover"
  },
  ImageBackground_218_260: {
    width: 32.14285659790039,
    minWidth: 32.14285659790039,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 15,
    resizeMode: "cover"
  },
  ImageBackground_218_261: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 15,
    resizeMode: "cover"
  },
  ImageBackground_218_262: {
    width: 28.63157844543457,
    minWidth: 28.63157844543457,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 12,
    resizeMode: "cover"
  },
  ImageBackground_218_263: {
    width: 30,
    minWidth: 30,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 16,
    resizeMode: "cover"
  },
  View_218_248: {
    width: 213,
    minWidth: 213,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 327
  },
  Text_218_248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_270: {
    width: 23.416423797607422,
    minWidth: 23.416423797607422,
    height: 23.25332260131836,
    minHeight: 23.25332260131836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 327
  },
  View_218_271: {
    width: 13.181918144226074,
    minWidth: 13.181918144226074,
    height: 11.092336654663086,
    minHeight: 11.092336654663086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.1610107421875,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  View_218_272: {
    width: 17.416439056396484,
    minWidth: 17.416439056396484,
    height: 23.025026321411133,
    minHeight: 23.025026321411133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 0,
    backgroundColor: "rgba(23, 14, 125, 1)"
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
