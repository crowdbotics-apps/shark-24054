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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/297e/b00d/44a8f29d958ddf2bf768627a934a7ed2"
        }}
        style={styles.ImageBackground_108_134}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/297e/b00d/44a8f29d958ddf2bf768627a934a7ed2"
        }}
        style={styles.ImageBackground_217_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/297e/b00d/44a8f29d958ddf2bf768627a934a7ed2"
        }}
        style={styles.ImageBackground_217_13}
      />
      <View style={styles.View_109_1}>
        <View style={styles.View_108_135}>
          <View style={styles.View_108_136}>
            <View style={styles.View_108_137} />
            <View style={styles.View_108_138}>
              <View style={styles.View_108_139}>
                <Text style={styles.Text_108_139}>Bid</Text>
              </View>
              <View style={styles.View_108_140}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4c0/1ee3/6a31512ade1080953f5019451899ea9a"
                  }}
                  style={styles.ImageBackground_108_141}
                />
                <View style={styles.View_108_142}>
                  <Text style={styles.Text_108_142}>Set Price</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4c0/1ee3/6a31512ade1080953f5019451899ea9a"
                  }}
                  style={styles.ImageBackground_108_143}
                />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f6c/d272/fedfb4f700a245b72d40310c6d015527"
          }}
          style={styles.ImageBackground_108_158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8695/2ab3/b6ec6693875923a90c5729ffdc1608a6"
          }}
          style={styles.ImageBackground_108_159}
        />
      </View>
      <View style={styles.View_109_4}>
        <View style={styles.View_109_5}>
          <View style={styles.View_109_6}>
            <View style={styles.View_109_7} />
            <View style={styles.View_109_8}>
              <View style={styles.View_109_9}>
                <Text style={styles.Text_109_9}>Everyone</Text>
              </View>
              <View style={styles.View_109_10}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c227/85b2/690d2768c8c4895ac2e82bac00e085ce"
                  }}
                  style={styles.ImageBackground_109_11}
                />
                <View style={styles.View_109_12}>
                  <Text style={styles.Text_109_12}>Only Friends</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c227/85b2/690d2768c8c4895ac2e82bac00e085ce"
                  }}
                  style={styles.ImageBackground_109_13}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/297e/b00d/44a8f29d958ddf2bf768627a934a7ed2"
        }}
        style={styles.ImageBackground_109_3}
      />
      <View style={styles.View_111_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36c2/e0a9/03b8d4d01309180dcf4995524415711f"
        }}
        style={styles.ImageBackground_111_4}
      />
      <View style={styles.View_36_20}>
        <View style={styles.View_36_21}>
          <View style={styles.View_36_22}>
            <View style={styles.View_36_23} />
            <View style={styles.View_36_24} />
          </View>
          <View style={styles.View_36_25} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_36_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_36_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_36_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a1/bb7e/d14d9c9cf8447e180aae27478d9740c2"
          }}
          style={styles.ImageBackground_36_32}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_36_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb63/17c0/8db784d24d3dd2c76c0844c33acabc64"
        }}
        style={styles.ImageBackground_71_0}
      />
      <View style={styles.View_71_2}>
        <Text style={styles.Text_71_2}>ITEM</Text>
      </View>
      <View style={styles.View_71_3}>
        <Text style={styles.Text_71_3}>TIDE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
        }}
        style={styles.ImageBackground_71_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a003/1745/4e9d2b1464b9c7f6426d0a9621cf4b51"
        }}
        style={styles.ImageBackground_71_7}
      />
      <View style={styles.View_71_26}>
        <Text style={styles.Text_71_26}>PRICE</Text>
      </View>
      <View style={styles.View_111_9}>
        <View style={styles.View_111_8} />
        <View style={styles.View_111_7}>
          <Text style={styles.Text_111_7}>$500</Text>
        </View>
      </View>
      <View style={styles.View_112_10}>
        <View style={styles.View_112_11} />
        <View style={styles.View_112_12}>
          <Text style={styles.Text_112_12}>Add Pod</Text>
        </View>
      </View>
      <View style={styles.View_71_29}>
        <Text style={styles.Text_71_29}>PODS</Text>
      </View>
      <View style={styles.View_111_5}>
        <Text style={styles.Text_111_5}>$0</Text>
      </View>
      <View style={styles.View_111_6}>
        <Text style={styles.Text_111_6}>$&gt;1000</Text>
      </View>
      <View style={styles.View_108_5}>
        <View style={styles.View_108_6}>
          <View style={styles.View_108_7}>
            <View style={styles.View_108_8} />
            <View style={styles.View_108_9} />
          </View>
          <View style={styles.View_108_10} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_108_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_108_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_108_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a1/bb7e/d14d9c9cf8447e180aae27478d9740c2"
          }}
          style={styles.ImageBackground_108_14}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_108_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb63/17c0/8db784d24d3dd2c76c0844c33acabc64"
        }}
        style={styles.ImageBackground_108_16}
      />
      <View style={styles.View_108_17}>
        <Text style={styles.Text_108_17}>ITEM</Text>
      </View>
      <View style={styles.View_108_18}>
        <Text style={styles.Text_108_18}>TIDE</Text>
      </View>
      <View style={styles.View_217_7}>
        <View style={styles.View_108_19} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
          }}
          style={styles.ImageBackground_108_20}
        />
        <View style={styles.View_108_21} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a003/1745/4e9d2b1464b9c7f6426d0a9621cf4b51"
          }}
          style={styles.ImageBackground_108_22}
        />
        <View style={styles.View_108_23} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/4020/c2653000f8ffdd488554ade420f7f32d"
          }}
          style={styles.ImageBackground_108_24}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_112_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
        }}
        style={styles.ImageBackground_112_17}
      />
      <View style={styles.View_217_8}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_108_25}
        />
        <View style={styles.View_108_26}>
          <Text style={styles.Text_108_26}>Name</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_108_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_217_14}
        />
        <View style={styles.View_108_28}>
          <Text style={styles.Text_108_28}>Description</Text>
        </View>
        <View style={styles.View_217_10}>
          <Text style={styles.Text_217_10}>Condition</Text>
        </View>
        <View style={styles.View_217_12}>
          <Text style={styles.Text_217_12}>Size</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_108_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/745a/fb5c/8795d75f45bb3b217b4b2ae356435076"
          }}
          style={styles.ImageBackground_217_15}
        />
        <View style={styles.View_108_30}>
          <Text style={styles.Text_108_30}>Location</Text>
        </View>
      </View>
      <View style={styles.View_110_2}>
        <View style={styles.View_108_35} />
        <View style={styles.View_108_36}>
          <Text style={styles.Text_108_36}>ADD TIDE</Text>
        </View>
      </View>
      <View style={styles.View_108_132}>
        <Text style={styles.Text_108_132}>Pricing</Text>
      </View>
      <View style={styles.View_109_2}>
        <Text style={styles.Text_109_2}>Share With</Text>
      </View>
      <View style={styles.View_111_1}>
        <View style={styles.View_71_30} />
        <View style={styles.View_108_43}>
          <Text style={styles.Text_108_43}>Shoes</Text>
        </View>
      </View>
      <View style={styles.View_112_3}>
        <View style={styles.View_112_4} />
        <View style={styles.View_112_5}>
          <Text style={styles.Text_112_5}>Basketball</Text>
        </View>
      </View>
      <View style={styles.View_111_2}>
        <View style={styles.View_71_37} />
        <View style={styles.View_108_45}>
          <Text style={styles.Text_108_45}>SHARE</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_108_134: {
    width: 12,
    minWidth: 12,
    height: 8.298507690429688,
    minHeight: 8.298507690429688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85,
    top: 366,
    resizeMode: "cover"
  },
  ImageBackground_217_11: {
    width: 12,
    minWidth: 12,
    height: 8.298507690429688,
    minHeight: 8.298507690429688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106,
    top: 324,
    resizeMode: "cover"
  },
  ImageBackground_217_13: {
    width: 12,
    minWidth: 12,
    height: 8.298507690429688,
    minHeight: 8.298507690429688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 246,
    top: 325,
    resizeMode: "cover"
  },
  View_109_1: {
    width: 141,
    minWidth: 141,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 382
  },
  View_108_135: {
    width: 141,
    minWidth: 141,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_108_136: {
    width: 141,
    minWidth: 141,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_108_137: {
    width: 141,
    minWidth: 141,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(62, 62, 62, 1)"
  },
  View_108_138: {
    width: 139.18455505371094,
    minWidth: 139.18455505371094,
    height: 43.415382385253906,
    minHeight: 43.415382385253906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 5
  },
  View_108_139: {
    width: 84.72103118896484,
    minWidth: 84.72103118896484,
    minHeight: 15.169230461120605,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 23
  },
  Text_108_139: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_140: {
    width: 139.18455505371094,
    minWidth: 139.18455505371094,
    height: 43.415382385253906,
    minHeight: 43.415382385253906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_108_141: {
    width: 139.18455505371094,
    minWidth: 139.18455505371094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 19.353759765625
  },
  View_108_142: {
    width: 84.72103118896484,
    minWidth: 84.72103118896484,
    minHeight: 15.169230461120605,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29.65240478515625,
    top: 0
  },
  Text_108_142: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_143: {
    width: 139.18455505371094,
    minWidth: 139.18455505371094,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 43.415283203125
  },
  ImageBackground_108_158: {
    width: 18,
    minWidth: 18,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 2,
    resizeMode: "cover"
  },
  ImageBackground_108_159: {
    width: 18,
    minWidth: 18,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 27,
    resizeMode: "cover"
  },
  View_109_4: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 382
  },
  View_109_5: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_109_6: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_109_7: {
    width: 104,
    minWidth: 104,
    height: 49.69230651855469,
    minHeight: 49.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(62, 62, 62, 1)"
  },
  View_109_8: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    height: 44.69230651855469,
    minHeight: 44.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.33905029296875,
    top: 5
  },
  View_109_9: {
    width: 62.48927307128906,
    minWidth: 62.48927307128906,
    minHeight: 15.169230461120605,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.82415771484375,
    top: 25
  },
  Text_109_9: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_109_10: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    height: 44.69230651855469,
    minHeight: 44.69230651855469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_109_11: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 20.630859375
  },
  View_109_12: {
    width: 83,
    minWidth: 83,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.6610107421875,
    top: 0
  },
  Text_109_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_109_13: {
    width: 102.66094970703125,
    minWidth: 102.66094970703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 44.6923828125
  },
  ImageBackground_109_3: {
    width: 12,
    minWidth: 12,
    height: 8.298507690429688,
    minHeight: 8.298507690429688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 298,
    top: 366,
    resizeMode: "cover"
  },
  View_111_3: {
    width: 251,
    minWidth: 251,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 493,
    backgroundColor: "rgba(255, 253, 253, 1)"
  },
  ImageBackground_111_4: {
    width: 11,
    minWidth: 11,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155,
    top: 489
  },
  View_36_20: {
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
  View_36_21: {
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
  View_36_22: {
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
  View_36_23: {
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
  View_36_24: {
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
  View_36_25: {
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
  ImageBackground_36_27: {
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
  ImageBackground_36_28: {
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
  ImageBackground_36_29: {
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
  ImageBackground_36_32: {
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
  ImageBackground_36_31: {
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
  ImageBackground_71_0: {
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
  View_71_2: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 47
  },
  Text_71_2: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_3: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207,
    top: 48
  },
  Text_71_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_71_5: {
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
  ImageBackground_71_7: {
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
  View_71_26: {
    width: 74,
    minWidth: 74,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 465
  },
  Text_71_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_9: {
    width: 68,
    minWidth: 68,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 466
  },
  View_111_8: {
    width: 54.77777862548828,
    minWidth: 54.77777862548828,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.4444580078125,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_111_7: {
    width: 68,
    minWidth: 68,
    minHeight: 10.5625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_111_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_10: {
    width: 68,
    minWidth: 68,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88,
    top: 548
  },
  View_112_11: {
    width: 54.77777862548828,
    minWidth: 54.77777862548828,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.4444580078125,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_112_12: {
    width: 68,
    minWidth: 68,
    minHeight: 10.5625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_112_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_71_29: {
    width: 33,
    minWidth: 33,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 548
  },
  Text_71_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_5: {
    width: 19,
    minWidth: 19,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 508
  },
  Text_111_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_6: {
    width: 43,
    minWidth: 43,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 268,
    top: 508
  },
  Text_111_6: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_5: {
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
  View_108_6: {
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
  View_108_7: {
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
  View_108_8: {
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
  View_108_9: {
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
  View_108_10: {
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
  ImageBackground_108_11: {
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
  ImageBackground_108_12: {
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
  ImageBackground_108_13: {
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
  ImageBackground_108_14: {
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
  ImageBackground_108_15: {
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
  ImageBackground_108_16: {
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
  View_108_17: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 47
  },
  Text_108_17: {
    color: "rgba(80, 199, 242, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_18: {
    width: 131,
    minWidth: 131,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207,
    top: 48
  },
  Text_108_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_7: {
    width: 310,
    minWidth: 310,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 91
  },
  View_108_19: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_20: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 24,
    resizeMode: "cover"
  },
  View_108_21: {
    width: 86,
    minWidth: 86,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 112,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_22: {
    width: 51,
    minWidth: 51,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129,
    top: 24,
    resizeMode: "cover"
  },
  View_108_23: {
    width: 87,
    minWidth: 87,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 223,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  ImageBackground_108_24: {
    width: 52,
    minWidth: 52,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 240,
    top: 24,
    resizeMode: "cover"
  },
  ImageBackground_112_16: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 534
  },
  ImageBackground_112_17: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 609
  },
  View_217_8: {
    width: 302,
    minWidth: 302,
    height: 256,
    minHeight: 256,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 194
  },
  ImageBackground_108_25: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 23
  },
  View_108_26: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.0032958984375,
    top: 0
  },
  Text_108_26: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_27: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 108
  },
  ImageBackground_217_14: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 70
  },
  View_108_28: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 82
  },
  Text_108_28: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_10: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 122
  },
  Text_217_10: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_217_12: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 179,
    top: 123
  },
  Text_217_12: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_108_29: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 153
  },
  ImageBackground_217_15: {
    width: 301,
    minWidth: 301,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 256
  },
  View_108_30: {
    width: 111,
    minWidth: 111,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 40
  },
  Text_108_30: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_110_2: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 623
  },
  View_108_35: {
    width: 87,
    minWidth: 87,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_108_36: {
    width: 73,
    minWidth: 73,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 5
  },
  Text_108_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_108_132: {
    width: 74,
    minWidth: 74,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 357
  },
  Text_108_132: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_109_2: {
    width: 74,
    minWidth: 74,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 358
  },
  Text_109_2: {
    color: "rgba(112, 112, 112, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_1: {
    width: 79,
    minWidth: 79,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 572
  },
  View_71_30: {
    width: 79,
    minWidth: 79,
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
  View_108_43: {
    width: 70.85566711425781,
    minWidth: 70.85566711425781,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.814453125,
    top: 2.842041015625
  },
  Text_108_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_3: {
    width: 79,
    minWidth: 79,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 121,
    top: 572
  },
  View_112_4: {
    width: 79,
    minWidth: 79,
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
  View_112_5: {
    width: 70.85566711425781,
    minWidth: 70.85566711425781,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.81439208984375,
    top: 2.842041015625
  },
  Text_112_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_111_2: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 662
  },
  View_71_37: {
    width: 135,
    minWidth: 135,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_108_45: {
    width: 101.25,
    minWidth: 101.25,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.7115478515625,
    top: 15
  },
  Text_108_45: {
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
