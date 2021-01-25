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
      <View style={styles.View_80_90}>
        <View style={styles.View_80_91}>
          <View style={styles.View_80_92}>
            <View style={styles.View_80_93} />
            <View style={styles.View_80_94} />
          </View>
          <View style={styles.View_80_95} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_80_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_80_97}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_80_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_80_99}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_80_100}
      />
      <View style={styles.View_80_121}>
        <View style={styles.View_80_103} />
        <View style={styles.View_80_107}>
          <View style={styles.View_80_108} />
          <View style={styles.View_80_109} />
        </View>
        <View style={styles.View_80_116}>
          <Text style={styles.Text_80_116}>BOUGHT</Text>
        </View>
      </View>
      <View style={styles.View_80_119}>
        <View style={styles.View_80_102} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7d1/c301/e5f00e0ff555e3eae8ff97a0da2952f1"
          }}
          style={styles.ImageBackground_80_110}
        />
        <View style={styles.View_80_117}>
          <Text style={styles.Text_80_117}>BOOKMARKED</Text>
        </View>
      </View>
      <View style={styles.View_80_120}>
        <View style={styles.View_80_101} />
        <View style={styles.View_80_111}>
          <View style={styles.View_80_112} />
          <View style={styles.View_80_113}>
            <Text style={styles.Text_80_113}>$</Text>
          </View>
        </View>
        <View style={styles.View_80_118}>
          <Text style={styles.Text_80_118}>BIDS</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_80_90: {
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
  View_80_91: {
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
  View_80_92: {
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
  View_80_93: {
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
  View_80_94: {
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
  View_80_95: {
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
  ImageBackground_80_96: {
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
  ImageBackground_80_97: {
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
  ImageBackground_80_98: {
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
  ImageBackground_80_99: {
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
  ImageBackground_80_100: {
    width: 33,
    minWidth: 33,
    height: 32.19512176513672,
    minHeight: 32.19512176513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 169,
    top: 748,
    resizeMode: "cover"
  },
  View_80_121: {
    width: 334,
    minWidth: 334,
    height: 136,
    minHeight: 136,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 490
  },
  View_80_103: {
    width: 334,
    minWidth: 334,
    height: 136,
    minHeight: 136,
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
  View_80_107: {
    width: 24,
    minWidth: 24,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305,
    top: 109
  },
  View_80_108: {
    width: 13.5104341506958,
    minWidth: 13.5104341506958,
    height: 10.971495628356934,
    minHeight: 10.971495628356934,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.0284423828125,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  View_80_109: {
    width: 17.85048484802246,
    minWidth: 17.85048484802246,
    height: 22.774188995361328,
    minHeight: 22.774188995361328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.1495361328125,
    top: 0,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  View_80_116: {
    width: 186,
    minWidth: 186,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 114,
    top: 48
  },
  Text_80_116: {
    color: "rgba(23, 14, 125, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_80_119: {
    width: 334,
    minWidth: 334,
    height: 136,
    minHeight: 136,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 287
  },
  View_80_102: {
    width: 334,
    minWidth: 334,
    height: 136,
    minHeight: 136,
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
  ImageBackground_80_110: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 299,
    top: 101,
    resizeMode: "cover"
  },
  View_80_117: {
    width: 186,
    minWidth: 186,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 49
  },
  Text_80_117: {
    color: "rgba(23, 14, 125, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_80_120: {
    width: 334,
    minWidth: 334,
    height: 136,
    minHeight: 136,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 93
  },
  View_80_101: {
    width: 334,
    minWidth: 334,
    height: 136,
    minHeight: 136,
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
  View_80_111: {
    width: 27,
    minWidth: 27,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 303,
    top: 111
  },
  View_80_112: {
    width: 27,
    minWidth: 27,
    height: 13,
    minHeight: 13,
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
  View_80_113: {
    width: 4.263157844543457,
    minWidth: 4.263157844543457,
    minHeight: 7.279999732971191,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 2
  },
  Text_80_113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_80_118: {
    width: 186,
    minWidth: 186,
    minHeight: 59,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 46
  },
  Text_80_118: {
    color: "rgba(23, 14, 125, 1)",
    fontSize: 26,
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
