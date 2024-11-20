import React, {useState,  useEffect} from 'react';
import { View, Text,ActivityIndicator ,Dimensions,Image,FlatList,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFonts} from "expo-font";
import {  Button } from 'react-native';
import { BackHandler } from 'react-native';

import Constants from 'expo-constants';
import { Audio } from 'expo-av';

const SampleTrack = require('../assets/audio/mangal_aarti.mp3');
const myIcon = <Icon name="rocket" size={30} color="#900" />;


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 880; // Standard width (e.g., iPhone 6/7/8)

const scaleFontSize = (fontSize) => {
  const ratio = fontSize / SCALE;
  return ratio * SCREEN_WIDTH;
};

const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState(26); // Initial font size

};

export default function Mangalaarti() {
  const fsize=scaleFontSize(50);
  const [dynamicFontSize, setFontSize] = useState(fsize); // Initial font size

  //const dynamicFontSize = scaleFontSize(50);
  const fontname='Kd20';

    let [fontsLoaded]=useFonts({
      'Kruti-Dev':require('./../assets/fonts/Kruti-Dev-012.ttf'),
      'K105':require('./../assets/fonts/K105.ttf'),
      'Kd20':require('./../assets/fonts/KRDEV020.ttf'),
      'Kd40':require('./../assets/fonts/K40.ttf'),
      'K246':require('./../assets/fonts/K246.ttf'),
      'Kruti-Dev16':require('./../assets/fonts/Kruti-Dev-016.ttf'),
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
        style = {{ width: "100%", height: '120%',resizeMode:'contain' ,top: 0,borderBottomColor:'red'}}

    >

    </ImageBackground>

     
  </View>

    <ScrollView >
    


      <View   style={ {backgroundColor:'#FDFADE'}}   >  

<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kruti-Dev680',top: 0}}>Tk; lkabZ vEek</Text>
<Text style={styles.textstyle}>AA Jh x.ks’kk; ue% AA </Text>
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >

      <Text style={styles.textstyle}>
cksy egkjkt v;ks/;k ukFk dh tS </Text>
<Text style={styles.textstyle}>

cksy fefBM+s ckcy lkbZa vEek dh tS
</Text>
<Text style={styles.textstyle1}>eaxy vkjrh
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>eaxy vkjrh lkbZa n;ky dh A
</Text>


<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>
fur uo eaxy gksr fujf[k Nfc]  
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginLeft:'25%',fontFamily:fontname}}>
izk.k I;kjs iz.kru iky dh AA  
</Text>



<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>
eaxy :i Jh Lokfefu fefBM+h] 
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
eaxy 'kksHkk jk?koyky dh AA
</Text>


<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>
eaxye;h f’kj ikx fcjkts] 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
eaxy 'kksHkk u;u fo’kky dh AA
</Text>


<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>
eaxye;h eqLdku euksgj] 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
eaxy ok.kh jgL; jlky dh AA</Text>







<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>
eaxye;h izHkq izse dh fprou]

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
 eaxy 'kksHkk Hk`dqfV Hkky dh AA
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>
pj.kdey furq eksneaxye;h] 

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
ikouq iVqyh eSfFkfy c+ky dh AA
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'1%', fontFamily:fontname}}>
eaxyfuf/k lkbZa vefM+ th tksM+h] 

</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'25%', fontFamily:fontname}}>
izsfe;qfu ân; eatqejky dh AA


      </Text>
<Text></Text>


      <Text style={styles.textstyle1}>Jhjke tUe Lrqfr
      </Text>
      <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
Hk, izxV d`ikyk nhu n;kyk dkS’kY;k fgrdkjh A     </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
gfj"kr egrkjh eqfu eugkjh vn~Hkqr :i fugkjh AA    </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ykspu vfHkjkek ruq ?ku’;kek fut vk;q/k HkqtpkjhA </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
Hkw"k.k cuekyk u;u fo’kkyk 'kksHkk flU/kq [kjkjh AA   </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
  dg nqbZ dj tksM+h vLrqfr rksjh dsfg fof/k djgqa vuUrk A</Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
  ek;kxq.k&Kkukrhr vekuk osn iqjk.k HkuUrk AA   </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
  d#.kk lq[klkxj lc xquvkxj tsfga xkofga Jqfr lUrk A   </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
    lks ee fgr ykxh tu vuqjkxh Hk;sm izdV JhdUrk AA  </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
    czãkaM fudk;k fufeZr ek;k jkse&jkse izfr csn dgs A </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>ee mj lks oklh ;g migklh lqur /khj efr fFkj u jgs AA </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>mitk tc Kkuk izHkq eqLdkuk pfjr cgqr fof/k dhu pgs A </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>dg dFkk lqgkbZ ekrq cq&gt;kbZ tsfg izdkj lqr izse ygs AA </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>ekrk iqfu cksyh lks efr Mksyh rtgq rkr ;g :ikk  </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>dhts f’k’kq yhyk vfr fiz; 'khyk ;g lq[k ije vuwik AA

</Text>


<Text style={{fontSize: dynamicFontSize,textAlign:'left', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lqu cpu lqtkuk jksnu Bkuk gksb ckyd lqj Hkwik A </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>;g pfjr tks xkofga gfj in ikofga rsu iM+fga Hkodwik AA </Text>

<Text style={styles.textstyle2}> 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
nks0&foiz /ksuq lqjlUrfgr yhUg euqt vforkj A  </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'9%', fontFamily:fontname}}>
fut bPNk fufeZr ruq] ek;k xqu xkSikj AA	


</Text>


<Text style={styles.textstyle2}> 
</Text>

<Text style={styles.textstyle1}>
JhLokfefutUe Lrqfr
</Text>



<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>HkbZ izxV dqekjh Hkwfe fonkjh tufgrdkjh Hk;gkjh A </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>vrqyfr NfcHkkjh eqfueugkjh tudnqykjh lqdqekjh AA </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>lqUnj fla?kklu rasfg ij vklu dksfV gqrk’ku nqfrdkjh A </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>f’kj N= fojkts lf[k xu jkts futfut lkts dj /kkjh AA </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>lqj fl) lqtkuk gufga fu’kkuk p&lt;+s foekuk leqnkbZ A </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>oj"kfga cgq Qwyk eaxyewyk vuqdwyk Jhtw xquxkbZ AA </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>ns[kfga lc Bk&lt;+s ykspu xk&lt;+s lq[k ck&lt;+s mj vf/kdkbZ A </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>Lrqfr eqfu djgha vkuUn Hkjgha ika;fu ijgha gj"kkbZ AA </Text>
    <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>_f"k ukjn vk;s uke lquk;s lqfu lq[kik;s u`i Kkuh A </Text>
      <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>Jh lh; lqukek iwj.kdkek lc lq[k/kkek xq.k [kkuh AA </Text>
        <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>fl; lu equjkbZ fou; lqukbZ le; lqgkbZ e`nqcouh A </Text>
        <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>ykyfu ruq yhts pfjr lqdhts ;g lq[k nhts u`ijkuh AA </Text>
          <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>lqfu eqfuoj ckuh Jhtw eqLdkuh yhyk Bkuh lq[knkbZ A</Text>
            <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>lksor tuq tkxh jksou ykxh u`i cM+Hkkxh mjykbZ AA </Text>
            <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>nEifr vuqjkxsm izse lqikxsm rsfg lq[k ykxsm eu ykbZ A </Text>
              <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>Lrqfr Jhtw dsjh izse yrsjh oj.kfg psjh f’kj ukbZ AA </Text>
<Text style={styles.textstyle2}> 
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>nks0& fut bPNk e[k Hkwfe rs izxV HkbZ Jhtw vk; A </Text>
  <Text style={{fontSize: dynamicFontSize,textAlign:'auto', marginTop:0, marginLeft:'10%', fontFamily:fontname}}>pfjr fd;s ikou ije lUru eksn c&lt;+k; AA 

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
    height: 40,
    alignItems: 'center',
  },
  viewBtn: {
    backgroundColor: 'transparent',
   top:0
  },
  viewBtn2: {
    backgroundColor: 'transparent',
   top:0,

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
