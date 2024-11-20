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
const uri0 = 'pdf/satguru3/satguruwani_darshan_3_0_compressed.pdf';



const uri2 = 'pdf/satguru3/satguruwani_darshan_3_1_compressed.pdf';
const uri3 = 'pdf/satguru3/satguruwani_darshan_3_2_compressed.pdf';
const uri4 = 'pdf/satguru3/satguruwani_darshan_3_3_compressed.pdf';
const uri5 = 'pdf/satguru3/satguruwani_darshan_3_4_compressed.pdf';
const uri6 = 'pdf/satguru3/satguruwani_darshan_3_5_compressed.pdf';
const uri7 = 'pdf/satguru3/satguruwani_darshan_3_6_compressed.pdf';

const uri8 = 'pdf/satguru3/satguruwani_darshan_3_7_compressed.pdf';
const uri9 = 'pdf/satguru3/satguruwani_darshan_3_8_compressed.pdf';
const uri10 = 'pdf/satguru3/satguruwani_darshan_3_9_compressed.pdf';
const uri11 = 'pdf/satguru3/satguruwani_darshan_3_10_compressed.pdf';
const uri12 = 'pdf/satguru3/satguruwani_darshan_3_11_compressed.pdf';
const uri13 = 'pdf/satguru3/satguruwani_darshan_3_12_compressed.pdf';
const uri14 = 'pdf/satguru3/satguruwani_darshan_3_13_compressed.pdf';
const uri15 = 'pdf/satguru3/satguruwani_darshan_3_14_compressed.pdf';
const uri16 = 'pdf/satguru3/satguruwani_darshan_3_15_compressed.pdf';
const uri17 = 'pdf/satguru3/satguruwani_darshan_3_16_compressed.pdf';
const uri18 = 'pdf/satguru3/satguruwani_darshan_3_17_compressed.pdf';
const uri19 = 'pdf/satguru3/satguruwani_darshan_3_18_compressed.pdf';
const uri20= 'pdf/satguru3/satguruwani_darshan_3_19_compressed.pdf';
const uri21 = 'pdf/satguru3/satguruwani_darshan_3_20_compressed.pdf';
const uri22 = 'pdf/satguru3/satguruwani_darshan_3_21_compressed.pdf';
const uri23 = 'pdf/satguru3/satguruwani_darshan_3_22_compressed.pdf';
const uri24 = 'pdf/satguru3/satguruwani_darshan_3_23_compressed.pdf';
const uri25 = 'pdf/satguru3/satguruwani_darshan_3_24_compressed.pdf';
const uri26 = 'pdf/satguru3/satguruwani_darshan_3_25_compressed.pdf';
const uri27 = 'pdf/satguru3/satguruwani_darshan_3_26_compressed.pdf';
const uri28 = 'pdf/satguru3/satguruwani_darshan_3_27_compressed.pdf';
const uri29 = 'pdf/satguru3/satguruwani_darshan_3_28_compressed.pdf';
const uri30 = 'pdf/satguru3/satguruwani_darshan_3_29_compressed.pdf';
const uri31 = 'pdf/satguru3/satguruwani_darshan_3_30_compressed.pdf';
const uri32 = 'pdf/satguru3/satguruwani_darshan_3_31_compressed.pdf';

const uri33 = 'pdf/satguru3/satguruwani_darshan_3_32_compressed.pdf';
const uri34= 'pdf/satguru3/satguruwani_darshan_3_33_compressed.pdf';

const uri35= 'pdf/satguru3/satguruwani_darshan_3_34_compressed.pdf';





export default function Satguru3({ navigation }) {
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
vFk Jh lfrxqj ok.kh n'kZu ¼3½</Text>


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,paddingLeft:10}}>

¼ Hkko lfjrk ½

</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0,padding:10}}>

lq[k fuokl lRlax Hkou] Jh o`Unkou/kke

</Text>
<Text style={{fontSize:20,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
HkkokFkZ %
lkbZa lkfgc vuqjkx+h
ckck xsghjke


</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,paddingLeft:10}}>
lq[kfuokl lRlax e.My Jho`Unkcu&281121

</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:0,fontFamily:'Kd20',top: 0,paddingLeft:10}}>
tUeksRlo la0 2058•lu~ 2001</Text>
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      lwph</Text>
      <View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manjusha (Mangal Kamna)'})}>
•   d`ik izlknq</Text>

 <View style = {styles.lineStyle} />

 <Text style={{fontSize: 30,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
  Hkko lfjrk</Text>

 <View style = {styles.lineStyle} />







<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>

1   vo/k ljnkj rks iS tkÅa cygkj			 1
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
2   Jhtkudh pUnz 'ky tqok.kh ek.kha			7
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
3   JheSfFkfy rsjs vkou iS cfy tkÅa			10
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
4   vygq nh veka] lqfg.kk rks dwa vygq n+s veka		15
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
5   JhikfFkZfo izlUu Fkh eu ojk, okx+			19
   
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
6   d`ik fla/kq dkS’ky /k.kh &lt;	jf.k vki.kh &lt;fj,		21
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
7   vkidks vYykg us fd;k vki gh vkyh tukc	25
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>

8   yyu yM+Srh v th yt+ jf[ktkab			32
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
9   tSlh gwa rSlh ckiw Jhjke jkojh			38
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
10   rsjs uke dh gfjne ykx+h jVu			43
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
11   eksfg vukFk j?kqukFk ft;wa tkafg fr;a j[kgqa		57

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
12   drgqa uafg Bkma dga tkma dkS’ky ukFk			61
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
13   lqokyh u [kkyh rsjs njkSa ckck			68
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
14   okg okg lkfgc lp gS				73


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
15   lnka meax nsoks lgt lqHkko lksa			76





</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
16   lgt lewg eu dey foxkl djs			 83


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
17   D;k xq.k rsjs lkj lHkkys				 86



</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
18   eqa/k v;k.kh isbZ;M+s D;ks dfjgfj n’kZu fi[ks	 91

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
19   lkaou ?ku mefM+ ?kqefM+ o"kZs				 98



</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
20   Lkquks jh o/kkbZ fefFkyk uxj lqgkbZ	 101
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
21   I;kjh yxsa cjlkus dh xfy;ka			105

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
22   ml xqEct ls Jh’;kekth rkfd jgh gSa		112

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
23   ok>k, oru [ks ts vkma lkjs Lokfe lqEgka		116
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
24   ok>k, oru [ks ts vkma o`t eq;kfl			117
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
25   ok>k, oj ojf.k [ks lkjs fn+;ka lkgq			118
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
26   v³.kq vkckfn dfj Jhjk/kk				121
      </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
27   olh jgs 'kf’k Nfc+ T;ksa eu pdksjfu dh		126
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
28   bg ru dks nh;yk d:a				129
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
29   izse ty ls iwfjgwa thou yrk lw[kh ugha		132

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
30   fou;						135
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"श्री सतगुरु वाणी दर्शन ३ "})}>
31   vkxs ys vkoks uS;k dkgs dks Mjr gks			140




    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:'Geet Manjusha (Mangal Kamna)'})}>
•Jhxqjk"Vd						145</Text>

 <View style = {styles.lineStyle} />

 <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:'Geet Manjusha (Mangal Kamna)'})}>

 
•Jhegky&#123;eh efgek					230
 </Text>

 <View style = {styles.lineStyle} />

 <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:'Geet Manjusha (Mangal Kamna)'})}>
•ek;M+h v th lEHkkj					236</Text>

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
