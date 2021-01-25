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
      <View style={styles.View_2_335} />
      <View style={styles.View_2_258}>
        <View style={styles.View_2_259} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1035/f5f1/f38491ceb2becc239bda0637092df79c"
          }}
          style={styles.ImageBackground_2_260}
        />
        <View style={styles.View_2_261}>
          <Text style={styles.Text_2_261}>Search</Text>
        </View>
      </View>
      <View style={styles.View_2_271} />
      <View style={styles.View_2_272} />
      <View style={styles.View_2_273} />
      <View style={styles.View_2_274} />
      <View style={styles.View_2_275}>
        <Text style={styles.Text_2_275}>Yeezy Slides Young Wunna</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
        }}
        style={styles.ImageBackground_2_276}
      />
      <View style={styles.View_2_277} />
      <View style={styles.View_2_278} />
      <View style={styles.View_2_279} />
      <View style={styles.View_2_280} />
      <View style={styles.View_2_281}>
        <Text style={styles.Text_2_281}>Apartment brown.boy</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
        }}
        style={styles.ImageBackground_2_282}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/112b/be22/54e24d0361b677613793a5ec61bba88d"
        }}
        style={styles.ImageBackground_2_283}
      />
      <View style={styles.View_2_284} />
      <View style={styles.View_2_285} />
      <View style={styles.View_2_286} />
      <View style={styles.View_2_287} />
      <View style={styles.View_2_288}>
        <Text style={styles.Text_2_288}>Yeezy Slides Young Wunna</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
        }}
        style={styles.ImageBackground_2_289}
      />
      <View style={styles.View_2_290} />
      <View style={styles.View_2_291} />
      <View style={styles.View_2_292} />
      <View style={styles.View_2_293} />
      <View style={styles.View_2_294}>
        <Text style={styles.Text_2_294}>Obama Tee joe biden </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/112b/be22/54e24d0361b677613793a5ec61bba88d"
        }}
        style={styles.ImageBackground_2_295}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2898/6c5f/1044db6bd3de40971f267c6126cdedbf"
        }}
        style={styles.ImageBackground_2_307}
      />
      <View style={styles.View_2_312} />
      <View style={styles.View_2_313} />
      <View style={styles.View_2_314} />
      <View style={styles.View_2_315} />
      <View style={styles.View_2_316}>
        <Text style={styles.Text_2_316}>Yeezy Slides Young Wunna</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8546/076d/d3212089eb39f585df8b2ff1e1fed930"
        }}
        style={styles.ImageBackground_2_317}
      />
      <View style={styles.View_2_318} />
      <View style={styles.View_2_319} />
      <View style={styles.View_2_320} />
      <View style={styles.View_2_321} />
      <View style={styles.View_2_322}>
        <Text style={styles.Text_2_322}>CFC Shark Hoodie a.nj_an</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/112b/be22/54e24d0361b677613793a5ec61bba88d"
        }}
        style={styles.ImageBackground_2_323}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5cf/fb87/0c20f9157d6513d3cc88a548058638d8"
        }}
        style={styles.ImageBackground_2_336}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1227/13ef/9ad7f2f4473022ac02140c01d80d7b9c"
        }}
        style={styles.ImageBackground_2_337}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfcb/d8fc/e549920f26f4890ca47d85bbbb8f92dc"
        }}
        style={styles.ImageBackground_2_338}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90df/7c83/1dc5ff0d63ab740a782190cd54c3eaaf"
        }}
        style={styles.ImageBackground_2_340}
      />
      <View style={styles.View_112_43}>
        <View style={styles.View_112_44}>
          <Text style={styles.Text_112_44}>Sort By</Text>
        </View>
        <View style={styles.View_112_45}>
          <View style={styles.View_112_46} />
          <View style={styles.View_112_47}>
            <Text style={styles.Text_112_47}>Price: Low-High</Text>
          </View>
        </View>
        <View style={styles.View_112_48}>
          <View style={styles.View_112_49} />
          <View style={styles.View_112_50}>
            <Text style={styles.Text_112_50}>Price: High-Low</Text>
          </View>
        </View>
        <View style={styles.View_112_51}>
          <View style={styles.View_112_52} />
          <View style={styles.View_112_53}>
            <Text style={styles.Text_112_53}>Most Recent</Text>
          </View>
        </View>
        <View style={styles.View_112_54}>
          <View style={styles.View_112_55} />
          <View style={styles.View_112_56}>
            <Text style={styles.Text_112_56}>Least Recent</Text>
          </View>
        </View>
        <View style={styles.View_112_57}>
          <View style={styles.View_112_58} />
          <View style={styles.View_112_59}>
            <Text style={styles.Text_112_59}>Most Popular</Text>
          </View>
        </View>
        <View style={styles.View_112_60}>
          <View style={styles.View_112_61} />
          <View style={styles.View_112_62}>
            <Text style={styles.Text_112_62}>Clear Filters</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_633}>
        <View style={styles.View_2_634}>
          <View style={styles.View_2_635}>
            <View style={styles.View_2_636} />
            <View style={styles.View_2_637} />
          </View>
          <View style={styles.View_2_638} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/843d/c1f7/30f6cb7d5d7a019d8df8df2743958c76"
          }}
          style={styles.ImageBackground_2_640}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f28/0043/5ebe604006d660e1e3fd5771176c7237"
          }}
          style={styles.ImageBackground_2_641}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1db2/41e5/0d53c1cc0a14245f5cf556eb848e4812"
          }}
          style={styles.ImageBackground_2_642}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/113f/a5c6/d12de385d786a2e1720cda68742acd18"
          }}
          style={styles.ImageBackground_2_643}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0883/36af/e94ffadac13666d3a5fe9a33b5612730"
        }}
        style={styles.ImageBackground_29_108}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83a4/2046/6695bccb44a1e1088df62c8050e8688b"
        }}
        style={styles.ImageBackground_80_246}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2_335: {
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
  View_2_258: {
    width: 341,
    minWidth: 341,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 67
  },
  View_2_259: {
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
  ImageBackground_2_260: {
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
  View_2_261: {
    width: 218,
    minWidth: 218,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 1
  },
  Text_2_261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_271: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 237,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_272: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 194,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_273: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 318,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_274: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 318,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_275: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 323
  },
  Text_2_275: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_276: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210,
    top: 197,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_2_277: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 237,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_278: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 194,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_279: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 318,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_280: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 206,
    top: 318,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_281: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 323
  },
  Text_2_281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_282: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 210,
    top: 197,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  ImageBackground_2_283: {
    width: 41,
    minWidth: 41,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 318,
    resizeMode: "cover"
  },
  View_2_284: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 236,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_285: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 193,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_286: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 317,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_287: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 317,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_288: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 322
  },
  Text_2_288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_289: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 196,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_2_290: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 236,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_291: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 193,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_292: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 317,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_293: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 317,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_294: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 322
  },
  Text_2_294: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_295: {
    width: 41,
    minWidth: 41,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 116,
    top: 317,
    resizeMode: "cover"
  },
  ImageBackground_2_307: {
    width: 81,
    minWidth: 81,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 211,
    resizeMode: "cover"
  },
  View_2_312: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 439,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_313: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 396,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_314: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 520,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_315: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 520,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_316: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 525
  },
  Text_2_316: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_317: {
    width: 123,
    minWidth: 123,
    height: 119,
    minHeight: 119,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 399,
    resizeMode: "cover",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11
  },
  View_2_318: {
    width: 116,
    minWidth: 116,
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 439,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9
  },
  View_2_319: {
    width: 130,
    minWidth: 130,
    height: 166,
    minHeight: 166,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 396,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_2_320: {
    width: 130,
    minWidth: 130,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 520,
    backgroundColor: "rgba(80, 199, 242, 1)",
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_2_321: {
    width: 130,
    minWidth: 130,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 520,
    backgroundColor: "rgba(80, 199, 242, 1)"
  },
  View_2_322: {
    width: 193,
    minWidth: 193,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 525
  },
  Text_2_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_323: {
    width: 41,
    minWidth: 41,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 520,
    resizeMode: "cover"
  },
  ImageBackground_2_336: {
    width: 97,
    minWidth: 97,
    height: 111,
    minHeight: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 404,
    resizeMode: "cover"
  },
  ImageBackground_2_337: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 382
  },
  ImageBackground_2_338: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 178
  },
  ImageBackground_2_340: {
    width: 33,
    minWidth: 33,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 193,
    top: 180
  },
  View_112_43: {
    width: 322,
    minWidth: 322,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 115
  },
  View_112_44: {
    width: 111,
    minWidth: 111,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_112_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_45: {
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
  View_112_46: {
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
  View_112_47: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 3
  },
  Text_112_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_48: {
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
  View_112_49: {
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
  View_112_50: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.876220703125,
    top: 2.842041015625
  },
  Text_112_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_51: {
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
  View_112_52: {
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
  View_112_53: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.876220703125,
    top: 2.842041015625
  },
  Text_112_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_54: {
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
  View_112_55: {
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
  View_112_56: {
    width: 76.23710632324219,
    minWidth: 76.23710632324219,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.2279052734375,
    top: 3
  },
  Text_112_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_57: {
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
  View_112_58: {
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
  View_112_59: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.2279052734375,
    top: 3
  },
  Text_112_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_112_60: {
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
  View_112_61: {
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
  View_112_62: {
    width: 76.23711395263672,
    minWidth: 76.23711395263672,
    minHeight: 11.368420600891113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.2279052734375,
    top: 3
  },
  Text_112_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_633: {
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
  View_2_634: {
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
  View_2_635: {
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
  View_2_636: {
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
  View_2_637: {
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
  View_2_638: {
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
  ImageBackground_2_640: {
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
  ImageBackground_2_641: {
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
  ImageBackground_2_642: {
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
  ImageBackground_2_643: {
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
  ImageBackground_29_108: {
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
  ImageBackground_80_246: {
    width: 36,
    minWidth: 36,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 27,
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
