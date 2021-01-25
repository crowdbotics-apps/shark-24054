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
      <View style={styles.View_219_227}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa3/139c/74af8ea1d3ab5210e34ac25076429b6f"
          }}
          style={styles.ImageBackground_219_228}
        />
        <View style={styles.View_219_233}>
          <View style={styles.View_219_234}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b7c/d169/975dd38748f83110d205379c49a6ba77"
              }}
              style={styles.ImageBackground_219_235}
            />
            <View style={styles.View_219_236}>
              <Text style={styles.Text_219_236}>Adfab Paris</Text>
            </View>
            <View style={styles.View_219_237}>
              <Text style={styles.Text_219_237}>Adfab</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_219_238}
          />
          <View style={styles.View_219_242}>
            <Text style={styles.Text_219_242}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_219_243}
          />
          <View style={styles.View_219_245}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_219_246}
            />
            <View style={styles.View_219_248}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_219_249}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_219_252}
            />
          </View>
          <View style={styles.View_219_254}>
            <Text style={styles.Text_219_254}>1 534 J’aime</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_219_258}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca2/f1b9/e6548ceb1b9bbba0c7dea3fa12fe0b9e"
          }}
          style={styles.ImageBackground_219_259}
        />
        <View style={styles.View_219_264}>
          <View style={styles.View_219_265}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a52/5b39/3b69bde6823e0b074a2f45b46c901c35"
              }}
              style={styles.ImageBackground_219_266}
            />
            <View style={styles.View_219_267}>
              <Text style={styles.Text_219_267}>Adfab Paris</Text>
            </View>
            <View style={styles.View_219_268}>
              <Text style={styles.Text_219_268}>Seychelles</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_219_269}
          />
          <View style={styles.View_219_273}>
            <Text style={styles.Text_219_273}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_219_274}
          />
          <View style={styles.View_219_276}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_219_277}
            />
            <View style={styles.View_219_279}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_219_280}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_219_283}
            />
          </View>
          <View style={styles.View_219_285}>
            <Text style={styles.Text_219_285}>1 534 J’aime</Text>
          </View>
          <View style={styles.View_219_286}>
            <View style={styles.View_219_287}>
              <Text style={styles.Text_219_287}>
                ArthurHazan Quel plaisir de retrouver mes étudiants de Web 2 !
                Ils ont tellement progressés depuis l’année dernière ! #Proud
              </Text>
            </View>
            <View style={styles.View_219_288}>
              <Text style={styles.Text_219_288}>Voir les 10 commentaires</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_219_289}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b89b/a8f1/f8cbb2261015f155329d15a4b49cd7c2"
          }}
          style={styles.ImageBackground_219_290}
        />
        <View style={styles.View_219_295}>
          <View style={styles.View_219_296}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faa8/abb2/3460a44b4cce0b540631b45eca478aea"
              }}
              style={styles.ImageBackground_219_297}
            />
            <View style={styles.View_219_298}>
              <Text style={styles.Text_219_298}>Adfab Paris</Text>
            </View>
            <View style={styles.View_219_299}>
              <Text style={styles.Text_219_299}>Deep Blue</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_219_300}
          />
          <View style={styles.View_219_304}>
            <Text style={styles.Text_219_304}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_219_305}
          />
          <View style={styles.View_219_307}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_219_308}
            />
            <View style={styles.View_219_310}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_219_311}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_219_314}
            />
          </View>
          <View style={styles.View_219_316}>
            <Text style={styles.Text_219_316}>1 534 J’aime</Text>
          </View>
          <View style={styles.View_219_317}>
            <View style={styles.View_219_318}>
              <Text style={styles.Text_219_318}>
                ArthurHazan Quel plaisir de retrouver mes étudiants de Web 2 !
                Ils ont tellement progressés depuis l’année dernière ! #Proud
              </Text>
            </View>
            <View style={styles.View_219_319}>
              <Text style={styles.Text_219_319}>Voir les 10 commentaires</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_219_320}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d010/21fe/fdb3cfa72414a455a89cafcab1a8467c"
          }}
          style={styles.ImageBackground_219_321}
        />
        <View style={styles.View_219_326}>
          <View style={styles.View_219_327}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7bfc/50c9/fd530f85676ce7448b32823278279ed4"
              }}
              style={styles.ImageBackground_219_328}
            />
            <View style={styles.View_219_329}>
              <Text style={styles.Text_219_329}>Adfab Paris</Text>
            </View>
            <View style={styles.View_219_330}>
              <Text style={styles.Text_219_330}>Adfab</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/620e/e914/c241febb54d9b9a58e64c333b406b6ef"
            }}
            style={styles.ImageBackground_219_331}
          />
          <View style={styles.View_219_335}>
            <Text style={styles.Text_219_335}>
              You can also change the background image
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9c3/1287/d852420addf2cae84f899fdc416f5ce5"
            }}
            style={styles.ImageBackground_219_336}
          />
          <View style={styles.View_219_338}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74a5/938a/996bd16f90e5170ddba017a17ea45ded"
              }}
              style={styles.ImageBackground_219_339}
            />
            <View style={styles.View_219_341}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f77/7f89/bb649555bfbd4350f15f4bcaef53d0c9"
                }}
                style={styles.ImageBackground_219_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0263/d353/ce10ff1670d28ba9edd05bceb3c529ee"
              }}
              style={styles.ImageBackground_219_345}
            />
          </View>
          <View style={styles.View_219_347}>
            <Text style={styles.Text_219_347}>1 534 J’aime</Text>
          </View>
          <View style={styles.View_219_348}>
            <View style={styles.View_219_349}>
              <Text style={styles.Text_219_349}>
                ArthurHazan Quel plaisir de retrouver mes étudiants de Web 2 !
                Ils ont tellement progressés depuis l’année dernière ! #Proud
              </Text>
            </View>
            <View style={styles.View_219_350}>
              <Text style={styles.Text_219_350}>Voir les 10 commentaires</Text>
            </View>
          </View>
        </View>
      </View>
      <View source={{ uri: "null" }} style={styles.View_219_351} />
      <View source={{ uri: "null" }} style={styles.View_219_352} />
      <View style={styles.View_219_353} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f46d/a65b/b397503e34e49ae1ec850ad737ff0fa3"
        }}
        style={styles.ImageBackground_219_354}
      />
      <View style={styles.View_219_355}>
        <Text style={styles.Text_219_355}>1070 Followers</Text>
      </View>
      <View style={styles.View_219_356}>
        <Text style={styles.Text_219_356}>10 Following</Text>
      </View>
      <View style={styles.View_219_357} />
      <View style={styles.View_219_358}>
        <Text style={styles.Text_219_358}>Follow</Text>
      </View>
      <View style={styles.View_219_359}>
        <Text style={styles.Text_219_359}>
          Thrifty Queen | Cali Based Vintage Finds | Reselling
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d8b/c369/3f256ff1a6073364405d96543a317ef5"
        }}
        style={styles.ImageBackground_219_360}
      />
      <View style={styles.View_219_361}>
        <Text style={styles.Text_219_361}>LavaGirl</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5942/ec8d/c4757d7e56033d41ad66a9f03163486f"
        }}
        style={styles.ImageBackground_219_362}
      />
      <View style={styles.View_219_363}>
        <Text style={styles.Text_219_363}>10 Similarities</Text>
      </View>
      <View source={{ uri: "null" }} style={styles.View_219_364} />
      <View style={styles.View_219_365}>
        <View style={styles.View_219_366}>
          <View style={styles.View_219_367}>
            <View style={styles.View_219_368} />
            <View style={styles.View_219_369} />
          </View>
          <View style={styles.View_219_370} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12a/2b4a/88bb235be936a43d10194e5680c585e9"
          }}
          style={styles.ImageBackground_219_371}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_219_372}
        />
        <View style={styles.View_219_428}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5580/8258/5a986942ba1f58ae6955841810088d9d"
            }}
            style={styles.ImageBackground_219_424}
          />
          <View style={styles.View_219_427}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5580/8258/5a986942ba1f58ae6955841810088d9d"
              }}
              style={styles.ImageBackground_219_422}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5580/8258/5a986942ba1f58ae6955841810088d9d"
              }}
              style={styles.ImageBackground_219_426}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5580/8258/5a986942ba1f58ae6955841810088d9d"
              }}
              style={styles.ImageBackground_219_423}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5580/8258/5a986942ba1f58ae6955841810088d9d"
              }}
              style={styles.ImageBackground_219_425}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_219_373}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_219_374}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_219_375}
        />
      </View>
      <View style={styles.View_219_376} />
      <View style={styles.View_219_413}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/8ab0/4e2111515be6e0a5698cd2ccdba68377"
          }}
          style={styles.ImageBackground_219_400}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eb1/d85e/290a51dbf93d68cecd2a0c7019333992"
          }}
          style={styles.ImageBackground_219_401}
        />
        <View style={styles.View_219_402}>
          <View style={styles.View_219_403} />
          <View style={styles.View_219_404} />
          <View style={styles.View_219_405} />
          <View style={styles.View_219_406} />
        </View>
        <View style={styles.View_219_407}>
          <View style={styles.View_219_408} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5911/4550/8761ad14fa248d628802a5a15c03618a"
            }}
            style={styles.ImageBackground_219_409}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4235/8ab0/4e2111515be6e0a5698cd2ccdba68377"
          }}
          style={styles.ImageBackground_219_399}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_219_227: {
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
  ImageBackground_219_228: {
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
  View_219_233: {
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
  View_219_234: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_219_235: {
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
  View_219_236: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 7
  },
  Text_219_236: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_237: {
    width: 27,
    minWidth: 27,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 19
  },
  Text_219_237: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_219_238: {
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
  View_219_242: {
    width: 248.99996948242188,
    top: 269.39697265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_219_242: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_219_243: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 468
  },
  View_219_245: {
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
  ImageBackground_219_246: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_248: {
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
  ImageBackground_219_249: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_219_252: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_219_254: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 500
  },
  Text_219_254: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_258: {
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
  ImageBackground_219_259: {
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
  View_219_264: {
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
  View_219_265: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_219_266: {
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
  View_219_267: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 7
  },
  Text_219_267: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_268: {
    width: 49,
    minWidth: 49,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 19
  },
  Text_219_268: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_219_269: {
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
  View_219_273: {
    width: 248.99996948242188,
    top: 168.7904052734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_219_273: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_219_274: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 257
  },
  View_219_276: {
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
  ImageBackground_219_277: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_279: {
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
  ImageBackground_219_280: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_219_283: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_219_285: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 289
  },
  Text_219_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_286: {
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
  View_219_287: {
    flexGrow: 1,
    width: 365,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_219_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_288: {
    flexGrow: 1,
    width: 365,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  Text_219_288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_289: {
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
  ImageBackground_219_290: {
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
  View_219_295: {
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
  View_219_296: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_219_297: {
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
  View_219_298: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 7
  },
  Text_219_298: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_299: {
    width: 47,
    minWidth: 47,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 19
  },
  Text_219_299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_219_300: {
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
  View_219_304: {
    width: 248.99996948242188,
    top: 186.432373046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_219_304: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_219_305: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 294
  },
  View_219_307: {
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
  ImageBackground_219_308: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_310: {
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
  ImageBackground_219_311: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_219_314: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_219_316: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 326
  },
  Text_219_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_317: {
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
  View_219_318: {
    flexGrow: 1,
    width: 365,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_219_318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_319: {
    flexGrow: 1,
    width: 365,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  Text_219_319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_320: {
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
  ImageBackground_219_321: {
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
  View_219_326: {
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
  View_219_327: {
    width: 104.04000091552734,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_219_328: {
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
  View_219_329: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 7
  },
  Text_219_329: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_330: {
    width: 27,
    minWidth: 27,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.040008544921875,
    top: 19
  },
  Text_219_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_219_331: {
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
  View_219_335: {
    width: 248.99996948242188,
    top: 257,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  Text_219_335: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_219_336: {
    width: 28,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 442
  },
  View_219_338: {
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
  ImageBackground_219_339: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_219_341: {
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
  ImageBackground_219_342: {
    width: 20.460052490234375,
    height: 20.48974609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  ImageBackground_219_345: {
    width: 27,
    height: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 0
  },
  View_219_347: {
    width: 65,
    minWidth: 65,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 474
  },
  Text_219_347: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_348: {
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
  View_219_349: {
    flexGrow: 1,
    width: 365,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_219_349: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_350: {
    flexGrow: 1,
    width: 365,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 33
  },
  Text_219_350: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_351: {
    width: 71,
    minWidth: 71,
    height: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 135
  },
  View_219_352: {
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
  View_219_353: {
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
  ImageBackground_219_354: {
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
  View_219_355: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 102
  },
  Text_219_355: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_356: {
    width: 126,
    minWidth: 126,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 103
  },
  Text_219_356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_357: {
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
  View_219_358: {
    width: 231,
    minWidth: 231,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 434
  },
  Text_219_358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_359: {
    width: 297,
    minWidth: 297,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 518
  },
  Text_219_359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_219_360: {
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
  View_219_361: {
    width: 121,
    minWidth: 121,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133,
    top: 54
  },
  Text_219_361: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  ImageBackground_219_362: {
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
  View_219_363: {
    width: 102,
    minWidth: 102,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    top: 101
  },
  Text_219_363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_219_364: {
    width: 28.079742431640625,
    height: 33.09776306152344,
    top: 247.13043212890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307.065185546875
  },
  View_219_365: {
    width: 375,
    minWidth: 375,
    height: 334.92059326171875,
    minHeight: 334.92059326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 477.0794372558594
  },
  View_219_366: {
    width: 375,
    minWidth: 375,
    height: 79,
    minHeight: 79,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 255.92056274414062
  },
  View_219_367: {
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
  View_219_368: {
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
  View_219_369: {
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
  View_219_370: {
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
  ImageBackground_219_371: {
    width: 33,
    minWidth: 33,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 270.9205627441406,
    resizeMode: "cover"
  },
  ImageBackground_219_372: {
    width: 32.14285659790039,
    minWidth: 32.14285659790039,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 323,
    top: 270.9205627441406,
    resizeMode: "cover"
  },
  View_219_428: {
    width: 135.1968231201172,
    minWidth: 135.1968231201172,
    height: 26.085668563842773,
    minHeight: 26.085668563842773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 122.04025268554688,
    top: 0
  },
  ImageBackground_219_424: {
    width: 27.118112564086914,
    minWidth: 27.118112564086914,
    height: 25.215824127197266,
    minHeight: 25.215824127197266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.03934097290039,
    top: 0.434906005859375
  },
  View_219_427: {
    width: 135.1968231201172,
    minWidth: 135.1968231201172,
    height: 26.085668563842773,
    minHeight: 26.085668563842773,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_219_422: {
    width: 27.118112564086914,
    minWidth: 27.118112564086914,
    height: 25.215824127197266,
    minHeight: 25.215824127197266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0.869842529296875
  },
  ImageBackground_219_426: {
    width: 27.118112564086914,
    minWidth: 27.118112564086914,
    height: 25.215824127197266,
    minHeight: 25.215824127197266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.019668579101562,
    top: 0.652374267578125
  },
  ImageBackground_219_423: {
    width: 27.118112564086914,
    minWidth: 27.118112564086914,
    height: 25.215824127197266,
    minHeight: 25.215824127197266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 81.05904006958008,
    top: 0.217437744140625
  },
  ImageBackground_219_425: {
    width: 27.118112564086914,
    minWidth: 27.118112564086914,
    height: 25.215824127197266,
    minHeight: 25.215824127197266,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 108.07871150970459,
    top: 0.000030517578125
  },
  ImageBackground_219_373: {
    width: 30,
    minWidth: 30,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 251,
    top: 270.9205627441406,
    resizeMode: "cover"
  },
  ImageBackground_219_374: {
    width: 28.63157844543457,
    minWidth: 28.63157844543457,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 267.9205627441406,
    resizeMode: "cover"
  },
  ImageBackground_219_375: {
    width: 30,
    minWidth: 30,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 271.9205627441406,
    resizeMode: "cover"
  },
  View_219_376: {
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
  View_219_413: {
    width: 375,
    minWidth: 375,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 590
  },
  ImageBackground_219_400: {
    width: 375,
    minWidth: 375,
    height: 1.1368683772161603e-13,
    minHeight: 1.1368683772161603e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_219_401: {
    width: 7.105427357601002e-15,
    minWidth: 7.105427357601002e-15,
    height: 105,
    minHeight: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    top: 0
  },
  View_219_402: {
    width: 52,
    minWidth: 52,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 22
  },
  View_219_403: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_219_404: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 0,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_219_405: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 32,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_219_406: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 32,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_219_407: {
    width: 89,
    minWidth: 89,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 239,
    top: 19
  },
  View_219_408: {
    width: 89,
    minWidth: 89,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_219_409: {
    width: 15.70588207244873,
    minWidth: 15.70588207244873,
    height: 19.33333396911621,
    minHeight: 19.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.647056579589844,
    top: 19.33331298828125
  },
  ImageBackground_219_399: {
    width: 375,
    minWidth: 375,
    height: 1.1368683772161603e-13,
    minHeight: 1.1368683772161603e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 105
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
