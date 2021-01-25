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
      <View style={styles.View_219_34}>
        <View style={styles.View_219_35} />
        <View style={styles.View_219_36}>
          <Text style={styles.Text_219_36}>Buy Now</Text>
        </View>
      </View>
      <View style={styles.View_116_71} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e589/da14/61414597df1f0d2cd263ec0048412464"
        }}
        style={styles.ImageBackground_116_72}
      />
      <View style={styles.View_116_73}>
        <Text style={styles.Text_116_73}>SLIME LANGUAGE 2 SOON</Text>
      </View>
      <View style={styles.View_116_74}>
        <View style={styles.View_116_75}>
          <View style={styles.View_116_76} />
          <View style={styles.View_116_77} />
          <View style={styles.View_116_78} />
          <View style={styles.View_116_79} />
          <View style={styles.View_116_80}>
            <Text style={styles.Text_116_80}>Slime Tee</Text>
          </View>
        </View>
        <View style={styles.View_116_81}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5da4/e543/e0b9ea3855dd9c7334b0cdcbc88fa554"
            }}
            style={styles.ImageBackground_116_82}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa2/37e8/96e1a6b80be07c112721a22b9db82bd8"
        }}
        style={styles.ImageBackground_116_83}
      />
      <View style={styles.View_116_84}>
        <Text style={styles.Text_116_84}>thu.gg_a</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_219_34: {
    width: 86,
    minWidth: 86,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 708
  },
  View_219_35: {
    width: 86,
    minWidth: 86,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_219_36: {
    width: 77.13401794433594,
    minWidth: 77.13401794433594,
    minHeight: 15.789473533630371,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.0352783203125,
    top: 4.16668701171875
  },
  Text_219_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_71: {
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
  ImageBackground_116_72: {
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
  View_116_73: {
    width: 309,
    minWidth: 309,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 471
  },
  Text_116_73: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_74: {
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
  View_116_75: {
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
  View_116_76: {
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
  View_116_77: {
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
  View_116_78: {
    width: 116.3499984741211,
    minWidth: 116.3499984741211,
    height: 37.2400016784668,
    minHeight: 37.2400016784668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.67999267578125,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_116_79: {
    width: 116.3499984741211,
    minWidth: 116.3499984741211,
    height: 17.479999542236328,
    minHeight: 17.479999542236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.67999267578125,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_116_80: {
    width: 172.49090576171875,
    minWidth: 172.49090576171875,
    minHeight: 28.1200008392334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.509033203125,
    top: 113.239990234375
  },
  Text_116_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_81: {
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
  ImageBackground_116_82: {
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
  ImageBackground_116_83: {
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
  View_116_84: {
    width: 101,
    minWidth: 101,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 53
  },
  Text_116_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
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
