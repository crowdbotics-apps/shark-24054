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
      <View source={{ uri: "null" }} style={styles.View_161_11} />
      <View style={styles.View_161_12}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cc4/7d81/940c0443ad19d451bf4ee1316efb7957"
          }}
          style={styles.ImageBackground_161_13}
        />
        <View style={styles.View_161_14} />
        <View style={styles.View_161_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a20/f885/2d3868acf0e02314f012fbe20daffe48"
            }}
            style={styles.ImageBackground_161_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2c8/ba44/ce5ffb08c41d165145693cd130d4edc3"
            }}
            style={styles.ImageBackground_161_17}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64f2/9c0b/14800743e7c2d29fd8054d8bdb6cf5c4"
          }}
          style={styles.ImageBackground_161_18}
        />
        <View style={styles.View_161_19}>
          <Text style={styles.Text_161_19}>Condition: Brand New</Text>
        </View>
        <View style={styles.View_161_20}>
          <Text style={styles.Text_161_20}>
            a.nj_an A vintage slime lord shirt destined for anyone who rock
            ssaid garment to unlock anothe level of drippage. Brand new
            (deadstock). Fo sure will bring you the biddies. #slimey #drip #wlr
            #met@mÖrphiįs #cÕntroł #luvadareef
          </Text>
        </View>
        <View style={styles.View_161_22} />
        <View style={styles.View_161_25} />
        <View style={styles.View_161_26} />
        <View style={styles.View_161_27}>
          <Text style={styles.Text_161_27}>Shark Tee</Text>
        </View>
        <View style={styles.View_161_29}>
          <Text style={styles.Text_161_29}>Size: XXL</Text>
        </View>
        <View style={styles.View_161_30}>
          <Text style={styles.Text_161_30}>a.nj_an</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4f8/5872/86dbd11f7e041974ee0724f39905b464"
          }}
          style={styles.ImageBackground_161_31}
        />
      </View>
      <View style={styles.View_161_32} />
      <View style={styles.View_161_129}>
        <Text style={styles.Text_161_129}>Slimeville, United States</Text>
      </View>
      <View style={styles.View_161_130}>
        <Text style={styles.Text_161_130}>Price: $8.99</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f9f/f768/2595f90aa51f8c8a773602bd03bd4d9e"
        }}
        style={styles.ImageBackground_161_131}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feee/3a3f/d5f48060e092341321c640afc4940617"
        }}
        style={styles.ImageBackground_162_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45f6/382d/38552bd51fc32fac80b98d460566809d"
        }}
        style={styles.ImageBackground_162_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a503/18bf/43db2e27c2eb53a2c92d665554680404"
        }}
        style={styles.ImageBackground_172_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e2c/af4b/d62e8dda347cfb98bf8a9c273d3f4ecc"
        }}
        style={styles.ImageBackground_173_3}
      />
      <View style={styles.View_173_13}>
        <Text style={styles.Text_173_13}>10m </Text>
      </View>
      <View style={styles.View_173_14}>
        <Text style={styles.Text_173_14}>10m </Text>
      </View>
      <View style={styles.View_161_33}>
        <View style={styles.View_161_34}>
          <View style={styles.View_161_35}>
            <View style={styles.View_161_36} />
            <View style={styles.View_161_37} />
          </View>
          <View style={styles.View_161_38} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_161_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_161_40}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_161_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_161_42}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_161_43}
        />
      </View>
      <View style={styles.View_173_0}>
        <View style={styles.View_173_1} />
        <View style={styles.View_173_2}>
          <Text style={styles.Text_173_2}>Buy Now</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_161_11: {
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
  View_161_12: {
    width: 332,
    minWidth: 332,
    height: 609,
    minHeight: 609,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 86
  },
  ImageBackground_161_13: {
    width: 295,
    minWidth: 295,
    height: 341,
    minHeight: 341,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 268
  },
  View_161_14: {
    width: 332,
    minWidth: 332,
    height: 441.2818908691406,
    minHeight: 441.2818908691406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 22.369140625,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_161_15: {
    width: 265,
    minWidth: 265,
    height: 278.5973205566406,
    minHeight: 278.5973205566406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 70.15771484375
  },
  ImageBackground_161_16: {
    width: 265,
    minWidth: 265,
    height: 278.5973205566406,
    minHeight: 278.5973205566406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_161_17: {
    width: 94.4554443359375,
    minWidth: 94.4554443359375,
    height: 108.15113830566406,
    minHeight: 108.15113830566406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85.70947265625,
    top: 57.96905517578125,
    resizeMode: "cover"
  },
  ImageBackground_161_18: {
    width: 332,
    minWidth: 332,
    height: 79.30872344970703,
    minHeight: 79.30872344970703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 384.34228515625
  },
  View_161_19: {
    width: 195,
    minWidth: 195,
    minHeight: 22.36912727355957,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 416.8791809082031
  },
  Text_161_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_20: {
    width: 280,
    minWidth: 280,
    minHeight: 5.083892822265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 475.85235595703125
  },
  Text_161_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_161_22: {
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
  View_161_25: {
    width: 332,
    minWidth: 332,
    height: 18.302013397216797,
    minHeight: 18.302013397216797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 380.2751770019531,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_161_26: {
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
  View_161_27: {
    width: 115,
    minWidth: 115,
    minHeight: 32.53691101074219,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    top: 389.4261779785156
  },
  Text_161_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_29: {
    width: 95,
    minWidth: 95,
    minHeight: 24.402685165405273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 437.2147521972656
  },
  Text_161_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_30: {
    width: 49,
    minWidth: 49,
    minHeight: 42.70469665527344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 9.1510009765625
  },
  Text_161_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_31: {
    width: 33,
    minWidth: 33,
    height: 33.55369186401367,
    minHeight: 33.55369186401367,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 10.16778564453125
  },
  View_161_32: {
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
  View_161_129: {
    width: 130,
    minWidth: 130,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 118
  },
  Text_161_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_130: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 234,
    top: 105
  },
  Text_161_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_161_131: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 229,
    top: 104,
    resizeMode: "cover"
  },
  ImageBackground_162_0: {
    width: 30.522863388061523,
    minWidth: 30.522863388061523,
    height: 31.789318084716797,
    minHeight: 31.789318084716797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 304.999755859375,
    top: 487,
    resizeMode: "cover"
  },
  ImageBackground_162_1: {
    width: 30,
    minWidth: 30,
    height: 30.914634704589844,
    minHeight: 30.914634704589844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 492,
    resizeMode: "cover"
  },
  ImageBackground_172_46: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55,
    top: 661,
    resizeMode: "cover"
  },
  ImageBackground_173_3: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 285,
    top: 661,
    resizeMode: "cover"
  },
  View_173_13: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 240,
    top: 566
  },
  Text_173_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_14: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 240,
    top: 566
  },
  Text_173_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_161_33: {
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
  View_161_34: {
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
  View_161_35: {
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
  View_161_36: {
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
  View_161_37: {
    width: 47.61600112915039,
    minWidth: 47.61600112915039,
    height: 57.123077392578125,
    minHeight: 57.123077392578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239.072021484375,
    top: 18.263633728027344
  },
  View_161_38: {
    width: 48,
    minWidth: 48,
    height: 59.55384063720703,
    minHeight: 59.55384063720703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 14.617469787597656
  },
  ImageBackground_161_39: {
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
  ImageBackground_161_40: {
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
  ImageBackground_161_41: {
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
  ImageBackground_161_42: {
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
  ImageBackground_161_43: {
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
  View_173_0: {
    width: 86,
    minWidth: 86,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 663
  },
  View_173_1: {
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
  View_173_2: {
    width: 77.13401794433594,
    minWidth: 77.13401794433594,
    minHeight: 15.789473533630371,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.03515625,
    top: 4.1666717529296875
  },
  Text_173_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.5,
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
