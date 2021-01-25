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
      <View style={styles.View_244_1}>
        <View style={styles.View_244_2} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1035/f5f1/f38491ceb2becc239bda0637092df79c"
          }}
          style={styles.ImageBackground_244_3}
        />
        <View style={styles.View_244_4}>
          <Text style={styles.Text_244_4}>Search</Text>
        </View>
      </View>
      <View style={styles.View_244_5}>
        <View style={styles.View_244_6} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1035/f5f1/f38491ceb2becc239bda0637092df79c"
          }}
          style={styles.ImageBackground_244_7}
        />
        <View style={styles.View_244_8}>
          <Text style={styles.Text_244_8}>Search</Text>
        </View>
      </View>
      <View style={styles.View_244_9} />
      <View style={styles.View_244_10}>
        <View style={styles.View_244_11}>
          <View style={styles.View_244_12}>
            <View style={styles.View_244_13} />
            <View style={styles.View_244_14} />
          </View>
          <View style={styles.View_244_15} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_244_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_244_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_244_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_244_19}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_244_20}
      />
      <View style={styles.View_244_21} />
      <View style={styles.View_244_22} />
      <View style={styles.View_244_23} />
      <View style={styles.View_244_24} />
      <View style={styles.View_244_25}>
        <Text style={styles.Text_244_25}>Yeezy Slides Young Wunna</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
        }}
        style={styles.ImageBackground_244_26}
      />
      <View style={styles.View_244_27} />
      <View style={styles.View_244_28} />
      <View style={styles.View_244_29} />
      <View style={styles.View_244_30} />
      <View style={styles.View_244_31}>
        <Text style={styles.Text_244_31}>Savage Mode 2 CD sirsavage.21</Text>
      </View>
      <View style={styles.View_244_32}>
        <View style={styles.View_244_33} />
        <View style={styles.View_244_34} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938d/2b4a/a1b4b066fd9a746096eb8ff0875f5644"
        }}
        style={styles.ImageBackground_244_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc03/7142/437d535ecfe2fac28a138a692baa2f04"
        }}
        style={styles.ImageBackground_244_36}
      />
      <View style={styles.View_244_37} />
      <View style={styles.View_244_38} />
      <View style={styles.View_244_39} />
      <View style={styles.View_244_40} />
      <View style={styles.View_244_41}>
        <Text style={styles.Text_244_41}>Yeezy Slides Young Wunna</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
        }}
        style={styles.ImageBackground_244_42}
      />
      <View style={styles.View_244_43} />
      <View style={styles.View_244_44} />
      <View style={styles.View_244_45} />
      <View style={styles.View_244_46} />
      <View style={styles.View_244_47}>
        <Text style={styles.Text_244_47}>Cacti Flavor Bundle r0achman</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c6/5ab8/a2299a9159b186b590ae3d71f2bce4f0"
        }}
        style={styles.ImageBackground_244_48}
      />
      <View style={styles.View_244_49}>
        <View style={styles.View_244_50} />
        <View style={styles.View_244_51} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/581f/9f2d/1bcda28bebdffba433534c5790cc496b"
        }}
        style={styles.ImageBackground_244_52}
      />
      <View style={styles.View_244_53}>
        <View style={styles.View_244_54}>
          <Text style={styles.Text_244_54}>Sort By</Text>
        </View>
        <View style={styles.View_244_55}>
          <View style={styles.View_244_56} />
          <View style={styles.View_244_57}>
            <Text style={styles.Text_244_57}>Price: Low-High</Text>
          </View>
        </View>
        <View style={styles.View_244_58}>
          <View style={styles.View_244_59} />
          <View style={styles.View_244_60}>
            <Text style={styles.Text_244_60}>Price: High-Low</Text>
          </View>
        </View>
        <View style={styles.View_244_61}>
          <View style={styles.View_244_62} />
          <View style={styles.View_244_63}>
            <Text style={styles.Text_244_63}>Most Recent</Text>
          </View>
        </View>
        <View style={styles.View_244_64}>
          <View style={styles.View_244_65} />
          <View style={styles.View_244_66}>
            <Text style={styles.Text_244_66}>Least Recent</Text>
          </View>
        </View>
        <View style={styles.View_244_67}>
          <View style={styles.View_244_68} />
          <View style={styles.View_244_69}>
            <Text style={styles.Text_244_69}>Most Popular</Text>
          </View>
        </View>
        <View style={styles.View_244_70}>
          <View style={styles.View_244_71} />
          <View style={styles.View_244_72}>
            <Text style={styles.Text_244_72}>Clear Filters</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_244_73}
      />
      <View style={styles.View_244_77}>
        <View style={styles.View_244_74} />
        <View style={styles.View_244_76}>
          <Text style={styles.Text_244_76}>RATE!</Text>
        </View>
      </View>
      <View style={styles.View_244_78}>
        <View style={styles.View_244_79} />
        <View style={styles.View_244_80}>
          <Text style={styles.Text_244_80}>RATE!</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_244_1: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 65
  },
  View_244_2: {
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
  ImageBackground_244_3: {
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
  View_244_4: {
    width: 218,
    minWidth: 218,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 1
  },
  Text_244_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_5: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 65
  },
  View_244_6: {
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
  ImageBackground_244_7: {
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
  View_244_8: {
    width: 218,
    minWidth: 218,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 1
  },
  Text_244_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_9: {
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
  View_244_10: {
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
  View_244_11: {
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
  View_244_12: {
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
  View_244_13: {
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
  View_244_14: {
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
  View_244_15: {
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
  ImageBackground_244_16: {
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
  ImageBackground_244_17: {
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
  ImageBackground_244_18: {
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
  ImageBackground_244_19: {
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
  ImageBackground_244_20: {
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
  View_244_21: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 231,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_244_22: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 188,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_244_23: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_244_24: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_244_25: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 317
  },
  Text_244_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_244_26: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 191,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_244_27: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 231,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_244_28: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 188,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_244_29: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_244_30: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_244_31: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44,
    top: 317
  },
  Text_244_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_32: {
    width: 23.416423797607422,
    minWidth: 23.416423797607422,
    height: 23.25332260131836,
    minHeight: 23.25332260131836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 320
  },
  View_244_33: {
    width: 13.181918144226074,
    minWidth: 13.181918144226074,
    height: 11.092336654663086,
    minHeight: 11.092336654663086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.160980224609375,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  View_244_34: {
    width: 17.416439056396484,
    minWidth: 17.416439056396484,
    height: 23.025026321411133,
    minHeight: 23.025026321411133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 0,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  ImageBackground_244_35: {
    width: 124,
    minWidth: 124,
    height: 151,
    minHeight: 151,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 174,
    resizeMode: "cover"
  },
  ImageBackground_244_36: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 174
  },
  View_244_37: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 231,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_244_38: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 188,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_244_39: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_244_40: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_244_41: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 317
  },
  Text_244_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_244_42: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210,
    top: 191,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_244_43: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 231,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_244_44: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 188,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_244_45: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_244_46: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 312,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_244_47: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 317
  },
  Text_244_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_244_48: {
    width: 95,
    minWidth: 95,
    height: 116,
    minHeight: 116,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224,
    top: 192,
    resizeMode: "cover"
  },
  View_244_49: {
    width: 23.416423797607422,
    minWidth: 23.416423797607422,
    height: 23.25332260131836,
    minHeight: 23.25332260131836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 302,
    top: 321
  },
  View_244_50: {
    width: 13.181918144226074,
    minWidth: 13.181918144226074,
    height: 11.092336654663086,
    minHeight: 11.092336654663086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 12.160980224609375,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  View_244_51: {
    width: 17.416439056396484,
    minWidth: 17.416439056396484,
    height: 23.025026321411133,
    minHeight: 23.025026321411133,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 0,
    backgroundColor: "rgba(23, 14, 125, 1)"
  },
  ImageBackground_244_52: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 189,
    top: 174
  },
  View_244_53: {
    width: 322,
    minWidth: 322,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 114
  },
  View_244_54: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_244_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_55: {
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
  View_244_56: {
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
  View_244_57: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  Text_244_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_58: {
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
  View_244_59: {
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
  View_244_60: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.87628173828125,
    top: 2.84210205078125
  },
  Text_244_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_61: {
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
  View_244_62: {
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
  View_244_63: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.87628173828125,
    top: 2.84210205078125
  },
  Text_244_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_64: {
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
  View_244_65: {
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
  View_244_66: {
    width: 76.23710632324219,
    minWidth: 76.23710632324219,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.22784423828125,
    top: 3
  },
  Text_244_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_67: {
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
  View_244_68: {
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
  View_244_69: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.22784423828125,
    top: 3
  },
  Text_244_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_70: {
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
  View_244_71: {
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
  View_244_72: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.22784423828125,
    top: 3
  },
  Text_244_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_244_73: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 28,
    resizeMode: "cover"
  },
  View_244_77: {
    width: 89,
    minWidth: 89,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85,
    top: 181
  },
  View_244_74: {
    width: 89,
    minWidth: 89,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
    borderBottomLeftRadius: 7.5,
    borderBottomRightRadius: 7.5
  },
  View_244_76: {
    width: 69,
    minWidth: 69,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0
  },
  Text_244_76: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_244_78: {
    width: 89,
    minWidth: 89,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 181
  },
  View_244_79: {
    width: 89,
    minWidth: 89,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(23, 14, 125, 1)",
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
    borderBottomLeftRadius: 7.5,
    borderBottomRightRadius: 7.5
  },
  View_244_80: {
    width: 69,
    minWidth: 69,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0
  },
  Text_244_80: {
    color: "rgba(255, 255, 255, 1)",
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
