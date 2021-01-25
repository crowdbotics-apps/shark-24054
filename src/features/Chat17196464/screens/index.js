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
      <View source={{ uri: "null" }} style={styles.View_13_4} />
      <View style={styles.View_2_214}>
        <View style={styles.View_2_215} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1035/f5f1/f38491ceb2becc239bda0637092df79c"
          }}
          style={styles.ImageBackground_2_216}
        />
        <View style={styles.View_2_217}>
          <Text style={styles.Text_2_217}>Search</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b78/143a/35532b7498ea1fb26a00167223792962"
        }}
        style={styles.ImageBackground_2_218}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6b9/c41a/105b26306c1e933d9d3330d17a4ffcbf"
        }}
        style={styles.ImageBackground_2_221}
      />
      <View style={styles.View_2_224}>
        <Text style={styles.Text_2_224}>Baby Pluto</Text>
      </View>
      <View style={styles.View_2_225}>
        <Text style={styles.Text_2_225}>
          Bro, did you check out dem Gunna slides - 25 minutes
        </Text>
      </View>
      <View style={styles.View_2_226}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92da/a3d7/1dfbd8e6bb18cbfef9e6e953077daf01"
          }}
          style={styles.ImageBackground_2_227}
        />
        <View style={styles.View_2_230}>
          <Text style={styles.Text_2_230}>Navraj Goraya Singh</Text>
        </View>
        <View style={styles.View_2_231}>
          <Text style={styles.Text_2_231}>Travis Scott</Text>
        </View>
        <View style={styles.View_2_232}>
          <Text style={styles.Text_2_232}>
            I HAD 200 FOR LUNCH ! - 25 minutes
          </Text>
        </View>
        <View style={styles.View_2_233}>
          <Text style={styles.Text_2_233}>
            Sent you a bid for Slime Tee - 2h
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05cf/35e5/8ca3b4a1975bfd61a533fa97eb5f8591"
          }}
          style={styles.ImageBackground_2_234}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05cf/35e5/8ca3b4a1975bfd61a533fa97eb5f8591"
          }}
          style={styles.ImageBackground_2_235}
        />
      </View>
      <View style={styles.View_2_237}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25d8/e63b/e89593e4c8ba101469dd4ebb14dda400"
          }}
          style={styles.ImageBackground_2_238}
        />
        <View style={styles.View_2_241}>
          <Text style={styles.Text_2_241}>Young Wunna</Text>
        </View>
        <View style={styles.View_2_242}>
          <Text style={styles.Text_2_242}>
            You sent a bid for Yeezy Slides - 23 minutes
          </Text>
        </View>
      </View>
      <View style={styles.View_2_611}>
        <View style={styles.View_2_612}>
          <View style={styles.View_2_613}>
            <View style={styles.View_2_614} />
            <View style={styles.View_2_615} />
          </View>
          <View style={styles.View_2_616} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_2_617}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_2_618}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_2_619}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_2_620}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_2_621}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_29_101}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_13_4: {
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
  View_2_214: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 74
  },
  View_2_215: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
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
  ImageBackground_2_216: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 2,
    resizeMode: "cover"
  },
  View_2_217: {
    width: 218,
    minWidth: 218,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 1
  },
  Text_2_217: {
    color: "rgba(23, 14, 125, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_218: {
    width: 65,
    minWidth: 65,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 202
  },
  ImageBackground_2_221: {
    width: 65,
    minWidth: 65,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 367
  },
  View_2_224: {
    width: 76,
    minWidth: 76,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 218
  },
  Text_2_224: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_225: {
    width: 243,
    minWidth: 243,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 239
  },
  Text_2_225: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_226: {
    width: 231,
    minWidth: 231,
    height: 150,
    minHeight: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 284
  },
  ImageBackground_2_227: {
    width: 65,
    minWidth: 65,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_230: {
    width: 113,
    minWidth: 113,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 16
  },
  Text_2_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_231: {
    width: 113,
    minWidth: 113,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 102
  },
  Text_2_231: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_232: {
    width: 159,
    minWidth: 159,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 37
  },
  Text_2_232: {
    color: "rgba(206, 206, 206, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_233: {
    width: 140,
    minWidth: 140,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 121
  },
  Text_2_233: {
    color: "rgba(206, 206, 206, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_234: {
    width: 20,
    minWidth: 20,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 49
  },
  ImageBackground_2_235: {
    width: 20,
    minWidth: 20,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45,
    top: 131
  },
  View_2_237: {
    width: 263,
    minWidth: 263,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 120
  },
  ImageBackground_2_238: {
    width: 65,
    minWidth: 65,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_241: {
    width: 76,
    minWidth: 76,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 16
  },
  Text_2_241: {
    color: "rgba(147, 147, 147, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_242: {
    width: 191,
    minWidth: 191,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 35
  },
  Text_2_242: {
    color: "rgba(206, 206, 206, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_611: {
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
  View_2_612: {
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
  View_2_613: {
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
  View_2_614: {
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
  View_2_615: {
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
  View_2_616: {
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
  ImageBackground_2_617: {
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
  ImageBackground_2_618: {
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
  ImageBackground_2_619: {
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
  ImageBackground_2_620: {
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
  ImageBackground_2_621: {
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
  ImageBackground_29_101: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 30,
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
