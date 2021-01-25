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
      <View style={styles.View_2_414}>
        <View style={styles.View_2_415} />
        <View style={styles.View_2_416} />
        <View style={styles.View_2_417}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/050f/7067/dc3198aff1b21713871f1073fe5c9f10"
            }}
            style={styles.ImageBackground_2_418}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb4b/00f3/ff17e3b3702787d0fa3753286d32e131"
            }}
            style={styles.ImageBackground_2_419}
          />
        </View>
        <View style={styles.View_2_420} />
        <View style={styles.View_2_421} />
        <View style={styles.View_2_422} />
        <View style={styles.View_2_423} />
        <View style={styles.View_2_424}>
          <Text style={styles.Text_2_424}>Shark Tee</Text>
        </View>
        <View style={styles.View_2_425}>
          <Text style={styles.Text_2_425}>$8.99</Text>
        </View>
        <View style={styles.View_2_426}>
          <Text style={styles.Text_2_426}>a.nj_an</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1227/13ef/9ad7f2f4473022ac02140c01d80d7b9c"
          }}
          style={styles.ImageBackground_2_428}
        />
      </View>
      <View style={styles.View_2_568}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
          }}
          style={styles.ImageBackground_2_567}
        />
        <View style={styles.View_2_474}>
          <View style={styles.View_2_566}>
            <View style={styles.View_2_429} />
            <View style={styles.View_2_565}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_2_432}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_2_607}
              />
              <View style={styles.View_2_433}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d45e/7e3e/c54936b0008c40cf3d57683ad6250016"
                  }}
                  style={styles.ImageBackground_2_434}
                />
                <View style={styles.View_2_437}>
                  <Text style={styles.Text_2_437}>thu.gg_a</Text>
                </View>
              </View>
              <View style={styles.View_2_438}>
                <View style={styles.View_2_439}>
                  <Text style={styles.Text_2_439}>a.nj_an</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/379c/5cff/1286907e2bfb51f33f5dbbbd5ef74dfc"
                  }}
                  style={styles.ImageBackground_2_440}
                />
              </View>
              <View style={styles.View_2_443}>
                <View style={styles.View_2_444}>
                  <Text style={styles.Text_2_444}>wunn_a</Text>
                </View>
              </View>
              <View style={styles.View_2_445}>
                <View style={styles.View_2_446}>
                  <Text style={styles.Text_2_446}>r0achman</Text>
                </View>
              </View>
              <View style={styles.View_2_447}>
                <View style={styles.View_2_448}>
                  <Text style={styles.Text_2_448}>renj.1</Text>
                </View>
              </View>
              <View style={styles.View_2_449}>
                <View style={styles.View_2_450}>
                  <Text style={styles.Text_2_450}>brown.boy</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ed3/ff7f/236fb0fdeb6a85b3e7c3e0269c99e6f9"
                }}
                style={styles.ImageBackground_2_451}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/774c/f004/2c894e4cedc8a4ae5d2efe03fe680211"
                }}
                style={styles.ImageBackground_2_454}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5ab/391f/12d4415aa7b16ee395e700d15dd7b708"
                }}
                style={styles.ImageBackground_2_457}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aad/ea7b/9a01b103403c6acd159dba02b7f5a9be"
                }}
                style={styles.ImageBackground_2_460}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_572}>
        <Text style={styles.Text_2_572}>S H A R K</Text>
      </View>
      <View style={styles.View_2_610}>
        <View style={styles.View_2_475}>
          <View style={styles.View_2_476}>
            <View style={styles.View_2_477} />
            <View style={styles.View_2_478} />
          </View>
          <View style={styles.View_2_479} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_2_480}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_2_481}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_2_484}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_2_608}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_2_609}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62a0/951c/2f3185a58db714509a038130af37ac98"
        }}
        style={styles.ImageBackground_16_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7911/85e5/cd3c751c05df3f69980327dbde91f54c"
        }}
        style={styles.ImageBackground_16_17}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2_414: {
    width: 332,
    minWidth: 332,
    height: 475,
    minHeight: 475,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 193
  },
  View_2_415: {
    width: 295,
    minWidth: 295,
    height: 331,
    minHeight: 331,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 144,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_416: {
    width: 332,
    minWidth: 332,
    height: 434,
    minHeight: 434,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 22,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_417: {
    width: 265,
    minWidth: 265,
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 69
  },
  ImageBackground_2_418: {
    width: 265,
    minWidth: 265,
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_2_419: {
    width: 94.4554443359375,
    minWidth: 94.4554443359375,
    height: 106.36646270751953,
    minHeight: 106.36646270751953,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85.70947265625,
    top: 57.012451171875,
    resizeMode: "cover"
  },
  View_2_420: {
    width: 332,
    minWidth: 332,
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 374,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_421: {
    width: 332,
    minWidth: 332,
    height: 50,
    minHeight: 50,
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
  View_2_422: {
    width: 332,
    minWidth: 332,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 374,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_423: {
    width: 332,
    minWidth: 332,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_424: {
    width: 115,
    minWidth: 115,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 383
  },
  Text_2_424: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_425: {
    width: 57,
    minWidth: 57,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 418
  },
  Text_2_425: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_426: {
    width: 67,
    minWidth: 67,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 9
  },
  Text_2_426: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_428: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 10
  },
  View_2_568: {
    width: 404,
    minWidth: 404,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -6
  },
  ImageBackground_2_567: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 173
  },
  View_2_474: {
    width: 404,
    minWidth: 404,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_566: {
    width: 404,
    minWidth: 404,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_429: {
    width: 375,
    minWidth: 375,
    height: 176,
    minHeight: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_565: {
    width: 404,
    minWidth: 404,
    height: 82.19779968261719,
    minHeight: 82.19779968261719,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 93.80224609375
  },
  ImageBackground_2_432: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_2_607: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 82.19775390625
  },
  View_2_433: {
    width: 70,
    minWidth: 70,
    height: 76.3956069946289,
    minHeight: 76.3956069946289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 5.80224609375
  },
  ImageBackground_2_434: {
    width: 53,
    minWidth: 53,
    height: 51.25274658203125,
    minHeight: 51.25274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 0
  },
  View_2_437: {
    width: 70,
    minWidth: 70,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 52.2197265625
  },
  Text_2_437: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_438: {
    width: 70,
    minWidth: 70,
    height: 75.42857360839844,
    minHeight: 75.42857360839844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 6.769287109375
  },
  View_2_439: {
    width: 70,
    minWidth: 70,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 51.252685546875
  },
  Text_2_439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_440: {
    width: 53,
    minWidth: 53,
    height: 51.25274658203125,
    minHeight: 51.25274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 0
  },
  View_2_443: {
    width: 70,
    minWidth: 70,
    height: 24.175825119018555,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 58.02197265625
  },
  View_2_444: {
    width: 70,
    minWidth: 70,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_2_444: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_445: {
    width: 70,
    minWidth: 70,
    height: 24.175825119018555,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205,
    top: 58.02197265625
  },
  View_2_446: {
    width: 70,
    minWidth: 70,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_2_446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_447: {
    width: 70,
    minWidth: 70,
    height: 24.175825119018555,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 58.02197265625
  },
  View_2_448: {
    width: 70,
    minWidth: 70,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_2_448: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_449: {
    width: 70,
    minWidth: 70,
    height: 24.175825119018555,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 58.02197265625
  },
  View_2_450: {
    width: 70,
    minWidth: 70,
    minHeight: 24.175825119018555,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_2_450: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_451: {
    width: 53,
    minWidth: 53,
    height: 51.25274658203125,
    minHeight: 51.25274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148,
    top: 6.769287109375
  },
  ImageBackground_2_454: {
    width: 53,
    minWidth: 53,
    height: 51.25274658203125,
    minHeight: 51.25274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214,
    top: 5.80224609375
  },
  ImageBackground_2_457: {
    width: 53,
    minWidth: 53,
    height: 51.25274658203125,
    minHeight: 51.25274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 6.769287109375
  },
  ImageBackground_2_460: {
    width: 53,
    minWidth: 53,
    height: 51.25274658203125,
    minHeight: 51.25274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 6.769287109375
  },
  View_2_572: {
    width: 136,
    minWidth: 136,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 48
  },
  Text_2_572: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_610: {
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
  View_2_475: {
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
  View_2_476: {
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
  View_2_477: {
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
  View_2_478: {
    width: 47.61600112915039,
    minWidth: 47.61600112915039,
    height: 57.123077392578125,
    minHeight: 57.123077392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239.072021484375,
    top: 18.263671875
  },
  View_2_479: {
    width: 48,
    minWidth: 48,
    height: 59.55384063720703,
    minHeight: 59.55384063720703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 14.617431640625
  },
  ImageBackground_2_480: {
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
  ImageBackground_2_481: {
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
  ImageBackground_2_484: {
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
  ImageBackground_2_608: {
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
  ImageBackground_2_609: {
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
  ImageBackground_16_16: {
    width: 28,
    minWidth: 28,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    top: 50,
    resizeMode: "cover"
  },
  ImageBackground_16_17: {
    width: 28,
    minWidth: 28,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 50,
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
