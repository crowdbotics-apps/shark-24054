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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25d8/e63b/e89593e4c8ba101469dd4ebb14dda400"
        }}
        style={styles.ImageBackground_114_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_114_9}
      />
      <View style={styles.View_114_10}>
        <Text style={styles.Text_114_10}>wunn_a</Text>
      </View>
      <View style={styles.View_114_11} />
      <View style={styles.View_114_12}>
        <View style={styles.View_114_13} />
        <View style={styles.View_114_14}>
          <Text style={styles.Text_114_14}>
            ay bruh u see dis new crazy hoodie from anjan
          </Text>
        </View>
      </View>
      <View style={styles.View_114_15}>
        <View style={styles.View_114_16} />
        <View style={styles.View_114_17}>
          <Text style={styles.Text_114_17}>
            ay that do be crazy i cant lie ima bookmark fr
          </Text>
        </View>
      </View>
      <View style={styles.View_114_18}>
        <View style={styles.View_114_19} />
        <View style={styles.View_114_20}>
          <Text style={styles.Text_114_20}>
            dem slides insane wunna fr go crazy
          </Text>
        </View>
      </View>
      <View style={styles.View_114_21} />
      <View style={styles.View_114_22} />
      <View style={styles.View_114_23} />
      <View style={styles.View_114_24} />
      <View style={styles.View_114_25}>
        <Text style={styles.Text_114_25}>Yeezy Slides Young Wunna</Text>
      </View>
      <View style={styles.View_114_26}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
          }}
          style={styles.ImageBackground_114_27}
        />
        <View style={styles.View_114_28} />
        <View style={styles.View_114_29}>
          <View style={styles.View_114_30} />
          <View style={styles.View_114_31}>
            <View style={styles.View_114_32} />
            <View style={styles.View_114_33} />
            <View style={styles.View_114_34}>
              <Text style={styles.Text_114_34}>CFC Shark Hoodie a.nj_an</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5cf/fb87/0c20f9157d6513d3cc88a548058638d8"
              }}
              style={styles.ImageBackground_114_35}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_114_36} />
      <View style={styles.View_114_37}>
        <View style={styles.View_114_38} />
        <View style={styles.View_114_39}>
          <View style={styles.View_114_40} />
          <View style={styles.View_114_41} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7ee/6169/3b2f454e6978d8186f5ca6e3e4f1ee57"
            }}
            style={styles.ImageBackground_114_42}
          />
          <View style={styles.View_114_43}>
            <Text style={styles.Text_114_43}>Yeezy Slides wunn_a</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_114_44}>
        <View style={styles.View_114_45} />
        <View style={styles.View_114_46}>
          <Text style={styles.Text_114_46}>$200</Text>
        </View>
      </View>
      <View style={styles.View_114_47}>
        <Text style={styles.Text_114_47}>4:38pm</Text>
      </View>
      <View style={styles.View_114_48}>
        <View style={styles.View_114_49}>
          <View style={styles.View_114_50}>
            <View style={styles.View_114_51} />
            <View style={styles.View_114_52} />
          </View>
          <View style={styles.View_114_53} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_114_54}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_114_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_114_56}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_114_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_114_58}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_114_6: {
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
  ImageBackground_114_9: {
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
  View_114_10: {
    width: 193,
    minWidth: 193,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91,
    top: 88
  },
  Text_114_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_11: {
    width: 216,
    minWidth: 216,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 160,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_114_12: {
    width: 229,
    minWidth: 229,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 160
  },
  View_114_13: {
    width: 216,
    minWidth: 216,
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
  View_114_14: {
    width: 222,
    minWidth: 222,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 5
  },
  Text_114_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_15: {
    width: 218,
    minWidth: 218,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 392
  },
  View_114_16: {
    width: 216,
    minWidth: 216,
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
  View_114_17: {
    width: 209,
    minWidth: 209,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_114_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_18: {
    width: 218,
    minWidth: 218,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 179,
    top: 456
  },
  View_114_19: {
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
  View_114_20: {
    width: 209,
    minWidth: 209,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_114_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_21: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 240,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_114_22: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 197,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_114_23: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 321,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_114_24: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 321,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_114_25: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 326
  },
  Text_114_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_26: {
    width: 201,
    minWidth: 201,
    height: 178,
    minHeight: 178,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 192
  },
  ImageBackground_114_27: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 8,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_114_28: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 48,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_114_29: {
    width: 201,
    minWidth: 201,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_114_30: {
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
  View_114_31: {
    width: 200,
    minWidth: 200,
    height: 158,
    minHeight: 158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 8
  },
  View_114_32: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 116,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_114_33: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 116,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_114_34: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 121
  },
  Text_114_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_114_35: {
    width: 97,
    minWidth: 97,
    height: 111,
    minHeight: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 0,
    resizeMode: "cover"
  },
  View_114_36: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 617,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_114_37: {
    width: 200,
    minWidth: 200,
    height: 181,
    minHeight: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 492
  },
  View_114_38: {
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
  View_114_39: {
    width: 200,
    minWidth: 200,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_114_40: {
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
  View_114_41: {
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
  ImageBackground_114_42: {
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
  View_114_43: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 129
  },
  Text_114_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_44: {
    width: 38,
    minWidth: 38,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307,
    top: 623
  },
  View_114_45: {
    width: 38,
    minWidth: 38,
    height: 25,
    minHeight: 25,
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
  View_114_46: {
    width: 21,
    minWidth: 21,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 6
  },
  Text_114_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_47: {
    width: 134,
    minWidth: 134,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118,
    top: 428
  },
  Text_114_47: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_114_48: {
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
  View_114_49: {
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
  View_114_50: {
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
  View_114_51: {
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
  View_114_52: {
    width: 47.61600112915039,
    minWidth: 47.61600112915039,
    height: 57.123077392578125,
    minHeight: 57.123077392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239.072021484375,
    top: 18.263633728027344
  },
  View_114_53: {
    width: 48,
    minWidth: 48,
    height: 59.55384063720703,
    minHeight: 59.55384063720703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 14.617469787597656
  },
  ImageBackground_114_54: {
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
  ImageBackground_114_55: {
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
  ImageBackground_114_56: {
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
  ImageBackground_114_57: {
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
  ImageBackground_114_58: {
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
