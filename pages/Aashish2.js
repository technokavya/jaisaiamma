import React, {useState,  useEffect} from 'react';
import { View, Text,ActivityIndicator ,Dimensions,Image,FlatList,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFonts} from "expo-font";
import {  Button } from 'react-native';
import { BackHandler } from 'react-native';

import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const SampleTrack = require('../assets/audio/ashish2.mp3');
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

export default function Aashish2() {
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


    <ScrollView >
    


      <View   style={ {backgroundColor:'#FDFADE'}}   >  

<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kruti-Dev680',top: 0}}>Tk; lkabZ vEek</Text>
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >


      <Text style={styles.textstyle1}>vk'kh"k
</Text>



    

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lRlax tk ?kksV xq# vej th vksV fFk;so] 
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
gksm yksV iksV izse jl ds meax esa A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lRlax tk 'kkg lkbZa gh.kfu gejkg lkbZa]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
fuek.kfu ukg jgks jk?ko ts jax esa AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lRlax ljnkj Hkfj;k jgfuo HkaMkj furq]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
;g vk’kh"k okjokj vkjksX; vax vax esa A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lRlax tk /k.kh iafgts izhre [ks o.kha 'kky]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ygks dqfjc d.kh &gt;wyks izse jl jax esa AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
vapy ilkfj ekxwa okj okj fof/kuk rs]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ckcy d`iky rqe furfg lq[kh jgks A
  </Text> 
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
y&#123;eh dks ukFk jgs lnk lax lkFk rkslksa]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
xk; xq.k xkFk lq[k lkt esa lus jgks AA
  </Text> 
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lq[kek fu/kku 'khy ljy lqtku izHkq]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
efgek vikj izse jl esa fHkus jgks A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
cM+s gks mnkj fur nsr nku nhuu dks]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
c`t ds fuoklh eksn eaxy Hkjs jgks AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
xjhc fuokt+ ckck ykt ds tgkt ckck]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lUr fljrkt ckck 'khy ds Hk.Mkj gks A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
nhu ds n;ky fcu dkj.k d`iky ckck]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
n’kjFk yky ds izse vforkj gks AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
uhfr ds fu/kku izhfr jhfr iznku djks]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
dfy tho rkfjos dks vk, lalkj gks A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
nsr gwa vk’kh"k fur jk[kks txnh’k rsjks]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
dksVfu ojh"k c`tHkwfe lq[k lkj gks AA
  </Text> 
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
uSufu ds rkjs izk.k I;kjs izk.k ukFk lkbZa] 
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
nkl jf[kokjs rqe nhu fgrdkjh gks A
  </Text> 
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lukru /keZ dh tqx+ tqx+ j&#123;kk dhuh]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lc nsofu eukb j?kqohj Hkfä /kkjh gks AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
tks tks 'kj.k vk;ks rkadks uke jl nku fn;ks]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ikifu iquhr nksÅ yksd fgrdkjh gks A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
tkads ihB gkFk /kj;ks rkars ;ejkt Mj;ks]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
d`ik ds fudsr lkbZa oUnuk gekjh gks AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lkaojks lyksuks lqdqekj izk.k vk/kkj dhUgks]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
vo/k lqgkx rsjs 'kh’k fljrkt gSa A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
yo dq’k yky ysds xksn egk eksn Hkjs]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
uSufu ds vkxs furq vo/k lekt gS AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
'khy fuf/k :i fuf/k usgh j?kqUnu ds]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
Xkkgd xjhcfu ds iwjs lc dkt gaS A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
'kkjnk vks 'ks"k vks x.ks’k vks egs’k fof/k]
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lc j[kokjs rsjs esjs egkjkt gSa AA
  </Text> 
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>

tqx+ka tqx+ tkvks lkbZa [khj [k.Mq ihvks lkbZa]
</Text> 

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
vtj vej jgks izse jl ikxs gSa AA
</Text> 
<Text></Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
nksgk
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lUrfu ds fljrkt gks nklu ds izfriky A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
izse Hkfä Hk.Mkj gks ckcy nhu n;ky AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
ckcy nhu n;ky gks lnka lsod fgrdkjh A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
c`t e.My fogjks lnka Hkäfu Hk;gkjh AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
izhre izse rjax esa jSu fnol jkrs jgks A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
jek ukFk c`t ukFk dh d`ik dksj furgha ygks AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
gfj gj xq# izlkn rs gks; vpy rqo jkt A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
fur uo eaxy eksn ygks lUrfu ds fljrkt AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
lnk ft;ks lkbZa vEek lUrfu tk fljrkt A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tqx+tqx+ ekf.k;ks lkfgch efgj Hkfj;k egkjkt AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
fijlUnh ftfu x+kfYgM+h frfu lnka clUr cgk# A
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
furq uo eaxy frfu ?kjs ftfu Jhjke I;k# AA
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:10, marginLeft:'0%', fontFamily:fontname}}>
furq uo eaxy lkbZa vefM+ ?kjs
</Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}> ftfu Jhjke I;k# AA
</Text> 
<Text></Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
	cksy egkjkt v;ks/;k ukFk dh tS A
  </Text> 

<Text style={{fontSize: dynamicFontSize,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
	cksy fefBM+s ckcy lkbZa vEek dh tS AA











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
