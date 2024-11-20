import React, {useState,  useEffect} from 'react';
import { View, Text,ActivityIndicator ,Dimensions,Image,FlatList,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFonts} from "expo-font";
import {  Button } from 'react-native';
import { BackHandler } from 'react-native';
import Constants from 'expo-constants';

const myIcon = <Icon name="rocket" size={30} color="#900" />;
import { Asset } from 'expo-asset';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 880; // Standard width (e.g., iPhone 6/7/8)

const scaleFontSize = (fontSize) => {
  const ratio = fontSize / SCALE;
  return ratio * SCREEN_WIDTH;
};










const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size

};
const uri0 = 'pdf/satguru4/satguruwani_darshan_4_0_compressed.pdf';



const uri2 = 'pdf/satguru4/satguruwani_darshan_4_1_compressed.pdf';
const uri3 = 'pdf/satguru4/satguruwani_darshan_4_2_compressed.pdf';
const uri4 = 'pdf/satguru4/satguruwani_darshan_4_3_compressed.pdf';
const uri5 = 'pdf/satguru4/satguruwani_darshan_4_4_compressed.pdf';
const uri6 = 'pdf/satguru4/satguruwani_darshan_4_5_compressed.pdf';
const uri7 = 'pdf/satguru4/satguruwani_darshan_4_6_compressed.pdf';

const uri8 = 'pdf/satguru4/satguruwani_darshan_4_7_compressed.pdf';
const uri9 = 'pdf/satguru4/satguruwani_darshan_4_8_compressed.pdf';
const uri10 = 'pdf/satguru4/satguruwani_darshan_4_9_compressed.pdf';
const uri11 = 'pdf/satguru4/satguruwani_darshan_4_10_compressed.pdf';
const uri12 = 'pdf/satguru4/satguruwani_darshan_4_11_compressed.pdf';
const uri13 = 'pdf/satguru4/satguruwani_darshan_4_12_compressed.pdf';
const uri14 = 'pdf/satguru4/satguruwani_darshan_4_13_compressed.pdf';
const uri15 = 'pdf/satguru4/satguruwani_darshan_4_14_compressed.pdf';
const uri16 = 'pdf/satguru4/satguruwani_darshan_4_15_compressed.pdf';
const uri17 = 'pdf/satguru4/satguruwani_darshan_4_16_compressed.pdf';
const uri18 = 'pdf/satguru4/satguruwani_darshan_4_17_compressed.pdf';
const uri19 = 'pdf/satguru4/satguruwani_darshan_4_18_compressed.pdf';
const uri20= 'pdf/satguru4/satguruwani_darshan_4_19_compressed.pdf';
const uri21 = 'pdf/satguru4/satguruwani_darshan_4_20_compressed.pdf';
const uri22 = 'pdf/satguru4/satguruwani_darshan_4_21_compressed.pdf';
const uri23 = 'pdf/satguru4/satguruwani_darshan_4_22_compressed.pdf';
const uri24 = 'pdf/satguru4/satguruwani_darshan_4_23_compressed.pdf';
const uri25 = 'pdf/satguru4/satguruwani_darshan_4_24_compressed.pdf';
const uri26 = 'pdf/satguru4/satguruwani_darshan_4_25_compressed.pdf';






export default function Satguru4({ navigation }) {
  const fsize=scaleFontSize(50);
  const [dynamicFontSize, setFontSize] = useState(fsize); // Initial font size

  //const dynamicFontSize = scaleFontSize(50);
  const fontname='Kruti-Dev';
  let [fontsLoaded]=useFonts({
    'Kruti-Dev':require('./../../assets/fonts/Kruti-Dev-012.ttf'),
    'K105':require('./../../assets/fonts/K105.ttf'),
    'Kd20':require('./../../assets/fonts/KRDEV020.ttf'),
    'K246':require('./../../assets/fonts/K246.ttf'),
    'Kruti-Dev16':require('./../../assets/fonts/Kruti-Dev-016.ttf'),
    'Kruti-Dev680':require('./../../assets/fonts/Kruti-Dev-680.ttf')
  
  });


    const increaseFontSize = () => {
      setFontSize(dynamicFontSize + 2); // Increase font size by 2
    };
  
    const decreaseFontSize = () => {
      setFontSize(dynamicFontSize - 2); // Decrease font size by 2
    };








  return (

    <View style={styles.container}>


    <ScrollView >
    


      <View style={{padding:10}} >  
      <Text style={{fontSize:20,textAlign:'center',marginTop:20,fontFamily:'K246',top: 0}}>
      tS lkbZa veka </Text>

<Text style={{fontSize:40,textAlign:'center',marginTop:20,fontFamily:'K246',top: 0}}>
vFk Jh lfrxqj ok.kh n'kZu ¼4½</Text>


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,paddingLeft:10}}>

¼ Lusg lqeu ½

</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0,padding:10}}>

lq[k fuokl lRlax Hkou] Jh o`Unkou/kke

</Text>
<Text style={{fontSize:20,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
HkkokFkZ %
lkbZa lkfgc vuqjkx+h
ckck xsghjke


</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,paddingLeft:10,paddingRight:10}}>
lq[kfuokl lRlax e.My Jho`Unkcu&281121

</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:0,fontFamily:'Kd20',top: 0,paddingLeft:10,paddingRight:10}}>
tUeksRlo la0 2059 •lu~ 2002</Text>
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      lwph</Text>
      <View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manjusha (Mangal Kamna)'})}>
• vuUr midkj</Text>

 <View style = {styles.lineStyle} />

 <Text style={{fontSize: 25,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}} >
  Lusg lqeu</Text>

 <View style = {styles.lineStyle} />







<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>

1   ehBh yxsa fefFkyk dh xfy;ka			 1
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
2   bl QqyokM+h esa Jh tud nqykjh			8
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
3   Jhlhv Nfc I;kjh ykxs				14
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
4   Hk`dqVh deku okjh					22
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
5   vey diksy okjh					29
    
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
6   dkykxj rj 'kky					35
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
7   tkfx+, d`ik fu/kku 					41

 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
8   dgs dkS’kY;k					47
 
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
9   vkvks xksn xafnM+hv esa				53
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
10   I;ksdM+h ?kfj ykn+qyh					60

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
11   yhfUg ykb mu tud				63

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
12   c+kfyf.k b/kj nsf[k rks yhts				70
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
13   fp# thm jgks j?kqjS;k				76

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
14   ekbZ jh eksfg dksÅ leq>kos				80


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
15   exuq eksn fd, xksn lqfe=k			      106





</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
16   vc rks cgu fonkbZ gks; gSa			      112


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
17   vbZ veka ! rwa n# ykfg			      118



</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
18   Jhlh;kjke vk,] v;ks/;k lHkk,		   123

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
19   lqfu;r vo/k dks vkuan			      131



</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
20   eqckjd gks eqckjd gks			      136
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
21   djgq d`ik d#.kk fu/ks			      140

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
22   vtZ+q vlka nh lquks egjckuk			      152

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
23   Jh oSdq.Bs’oj okgxq# v [ks		158

</Text>
<View style = {styles.lineStyle} />









<Text style={{fontSize: 25,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}} >
¼ lkfgcfu tk ikouq xq.k ½			
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
•Jh dksfdy dyjo				170
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"श्री सतगुरु वाणी दर्शन ४ "})}>
•Jh yodq’k pfj= >kadh		226
      </Text>
<View style = {styles.lineStyle} />


  </View>


    </View>
    
    
    
    
     </ScrollView>


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
},


  lineStyle:{
        borderWidth: 0.5,
        borderColor:'#D4D0D0',
        margin:10,
   }


});
