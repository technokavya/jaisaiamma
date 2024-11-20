import React, {useState,  useEffect} from 'react';
import { View, Text,ActivityIndicator ,Dimensions,Image,FlatList,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFonts} from "expo-font";
import {  Button } from 'react-native';
import { BackHandler } from 'react-native';

import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const SampleTrack = require('../assets/audio/ashish1.mp3');
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

export default function Aashish1() {
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
tS lq[k nsoh uUnu rqe tx
  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
 oUnu izhre izse miklh gks A

  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tS vkuUndUn vycsyM+k lkbZa 
</Text>



  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  uhag fudqat fuoklh gks AA
</Text>


  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tS eugj.k euksgj ckiw 
</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  'khy  flU/kq lq[kjklh gks A
  </Text>


  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

lnk ft;ks lkbZa veka I;kjy 

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  dFkk fo:ag foyklh gks AA

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tS lq[kokl fcgkjh lkbZa 
  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  Lokfefu  pj.k iqtkjh gks A

 </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

lrh lqgkfxu ds le lqUnj 

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  ,d usg ozr/kkjh gks AA

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lnk lusg lfjlCt jgks rqe 
</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  ltufu ds lq[kdkjh gks A 

  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

lnk ft;ks lkbZa veka I;kjy izhfr 

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'50%', fontFamily:fontname}}>
  jhfr izfr I;kjh gks AA

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tS xjhfc Jh[kf.M lar f’kjksef.k

  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  vfr’k; pfjr mnkjk gks A
 
 </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

jfo 'kf’kle pedr gks fuf’kfnu 

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  izse&izdk’k rqEgkjk gks AA
 
 </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

vf[ky czã.M uk;dq ofl dhuks 

  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  lgt lusg  dh /kkjk gks A
</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lnk ft;ks lkbZa veka I;kjy 
  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  gafl eq[k gjh gekjk gks AA 

</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tS nhu cU/kq lq[k flU/kq lyksus 
  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  efgek vfer rqEgkjh gks A  
 
 </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tS izhre izse i;ksfuf/k 
</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'30%', fontFamily:fontname}}>
  iwj.k fi; dhjfr foLrkjh gks AA  
 
 </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
tS ykM+ yM+kou fi;eu Hkkou 
</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  fl; jk?ko fj&gt;okjh gks A
 </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lnk ft;ks lkbZa veka I;kjy 
</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  vk’kh"k fuR; gekjh gks AA

</Text>
<Text></Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

	lkbZa lkfgc dh tS] lkbZa  lkfgc dh tS A

</Text>

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>

	lkbZa lkfgc dh tS] lkbZa lkfgc dh tS AA

  </Text>

  <Text></Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
nks0&	fij lUnh ftfu x+kfYgM+h 
</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  fru lnk olUr cgk# A

 </Text>

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
	furq uo eaxy frfu ?kjs
    </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>

   ftfu Jhjke I;k# A

   </Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
	furq uo eaxy lkbZa vefM+ ?kjs 
  
  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'40%', fontFamily:fontname}}>
  ftfu Jhjke I;k# AA

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
