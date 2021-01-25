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
      <View style={styles.View_251_419}>
        <Text style={styles.Text_251_419}>tending</Text>
      </View>
      <View style={styles.View_251_420}>
        <View style={styles.View_251_421} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41a2/2661/739236d9e5df76c8b87535eaca8c6df8"
          }}
          style={styles.ImageBackground_251_422}
        />
        <View style={styles.View_251_426} />
        <View style={styles.View_251_427} />
        <View style={styles.View_251_428} />
        <View style={styles.View_251_429} />
        <View style={styles.View_251_431}>
          <Text style={styles.Text_251_431}>Uzi Concert Tickets</Text>
        </View>
        <View style={styles.View_251_434}>
          <Text style={styles.Text_251_434}>Price: $120</Text>
        </View>
        <View style={styles.View_251_435}>
          <Text style={styles.Text_251_435}>Condition: Brand New</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45f6/382d/38552bd51fc32fac80b98d460566809d"
          }}
          style={styles.ImageBackground_251_436}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c0d/da7d/b181cee579c69378fcc93abb58605b04"
          }}
          style={styles.ImageBackground_251_437}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9f/f768/2595f90aa51f8c8a773602bd03bd4d9e"
          }}
          style={styles.ImageBackground_251_438}
        />
      </View>
      <View style={styles.View_251_439}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
          }}
          style={styles.ImageBackground_251_440}
        />
        <View style={styles.View_251_442}>
          <View style={styles.View_251_443}>
            <View style={styles.View_251_444} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b386/0831/4fae64b1da06312431e1fdd7abeb018e"
              }}
              style={styles.ImageBackground_251_445}
            />
            <View style={styles.View_251_446}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_251_447}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_251_448}
              />
              <View style={styles.View_251_449}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c2f/a4fc/1476266ca9014ebd6256292a387f8dfa"
                  }}
                  style={styles.ImageBackground_251_450}
                />
                <View style={styles.View_251_453}>
                  <Text style={styles.Text_251_453}>thu.gg_a</Text>
                </View>
              </View>
              <View style={styles.View_251_454}>
                <View style={styles.View_251_455}>
                  <Text style={styles.Text_251_455}>a.nj_an</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f3d/11c7/b9cef5937d5afe1c8e4ce0faec80adde"
                  }}
                  style={styles.ImageBackground_251_456}
                />
              </View>
              <View style={styles.View_251_459}>
                <View style={styles.View_251_460}>
                  <Text style={styles.Text_251_460}>wunn_a</Text>
                </View>
              </View>
              <View style={styles.View_251_461}>
                <View style={styles.View_251_462}>
                  <Text style={styles.Text_251_462}>r0achman</Text>
                </View>
              </View>
              <View style={styles.View_251_463}>
                <View style={styles.View_251_464}>
                  <Text style={styles.Text_251_464}>renj.1</Text>
                </View>
              </View>
              <View style={styles.View_251_465}>
                <View style={styles.View_251_466}>
                  <Text style={styles.Text_251_466}>brown.boy</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4da/7ed9/ddc0eeebfa6cca1d5bd871634e063766"
                }}
                style={styles.ImageBackground_251_467}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e5/e422/1c05e79372770d5f98f1ef0a02ca308a"
                }}
                style={styles.ImageBackground_251_470}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7322/9c2d/a8291f10db614dbe7d06e0ec24463e8d"
                }}
                style={styles.ImageBackground_251_473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f6e/c5ca/e6d47c1060afcca1c8711a985cb40f81"
                }}
                style={styles.ImageBackground_251_476}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_251_479}>
        <Text style={styles.Text_251_479}>S H A R K</Text>
      </View>
      <View style={styles.View_251_480}>
        <View style={styles.View_251_481}>
          <View style={styles.View_251_482}>
            <View style={styles.View_251_483} />
            <View style={styles.View_251_484} />
          </View>
          <View style={styles.View_251_485} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_251_486}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_251_487}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_251_488}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_251_489}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_251_490}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62a0/951c/2f3185a58db714509a038130af37ac98"
        }}
        style={styles.ImageBackground_251_491}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7911/85e5/cd3c751c05df3f69980327dbde91f54c"
        }}
        style={styles.ImageBackground_251_492}
      />
      <View style={styles.View_251_582}>
        <Text style={styles.Text_251_582}>Slimeville, United States</Text>
      </View>
      <View style={styles.View_251_583}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc7f/23b8/787a31734eb11463b43196e39f9f5eb8"
          }}
          style={styles.ImageBackground_251_584}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc7f/23b8/787a31734eb11463b43196e39f9f5eb8"
          }}
          style={styles.ImageBackground_251_585}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc7f/23b8/787a31734eb11463b43196e39f9f5eb8"
          }}
          style={styles.ImageBackground_251_586}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc7f/23b8/787a31734eb11463b43196e39f9f5eb8"
          }}
          style={styles.ImageBackground_251_587}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc7f/23b8/787a31734eb11463b43196e39f9f5eb8"
          }}
          style={styles.ImageBackground_251_588}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eb7/129a/7789f1a7b1f85cb701be7bc6a3571b35"
        }}
        style={styles.ImageBackground_251_589}
      />
      <View style={styles.View_251_590}>
        <Text style={styles.Text_251_590}>liluzivert</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_251_419: {
    width: 40,
    minWidth: 40,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 232
  },
  Text_251_419: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_420: {
    width: 347,
    minWidth: 347,
    height: 457,
    minHeight: 457,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 219
  },
  View_251_421: {
    width: 295,
    minWidth: 295,
    height: 331,
    minHeight: 331,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 126,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  ImageBackground_251_422: {
    width: 332,
    minWidth: 332,
    height: 324,
    minHeight: 324,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 50,
    resizeMode: "cover"
  },
  View_251_426: {
    width: 332,
    minWidth: 332,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 377,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_251_427: {
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
  View_251_428: {
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
  View_251_429: {
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
  View_251_431: {
    width: 165,
    minWidth: 165,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 377
  },
  Text_251_431: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_434: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 212,
    top: 17
  },
  Text_251_434: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_435: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 404
  },
  Text_251_435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_436: {
    width: 30,
    minWidth: 30,
    height: 30.914634704589844,
    minHeight: 30.914634704589844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 389,
    resizeMode: "cover"
  },
  ImageBackground_251_437: {
    width: 30,
    minWidth: 30,
    height: 31.28834342956543,
    minHeight: 31.28834342956543,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 389,
    resizeMode: "cover"
  },
  ImageBackground_251_438: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207,
    top: 16,
    resizeMode: "cover"
  },
  View_251_439: {
    width: 404,
    minWidth: 404,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -6
  },
  ImageBackground_251_440: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 173
  },
  View_251_442: {
    width: 404,
    minWidth: 404,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_251_443: {
    width: 404,
    minWidth: 404,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_251_444: {
    width: 375,
    minWidth: 375,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_251_445: {
    width: 0,
    minWidth: 0,
    height: 85,
    minHeight: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 97
  },
  View_251_446: {
    width: 404,
    minWidth: 404,
    height: 85,
    minHeight: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 97
  },
  ImageBackground_251_447: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_251_448: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 85
  },
  View_251_449: {
    width: 70,
    minWidth: 70,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 6
  },
  ImageBackground_251_450: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 0
  },
  View_251_453: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 54
  },
  Text_251_453: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_454: {
    width: 70,
    minWidth: 70,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 7
  },
  View_251_455: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 53
  },
  Text_251_455: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_456: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 0
  },
  View_251_459: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 60
  },
  View_251_460: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_251_460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_461: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205,
    top: 60
  },
  View_251_462: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_251_462: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_463: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 60
  },
  View_251_464: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_251_464: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_465: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 60
  },
  View_251_466: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_251_466: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_467: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148,
    top: 7
  },
  ImageBackground_251_470: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214,
    top: 6
  },
  ImageBackground_251_473: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 7
  },
  ImageBackground_251_476: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 7
  },
  View_251_479: {
    width: 136,
    minWidth: 136,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 48
  },
  Text_251_479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_480: {
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
  View_251_481: {
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
  View_251_482: {
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
  View_251_483: {
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
  View_251_484: {
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
  View_251_485: {
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
  ImageBackground_251_486: {
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
  ImageBackground_251_487: {
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
  ImageBackground_251_488: {
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
  ImageBackground_251_489: {
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
  ImageBackground_251_490: {
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
  ImageBackground_251_491: {
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
  ImageBackground_251_492: {
    width: 28,
    minWidth: 28,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337,
    top: 50,
    resizeMode: "cover"
  },
  View_251_582: {
    width: 130,
    minWidth: 130,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 251
  },
  Text_251_582: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_583: {
    width: 71,
    minWidth: 71,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 232
  },
  ImageBackground_251_584: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_251_585: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_251_586: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_251_587: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_251_588: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 56,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_251_589: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 230
  },
  View_251_590: {
    width: 66,
    minWidth: 66,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 228
  },
  Text_251_590: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
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
