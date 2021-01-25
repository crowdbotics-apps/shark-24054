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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a75/db8a/812bbae388145f230fcb4be8172971b9"
        }}
        style={styles.ImageBackground_29_53}
      />
      <View style={styles.View_29_55}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b18/5e67/61d8d9130891c977ac0323ff61253c45"
          }}
          style={styles.ImageBackground_I29_55_2_6}
        />
      </View>
      <View style={styles.View_29_56}>
        <Text style={styles.Text_29_56}>thu.gg_a</Text>
      </View>
      <View style={styles.View_29_57}>
        <Text style={styles.Text_29_57}>4 Following</Text>
      </View>
      <View style={styles.View_29_58}>
        <Text style={styles.Text_29_58}>Highest Bid:</Text>
      </View>
      <View style={styles.View_29_59}>
        <View style={styles.View_29_60}>
          <View style={styles.View_29_61}>
            <View style={styles.View_29_62} />
            <View style={styles.View_29_63} />
          </View>
          <View style={styles.View_29_64} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_29_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_29_66}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_29_67}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_29_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_29_69}
        />
      </View>
      <View style={styles.View_29_70}>
        <Text style={styles.Text_29_70}>5 Similarities</Text>
      </View>
      <View style={styles.View_29_71}>
        <Text style={styles.Text_29_71}>7.9M Followers</Text>
      </View>
      <View style={styles.View_29_72}>
        <View style={styles.View_29_73}>
          <View style={styles.View_29_74}>
            <View style={styles.View_29_75} />
            <View style={styles.View_29_76} />
            <View style={styles.View_29_77} />
            <View style={styles.View_29_78} />
          </View>
          <View style={styles.View_29_79}>
            <Text style={styles.Text_29_79}>Tides</Text>
          </View>
        </View>
        <View style={styles.View_29_80}>
          <View style={styles.View_29_81}>
            <View style={styles.View_29_82}>
              <View style={styles.View_29_83}>
                <View style={styles.View_29_84} />
                <View style={styles.View_29_85} />
                <View style={styles.View_29_86} />
                <View style={styles.View_29_87} />
              </View>
              <View style={styles.View_29_88}>
                <Text style={styles.Text_29_88}>Pods</Text>
              </View>
            </View>
            <View style={styles.View_29_89} />
            <View style={styles.View_29_90} />
            <View style={styles.View_29_91} />
          </View>
          <View style={styles.View_29_92} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58da/2bbe/51160bf744e60a73fdf2041f472eb378"
          }}
          style={styles.ImageBackground_29_93}
        />
      </View>
      <View style={styles.View_29_94} />
      <View style={styles.View_29_95}>
        <Text style={styles.Text_29_95}>Edit Profile</Text>
      </View>
      <View style={styles.View_29_96}>
        <Text style={styles.Text_29_96}>
          SEX!! Bookyoungthug2@unitedtalent.com
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39dc/c73f/f3da8bbb3a46a802cd3b281e55598b82"
        }}
        style={styles.ImageBackground_29_97}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3d8/998e/b8a13c30457ee6965437d8f43e06e92b"
        }}
        style={styles.ImageBackground_29_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88eb/9190/3770fb7c715bbb1f7f7492e34b24bfdc"
        }}
        style={styles.ImageBackground_29_99}
      />
      <View style={styles.View_2_119}>
        <Text style={styles.Text_2_119}>thu.gg_a</Text>
      </View>
      <View style={styles.View_2_121}>
        <Text style={styles.Text_2_121}>1045 followers</Text>
      </View>
      <View style={styles.View_61_3}>
        <View style={styles.View_61_2}>
          <View style={styles.View_2_164} />
          <View style={styles.View_27_64}>
            <View style={styles.View_2_169}>
              <Text style={styles.Text_2_169}>Vault</Text>
            </View>
            <View style={styles.View_27_63}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ded/3c05/616943d3abc1c51fae3fc49356131372"
                }}
                style={styles.ImageBackground_2_166}
              />
              <View style={styles.View_2_167}>
                <Text style={styles.Text_2_167}>Settings</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ded/3c05/616943d3abc1c51fae3fc49356131372"
                }}
                style={styles.ImageBackground_2_168}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ded/3c05/616943d3abc1c51fae3fc49356131372"
                }}
                style={styles.ImageBackground_2_170}
              />
              <View style={styles.View_2_171}>
                <Text style={styles.Text_2_171}>Edit Profile</Text>
              </View>
              <View style={styles.View_2_172}>
                <Text style={styles.Text_2_172}>Help</Text>
              </View>
              <View style={styles.View_2_174}>
                <Text style={styles.Text_2_174}>About</Text>
              </View>
              <View style={styles.View_2_175}>
                <Text style={styles.Text_2_175}>Log Out</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ded/3c05/616943d3abc1c51fae3fc49356131372"
                }}
                style={styles.ImageBackground_2_176}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f44b/f829/19383453eec274ef122e7314c351f47e"
                }}
                style={styles.ImageBackground_2_178}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/82c9/a78fef90919579281d9307624addeea2"
                }}
                style={styles.ImageBackground_2_179}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d53/6db9/5acdc80de46b63dee530969eedc92eda"
          }}
          style={styles.ImageBackground_27_67}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_27_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4681/8cf1/2842d56852580606eb585b4c53e05282"
          }}
          style={styles.ImageBackground_27_70}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e22/57f8/0d86a535f9cd12d0d7e306ee47a7e187"
          }}
          style={styles.ImageBackground_61_0}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c56/891a/ee9831053ed382db70355179489f0dc7"
          }}
          style={styles.ImageBackground_61_1}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_29_53: {
    width: 240,
    minWidth: 240,
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70,
    top: 182
  },
  View_29_55: {
    width: 37,
    minWidth: 37,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 52,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I29_55_2_6: {
    flexGrow: 1,
    width: 37,
    height: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_29_56: {
    width: 136,
    minWidth: 136,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 53
  },
  Text_29_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_57: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 118
  },
  Text_29_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_29_58: {
    width: 59,
    minWidth: 59,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 595
  },
  Text_29_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_59: {
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
  View_29_60: {
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
  View_29_61: {
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
  View_29_62: {
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
  View_29_63: {
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
  View_29_64: {
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
  ImageBackground_29_65: {
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
  ImageBackground_29_66: {
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
  ImageBackground_29_67: {
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
  ImageBackground_29_68: {
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
  ImageBackground_29_69: {
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
  View_29_70: {
    width: 102,
    minWidth: 102,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 118
  },
  Text_29_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_29_71: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 118
  },
  Text_29_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_29_72: {
    width: 266,
    minWidth: 266,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54,
    top: 561
  },
  View_29_73: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 0
  },
  View_29_74: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_29_75: {
    width: 91.47552490234375,
    minWidth: 91.47552490234375,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.76220703125,
    top: 38,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_29_76: {
    width: 103,
    minWidth: 103,
    height: 145.9199981689453,
    minHeight: 145.9199981689453,
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
  View_29_77: {
    width: 103,
    minWidth: 103,
    height: 37.2400016784668,
    minHeight: 37.2400016784668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.679931640625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_29_78: {
    width: 103,
    minWidth: 103,
    height: 17.479999542236328,
    minHeight: 17.479999542236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.679931640625,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_29_79: {
    width: 40,
    minWidth: 40,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 115
  },
  Text_29_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_80: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_29_81: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_29_82: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_29_83: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_29_84: {
    width: 91.47552490234375,
    minWidth: 91.47552490234375,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.76220703125,
    top: 38,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_29_85: {
    width: 103,
    minWidth: 103,
    height: 145.9199981689453,
    minHeight: 145.9199981689453,
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
  View_29_86: {
    width: 103,
    minWidth: 103,
    height: 37.2400016784668,
    minHeight: 37.2400016784668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.679931640625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_29_87: {
    width: 103,
    minWidth: 103,
    height: 17.479999542236328,
    minHeight: 17.479999542236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.679931640625,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_29_88: {
    width: 40,
    minWidth: 40,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 115
  },
  Text_29_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_89: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 25,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_29_90: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 25,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_29_91: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 63,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_29_92: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 63,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_29_93: {
    width: 77,
    minWidth: 77,
    height: 69.74637603759766,
    minHeight: 69.74637603759766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 24,
    resizeMode: "cover"
  },
  View_29_94: {
    width: 232,
    minWidth: 232,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 438,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_29_95: {
    width: 231,
    minWidth: 231,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 438
  },
  Text_29_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_29_96: {
    width: 339,
    minWidth: 339,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 483
  },
  Text_29_96: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_29_97: {
    width: 33,
    minWidth: 33,
    height: 32.19512176513672,
    minHeight: 32.19512176513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 748,
    resizeMode: "cover"
  },
  ImageBackground_29_98: {
    width: 17,
    minWidth: 17,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 61
  },
  ImageBackground_29_99: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 747,
    resizeMode: "cover"
  },
  View_2_119: {
    width: 101,
    minWidth: 101,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135,
    top: 40
  },
  Text_2_119: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_121: {
    width: 91,
    minWidth: 91,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 107
  },
  Text_2_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_3: {
    width: 233,
    minWidth: 233,
    height: 260,
    minHeight: 260,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 52
  },
  View_61_2: {
    width: 233,
    minWidth: 233,
    height: 260,
    minHeight: 260,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_164: {
    width: 233,
    minWidth: 233,
    height: 260,
    minHeight: 260,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(62, 62, 62, 1)"
  },
  View_27_64: {
    width: 230,
    minWidth: 230,
    height: 248,
    minHeight: 248,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 12
  },
  View_2_169: {
    width: 140,
    minWidth: 140,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 48
  },
  Text_2_169: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_63: {
    width: 230,
    minWidth: 230,
    height: 248,
    minHeight: 248,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_2_166: {
    width: 230,
    minWidth: 230,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 37
  },
  View_2_167: {
    width: 140,
    minWidth: 140,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 0
  },
  Text_2_167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_168: {
    width: 230,
    minWidth: 230,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 83
  },
  ImageBackground_2_170: {
    width: 230,
    minWidth: 230,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 126
  },
  View_2_171: {
    width: 140,
    minWidth: 140,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 91
  },
  Text_2_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_172: {
    width: 140,
    minWidth: 140,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 132
  },
  Text_2_172: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_174: {
    width: 140,
    minWidth: 140,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 174
  },
  Text_2_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_175: {
    width: 140,
    minWidth: 140,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 212
  },
  Text_2_175: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_176: {
    width: 230,
    minWidth: 230,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 169
  },
  ImageBackground_2_178: {
    width: 227,
    minWidth: 227,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 208
  },
  ImageBackground_2_179: {
    width: 226,
    minWidth: 226,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 248
  },
  ImageBackground_27_67: {
    width: 31.63636589050293,
    minWidth: 31.63636589050293,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 12,
    resizeMode: "cover"
  },
  ImageBackground_27_68: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 59,
    resizeMode: "cover"
  },
  ImageBackground_27_70: {
    width: 30,
    minWidth: 30,
    height: 27.56756591796875,
    minHeight: 27.56756591796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 101,
    resizeMode: "cover"
  },
  ImageBackground_61_0: {
    width: 34.82143020629883,
    minWidth: 34.82143020629883,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 143,
    resizeMode: "cover"
  },
  ImageBackground_61_1: {
    width: 29.240507125854492,
    minWidth: 29.240507125854492,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 185,
    resizeMode: "cover",
    borderTopLeftRadius: 112.5,
    borderTopRightRadius: 112.5,
    borderBottomLeftRadius: 112.5,
    borderBottomRightRadius: 112.5
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
