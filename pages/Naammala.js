import React, {useState,  useEffect} from 'react';
import { View, Text,ActivityIndicator ,Dimensions,Image,FlatList,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFonts} from "expo-font";
import {  Button } from 'react-native';
import { BackHandler } from 'react-native';

import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const SampleTrack = require('../assets/audio/naammala.mp3');


const myIcon = <Icon name="rocket" size={30} color="#900" />;


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 850; // Standard width (e.g., iPhone 6/7/8)

const scaleFontSize = (fontSize) => {
  const ratio = fontSize / SCALE;
  return ratio * SCREEN_WIDTH;
};

const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size

};

export default function Naammala() {
  const fsize=scaleFontSize(50);
  const [dynamicFontSize, setFontSize] = useState(fsize); // Initial font size

  //const dynamicFontSize = scaleFontSize(50);
  const fontname='Kruti-Dev';
  let [fontsLoaded]=useFonts({
    'Kruti-Dev':require('./../assets/fonts/Kruti-Dev-012.ttf'),
    'Kruti-Dev680':require('./../assets/fonts/Kruti-Dev-680.ttf')
  
  });

  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const sound = React.useRef(new Audio.Sound());

  React.useEffect(() => {
    LoadAudio();
  }, []);
  const backAction = () => {
    PauseAudio();
      // Your custom logic here
      // For example, ask the user if they want to exit the app
      // and return true to prevent the default back action.
      // If you want to allow the default back action, return false.
      return false;
    };

 React.useEffect(() => {
  
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove(); // Clean up the event listener
  }, []);

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };
  
  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync(SampleTrack, {}, true);
        if (result.isLoaded === false) {
          SetLoading(false);
          console.log('Error in Loading Audio');
        } else {
          SetLoading(false);
          SetLoaded(true);
        }
      } catch (error) {
        console.log(error);
        SetLoading(false);
      }
    } else {
      SetLoading(false);
    }
  };



    const increaseFontSize = () => {
      setFontSize(dynamicFontSize + 2); // Increase font size by 2
    };
  
    const decreaseFontSize = () => {
      setFontSize(dynamicFontSize - 2); // Decrease font size by 2
    };








  return (
    <View style={styles.container}>

<View style={{backgroundColor:'black',height:'30%'}}>  
    <ImageBackground
        source={require('./../assets/images/jaisainaam.jpg')}
        style = {{ width: "100%", height: '120%',resizeMode:'contain' ,top: 0,overflow:'hidden'}}

    >

    </ImageBackground>

  </View>
  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kruti-Dev680',top: 0}}>
Jh lkbZaaa veka uke ekyk
</Text>
     
    <ScrollView >
    <View style={{textAlign:'center',alignContent:"center",marginLeft:'20%'}}>
    <Image
        source={require('./../assets/images/rn.png')}
        style={{alignContent:"center"}}
    
/>
</View>
 
    

      <View  >  
<Text></Text>


      <Text style={styles.textstyle}>AA Jh x.ks’kk; ue% AA </Text>

      <Text style={styles.textstyle}>
      Jh v;ks/;k ukFk dh t;		Jh c`tfcgkjhyky dh t;
      </Text>


      <Text style={styles.textstyle}>      feBM+s lkbZa veka dh t; </Text>
      <Text style={styles.textstyle}> ,dks vksadkj lfrxqj izlkn </Text>
      <Text style={styles.textstyle1}>Jh lkbZaaa veka uke ekyk  </Text>

      <Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
      nksgk%
      </Text>
      <Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

lkbZa veka lfrxqj lpsk] eSxflpUnz efgjckuA 
</Text>
      <Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

lkbZa veka d#.kkfu/kh] lar#i HkxokuAA

</Text>

<Text></Text>



    
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >


      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
      izHkq isze ikb.k tks 
      </Text>
      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'20%', fontFamily:fontname}}>
Jh lfrxq# gh lpks lk/ku vkAA 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lHk eaxy dj.k okjks
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'20%', fontFamily:fontname}}>
Jh lfrxq# tksgh flej.k vkAA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
fpr papyrk gVkb.k okjks 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'20%', fontFamily:fontname}}>
Jh lfrxq# tks gh uke jV.k vkAA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
Tkkfgj Hkxoku vk Jh lfrxq#
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'20%', fontFamily:fontname}}>
bZa,sa osnfu Hkh d;ks o.kZu vkAA        

</Text>



    

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:50, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaAA
</Text> 


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lq[ku tk lkxj lkbZa vekaA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
#imtkxj lkbZaaa vekaAA
</Text> 


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
vUrj;keh lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
leFkZ Lokeh lkbZa  vekaAA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
c[’k.kgkj  lkbZa    vekaA</Text> 




  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lq[ku tk lkj lkbZa vekaAA
</Text> 






<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lq[kokl fogkjh lkbZa vekaA
</Text> 


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
tlM+ks pkS/kkjh  lkbZa vekaAA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
vkuUndUn    lkbZa   vekaA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
nklfu fnycUn lkbZa vekaAA
</Text> 






<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
gj  gj  xk;ka  lkbZa  vekaA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
fny lka /;k;ka lkbZa vekaAA
</Text> 


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
pj.kfu fprqyk;ka lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
eaxy  euk;ka lkbZa vekaAA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
d`ik ty/kj  lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
xjhfc fxj/kj lkbZa vekaAA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
fldlka lkjkfg;ka lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
uhagM+ks fuckfg;ka lkbZa vekaAA</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
izk.kfu I;kjk   lkbZa vekaA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
th; ft;kjk   lkbZa vekaAA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
uSufu rkjk     lkbZa  vekaA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lkg flaxkjk    lkbZa vekaAA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
eqgcr ewM+h    lkbZa  vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
ft;ksfe tksM+h lkbZa vekaAA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
ti ri /;ku  lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
rhFkZ  bLuku   lkbZa vekaAA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
Hkxrh  Kku   lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
egk HkkX;oku lkbZa vekaAA
</Text> 








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
fueZy  uhag    lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
efg#fu ehaglkbZa vekaAA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
vn~Hkqr vkuUn lkbZa vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
c[r  cqyUn  lkbZa vekaAA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
Jh eSxflpUnz  lkbZa vekaA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lnk lq[kdUn  lkbZa vekaAA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
ifrru ikou lkbZa  vekaA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
nklfu eu HkkoulkbZa vekaAA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lRlax ?kksV lkbZa  vekaA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
nklfu vksV   lkbZa  vekaAA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
izsfe;qfu izk.k  lkbZa  vekaA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lkfgc lqtk.klkbZa vekaAA
</Text> 



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lRlax ljnkj lkbZa vekaA
</Text> 


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
izse Hk.Mkj  lkbZavekaAA
</Text> 


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
uke vforkj  lkbZa  vekaA
</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
j?kqoj  c+kjlkbZa vekaAA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
izse nkrkj   lkbZa  vekaA
</Text> 





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
leFkZ lpkj  lkbZa  vekaAA
</Text> 






<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
vHkkxfu Hkkx lkbZa  vekaA</Text> 




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
vey vuqjkx lkbZa vekaAA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lRlax lkSHkkx lkbZa vekaA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
x+k;ks jl jkx lkbZa vekaAA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

[ksyfu  Q+kx  lkbZa  vekaA

  </Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
feBks eSfFkfy ekx+ lkbZavekaAA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
rhFkZ l#i    lkbZa  vekaA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
efgek vuwi   lkbZa vekaAA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
fldlka laHkkfj;ka lkbZa vekaA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
tis fnfy Bkfj;ka lkbZavekaAA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
lqfefjf.k;aw lksfj;ka lkbZa vekaA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
vUnj esa vksfj;ka lkbZa vekaAA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
ije mnkj lkbZa vekaA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
fg;sa tk  gkj lkbZa vekaAA
</Text>






<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
nklfu fnynkj lkbZa vekaA

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

x+k;ka y[kokj lkbZa vekaAA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  o`Unkou usgh   lkbZa vekaA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  fo#agdfu osgh lkbZa vekaAA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  g"kZ  izsefuf?k   lkbZa vekaA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  jlth fjf/kflf/k lkbZa vekaAA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  Jh jk/kk xkbZa  lkbZavekaA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  Jh d`".k dqn+kbZa lkbZavekaAA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  fnfyfM+;wa Bkjha lkbZa  vekaA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  lsod lEeHkkjha lkbZa vekaAA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  fuek.kfu ek.k lkbZavekaA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  furk.kfu rk.k lkbZa vekaAA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

  ln~ c[k+’kUnlkbZa  vekaA

    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


iwf.kZek pUn   lkbZa  vekaAA

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


fny esa clk;ka lkbZa  vekaA

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


gj gj glk;ka  lkbZa vekaAA


</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


izk.kfu vk/kkj lkbZa  vekaA


</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


Hko rkj.kgkj  lkbZa vekaAA


</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


jl jrukdj  lkbZa  vekaA


</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


lusg lq/kkdj lkbZa vekaAA


</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


lp tk lkxj lkbZa vekaA

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


uhag esa ukxj lkbZa vekaAA


</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>



lh;kjke miklh lkbZa vekaA

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


tqx+y lq[kjklh lkbZavekaAA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  dFkk dqat oklh lkbZavekaA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  vkuUn vfouklh lkbZavekaAA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  izse iqtkjh   lkbZa  vekaA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>



  lUru fgrdkjh lkbZavekaAA

  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>





  Hkkjr tk Hkw"k.k lkbZa vekaA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>



  izse tk Ikw"k.k  lkbZa vekaAA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>



  jl tk jgcj  lkbZa vekaA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>




  xq.kfu esa xgcj lkbZa vekaAA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>






  lUru fljrkt lkbZa  vekaA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>




  xjhc fuokt lkbZa vekaAA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>



  lRlax tk ’kkg lkbZa vekaA



  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  fuek.kfu ukg lkbZa vekaAA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  tqx tqx ft;ks lkbZa  vekaA


  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  izse jlq ih;ks lkbZa vekaAA



  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


  lHkq lq[k ekf.k;ks lkbZa vekaA


    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


    lHkq dqNq t+k.kks lkbZa vekaAA

    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


    jl jkt tk jk.kk lkbZa vekaA


    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>



    Hkwey eu Hkk.kk lkbZa vekaAA

    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>


    fl; jk?ko xksn lkbZa vekaA

    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>




    ekf.k;ks jl eksn lkbZa vekaAA
    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

    eSxfl feBks uke lkbZa vekaA
    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

    vf[k;qfu vkjke lkbZa vekaAA
      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

      tqx tqx ft;ks lkbZa  vekaA
      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:20, marginLeft:'0%', fontFamily:fontname}}>
lkbZaaa veka tS lkbZaaa vekaA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>

      izse jlq ih;ks lkbZa vekaAA

      </Text>
<Text></Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
      nksgk
      </Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
  lkbZ a veka uke fur] tks x+k;s lfgr gqyklA
      </Text>
      <Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

lkbZ a veka pj.kfu esa] ik, furq furq fuoklAA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

AA vk’kh’k fiz; lkbZ a veka lnka [kqf’kAA
  </Text>

    </View>
    
    
    
    
    </View>
    
    
    
    
     </ScrollView>


     <View style={{backgroundColor:'#F8B268'}}>
     <View style={styles.AudioPLayer}>
             
             {Loading ? (
                 <ActivityIndicator size={'small'} color={'red'} />
               ) : (
                 <>
                   {Loaded === false ? (
                     <>
                       <ActivityIndicator />
                               </>
                   ) : (
                     <>
                     <Text style={{alignContent: 'right'}}>
       
                     <Icon.Button name="play-circle" backgroundColor='transparent' color='Black'
         style={styles.viewBtn}     onPress={PlayAudio}>
           <Text style={{ fontFamily: '', fontSize: 18 }}>Play
           </Text>
         </Icon.Button>
         <Icon.Button name="pause-circle" backgroundColor='transparent' color='Black'
         style={styles.viewBtn}     onPress={PauseAudio}>
           <Text style={{ fontFamily: '', fontSize: 18 }}>Pause
           </Text>
         </Icon.Button>
        
  

         <Icon.Button name="plus-square" backgroundColor='transparent' color='red'
         style={styles.viewBtn}     onPress={increaseFontSize}>
           <Text style={{ fontFamily: '', fontSize: 18 }}> 
           </Text>
         </Icon.Button>


         <Icon.Button name="minus-square" backgroundColor='transparent' color='red'
         style={styles.viewBtn}     onPress={decreaseFontSize }>
           <Text style={{ fontFamily: '', fontSize: 18 }}> 
           </Text>
         </Icon.Button>



                       </Text>
                     </>
                   )}
                 </>
               )}
       

       </View>
  
       
             </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
     color:'black',
  },
  AudioPLayer: {
   
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  viewBtn: {
    backgroundColor: 'transparent',
   top:0
  },

textstyle:{
  fontSize:20,
  textAlign:'center',
  marginTop:0,
  fontFamily:'Kruti-Dev'
},
textstyle1:{
  fontSize:40,
  textAlign:'center',
  marginTop:0,
  fontFamily:'Kruti-Dev'
},
textstyle2:{
  fontSize:25,
  textAlign:'justify',
  marginTop:0,
  marginLeft:'5%',
  fontFamily:'Kruti-Dev'
}


});
