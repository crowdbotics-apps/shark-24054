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
      <View source={{ uri: "null" }} style={styles.View_251_13} />
      <View style={styles.View_251_14}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7143/b7a3/67114e117550e9891fa2a81bd5eb5880"
          }}
          style={styles.ImageBackground_251_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d13/ac27/af5d0c8c6fba00bc4c73b082c03bac6c"
          }}
          style={styles.ImageBackground_251_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e02/8848/f9cb01dd39459ca4ed1edf3765d7771c"
          }}
          style={styles.ImageBackground_251_20}
        />
        <View style={styles.View_251_22}>
          <Text style={styles.Text_251_22}>
            liluzivert a lil preview into what’s coming up for my fans this
            summer...cop the tickets and come get lit w me 😛😛😛
          </Text>
        </View>
        <View style={styles.View_251_23} />
        <View style={styles.View_251_24} />
        <View style={styles.View_251_25} />
        <View style={styles.View_251_26}>
          <Text style={styles.Text_251_26}>Uzi Concert</Text>
        </View>
      </View>
      <View style={styles.View_251_30} />
      <View style={styles.View_251_31}>
        <Text style={styles.Text_251_31}>Slimeville, United States</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9f/f768/2595f90aa51f8c8a773602bd03bd4d9e"
        }}
        style={styles.ImageBackground_251_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feee/3a3f/d5f48060e092341321c640afc4940617"
        }}
        style={styles.ImageBackground_251_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45f6/382d/38552bd51fc32fac80b98d460566809d"
        }}
        style={styles.ImageBackground_251_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a503/18bf/43db2e27c2eb53a2c92d665554680404"
        }}
        style={styles.ImageBackground_251_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e2c/af4b/d62e8dda347cfb98bf8a9c273d3f4ecc"
        }}
        style={styles.ImageBackground_251_37}
      />
      <View style={styles.View_251_39}>
        <Text style={styles.Text_251_39}>10m </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eb7/129a/7789f1a7b1f85cb701be7bc6a3571b35"
        }}
        style={styles.ImageBackground_251_54}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bd6/0fc2/87ef7db5145bc00d1aa6917c7b656282"
        }}
        style={styles.ImageBackground_251_58}
      />
      <View style={styles.View_251_59}>
        <Text style={styles.Text_251_59}>liluzivert</Text>
      </View>
      <View style={styles.View_251_40}>
        <View style={styles.View_251_41}>
          <View style={styles.View_251_42}>
            <View style={styles.View_251_43} />
            <View style={styles.View_251_44} />
          </View>
          <View style={styles.View_251_45} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_251_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_251_47}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_251_48}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_251_49}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_251_50}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43e1/cdc3/34114cca8b38804ddf9ad4620653d557"
        }}
        style={styles.ImageBackground_251_593}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_251_13: {
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
  View_251_14: {
    width: 332,
    minWidth: 332,
    height: 560,
    minHeight: 560,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 86
  },
  ImageBackground_251_15: {
    width: 295,
    minWidth: 295,
    height: 292,
    minHeight: 292,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 268
  },
  ImageBackground_251_16: {
    width: 332,
    minWidth: 332,
    height: 329,
    minHeight: 329,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 51,
    resizeMode: "cover"
  },
  ImageBackground_251_20: {
    width: 332,
    minWidth: 332,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 384
  },
  View_251_22: {
    width: 280,
    minWidth: 280,
    minHeight: 99,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 455
  },
  Text_251_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_251_23: {
    width: 332,
    minWidth: 332,
    height: 50.838924407958984,
    minHeight: 50.838924407958984,
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
  View_251_24: {
    width: 332,
    minWidth: 332,
    height: 18.302013397216797,
    minHeight: 18.302013397216797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 380.275146484375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_251_25: {
    width: 332,
    minWidth: 332,
    height: 18.302013397216797,
    minHeight: 18.302013397216797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32.53692626953125,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_251_26: {
    width: 115,
    minWidth: 115,
    minHeight: 32.53691101074219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108,
    top: 398
  },
  Text_251_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_30: {
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
  View_251_31: {
    width: 130,
    minWidth: 130,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 118
  },
  Text_251_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_33: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316,
    top: 105,
    resizeMode: "cover"
  },
  ImageBackground_251_34: {
    width: 30.522863388061523,
    minWidth: 30.522863388061523,
    height: 31.789318084716797,
    minHeight: 31.789318084716797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304.999755859375,
    top: 484,
    resizeMode: "cover"
  },
  ImageBackground_251_35: {
    width: 30,
    minWidth: 30,
    height: 30.914634704589844,
    minHeight: 30.914634704589844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 485,
    resizeMode: "cover"
  },
  ImageBackground_251_36: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54,
    top: 612,
    resizeMode: "cover"
  },
  ImageBackground_251_37: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 286,
    top: 612,
    resizeMode: "cover"
  },
  View_251_39: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239,
    top: 545
  },
  Text_251_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_251_54: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 99
  },
  ImageBackground_251_58: {
    width: 75,
    minWidth: 75,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 151,
    top: 264,
    resizeMode: "cover"
  },
  View_251_59: {
    width: 66,
    minWidth: 66,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 97
  },
  Text_251_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_251_40: {
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
  View_251_41: {
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
  View_251_42: {
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
  View_251_43: {
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
  View_251_44: {
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
  View_251_45: {
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
  ImageBackground_251_46: {
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
  ImageBackground_251_47: {
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
  ImageBackground_251_48: {
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
  ImageBackground_251_49: {
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
  ImageBackground_251_50: {
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
  ImageBackground_251_593: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277,
    top: 490,
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
