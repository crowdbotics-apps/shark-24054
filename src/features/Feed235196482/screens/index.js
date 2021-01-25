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
      <View style={styles.View_116_1}>
        <View style={styles.View_116_2} />
        <View style={styles.View_116_3} />
        <View style={styles.View_116_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/050f/7067/dc3198aff1b21713871f1073fe5c9f10"
            }}
            style={styles.ImageBackground_116_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb4b/00f3/ff17e3b3702787d0fa3753286d32e131"
            }}
            style={styles.ImageBackground_116_6}
          />
        </View>
        <View style={styles.View_116_7} />
        <View style={styles.View_116_8} />
        <View style={styles.View_116_9} />
        <View style={styles.View_116_10} />
        <View style={styles.View_116_11}>
          <Text style={styles.Text_116_11}>Shark Tee</Text>
        </View>
        <View style={styles.View_116_12}>
          <Text style={styles.Text_116_12}>$8.99</Text>
        </View>
        <View style={styles.View_116_13}>
          <Text style={styles.Text_116_13}>a.nj_an</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1227/13ef/9ad7f2f4473022ac02140c01d80d7b9c"
          }}
          style={styles.ImageBackground_116_14}
        />
      </View>
      <View style={styles.View_116_15}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
          }}
          style={styles.ImageBackground_116_16}
        />
        <View style={styles.View_116_18}>
          <View style={styles.View_116_19}>
            <View style={styles.View_116_20} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b386/0831/4fae64b1da06312431e1fdd7abeb018e"
              }}
              style={styles.ImageBackground_116_21}
            />
            <View style={styles.View_116_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_116_23}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/62f8/5a315ac1c29e71f2707be5d340ce81b3"
                }}
                style={styles.ImageBackground_116_24}
              />
              <View style={styles.View_116_25}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c2f/a4fc/1476266ca9014ebd6256292a387f8dfa"
                  }}
                  style={styles.ImageBackground_116_26}
                />
                <View style={styles.View_116_29}>
                  <Text style={styles.Text_116_29}>thu.gg_a</Text>
                </View>
              </View>
              <View style={styles.View_116_30}>
                <View style={styles.View_116_31}>
                  <Text style={styles.Text_116_31}>a.nj_an</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f3d/11c7/b9cef5937d5afe1c8e4ce0faec80adde"
                  }}
                  style={styles.ImageBackground_116_32}
                />
              </View>
              <View style={styles.View_116_35}>
                <View style={styles.View_116_36}>
                  <Text style={styles.Text_116_36}>wunn_a</Text>
                </View>
              </View>
              <View style={styles.View_116_37}>
                <View style={styles.View_116_38}>
                  <Text style={styles.Text_116_38}>r0achman</Text>
                </View>
              </View>
              <View style={styles.View_116_39}>
                <View style={styles.View_116_40}>
                  <Text style={styles.Text_116_40}>renj.1</Text>
                </View>
              </View>
              <View style={styles.View_116_41}>
                <View style={styles.View_116_42}>
                  <Text style={styles.Text_116_42}>brown.boy</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4da/7ed9/ddc0eeebfa6cca1d5bd871634e063766"
                }}
                style={styles.ImageBackground_116_43}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e5/e422/1c05e79372770d5f98f1ef0a02ca308a"
                }}
                style={styles.ImageBackground_116_46}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7322/9c2d/a8291f10db614dbe7d06e0ec24463e8d"
                }}
                style={styles.ImageBackground_116_49}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f6e/c5ca/e6d47c1060afcca1c8711a985cb40f81"
                }}
                style={styles.ImageBackground_116_52}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_116_55}>
        <Text style={styles.Text_116_55}>S H A R K</Text>
      </View>
      <View style={styles.View_116_56}>
        <View style={styles.View_116_57}>
          <View style={styles.View_116_58}>
            <View style={styles.View_116_59} />
            <View style={styles.View_116_60} />
          </View>
          <View style={styles.View_116_61} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_116_62}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_116_63}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_116_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_116_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_116_66}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62a0/951c/2f3185a58db714509a038130af37ac98"
        }}
        style={styles.ImageBackground_116_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7911/85e5/cd3c751c05df3f69980327dbde91f54c"
        }}
        style={styles.ImageBackground_116_68}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_116_1: {
    width: 332,
    minWidth: 332,
    height: 475,
    minHeight: 475,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 193
  },
  View_116_2: {
    width: 295,
    minWidth: 295,
    height: 331,
    minHeight: 331,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 144,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_116_3: {
    width: 332,
    minWidth: 332,
    height: 434,
    minHeight: 434,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 22,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_116_4: {
    width: 265,
    minWidth: 265,
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 69
  },
  ImageBackground_116_5: {
    width: 265,
    minWidth: 265,
    height: 274,
    minHeight: 274,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_116_6: {
    width: 94.4554443359375,
    minWidth: 94.4554443359375,
    height: 106.36646270751953,
    minHeight: 106.36646270751953,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85.70947265625,
    top: 57.012420654296875,
    resizeMode: "cover"
  },
  View_116_7: {
    width: 332,
    minWidth: 332,
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 374,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_116_8: {
    width: 332,
    minWidth: 332,
    height: 50,
    minHeight: 50,
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
  View_116_9: {
    width: 332,
    minWidth: 332,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 374,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_116_10: {
    width: 332,
    minWidth: 332,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_116_11: {
    width: 115,
    minWidth: 115,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 383
  },
  Text_116_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_12: {
    width: 57,
    minWidth: 57,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 418
  },
  Text_116_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_13: {
    width: 67,
    minWidth: 67,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50,
    top: 9
  },
  Text_116_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_116_14: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 10
  },
  View_116_15: {
    width: 404,
    minWidth: 404,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -6
  },
  ImageBackground_116_16: {
    width: 375,
    minWidth: 375,
    height: 5.684341886080802e-14,
    minHeight: 5.684341886080802e-14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 173
  },
  View_116_18: {
    width: 404,
    minWidth: 404,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_116_19: {
    width: 404,
    minWidth: 404,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_116_20: {
    width: 375,
    minWidth: 375,
    height: 182,
    minHeight: 182,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_116_21: {
    width: 0,
    minWidth: 0,
    height: 85,
    minHeight: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 97
  },
  View_116_22: {
    width: 404,
    minWidth: 404,
    height: 85,
    minHeight: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 97
  },
  ImageBackground_116_23: {
    width: 375,
    minWidth: 375,
    height: 4.263256414560601e-14,
    minHeight: 4.263256414560601e-14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_116_24: {
    width: 375,
    minWidth: 375,
    height: 5.684341886080802e-14,
    minHeight: 5.684341886080802e-14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 85
  },
  View_116_25: {
    width: 70,
    minWidth: 70,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 6
  },
  ImageBackground_116_26: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 0
  },
  View_116_29: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 54
  },
  Text_116_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_30: {
    width: 70,
    minWidth: 70,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 7
  },
  View_116_31: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 53
  },
  Text_116_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_116_32: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 0
  },
  View_116_35: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 138,
    top: 60
  },
  View_116_36: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_116_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_37: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 205,
    top: 60
  },
  View_116_38: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_116_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_39: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 60
  },
  View_116_40: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_116_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_41: {
    width: 70,
    minWidth: 70,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 60
  },
  View_116_42: {
    width: 70,
    minWidth: 70,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_116_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_116_43: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 148,
    top: 7
  },
  ImageBackground_116_46: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 214,
    top: 6
  },
  ImageBackground_116_49: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 7
  },
  ImageBackground_116_52: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 7
  },
  View_116_55: {
    width: 136,
    minWidth: 136,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 48
  },
  Text_116_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_56: {
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
  View_116_57: {
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
  View_116_58: {
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
  View_116_59: {
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
  View_116_60: {
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
  View_116_61: {
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
  ImageBackground_116_62: {
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
  ImageBackground_116_63: {
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
  ImageBackground_116_64: {
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
  ImageBackground_116_65: {
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
  ImageBackground_116_66: {
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
  ImageBackground_116_67: {
    width: 28,
    minWidth: 28,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    top: 50,
    resizeMode: "cover"
  },
  ImageBackground_116_68: {
    width: 28,
    minWidth: 28,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 334,
    top: 50,
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
