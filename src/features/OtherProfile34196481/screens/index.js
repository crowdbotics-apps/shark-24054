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
      <View style={styles.View_3_67}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa3/139c/74af8ea1d3ab5210e34ac25076429b6f"
          }}
          style={styles.ImageBackground_3_68}
        />
        <View style={styles.View_3_73}>
          <View style={styles.View_3_74}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b7c/d169/975dd38748f83110d205379c49a6ba77"
              }}
              style={styles.ImageBackground_3_75}
            />
            <View style={styles.View_3_76}>
              <Text style={styles.Text_3_76}>Adfab Paris</Text>
            </View>
            <View style={styles.View_3_77}>
              <Text style={styles.Text_3_77}>Adfab</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_3_78}
          />
          <View style={styles.View_3_82}>
            <Text style={styles.Text_3_82}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_3_83}
          />
          <View style={styles.View_3_85}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_3_86}
            />
            <View style={styles.View_3_88}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_3_89}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_3_92}
            />
          </View>
          <View style={styles.View_3_94}>
            <Text style={styles.Text_3_94}>1 534 J’aime</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_3_98}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca2/f1b9/e6548ceb1b9bbba0c7dea3fa12fe0b9e"
          }}
          style={styles.ImageBackground_3_99}
        />
        <View style={styles.View_3_104}>
          <View style={styles.View_3_105}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a52/5b39/3b69bde6823e0b074a2f45b46c901c35"
              }}
              style={styles.ImageBackground_3_106}
            />
            <View style={styles.View_3_107}>
              <Text style={styles.Text_3_107}>Adfab Paris</Text>
            </View>
            <View style={styles.View_3_108}>
              <Text style={styles.Text_3_108}>Seychelles</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_3_109}
          />
          <View style={styles.View_3_113}>
            <Text style={styles.Text_3_113}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_3_114}
          />
          <View style={styles.View_3_116}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_3_117}
            />
            <View style={styles.View_3_119}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_3_120}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_3_123}
            />
          </View>
          <View style={styles.View_3_125}>
            <Text style={styles.Text_3_125}>1 534 J’aime</Text>
          </View>
          <View style={styles.View_3_126}>
            <View style={styles.View_3_127}>
              <Text style={styles.Text_3_127}>
                ArthurHazan Quel plaisir de retrouver mes étudiants de Web 2 !
                Ils ont tellement progressés depuis l’année dernière ! #Proud
              </Text>
            </View>
            <View style={styles.View_3_128}>
              <Text style={styles.Text_3_128}>Voir les 10 commentaires</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_129}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b89b/a8f1/f8cbb2261015f155329d15a4b49cd7c2"
          }}
          style={styles.ImageBackground_3_130}
        />
        <View style={styles.View_3_135}>
          <View style={styles.View_3_136}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa8/abb2/3460a44b4cce0b540631b45eca478aea"
              }}
              style={styles.ImageBackground_3_137}
            />
            <View style={styles.View_3_138}>
              <Text style={styles.Text_3_138}>Adfab Paris</Text>
            </View>
            <View style={styles.View_3_139}>
              <Text style={styles.Text_3_139}>Deep Blue</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_3_140}
          />
          <View style={styles.View_3_144}>
            <Text style={styles.Text_3_144}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_3_145}
          />
          <View style={styles.View_3_147}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_3_148}
            />
            <View style={styles.View_3_150}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_3_151}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_3_154}
            />
          </View>
          <View style={styles.View_3_156}>
            <Text style={styles.Text_3_156}>1 534 J’aime</Text>
          </View>
          <View style={styles.View_3_157}>
            <View style={styles.View_3_158}>
              <Text style={styles.Text_3_158}>
                ArthurHazan Quel plaisir de retrouver mes étudiants de Web 2 !
                Ils ont tellement progressés depuis l’année dernière ! #Proud
              </Text>
            </View>
            <View style={styles.View_3_159}>
              <Text style={styles.Text_3_159}>Voir les 10 commentaires</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_160}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d010/21fe/fdb3cfa72414a455a89cafcab1a8467c"
          }}
          style={styles.ImageBackground_3_161}
        />
        <View style={styles.View_3_166}>
          <View style={styles.View_3_167}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bfc/50c9/fd530f85676ce7448b32823278279ed4"
              }}
              style={styles.ImageBackground_3_168}
            />
            <View style={styles.View_3_169}>
              <Text style={styles.Text_3_169}>Adfab Paris</Text>
            </View>
            <View style={styles.View_3_170}>
              <Text style={styles.Text_3_170}>Adfab</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_3_171}
          />
          <View style={styles.View_3_175}>
            <Text style={styles.Text_3_175}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_3_176}
          />
          <View style={styles.View_3_178}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_3_179}
            />
            <View style={styles.View_3_181}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_3_182}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_3_185}
            />
          </View>
          <View style={styles.View_3_187}>
            <Text style={styles.Text_3_187}>1 534 J’aime</Text>
          </View>
          <View style={styles.View_3_188}>
            <View style={styles.View_3_189}>
              <Text style={styles.Text_3_189}>
                ArthurHazan Quel plaisir de retrouver mes étudiants de Web 2 !
                Ils ont tellement progressés depuis l’année dernière ! #Proud
              </Text>
            </View>
            <View style={styles.View_3_190}>
              <Text style={styles.Text_3_190}>Voir les 10 commentaires</Text>
            </View>
          </View>
        </View>
      </View>
      <View source={{ uri: "null" }} style={styles.View_3_191} />
      <View source={{ uri: "null" }} style={styles.View_3_192} />
      <View style={styles.View_3_194} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f46d/a65b/b397503e34e49ae1ec850ad737ff0fa3"
        }}
        style={styles.ImageBackground_3_195}
      />
      <View style={styles.View_3_196}>
        <Text style={styles.Text_3_196}>1070 Followers</Text>
      </View>
      <View style={styles.View_3_197}>
        <Text style={styles.Text_3_197}>10 Following</Text>
      </View>
      <View style={styles.View_3_198} />
      <View style={styles.View_3_199}>
        <Text style={styles.Text_3_199}>Follow</Text>
      </View>
      <View style={styles.View_3_200}>
        <Text style={styles.Text_3_200}>
          Thrifty Queen | Cali Based Vintage Finds | Reselling
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d8b/c369/3f256ff1a6073364405d96543a317ef5"
        }}
        style={styles.ImageBackground_3_219}
      />
      <View style={styles.View_3_223}>
        <Text style={styles.Text_3_223}>LavaGirl</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5942/ec8d/c4757d7e56033d41ad66a9f03163486f"
        }}
        style={styles.ImageBackground_16_14}
      />
      <View style={styles.View_3_250}>
        <Text style={styles.Text_3_250}>10 Similarities</Text>
      </View>
      <View source={{ uri: "null" }} style={styles.View_3_251} />
      <View style={styles.View_16_0}>
        <View style={styles.View_16_1}>
          <View style={styles.View_16_2}>
            <View style={styles.View_16_3} />
            <View style={styles.View_16_4} />
          </View>
          <View style={styles.View_16_5} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_16_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_16_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_16_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_16_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_16_10}
        />
      </View>
      <View style={styles.View_27_25} />
      <View style={styles.View_29_50}>
        <View style={styles.View_27_24}>
          <View style={styles.View_27_15}>
            <View style={styles.View_27_16} />
            <View style={styles.View_27_17} />
            <View style={styles.View_27_18} />
            <View style={styles.View_27_19} />
          </View>
          <View style={styles.View_27_22}>
            <Text style={styles.Text_27_22}>Tides</Text>
          </View>
        </View>
        <View style={styles.View_29_49}>
          <View style={styles.View_29_48}>
            <View style={styles.View_27_23}>
              <View style={styles.View_27_9}>
                <View style={styles.View_27_10} />
                <View style={styles.View_27_11} />
                <View style={styles.View_27_12} />
                <View style={styles.View_27_13} />
              </View>
              <View style={styles.View_27_21}>
                <Text style={styles.Text_27_21}>Pods</Text>
              </View>
            </View>
            <View style={styles.View_27_27} />
            <View style={styles.View_27_28} />
            <View style={styles.View_27_29} />
          </View>
          <View style={styles.View_27_30} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58da/2bbe/51160bf744e60a73fdf2041f472eb378"
          }}
          style={styles.ImageBackground_27_31}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_3_67: {
    flexGrow: 1,
    width: 375,
    height: 565,
    minHeight: 565,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1191,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_68: {
    flexGrow: 1,
    width: 375,
    height: 401,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 51,
    resizeMode: "cover"
  },
  View_3_73: {
    width: 365,
    minWidth: 365,
    height: 539,
    minHeight: 539,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0
  },
  View_3_74: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_3_75: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_76: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 7
  },
  Text_3_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_77: {
    width: 27,
    minWidth: 27,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 19
  },
  Text_3_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_3_78: {
    width: 13,
    minWidth: 13,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 11
  },
  View_3_82: {
    width: 248.99996948242188,
    top: 269.39703369140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_3_82: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_3_83: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 468
  },
  View_3_85: {
    width: 101,
    minWidth: 101,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 468
  },
  ImageBackground_3_86: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_88: {
    width: 27,
    minWidth: 27,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_89: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_3_92: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_3_94: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 500
  },
  Text_3_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_98: {
    flexGrow: 1,
    width: 375,
    height: 354,
    minHeight: 354,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1756,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_99: {
    flexGrow: 1,
    width: 375,
    height: 190,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 51,
    resizeMode: "cover"
  },
  View_3_104: {
    width: 365,
    minWidth: 365,
    height: 539,
    minHeight: 539,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0
  },
  View_3_105: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_3_106: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_107: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 7
  },
  Text_3_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_108: {
    width: 49,
    minWidth: 49,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 19
  },
  Text_3_108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_3_109: {
    width: 13,
    minWidth: 13,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 11
  },
  View_3_113: {
    width: 248.99996948242188,
    top: 168.7903594970703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_3_113: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_3_114: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 257
  },
  View_3_116: {
    width: 101,
    minWidth: 101,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 257
  },
  ImageBackground_3_117: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_119: {
    width: 27,
    minWidth: 27,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_120: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_3_123: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_3_125: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 289
  },
  Text_3_125: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_126: {
    width: 365,
    minWidth: 365,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 492
  },
  View_3_127: {
    flexGrow: 1,
    width: 365,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_128: {
    flexGrow: 1,
    width: 365,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  Text_3_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_129: {
    flexGrow: 1,
    width: 375,
    height: 391,
    minHeight: 391,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2140,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_130: {
    flexGrow: 1,
    width: 375,
    height: 227,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 51,
    resizeMode: "cover"
  },
  View_3_135: {
    width: 365,
    minWidth: 365,
    height: 539,
    minHeight: 539,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0
  },
  View_3_136: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_3_137: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_138: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 7
  },
  Text_3_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_139: {
    width: 47,
    minWidth: 47,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 19
  },
  Text_3_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_3_140: {
    width: 13,
    minWidth: 13,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 11
  },
  View_3_144: {
    width: 248.99996948242188,
    top: 186.4322509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_3_144: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_3_145: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 294
  },
  View_3_147: {
    width: 101,
    minWidth: 101,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 294
  },
  ImageBackground_3_148: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_150: {
    width: 27,
    minWidth: 27,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_151: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_3_154: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_3_156: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 326
  },
  Text_3_156: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_157: {
    width: 365,
    minWidth: 365,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 492
  },
  View_3_158: {
    flexGrow: 1,
    width: 365,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_159: {
    flexGrow: 1,
    width: 365,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  Text_3_159: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_160: {
    flexGrow: 1,
    width: 375,
    height: 539,
    minHeight: 539,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2561,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_161: {
    flexGrow: 1,
    width: 375,
    height: 375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 51,
    resizeMode: "cover"
  },
  View_3_166: {
    width: 365,
    minWidth: 365,
    height: 539,
    minHeight: 539,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10,
    top: 0
  },
  View_3_167: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_3_168: {
    width: 36,
    minWidth: 36,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_169: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 7
  },
  Text_3_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_170: {
    width: 27,
    minWidth: 27,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.0400390625,
    top: 19
  },
  Text_3_170: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_3_171: {
    width: 13,
    minWidth: 13,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 342,
    top: 11
  },
  View_3_175: {
    width: 248.99996948242188,
    top: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_3_175: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_3_176: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 442
  },
  View_3_178: {
    width: 101,
    minWidth: 101,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 442
  },
  ImageBackground_3_179: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_3_181: {
    width: 27,
    minWidth: 27,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_3_182: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_3_185: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_3_187: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 474
  },
  Text_3_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_188: {
    width: 365,
    minWidth: 365,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 492
  },
  View_3_189: {
    flexGrow: 1,
    width: 365,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_3_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_190: {
    flexGrow: 1,
    width: 365,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  Text_3_190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_191: {
    width: 71,
    minWidth: 71,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 135
  },
  View_3_192: {
    width: 414,
    minWidth: 414,
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 680
  },
  View_3_194: {
    width: 375,
    minWidth: 375,
    height: 814,
    minHeight: 814,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(9, 8, 8, 1)"
  },
  ImageBackground_3_195: {
    width: 240,
    minWidth: 240,
    height: 240,
    minHeight: 240,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 181
  },
  View_3_196: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 102
  },
  Text_3_196: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_197: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 103
  },
  Text_3_197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_198: {
    width: 232,
    minWidth: 232,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81,
    top: 434,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_3_199: {
    width: 231,
    minWidth: 231,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 434
  },
  Text_3_199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_200: {
    width: 297,
    minWidth: 297,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49,
    top: 486
  },
  Text_3_200: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_3_219: {
    width: 414.0006408691406,
    minWidth: 414.0006408691406,
    height: 1.8648676872253418,
    minHeight: 1.8648676872253418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -2,
    top: 767
  },
  View_3_223: {
    width: 121,
    minWidth: 121,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 54
  },
  Text_3_223: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_16_14: {
    width: 17,
    minWidth: 17,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 234,
    top: 53
  },
  View_3_250: {
    width: 102,
    minWidth: 102,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 101
  },
  Text_3_250: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_3_251: {
    width: 28.079742431640625,
    height: 33.09776306152344,
    top: 247.1304931640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307.065185546875
  },
  View_16_0: {
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
  View_16_1: {
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
  View_16_2: {
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
  View_16_3: {
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
  View_16_4: {
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
  View_16_5: {
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
  ImageBackground_16_6: {
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
  ImageBackground_16_7: {
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
  ImageBackground_16_8: {
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
  ImageBackground_16_9: {
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
  ImageBackground_16_10: {
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
  View_27_25: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 426,
    top: 563,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_29_50: {
    width: 266,
    minWidth: 266,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64,
    top: 555
  },
  View_27_24: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 0
  },
  View_27_15: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_27_16: {
    width: 91.47552490234375,
    minWidth: 91.47552490234375,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.76220703125,
    top: 38,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_17: {
    width: 103,
    minWidth: 103,
    height: 145.9199981689453,
    minHeight: 145.9199981689453,
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
  View_27_18: {
    width: 103,
    minWidth: 103,
    height: 37.2400016784668,
    minHeight: 37.2400016784668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.6800537109375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_27_19: {
    width: 103,
    minWidth: 103,
    height: 17.479999542236328,
    minHeight: 17.479999542236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.6800537109375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_27_22: {
    width: 40,
    minWidth: 40,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 115
  },
  Text_27_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_49: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_29_48: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_27_23: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_27_9: {
    width: 103,
    minWidth: 103,
    height: 152,
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_27_10: {
    width: 91.47552490234375,
    minWidth: 91.47552490234375,
    height: 114,
    minHeight: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.76220703125,
    top: 38,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_27_11: {
    width: 103,
    minWidth: 103,
    height: 145.9199981689453,
    minHeight: 145.9199981689453,
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
  View_27_12: {
    width: 103,
    minWidth: 103,
    height: 37.2400016784668,
    minHeight: 37.2400016784668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.6800537109375,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_27_13: {
    width: 103,
    minWidth: 103,
    height: 17.479999542236328,
    minHeight: 17.479999542236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 108.6800537109375,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_27_21: {
    width: 40,
    minWidth: 40,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 115
  },
  Text_27_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_27: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 25,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_27_28: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 25,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_27_29: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 63,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_27_30: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 63,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_27_31: {
    width: 77,
    minWidth: 77,
    height: 69.74637603759766,
    minHeight: 69.74637603759766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 178,
    top: 24,
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
