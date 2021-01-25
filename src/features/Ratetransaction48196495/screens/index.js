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
      <View source={{ uri: "null" }} style={styles.View_259_9} />
      <View style={styles.View_259_10} />
      <View style={styles.View_259_17}>
        <View style={styles.View_259_18} />
        <View style={styles.View_259_19}>
          <Text style={styles.Text_259_19}>RATE!</Text>
        </View>
      </View>
      <View style={styles.View_259_24} />
      <View style={styles.View_259_25} />
      <View style={styles.View_259_26} />
      <View style={styles.View_259_27} />
      <View style={styles.View_259_28}>
        <Text style={styles.Text_259_28}>Yeezy Slides Young Wunna</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
        }}
        style={styles.ImageBackground_259_29}
      />
      <View style={styles.View_259_30} />
      <View style={styles.View_259_31} />
      <View style={styles.View_259_32} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c6/5ab8/a2299a9159b186b590ae3d71f2bce4f0"
        }}
        style={styles.ImageBackground_259_35}
      />
      <View style={styles.View_259_33} />
      <View style={styles.View_259_34}>
        <Text style={styles.Text_259_34}>Cacti Flavor Bundle</Text>
      </View>
      <View style={styles.View_259_43}>
        <View style={styles.View_259_44} />
        <View style={styles.View_259_45} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de62/a195/f54cfdfce8dbdef45b85d0920701a58f"
        }}
        style={styles.ImageBackground_259_46}
      />
      <View style={styles.View_260_8}>
        <Text style={styles.Text_260_8}>travisscott</Text>
      </View>
      <View style={styles.View_260_9}>
        <Text style={styles.Text_260_9}>ASTROWORLD</Text>
      </View>
      <View style={styles.View_260_10}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/287a/c8cf/1ceca38248b07e957ae8c840c6f14214"
          }}
          style={styles.ImageBackground_260_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/287a/c8cf/1ceca38248b07e957ae8c840c6f14214"
          }}
          style={styles.ImageBackground_260_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/287a/c8cf/1ceca38248b07e957ae8c840c6f14214"
          }}
          style={styles.ImageBackground_260_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/287a/c8cf/1ceca38248b07e957ae8c840c6f14214"
          }}
          style={styles.ImageBackground_260_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/287a/c8cf/1ceca38248b07e957ae8c840c6f14214"
          }}
          style={styles.ImageBackground_260_15}
        />
      </View>
      <View style={styles.View_260_16}>
        <Text style={styles.Text_260_16}>Condition: Brand New</Text>
      </View>
      <View style={styles.View_260_36}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
          }}
          style={styles.ImageBackground_260_37}
        />
        <View style={styles.View_260_38}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_39}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57a6/0d69/9ee9a27ff31254a950ba45df13e5a603"
            }}
            style={styles.ImageBackground_260_43}
          />
        </View>
      </View>
      <View style={styles.View_260_45}>
        <Text style={styles.Text_260_45}>PRODUCT QUALITY</Text>
      </View>
      <View style={styles.View_260_46}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
          }}
          style={styles.ImageBackground_260_47}
        />
        <View style={styles.View_260_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57a6/0d69/9ee9a27ff31254a950ba45df13e5a603"
            }}
            style={styles.ImageBackground_260_53}
          />
        </View>
      </View>
      <View style={styles.View_260_54}>
        <Text style={styles.Text_260_54}>COMMUNICATION</Text>
      </View>
      <View style={styles.View_260_64}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
          }}
          style={styles.ImageBackground_260_65}
        />
        <View style={styles.View_260_66}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_68}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5a/4de0/4dd9a76cb1c021cb03c4634c83fae7c5"
            }}
            style={styles.ImageBackground_260_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57a6/0d69/9ee9a27ff31254a950ba45df13e5a603"
            }}
            style={styles.ImageBackground_260_71}
          />
        </View>
      </View>
      <View style={styles.View_260_72}>
        <Text style={styles.Text_260_72}>DELIVERY</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_259_9: {
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
  View_259_10: {
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
  View_259_17: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 679
  },
  View_259_18: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_259_19: {
    width: 101.25,
    minWidth: 101.25,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.7115478515625,
    top: 13
  },
  Text_259_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_259_24: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 106,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_259_25: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 63,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_259_26: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 187,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_259_27: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 187,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_259_28: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 192
  },
  Text_259_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_259_29: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 66,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_259_30: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 106,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_259_31: {
    width: 130,
    minWidth: 130,
    height: 183,
    minHeight: 183,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 46,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_259_32: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 187,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  ImageBackground_259_35: {
    width: 95,
    minWidth: 95,
    height: 116,
    minHeight: 116,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 69,
    resizeMode: "cover"
  },
  View_259_33: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 187,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_259_34: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 192
  },
  Text_259_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_259_43: {
    width: 130,
    minWidth: 130,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 46
  },
  View_259_44: {
    width: 130,
    minWidth: 130,
    height: 30,
    minHeight: 30,
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
  View_259_45: {
    width: 130,
    minWidth: 130,
    height: 16.363636016845703,
    minHeight: 16.363636016845703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 13.6363525390625,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  ImageBackground_259_46: {
    width: 17,
    minWidth: 17,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 128,
    top: 53
  },
  View_260_8: {
    width: 53,
    minWidth: 53,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139,
    top: 53
  },
  Text_260_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_260_9: {
    width: 130,
    minWidth: 130,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 99,
    top: 62
  },
  Text_260_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_260_10: {
    width: 27,
    minWidth: 27,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 55
  },
  ImageBackground_260_11: {
    width: 5.704225540161133,
    minWidth: 5.704225540161133,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_260_12: {
    width: 5.704225540161133,
    minWidth: 5.704225540161133,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.323944091796875,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_260_13: {
    width: 5.704225540161133,
    minWidth: 5.704225540161133,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.64788818359375,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_260_14: {
    width: 5.704225540161133,
    minWidth: 5.704225540161133,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.971832275390625,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_260_15: {
    width: 5.704225540161133,
    minWidth: 5.704225540161133,
    height: 6,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.2957763671875,
    top: 0,
    resizeMode: "cover"
  },
  View_260_16: {
    width: 169,
    minWidth: 169,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 205
  },
  Text_260_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_260_36: {
    width: 193.21731567382812,
    minWidth: 193.21731567382812,
    height: 42.1030158996582,
    minHeight: 42.1030158996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 316
  },
  ImageBackground_260_37: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.40655517578125,
    top: 2.240234375
  },
  View_260_38: {
    width: 193.21731567382812,
    minWidth: 193.21731567382812,
    height: 42.1030158996582,
    minHeight: 42.1030158996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_260_39: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.310516357421875,
    top: 2.8607177734375
  },
  ImageBackground_260_40: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.85858154296875,
    top: 2.550537109375
  },
  ImageBackground_260_41: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115.95462036132812,
    top: 1.9300537109375
  },
  ImageBackground_260_42: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 154.50262451171875,
    top: 1.619873046875
  },
  ImageBackground_260_43: {
    width: 35.680667877197266,
    minWidth: 35.680667877197266,
    height: 40.26604461669922,
    minHeight: 40.26604461669922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.309967041015625,
    top: 1.5499267578125,
    resizeMode: "cover"
  },
  View_260_45: {
    width: 287,
    minWidth: 287,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 277
  },
  Text_260_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_260_46: {
    width: 193.21731567382812,
    minWidth: 193.21731567382812,
    height: 42.1030158996582,
    minHeight: 42.1030158996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 437
  },
  ImageBackground_260_47: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.40655517578125,
    top: 2.240234375
  },
  View_260_48: {
    width: 193.21731567382812,
    minWidth: 193.21731567382812,
    height: 42.1030158996582,
    minHeight: 42.1030158996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_260_49: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.310516357421875,
    top: 2.8607177734375
  },
  ImageBackground_260_50: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.85858154296875,
    top: 2.550537109375
  },
  ImageBackground_260_51: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115.95462036132812,
    top: 1.9300537109375
  },
  ImageBackground_260_52: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 154.50262451171875,
    top: 1.619873046875
  },
  ImageBackground_260_53: {
    width: 35.680667877197266,
    minWidth: 35.680667877197266,
    height: 40.26604461669922,
    minHeight: 40.26604461669922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.309967041015625,
    top: 1.5499267578125,
    resizeMode: "cover"
  },
  View_260_54: {
    width: 287,
    minWidth: 287,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 398
  },
  Text_260_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_260_64: {
    width: 193.21731567382812,
    minWidth: 193.21731567382812,
    height: 42.1030158996582,
    minHeight: 42.1030158996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 558
  },
  ImageBackground_260_65: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.40655517578125,
    top: 2.240234375
  },
  View_260_66: {
    width: 193.21731567382812,
    minWidth: 193.21731567382812,
    height: 42.1030158996582,
    minHeight: 42.1030158996582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_260_67: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.310516357421875,
    top: 2.8607177734375
  },
  ImageBackground_260_68: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.85858154296875,
    top: 2.550537109375
  },
  ImageBackground_260_69: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115.95462036132812,
    top: 1.9300537109375
  },
  ImageBackground_260_70: {
    width: 38.70136642456055,
    minWidth: 38.70136642456055,
    height: 37.579376220703125,
    minHeight: 37.579376220703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 154.50262451171875,
    top: 1.619873046875
  },
  ImageBackground_260_71: {
    width: 35.680667877197266,
    minWidth: 35.680667877197266,
    height: 40.26604461669922,
    minHeight: 40.26604461669922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.309967041015625,
    top: 1.5499267578125,
    resizeMode: "cover"
  },
  View_260_72: {
    width: 287,
    minWidth: 287,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 519
  },
  Text_260_72: {
    color: "rgba(255, 255, 255, 1)",
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
