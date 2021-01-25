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
      <View style={styles.View_29_13}>
        <View style={styles.View_29_14}>
          <View style={styles.View_29_15}>
            <View style={styles.View_29_16} />
            <View style={styles.View_29_17} />
          </View>
          <View style={styles.View_29_18} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_29_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_29_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_29_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_29_23}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/24bf/0e57908ed1e9c987ed33c84cf4d41704"
        }}
        style={styles.ImageBackground_29_105}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_29_106}
      />
      <View style={styles.View_73_3}>
        <Text style={styles.Text_73_3}>Top Products for you</Text>
      </View>
      <View style={styles.View_73_4}>
        <Text style={styles.Text_73_4}>Top Tides for you</Text>
      </View>
      <View style={styles.View_73_5}>
        <Text style={styles.Text_73_5}>Top Rays for you</Text>
      </View>
      <View style={styles.View_73_19}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/635b/f7aa/cda73139c6547df97de26f20fafcf44a"
          }}
          style={styles.ImageBackground_73_20}
        />
        <View style={styles.View_73_21} />
        <View style={styles.View_73_22}>
          <View style={styles.View_73_23} />
          <View style={styles.View_73_24}>
            <View style={styles.View_73_25} />
            <View style={styles.View_73_26} />
            <View style={styles.View_73_27}>
              <Text style={styles.Text_73_27}>CFC Shark Hoodie a.nj_an</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8019/cb12/3341d7ca33b5594cb529e5f1e9e6f871"
              }}
              style={styles.ImageBackground_73_28}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_73_33}>
        <View style={styles.View_73_34} />
        <View style={styles.View_73_35}>
          <View style={styles.View_73_36} />
          <View style={styles.View_73_37} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd48/e56b/3c8a1922fd0ed01af400f90ba0b4eed7"
            }}
            style={styles.ImageBackground_73_38}
          />
          <View style={styles.View_71_28} />
          <View style={styles.View_73_39}>
            <Text style={styles.Text_73_39}>Yeezy Slides wunn_a</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_73_40}>
        <View style={styles.View_73_41}>
          <View style={styles.View_73_42} />
          <View style={styles.View_73_43} />
          <View style={styles.View_73_44} />
          <View style={styles.View_73_45} />
          <View style={styles.View_73_46}>
            <Text style={styles.Text_73_46}>Slime Tee</Text>
          </View>
        </View>
        <View style={styles.View_73_47}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6cb/11c2/8377024666162504296a576c94ca7a46"
            }}
            style={styles.ImageBackground_73_48}
          />
        </View>
      </View>
      <View style={styles.View_73_49}>
        <View style={styles.View_73_50}>
          <View style={styles.View_73_51} />
          <View style={styles.View_73_52} />
          <View style={styles.View_73_53} />
          <View style={styles.View_73_54} />
          <View style={styles.View_73_55}>
            <Text style={styles.Text_73_55}>Slime Tee</Text>
          </View>
        </View>
        <View style={styles.View_73_56}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6cb/11c2/8377024666162504296a576c94ca7a46"
            }}
            style={styles.ImageBackground_73_57}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9124/1512/36e2e4aa0ca93fac7062cab2ee6f926c"
        }}
        style={styles.ImageBackground_73_58}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2694/e95f/407168b946e4e442d813eeb0ef285042"
        }}
        style={styles.ImageBackground_73_60}
      />
      <View style={styles.View_73_61}>
        <Text style={styles.Text_73_61}>sirsavage.21</Text>
      </View>
      <View style={styles.View_73_62}>
        <Text style={styles.Text_73_62}>LavaGirl</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_29_13: {
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
  View_29_14: {
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
  View_29_15: {
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
  View_29_16: {
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
  View_29_17: {
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
  View_29_18: {
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
  ImageBackground_29_20: {
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
  ImageBackground_29_21: {
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
  ImageBackground_29_22: {
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
  ImageBackground_29_23: {
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
  ImageBackground_29_105: {
    width: 32,
    minWidth: 32,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 745,
    resizeMode: "cover"
  },
  ImageBackground_29_106: {
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
  View_73_3: {
    width: 252,
    minWidth: 252,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 67
  },
  Text_73_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_4: {
    width: 252,
    minWidth: 252,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 282
  },
  Text_73_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_5: {
    width: 252,
    minWidth: 252,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 493
  },
  Text_73_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_19: {
    width: 190,
    minWidth: 190,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 107
  },
  ImageBackground_73_20: {
    width: 116.2686538696289,
    minWidth: 116.2686538696289,
    height: 106.96629333496094,
    minHeight: 106.96629333496094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.8358154296875,
    top: 7.191162109375,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_73_21: {
    width: 109.65174102783203,
    minWidth: 109.65174102783203,
    height: 116.85392761230469,
    minHeight: 116.85392761230469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.671630859375,
    top: 43.14599609375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_73_22: {
    width: 190,
    minWidth: 190,
    height: 151.75282287597656,
    minHeight: 151.75282287597656,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_73_23: {
    width: 122.88557434082031,
    minWidth: 122.88557434082031,
    height: 149.21348571777344,
    minHeight: 149.21348571777344,
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
  View_73_24: {
    width: 190,
    minWidth: 190,
    height: 144.561767578125,
    minHeight: 144.561767578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 7.191162109375
  },
  View_73_25: {
    width: 122.88557434082031,
    minWidth: 122.88557434082031,
    height: 37.7528076171875,
    minHeight: 37.7528076171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 106.808837890625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_73_26: {
    width: 122.88557434082031,
    minWidth: 122.88557434082031,
    height: 17.977527618408203,
    minHeight: 17.977527618408203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 103.808837890625,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_73_27: {
    width: 182.43780517578125,
    minWidth: 182.43780517578125,
    minHeight: 28.76404571533203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.5621337890625,
    top: 108.763916015625
  },
  Text_73_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_73_28: {
    width: 91.69154357910156,
    minWidth: 91.69154357910156,
    height: 99.77527618408203,
    minHeight: 99.77527618408203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.014892578125,
    top: 0,
    resizeMode: "cover"
  },
  View_73_33: {
    width: 190,
    minWidth: 190,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 107
  },
  View_73_34: {
    width: 110.19999694824219,
    minWidth: 110.19999694824219,
    height: 114.91712951660156,
    minHeight: 114.91712951660156,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6500244140625,
    top: 45.082763671875,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_73_35: {
    width: 190,
    minWidth: 190,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_73_36: {
    width: 123.5,
    minWidth: 123.5,
    height: 152,
    minHeight: 152,
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
  View_73_37: {
    width: 123.5,
    minWidth: 123.5,
    height: 38.457828521728516,
    minHeight: 38.457828521728516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 113.542236328125,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  ImageBackground_73_38: {
    width: 104.5,
    minWidth: 104.5,
    height: 92.48192596435547,
    minHeight: 92.48192596435547,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.5,
    top: 11.903564453125,
    resizeMode: "cover"
  },
  View_71_28: {
    width: 123,
    minWidth: 123,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 111,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_73_39: {
    width: 183.35000610351562,
    minWidth: 183.35000610351562,
    minHeight: 29.30120277404785,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6500244140625,
    top: 115.120361328125
  },
  Text_73_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_40: {
    width: 190,
    minWidth: 190,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 322
  },
  View_73_41: {
    width: 190,
    minWidth: 190,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_73_42: {
    width: 109.68181610107422,
    minWidth: 109.68181610107422,
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.9090576171875,
    top: 40,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_73_43: {
    width: 123.5,
    minWidth: 123.5,
    height: 153.59999084472656,
    minHeight: 153.59999084472656,
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
  View_73_44: {
    width: 123.5,
    minWidth: 123.5,
    height: 39.20000076293945,
    minHeight: 39.20000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 114.39990234375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_73_45: {
    width: 123.5,
    minWidth: 123.5,
    height: 18.399999618530273,
    minHeight: 18.399999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 114.39990234375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_73_46: {
    width: 183.0908966064453,
    minWidth: 183.0908966064453,
    minHeight: 29.600000381469727,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.9090576171875,
    top: 119.199951171875
  },
  Text_73_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_47: {
    width: 102.96089935302734,
    minWidth: 102.96089935302734,
    height: 97.89473724365234,
    minHeight: 97.89473724365234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.5531005859375,
    top: 8.421142578125
  },
  ImageBackground_73_48: {
    width: 102.96089935302734,
    minWidth: 102.96089935302734,
    height: 97.89473724365234,
    minHeight: 97.89473724365234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_73_49: {
    width: 190,
    minWidth: 190,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 322
  },
  View_73_50: {
    width: 190,
    minWidth: 190,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_73_51: {
    width: 109.68181610107422,
    minWidth: 109.68181610107422,
    height: 120,
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.9090576171875,
    top: 40,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_73_52: {
    width: 123.5,
    minWidth: 123.5,
    height: 153.5999755859375,
    minHeight: 153.5999755859375,
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
  View_73_53: {
    width: 123.5,
    minWidth: 123.5,
    height: 39.20000076293945,
    minHeight: 39.20000076293945,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 114.39990234375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_73_54: {
    width: 123.5,
    minWidth: 123.5,
    height: 18.399999618530273,
    minHeight: 18.399999618530273,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 114.39990234375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_73_55: {
    width: 183.0908966064453,
    minWidth: 183.0908966064453,
    minHeight: 29.599998474121094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.9090576171875,
    top: 119.199951171875
  },
  Text_73_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_56: {
    width: 102.96089935302734,
    minWidth: 102.96089935302734,
    height: 97.89473724365234,
    minHeight: 97.89473724365234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.5531005859375,
    top: 8.421142578125
  },
  ImageBackground_73_57: {
    width: 102.96089935302734,
    minWidth: 102.96089935302734,
    height: 97.89473724365234,
    minHeight: 97.89473724365234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_73_58: {
    width: 160,
    minWidth: 160,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 537
  },
  ImageBackground_73_60: {
    width: 160,
    minWidth: 160,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 209,
    top: 537
  },
  View_73_61: {
    width: 136,
    minWidth: 136,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 699
  },
  Text_73_61: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_73_62: {
    width: 121,
    minWidth: 121,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 705
  },
  Text_73_62: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
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
