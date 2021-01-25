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
      <View source={{ uri: "null" }} style={styles.View_217_17} />
      <View style={styles.View_217_18}>
        <View style={styles.View_217_20} />
        <View style={styles.View_217_21}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a20/f885/2d3868acf0e02314f012fbe20daffe48"
            }}
            style={styles.ImageBackground_217_22}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c8/ba44/ce5ffb08c41d165145693cd130d4edc3"
            }}
            style={styles.ImageBackground_217_23}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/988e/2f79/69e9c3b2ecfe15bb598d1e9831a19afa"
          }}
          style={styles.ImageBackground_217_24}
        />
        <View style={styles.View_217_27} />
        <View style={styles.View_217_28} />
        <View style={styles.View_217_29} />
      </View>
      <View style={styles.View_217_34} />
      <View style={styles.View_217_42}>
        <Text style={styles.Text_217_42}>10m </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_219_7}
      />
      <View style={styles.View_219_18}>
        <View style={styles.View_219_10}>
          <View style={styles.View_219_11} />
          <View style={styles.View_219_12}>
            <Text style={styles.Text_219_12}>$8.99</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_219_26}>
        <View style={styles.View_219_27}>
          <View style={styles.View_219_28} />
          <View style={styles.View_219_29}>
            <Text style={styles.Text_219_29}>Brand New</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_219_30}>
        <View style={styles.View_219_31}>
          <View style={styles.View_219_32} />
          <View style={styles.View_219_33}>
            <Text style={styles.Text_219_33}>XXL</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f13/588f/2d91604b4a72e9f14315c69456c8d703"
        }}
        style={styles.ImageBackground_219_13}
      />
      <View style={styles.View_219_16}>
        <Text style={styles.Text_219_16}>a.nj_an</Text>
      </View>
      <View style={styles.View_217_26}>
        <Text style={styles.Text_217_26}>
          Please verify these details below before proceeding to checkout.
        </Text>
      </View>
      <View style={styles.View_219_37}>
        <View style={styles.View_219_22}>
          <View style={styles.View_219_23}>
            <View style={styles.View_219_24} />
          </View>
        </View>
        <View style={styles.View_219_25}>
          <Text style={styles.Text_219_25}>Slimeville, United States</Text>
        </View>
      </View>
      <View style={styles.View_217_55}>
        <View style={styles.View_217_56} />
        <View style={styles.View_217_57}>
          <Text style={styles.Text_217_57}>Checkout</Text>
        </View>
      </View>
      <View style={styles.View_219_90}>
        <Text style={styles.Text_219_90}>CONFIRM DETAILS</Text>
      </View>
      <View style={styles.View_219_115}>
        <Text style={styles.Text_219_115}>Shark Tee</Text>
      </View>
      <View style={styles.View_217_44}>
        <View style={styles.View_217_45}>
          <View style={styles.View_217_46}>
            <View style={styles.View_217_47} />
            <View style={styles.View_217_48} />
          </View>
          <View style={styles.View_217_49} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_217_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_217_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_217_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_217_53}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_217_54}
        />
      </View>
      <View style={styles.View_219_9}>
        <Text style={styles.Text_219_9}>PRICE</Text>
      </View>
      <View style={styles.View_219_19}>
        <Text style={styles.Text_219_19}>CONDITION</Text>
      </View>
      <View style={styles.View_219_20}>
        <Text style={styles.Text_219_20}>SIZE</Text>
      </View>
      <View style={styles.View_219_21}>
        <Text style={styles.Text_219_21}>LOCATION</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_217_17: {
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
  View_217_18: {
    width: 332,
    minWidth: 332,
    height: 389,
    minHeight: 389,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 98
  },
  View_217_20: {
    width: 332,
    minWidth: 332,
    height: 389,
    minHeight: 389,
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
  View_217_21: {
    width: 265,
    minWidth: 265,
    height: 278.5973205566406,
    minHeight: 278.5973205566406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 48.15771484375
  },
  ImageBackground_217_22: {
    width: 265,
    minWidth: 265,
    height: 278.5973205566406,
    minHeight: 278.5973205566406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_217_23: {
    width: 94.4554443359375,
    minWidth: 94.4554443359375,
    height: 108.15113830566406,
    minHeight: 108.15113830566406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85.70947265625,
    top: 57.96903991699219,
    resizeMode: "cover"
  },
  ImageBackground_217_24: {
    width: 332,
    minWidth: 332,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 362
  },
  View_217_27: {
    width: 332,
    minWidth: 332,
    height: 29,
    minHeight: 29,
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
  View_217_28: {
    width: 332,
    minWidth: 332,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 353,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_217_29: {
    width: 332,
    minWidth: 332,
    height: 18.302013397216797,
    minHeight: 18.302013397216797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 10.536911010742188,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_217_34: {
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
  View_217_42: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 240,
    top: 566
  },
  Text_217_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_7: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 29,
    resizeMode: "cover"
  },
  View_219_18: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 562
  },
  View_219_10: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_11: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_219_12: {
    width: 109,
    minWidth: 109,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.111083984375,
    top: 0
  },
  Text_219_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_26: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 622
  },
  View_219_27: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_28: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_219_29: {
    width: 109,
    minWidth: 109,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.111083984375,
    top: 0
  },
  Text_219_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_30: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 651
  },
  View_219_31: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_32: {
    width: 109.55555725097656,
    minWidth: 109.55555725097656,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_219_33: {
    width: 109,
    minWidth: 109,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.111083984375,
    top: 0
  },
  Text_219_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_13: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 492
  },
  View_219_16: {
    width: 280,
    minWidth: 280,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53,
    top: 497
  },
  Text_219_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_217_26: {
    width: 342,
    minWidth: 342,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 529
  },
  Text_217_26: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  View_219_37: {
    width: 249.45611572265625,
    minWidth: 249.45611572265625,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 83,
    top: 592
  },
  View_219_22: {
    width: 153.89923095703125,
    minWidth: 153.89923095703125,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48,
    top: 0
  },
  View_219_23: {
    width: 153.89923095703125,
    minWidth: 153.89923095703125,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_24: {
    width: 153.89923095703125,
    minWidth: 153.89923095703125,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_219_25: {
    width: 249.45611572265625,
    minWidth: 249.45611572265625,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2
  },
  Text_219_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_55: {
    width: 120,
    minWidth: 120,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 684
  },
  View_217_56: {
    width: 120,
    minWidth: 120,
    height: 40,
    minHeight: 40,
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
  View_217_57: {
    width: 107.62886810302734,
    minWidth: 107.62886810302734,
    minHeight: 25.263158798217773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.2353515625,
    top: 6.66668701171875
  },
  Text_217_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_90: {
    width: 172,
    minWidth: 172,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118,
    top: 58
  },
  Text_219_90: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_115: {
    width: 115,
    minWidth: 115,
    minHeight: 32.53691101074219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 454
  },
  Text_219_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_44: {
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
  View_217_45: {
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
  View_217_46: {
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
  View_217_47: {
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
  View_217_48: {
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
  View_217_49: {
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
  ImageBackground_217_50: {
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
  ImageBackground_217_51: {
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
  ImageBackground_217_52: {
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
  ImageBackground_217_53: {
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
  ImageBackground_217_54: {
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
  View_219_9: {
    width: 74,
    minWidth: 74,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 562
  },
  Text_219_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_19: {
    width: 125,
    minWidth: 125,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 620
  },
  Text_219_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_20: {
    width: 125,
    minWidth: 125,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 650
  },
  Text_219_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_21: {
    width: 125,
    minWidth: 125,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 590
  },
  Text_219_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
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
