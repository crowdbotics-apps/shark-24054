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
      <View source={{ uri: "null" }} style={styles.View_219_153} />
      <View style={styles.View_219_154} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_219_155}
      />
      <View style={styles.View_219_157}>
        <View style={styles.View_219_158}>
          <View style={styles.View_219_159} />
          <View style={styles.View_219_160}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c901/2000/d8af09e2b1ef5f3abb0ecb29ba0ee2e6"
              }}
              style={styles.ImageBackground_219_161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f71/58a6/9ec22d31380f591b190604944001ede1"
              }}
              style={styles.ImageBackground_219_162}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53a6/a33b/1e3e4f6bb98076fded85a78e9b98ae9b"
            }}
            style={styles.ImageBackground_219_163}
          />
          <View style={styles.View_219_164} />
          <View style={styles.View_219_165} />
          <View style={styles.View_219_166} />
        </View>
        <View style={styles.View_219_169}>
          <Text style={styles.Text_219_169}>
            Congrats! You purchased the item!
          </Text>
        </View>
      </View>
      <View style={styles.View_219_215}>
        <Text style={styles.Text_219_215}>Leave us a Rating!</Text>
      </View>
      <View style={styles.View_219_216}>
        <Text style={styles.Text_219_216}>
          Given the rapid pace of developing this platform, your feedback drives
          us to make SHARK into what you want to see. Click below to quickly let
          us know what you want to see next!{" "}
        </Text>
      </View>
      <View style={styles.View_219_222}>
        <View style={styles.View_219_213}>
          <Text style={styles.Text_219_213}>Estimated Time of Arrival</Text>
        </View>
        <View style={styles.View_219_214}>
          <Text style={styles.Text_219_214}>
            We always recommend that users exchange products within 2 days of
            placing the order. Please message the seller to coordinate the
            exchange.{" "}
          </Text>
        </View>
        <View style={styles.View_219_220}>
          <View style={styles.View_219_217}>
            <View style={styles.View_219_218} />
            <View style={styles.View_219_219}>
              <Text style={styles.Text_219_219}>Message</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c0b/bdf1/4acb4b8663f16d05e87060da9b6b9814"
            }}
            style={styles.ImageBackground_219_167}
          />
        </View>
      </View>
      <View style={styles.View_219_221}>
        <Text style={styles.Text_219_221}>Shark Tee</Text>
      </View>
      <View style={styles.View_219_223}>
        <View style={styles.View_219_224} />
        <View style={styles.View_219_225}>
          <Text style={styles.Text_219_225}>Rate Us</Text>
        </View>
      </View>
      <View style={styles.View_219_176}>
        <View style={styles.View_219_177}>
          <View style={styles.View_219_178}>
            <View style={styles.View_219_179} />
            <View style={styles.View_219_180} />
          </View>
          <View style={styles.View_219_181} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_219_182}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_219_183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_219_184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_219_185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_219_186}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_219_153: {
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
  View_219_154: {
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
  ImageBackground_219_155: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 45,
    resizeMode: "cover"
  },
  View_219_157: {
    width: 306,
    minWidth: 306,
    height: 272.9796142578125,
    minHeight: 272.9796142578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 82
  },
  View_219_158: {
    width: 202.8783416748047,
    minWidth: 202.8783416748047,
    height: 228.57144165039062,
    minHeight: 228.57144165039062,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 44.408172607421875
  },
  View_219_159: {
    width: 202.8783416748047,
    minWidth: 202.8783416748047,
    height: 228.57144165039062,
    minHeight: 228.57144165039062,
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
  View_219_160: {
    width: 161.93601989746094,
    minWidth: 161.93601989746094,
    height: 163.70022583007812,
    minHeight: 163.70022583007812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.16558837890625,
    top: 28.296844482421875
  },
  ImageBackground_219_161: {
    width: 161.93601989746094,
    minWidth: 161.93601989746094,
    height: 163.70022583007812,
    minHeight: 163.70022583007812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_219_162: {
    width: 57.71976852416992,
    minWidth: 57.71976852416992,
    height: 63.54822540283203,
    minHeight: 63.54822540283203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.375274658203125,
    top: 34.061859130859375,
    resizeMode: "cover"
  },
  ImageBackground_219_163: {
    width: 202.8783416748047,
    minWidth: 202.8783416748047,
    height: 15.86485481262207,
    minHeight: 15.86485481262207,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 212.70657348632812
  },
  View_219_164: {
    width: 202.8783416748047,
    minWidth: 202.8783416748047,
    height: 17.040029525756836,
    minHeight: 17.040029525756836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_219_165: {
    width: 202.8783416748047,
    minWidth: 202.8783416748047,
    height: 10.754029273986816,
    minHeight: 10.754029273986816,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 210.51791381835938,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_219_166: {
    width: 202.8783416748047,
    minWidth: 202.8783416748047,
    height: 10.754029273986816,
    minHeight: 10.754029273986816,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.19134521484375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_219_169: {
    width: 306,
    minWidth: 306,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_219_169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_215: {
    width: 249,
    minWidth: 249,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58,
    top: 569
  },
  Text_219_215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_216: {
    width: 309,
    minWidth: 309,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 605
  },
  Text_219_216: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  View_219_222: {
    width: 309,
    minWidth: 309,
    height: 142,
    minHeight: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 410
  },
  View_219_213: {
    width: 249,
    minWidth: 249,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 0
  },
  Text_219_213: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_214: {
    width: 309,
    minWidth: 309,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  Text_219_214: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  View_219_220: {
    width: 225,
    minWidth: 225,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 109
  },
  View_219_217: {
    width: 225,
    minWidth: 225,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_218: {
    width: 217,
    minWidth: 217,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 0,
    backgroundColor: "rgba(221, 220, 220, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_219_219: {
    width: 194.62887573242188,
    minWidth: 194.62887573242188,
    minHeight: 20.842105865478516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4
  },
  Text_219_219: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_167: {
    width: 31,
    minWidth: 31,
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 1
  },
  View_219_221: {
    width: 93,
    minWidth: 93,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148,
    top: 366
  },
  Text_219_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_223: {
    width: 120,
    minWidth: 120,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122,
    top: 679
  },
  View_219_224: {
    width: 120,
    minWidth: 120,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(221, 220, 220, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_219_225: {
    width: 107.62886810302734,
    minWidth: 107.62886810302734,
    minHeight: 20.842105865478516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.23529052734375,
    top: 4.5
  },
  Text_219_225: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_176: {
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
  View_219_177: {
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
  View_219_178: {
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
  View_219_179: {
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
  View_219_180: {
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
  View_219_181: {
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
  ImageBackground_219_182: {
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
  ImageBackground_219_183: {
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
  ImageBackground_219_184: {
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
  ImageBackground_219_185: {
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
  ImageBackground_219_186: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
