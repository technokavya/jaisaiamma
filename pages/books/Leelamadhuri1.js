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



const uri1 = 'pdf/leelamadhuri1/leela_madhuri1_01_compressed.pdf';


const uri2 = 'pdf/leelamadhuri1/leela_madhuri1_02_compressed.pdf';
const uri3 = 'pdf/leelamadhuri1/leela_madhuri1_03_compressed.pdf';

const uri4 = 'pdf/leelamadhuri1/leela_madhuri1_04_compressed.pdf';
const uri5 = 'pdf/leelamadhuri1/leela_madhuri1_05_compressed.pdf';
const uri6 = 'pdf/leelamadhuri1/leela_madhuri1_06_compressed.pdf';
const uri7 = 'pdf/leelamadhuri1/leela_madhuri1_07_compressed.pdf';
const uri8 = 'pdf/leelamadhuri1/leela_madhuri1_08_compressed.pdf';
const uri9 = 'pdf/leelamadhuri1/leela_madhuri1_09_compressed.pdf';
const uri10 = 'pdf/leelamadhuri1/leela_madhuri1_10_compressed.pdf';
const uri11= 'pdf/leelamadhuri1/leela_madhuri1_11_compressed.pdf';
const uri12= 'pdf/leelamadhuri1/leela_madhuri1_12_compressed.pdf';
const uri13= 'pdf/leelamadhuri1/leela_madhuri1_13_compressed.pdf';
const uri14= 'pdf/leelamadhuri1/leela_madhuri1_14_compressed.pdf';
const uri15= 'pdf/leelamadhuri1/leela_madhuri1_15_compressed.pdf';
const uri16= 'pdf/leelamadhuri1/leela_madhuri1_16_compressed.pdf';
const uri17= 'pdf/leelamadhuri1/leela_madhuri1_17_compressed.pdf';

const uri18= 'pdf/leelamadhuri1/leela_madhuri1_19_compressed.pdf';
const uri19= 'pdf/leelamadhuri1/leela_madhuri1_19_compressed.pdf';

const uri20= 'pdf/leelamadhuri1/leela_madhuri1_20_compressed.pdf';
const uri21= 'pdf/leelamadhuri1/leela_madhuri1_21_compressed.pdf';
const uri22= 'pdf/leelamadhuri1/leela_madhuri1_22_compressed.pdf';
const uri23= 'pdf/leelamadhuri1/leela_madhuri1_23_compressed.pdf';
const uri24= 'pdf/leelamadhuri1/leela_madhuri1_24_compressed.pdf';
const uri25= 'pdf/leelamadhuri1/leela_madhuri1_25_compressed.pdf';
const uri26= 'pdf/leelamadhuri1/leela_madhuri1_26_compressed.pdf';
const uri27= 'pdf/leelamadhuri1/leela_madhuri1_27_compressed.pdf';
const uri28= 'pdf/leelamadhuri1/leela_madhuri1_28_compressed.pdf';
const uri29= 'pdf/leelamadhuri1/leela_madhuri1_29_compressed.pdf';


const uri30= 'pdf/leelamadhuri1/leela_madhuri1_30_compressed.pdf';
const uri31= 'pdf/leelamadhuri1/leela_madhuri1_31_compressed.pdf';
const uri32= 'pdf/leelamadhuri1/leela_madhuri1_32_compressed.pdf';







const uri33= 'pdf/leelamadhuri1/leela_madhuri1_geet1_compressed.pdf';
const uri34= 'pdf/leelamadhuri1/leela_madhuri1_geet2_compressed.pdf';
const uri35= 'pdf/leelamadhuri1/leela_madhuri1_geet3_compressed.pdf';
const uri36= 'pdf/leelamadhuri1/leela_madhuri1_geet4_compressed.pdf';
const uri37= 'pdf/leelamadhuri1/leela_madhuri1_geet5_compressed.pdf';
const uri38= 'pdf/leelamadhuri1/leela_madhuri1_geet6_compressed.pdf';
const uri39= 'pdf/leelamadhuri1/leela_madhuri1_geet7_compressed.pdf';
const uri40= 'pdf/leelamadhuri1/leela_madhuri1_geet8_compressed.pdf';
const uri41= 'pdf/leelamadhuri1/leela_madhuri1_geet9_compressed.pdf';
const uri42= 'pdf/leelamadhuri1/leela_madhuri1_geet10_compressed.pdf';
const uri43= 'pdf/leelamadhuri1/leela_madhuri1_geet11_compressed.pdf';
const uri44= 'pdf/leelamadhuri1/leela_madhuri1_geet12_compressed.pdf';
const uri45= 'pdf/leelamadhuri1/leela_madhuri1_geet13_compressed.pdf';
const uri46= 'pdf/leelamadhuri1/leela_madhuri1_geet14_compressed.pdf';











export default function Leelamadhuri1({ navigation }) {
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

<Text style={{fontSize:40,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0}}>
Jh lkbZalkfgc yhyk ek/kqjh</Text>


<Text style={{fontSize:20,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

¿ fla/kh dfork À

Hkkx+q ifgfj;ksa





</Text>

<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
jphan+Mq %
	Jh lkbZa lkfgc d`ik ik=k
	ckck xsghjke
</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
izdk’kd %&
iwT;ikn Lokeh Jhv[k.MkuUn
   ljLorh th egkjkt
  Jh d`".kkJe o`Unkcu A

</Text>



      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      •lwph•
</Text>





<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"लीला माधुरी १"})}>
1 &Hkwfedk					  1

  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"लीला माधुरी १"})}>
2 & Jh lkbZa lkfgc Jh eq[k opuk¡e`r		

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"लीला माधुरी १"})}>
3 &ijkRij Jh fl;kjke					27

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"लीला माधुरी १"})}>
4 &Jh jke uke jgL;					32
   
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"लीला माधुरी १"})}>
5 &izse jl fl)kUrq					39
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"लीला माधुरी १"})}>
6 &Jh lkdsr ukFk th e/kqj efgek			46
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"लीला माधुरी १"})}>
7 & fojg vkos’k esa pj.k fpUg			57&63
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"लीला माधुरी १"})}>
8 &eaxyk pj.k						 1
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"लीला माधुरी १"})}>
9 &tueq ,Sa cky yhyk					 6
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"लीला माधुरी १"})}>
10&oSjkX;q ,Sa Jh lfrxqj fey.kq				23
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"लीला माधुरी १"})}>
”    fojg >kadh						30
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"लीला माधुरी १"})}>
11&Jh ehjiqfj njckj 					38
    
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"लीला माधुरी १"})}>
12&Jh fefFkyk th ekSt					61
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"लीला माधुरी १"})}>
13&oru esa ohj.kq					67
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"लीला माधुरी १"})}>
14&}kjdk tks nhnk#					72
	</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"लीला माधुरी १"})}>
15& ehjiqfj esa ekfydq					76   </Text>
<View style = {styles.lineStyle} />






<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"लीला माधुरी १"})}>
16&Jh o`Unkcu n’kZu					80




  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"लीला माधुरी १"})}>
17&fp=q fojg o.kdkj					84
</Text>
<View style = {styles.lineStyle} />




  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"लीला माधुरी १"})}>
  18& jlhyh jfg.kh					87


  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"लीला माधुरी १"})}>
19&okg FkYgks Hkkx+fu Hkyks				97
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"लीला माधुरी १"})}>
”  Jh y&#123;e.k fu"kkn lEokn				99
</Text>
<View style = {styles.lineStyle} />













<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"लीला माधुरी १"})}>

20&vkjkthv rs vuqxzg					106

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"लीला माधुरी १"})}>
”  Hkjr yky tks lusgq				107

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"लीला माधुरी १"})}>
”  Jh d`".k th vck.kh mdhj ,Sa xksih izse		114

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"लीला माधुरी १"})}>
21&ykywv esa jl th fjgkaf.k				122

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"लीला माधुरी १"})}>
”  Jh dkS’kY;k vefM+ fofjgq				129

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"लीला माधुरी १"})}>
22&lkbZa v ?kfj lUr					137

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"लीला माधुरी १"})}>
”  cuoklh Jh jke ykb I;k# 			138

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"लीला माधुरी १"})}>
23&Jh czt ;k=k					152

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"लीला माधुरी १"})}>
”  Jh jk/kk Lokfefu tUe dFkk				158

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"लीला माधुरी १"})}>
24& lRlaxq ,Sa ,dkfUr fouksnq				169

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"लीला माधुरी १"})}>
25&lUrfu lusgh lkbZa					179

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"लीला माधुरी १"})}>
26&Hkkufu esa Hkxqokuq					185

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"लीला माधुरी १"})}>
27&lfrxqj l[kk lka fey.kq ,Sa lans’kq			191

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"लीला माधुरी १"})}>
28& Jh xhrk esa e/kqj Hkfä				199

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"लीला माधुरी १"})}>
”  fiz;k izhre fouksnq					203

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"लीला माधुरी १"})}>
29&iapoVhv [kka czt/kke			206

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"लीला माधुरी १"})}>
”  Jh fl; j?kqoj ljlq lusgq				211

</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"लीला माधुरी १"})}>

30& Jh ehjiqfj esa eka>knfu egUrq			242

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"लीला माधुरी १"})}>
31& iq"dj jkt tSiqfj Jh jk/kk dq.Mq			248

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"लीला माधुरी १"})}>
32& flU/kqM+hv esa lkbZa 				270

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"लीला माधुरी १"})}>
”  Jh lkdsr Lokfefu th efgek		  287&300

</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
xhr lwph

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"लीला माधुरी १"})}>


1&lkdsr tks lqyrkuq M+h] i`Fohv eka izxVq fFk;ks	59

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"लीला माधुरी १"})}>
2&fld okjfu tks lkFkh ds# fc+;k		232

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"लीला माधुरी १"})}>
3&ckcy 'ksj feBk efgj tks vt+q esa?kq olkbZa	239

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"लीला माधुरी १"})}>
4&ckcy  +cq/kkb ewa[ks jke uke tks dks jflM+k	243

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"लीला माधुरी १"})}>
5&vk;qfe Jh dq.M /kke esa lkbZa xkso/kZuq ?kqeanks	260

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"लीला माधुरी १"})}>
6&Jhtw vefM+ th dhjfr dksV v¡e`r lka Hkjh vk	267

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"लीला माधुरी १"})}>
7&jgq 'kjf.k esa xq#nso ts ifgatks ik.kq folkjs	274

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"लीला माधुरी १"})}>
8&lRlax tks ljnk# M+h] ckcy c+sM+hv rs pfM+fg;ks	281

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"लीला माधुरी १"})}>
9&;qxy tks izseq rogka tks thou vk/kk# vk	293

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"लीला माधुरी १"})}>
10&rks[ks fl;kjke lEHkkjs ifgats I;kjfu esa		298

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"लीला माधुरी १"})}>
11&lkfgc rogka th lR; Hkfä vk		301

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"लीला माधुरी १"})}>
12&lkbZa lkfgc pj.kfu tks ewa[ks lnka vk/kk# vk	302

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"लीला माधुरी १"})}>
13&ewa[ks iy iy rqfgatks I;k# [kis		302

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"लीला माधुरी १"})}>
14&fp# thoks lkfgc fp# thoks I;kjk		303

</Text>
<View style = {styles.lineStyle} />




  </View>


    </View>
    
    <View style={{backgroundColor:'#e5e5e5'}}>
     <View style={styles.AudioPLayer}>
           
     <Text style={{fontSize: 30,textAlign:'justify', marginTop:5, marginLeft:'0%', fontFamily:'K246',color:'red'}} >
     AA t; lkabZ vEek lnk [kqf’k AA </Text>
     

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
