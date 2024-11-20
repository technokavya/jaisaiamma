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

const uri1 = 'pdf/geetmalika/ishanugrah_compressed.pdf';
const uri2 = 'pdf/geetmalika/geet_malika_1_compressed.pdf';
const uri3 = 'pdf/geetmalika/geet_malika_2_compressed.pdf';
const uri4 = 'pdf/geetmalika/geet_malika_3_compressed.pdf';
const uri5 = 'pdf/geetmalika/geet_malika_4_compressed.pdf';
const uri6 = 'pdf/geetmalika/geet_malika_5_compressed.pdf';
const uri6e = 'pdf/geetmalika/geet_malika_5_geet4_compressed.pdf';


const uri7 = 'pdf/geetmalika/geet_malika_6_compressed.pdf';
const uri8 = 'pdf/geetmalika/geet_malika_7_compressed.pdf';
const uri9 = 'pdf/geetmalika/geet_malika_8_compressed.pdf';
const uri10 = 'pdf/geetmalika/geet_malika_9_compressed.pdf';
const uri11= 'pdf/geetmalika/geet_malika_10_compressed.pdf';
const uri12 = 'pdf/geetmalika/geet_malika_11_compressed.pdf';
const uri13 = 'pdf/geetmalika/geet_malika_12_compressed.pdf';
const uri14 = 'pdf/geetmalika/geet_malika_13_compressed.pdf';
const uri15= 'pdf/geetmalika/geet_malika_14_compressed.pdf';
const uri16 = 'pdf/geetmalika/geet_malika_15_compressed.pdf';
const uri17 = 'pdf/geetmalika/geet_malika_16_compressed.pdf';
const uri18 = 'pdf/geetmalika/geet_malika_17_compressed.pdf';
const uri19 = 'pdf/geetmalika/geet_malika_18_compressed.pdf';
const uri20 = 'pdf/geetmalika/geet_malika_19_compressed.pdf';
const uri21 = 'pdf/geetmalika/geet_malika_20_compressed.pdf';
const uri22 = 'pdf/geetmalika/geet_malika_21_compressed.pdf';
const uri23 = 'pdf/geetmalika/geet_malika_22_compressed.pdf';
const uri24 = 'pdf/geetmalika/geet_malika_23_compressed.pdf';
const uri25 = 'pdf/geetmalika/geet_malika_24_compressed.pdf';
const uri26 = 'pdf/geetmalika/geet_malika_25_compressed.pdf';
const uri27 = 'pdf/geetmalika/geet_malika_26_compressed.pdf';
const uri28 = 'pdf/geetmalika/geet_malika_27_compressed.pdf';
const uri29 = 'pdf/geetmalika/geet_malika_28_compressed.pdf';
const uri30 = 'pdf/geetmalika/geet_malika_29_compressed.pdf';
const uri31 = 'pdf/geetmalika/geet_malika_30_compressed.pdf';


const uri32 = 'pdf/geetmalika/geet_malika_31_compressed.pdf';
const uri33 = 'pdf/geetmalika/geet_malika_32_compressed.pdf';
const uri34 = 'pdf/geetmalika/geet_malika_33_compressed.pdf';
const uri35 = 'pdf/geetmalika/geet_malika_34_compressed.pdf';
const uri36 = 'pdf/geetmalika/geet_malika_35_compressed.pdf';
const uri37= 'pdf/geetmalika/geet_malika_36_compressed.pdf';
const uri38= 'pdf/geetmalika/geet_malika_37_compressed.pdf';
const uri39= 'pdf/geetmalika/geet_malika_38_compressed.pdf';
const uri40= 'pdf/geetmalika/geet_malika_39_compressed.pdf';
const uri41= 'pdf/geetmalika/geet_malika_40_compressed.pdf';
const uri42= 'pdf/geetmalika/geet_malika_41_compressed.pdf';
const uri43= 'pdf/geetmalika/geet_malika_42_compressed.pdf';
const uri44= 'pdf/geetmalika/geet_malika_43_compressed.pdf';
const uri45= 'pdf/geetmalika/geet_malika_44_compressed.pdf';
const uri46= 'pdf/geetmalika/geet_malika_45_compressed.pdf';
const uri47= 'pdf/geetmalika/geet_malika_46_compressed.pdf';
const uri48= 'pdf/geetmalika/geet_malika_47_compressed.pdf';
const uri49= 'pdf/geetmalika/geet_malika_48_compressed.pdf';
const uri50= 'pdf/geetmalika/geet_malika_49_compressed.pdf';
const uri51= 'pdf/geetmalika/geet_malika_50_compressed.pdf';
const uri52= 'pdf/geetmalika/geet_malika_51_compressed.pdf';
const uri53= 'pdf/geetmalika/geet_malika_52_compressed.pdf';

const uri54= 'pdf/geetmalika/geet_malika_53_compressed.pdf';
const uri55= 'pdf/geetmalika/geet_malika_54_compressed.pdf';
const uri56= 'pdf/geetmalika/geet_malika_55_compressed.pdf';
const uri57= 'pdf/geetmalika/geet_malika_56_compressed.pdf';
const uri58= 'pdf/geetmalika/geet_malika_57_compressed.pdf';
const uri59= 'pdf/geetmalika/geet_malika_58_compressed.pdf';
const uri60= 'pdf/geetmalika/geet_malika_59_compressed.pdf';
const uri61= 'pdf/geetmalika/geet_malika_60_compressed.pdf';
const uri62= 'pdf/geetmalika/geet_malika_61_compressed.pdf';
const uri63= 'pdf/geetmalika/geet_malika_62_compressed.pdf';
const uri64= 'pdf/geetmalika/geet_malika_63_compressed.pdf';
const uri65= 'pdf/geetmalika/geet_malika_64_compressed.pdf';
const uri66= 'pdf/geetmalika/geet_malika_65_compressed.pdf';
const uri67= 'pdf/geetmalika/geet_malika_66_compressed.pdf';
const uri68= 'pdf/geetmalika/geet_malika_67_compressed.pdf';
const uri69= 'pdf/geetmalika/geet_malika_68_compressed.pdf';
const uri70= 'pdf/geetmalika/geet_malika_69_compressed.pdf';
const uri71= 'pdf/geetmalika/geet_malika_70_compressed.pdf';
const uri72= 'pdf/geetmalika/geet_malika_71_compressed.pdf';
const uri73= 'pdf/geetmalika/geet_malika_72_compressed.pdf';
const uri74= 'pdf/geetmalika/geet_malika_73_compressed.pdf';
const uri75= 'pdf/geetmalika/geet_malika_74_compressed.pdf';
const uri76= 'pdf/geetmalika/geet_malika_75_compressed.pdf';
const uri77= 'pdf/geetmalika/geet_malika_76_compressed.pdf';
const uri78= 'pdf/geetmalika/geet_malika_77_compressed.pdf';
const uri79= 'pdf/geetmalika/geet_malika_78_compressed.pdf';
const uri80= 'pdf/geetmalika/geet_malika_79_compressed.pdf';
const uri81= 'pdf/geetmalika/geet_malika_80_compressed.pdf';
const uri82= 'pdf/geetmalika/geet_malika_81_compressed.pdf';
const uri83= 'pdf/geetmalika/geet_malika_82_compressed.pdf';
const uri84= 'pdf/geetmalika/geet_malika_83_compressed.pdf';
const uri85= 'pdf/geetmalika/geet_malika_84_compressed.pdf';
const uri86= 'pdf/geetmalika/geet_malika_85_compressed.pdf';
const uri87= 'pdf/geetmalika/geet_malika_86_compressed.pdf';
const uri88= 'pdf/geetmalika/geet_malika_87_compressed.pdf';
const uri89= 'pdf/geetmalika/geet_malika_88_compressed.pdf';
const uri90= 'pdf/geetmalika/geet_malika_89_compressed.pdf';
const uri91= 'pdf/geetmalika/geet_malika_90_compressed.pdf';

const uri92= 'pdf/geetmalika/geet_malika_91_compressed.pdf';
const uri93= 'pdf/geetmalika/geet_malika_92_compressed.pdf';
const uri94= 'pdf/geetmalika/geet_malika_93_compressed.pdf';
const uri95= 'pdf/geetmalika/geet_malika_94_compressed.pdf';
const uri96= 'pdf/geetmalika/geet_malika_95_compressed.pdf';
const uri97= 'pdf/geetmalika/geet_malika_96_compressed.pdf';
const uri98= 'pdf/geetmalika/geet_malika_97_compressed.pdf';
const uri99= 'pdf/geetmalika/geet_malika_98_compressed.pdf';
const uri100= 'pdf/geetmalika/geet_malika_99_compressed.pdf';
const uri101= 'pdf/geetmalika/geet_malika_100_compressed.pdf';
const uri102= 'pdf/geetmalika/geet_malika_101_compressed.pdf';
const uri103= 'pdf/geetmalika/geet_malika_102_compressed.pdf';
const uri104= 'pdf/geetmalika/geet_malika_103_compressed.pdf';
const uri105= 'pdf/geetmalika/geet_malika_104_compressed.pdf';
const uri106= 'pdf/geetmalika/geet_malika_105_compressed.pdf';
const uri107= 'pdf/geetmalika/geet_malika_106_compressed.pdf';
const uri108= 'pdf/geetmalika/geet_malika_107_compressed.pdf';
const uri109= 'pdf/geetmalika/geet_malika_108_compressed.pdf';
const uri110= 'pdf/geetmalika/geet_malika_109_compressed.pdf';
const uri111= 'pdf/geetmalika/geet_malika_110_compressed.pdf';
const uri112= 'pdf/geetmalika/geet_malika_111_compressed.pdf';

const uri113= 'pdf/geetmalika/geet_malika_112_compressed.pdf';
const uri114= 'pdf/geetmalika/geet_malika_113_compressed.pdf';
const uri115= 'pdf/geetmalika/geet_malika_114_compressed.pdf';
const uri116= 'pdf/geetmalika/geet_malika_115_compressed.pdf';
const uri117= 'pdf/geetmalika/geet_malika_116_compressed.pdf';
const uri118= 'pdf/geetmalika/geet_malika_117_compressed.pdf';

const uri119= 'pdf/geetmalika/geet_malika_118_compressed.pdf';


export default function Geetmalika({ navigation }) {
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
xhr ekfydk
</Text>
<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

¼ lkbZa veka ,sa vo/k ,sa c`t ljdkj th efgek] Lusg] fou;] vfHkyk"k f’k&123;kk ,sa vk’kh’k ts Hkko ebZ infu] xhrfu ,sa dFkkmfu tks laxzg ½

</Text>

<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
jphan+Mq %
	Jh lkbZa lkfgc d`ik ik=k
	ckck xsghjke
</Text>



      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      vuqdze
</Text>



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:'Geet Malika (Ish Anugrah)'})}>
bZ’k vuqxzg  </Text>
  <View style = {styles.lineStyle} />


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
1&&lkbZa lkfgc efgek
</Text>




      <View style={[styles.card3, styles.shadowProp]} 
                            >
                                  <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Mangalaarti')}} >
    
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"Geet Manjari"})}>
¼d½ efgek ukSinh
  </Text>
  </TouchableOpacity>
  </View>


  <View style = {styles.lineStyle} />

  


  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}  >
  ¼[k½ efgek xhr
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"Geet Malika Geet 1 Page 5"})}>
  1‐  tafg feBs lkbZa v flfdM+h ls[kkjh				   5  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"Geet Malika "})}>
  2‐  Tksdks izse th xaxk ogk,					         7
  </Text>
  <View style = {styles.lineStyle} />
  
  


  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"Geet Malika "})}>
 3‐  ft;ks lkbZa lpk lqdqekj 					        9
 </Text>
 <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6e,bookname:"Geet Malika "})}>
 4‐  lt+.k rqafgth fldM+h lph vk			      10
 </Text>
 <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"Geet Malika "})}>
 5‐  vks lkbZa I;kjk rqafgtks tlM+ks 			      12
 </Text>
 <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"Geet Malika "})}>
 6‐  tS tS euk;ka lkbZa gj Lokal esa			     12
 </Text>
 <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"Geet Malika "})}>
 7‐  I;kjs lh;kjke ts Lusg esa rks			       13
 </Text>
 <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"Geet Malika "})}>
 8‐  ftfr fdfFk lkfgc ykb usg tks 			    14
 </Text>
 <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"Geet Malika "})}>
 9‐  lkbZa lkfgc tu lq[knkbZ				         15
  </Text>
  <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"Geet Malika "})}>
10‐  j?kqukFk I;kjks jh&gt;h rogka [ks			      16
  </Text>
  <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"Geet Malika "})}>
11‐  d#.kk lkxj ukFk th x+k;ka 			      17
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"Geet Malika "})}>
12‐  lnka fnfy Fkh x+k, lkfgc lusgh			   18
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"Geet Malika "})}>
13‐  rqafgtks uke vk izk.k vk/kkj			      19
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"Geet Malika "})}>
14‐  efgjckuq efgj tks ckny lfrxq#			  20
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"Geet Malika "})}>
15‐  lkbZa lh;kjke lusg esa furq			       21
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"Geet Malika "})}>
16‐  tS gks lkbZa lkfgc I;kjk   			      22
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"Geet Malika "})}>
17‐  rqafgts jl jkt esa tafg tkb			      22
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"Geet Malika "})}>
18‐  rogka th efgek tks ikgs ikj			     23
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"Geet Malika "})}>
19‐  vkuUn tks cknyq vkgha   			       24
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"Geet Malika "})}>
20‐  'kj.kkxrfu tks ikydq lkbZa			       25
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"Geet Malika "})}>
21‐  d`ik rogka th ;kfn vk				        26
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"Geet Malika "})}>
22‐  Hkfj;ks vk vf[k;qfu mgks				       27
  </Text>
  <View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"Geet Malika "})}>
23‐  dksfdy jk.kh veka oj oj.kh		       28
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"Geet Malika "})}>
24‐  izk.k vk/kkjh gekjh Jhdksfdy	       29
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"Geet Malika "})}>
25‐  fefBM+s ckcy lkbZav ftfr ftfr	     29
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"Geet Malika "})}>
26‐  ckcy 'ksj ckcy 'ksj lkbZa		 	      30
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"Geet Malika "})}>
27‐  lfrlax tks 'kkgq vka ekfydq			      31
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"Geet Malika "})}>
28‐  lkbZa lkfgc th tS tS x+k;ka		        33
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"Geet Malika "})}>
29‐  vf[k;qfu vfx+;ka lnka fnycj			     34
  </Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"Geet Malika "})}>
30‐  iy iy esa ;kfn ios Fkh				        35
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}} >
¼x½ Lusg xhr
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"Geet Malika "})}>
  31‐  fnfyM+h osbZ vk vksn+kag				         36
  </Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"Geet Malika "})}>
32‐  lkgq lfn+M+ks djs Fkks gj okj			     38
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"Geet Malika "})}>
33‐  ewa[ks jkfr n+hagka vkgs rkfr				      39
  </Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"Geet Malika "})}>
34‐  jkfr n+hag eka #vanh jgka			        41
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"Geet Malika "})}>
35‐  rqafgts nnZ esa fnfy vk				        41
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"Geet Malika "})}>
36‐  #vans #vans jSu fogk.kh				       43
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"Geet Malika "})}>
37‐  jksbZ jksbZ gkyq fo;ks				           44
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"Geet Malika "})}>
38‐  lkfgc lps th ;kfn esa				       46
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"Geet Malika "})}>
39‐  rqafgth fny esa yxfu				         46
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"Geet Malika "})}>
40‐  ewa[ks rogka ts I;kj tks vk			      48
  </Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"Geet Malika "})}>
41‐  vks thou tk lkFkh vks				       49
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"Geet Malika "})}>
42‐  gh.kks gkyq iafgtks dafg [ks				     50
  </Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"Geet Malika "})}>
43‐  lkgq lkgq eqafgtks lt+.k				       51
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"Geet Malika "})}>
44‐  lkgq lfnds d;ka euq izk.k fn+;ka			  52
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"Geet Malika "})}>
45‐  vkm izk.k thou vkm				        53
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:"Geet Malika "})}>
46‐  ewa[ks rqafgth ;kfn th				         54
  </Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:"Geet Malika "})}>
47‐  rqafgts n’kZu ykb eqafgts				       55
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:"Geet Malika "})}>
48‐  thou lkFkh yxfu rks lka			      56
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:"Geet Malika "})}>
49‐  lEHkkfj;ka lEHkkfj;ka lkbZa				      56
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:"Geet Malika "})}>
50‐  rks lka bZ lkfgc uhagM+ks  			      57
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:"Geet Malika "})}>
51‐  thouq /kuq eqafgtks vkgha				       58
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:"Geet Malika "})}>
52‐  rks [ks I;kjy iqdkfj;ka Fkh				     59
  </Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:"Geet Malika "})}>
53‐  eqafgtks lkbZa lt+.kq lnka				       60
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:"Geet Malika "})}>
54‐  rwa Fkhm u vfr v/khj				        62
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:"Geet Malika "})}>
55‐  lfn+M+k dfj;ka furq lfn+M+k				     64
</Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}} >
¼x½ Lusg xhr
  </Text>

  <View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:"Geet Malika "})}>

56‐  lkbZa lkbZa fnfy Fkh iqdkjs				      65
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:"Geet Malika "})}>
57‐  rqafgth rkj vk lkj				         66
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:"Geet Malika "})}>
58‐  rwa bZa lkbZa rwa bZ lkfgcq		  		      67
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:"Geet Malika "})}>
59‐  n;k rqafgth v tks bZ fnycj			    68
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:"Geet Malika "})}>
60‐  HkVdh HkVdh Hkolkxj esa				     69
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:"Geet Malika "})}>
61‐  vks lusgh lkfgc lkbZa				        70
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:"Geet Malika "})}>
62‐  feBk lkbZa feyh tsdj				        71
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:"Geet Malika "})}>
63‐  dsn+k d;k midkj thofu rs			     71
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:"Geet Malika "})}>
64‐  vkfg;ka nklh rqafgts nj th			     72
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:"Geet Malika "})}>
65‐  rqafgth feBh ;kfn esa lkbZa			       74
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:"Geet Malika "})}>
66‐  egjcku lkbZa 'kjf.k rqafgth			     75
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:"Geet Malika "})}>
67‐  lkbZa veka ikanq fx+ph v esa			      76
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:"Geet Malika "})}>
68‐  vk;fl 'kjf.k vogka ts				       77
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:"Geet Malika "})}>
69‐  izk.k I;kjk rqafgts ykb				        78
</Text>
<View style = {styles.lineStyle} />

  
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}} >
¼³½ vfHkykk"kk xhr
 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:"Geet Malika "})}>
70‐  fn+;ka vk’kh’k meax eka  				      79
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:"Geet Malika "})}>
71‐  lkbZa lt+.k rka eka c+ygkj				      80
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:"Geet Malika "})}>
72‐  eka rqafgts I;kj esa eLrkuh				      81
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:"Geet Malika "})}>
73‐  thou eqafgts tkfuc vfHkyk"k	      82
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:"Geet Malika "})}>
74‐  gs izHkw rqafgth lnka 'kj.k	 			      83
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:"Geet Malika "})}>
75‐  rogka th pj.kfu th Nk;k			       84
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:"Geet Malika "})}>
76‐  rqafgth pj.k Nk;k ewa [ks		 	       85
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:"Geet Malika "})}>
77‐  vUnfj vk’k bgk vk izhre			      86
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:"Geet Malika "})}>
78‐  fnfyM+h yx+h vk r ykbZanks			       87
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:"Geet Malika "})}>
79‐  lnk lnk thvks lkb;ka				        88
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:"Geet Malika "})}>
80‐  vks lkbZa vks I;kjk rqafgtks				      99
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:"Geet Malika "})}>
81‐  nklfu tks lpks thou				         90
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:"Geet Malika "})}>
82‐  uk nhu nqfu;k th vk’k vk			     91
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:"Geet Malika "})}>
83‐  dn+gha u dn+gha ekfydq				        92
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:"Geet Malika "})}>
84‐  tsds pkgwa d;wa ewa eu esa				       93
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:"Geet Malika "})}>
85‐  dsn+ks I;kj Hkfj;ks eqafgtks				       94
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:"Geet Malika "})}>
86‐  I;kjk izHkw Hkxfr lka rwa				        96
</Text>
<View style = {styles.lineStyle} />
  
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}  >
¼p½ vk’kh’k xhr
  </Text>

  <View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:"Geet Malika "})}>

  87‐  fpj thvks I;kjk vks				          97
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:"Geet Malika "})}>
  88‐  lkbZa veka fn+;s Fkh fnyM+h				      97
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:"Geet Malika "})}>
89‐  eqafgtks lkbZa lkfgcq lqdqekj			      98
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:"Geet Malika "})}>
90‐  tkfuc tqok.kh rwa 'kky ek.kha			     100
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:"Geet Malika "})}>
91‐  feBs ckcy tk eaxy euk;wa			      101
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:"Geet Malika "})}>
92‐  fnfy rks[ks lEHkkjs Fkh				         102
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:"Geet Malika "})}>
93‐  eqafgts lkbZav tks gjh				         103
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:"Geet Malika "})}>
94‐  feBk lkfgc rqafgth ghv				      104
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:"Geet Malika "})}>
95‐  fpjthvks lkbZa I;kjk fny tk			    105
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri97,bookname:"Geet Malika "})}>
96‐  fpj th;s lkfgcq lkbZa I;kjks			     106
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri98,bookname:"Geet Malika "})}>
  97‐  lkbZa lkfgc lpk Jhj?kqoj c+pk		   107 
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri99,bookname:"Geet Malika "})}>
98‐  lnka [kqf’k jgks fny tk /k.kh			    107
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri100,bookname:"Geet Malika "})}>
99‐  vkbZ eka vkfg;ka lkbZa rqafgts			     108
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri101,bookname:"Geet Malika "})}>
100‐  lnka dkbeq lt+.k rqafgtks				     109
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri102,bookname:"Geet Malika "})}>
101‐  poka tS tS lkbZa poka				        110
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri103,bookname:"Geet Malika "})}>
102‐  Lusg fla/kq lkbZa vk’kh’k				      110
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri104,bookname:"Geet Malika "})}>
103‐  lkbZa veka lkFk jgks				         111
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri105,bookname:"Geet Malika "})}>
104‐  lkbZa vefM+ lnka thvks				       112
</Text>
<View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}  >
  ¼N½ f’k&#123;kk xhr
  </Text>

  <View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri106,bookname:"Geet Malika "})}>

  105‐  lalkj lkxj esa vkgs lfrlax		    113
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri107,bookname:"Geet Malika "})}>
  106‐  tho th thou lQyrk vkgs			   114
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri108,bookname:"Geet Malika "})}>
  107‐  jluk eqafgth rwa lkbZa v th		     115
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri109,bookname:"Geet Malika "})}>
  108‐  lp th jkg esa gyq [k.kh				     116
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri110,bookname:"Geet Malika "})}>
  109‐  ;kfn j[kq tho eqafgtks izHkw	  	     118
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri111,bookname:"Geet Malika "})}>
  110‐  tks lkbZa lkfgc xq.k x+k,			 	     119
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri112,bookname:"Geet Malika "})}>
111‐  ftfu lUrfu vksV orh vk				    120
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri113,bookname:"Geet Malika "})}>
  112‐  Nksu gyha rwa Nksjh larfu n+s			     121
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
2   Jhjke dFkke`r</Text>


  

  <View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri114,bookname:"Geet Malika "})}>
113‐  lp ,sa /keZ th lhek vkgs				     122
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri115,bookname:"Geet Malika "})}>
114‐  jk?ko feBs tks usgh yky y[k.kq			   124
  </Text>


  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri116,bookname:"Geet Malika "})}>
  3   yhyk n’kZu					
  </Text>


  <View style = {styles.lineStyle} />

  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri117,bookname:"Geet Malika "})}>
  4   veksyd f’k&#123;kkÅa				     
</Text>


  <View style = {styles.lineStyle} />

  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri118,bookname:"Geet Malika "})}>
  5   e/kqj vfHkyk"kkÅa	
</Text>


  <View style = {styles.lineStyle} />


  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri119,bookname:"Geet Malika "})}>
  6   efgek ek/kq;Z
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
