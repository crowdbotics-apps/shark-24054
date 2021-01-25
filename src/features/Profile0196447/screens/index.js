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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40c8/4e4e/3d2ed4802183d8f3171503b196ed8c19"
        }}
        style={styles.ImageBackground_2_3}
      />
      <View style={styles.View_29_52}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b18/5e67/61d8d9130891c977ac0323ff61253c45"
          }}
          style={styles.ImageBackground_2_6}
        />
      </View>
      <View style={styles.View_2_7}>
        <Text style={styles.Text_2_7}>thu.gg_a</Text>
      </View>
      <View style={styles.View_27_36}>
        <Text style={styles.Text_27_36}>4 Following</Text>
      </View>
      <View style={styles.View_2_32}>
        <Text style={styles.Text_2_32}>Highest Bid:</Text>
      </View>
      <View style={styles.View_29_2}>
        <View style={styles.View_29_3}>
          <View style={styles.View_29_4}>
            <View style={styles.View_29_5} />
            <View style={styles.View_29_6} />
          </View>
          <View style={styles.View_29_7} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_29_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_29_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_29_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_29_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_29_12}
        />
      </View>
      <View style={styles.View_27_34}>
        <Text style={styles.Text_27_34}>5 Similarities</Text>
      </View>
      <View style={styles.View_27_35}>
        <Text style={styles.Text_27_35}>7.9M Followers</Text>
      </View>
      <View style={styles.View_27_37}>
        <View style={styles.View_27_38}>
          <View style={styles.View_27_39}>
            <View style={styles.View_27_40} />
            <View style={styles.View_27_41} />
            <View style={styles.View_27_42} />
            <View style={styles.View_27_43} />
          </View>
          <View style={styles.View_27_44}>
            <Text style={styles.Text_27_44}>Tides</Text>
          </View>
        </View>
        <View style={styles.View_27_45}>
          <View style={styles.View_27_46}>
            <View style={styles.View_27_47}>
              <View style={styles.View_27_48}>
                <View style={styles.View_27_49} />
                <View style={styles.View_27_50} />
                <View style={styles.View_27_51} />
                <View style={styles.View_27_52} />
              </View>
              <View style={styles.View_27_53}>
                <Text style={styles.Text_27_53}>Pods</Text>
              </View>
            </View>
            <View style={styles.View_27_54} />
            <View style={styles.View_27_55} />
            <View style={styles.View_27_56} />
          </View>
          <View style={styles.View_27_57} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58da/2bbe/51160bf744e60a73fdf2041f472eb378"
          }}
          style={styles.ImageBackground_27_58}
        />
      </View>
      <View style={styles.View_27_60} />
      <View style={styles.View_27_61}>
        <Text style={styles.Text_27_61}>Edit Profile</Text>
      </View>
      <View style={styles.View_27_59}>
        <Text style={styles.Text_27_59}>
          SEX!! Bookyoungthug2@unitedtalent.com
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_29_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5942/ec8d/c4757d7e56033d41ad66a9f03163486f"
        }}
        style={styles.ImageBackground_27_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10a5/1066/a03046d590b059e69f1c44814ed9f3fc"
        }}
        style={styles.ImageBackground_27_62}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_2_3: {
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
  View_29_52: {
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
  ImageBackground_2_6: {
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
  View_2_7: {
    width: 136,
    minWidth: 136,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 53
  },
  Text_2_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_36: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 118
  },
  Text_27_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_2_32: {
    width: 59,
    minWidth: 59,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 595
  },
  Text_2_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_2: {
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
  View_29_3: {
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
  View_29_4: {
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
  View_29_5: {
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
  View_29_6: {
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
  View_29_7: {
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
  ImageBackground_29_8: {
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
  ImageBackground_29_9: {
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
  ImageBackground_29_10: {
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
  ImageBackground_29_11: {
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
  ImageBackground_29_12: {
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
  View_27_34: {
    width: 102,
    minWidth: 102,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 118
  },
  Text_27_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_27_35: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 124,
    top: 118
  },
  Text_27_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_27_37: {
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
  View_27_38: {
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
  View_27_39: {
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
  View_27_40: {
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
  View_27_41: {
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
  View_27_42: {
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
  View_27_43: {
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
  View_27_44: {
    width: 40,
    minWidth: 40,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 115
  },
  Text_27_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_45: {
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
  View_27_46: {
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
  View_27_47: {
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
  View_27_48: {
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
  View_27_49: {
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
  View_27_50: {
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
  View_27_51: {
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
  View_27_52: {
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
  View_27_53: {
    width: 40,
    minWidth: 40,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 115
  },
  Text_27_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_54: {
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
  View_27_55: {
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
  View_27_56: {
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
  View_27_57: {
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
  ImageBackground_27_58: {
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
  View_27_60: {
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
  View_27_61: {
    width: 231,
    minWidth: 231,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 438
  },
  Text_27_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_27_59: {
    width: 339,
    minWidth: 339,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 483
  },
  Text_27_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_29_51: {
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
  ImageBackground_27_32: {
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
  ImageBackground_27_62: {
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
  View_2: { height: 812 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
