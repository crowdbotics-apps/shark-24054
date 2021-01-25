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
      <View source={{ uri: "null" }} style={styles.View_219_39} />
      <View style={styles.View_219_49} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_219_51}
      />
      <View style={styles.View_219_66}>
        <Text style={styles.Text_219_66}>
          If any of the information above is innaccurate, please contact us for
          immediate assistance or leave a rating.
        </Text>
      </View>
      <View style={styles.View_219_132}>
        <View style={styles.View_219_40}>
          <View style={styles.View_219_41} />
          <View style={styles.View_219_42}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f6b/6a4d/701a7177cab909307fe9d064d6a21485"
              }}
              style={styles.ImageBackground_219_43}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d74/dce2/b1988424fc0414905ff055770525171a"
              }}
              style={styles.ImageBackground_219_44}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9168/11d9/9880d3c41c602d1e84843d5002d5da92"
            }}
            style={styles.ImageBackground_219_45}
          />
          <View style={styles.View_219_46} />
          <View style={styles.View_219_47} />
          <View style={styles.View_219_48} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f13/588f/2d91604b4a72e9f14315c69456c8d703"
          }}
          style={styles.ImageBackground_219_64}
        />
        <View style={styles.View_219_65}>
          <Text style={styles.Text_219_65}>a.nj_an</Text>
        </View>
        <View style={styles.View_219_131}>
          <Text style={styles.Text_219_131}>Shark Tee</Text>
        </View>
      </View>
      <View style={styles.View_219_143}>
        <Text style={styles.Text_219_143}>(1% of Item Price)</Text>
      </View>
      <View style={styles.View_219_145}>
        <Text style={styles.Text_219_145}>Payment Method</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bbf/1d6d/ca64a2a426e728954ed9ea5c5bba0e68"
        }}
        style={styles.ImageBackground_219_148}
      />
      <View style={styles.View_219_149}>
        <View style={styles.View_219_150} />
        <View style={styles.View_219_151}>
          <Text style={styles.Text_219_151}>Place Order</Text>
        </View>
      </View>
      <View style={styles.View_219_75}>
        <View style={styles.View_219_76}>
          <View style={styles.View_219_77}>
            <View style={styles.View_219_78} />
            <View style={styles.View_219_79} />
          </View>
          <View style={styles.View_219_80} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_219_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_219_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_219_83}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_219_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_219_85}
        />
      </View>
      <View style={styles.View_219_128}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_219_127}
        />
        <View style={styles.View_219_124}>
          <View style={styles.View_219_125}>
            <View style={styles.View_219_126}>
              <Text style={styles.Text_219_126}>$9.18</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_219_116}>
          <Text style={styles.Text_219_116}>Shark Tee</Text>
        </View>
        <View style={styles.View_219_123}>
          <Text style={styles.Text_219_123}>Total</Text>
        </View>
        <View style={styles.View_219_118}>
          <Text style={styles.Text_219_118}>Processing Fee</Text>
        </View>
        <View style={styles.View_219_117}>
          <Text style={styles.Text_219_117}>Order Summary</Text>
        </View>
        <View style={styles.View_219_52}>
          <View style={styles.View_219_53}>
            <View style={styles.View_219_55}>
              <Text style={styles.Text_219_55}>$8.99</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_219_119}>
          <View style={styles.View_219_120}>
            <View style={styles.View_219_121}>
              <Text style={styles.Text_219_121}>$0.09</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_219_141}>
        <View style={styles.View_219_129}>
          <Text style={styles.Text_219_129}>PICKUP LOCATION</Text>
        </View>
        <View style={styles.View_219_130}>
          <Text style={styles.Text_219_130}>
            Please choose the location that you wish to pick up the item.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b3/e67d/4357338534be19cb1e039f231657ad60"
          }}
          style={styles.ImageBackground_219_136}
        />
        <View style={styles.View_219_137}>
          <View style={styles.View_219_138} />
          <View style={styles.View_219_139}>
            <Text style={styles.Text_219_139}>Stamp Union, UMD</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/8ab0/4e2111515be6e0a5698cd2ccdba68377"
        }}
        style={styles.ImageBackground_219_140}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/8ab0/4e2111515be6e0a5698cd2ccdba68377"
        }}
        style={styles.ImageBackground_219_146}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/8ab0/4e2111515be6e0a5698cd2ccdba68377"
        }}
        style={styles.ImageBackground_219_147}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/8ab0/4e2111515be6e0a5698cd2ccdba68377"
        }}
        style={styles.ImageBackground_219_142}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_219_39: {
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
  View_219_49: {
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
  ImageBackground_219_51: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 45,
    resizeMode: "cover"
  },
  View_219_66: {
    width: 342,
    minWidth: 342,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 590
  },
  Text_219_66: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  View_219_132: {
    width: 337,
    minWidth: 337,
    height: 245,
    minHeight: 245,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 78
  },
  View_219_40: {
    width: 159,
    minWidth: 159,
    height: 175,
    minHeight: 175,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 34
  },
  View_219_41: {
    width: 159,
    minWidth: 159,
    height: 175,
    minHeight: 175,
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
  View_219_42: {
    width: 126.91265106201172,
    minWidth: 126.91265106201172,
    height: 125.3329849243164,
    minHeight: 125.3329849243164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.80419921875,
    top: 21.664779663085938
  },
  ImageBackground_219_43: {
    width: 126.91265106201172,
    minWidth: 126.91265106201172,
    height: 125.3329849243164,
    minHeight: 125.3329849243164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_219_44: {
    width: 45.23619079589844,
    minWidth: 45.23619079589844,
    height: 48.654109954833984,
    minHeight: 48.654109954833984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.047607421875,
    top: 26.07861328125,
    resizeMode: "cover"
  },
  ImageBackground_219_45: {
    width: 159,
    minWidth: 159,
    height: 12.146529197692871,
    minHeight: 12.146529197692871,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 162.85345458984375
  },
  View_219_46: {
    width: 159,
    minWidth: 159,
    height: 13.046272277832031,
    minHeight: 13.046272277832031,
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
  View_219_47: {
    width: 159,
    minWidth: 159,
    height: 8.233553886413574,
    minHeight: 8.233553886413574,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 161.17779541015625,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_219_48: {
    width: 159,
    minWidth: 159,
    height: 8.233553886413574,
    minHeight: 8.233553886413574,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.7402496337890625,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  ImageBackground_219_64: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 215
  },
  View_219_65: {
    width: 280,
    minWidth: 280,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 217
  },
  Text_219_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_219_131: {
    width: 93,
    minWidth: 93,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 0
  },
  Text_219_131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_143: {
    width: 115,
    minWidth: 115,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 526
  },
  Text_219_143: {
    color: "rgba(143, 140, 140, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_145: {
    width: 138,
    minWidth: 138,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 639
  },
  Text_219_145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_148: {
    width: 36.558109283447266,
    minWidth: 36.558109283447266,
    height: 30.672067642211914,
    minHeight: 30.672067642211914,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 331,
    top: 636,
    resizeMode: "cover"
  },
  View_219_149: {
    width: 120,
    minWidth: 120,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 683
  },
  View_219_150: {
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
  View_219_151: {
    width: 107.62886810302734,
    minWidth: 107.62886810302734,
    minHeight: 25.263158798217773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.23529052734375,
    top: 6.66668701171875
  },
  Text_219_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_75: {
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
  View_219_76: {
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
  View_219_77: {
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
  View_219_78: {
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
  View_219_79: {
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
  View_219_80: {
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
  ImageBackground_219_81: {
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
  ImageBackground_219_82: {
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
  ImageBackground_219_83: {
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
  ImageBackground_219_84: {
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
  ImageBackground_219_85: {
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
  View_219_128: {
    width: 314,
    minWidth: 314,
    height: 148,
    minHeight: 148,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 433
  },
  ImageBackground_219_127: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 116
  },
  View_219_124: {
    width: 109,
    minWidth: 109,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 125
  },
  View_219_125: {
    width: 109,
    minWidth: 109,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_126: {
    width: 109,
    minWidth: 109,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_219_126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_116: {
    width: 115,
    minWidth: 115,
    minHeight: 32.53691101074219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 39
  },
  Text_219_116: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_123: {
    width: 115,
    minWidth: 115,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 120
  },
  Text_219_123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_118: {
    width: 115,
    minWidth: 115,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 71
  },
  Text_219_118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_117: {
    width: 184,
    minWidth: 184,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 0
  },
  Text_219_117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_52: {
    width: 109,
    minWidth: 109,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162.111083984375,
    top: 41
  },
  View_219_53: {
    width: 109,
    minWidth: 109,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_55: {
    width: 109,
    minWidth: 109,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_219_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_119: {
    width: 109,
    minWidth: 109,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 162,
    top: 75
  },
  View_219_120: {
    width: 109,
    minWidth: 109,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_121: {
    width: 109,
    minWidth: 109,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_219_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_141: {
    width: 343,
    minWidth: 343,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 351
  },
  View_219_129: {
    width: 162,
    minWidth: 162,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1
  },
  Text_219_129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_219_130: {
    width: 203,
    minWidth: 203,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 31
  },
  Text_219_130: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.26,
    textTransform: "none"
  },
  ImageBackground_219_136: {
    width: 18,
    minWidth: 18,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 3,
    resizeMode: "cover"
  },
  View_219_137: {
    width: 166,
    minWidth: 166,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 177,
    top: 0
  },
  View_219_138: {
    width: 166,
    minWidth: 166,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(223, 223, 223, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_219_139: {
    width: 148.88661193847656,
    minWidth: 148.88661193847656,
    minHeight: 15.157894134521484,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.7113037109375,
    top: 3.789459228515625
  },
  Text_219_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_219_140: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 424
  },
  ImageBackground_219_146: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 630
  },
  ImageBackground_219_147: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 674
  },
  ImageBackground_219_142: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 338
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
