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
      <View source={{ uri: "null" }} style={styles.View_172_9} />
      <View style={styles.View_172_26} />
      <View style={styles.View_172_27}>
        <Text style={styles.Text_172_27}>Slimeville, United States</Text>
      </View>
      <View style={styles.View_172_28}>
        <Text style={styles.Text_172_28}>Price: $8.99</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_173_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b966/0e27/b1ca51f4008f9e066fb3bac94b55d306"
        }}
        style={styles.ImageBackground_172_11}
      />
      <View style={styles.View_172_18}>
        <Text style={styles.Text_172_18}>
          a.nj_an A vintage slime lord shirt destined for anyone who rock ssaid
          garment to unlock anothe level of drippage. Brand new (deadstock). Fo
          sure will bring you the biddies. #slimey #drip #wlr #met@mÖrphiįs
          #cÕntroł #luvadareef
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4f8/5872/86dbd11f7e041974ee0724f39905b464"
        }}
        style={styles.ImageBackground_173_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/8ab0/4e2111515be6e0a5698cd2ccdba68377"
        }}
        style={styles.ImageBackground_173_8}
      />
      <View style={styles.View_173_11}>
        <Text style={styles.Text_173_11}>
          thu.gg_a dis shi slaps, I bought from you before and your stuff is
          quality my g. no cap love your stuff
        </Text>
      </View>
      <View style={styles.View_173_21}>
        <Text style={styles.Text_173_21}>
          sirsavage.21 yessirskiiiiii, love you brotha, keep selling this shi
        </Text>
      </View>
      <View style={styles.View_173_32}>
        <Text style={styles.Text_173_32}>
          wunn_a drip too hard my g, keep doing you
        </Text>
      </View>
      <View style={styles.View_173_22}>
        <View style={styles.View_173_16}>
          <Text style={styles.Text_173_16}>8m</Text>
        </View>
        <View style={styles.View_173_18}>
          <Text style={styles.Text_173_18}>Reply</Text>
        </View>
      </View>
      <View style={styles.View_173_23}>
        <View style={styles.View_173_24}>
          <Text style={styles.Text_173_24}>6m</Text>
        </View>
        <View style={styles.View_173_25}>
          <Text style={styles.Text_173_25}>Reply</Text>
        </View>
      </View>
      <View style={styles.View_173_33}>
        <View style={styles.View_173_34}>
          <Text style={styles.Text_173_34}>4m</Text>
        </View>
        <View style={styles.View_173_35}>
          <Text style={styles.Text_173_35}>Reply</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a10a/cc12/ba784fda61b9780fed1569945057b10b"
        }}
        style={styles.ImageBackground_173_29}
      />
      <View style={styles.View_173_40}>
        <View style={styles.View_173_41}>
          <View style={styles.View_173_42} />
        </View>
        <View style={styles.View_173_43}>
          <Text style={styles.Text_173_43}> Comment on post...</Text>
        </View>
      </View>
      <View style={styles.View_172_32}>
        <View style={styles.View_172_33}>
          <View style={styles.View_172_34}>
            <View style={styles.View_172_35} />
            <View style={styles.View_172_36} />
          </View>
          <View style={styles.View_172_37} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_172_38}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_172_39}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_172_40}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_172_41}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_172_42}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9ef/77a5/be75676e655fa470e22bc11670fe09bc"
        }}
        style={styles.ImageBackground_173_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b7c/573b/0204592a35e282d7ac85f92fc656d9b7"
        }}
        style={styles.ImageBackground_173_19}
      />
      <View style={styles.View_173_15}>
        <Text style={styles.Text_173_15}>10m </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_172_9: {
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
  View_172_26: {
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
  View_172_27: {
    width: 130,
    minWidth: 130,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 118
  },
  Text_172_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_28: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 234,
    top: 105
  },
  Text_172_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_173_5: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 26,
    resizeMode: "cover"
  },
  ImageBackground_172_11: {
    width: 364,
    minWidth: 364,
    height: 127,
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 66
  },
  View_172_18: {
    width: 280,
    minWidth: 280,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58,
    top: 83
  },
  Text_172_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  ImageBackground_173_7: {
    width: 33,
    minWidth: 33,
    height: 33.55369186401367,
    minHeight: 33.55369186401367,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 81
  },
  ImageBackground_173_8: {
    width: 375,
    minWidth: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 202
  },
  View_173_11: {
    width: 294,
    minWidth: 294,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 214
  },
  Text_173_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_173_21: {
    width: 294,
    minWidth: 294,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58,
    top: 279
  },
  Text_173_21: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_173_32: {
    width: 294,
    minWidth: 294,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58,
    top: 344
  },
  Text_173_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4,
    textTransform: "none"
  },
  View_173_22: {
    width: 177,
    minWidth: 177,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 234,
    top: 217
  },
  View_173_16: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0
  },
  Text_173_16: {
    color: "rgba(113, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_18: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_173_18: {
    color: "rgba(113, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_23: {
    width: 177,
    minWidth: 177,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 234,
    top: 281
  },
  View_173_24: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0
  },
  Text_173_24: {
    color: "rgba(113, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_25: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_173_25: {
    color: "rgba(113, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_33: {
    width: 177,
    minWidth: 177,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 234,
    top: 347
  },
  View_173_34: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 0
  },
  Text_173_34: {
    color: "rgba(113, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_173_35: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_173_35: {
    color: "rgba(113, 112, 112, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_173_29: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 344
  },
  View_173_40: {
    width: 392.0000305175781,
    minWidth: 392.0000305175781,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -19,
    top: 696
  },
  View_173_41: {
    width: 370.8874816894531,
    minWidth: 370.8874816894531,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.112548828125,
    top: 0
  },
  View_173_42: {
    width: 370.8874816894531,
    minWidth: 370.8874816894531,
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
  View_173_43: {
    width: 137,
    minWidth: 137,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9
  },
  Text_173_43: {
    color: "rgba(92, 91, 91, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_172_32: {
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
  View_172_33: {
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
  View_172_34: {
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
  View_172_35: {
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
  View_172_36: {
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
  View_172_37: {
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
  ImageBackground_172_38: {
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
  ImageBackground_172_39: {
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
  ImageBackground_172_40: {
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
  ImageBackground_172_41: {
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
  ImageBackground_172_42: {
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
  ImageBackground_173_9: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 214
  },
  ImageBackground_173_19: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 279
  },
  View_173_15: {
    width: 135,
    minWidth: 135,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 87
  },
  Text_173_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
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
