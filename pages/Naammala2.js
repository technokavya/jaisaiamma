import React, {useState,  useEffect} from 'react';
import { View, Text,ActivityIndicator ,Dimensions,Image,FlatList,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFonts} from "expo-font";
import {  Button } from 'react-native';
import { BackHandler } from 'react-native';

import Constants from 'expo-constants';
import { Audio } from 'expo-av';

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

export default function Naammala2() {
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
    PauseAudio
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


  <Text style={{fontSize:50,textAlign:'center',marginTop:10,fontFamily:'Kruti-Dev680',top: 0}}>
uke iapke`r
</Text>
     
    <ScrollView >
    <View style={{textAlign:'center',alignContent:"center",marginLeft:'25%'}}>
    <Image
        source={require('./../assets/images/namrit.png')}
        style={{alignContent:"center"}}
    
/>
</View>
 
    


      <View  >  

      <Text style={{fontSize:25,textAlign:'center',marginTop:10,fontFamily:'Kd40',top: 0}}>
      lq[k fuokl lRlax e.My
      </Text>
      <Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0}}>
lkbZa lkfgc tUeksRlo
</Text>
<Text style={{fontSize:18,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0}}>
la0 2045& lu~ 1988
</Text>
<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0}}>
Jho`Unkou
</Text>
<Text style={{fontSize:18,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev012',top: 0}}>

Ûeqnzd%
Jh gjhuke izsl] Jh o`Unkou @ ekpZ 88
</Text>
<Text></Text>

<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev680',top: 0}}>
vuqØe		
</Text>
<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev012',top: 0}}>
Jh jke uke ekyk %   
</Text>
<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev012',top: 0}}>
Jh d`".k uke ekyk
</Text>
<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev012',top: 0}}>
Jh c`t ljdkj efgekekyk </Text>
<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev012',top: 0}}>
lkbZa lkfgc ukeekyk 
</Text>
<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev012',top: 0}}>
lr~xqj ukud uke ekyk    
</Text>


<Text style={{fontSize: 20,textAlign:'center', marginTop:100, marginLeft:'0%', fontFamily:fontname}}>

      Jh x.ks’kk; ue%
Jh vo/kiR;s ue%

      </Text>


      <Text style={styles.textstyle1}>Jh jkeuke ekyk </Text>

      
      
      

<Text></Text>



    
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >


      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
      ikj czºe ijkRij	] tS Jh jke      </Text>

      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
      Jh lkdsr lq[k funzr ] tS Jh jke      </Text>
      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ukjn _f"k dfj xk;u] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ne;Urh uy pfjrfu ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lqur Jo.k Hkfj pk;u ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
yhyk jfp jkek;.k] tS Jh jke      </Text> 
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
fof/k f’ko fo".kq fou; dfj ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
lw;Z ds dqy e.Mu	 ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
Jh;qr n’kjFk uUnu ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
dks'kY;k lq[k o/kZu ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
fo’okfe= ije /ku ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
?kksj rkfM+dk ?kkru ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ekjhpkfn fuikru	 ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
vfgY;k 'kki u’kkou ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
ukfod e`nq in /kksou ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
fefFkyk iqj tu eksnu ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
iq"i okfVdk n’kZu ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
izFke feyu Jhlh; jk?ko ] tS Jh jke      </Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}>
'kadj /kuq"k foHkatu		] tS Jh jke      </Text>










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
        
         <Icon.Button name="" backgroundColor='transparent' color='Black'
         style={styles.viewBtn}   >
           <Text style={{ fontFamily: '', fontSize: 18 }}> Font Size
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
