
import React, { Component } from 'react';
import {
  AppRegistry,LayoutAnimation,StatusBar,
  StyleSheet,Image,ScrollView,ListView,Alert,
  Text,TouchableOpacity,TouchableHighlight,
  View,WebView,Dimensions,Platform,BackAndroid,ActivityIndicator
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge ,List, ListItem,Left, Body, Right , Spinner} from 'native-base';
import Share, {ShareSheet} from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get("window");
const SideMenu = require('react-native-side-menu');
import {PullView} from 'react-native-pull';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob';

// Variables


var TopTitle = "OD Apps";
var AppName = "OD Applications";
var Subtitle = "React Native WebView with Lower Tab Menu";
var webadress = 'https://odapps.org/';
var menupos = "left";
var slidemenu = false;
var tabmenu = true;
var spinercolor = "#C70000";

var foottexticon = "#FFFFFF";
var footbtncolor = "#232C3B";
var footacrivebtncolor = "#3a3a3a";
var footupbar = "#232C3B";
var footmenu1 = ['home','Home','web','https://odapps.org/']; //icon,title,link-type,url
var footmenu2 = ['gamepad','Games','web','https://odapps.org/game-apps/'];
var footmenu3 = ['credit-card-alt','Shopping','web','https://odapps.org/ecommerce-apps/'];
var footmenu4 = ['user','Account','web','https://odapps.org/account/'];



var menutext = "#FFFFFF";
var menuicon = "#FFFFFF";
var menulinecolor = "#B20000";
var menubgcolor = "#333333";
var menuactivebgcolor = "#E62117";

var mencount = 4;
var sidemenu1 = ['home','Home','https://www.youtube.com/']; // icon-text-url
var sidemenu2 = ['user-md','Fitness','https://www.youtube.com/user/jlvi13'];
var sidemenu3 = ['film','Trailers','https://www.youtube.com/user/movieclipsTRAILERS'];
var sidemenu4 = ['feed','News','https://www.youtube.com/user/skynews'];
var sidemenu5 = ['arrow-circle-o-up','my menu style',''];
var sidemenu6 = ['trash-o','my menu style',''];

var alertitle = "About my App";
var alertnt1 = "OK";
var alertext = "watch best channels in my UTUBE app";

var galleryk = "url"; // url-fullimage
var gallery = [["https://yt3.ggpht.com/-sT1HsICSTxo/AAAAAAAAAAI/AAAAAAAAAAA/vIbnJ-_KKEE/s100-c-k-no-mo-rj-c0xffffff/photo.jpg","https://www.youtube.com/channel/UCv9rbAUUpoW0k8MP2R4UEJA"],["https://yt3.ggpht.com/-NYvVdBecXao/AAAAAAAAAAI/AAAAAAAAAAA/5KhxX9EOzvk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg","https://www.youtube.com/user/aaronhipps"],["https://yt3.ggpht.com/-xjeq1t5vSyE/AAAAAAAAAAI/AAAAAAAAAAA/kboHvBqgdlo/s88-c-k-no-mo-rj-c0xffffff/photo.jpg","https://www.youtube.com/channel/UCwgURKfUA7e0Z7_qE3TvBFQ"],["https://yt3.ggpht.com/-QeoyK0Cy9ik/AAAAAAAAAAI/AAAAAAAAAAA/BlMXwG9I_Q8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg","https://www.youtube.com/channel/UCoK5NOxkZBLfI_5eqf8Es4Q"],["https://yt3.ggpht.com/-6Zs1omhrM-E/AAAAAAAAAAI/AAAAAAAAAAA/Kf2Tfa9S2y0/s88-c-k-no-mo-rj-c0xffffff/photo.jpg","https://www.youtube.com/channel/UCaXDyLT3Xs4p8B0B79GFZCQ"]];
var galleryrow = 3;



// v 1.1
var showadv = false; // true-false
var adid = "ca-app-pub-3940256099942544/1033173712"; // admob id
var adbanner = false; // true-false
var adinterstitial = false; // true-false
var adinterstitialtime = 10; // check every : second
adinterstitialtime = adinterstitialtime * 1000;
var adinterstitialcount = 1; // how many times











var adinterval = 0;

export default class odapps extends Component {


  constructor(props){
      super(props);

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

console.disableYellowBox = true;
      this.state = {
        page:"splash",
        tpage:0,
        visible: false,
        dataSource: ds.cloneWithRows(gallery),
        cmenu1:false,cmenu2:false,cmenu3:false,cmenu4:false,cmenu5:false,cmenu6:false,
        isOpen:false,fullim:false,
      };



this.topIndicatorRender = this.topIndicatorRender.bind(this);

if(adinterstitial && showadv){
setInterval(() => {
if(adinterval < adinterstitialcount){
  AdMobInterstitial.setAdUnitID(adid);
  //AdMobInterstitial.setTestDeviceID('EMULATOR');
  AdMobInterstitial.requestAd(error => {
        AdMobInterstitial.showAd((error) => {});
      });
}
adinterval++;
}, adinterstitialtime);
}


    }










      renderRow(rowData: string, sectionID: number, rowID: number) {
          return (
            <TouchableOpacity underlayColor='rgba(0,0,0,0)' style={{backgroundColor: '#FFF', width: width/galleryrow, height: width/galleryrow}}
onPress={() => {

if(galleryk == "url"){
  webadress = rowData[1];
  this.setState({tpage:0,kind:"web"});
} else if(galleryk == "fullimage"){
this.setState({fullimu:rowData[0],fullim:true});
}


}}
              >
<View>

<Image
style={{width: width/galleryrow, height: width/galleryrow}}
source={{uri: rowData[0]}}
></Image>

</View>
            </TouchableOpacity>
          );
        }




        onPullRelease(resolve) {
          //do something
          this.myWebView.reload();
          setTimeout(() => {
                  resolve();
              }, 3000);
        }




    onCancel() {
        console.log("CANCEL")
        this.setState({visible:false});
      }
    onOpen() {
        console.log("OPEN")
        this.setState({visible:true});
      }



      onNavigationStateChange(navState) {
        this.setState({
          canGoBack: navState.canGoBack
        });
      }
      onBack() {
        this.myWebView.goBack();
      }



componentWillMount () {
        BackAndroid.addEventListener('hardwareBackPress', this.backHandler);
}
componentWillUnmount () {
  BackAndroid.removeEventListener('hardwareBackPress', this.backHandler);
}
  backHandler = () => {
    if(this.state.canGoBack){
      this.onBack();
      return true;
    }
  }





  topIndicatorRender(pulling, pullok, pullrelease) {
          const hide = {position: 'absolute', left: 10000};
          const show = {position: 'relative', left: 0};
          setTimeout(() => {
              if (pulling) {
                  this.txtPulling && this.txtPulling.setNativeProps({style: show});
                  this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                  this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
              } else if (pullok) {
                  this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                  this.txtPullok && this.txtPullok.setNativeProps({style: show});
                  this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
              } else if (pullrelease) {
                  this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                  this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                  this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
              }
          }, 1);
  		return (
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                  <ActivityIndicator size="small" color="gray" />
                  <Text ref={(c) => {this.txtPulling = c;}}> Pull Down to Refresh . . .</Text>
                  <Text ref={(c) => {this.txtPullok = c;}}> Release to Refresh . . .</Text>
                  <Text ref={(c) => {this.txtPullrelease = c;}}> Loading . . .</Text>
      		</View>
          );
  	}







  render() {


    let shareOptions = {
          title: "React Native",
          message: "Hola mundo",
          url: "http://facebook.github.io/react-native/",
          subject: "Share Link" //  for email
        };

    let shareImageBase64 = {
          title: "React Native",
          message: "Hola mundo",
          url: REACT_ICON,
          subject: "Share Link" //  for email
        };
















    if(this.state.page == "splash") {



    return(

      <View style={{flex:1,justifyContent: 'center', alignItems: 'center' , backgroundColor:"#E62117"}}>

    <View style={{justifyContent: 'center', alignItems: 'center' ,flex:0.7}}></View>
    <View style={{justifyContent: 'center', alignItems: 'center' ,flex:1}}>
      <Image onLayout={() => {
        setTimeout(() => {
          LayoutAnimation.easeInEaseOut();
           this.setState({page:"home"})
         }, 2000);
        }} style={{width: 0.4*width}} resizeMode={Image.resizeMode.contain}
        source={require('./files/logo.png')}
      />
    </View>



    <View style={{justifyContent: 'center', alignItems: 'center' ,flex:0.7}}></View>

      </View>

    );



    }















var Spiner = (<View></View>);
if(this.state.wload){
  Spiner = (<Spinner style={{position:"absolute",bottom:75,left:width/2.2}} color={spinercolor} ></Spinner>);
}









var smenu1 = (<View></View>);
var smenu2 = (<View></View>);
var smenu3 = (<View></View>);
var smenu4 = (<View></View>);
var smenu5 = (<View></View>);
var smenu6 = (<View></View>);



if(mencount > 0){

smenu1 = (<TouchableOpacity onPress={() => {
  this.setState({cmenu1:true,cmenu2:false,cmenu3:false,cmenu4:false,cmenu5:false,cmenu6:false,});
  webadress = sidemenu1[2];
  this.setState({kind:"web"});this.setState({ isOpen: !this.state.isOpen, });
}}
  style={this.state.cmenu1 ? mclick() : midle()}>

  <Text style={{ color:menutext , flex:4 , alignSelf:"center" , textAlign:"center" , fontWeight:"bold",marginRight:20}}>{sidemenu1[1]}</Text>
  <FontAwesome name={sidemenu1[0]} style={{fontSize:30, color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginLeft:20}} ></FontAwesome>

</TouchableOpacity>);


if(mencount > 1){

smenu2 = (<TouchableOpacity onPress={() => {
  this.setState({cmenu1:false,cmenu2:true,cmenu3:false,cmenu4:false,cmenu5:false,cmenu6:false,});
  webadress = sidemenu2[2];
  this.setState({kind:"web"});this.setState({ isOpen: !this.state.isOpen, });
}}
  style={this.state.cmenu2 ? mclick() : midle()}>

  <Text style={{ color:menutext , flex:4 , alignSelf:"center" , textAlign:"center", fontWeight:"bold",marginRight:20}}>{sidemenu2[1]}</Text>
  <FontAwesome name={sidemenu2[0]} style={{fontSize:25, color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginLeft:20}} ></FontAwesome>

</TouchableOpacity>);


if(mencount > 2){

smenu3 = (<TouchableOpacity onPress={() => {
  this.setState({cmenu1:false,cmenu2:false,cmenu3:true,cmenu4:false,cmenu5:false,cmenu6:false,});
  webadress = sidemenu3[2];
  this.setState({kind:"web"});this.setState({ isOpen: !this.state.isOpen, });
}}
  style={this.state.cmenu3 ? mclick() : midle()}>

  <Text style={{ color:menutext , flex:4 , alignSelf:"center" , textAlign:"center", fontWeight:"bold",marginRight:20}}>{sidemenu3[1]}</Text>
  <FontAwesome name={sidemenu3[0]} style={{fontSize:25, color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginLeft:20}} ></FontAwesome>

</TouchableOpacity>);


if(mencount > 3){

smenu4 = (<TouchableOpacity onPress={() => {
  this.setState({cmenu1:false,cmenu2:false,cmenu3:false,cmenu4:true,cmenu5:false,cmenu6:false,});
  webadress = sidemenu4[2];
  this.setState({kind:"web"});this.setState({ isOpen: !this.state.isOpen, });
}}
  style={this.state.cmenu4 ? mclick() : midle()}>

  <Text style={{ color:menutext , flex:4 , alignSelf:"center" , textAlign:"center", fontWeight:"bold",marginRight:20}}>{sidemenu4[1]}</Text>
  <FontAwesome name={sidemenu4[0]} style={{fontSize:25, color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginLeft:20}} ></FontAwesome>

</TouchableOpacity>);


if(mencount > 4){

smenu5 = (<TouchableOpacity onPress={() => {
  this.setState({cmenu1:false,cmenu2:false,cmenu3:false,cmenu4:false,cmenu5:true,cmenu6:false,});
  webadress = sidemenu5[2];
  this.setState({kind:"web"});this.setState({ isOpen: !this.state.isOpen, });
 }}
  style={this.state.cmenu5 ? mclick() : midle()}>

  <Text style={{ color:menutext , flex:4 , alignSelf:"center" , textAlign:"center", fontWeight:"bold",marginRight:20}}>{sidemenu5[1]}</Text>
  <FontAwesome name={sidemenu5[0]} style={{fontSize:25, color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginLeft:20}} ></FontAwesome>

</TouchableOpacity>);


if(mencount > 5){

smenu6 = (<TouchableOpacity onPress={() => {
  this.setState({cmenu1:false,cmenu2:false,cmenu3:false,cmenu4:false,cmenu5:false,cmenu6:true,});
  webadress = sidemenu6[2];
  this.setState({kind:"web"});this.setState({ isOpen: !this.state.isOpen, });
 }}
  style={this.state.cmenu6 ? mclick() : midle()}>

  <Text style={{ color:menutext , flex:4 , alignSelf:"center" , textAlign:"center", fontWeight:"bold",marginRight:20}}>{sidemenu6[1]}</Text>
  <FontAwesome name={sidemenu6[0]} style={{fontSize:25, color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginLeft:20}} ></FontAwesome>

</TouchableOpacity>);






}



}



}



}



}



}






var smenu = (<View style={{backgroundColor:menubgcolor,marginTop:(Platform.OS === 'ios' && slidemenu ? 20 : 0)}} >

<View style={{height:200,flexDirection:"column",justifyContent: 'center', backgroundColor:menubgcolor,borderBottomWidth:2 ,borderColor:menuactivebgcolor  }}>

  <Image  style={{width: 0.25*width , height:80, margin:10, alignSelf:"center" , textAlign:"center"}} resizeMode={Image.resizeMode.contain}
    source={require('./files/logo.png')}
  ></Image>

<Text style={{ color:menutext , height:30 , alignSelf:"center" , textAlign:"center",marginTop:12 , fontWeight:"bold" }}>{AppName}</Text>
<Text style={{ color:menutext , height:20 , alignSelf:"center" , textAlign:"center",marginTop:-6}}>{Subtitle}</Text>

</View>






{smenu1}
{smenu2}
{smenu3}
{smenu4}
{smenu5}
{smenu6}







<View style={{height:500, backgroundColor:menubgcolor}}>

</View>













          {/*<TouchableOpacity onPress={()=>{
            Share.open(shareOptions);
          }}>
            <View style={styles.instructions}>
              <Text>Simple Share</Text>
            </View>
          </TouchableOpacity>*/}


</View>);







var tmenu = (<View></View>);



tmenu = (
<View style={{width:width,height:50,backgroundColor:menubgcolor,marginTop:(Platform.OS === 'ios' && slidemenu ? 20 : 0), flexDirection:(menupos=="left" ? "row" : "row-reverse")  }}>

  <TouchableOpacity onPress={() => {this.setState({ isOpen: !this.state.isOpen, });}}  style={{  backgroundColor:menubgcolor ,flex:1 , alignItems:"center", justifyContent:"center", flexDirection:"row"}} >
    <Entypo name="menu" style={{ color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginHorizontal:10, fontSize:30}} ></Entypo>
  </TouchableOpacity>

<View style={{  backgroundColor:menuactivebgcolor ,flex:4 , alignItems:"center", justifyContent:"center", flexDirection:"row"}} >
    <Text style={{ color:menutext , flex:4 , alignSelf:"center" , textAlign:"center" , fontSize:20 , fontWeight:"bold"}}>{TopTitle}</Text>
</View>

<TouchableOpacity onPress={() => {
  Alert.alert(
    alertitle,
    alertext,
    [
      {text: alertnt1, onPress: () => {  } },
    ],
    { cancelable: false }
  )

  }} style={{  backgroundColor:menubgcolor ,flex:1 , alignItems:"center" , justifyContent:"center", flexDirection:"row"}} >
  <MaterialIcons name="info-outline" style={{ color:menuicon , flex:1, alignSelf:"center" , textAlign:"center",marginHorizontal:10, fontSize:28}} ></MaterialIcons>
</TouchableOpacity>

</View>
);


var admob = (<View style={{height:0}}></View>);
if(adbanner && showadv){
var admob = (
  <View>
    <AdMobBanner
      style={{backgroundColor:"#fff"}}
    bannerSize="fullBanner"
    adUnitID={adid}
    testDeviceID="EMULATOR"
    didFailToReceiveAdWithError={this.bannerError} />
  {/*<PublisherBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3940256099942544/6300978111"
      testDeviceID="EMULATOR"
      didFailToReceiveAdWithError={this.bannerError}
      admobDispatchAppEvent={this.adMobEvent} />*/}
  </View>
);
}


var fmenu = (<View></View>);
if(tabmenu){








  var tmen1 = (<Button style={{backgroundColor:footbtncolor , height:60 , borderRadius:0}} onPress={() => {this.setState({tpage:1,kind:footmenu1[2]});webadress=footmenu1[3];}}>
      <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} name={footmenu1[0]} ></FontAwesome>
      <Text style={{color:foottexticon}} >{footmenu1[1]}</Text>
  </Button>);
  var tmen2 = (<Button style={{backgroundColor:footbtncolor , height:60 , borderRadius:0}} onPress={() => {this.setState({tpage:2,kind:footmenu2[2]});webadress=footmenu2[3];}}>
      <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} name={footmenu2[0]} ></FontAwesome>
      <Text style={{color:foottexticon}} >{footmenu2[1]}</Text>
  </Button>);
  var tmen3 = (<Button style={{backgroundColor:footbtncolor , height:60 , borderRadius:0}} onPress={() => {this.setState({tpage:3,kind:footmenu3[2]});webadress=footmenu3[3];}}>
      <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} name={footmenu3[0]} ></FontAwesome>
      <Text style={{color:foottexticon}} >{footmenu3[1]}</Text>
  </Button>);
  var tmen4 = (<Button style={{backgroundColor:footbtncolor , height:60 , borderRadius:0}}  onPress={() => {this.setState({tpage:4,kind:footmenu4[2]});webadress=footmenu4[3];}}>
      <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} name={footmenu4[0]} ></FontAwesome>
      <Text style={{color:foottexticon}} >{footmenu4[1]}</Text>
  </Button>);







if(this.state.tpage == 1) {
tmen1 = (<Button style={{backgroundColor:footacrivebtncolor , height:60 , borderRadius:0}} active >
    <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} active name={footmenu1[0]} ></FontAwesome>
    <Text style={{color:foottexticon}} >{footmenu1[1]}</Text>
</Button>);
}
if(this.state.tpage == 2) {
tmen2 = (<Button style={{backgroundColor:footacrivebtncolor , height:60 , borderRadius:0}} active >
    <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} active name={footmenu2[0]} ></FontAwesome>
    <Text style={{color:foottexticon}} >{footmenu2[1]}</Text>
</Button>);
}
if(this.state.tpage == 3) {
tmen3 = (<Button style={{backgroundColor:footacrivebtncolor , height:60 , borderRadius:0}} active >
    <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} active name={footmenu3[0]} ></FontAwesome>
    <Text style={{color:foottexticon}} >{footmenu3[1]}</Text>
</Button>);
}
if(this.state.tpage == 4) {
tmen4 = (<Button style={{backgroundColor:footacrivebtncolor , height:60 , borderRadius:0 }} active >
    <FontAwesome style={{color:foottexticon,fontSize:25,marginBottom:3}} active name={footmenu4[0]} ></FontAwesome>
    <Text style={{color:foottexticon}} >{footmenu4[1]}</Text>
</Button>);
}


fmenu = (<View style={{width:width,height:60}}>
                <FooterTab style={{flex: 1,backgroundColor:"#fff" ,borderTopWidth:4 , borderColor:footupbar}}>
                    {tmen1}
                    {tmen2}
                    {tmen3}
                    {tmen4}
                </FooterTab>
</View>);
}





var webview = (
<PullView topIndicatorRender={this.topIndicatorRender} onPullRelease={this.onPullRelease.bind(this)} style={{flex: 1,backgroundColor:"#FFF",marginTop:(Platform.OS === 'ios' && !slidemenu ? 20 : 0)}}>
  <WebView
ref={myWebView => { this.myWebView = myWebView; }}
source={{uri: webadress}}
style={{width: width,height:height}}
javaScriptEnabled={true}
domStorageEnabled={true}
onLoadStart={() => {
  this.setState({wload:true});
}}
onLoadEnd={() => {
  this.setState({wload:false});
}}
onNavigationStateChange= {this.onNavigationStateChange.bind(this)}
renderError={() => {
  return (
  <View style={{flex:1,alignItems:"center", justifyContent:"center",marginTop:50}}>
    <Text>
    No internet connection
    </Text>
    <Button style={{alignSelf:"center",marginTop:20}} onPress={() => {this.myWebView.reload()}} light><Text> Reload </Text></Button>
  </View>
)
}}
/>
</PullView>
);

var webviewback = (<View></View>);
var fullimage = (<View></View>);

if(this.state.kind == "gallery"){
webview = (<ListView
style={{flex: 1, backgroundColor:"#fff",marginTop:(Platform.OS === 'ios' && !slidemenu ? 20 : 0) }}
contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
dataSource={this.state.dataSource}
renderRow={this.renderRow.bind(this)}
></ListView>);
if(this.state.fullim && galleryk == "fullimage"){
fullimage = (<View style={{width: width ,height:height ,position:"absolute",top:0,right:0,backgroundColor:"rgba(0, 0, 0 , 0.8)" ,}}>

  <Image  style={{flex:1 , width: width  , alignSelf:"center" , textAlign:"center"}} resizeMode={Image.resizeMode.contain}
    source={{uri: this.state.fullimu}}
        ></Image>

      <TouchableOpacity onPress={() => { this.setState({fullim: false})}} style={{width: width/9, alignItems:"center" , justifyContent:"center" ,height:width/9  ,position:"absolute",top:width/15 ,right:width/15 ,backgroundColor:"rgba(255, 255, 255 , 0.2)" ,borderRadius:width/18 , }}>
  <Entypo style={{color:foottexticon, alignSelf:"center" , fontSize:30, color:"rgba(255, 255, 255 , 0.6)" , marginTop:2}} active name="cross" ></Entypo>
</TouchableOpacity>

</View>);
}

}else{
  webviewback = (<TouchableOpacity
disabled={!this.state.canGoBack} onPress={this.onBack.bind(this)}
    style={{width: 45, alignItems:"center" , justifyContent:"center" ,height:45  ,
      position:"absolute",bottom:width/3 ,right:-2 ,backgroundColor:"rgba(0, 0, 0 , 0.2)" ,borderRadius:2 }}>
  <Text style={{fontWeight:"bold" , fontSize:16 , color:"rgb(256, 256, 256 )"}} ><FontAwesome name="arrow-left" style={{fontSize:30, color:"#FFF" , flex:1, alignSelf:"center" , textAlign:"center"}} ></FontAwesome></Text>
  </TouchableOpacity>);
}




if(slidemenu){

    return (
      <SideMenu menu={smenu} menuPosition={menupos}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => { this.setState({ isOpen, }); }}
        style={{marginTop:(Platform.OS === 'ios' && slidemenu ? 20 : 0)}}
        >

        <StatusBar
             backgroundColor="#000000"
             barStyle="default"
           ></StatusBar>


        <View style={styles.container}>




{webview}



{fmenu}

{Spiner}




{webviewback}


        </View>
      </SideMenu>
    );

}else{

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>

{webview}

{fmenu}

{Spiner}



      </View>
    </View>
  );

}






  }









}



//  twitter icon
const TWITTER_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABvFBMVEUAAAAA//8AnuwAnOsAneoAm+oAm+oAm+oAm+oAm+kAnuwAmf8An+0AqtUAku0AnesAm+oAm+oAnesAqv8An+oAnuoAneoAnOkAmOoAm+oAm+oAn98AnOoAm+oAm+oAmuoAm+oAmekAnOsAm+sAmeYAnusAm+oAnOoAme0AnOoAnesAp+0Av/8Am+oAm+sAmuoAn+oAm+oAnOoAgP8Am+sAm+oAmuoAm+oAmusAmucAnOwAm+oAmusAm+oAm+oAm+kAmusAougAnOsAmukAn+wAm+sAnesAmeoAnekAmewAm+oAnOkAl+cAm+oAm+oAmukAn+sAmukAn+0Am+oAmOoAmesAm+oAm+oAm+kAme4AmesAm+oAjuMAmusAmuwAm+kAm+oAmuoAsesAm+0Am+oAneoAm+wAmusAm+oAm+oAm+gAnewAm+oAle0Am+oAm+oAmeYAmeoAmukAoOcAmuoAm+oAm+wAmuoAneoAnOkAgP8Am+oAm+oAn+8An+wAmusAnuwAs+YAmegAm+oAm+oAm+oAmuwAm+oAm+kAnesAmuoAmukAm+sAnukAnusAm+oAmuoAnOsAmukAqv9m+G5fAAAAlHRSTlMAAUSj3/v625IuNwVVBg6Z//J1Axhft5ol9ZEIrP7P8eIjZJcKdOU+RoO0HQTjtblK3VUCM/dg/a8rXesm9vSkTAtnaJ/gom5GKGNdINz4U1hRRdc+gPDm+R5L0wnQnUXzVg04uoVSW6HuIZGFHd7WFDxHK7P8eIbFsQRhrhBQtJAKN0prnKLvjBowjn8igenQfkQGdD8A7wAAAXRJREFUSMdjYBgFo2AUDCXAyMTMwsrGzsEJ5nBx41HKw4smwMfPKgAGgkLCIqJi4nj0SkhKoRotLSMAA7Jy8gIKing0KwkIKKsgC6gKIAM1dREN3Jo1gSq0tBF8HV1kvax6+moG+DULGBoZw/gmAqjA1Ay/s4HA3MISyrdC1WtthC9ebGwhquzsHRxBfCdUzc74Y9UFrtDVzd3D0wtVszd+zT6+KKr9UDX749UbEBgULIAbhODVHCoQFo5bb0QkXs1RAvhAtDFezTGx+DTHEchD8Ql4NCcSyoGJYTj1siQRzL/JKeY4NKcSzvxp6RmSWPVmZhHWnI3L1TlEFDu5edj15hcQU2gVqmHTa1pEXJFXXFKKqbmM2ALTuLC8Ak1vZRXRxa1xtS6q3ppaYrXG1NWjai1taCRCG6dJU3NLqy+ak10DGImx07LNFCOk2js6iXVyVzcLai7s6SWlbnIs6rOIbi8ViOifIDNx0uTRynoUjIIRAgALIFStaR5YjgAAAABJRU5ErkJggg==";

//  facebook icon
const FACEBOOK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEUAAAAAQIAAWpwAX5kAX5gAX5gAX5gAXJwAXpgAWZ8AX5gAXaIAX5gAXpkAVaoAX5gAXJsAX5gAX5gAYJkAYJkAXpoAX5gAX5gAX5kAXpcAX5kAX5gAX5gAX5YAXpoAYJijtTrqAAAAIHRSTlMABFis4vv/JL0o4QvSegbnQPx8UHWwj4OUgo7Px061qCrcMv8AAAB0SURBVEjH7dK3DoAwDEVRqum9BwL//5dIscQEEjFiCPhubziTbVkc98dsx/V8UGnbIIQjXRvFQMZJCnScAR3nxQNcIqrqRqWHW8Qd6cY94oGER8STMVioZsQLLnEXw1mMr5OqFdGGS378wxgzZvwO5jiz2wFnjxABOufdfQAAAABJRU5ErkJggg==";

//  whatsapp icon
const WHATSAPP_ICON = "data:image/png;base64,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";

//  gplus icon
const GOOGLE_PLUS_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACQ1BMVEUAAAD/RDP/STX9Sjb+STT+SjX+SjX+SjX+STT/SzP/Sjb/SzX/VVX/SDb+SDP+SjX9RzT9STT9SjT+STX+SjT9SjT/SST/TTP+SjX+SjX/RDP/RzP+SjX+SjX/STf9SDX/SjX/TU3+Sjb+SjX/Qyz/Szb+SjX/TTP+SjX9STX+SjP/TTX9Szb+Szb/YCD/SzX/SzX+Sjb+STX/TTX/SzX/Szb/TDT+SjX9SzX/STf+TDX/SjT9SzX9Szb+SjX/SjX/SzX/STT9SjT9TDT+SDT/VQD9STX/STX9SjX+SjX9STX+SzT/UDD9Sjb+SjX9RzT/QED+SjT+SjX/XS7+SjX/Ui7/RC3+SjX/TTz/RzP+SjX/TTP/STf+SjX/STT/RjP+Sjb/SzX/Szz/Rjr/RzL+RzP+SjX/Szf/SjX9Sjb+SjX+Sjb+SjX+SjX+SjX/STf/SjT/SjT9SjX9SzT+RzT+STT/STT+SjX/STP/Tjf+SjX/Szb/SjX/STX9SjX/SjT/AAD/SjH/STb+SzX+Sjb+SjT9SDT+Sjb+SjX9STf9STT/SDX/TDf+STb/TjT/TjH+SjX+SDT/Sjb9SzX9RzX+TDT/TUD/STX+SjX+STX/VTn/QjH/SjX+SjX/Ri7+Szb/TTP+SjX/SDX/STT9SjX+SjX/SDL/TjT9Sjb/RjL+SjX9SzX/QED/TDT+SjX+SjX9STX/RjX/VSv/Rzb/STX/ORz/UDD9SzX+Sjb/STT9SzP+SzX+SjX+SjX9Szb/Ti//ZjPPn7DtAAAAwXRSTlMAD1uiy+j5/8FBZHQDY9zvnYSc5dGhBwr+1S0Zqu44mz4KtNkXY7Yo8YLcfp3bCGZ+sLhWaks2z4wO6VOklrtWRFSXos4DoD+D/ZnoEKasjwS7+gvfHC3kHmjtMlTXYjfZXBEWa+/nQRiK5u7c8vVGRWepp6+5eulQF/dfSHSQdQEfdrzguZzm+4KSQyW1JxrAvCaCiLYUc8nGCR9h6gvzFM41MZHhYDGYTMejCEDi3osdBj1+CSCWyGyp1PC3hUEF/yhErwAAAjFJREFUSMft1tdfE0EQB/ADJD+JKAomHoqKxhJLFCnSpdgIxobYgqhYaJKIHVQUsSFiBSuCvWPv3T/N2ZPD3EucvVcyL3sz2W8+l73ZvShKKEIxcCIsPGJQpAV9MThK1KzAEAaNHjosZviI2DgBR9psVrvCx6Ni1fjRNI5JIDx2nF5m4ejxsCRqVxMmknZMksGTVUzpu5zqJD1NAodNB2boyUzCrlnK7CSKOUCyGJOC4BSan6onaWLN5irpCIwgOAMBt5eZRVk2H+fQx7n92TzK8pT8AopCwCbGgiB4Pk1fsFDPFlG2mL9gRTTdnahnxcASDx/nq6SX6tkyYLnEo1qxknBJ2t9kVSlcq2WaZM1a0qXrtOv18Jbp9Q3l5Rv/39ubHKQ3V2xRtm7bXlkluyGra2qJ76jzwb/TxH721O9K3U1fsMfsgbCXcLFZvI+wL8ok3i/6+ECDOdxYJ/TBQ9Kw+nDTkRyHtodKjjbLyGMtx304cTKi8NRpoVutfJp5xgtv21ntxGw/J7T3PNdeuAhcuqxn9o5W0p1Ma78CpF/9lzdfI3ydiStobrjhIL4BRN7k4WRa3i5D5RbQ3cPDMcDtO4ZKGXCXedtuQL1nqNwHHjDxQ/rNGYbKI/gfM/ETwv6ngafSM3RwH3O7eK86Wzz9L582PO9lN9iLl6KpXr2uf9P7tvHde4e75oNEZ3/85NQ2hKUyzg/1c57klur68vXbd9XtdP34+et36C9WKAZo/AEHHmXeIIIUCQAAAABJRU5ErkJggg==";

//  email icon
const EMAIL_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABC1BMVEUAAAA/Pz8/Pz9AQEA/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz9AQEA+Pj5AQEA/Pz87Ozs7Ozs/Pz8+Pj47OztAQEA/Pz89PT01NTVBQUFBQUE/Pz8/Pz8+Pj4/Pz9BQUE+Pj4/Pz8/Pz89PT0+Pj4/Pz9BQUFAQEA9PT09PT0/Pz87Ozs9PT05OTk/Pz8+Pj4/Pz9AQEA/Pz8/Pz8/Pz8/Pz+AgIA+Pj4/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz9AQEA+Pj4/Pz8+Pj4/Pz85OTk/Pz8/Pz8/Pz8/Pz88PDw9PT0/Pz88PDw8PDw+Pj45OTlktUJVAAAAWXRSTlMA/7N4w+lCWvSx8etGX/XlnmRO7+1KY/fjOGj44DU7UvndMec/VvLbLj7YKyiJdu9O7jZ6Um1w7DnzWQJz+tpE6uY9t8D9QehAOt7PVRt5q6duEVDwSEysSPRjqHMAAAEfSURBVEjH7ZTXUgIxGEa/TwURUFyKYgMURLCvbe2gYAV7ff8nMRksgEDiKl7lXOxM5p8zO3s2CWAwGAx/CjXontzT25Y+pezxtpv2+xTygJ+BYOvh4BBDwx1lKxxhNNZqNjLK+JjVWUYsykj4+2h8gpNTUMkIBuhPNE+SKU7PQC3D62E60ziYzXIuBx0Z+XRTc9F5fgF6MhKNzWXnRejKWGJdc9GZy8AP3kyurH52Ju01XTkjvnldNN+Qi03RecthfFtPlrXz8rmzi739Ax7mUCjy6FhH/vjPonmqVD6pdT718excLX/tsItLeRAqtc7VLIsFlVy/t6+ub27v7t8XD490niy3p+rZpv3i+jy/Or+5SUrdvcNcywaDwfD/vAF2TBl+G6XvQwAAAABJRU5ErkJggg==";

//  clipboard icon
const CLIPBOARD_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAB5lBMVEUAAAA8PDw+Pj4/Pz8/Pz8/Pz8/Pz8+Pj47OzsAAAA5OTk+Pj4/Pz8/Pz8+Pj49PT0/Pz8/Pz85OTlAQEA/Pz87Ozs+Pj4+Pj4/Pz8/Pz8/Pz8zMzNBQUE/Pz8/Pz8/Pz9AQEA7Ozs9PT0/Pz9AQEA+Pj4/Pz8+Pj4AAABAQEA/Pz87OztBQUE/Pz8+Pj4zMzNDQ0M/Pz89PT03Nzc/Pz8/Pz8/Pz8/Pz88PDw8PDwAAABCQkI7Ozs9PT0/Pz9AQEA/Pz8uLi4rKytAQEA/Pz89PT0+Pj4/Pz8/Pz8/Pz9CQkJAQEA/Pz9CQkI/Pz8/Pz8/Pz8+Pj49PT0/Pz8yMjI/Pz88PDw/Pz9BQUE8PDw/Pz9AQEA/Pz8/Pz8/Pz89PT0/Pz9CQkI9PT1EREQ9PT08PDw4ODg+Pj6AgIA/Pz8/Pz82NjZVVVU7Ozs/Pz81NTVAQEA/Pz8+Pj49PT1BQUE/Pz8/Pz8/Pz8vLy8/Pz87OztAQEA3Nzc9PT0+Pj4/Pz89PT0/Pz8/Pz89PT1AQEA9PT04ODgzMzM/Pz8/Pz9AQEA/Pz9AQEA/Pz83Nzc9PT0/Pz9AQEA/Pz8+Pj4+Pj5AQEA/Pz89PT1FRUU5OTk/Pz8/Pz8+Pj47Ozs/Pz89PT08PDw+Pj6z1Mg0AAAAonRSTlMAEXTG8/7pslICKMn//J0u2LcSLNu9Y0523KoKL9b7hggauZsEOuJ/ARS7VifkiwUX0bEq1f1p6KGQAz4NpnpY8AsGtMIyb46NbSOMcRuh+fGTFc0z1yKFKy/dpKff1CqKMoYPp+lAgAKd6kIDhdorJJExNjflktMr3nkQDoXbvaCe2d2EijIUn3JsbjDDF1jjOOdWvIDhmhoJfWrAK7bYnMgx8fGWAAACNUlEQVRIx+2W6V8SURSGBxEVeydMbVER1DCwRNTCEhMNsywqExXcUrNVU9NK2wy1fd9sMyvrP+1cmYH5eK5f5f3APef85hnuvfPeM6MoaaW1dWXKMGdasrJzrJtgc7dhQ+p2kzRry4OuHfmSbEEhUTt37d5TRGNxiRRrLwUczjKKyiuI3uuSYCv3ARa3ZyOu2k/xAT5b7aXra3xaVlsH1LPZg4cAvzM10wbgMBs+QqtsDKTyJroXGz7a7AgandECtPLXfKzFY8hCbcBxFudpP3Gy49RpQ8UXtgBnOOzZc53CU+e7Ism7uYnt5ji0p1e3pDmqzTnmAEr7GGz/AGEDg0MXaBgeERXrKIWFBQz2IvlYHbtEh/EycOUqVQLXVCDPxvGz+MPYdRGWjE/coGFyyg9M32SwM8PkydlQIim7JX6DxHpvM9g7c+SjoLESmqd9vjvDYO9NEzs1aahYY7SK+3Zm31Ddmp8jDx4qysIj2qt4O6dviH4xqvk5soj40vJjqjzh7HOf6BtPtb1SnulG6X3O6bHdqb5BejHbKtDOl+UcQ78iNuwzFKKvwx1v3npYJ+kd0BYynqz3Eu2OZvnB+IyCRVE+TD5qSmWBRuDjJzb8GWhIJq4xv36kWKoH6mr1vlFDnvRW86e9Qtd/qUrs1VeKv1VKbJjrOz3Wih8UrTpF37ArMlotFmfg58raLxrjvyXfifl/ku/TdZsiK9NfNcH+y93Ed4A1JzvLkmnOMClppbV19R+iQFSQ2tNASwAAAABJRU5ErkJggg==";

//  more icon
const MORE_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEUAAABEREQ9PT0/Pz8/Pz9AQEA7OzszMzM/Pz8/Pz9FRUU/Pz8/Pz9VVVUAAAA/Pz8+Pj4/Pz8/Pz9BQUFAQEA/Pz+e9yGtAAAAFnRSTlMAD5bv9KgaFJ/yGv+zAwGltPH9LyD5QNQoVwAAAF5JREFUSMft0EkKwCAQRFHHqEnUON3/qkmDuHMlZlVv95GCRsYAAAD+xYVU+hhprHPWjDy1koJPx+L63L5XiJQx9PQPpZiOEz3n0qs2ylZ7lkyZ9oyXzl76MAAAgD1eJM8FMZg0rF4AAAAASUVORK5CYII=";


const REACT_ICON = 'data:image/png;base64,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';


mclick = function(options) {

if(menupos == "right"){

  return {
   height:50,
   flexDirection:"row",
   justifyContent: 'center',
   backgroundColor:menuactivebgcolor,
   borderRightWidth:5 ,
   borderColor:menulinecolor
  }

}else{

  return {
   height:50,
   flexDirection:"row-reverse",
   justifyContent: 'center',
   backgroundColor:menuactivebgcolor,
   borderLeftWidth:5 ,
   borderColor:menulinecolor
  }

}

 }



 midle = function(options) {

 if(menupos == "right"){

   return {
    height:50,
    flexDirection:"row",
    justifyContent: 'center',
    backgroundColor:menubgcolor,
   }

 }else{

   return {
    height:50,
    flexDirection:"row-reverse",
    justifyContent: 'center',
    backgroundColor:menubgcolor,
   }

 }

  }






const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  midle:{height:50,flexDirection:"row",justifyContent: 'center', backgroundColor:menubgcolor, },
  mclick:{height:50,flexDirection:"row",justifyContent: 'center', backgroundColor:menuactivebgcolor, borderRightWidth:5 , borderColor:menulinecolor,},
});

AppRegistry.registerComponent('odapps', () => odapps);
