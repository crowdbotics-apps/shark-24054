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
      <View style={styles.View_2_528} />
      <View style={styles.View_116_86}>
        <View style={styles.View_116_87}>
          <View style={styles.View_116_88} />
        </View>
        <View style={styles.View_116_89}>
          <Text style={styles.Text_116_89}> Respond to Story...</Text>
        </View>
        <View style={styles.View_117_0}>
          <Text style={styles.Text_117_0}>10mins</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e589/da14/61414597df1f0d2cd263ec0048412464"
        }}
        style={styles.ImageBackground_2_529}
      />
      <View style={styles.View_2_530}>
        <Text style={styles.Text_2_530}>SLIME LANGUAGE 2 SOON</Text>
      </View>
      <View style={styles.View_2_531}>
        <View style={styles.View_2_532}>
          <View style={styles.View_2_533} />
          <View style={styles.View_2_534} />
          <View style={styles.View_2_535} />
          <View style={styles.View_2_536} />
          <View style={styles.View_2_537}>
            <Text style={styles.Text_2_537}>Slime Tee</Text>
          </View>
        </View>
        <View style={styles.View_2_538}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5da4/e543/e0b9ea3855dd9c7334b0cdcbc88fa554"
            }}
            style={styles.ImageBackground_2_539}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa2/37e8/96e1a6b80be07c112721a22b9db82bd8"
        }}
        style={styles.ImageBackground_2_540}
      />
      <View style={styles.View_2_541}>
        <Text style={styles.Text_2_541}>thu.gg_a</Text>
      </View>
      <View style={styles.View_117_3}>
        <View style={styles.View_117_1} />
        <View style={styles.View_117_2} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2_528: {
    width: 349,
    minWidth: 349,
    height: 724,
    minHeight: 724,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 38,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23
  },
  View_116_86: {
    width: 357,
    minWidth: 357,
    height: 677,
    minHeight: 677,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 65
  },
  View_116_87: {
    width: 336.9130554199219,
    minWidth: 336.9130554199219,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.0869140625,
    top: 643
  },
  View_116_88: {
    width: 336.9130554199219,
    minWidth: 336.9130554199219,
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
  View_116_89: {
    width: 126,
    minWidth: 126,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 652
  },
  Text_116_89: {
    color: "rgba(92, 91, 91, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_0: {
    width: 82,
    minWidth: 82,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 123,
    top: 0
  },
  Text_117_0: {
    color: "rgba(172, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_529: {
    width: 349,
    minWidth: 349,
    height: 305,
    minHeight: 305,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 145,
    resizeMode: "cover"
  },
  View_2_530: {
    width: 309,
    minWidth: 309,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 471
  },
  Text_2_530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_531: {
    width: 179,
    minWidth: 179,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 116,
    top: 518
  },
  View_2_532: {
    width: 179,
    minWidth: 179,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2_533: {
    width: 103.33181762695312,
    minWidth: 103.33181762695312,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.509033203125,
    top: 38,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_534: {
    width: 116.3499984741211,
    minWidth: 116.3499984741211,
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
  View_2_535: {
    width: 116.3499984741211,
    minWidth: 116.3499984741211,
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
  View_2_536: {
    width: 116.3499984741211,
    minWidth: 116.3499984741211,
    height: 17.479999542236328,
    minHeight: 17.479999542236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.679931640625,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_537: {
    width: 172.49090576171875,
    minWidth: 172.49090576171875,
    minHeight: 28.1200008392334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.509033203125,
    top: 113.239990234375
  },
  Text_2_537: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_538: {
    width: 97,
    minWidth: 97,
    height: 93,
    minHeight: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 8
  },
  ImageBackground_2_539: {
    width: 97,
    minWidth: 97,
    height: 93,
    minHeight: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_2_540: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 50
  },
  View_2_541: {
    width: 101,
    minWidth: 101,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 58
  },
  Text_2_541: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_117_3: {
    width: 12,
    minWidth: 12,
    height: 12,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 65
  },
  View_117_1: {
    width: 11.97716236114502,
    minWidth: 11.97716236114502,
    height: 11.999980926513672,
    minHeight: 11.999980926513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.000244140625,
    backgroundColor: "rgba(255, 253, 253, 1)"
  },
  View_117_2: {
    width: 11.999999046325684,
    minWidth: 11.999999046325684,
    height: 11.976173400878906,
    minHeight: 11.976173400878906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.00006103515625,
    top: 0,
    backgroundColor: "rgba(255, 253, 253, 1)"
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
