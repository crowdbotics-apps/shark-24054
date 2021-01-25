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
      <View style={styles.View_218_290}>
        <View style={styles.View_218_291}>
          <View style={styles.View_218_292} />
        </View>
        <View style={styles.View_218_293}>
          <Text style={styles.Text_218_293}>Write Message...</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6b9/c41a/105b26306c1e933d9d3330d17a4ffcbf"
        }}
        style={styles.ImageBackground_218_343}
      />
      <View style={styles.View_218_346}>
        <View style={styles.View_218_347}>
          <View style={styles.View_218_348} />
          <View style={styles.View_218_349} />
          <View style={styles.View_218_350} />
          <View style={styles.View_218_351} />
          <View style={styles.View_218_352}>
            <Text style={styles.Text_218_352}>Slime Tee</Text>
          </View>
        </View>
        <View style={styles.View_218_353}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8037/f9b3/25ed3cd55a6fcbb2f903dacbb90bd6be"
            }}
            style={styles.ImageBackground_218_354}
          />
        </View>
      </View>
      <View style={styles.View_218_400}>
        <View style={styles.View_218_401} />
        <View style={styles.View_218_402}>
          <Text style={styles.Text_218_402}>$35</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_218_298}
      />
      <View style={styles.View_218_299}>
        <Text style={styles.Text_218_299}>Travis Scott</Text>
      </View>
      <View style={styles.View_218_303}>
        <View style={styles.View_218_304} />
        <View style={styles.View_218_305}>
          <Text style={styles.Text_218_305}>shirt go crazy bro</Text>
        </View>
      </View>
      <View style={styles.View_218_323}>
        <Text style={styles.Text_218_323}>3:45pm</Text>
      </View>
      <View style={styles.View_218_324}>
        <Text style={styles.Text_218_324}>
          Travis Scott bid $35 on Slime Tee
        </Text>
      </View>
      <View style={styles.View_218_356}>
        <View style={styles.View_218_355}>
          <View style={styles.View_218_294} />
        </View>
        <View style={styles.View_218_327}>
          <Text style={styles.Text_218_327}>MANAGE BIDS</Text>
        </View>
      </View>
      <View style={styles.View_218_328}>
        <View style={styles.View_218_329}>
          <View style={styles.View_218_330}>
            <View style={styles.View_218_331} />
            <View style={styles.View_218_332} />
          </View>
          <View style={styles.View_218_333} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_218_334}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_218_335}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_218_336}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_218_337}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_218_338}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_218_290: {
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
  View_218_291: {
    width: 370.8874816894531,
    minWidth: 370.8874816894531,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.112533569335938,
    top: 0
  },
  View_218_292: {
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
  View_218_293: {
    width: 138.7058868408203,
    minWidth: 138.7058868408203,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9
  },
  Text_218_293: {
    color: "rgba(92, 91, 91, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_343: {
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
  View_218_346: {
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
  View_218_347: {
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
  View_218_348: {
    width: 114.29999542236328,
    minWidth: 114.29999542236328,
    height: 135.75,
    minHeight: 135.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.1999053955078125,
    top: 45.25,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_218_349: {
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
  View_218_350: {
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
  View_218_351: {
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
  View_218_352: {
    width: 190.8000030517578,
    minWidth: 190.8000030517578,
    minHeight: 33.48500061035156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.1999053955078125,
    top: 134.84494018554688
  },
  Text_218_352: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_353: {
    width: 107.29608917236328,
    minWidth: 107.29608917236328,
    height: 110.74342346191406,
    minHeight: 110.74342346191406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.955276489257812,
    top: 9.52630615234375
  },
  ImageBackground_218_354: {
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
  View_218_400: {
    width: 38,
    minWidth: 38,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 337
  },
  View_218_401: {
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
  View_218_402: {
    width: 21,
    minWidth: 21,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 6
  },
  Text_218_402: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_298: {
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
  View_218_299: {
    width: 193,
    minWidth: 193,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91,
    top: 88
  },
  Text_218_299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_303: {
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
  View_218_304: {
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
  View_218_305: {
    width: 99.7064208984375,
    minWidth: 99.7064208984375,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.2935791015625,
    top: 6
  },
  Text_218_305: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_323: {
    width: 134,
    minWidth: 134,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111,
    top: 138
  },
  Text_218_323: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_324: {
    width: 178,
    minWidth: 178,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 395
  },
  Text_218_324: {
    color: "rgba(121, 121, 121, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_356: {
    width: 153,
    minWidth: 153,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 111,
    top: 416
  },
  View_218_355: {
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
  View_218_294: {
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
  View_218_327: {
    width: 63,
    minWidth: 63,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 1
  },
  Text_218_327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_328: {
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
  View_218_329: {
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
  View_218_330: {
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
  View_218_331: {
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
  View_218_332: {
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
  View_218_333: {
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
  ImageBackground_218_334: {
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
  ImageBackground_218_335: {
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
  ImageBackground_218_336: {
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
  ImageBackground_218_337: {
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
  ImageBackground_218_338: {
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
