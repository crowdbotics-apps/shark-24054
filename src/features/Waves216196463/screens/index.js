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
      <View style={styles.View_105_16}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e04/4c9b/158025b9ea8029e89a3cde50eba1899b"
          }}
          style={styles.ImageBackground_105_17}
        />
        <View style={styles.View_105_18} />
        <View style={styles.View_105_19}>
          <View style={styles.View_105_20} />
          <View style={styles.View_105_21}>
            <View style={styles.View_105_22} />
            <View style={styles.View_105_23} />
            <View style={styles.View_105_24}>
              <Text style={styles.Text_105_24}>CFC Shark Hoodie a.nj_an</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ea/7383/e942f7cf2f0415d012b9779ff45835e8"
              }}
              style={styles.ImageBackground_105_25}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_105_43}>
        <View style={styles.View_105_44}>
          <View style={styles.View_105_45} />
          <View style={styles.View_105_46} />
          <View style={styles.View_105_47} />
          <View style={styles.View_105_48} />
          <View style={styles.View_105_49}>
            <Text style={styles.Text_105_49}>Slime Tee</Text>
          </View>
        </View>
        <View style={styles.View_105_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b3d/7ecc/a5766b913b624f846db34be2379422f0"
            }}
            style={styles.ImageBackground_105_51}
          />
        </View>
      </View>
      <View style={styles.View_105_26}>
        <View style={styles.View_105_27} />
        <View style={styles.View_105_28}>
          <View style={styles.View_105_29} />
          <View style={styles.View_105_30} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/035c/197a/cb06b31220eafcc107e523143573f0f9"
            }}
            style={styles.ImageBackground_105_31}
          />
          <View style={styles.View_105_32} />
          <View style={styles.View_105_33}>
            <Text style={styles.Text_105_33}>Yeezy Slides wunn_a</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_113_57}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e04/4c9b/158025b9ea8029e89a3cde50eba1899b"
          }}
          style={styles.ImageBackground_113_58}
        />
        <View style={styles.View_113_59} />
        <View style={styles.View_113_60}>
          <View style={styles.View_113_61} />
          <View style={styles.View_113_62}>
            <View style={styles.View_113_63} />
            <View style={styles.View_113_64} />
            <View style={styles.View_113_65}>
              <Text style={styles.Text_113_65}>CFC Shark Hoodie a.nj_an</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ea/7383/e942f7cf2f0415d012b9779ff45835e8"
              }}
              style={styles.ImageBackground_113_66}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_113_67}>
        <View style={styles.View_113_68} />
        <View style={styles.View_113_69}>
          <View style={styles.View_113_70} />
          <View style={styles.View_113_71} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/035c/197a/cb06b31220eafcc107e523143573f0f9"
            }}
            style={styles.ImageBackground_113_72}
          />
          <View style={styles.View_113_73} />
          <View style={styles.View_113_74}>
            <Text style={styles.Text_113_74}>Yeezy Slides wunn_a</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_113_5}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e04/4c9b/158025b9ea8029e89a3cde50eba1899b"
          }}
          style={styles.ImageBackground_113_6}
        />
        <View style={styles.View_113_7} />
        <View style={styles.View_113_8}>
          <View style={styles.View_113_9} />
          <View style={styles.View_113_10}>
            <View style={styles.View_113_11} />
            <View style={styles.View_113_12} />
            <View style={styles.View_113_13}>
              <Text style={styles.Text_113_13}>CFC Shark Hoodie a.nj_an</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ea/7383/e942f7cf2f0415d012b9779ff45835e8"
              }}
              style={styles.ImageBackground_113_14}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_113_15}>
        <View style={styles.View_113_16} />
        <View style={styles.View_113_17}>
          <View style={styles.View_113_18} />
          <View style={styles.View_113_19} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/035c/197a/cb06b31220eafcc107e523143573f0f9"
            }}
            style={styles.ImageBackground_113_20}
          />
          <View style={styles.View_113_21} />
          <View style={styles.View_113_22}>
            <Text style={styles.Text_113_22}>Yeezy Slides wunn_a</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_113_45}>
        <View style={styles.View_113_46}>
          <View style={styles.View_113_47} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0247/15a4/265b02773bc425289f7a7413bd1e045e"
            }}
            style={styles.ImageBackground_113_48}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4b6/bf16/f39376533e28aa062ba847fe3232ef83"
        }}
        style={styles.ImageBackground_113_54}
      />
      <View style={styles.View_113_55}>
        <Text style={styles.Text_113_55}>renj.1</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e734/83ce/0819614d0192fbec64c27ca68e2b65f8"
        }}
        style={styles.ImageBackground_113_56}
      />
      <View style={styles.View_105_1}>
        <View style={styles.View_105_2}>
          <View style={styles.View_105_3}>
            <View style={styles.View_105_4} />
            <View style={styles.View_105_5} />
          </View>
          <View style={styles.View_105_6} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_105_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_105_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_105_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_105_10}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/24bf/0e57908ed1e9c987ed33c84cf4d41704"
        }}
        style={styles.ImageBackground_105_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_105_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/851d/1bd4/d503f5afd276eab1fbf37540db2ffcac"
        }}
        style={styles.ImageBackground_105_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2694/e95f/407168b946e4e442d813eeb0ef285042"
        }}
        style={styles.ImageBackground_105_54}
      />
      <View style={styles.View_105_55}>
        <Text style={styles.Text_105_55}>sirsavage.21</Text>
      </View>
      <View style={styles.View_105_56}>
        <Text style={styles.Text_105_56}>LavaGirl</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_105_16: {
    width: 108,
    minWidth: 108,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 197,
    top: 62
  },
  ImageBackground_105_17: {
    width: 66.08955383300781,
    minWidth: 66.08955383300781,
    height: 60.16853713989258,
    minHeight: 60.16853713989258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.611968994140625,
    top: 4.044921875,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_105_18: {
    width: 62.3283576965332,
    minWidth: 62.3283576965332,
    height: 65.73033142089844,
    minHeight: 65.73033142089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.223846435546875,
    top: 24.269775390625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_105_19: {
    width: 108,
    minWidth: 108,
    height: 85.3609619140625,
    minHeight: 85.3609619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_105_20: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 83.93258666992188,
    minHeight: 83.93258666992188,
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
  View_105_21: {
    width: 107.99995422363281,
    minWidth: 107.99995422363281,
    height: 81.31610107421875,
    minHeight: 81.31610107421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.044921875
  },
  View_105_22: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 21.23595428466797,
    minHeight: 21.23595428466797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60.080078125,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_105_23: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 10.112359046936035,
    minHeight: 10.112359046936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 58.392578125,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_105_24: {
    width: 103.70149230957031,
    minWidth: 103.70149230957031,
    minHeight: 16.17977523803711,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.2984619140625,
    top: 61.179931640625
  },
  Text_105_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_25: {
    width: 52.11940383911133,
    minWidth: 52.11940383911133,
    height: 56.12359619140625,
    minHeight: 56.12359619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.671661376953125,
    top: 0,
    resizeMode: "cover"
  },
  View_105_43: {
    width: 237,
    minWidth: 237,
    height: 213,
    minHeight: 213,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 200
  },
  View_105_44: {
    width: 237,
    minWidth: 237,
    height: 213,
    minHeight: 213,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_105_45: {
    width: 136.81362915039062,
    minWidth: 136.81362915039062,
    height: 159.75,
    minHeight: 159.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.618194580078125,
    top: 53.25,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_105_46: {
    width: 154.04998779296875,
    minWidth: 154.04998779296875,
    height: 204.47996520996094,
    minHeight: 204.47996520996094,
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
  View_105_47: {
    width: 154.04998779296875,
    minWidth: 154.04998779296875,
    height: 52.185001373291016,
    minHeight: 52.185001373291016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 152.294921875,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_105_48: {
    width: 154.04998779296875,
    minWidth: 154.04998779296875,
    height: 24.494998931884766,
    minHeight: 24.494998931884766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 152.294921875,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_105_49: {
    width: 228.38182067871094,
    minWidth: 228.38182067871094,
    minHeight: 39.404998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.618194580078125,
    top: 158.684814453125
  },
  Text_105_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_50: {
    width: 128.43017578125,
    minWidth: 128.43017578125,
    height: 130.32237243652344,
    minHeight: 130.32237243652344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.916290283203125,
    top: 11.21044921875
  },
  ImageBackground_105_51: {
    width: 128.43017578125,
    minWidth: 128.43017578125,
    height: 130.32237243652344,
    minHeight: 130.32237243652344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_105_26: {
    width: 107,
    minWidth: 107,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 62
  },
  View_105_27: {
    width: 62.05999755859375,
    minWidth: 62.05999755859375,
    height: 64.64088439941406,
    minHeight: 64.64088439941406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.745025634765625,
    top: 25.359130859375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_105_28: {
    width: 107,
    minWidth: 107,
    height: 85.5,
    minHeight: 85.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_105_29: {
    width: 69.55000305175781,
    minWidth: 69.55000305175781,
    height: 85.5,
    minHeight: 85.5,
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
  View_105_30: {
    width: 69.55000305175781,
    minWidth: 69.55000305175781,
    height: 21.63252830505371,
    minHeight: 21.63252830505371,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 63.867431640625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  ImageBackground_105_31: {
    width: 58.849998474121094,
    minWidth: 58.849998474121094,
    height: 52.02108383178711,
    minHeight: 52.02108383178711,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.350006103515625,
    top: 6.69580078125,
    resizeMode: "cover"
  },
  View_105_32: {
    width: 69.26841735839844,
    minWidth: 69.26841735839844,
    height: 12.375,
    minHeight: 12.375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 62.4375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_105_33: {
    width: 103.2550048828125,
    minWidth: 103.2550048828125,
    minHeight: 16.48192596435547,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.745025634765625,
    top: 64.755126953125
  },
  Text_105_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_57: {
    width: 108,
    minWidth: 108,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 569
  },
  ImageBackground_113_58: {
    width: 66.08955383300781,
    minWidth: 66.08955383300781,
    height: 60.16853713989258,
    minHeight: 60.16853713989258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.61199951171875,
    top: 4.044921875,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_113_59: {
    width: 62.3283576965332,
    minWidth: 62.3283576965332,
    height: 65.73033142089844,
    minHeight: 65.73033142089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.223876953125,
    top: 24.269775390625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_113_60: {
    width: 108,
    minWidth: 108,
    height: 85.3609619140625,
    minHeight: 85.3609619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_113_61: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 83.93258666992188,
    minHeight: 83.93258666992188,
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
  View_113_62: {
    width: 107.99995422363281,
    minWidth: 107.99995422363281,
    height: 81.31610107421875,
    minHeight: 81.31610107421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.044921875
  },
  View_113_63: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 21.23595428466797,
    minHeight: 21.23595428466797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60.080078125,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_113_64: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 10.112359046936035,
    minHeight: 10.112359046936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 58.392578125,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_113_65: {
    width: 103.70149230957031,
    minWidth: 103.70149230957031,
    minHeight: 16.17977523803711,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.2984619140625,
    top: 61.179931640625
  },
  Text_113_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_66: {
    width: 52.11940383911133,
    minWidth: 52.11940383911133,
    height: 56.12359619140625,
    minHeight: 56.12359619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.671630859375,
    top: 0,
    resizeMode: "cover"
  },
  View_113_67: {
    width: 107,
    minWidth: 107,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 107,
    top: 569
  },
  View_113_68: {
    width: 62.05999755859375,
    minWidth: 62.05999755859375,
    height: 64.64088439941406,
    minHeight: 64.64088439941406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.7449951171875,
    top: 25.359130859375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_113_69: {
    width: 107,
    minWidth: 107,
    height: 85.5,
    minHeight: 85.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_113_70: {
    width: 69.55000305175781,
    minWidth: 69.55000305175781,
    height: 85.5,
    minHeight: 85.5,
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
  View_113_71: {
    width: 69.55000305175781,
    minWidth: 69.55000305175781,
    height: 21.63252830505371,
    minHeight: 21.63252830505371,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 63.867431640625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  ImageBackground_113_72: {
    width: 58.849998474121094,
    minWidth: 58.849998474121094,
    height: 52.02108383178711,
    minHeight: 52.02108383178711,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.3499755859375,
    top: 6.69580078125,
    resizeMode: "cover"
  },
  View_113_73: {
    width: 69.26841735839844,
    minWidth: 69.26841735839844,
    height: 12.375,
    minHeight: 12.375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 62.4375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_113_74: {
    width: 103.2550048828125,
    minWidth: 103.2550048828125,
    minHeight: 16.48192596435547,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.7449951171875,
    top: 64.755126953125
  },
  Text_113_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_5: {
    width: 108,
    minWidth: 108,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 229
  },
  ImageBackground_113_6: {
    width: 66.08955383300781,
    minWidth: 66.08955383300781,
    height: 60.16853713989258,
    minHeight: 60.16853713989258,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.61199951171875,
    top: 4.044921875,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_113_7: {
    width: 62.3283576965332,
    minWidth: 62.3283576965332,
    height: 65.73033142089844,
    minHeight: 65.73033142089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.223876953125,
    top: 24.269775390625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_113_8: {
    width: 108,
    minWidth: 108,
    height: 85.3609619140625,
    minHeight: 85.3609619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_113_9: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 83.93258666992188,
    minHeight: 83.93258666992188,
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
  View_113_10: {
    width: 107.99995422363281,
    minWidth: 107.99995422363281,
    height: 81.31610107421875,
    minHeight: 81.31610107421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4.044921875
  },
  View_113_11: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 21.23595428466797,
    minHeight: 21.23595428466797,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 60.080078125,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_113_12: {
    width: 69.85074615478516,
    minWidth: 69.85074615478516,
    height: 10.112359046936035,
    minHeight: 10.112359046936035,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 58.392578125,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_113_13: {
    width: 103.70149230957031,
    minWidth: 103.70149230957031,
    minHeight: 16.17977523803711,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.2984619140625,
    top: 61.179931640625
  },
  Text_113_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_14: {
    width: 52.11940383911133,
    minWidth: 52.11940383911133,
    height: 56.12359619140625,
    minHeight: 56.12359619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.671630859375,
    top: 0,
    resizeMode: "cover"
  },
  View_113_15: {
    width: 107,
    minWidth: 107,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 229
  },
  View_113_16: {
    width: 62.05999755859375,
    minWidth: 62.05999755859375,
    height: 64.64088439941406,
    minHeight: 64.64088439941406,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.7449951171875,
    top: 25.359130859375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_113_17: {
    width: 107,
    minWidth: 107,
    height: 85.5,
    minHeight: 85.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_113_18: {
    width: 69.55000305175781,
    minWidth: 69.55000305175781,
    height: 85.5,
    minHeight: 85.5,
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
  View_113_19: {
    width: 69.55000305175781,
    minWidth: 69.55000305175781,
    height: 21.63252830505371,
    minHeight: 21.63252830505371,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 63.867431640625,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  ImageBackground_113_20: {
    width: 58.849998474121094,
    minWidth: 58.849998474121094,
    height: 52.02108383178711,
    minHeight: 52.02108383178711,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.3499755859375,
    top: 6.69580078125,
    resizeMode: "cover"
  },
  View_113_21: {
    width: 69.26841735839844,
    minWidth: 69.26841735839844,
    height: 12.375,
    minHeight: 12.375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 62.4375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_113_22: {
    width: 103.2550048828125,
    minWidth: 103.2550048828125,
    minHeight: 16.48192596435547,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.7449951171875,
    top: 64.755126953125
  },
  Text_113_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_45: {
    width: 151,
    minWidth: 151,
    height: 234,
    minHeight: 234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 456
  },
  View_113_46: {
    width: 151,
    minWidth: 151,
    height: 234,
    minHeight: 234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_113_47: {
    width: 134.10488891601562,
    minWidth: 134.10488891601562,
    height: 175.5,
    minHeight: 175.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.44757080078125,
    top: 58.5,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  ImageBackground_113_48: {
    width: 151,
    minWidth: 151,
    height: 224.63998413085938,
    minHeight: 224.63998413085938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_113_54: {
    width: 37,
    minWidth: 37,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 259,
    top: 543,
    resizeMode: "cover"
  },
  View_113_55: {
    width: 58,
    minWidth: 58,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227,
    top: 655
  },
  Text_113_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_56: {
    width: 14,
    minWidth: 14,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210,
    top: 656
  },
  View_105_1: {
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
  View_105_2: {
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
  View_105_3: {
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
  View_105_4: {
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
  View_105_5: {
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
  View_105_6: {
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
  ImageBackground_105_7: {
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
  ImageBackground_105_8: {
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
  ImageBackground_105_9: {
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
  ImageBackground_105_10: {
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
  ImageBackground_105_11: {
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
  ImageBackground_105_12: {
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
  ImageBackground_105_52: {
    width: 150,
    minWidth: 150,
    height: 146.8041229248047,
    minHeight: 146.8041229248047,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 34
  },
  ImageBackground_105_54: {
    width: 160,
    minWidth: 160,
    height: 160,
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 359
  },
  View_105_55: {
    width: 128,
    minWidth: 128,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 183
  },
  Text_105_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_56: {
    width: 121,
    minWidth: 121,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 527
  },
  Text_105_56: {
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
