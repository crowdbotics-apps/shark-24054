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
      <View style={styles.View_218_358}>
        <View style={styles.View_218_359}>
          <View style={styles.View_218_360} />
        </View>
        <View style={styles.View_218_361}>
          <Text style={styles.Text_218_361}>Write Message...</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6b9/c41a/105b26306c1e933d9d3330d17a4ffcbf"
        }}
        style={styles.ImageBackground_218_362}
      />
      <View style={styles.View_218_365}>
        <View style={styles.View_218_366}>
          <View style={styles.View_218_367} />
          <View style={styles.View_218_368} />
          <View style={styles.View_218_369} />
          <View style={styles.View_218_370} />
          <View style={styles.View_218_371}>
            <Text style={styles.Text_218_371}>Slime Tee</Text>
          </View>
        </View>
        <View style={styles.View_218_372}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8037/f9b3/25ed3cd55a6fcbb2f903dacbb90bd6be"
            }}
            style={styles.ImageBackground_218_373}
          />
        </View>
      </View>
      <View style={styles.View_218_403}>
        <View style={styles.View_218_404}>
          <View style={styles.View_218_405} />
        </View>
        <View style={styles.View_218_406}>
          <Text style={styles.Text_218_406}>CHANGE ITEM STATUS</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_218_374}
      />
      <View style={styles.View_218_375}>
        <Text style={styles.Text_218_375}>Travis Scott</Text>
      </View>
      <View style={styles.View_218_376}>
        <View style={styles.View_218_377} />
        <View style={styles.View_218_378}>
          <Text style={styles.Text_218_378}>shirt go crazy bro</Text>
        </View>
      </View>
      <View style={styles.View_218_407}>
        <View style={styles.View_218_408} />
        <View style={styles.View_218_409}>
          <Text style={styles.Text_218_409}>sending it over rn</Text>
        </View>
      </View>
      <View style={styles.View_218_379}>
        <Text style={styles.Text_218_379}>3:45pm</Text>
      </View>
      <View style={styles.View_218_380}>
        <Text style={styles.Text_218_380}>
          Travis Scott bid $35 on Slime Tee
        </Text>
      </View>
      <View style={styles.View_218_399}>
        <Text style={styles.Text_218_399}>
          You approved Travis Scott’s bid on Slime Tee
        </Text>
      </View>
      <View style={styles.View_218_385}>
        <View style={styles.View_218_386}>
          <View style={styles.View_218_387}>
            <View style={styles.View_218_388} />
            <View style={styles.View_218_389} />
          </View>
          <View style={styles.View_218_390} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_218_391}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_218_392}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_218_393}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_218_394}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_218_395}
        />
      </View>
      <View style={styles.View_218_396}>
        <View style={styles.View_218_397} />
        <View style={styles.View_218_398} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_218_358: {
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
  View_218_359: {
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
  View_218_360: {
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
  View_218_361: {
    width: 138.7058868408203,
    minWidth: 138.7058868408203,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9
  },
  Text_218_361: {
    color: "rgba(92, 91, 91, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_362: {
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
  View_218_365: {
    width: 198,
    minWidth: 198,
    height: 181,
    minHeight: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 202
  },
  View_218_366: {
    width: 198,
    minWidth: 198,
    height: 181,
    minHeight: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_218_367: {
    width: 114.29999542236328,
    minWidth: 114.29999542236328,
    height: 135.75,
    minHeight: 135.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.19989013671875,
    top: 45.25,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_218_368: {
    width: 128.6999969482422,
    minWidth: 128.6999969482422,
    height: 173.75999450683594,
    minHeight: 173.75999450683594,
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
  View_218_369: {
    width: 128.6999969482422,
    minWidth: 128.6999969482422,
    height: 44.34500503540039,
    minHeight: 44.34500503540039,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 129.41497802734375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_218_370: {
    width: 128.6999969482422,
    minWidth: 128.6999969482422,
    height: 20.814998626708984,
    minHeight: 20.814998626708984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 129.41497802734375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_218_371: {
    width: 190.8000030517578,
    minWidth: 190.8000030517578,
    minHeight: 33.48500061035156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.19989013671875,
    top: 134.84494018554688
  },
  Text_218_371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_372: {
    width: 107.29608917236328,
    minWidth: 107.29608917236328,
    height: 110.74342346191406,
    minHeight: 110.74342346191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.95526123046875,
    top: 9.52630615234375
  },
  ImageBackground_218_373: {
    width: 107.29608917236328,
    minWidth: 107.29608917236328,
    height: 110.74342346191406,
    minHeight: 110.74342346191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_218_403: {
    width: 153,
    minWidth: 153,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111,
    top: 437
  },
  View_218_404: {
    width: 153,
    minWidth: 153,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_218_405: {
    width: 153,
    minWidth: 153,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_218_406: {
    width: 96,
    minWidth: 96,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 1
  },
  Text_218_406: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_374: {
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
  View_218_375: {
    width: 193,
    minWidth: 193,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91,
    top: 88
  },
  Text_218_375: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_376: {
    width: 104,
    minWidth: 104,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 167
  },
  View_218_377: {
    width: 83.48623657226562,
    minWidth: 83.48623657226562,
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
  View_218_378: {
    width: 99.7064208984375,
    minWidth: 99.7064208984375,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.2935791015625,
    top: 6
  },
  Text_218_378: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_407: {
    width: 104,
    minWidth: 104,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 470
  },
  View_218_408: {
    width: 83.48623657226562,
    minWidth: 83.48623657226562,
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
  View_218_409: {
    width: 99.7064208984375,
    minWidth: 99.7064208984375,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.2935791015625,
    top: 6
  },
  Text_218_409: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_379: {
    width: 134,
    minWidth: 134,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111,
    top: 138
  },
  Text_218_379: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_380: {
    width: 178,
    minWidth: 178,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 395
  },
  Text_218_380: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_399: {
    width: 226,
    minWidth: 226,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 416
  },
  Text_218_399: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_385: {
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
  View_218_386: {
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
  View_218_387: {
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
  View_218_388: {
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
  View_218_389: {
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
  View_218_390: {
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
  ImageBackground_218_391: {
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
  ImageBackground_218_392: {
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
  ImageBackground_218_393: {
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
  ImageBackground_218_394: {
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
  ImageBackground_218_395: {
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
  View_218_396: {
    width: 23.416423797607422,
    minWidth: 23.416423797607422,
    height: 23.25332260131836,
    minHeight: 23.25332260131836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 339
  },
  View_218_397: {
    width: 13.181918144226074,
    minWidth: 13.181918144226074,
    height: 11.092336654663086,
    minHeight: 11.092336654663086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.160980224609375,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  View_218_398: {
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
