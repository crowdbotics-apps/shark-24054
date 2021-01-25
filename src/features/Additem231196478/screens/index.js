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
      <View style={styles.View_108_47}>
        <View style={styles.View_108_48}>
          <View style={styles.View_108_49}>
            <View style={styles.View_108_50} />
            <View style={styles.View_108_51} />
          </View>
          <View style={styles.View_108_52} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_108_53}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_108_54}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_108_55}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a1/bb7e/d14d9c9cf8447e180aae27478d9740c2"
          }}
          style={styles.ImageBackground_108_56}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_108_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb63/17c0/8db784d24d3dd2c76c0844c33acabc64"
        }}
        style={styles.ImageBackground_108_58}
      />
      <View style={styles.View_108_59}>
        <Text style={styles.Text_108_59}>ITEM</Text>
      </View>
      <View style={styles.View_108_60}>
        <Text style={styles.Text_108_60}>TIDE</Text>
      </View>
      <View style={styles.View_108_61} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
        }}
        style={styles.ImageBackground_108_62}
      />
      <View style={styles.View_108_63} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a003/1745/4e9d2b1464b9c7f6426d0a9621cf4b51"
        }}
        style={styles.ImageBackground_108_64}
      />
      <View style={styles.View_108_65} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
        }}
        style={styles.ImageBackground_108_66}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_108_67}
      />
      <View style={styles.View_108_68}>
        <Text style={styles.Text_108_68}>Name</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_108_69}
      />
      <View style={styles.View_108_70}>
        <Text style={styles.Text_108_70}>Description</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_108_71}
      />
      <View style={styles.View_108_72}>
        <Text style={styles.Text_108_72}>Location</Text>
      </View>
      <View style={styles.View_108_73} />
      <View style={styles.View_108_74}>
        <Text style={styles.Text_108_74}>SET PRICE</Text>
      </View>
      <View style={styles.View_108_75} />
      <View style={styles.View_108_76}>
        <Text style={styles.Text_108_76}>PRIVATE BID</Text>
      </View>
      <View style={styles.View_108_77} />
      <View style={styles.View_108_78}>
        <Text style={styles.Text_108_78}>ADD TIDE</Text>
      </View>
      <View style={styles.View_108_79} />
      <View style={styles.View_108_80}>
        <Text style={styles.Text_108_80}>PUBLIC BID</Text>
      </View>
      <View style={styles.View_108_81} />
      <View style={styles.View_108_82} />
      <View style={styles.View_108_83}>
        <Text style={styles.Text_108_83}>PRICE</Text>
      </View>
      <View style={styles.View_108_84}>
        <Text style={styles.Text_108_84}>PODS</Text>
      </View>
      <View style={styles.View_108_85}>
        <Text style={styles.Text_108_85}>Click to add more</Text>
      </View>
      <View style={styles.View_108_86} />
      <View style={styles.View_108_87}>
        <Text style={styles.Text_108_87}>SHARE</Text>
      </View>
      <View style={styles.View_108_88}>
        <View style={styles.View_108_89}>
          <View style={styles.View_108_90}>
            <View style={styles.View_108_91} />
            <View style={styles.View_108_92} />
          </View>
          <View style={styles.View_108_93} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_108_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_108_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_108_96}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a1/bb7e/d14d9c9cf8447e180aae27478d9740c2"
          }}
          style={styles.ImageBackground_108_97}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_108_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb63/17c0/8db784d24d3dd2c76c0844c33acabc64"
        }}
        style={styles.ImageBackground_108_99}
      />
      <View style={styles.View_108_100}>
        <Text style={styles.Text_108_100}>ITEM</Text>
      </View>
      <View style={styles.View_108_101}>
        <Text style={styles.Text_108_101}>TIDE</Text>
      </View>
      <View style={styles.View_108_102} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
        }}
        style={styles.ImageBackground_108_103}
      />
      <View style={styles.View_108_104} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a003/1745/4e9d2b1464b9c7f6426d0a9621cf4b51"
        }}
        style={styles.ImageBackground_108_105}
      />
      <View style={styles.View_108_106} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
        }}
        style={styles.ImageBackground_108_107}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_108_108}
      />
      <View style={styles.View_108_109}>
        <Text style={styles.Text_108_109}>Name</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_108_110}
      />
      <View style={styles.View_108_111}>
        <Text style={styles.Text_108_111}>Description</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_108_112}
      />
      <View style={styles.View_108_113}>
        <Text style={styles.Text_108_113}>Location</Text>
      </View>
      <View style={styles.View_108_114} />
      <View style={styles.View_108_115}>
        <Text style={styles.Text_108_115}>SET PRICE</Text>
      </View>
      <View style={styles.View_108_116} />
      <View style={styles.View_108_117}>
        <Text style={styles.Text_108_117}>PRIVATE BID</Text>
      </View>
      <View style={styles.View_108_118} />
      <View style={styles.View_108_119}>
        <Text style={styles.Text_108_119}>ADD TIDE</Text>
      </View>
      <View style={styles.View_108_120} />
      <View style={styles.View_108_121}>
        <Text style={styles.Text_108_121}>PUBLIC BID</Text>
      </View>
      <View style={styles.View_108_122} />
      <View style={styles.View_108_123} />
      <View style={styles.View_108_124}>
        <Text style={styles.Text_108_124}>PRICE</Text>
      </View>
      <View style={styles.View_108_125}>
        <Text style={styles.Text_108_125}>PODS</Text>
      </View>
      <View style={styles.View_108_126}>
        <Text style={styles.Text_108_126}>Click to add more</Text>
      </View>
      <View style={styles.View_108_127} />
      <View style={styles.View_108_128}>
        <Text style={styles.Text_108_128}>SHARE</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_108_47: {
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
  View_108_48: {
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
  View_108_49: {
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
  View_108_50: {
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
  View_108_51: {
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
  View_108_52: {
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
  ImageBackground_108_53: {
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
  ImageBackground_108_54: {
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
  ImageBackground_108_55: {
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
  ImageBackground_108_56: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 16,
    resizeMode: "cover"
  },
  ImageBackground_108_57: {
    width: 33,
    minWidth: 33,
    height: 32.19512176513672,
    minHeight: 32.19512176513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 748,
    resizeMode: "cover"
  },
  ImageBackground_108_58: {
    width: 0,
    minWidth: 0,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 43
  },
  View_108_59: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 47
  },
  Text_108_59: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_60: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207,
    top: 48
  },
  Text_108_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_61: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 109,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_62: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53,
    top: 133,
    resizeMode: "cover"
  },
  View_108_63: {
    width: 86,
    minWidth: 86,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147,
    top: 109,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_64: {
    width: 51,
    minWidth: 51,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164,
    top: 133,
    resizeMode: "cover"
  },
  View_108_65: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 258,
    top: 109,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_66: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 275,
    top: 133,
    resizeMode: "cover"
  },
  ImageBackground_108_67: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 247
  },
  View_108_68: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.00341796875,
    top: 224
  },
  Text_108_68: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_69: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 340
  },
  View_108_70: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.00341796875,
    top: 312
  },
  Text_108_70: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_71: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 290
  },
  View_108_72: {
    width: 111,
    minWidth: 111,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 264
  },
  Text_108_72: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_73: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 403,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_74: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 406
  },
  Text_108_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_75: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 403,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_76: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 406
  },
  Text_108_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_77: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 561,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_78: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 564
  },
  Text_108_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_79: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 254,
    top: 403,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_80: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261,
    top: 406
  },
  Text_108_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_81: {
    width: 116,
    minWidth: 116,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 471,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_108_82: {
    width: 116,
    minWidth: 116,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 471,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_108_83: {
    width: 74,
    minWidth: 74,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 452
  },
  Text_108_83: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_84: {
    width: 33,
    minWidth: 33,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 241,
    top: 452
  },
  Text_108_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_85: {
    width: 87,
    minWidth: 87,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 512
  },
  Text_108_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_86: {
    width: 156,
    minWidth: 156,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106,
    top: 625,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_108_87: {
    width: 117,
    minWidth: 117,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 637
  },
  Text_108_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_88: {
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
  View_108_89: {
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
  View_108_90: {
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
  View_108_91: {
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
  View_108_92: {
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
  View_108_93: {
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
  ImageBackground_108_94: {
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
  ImageBackground_108_95: {
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
  ImageBackground_108_96: {
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
  ImageBackground_108_97: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 16,
    resizeMode: "cover"
  },
  ImageBackground_108_98: {
    width: 33,
    minWidth: 33,
    height: 32.19512176513672,
    minHeight: 32.19512176513672,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 748,
    resizeMode: "cover"
  },
  ImageBackground_108_99: {
    width: 0,
    minWidth: 0,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 43
  },
  View_108_100: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 47
  },
  Text_108_100: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_101: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207,
    top: 48
  },
  Text_108_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_102: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 109,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_103: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 53,
    top: 133,
    resizeMode: "cover"
  },
  View_108_104: {
    width: 86,
    minWidth: 86,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147,
    top: 109,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_105: {
    width: 51,
    minWidth: 51,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 164,
    top: 133,
    resizeMode: "cover"
  },
  View_108_106: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 258,
    top: 109,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_107: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 275,
    top: 133,
    resizeMode: "cover"
  },
  ImageBackground_108_108: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 247
  },
  View_108_109: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.00341796875,
    top: 224
  },
  Text_108_109: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_110: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 340
  },
  View_108_111: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35.00341796875,
    top: 312
  },
  Text_108_111: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_112: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 290
  },
  View_108_113: {
    width: 111,
    minWidth: 111,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 264
  },
  Text_108_113: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_114: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 403,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_115: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 406
  },
  Text_108_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_116: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 403,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_117: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 406
  },
  Text_108_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_118: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142,
    top: 561,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_119: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 149,
    top: 564
  },
  Text_108_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_120: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 254,
    top: 403,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_121: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261,
    top: 406
  },
  Text_108_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_122: {
    width: 116,
    minWidth: 116,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 471,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_108_123: {
    width: 116,
    minWidth: 116,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 198,
    top: 471,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_108_124: {
    width: 74,
    minWidth: 74,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 452
  },
  Text_108_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_125: {
    width: 33,
    minWidth: 33,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 241,
    top: 452
  },
  Text_108_125: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_126: {
    width: 87,
    minWidth: 87,
    minHeight: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 512
  },
  Text_108_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_127: {
    width: 156,
    minWidth: 156,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106,
    top: 625,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_108_128: {
    width: 117,
    minWidth: 117,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 637
  },
  Text_108_128: {
    color: "rgba(0, 0, 0, 1)",
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
