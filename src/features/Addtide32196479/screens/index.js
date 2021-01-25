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
      <View style={styles.View_251_77}>
        <View style={styles.View_251_78}>
          <View style={styles.View_251_79}>
            <View style={styles.View_251_80} />
            <View style={styles.View_251_81}>
              <View style={styles.View_251_82}>
                <Text style={styles.Text_251_82}>Everyone</Text>
              </View>
              <View style={styles.View_251_83}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c227/85b2/690d2768c8c4895ac2e82bac00e085ce"
                  }}
                  style={styles.ImageBackground_251_84}
                />
                <View style={styles.View_251_85}>
                  <Text style={styles.Text_251_85}>Only Friends</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c227/85b2/690d2768c8c4895ac2e82bac00e085ce"
                  }}
                  style={styles.ImageBackground_251_86}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/297e/b00d/44a8f29d958ddf2bf768627a934a7ed2"
        }}
        style={styles.ImageBackground_251_87}
      />
      <View style={styles.View_251_90}>
        <View style={styles.View_251_91}>
          <View style={styles.View_251_92}>
            <View style={styles.View_251_93} />
            <View style={styles.View_251_94} />
          </View>
          <View style={styles.View_251_95} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_251_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_251_97}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_251_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a1/bb7e/d14d9c9cf8447e180aae27478d9740c2"
          }}
          style={styles.ImageBackground_251_99}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_251_100}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb63/17c0/8db784d24d3dd2c76c0844c33acabc64"
        }}
        style={styles.ImageBackground_251_101}
      />
      <View style={styles.View_251_102}>
        <Text style={styles.Text_251_102}>ITEM</Text>
      </View>
      <View style={styles.View_251_103}>
        <Text style={styles.Text_251_103}>TIDE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
        }}
        style={styles.ImageBackground_251_104}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a003/1745/4e9d2b1464b9c7f6426d0a9621cf4b51"
        }}
        style={styles.ImageBackground_251_105}
      />
      <View style={styles.View_251_110}>
        <View style={styles.View_251_111} />
        <View style={styles.View_251_112}>
          <Text style={styles.Text_251_112}>Add Pod</Text>
        </View>
      </View>
      <View style={styles.View_251_113}>
        <Text style={styles.Text_251_113}>PODS</Text>
      </View>
      <View style={styles.View_251_116}>
        <View style={styles.View_251_117}>
          <View style={styles.View_251_118}>
            <View style={styles.View_251_119} />
            <View style={styles.View_251_120} />
          </View>
          <View style={styles.View_251_121} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_251_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_251_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_251_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a1/bb7e/d14d9c9cf8447e180aae27478d9740c2"
          }}
          style={styles.ImageBackground_251_125}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_251_126}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb63/17c0/8db784d24d3dd2c76c0844c33acabc64"
        }}
        style={styles.ImageBackground_251_127}
      />
      <View style={styles.View_251_128}>
        <Text style={styles.Text_251_128}>ITEM</Text>
      </View>
      <View style={styles.View_251_129}>
        <Text style={styles.Text_251_129}>TIDE</Text>
      </View>
      <View style={styles.View_251_130}>
        <View style={styles.View_251_131} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
          }}
          style={styles.ImageBackground_251_132}
        />
        <View style={styles.View_251_133} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a003/1745/4e9d2b1464b9c7f6426d0a9621cf4b51"
          }}
          style={styles.ImageBackground_251_134}
        />
        <View style={styles.View_251_135} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
          }}
          style={styles.ImageBackground_251_136}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_251_138}
      />
      <View style={styles.View_251_139}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_251_140}
        />
        <View style={styles.View_251_141}>
          <Text style={styles.Text_251_141}>Title</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_251_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_251_143}
        />
        <View style={styles.View_251_144}>
          <Text style={styles.Text_251_144}>Description</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_251_164}
        />
        <View style={styles.View_251_149}>
          <Text style={styles.Text_251_149}>Location</Text>
        </View>
      </View>
      <View style={styles.View_251_150}>
        <View style={styles.View_251_151} />
        <View style={styles.View_251_152}>
          <Text style={styles.Text_251_152}>ADD ITEM</Text>
        </View>
      </View>
      <View style={styles.View_251_154}>
        <Text style={styles.Text_251_154}>Share With</Text>
      </View>
      <View style={styles.View_251_155}>
        <View style={styles.View_251_156} />
        <View style={styles.View_251_157}>
          <Text style={styles.Text_251_157}>Shoes</Text>
        </View>
      </View>
      <View style={styles.View_251_158}>
        <View style={styles.View_251_159} />
        <View style={styles.View_251_160}>
          <Text style={styles.Text_251_160}>Basketball</Text>
        </View>
      </View>
      <View style={styles.View_251_161}>
        <View style={styles.View_251_162} />
        <View style={styles.View_251_163}>
          <Text style={styles.Text_251_163}>SHARE</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_251_77: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135,
    top: 336
  },
  View_251_78: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_251_79: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_251_80: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(62, 62, 62, 1)"
  },
  View_251_81: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    height: 44.69230651855469,
    minHeight: 44.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.339111328125,
    top: 5
  },
  View_251_82: {
    width: 62.48927307128906,
    minWidth: 62.48927307128906,
    minHeight: 15.169230461120605,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.82421875,
    top: 25
  },
  Text_251_82: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_83: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    height: 44.69230651855469,
    minHeight: 44.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_251_84: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20.6307373046875
  },
  View_251_85: {
    width: 83,
    minWidth: 83,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.660888671875,
    top: 0
  },
  Text_251_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_86: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 44.6922607421875
  },
  ImageBackground_251_87: {
    width: 12,
    minWidth: 12,
    height: 8.298507690429688,
    minHeight: 8.298507690429688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 320,
    resizeMode: "cover"
  },
  View_251_90: {
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
  View_251_91: {
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
  View_251_92: {
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
  View_251_93: {
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
  View_251_94: {
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
  View_251_95: {
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
  ImageBackground_251_96: {
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
  ImageBackground_251_97: {
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
  ImageBackground_251_98: {
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
  ImageBackground_251_99: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 16,
    resizeMode: "cover"
  },
  ImageBackground_251_100: {
    width: 33,
    minWidth: 33,
    height: 32.19512176513672,
    minHeight: 32.19512176513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 748,
    resizeMode: "cover"
  },
  ImageBackground_251_101: {
    width: 0,
    minWidth: 0,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 43
  },
  View_251_102: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 47
  },
  Text_251_102: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_103: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207,
    top: 48
  },
  Text_251_103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_104: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53,
    top: 133,
    resizeMode: "cover"
  },
  ImageBackground_251_105: {
    width: 51,
    minWidth: 51,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164,
    top: 133,
    resizeMode: "cover"
  },
  View_251_110: {
    width: 68,
    minWidth: 68,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 93,
    top: 415
  },
  View_251_111: {
    width: 54.77777862548828,
    minWidth: 54.77777862548828,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.4443359375,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_251_112: {
    width: 68,
    minWidth: 68,
    minHeight: 10.5625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_251_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_113: {
    width: 33,
    minWidth: 33,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 415
  },
  Text_251_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_116: {
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
  View_251_117: {
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
  View_251_118: {
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
  View_251_119: {
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
  View_251_120: {
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
  View_251_121: {
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
  ImageBackground_251_122: {
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
  ImageBackground_251_123: {
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
  ImageBackground_251_124: {
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
  ImageBackground_251_125: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 16,
    resizeMode: "cover"
  },
  ImageBackground_251_126: {
    width: 33,
    minWidth: 33,
    height: 32.19512176513672,
    minHeight: 32.19512176513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 748,
    resizeMode: "cover"
  },
  ImageBackground_251_127: {
    width: 0,
    minWidth: 0,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 43
  },
  View_251_128: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 47
  },
  Text_251_128: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_129: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207,
    top: 48
  },
  Text_251_129: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_130: {
    width: 310,
    minWidth: 310,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 91
  },
  View_251_131: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_251_132: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 24,
    resizeMode: "cover"
  },
  View_251_133: {
    width: 86,
    minWidth: 86,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_251_134: {
    width: 51,
    minWidth: 51,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 24,
    resizeMode: "cover"
  },
  View_251_135: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 223,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_251_136: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 240,
    top: 24,
    resizeMode: "cover"
  },
  ImageBackground_251_138: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 476
  },
  View_251_139: {
    width: 302,
    minWidth: 302,
    height: 207.5,
    minHeight: 207.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 194
  },
  ImageBackground_251_140: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 23
  },
  View_251_141: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.00341796875,
    top: 0
  },
  Text_251_141: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_142: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 108
  },
  ImageBackground_251_143: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 70
  },
  View_251_144: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 82
  },
  Text_251_144: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_164: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 207.5
  },
  View_251_149: {
    width: 111,
    minWidth: 111,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 40
  },
  Text_251_149: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_150: {
    width: 99,
    minWidth: 99,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 141,
    top: 517
  },
  View_251_151: {
    width: 99,
    minWidth: 99,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_251_152: {
    width: 83.06896209716797,
    minWidth: 83.06896209716797,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.241455078125,
    top: 7.5
  },
  Text_251_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_154: {
    width: 74,
    minWidth: 74,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 312
  },
  Text_251_154: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_155: {
    width: 79,
    minWidth: 79,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 439
  },
  View_251_156: {
    width: 79,
    minWidth: 79,
    height: 18,
    minHeight: 18,
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
  View_251_157: {
    width: 70.85566711425781,
    minWidth: 70.85566711425781,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.814453125,
    top: 2.842041015625
  },
  Text_251_157: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_158: {
    width: 79,
    minWidth: 79,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 126,
    top: 439
  },
  View_251_159: {
    width: 79,
    minWidth: 79,
    height: 18,
    minHeight: 18,
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
  View_251_160: {
    width: 70.85566711425781,
    minWidth: 70.85566711425781,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.814453125,
    top: 2.842041015625
  },
  Text_251_160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_161: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 605
  },
  View_251_162: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_251_163: {
    width: 101.25,
    minWidth: 101.25,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.71142578125,
    top: 15
  },
  Text_251_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
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
