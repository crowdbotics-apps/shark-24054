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
      <View style={styles.View_80_194}>
        <View style={styles.View_80_195} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1035/f5f1/f38491ceb2becc239bda0637092df79c"
          }}
          style={styles.ImageBackground_80_196}
        />
        <View style={styles.View_80_197}>
          <Text style={styles.Text_80_197}>Search</Text>
        </View>
      </View>
      <View style={styles.View_80_198} />
      <View style={styles.View_80_199}>
        <View style={styles.View_80_200}>
          <View style={styles.View_80_201}>
            <View style={styles.View_80_202} />
            <View style={styles.View_80_203} />
          </View>
          <View style={styles.View_80_204} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_80_205}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_80_206}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_80_207}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_80_208}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_80_209}
      />
      <View style={styles.View_112_19}>
        <View style={styles.View_2_262} />
        <View style={styles.View_2_263} />
        <View style={styles.View_2_264} />
        <View style={styles.View_2_265} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7ee/6169/3b2f454e6978d8186f5ca6e3e4f1ee57"
          }}
          style={styles.ImageBackground_2_266}
        />
        <View style={styles.View_2_267}>
          <Text style={styles.Text_2_267}>Yeezy Slides wunn_a</Text>
        </View>
        <View style={styles.View_2_268}>
          <View style={styles.View_2_269} />
          <View style={styles.View_2_270}>
            <Text style={styles.Text_2_270}>$200</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4361/2230/c1548ed3368e6f9d4f867f8e0a7748e7"
          }}
          style={styles.ImageBackground_2_339}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_80_248}
      />
      <View style={styles.View_112_42}>
        <View style={styles.View_112_20}>
          <Text style={styles.Text_112_20}>Sort By</Text>
        </View>
        <View style={styles.View_112_24}>
          <View style={styles.View_112_25} />
          <View style={styles.View_112_26}>
            <Text style={styles.Text_112_26}>Price: Low-High</Text>
          </View>
        </View>
        <View style={styles.View_112_27}>
          <View style={styles.View_112_28} />
          <View style={styles.View_112_29}>
            <Text style={styles.Text_112_29}>Price: High-Low</Text>
          </View>
        </View>
        <View style={styles.View_112_30}>
          <View style={styles.View_112_31} />
          <View style={styles.View_112_32}>
            <Text style={styles.Text_112_32}>Most Recent</Text>
          </View>
        </View>
        <View style={styles.View_112_33}>
          <View style={styles.View_112_34} />
          <View style={styles.View_112_35}>
            <Text style={styles.Text_112_35}>Least Recent</Text>
          </View>
        </View>
        <View style={styles.View_112_36}>
          <View style={styles.View_112_37} />
          <View style={styles.View_112_38}>
            <Text style={styles.Text_112_38}>Most Popular</Text>
          </View>
        </View>
        <View style={styles.View_112_39}>
          <View style={styles.View_112_40} />
          <View style={styles.View_112_41}>
            <Text style={styles.Text_112_41}>Clear Filters</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_80_194: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 76
  },
  View_80_195: {
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
  ImageBackground_80_196: {
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
  View_80_197: {
    width: 218,
    minWidth: 218,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 1
  },
  Text_80_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_80_198: {
    width: 10,
    minWidth: 10,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 365,
    top: 102,
    backgroundColor: "rgba(94, 94, 94, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_80_199: {
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
  View_80_200: {
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
  View_80_201: {
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
  View_80_202: {
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
  View_80_203: {
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
  View_80_204: {
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
  ImageBackground_80_205: {
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
  ImageBackground_80_206: {
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
  ImageBackground_80_207: {
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
  ImageBackground_80_208: {
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
  ImageBackground_80_209: {
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
  View_112_19: {
    width: 213,
    minWidth: 213,
    height: 187,
    minHeight: 187,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 193
  },
  View_2_262: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 57,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_263: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 14,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_264: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 138,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_265: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 138,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  ImageBackground_2_266: {
    width: 110,
    minWidth: 110,
    height: 101,
    minHeight: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 27,
    resizeMode: "cover"
  },
  View_2_267: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 143
  },
  Text_2_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_268: {
    width: 38,
    minWidth: 38,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 144
  },
  View_2_269: {
    width: 38,
    minWidth: 38,
    height: 25,
    minHeight: 25,
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
  View_2_270: {
    width: 21,
    minWidth: 21,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 6
  },
  Text_2_270: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_339: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_80_248: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 31,
    resizeMode: "cover"
  },
  View_112_42: {
    width: 322,
    minWidth: 322,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 131
  },
  View_112_20: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_112_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_24: {
    width: 85,
    minWidth: 85,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 3
  },
  View_112_25: {
    width: 85,
    minWidth: 85,
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
  View_112_26: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  Text_112_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_27: {
    width: 85,
    minWidth: 85,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 3
  },
  View_112_28: {
    width: 85,
    minWidth: 85,
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
  View_112_29: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.876220703125,
    top: 2.842041015625
  },
  Text_112_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_30: {
    width: 85,
    minWidth: 85,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 237,
    top: 3
  },
  View_112_31: {
    width: 85,
    minWidth: 85,
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
  View_112_32: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.876220703125,
    top: 2.842041015625
  },
  Text_112_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_33: {
    width: 85,
    minWidth: 85,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 29
  },
  View_112_34: {
    width: 85,
    minWidth: 85,
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
  View_112_35: {
    width: 76.23710632324219,
    minWidth: 76.23710632324219,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.227783203125,
    top: 3
  },
  Text_112_35: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_36: {
    width: 85,
    minWidth: 85,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 29
  },
  View_112_37: {
    width: 85,
    minWidth: 85,
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
  View_112_38: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.227783203125,
    top: 3
  },
  Text_112_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_39: {
    width: 85,
    minWidth: 85,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 237,
    top: 29
  },
  View_112_40: {
    width: 85,
    minWidth: 85,
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
  View_112_41: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.2279052734375,
    top: 3
  },
  Text_112_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
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
