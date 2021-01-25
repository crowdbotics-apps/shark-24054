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
      <View style={styles.View_71_68}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
          }}
          style={styles.ImageBackground_71_69}
        />
        <View style={styles.View_71_71}>
          <View style={styles.View_71_72}>
            <View style={styles.View_71_73} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b386/0831/4fae64b1da06312431e1fdd7abeb018e"
              }}
              style={styles.ImageBackground_71_74}
            />
            <View style={styles.View_71_75}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_71_76}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_71_77}
              />
              <View style={styles.View_71_78}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c2f/a4fc/1476266ca9014ebd6256292a387f8dfa"
                  }}
                  style={styles.ImageBackground_71_79}
                />
                <View style={styles.View_71_82}>
                  <Text style={styles.Text_71_82}>thu.gg_a</Text>
                </View>
              </View>
              <View style={styles.View_71_83}>
                <View style={styles.View_71_84}>
                  <Text style={styles.Text_71_84}>a.nj_an</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f3d/11c7/b9cef5937d5afe1c8e4ce0faec80adde"
                  }}
                  style={styles.ImageBackground_71_85}
                />
              </View>
              <View style={styles.View_71_88}>
                <View style={styles.View_71_89}>
                  <Text style={styles.Text_71_89}>wunn_a</Text>
                </View>
              </View>
              <View style={styles.View_71_90}>
                <View style={styles.View_71_91}>
                  <Text style={styles.Text_71_91}>r0achman</Text>
                </View>
              </View>
              <View style={styles.View_71_92}>
                <View style={styles.View_71_93}>
                  <Text style={styles.Text_71_93}>renj.1</Text>
                </View>
              </View>
              <View style={styles.View_71_94}>
                <View style={styles.View_71_95}>
                  <Text style={styles.Text_71_95}>brown.boy</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4da/7ed9/ddc0eeebfa6cca1d5bd871634e063766"
                }}
                style={styles.ImageBackground_71_96}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e5/e422/1c05e79372770d5f98f1ef0a02ca308a"
                }}
                style={styles.ImageBackground_71_99}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7322/9c2d/a8291f10db614dbe7d06e0ec24463e8d"
                }}
                style={styles.ImageBackground_71_102}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f6e/c5ca/e6d47c1060afcca1c8711a985cb40f81"
                }}
                style={styles.ImageBackground_71_105}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_71_108}>
        <Text style={styles.Text_71_108}>S H A R K</Text>
      </View>
      <View style={styles.View_71_136}>
        <View style={styles.View_71_54}>
          <View style={styles.View_71_55} />
          <View style={styles.View_71_56} />
          <View style={styles.View_71_57}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/050f/7067/dc3198aff1b21713871f1073fe5c9f10"
              }}
              style={styles.ImageBackground_71_58}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb4b/00f3/ff17e3b3702787d0fa3753286d32e131"
              }}
              style={styles.ImageBackground_71_59}
            />
          </View>
          <View style={styles.View_71_60} />
          <View style={styles.View_71_61} />
          <View style={styles.View_71_62} />
          <View style={styles.View_71_63} />
          <View style={styles.View_71_64}>
            <Text style={styles.Text_71_64}>Shark Tee</Text>
          </View>
          <View style={styles.View_71_65}>
            <Text style={styles.Text_71_65}>$8.99</Text>
          </View>
          <View style={styles.View_71_66}>
            <Text style={styles.Text_71_66}>a.nj_an</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1227/13ef/9ad7f2f4473022ac02140c01d80d7b9c"
            }}
            style={styles.ImageBackground_71_67}
          />
        </View>
        <View style={styles.View_71_109}>
          <View style={styles.View_71_110}>
            <View style={styles.View_71_111}>
              <View style={styles.View_71_112} />
              <View style={styles.View_71_113} />
            </View>
            <View style={styles.View_71_114} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
            }}
            style={styles.ImageBackground_71_115}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
            }}
            style={styles.ImageBackground_71_116}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
            }}
            style={styles.ImageBackground_71_117}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
            }}
            style={styles.ImageBackground_71_118}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
            }}
            style={styles.ImageBackground_71_119}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62a0/951c/2f3185a58db714509a038130af37ac98"
        }}
        style={styles.ImageBackground_71_120}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7911/85e5/cd3c751c05df3f69980327dbde91f54c"
        }}
        style={styles.ImageBackground_71_121}
      />
      <View style={styles.View_71_123} />
      <View style={styles.View_71_125}>
        <View style={styles.View_71_126} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bc8/f0d0/444aeea7ca55dc7e0dc8e3de454cba24"
          }}
          style={styles.ImageBackground_71_127}
        />
        <View style={styles.View_71_128}>
          <Text style={styles.Text_71_128}>Search</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15a6/7d3c/82df9550711e74aa1b50020674babefb"
        }}
        style={styles.ImageBackground_71_130}
      />
      <View style={styles.View_71_134}>
        <View style={styles.View_71_129} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e7/3a6b/f9f6ab263d32730db4e65f557d09006a"
          }}
          style={styles.ImageBackground_71_131}
        />
        <View style={styles.View_71_132}>
          <Text style={styles.Text_71_132}>LavaGirl</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5942/ec8d/c4757d7e56033d41ad66a9f03163486f"
          }}
          style={styles.ImageBackground_71_133}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/032e/a871/ff8be1f2928981eee470e2269ed5e87d"
        }}
        style={styles.ImageBackground_71_139}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_71_68: {
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
  ImageBackground_71_69: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 173
  },
  View_71_71: {
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
  View_71_72: {
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
  View_71_73: {
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
  ImageBackground_71_74: {
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
  View_71_75: {
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
  ImageBackground_71_76: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_71_77: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 85
  },
  View_71_78: {
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
  ImageBackground_71_79: {
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
  View_71_82: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 54
  },
  Text_71_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_83: {
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
  View_71_84: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 53
  },
  Text_71_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_71_85: {
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
  View_71_88: {
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
  View_71_89: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_71_89: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_90: {
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
  View_71_91: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_71_91: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_92: {
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
  View_71_93: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_71_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_94: {
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
  View_71_95: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_71_95: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_71_96: {
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
  ImageBackground_71_99: {
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
  ImageBackground_71_102: {
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
  ImageBackground_71_105: {
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
  View_71_108: {
    width: 136,
    minWidth: 136,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 48
  },
  Text_71_108: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_136: {
    width: 375,
    minWidth: 375,
    height: 619,
    minHeight: 619,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 193
  },
  View_71_54: {
    width: 332,
    minWidth: 332,
    height: 475,
    minHeight: 475,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 0
  },
  View_71_55: {
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
  View_71_56: {
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
  View_71_57: {
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
  ImageBackground_71_58: {
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
  ImageBackground_71_59: {
    width: 94.4554443359375,
    minWidth: 94.4554443359375,
    height: 106.36646270751953,
    minHeight: 106.36646270751953,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85.7095947265625,
    top: 57.012451171875,
    resizeMode: "cover"
  },
  View_71_60: {
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
  View_71_61: {
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
  View_71_62: {
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
  View_71_63: {
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
  View_71_64: {
    width: 115,
    minWidth: 115,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 383
  },
  Text_71_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_65: {
    width: 57,
    minWidth: 57,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 418
  },
  Text_71_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_66: {
    width: 67,
    minWidth: 67,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 9
  },
  Text_71_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_71_67: {
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
  View_71_109: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 540
  },
  View_71_110: {
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
  View_71_111: {
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
  View_71_112: {
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
  View_71_113: {
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
  View_71_114: {
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
  ImageBackground_71_115: {
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
  ImageBackground_71_116: {
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
  ImageBackground_71_117: {
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
  ImageBackground_71_118: {
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
  ImageBackground_71_119: {
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
  ImageBackground_71_120: {
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
  ImageBackground_71_121: {
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
  View_71_123: {
    width: 375,
    minWidth: 375,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 48,
    backgroundColor: "rgba(65, 65, 65, 1)"
  },
  View_71_125: {
    width: 361,
    minWidth: 361,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 51
  },
  View_71_126: {
    width: 361,
    minWidth: 361,
    height: 27,
    minHeight: 27,
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
  ImageBackground_71_127: {
    width: 21.17302131652832,
    minWidth: 21.17302131652832,
    height: 20.769229888916016,
    minHeight: 20.769229888916016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.3519287109375,
    top: 2.076904296875,
    resizeMode: "cover"
  },
  View_71_128: {
    width: 230.78591918945312,
    minWidth: 230.78591918945312,
    minHeight: 22.846153259277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.8768310546875,
    top: 1.0384521484375
  },
  Text_71_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_71_130: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 82
  },
  View_71_134: {
    width: 375,
    minWidth: 375,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 82
  },
  View_71_129: {
    width: 375,
    minWidth: 375,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(65, 65, 65, 1)"
  },
  ImageBackground_71_131: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 5
  },
  View_71_132: {
    width: 121,
    minWidth: 121,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 9
  },
  Text_71_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_71_133: {
    width: 17,
    minWidth: 17,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 8
  },
  ImageBackground_71_139: {
    width: 375,
    minWidth: 375,
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 82
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
