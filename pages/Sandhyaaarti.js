import React, {useState,  useEffect} from 'react';
import { View, Text,ActivityIndicator ,Dimensions,Image,FlatList,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFonts} from "expo-font";
import {  Button } from 'react-native';
import { BackHandler } from 'react-native';

import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const SampleTrack = require('../assets/audio/s.mp3');
const myIcon = <Icon name="rocket" size={30} color="#900" />;


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 880; // Standard width (e.g., iPhone 6/7/8)

const scaleFontSize = (fontSize) => {
  const ratio = fontSize / SCALE;
  return ratio * SCREEN_WIDTH;
};

const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size

};

export default function Sandhyaaarti() {
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
   <View style={{backgroundColor:'black',height:'35%'}}>  
    <ImageBackground
        source={require('./../assets/images/jaisai4.png')}
        style = {{ width: "100%", height: '120%',resizeMode:'contain' ,top: 0}}

    >

    </ImageBackground>

     
  </View>

    <ScrollView >
    


      <View   style={ {backgroundColor:'#FDFADE'}}   >  

<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kruti-Dev680',top: 0}}>Tk; lkabZ vEek</Text>
<Text style={styles.textstyle}>AA Jh x.ks’kk; ue% AA </Text>
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >


      <Text style={styles.textstyle1}>la/;k vkjrh
</Text>



      <Text style={styles.textstyle}>

cksy egkjkt v;ks/;k ukFk dh tS </Text>
<Text style={styles.textstyle}>

cksy fefBM+s ckcy lkbZa vEek dh tS
</Text>


<Text style={styles.textstyle1}>Jh;qxy vkjrh
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
vkjrh ;qxy ljdkj rsjh dhtS A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
ru eu /ku lc viZ.k dhtS AA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
jfo 'kf’k dksfV onu dh 'kksHkk A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
;qxy fujf[k esjk euM+ks yksHkk AA  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
xkSj ';ke eq[k fuj[kr thts A
  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
;qxy l:iM+ks uSu Hkfj ihts AA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
dapu Fkkj diwj dh ckrh A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'15%', fontFamily:fontname}}>

;qxy fujf[k eqafgth BfjfM+;fe Nkrh AA
  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

xqyfu th lst xqyfu th ekyk A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'15%', fontFamily:fontname}}>

xqyfu [kka dksey Lokfefu jk?ko ykyk AA
  </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

ØhV eqdqV dj /kuq"k ck.k lksgs A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>

;qxy pUnz esjs euM+s dks eksgs AA

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

Ikfgfjfu uhy ihr iV lkM+h A 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>

Jh Lokfefu I;kjks vo/k fcgkjh AA 

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

dkS’kY;k dqekj Jh lquSuk dqekjh A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>

vkjrh djfu ldy v;ks/;k ukjh AA

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

eaxy eukofga fefFkyk ukjh A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>

lksgyM+k x+kbZfu lqgkx Hkjh ukjh AA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

n’kjFk ykM+yks Jh tud fd’kksjh A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>

ije vkuUn lksa ft;ks ;qxy tksM+h AA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

vkjrh ;qxy ljdkj rsjh dhtS A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>

ru eu /ku lc viZ.k dhtS AA
</Text>
<Text></Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

n’kjFk ?kj vorkj vkuUnq dkS’kY;k 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'35%', fontFamily:fontname}}>

ikos vkuUnq dkS’kY;k ikos A
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

vfopyq   jktM+ks   ek.khanqfe  
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'35%', fontFamily:fontname}}>

 j?kqo#   Jhtw   oj  Lokeh AA


</Text>






<Text></Text>


<Text style={styles.textstyle1}>Jh lkbZa lkfgc vkjrh
</Text>
<Text></Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
vkjrh Jh xq# eSxfl pUn dh]
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
'kksHkk lkxj vkuUn dUn dh A
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
jl fuf/k :i fuf/k izse egk fuf/k]
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
fgr pkgd fur tkudh pUn dh AA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lUr f’kjksef.k iz.kfr ikyd]
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
dksfdyk Jh dkS’kY;k uUn dh AA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ikfFkZfo izk.kk Jh flx nsoh]
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
fgr :ik lfgpfj HkwuUn dh A	
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
c`t cu esa ftfu ?kfjM+ks c.kk;ks]
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'20%', fontFamily:fontname}}>
fnfyM+h Bkfj;kÅa ckWads fnfycUn th AA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
xq#v vej th vksV orkÅa]
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
d`ik [kfV;kÅa xq# xksfoUn dh A
  </Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
vfr vuqjkx lkas vk’kh"k djks fefy]
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'22%', fontFamily:fontname}}>
tksM+h ft;s eqafgth vkuUn flU/kq dh AA
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
