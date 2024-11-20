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
  const [fontSize, setFontSize] = useState(16); // Initial font sizea

};



const uri0 = 'pdf/geetmaralika/Geet_Maralika_0_compressed.pdf';
const uri0_1 = 'pdf/geetmaralika/Geet_Maralika_0_1_compressed.pdf';


const uri1 = 'pdf/geetmaralika/Geet_Maralika_1_compressed.pdf';

const uri2 = 'pdf/geetmaralika/Geet_Maralika_2_compressed.pdf';
const uri3 = 'pdf/geetmaralika/Geet_Maralika_3_compressed.pdf';

const uri4 = 'pdf/geetmaralika/Geet_Maralika_4_compressed.pdf';
const uri5 = 'pdf/geetmaralika/Geet_Maralika_5_compressed.pdf';
const uri6 = 'pdf/geetmaralika/Geet_Maralika_6_compressed.pdf';
const uri7 = 'pdf/geetmaralika/Geet_Maralika_7_compressed.pdf';
const uri8 = 'pdf/geetmaralika/Geet_Maralika_8_compressed.pdf';
const uri9 = 'pdf/geetmaralika/Geet_Maralika_9_compressed.pdf';
const uri10 = 'pdf/geetmaralika/Geet_Maralika_10_compressed.pdf';
const uri11= 'pdf/geetmaralika/Geet_Maralika_11_compressed.pdf';
const uri12= 'pdf/geetmaralika/Geet_Maralika_12_compressed.pdf';
const uri13= 'pdf/geetmaralika/Geet_Maralika_13_compressed.pdf';
const uri14= 'pdf/geetmaralika/Geet_Maralika_14_compressed.pdf';
const uri15= 'pdf/geetmaralika/Geet_Maralika_15_compressed.pdf';
const uri16= 'pdf/geetmaralika/Geet_Maralika_16_compressed.pdf';
const uri17= 'pdf/geetmaralika/Geet_Maralika_17_compressed.pdf';

const uri18= 'pdf/geetmaralika/Geet_Maralika_18_compressed.pdf';
const uri19= 'pdf/geetmaralika/Geet_Maralika_19_compressed.pdf';

const uri20= 'pdf/geetmaralika/Geet_Maralika_20_compressed.pdf';
const uri21= 'pdf/geetmaralika/Geet_Maralika_21_compressed.pdf';
const uri22= 'pdf/geetmaralika/Geet_Maralika_22_compressed.pdf';
const uri23= 'pdf/geetmaralika/Geet_Maralika_23_compressed.pdf';
const uri24= 'pdf/geetmaralika/Geet_Maralika_24_compressed.pdf';
const uri25= 'pdf/geetmaralika/Geet_Maralika_25_compressed.pdf';
const uri26= 'pdf/geetmaralika/Geet_Maralika_26_compressed.pdf';
const uri27= 'pdf/geetmaralika/Geet_Maralika_27_compressed.pdf';
const uri28= 'pdf/geetmaralika/Geet_Maralika_28_compressed.pdf';
const uri29= 'pdf/geetmaralika/Geet_Maralika_29_compressed.pdf';


const uri30= 'pdf/geetmaralika/Geet_Maralika_30_compressed.pdf';
const uri31= 'pdf/geetmaralika/Geet_Maralika_31_compressed.pdf';
const uri32= 'pdf/geetmaralika/Geet_Maralika_32_compressed.pdf';
const uri33= 'pdf/geetmaralika/Geet_Maralika_33_compressed.pdf';
const uri34= 'pdf/geetmaralika/Geet_Maralika_34_compressed.pdf';
const uri35= 'pdf/geetmaralika/Geet_Maralika_35_compressed.pdf';
const uri36= 'pdf/geetmaralika/Geet_Maralika_36_compressed.pdf';
const uri37= 'pdf/geetmaralika/Geet_Maralika_37_compressed.pdf';
const uri38= 'pdf/geetmaralika/Geet_Maralika_38_compressed.pdf';
const uri39= 'pdf/geetmaralika/Geet_Maralika_39_compressed.pdf';
const uri40= 'pdf/geetmaralika/Geet_Maralika_40_compressed.pdf';

const uri41= 'pdf/geetmaralika/Geet_Maralika_41_compressed.pdf';
const uri42= 'pdf/geetmaralika/Geet_Maralika_42_compressed.pdf';
const uri43= 'pdf/geetmaralika/Geet_Maralika_43_compressed.pdf';
const uri44= 'pdf/geetmaralika/Geet_Maralika_44_compressed.pdf';
const uri45= 'pdf/geetmaralika/Geet_Maralika_45_compressed.pdf';
const uri46= 'pdf/geetmaralika/Geet_Maralika_46_compressed.pdf';
const uri47= 'pdf/geetmaralika/Geet_Maralika_47_compressed.pdf';
const uri48= 'pdf/geetmaralika/Geet_Maralika_48_compressed.pdf';
const uri49= 'pdf/geetmaralika/Geet_Maralika_49_compressed.pdf';
const uri50= 'pdf/geetmaralika/Geet_Maralika_50_compressed.pdf';

const uri51= 'pdf/geetmaralika/Geet_Maralika_51_compressed.pdf';
const uri52= 'pdf/geetmaralika/Geet_Maralika_52_compressed.pdf';
const uri53= 'pdf/geetmaralika/Geet_Maralika_53_compressed.pdf';
const uri54= 'pdf/geetmaralika/Geet_Maralika_54_compressed.pdf';
const uri55= 'pdf/geetmaralika/Geet_Maralika_55_compressed.pdf';
const uri56= 'pdf/geetmaralika/Geet_Maralika_56_compressed.pdf';
const uri57= 'pdf/geetmaralika/Geet_Maralika_57_compressed.pdf';
const uri58= 'pdf/geetmaralika/Geet_Maralika_58_compressed.pdf';
const uri59= 'pdf/geetmaralika/Geet_Maralika_59_compressed.pdf';
const uri60= 'pdf/geetmaralika/Geet_Maralika_60_compressed.pdf';

const uri61= 'pdf/geetmaralika/Geet_Maralika_61_compressed.pdf';
const uri62= 'pdf/geetmaralika/Geet_Maralika_62_compressed.pdf';
const uri63= 'pdf/geetmaralika/Geet_Maralika_63_compressed.pdf';
const uri64= 'pdf/geetmaralika/Geet_Maralika_64_compressed.pdf';
const uri65= 'pdf/geetmaralika/Geet_Maralika_65_compressed.pdf';
const uri66= 'pdf/geetmaralika/Geet_Maralika_66_compressed.pdf';
const uri67= 'pdf/geetmaralika/Geet_Maralika_67_compressed.pdf';
const uri68= 'pdf/geetmaralika/Geet_Maralika_68_compressed.pdf';
const uri69= 'pdf/geetmaralika/Geet_Maralika_69_compressed.pdf';
const uri70= 'pdf/geetmaralika/Geet_Maralika_70_compressed.pdf';

const uri71= 'pdf/geetmaralika/Geet_Maralika_71_compressed.pdf';
const uri72= 'pdf/geetmaralika/Geet_Maralika_72_compressed.pdf';
const uri73= 'pdf/geetmaralika/Geet_Maralika_73_compressed.pdf';
const uri74= 'pdf/geetmaralika/Geet_Maralika_74_compressed.pdf';
const uri75= 'pdf/geetmaralika/Geet_Maralika_75_compressed.pdf';
const uri76= 'pdf/geetmaralika/Geet_Maralika_76_compressed.pdf';
const uri77= 'pdf/geetmaralika/Geet_Maralika_77_compressed.pdf';
const uri78= 'pdf/geetmaralika/Geet_Maralika_78_compressed.pdf';
const uri79= 'pdf/geetmaralika/Geet_Maralika_79_compressed.pdf';
const uri80= 'pdf/geetmaralika/Geet_Maralika_80_compressed.pdf';




const uri81= 'pdf/geetmaralika/Geet_Maralika_81_compressed.pdf';
const uri82= 'pdf/geetmaralika/Geet_Maralika_82_compressed.pdf';
const uri83= 'pdf/geetmaralika/Geet_Maralika_83_compressed.pdf';
const uri84= 'pdf/geetmaralika/Geet_Maralika_84_compressed.pdf';
const uri85= 'pdf/geetmaralika/Geet_Maralika_85_compressed.pdf';
const uri86= 'pdf/geetmaralika/Geet_Maralika_86_compressed.pdf';
const uri87= 'pdf/geetmaralika/Geet_Maralika_87_compressed.pdf';
const uri88= 'pdf/geetmaralika/Geet_Maralika_88_compressed.pdf';
const uri89= 'pdf/geetmaralika/Geet_Maralika_89_compressed.pdf';
const uri90= 'pdf/geetmaralika/Geet_Maralika_90_compressed.pdf';

const uri91= 'pdf/geetmaralika/Geet_Maralika_91_compressed.pdf';
const uri92= 'pdf/geetmaralika/Geet_Maralika_92_compressed.pdf';
const uri93= 'pdf/geetmaralika/Geet_Maralika_93_compressed.pdf';
const uri94= 'pdf/geetmaralika/Geet_Maralika_94_compressed.pdf';
const uri95= 'pdf/geetmaralika/Geet_Maralika_95_compressed.pdf';
const uri96= 'pdf/geetmaralika/Geet_Maralika_96_compressed.pdf';
const uri97= 'pdf/geetmaralika/Geet_Maralika_97_compressed.pdf';
const uri98= 'pdf/geetmaralika/Geet_Maralika_98_compressed.pdf';
const uri99= 'pdf/geetmaralika/Geet_Maralika_99_compressed.pdf';
const uri100= 'pdf/geetmaralika/Geet_Maralika_100_compressed.pdf';
const uri101= 'pdf/geetmaralika/Geet_Maralika_101_compressed.pdf';
const uri102= 'pdf/geetmaralika/Geet_Maralika_102_compressed.pdf';
const uri103= 'pdf/geetmaralika/Geet_Maralika_103_compressed.pdf';
const uri104= 'pdf/geetmaralika/Geet_Maralika_104_compressed.pdf';
const uri105= 'pdf/geetmaralika/Geet_Maralika_105_compressed.pdf';
const uri106= 'pdf/geetmaralika/Geet_Maralika_106_compressed.pdf';
const uri107= 'pdf/geetmaralika/Geet_Maralika_107_compressed.pdf';
const uri108= 'pdf/geetmaralika/Geet_Maralika_108_compressed.pdf';
const uri109= 'pdf/geetmaralika/Geet_Maralika_109_compressed.pdf';
const uri110= 'pdf/geetmaralika/Geet_Maralika_110_compressed.pdf';
const uri111= 'pdf/geetmaralika/Geet_Maralika_111_compressed.pdf';

const uri112= 'pdf/geetmaralika/Geet_Maralika_112_compressed.pdf';
const uri113= 'pdf/geetmaralika/Geet_Maralika_113_compressed.pdf';
const uri114= 'pdf/geetmaralika/Geet_Maralika_114_compressed.pdf';
const uri115= 'pdf/geetmaralika/Geet_Maralika_115_compressed.pdf';
const uri116= 'pdf/geetmaralika/Geet_Maralika_116_compressed.pdf';
const uri117= 'pdf/geetmaralika/Geet_Maralika_117_compressed.pdf';
const uri118= 'pdf/geetmaralika/Geet_Maralika_118_compressed.pdf';



const uri119= 'pdf/geetmaralika/Geet_Maralika_119_compressed.pdf';
const uri120= 'pdf/geetmaralika/Geet_Maralika_120_compressed.pdf';
const uri121= 'pdf/geetmaralika/Geet_Maralika_121_compressed.pdf';
const uri122= 'pdf/geetmaralika/Geet_Maralika_122_compressed.pdf';
const uri123= 'pdf/geetmaralika/Geet_Maralika_123_compressed.pdf';

export default function Geetmaralika({ navigation }) {
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
xhr ejkfydk</Text>


<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

¼ c`t ljdkj th tUe ok/kkbZ] efgek cky yhyk] vfHkyk"kk
,sa vk’kh’k ts Hkkoe;h xhrfu ,sa dFkkmfu tks laxzg ½


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



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manjusha (Mangal Kamna)'})}>
ije vuqxzg </Text>

 <View style = {styles.lineStyle} />




 <Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:'Geet Manjusha (Mangal Kamna)'})}>
 1 &lkbZa lkfgc efgek
</Text>


<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
2   tUe ok/kkbZ					</Text>

<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼d½ Jhd`".k tUe							</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"Geet Manjula"})}>
1‐  eksguq t+kvks eksguq t+kvks				   6
  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"Geet Manjula"})}>
2‐  xksdqy ts ?kj ?kj esa				   7
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"Geet Manjula"})}>
3‐  rqfgatks va³.kq lksHkkjks ;’kksnk			   9
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"Geet Manjula"})}>
4‐  I;kjks ';keq lnka lq[k/kke				  10
   
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"Geet Manjula"})}>
5‐  x+k;aw tUe ok/kkbZ uUnyky th			  11
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"Geet Manjula"})}>
6‐  ;’kksnk vefM+ [ks t+kvks				  12
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"Geet Manjula"})}>
7‐  t+kvks vefM+ rks[ks c+k#				  13
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"Geet Manjula"})}>
8‐  vk;ks c`t esa ckadyq fcgkjh			  15
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"Geet Manjula"})}>
9‐  I;kjs d`".k dUgkbZv th tS tS			  16
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"Geet Manjula"})}>
10‐ fFk;ks rqfgatks va³.kq lksHkkjks			  17 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼[k½ Jhtw tUe					</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"Geet Manjula"})}>
11‐  Jh dhjfr dU;k t+kbZ vk			  18
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"Geet Manjula"})}>
12‐  ckck o`"Hkkuq jk; rks[ks				  19
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"Geet Manjula"})}>
13‐  vf[kfM+;qfu tks vkjkeq c+fpM+h			  20
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼x½ vefM+ eksnq				</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"Geet Manjula"})}>
14‐  rqafgtwa ØksM+ Hkyk;wa				  22
</Text>
<View style = {styles.lineStyle} />




<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
3   Jh d`".k c+ky yhyk							</Text>

<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"Geet Manjula"})}>
15‐  vks esjs I;kjs fd’ku				23
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"Geet Manjula"})}>
 16‐  eka eq>s vkapy esa Nqikys				24
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"Geet Manjula"})}>
17‐  I;kjs dkUgk NksfM+ esjh Mxj			25

</Text>
<View style = {styles.lineStyle} />




  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"Geet Manjula"})}>


  18‐  lquks c`t xkSjh nf/k nku				26
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"Geet Manjula"})}>
19‐  eksgu NksfM+ ns olu				27
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
4   efgek xhr				</Text>

<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼d½ Jhd`".k efgek								</Text>
<View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"Geet Manjula"})}>
20‐  fgfdM+ks lusgh lfpM+ks				29
  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"Geet Manjula"})}>
21‐  eu eksgu eu Hkk;s				30
 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"Geet Manjula"})}>
22‐  o¥q u xksiky rwa cu esa 			31
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"Geet Manjula"})}>
23‐  eqfgatks c+ky fd’kuq ?kj 				33
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"Geet Manjula"})}>
24‐  dkuw eksjs vkm&dkUgk eksjs			34
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"Geet Manjula"})}>
25‐  /khjs ls vktk jh eksgu dh			35
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"Geet Manjula"})}>
26‐  I;kjs ';ke lqdqekj				36
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"Geet Manjula"})}>
27‐  I;kjs dUgS;k nkÅth ds HkS;k			37
  
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"Geet Manjula"})}>
28‐  vkvks uUn ds dqekj izk.k I;kjs			37
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"Geet Manjula"})}>
29‐  uUn uUnu I;kjs vkvks				38
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"Geet Manjula"})}>
30‐  eqjyh euksgj fi;k ';kelqUnj			39
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"Geet Manjula"})}>
31‐  vks eqfgatk I;kjk ';ke dUgkbZ			40
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"Geet Manjula"})}>
32‐  izk.k I;kjk rwa gk.ks fl?kks vkm			42
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"Geet Manjula"})}>
33‐  fnfy rks[ks ln+ djs Fkh				43</Text>
  <View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼[k½ Jhtw efgek				</Text>
<View style = {styles.lineStyle} />










<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"Geet Manjula"})}>
34‐  jk/ks jk/ks ca’kh jgh iqdkj			44

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"Geet Manjula"})}>
35‐  tueq lQyq vt+q fFk;ks				44
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"Geet Manjula"})}>
36‐  Jh tw vefM+ [ks lnka				45
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"Geet Manjula"})}>
37‐  egjcku egjcku vefM+ jk/kk			47
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"Geet Manjula"})}>
38‐  mFkfu Fkk meax iy iy				47
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"Geet Manjula"})}>
39‐  o¥ha n+s ok/kkbZ vefM+ [ks				48
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"Geet Manjula"})}>
40‐  ckcqy dh nqvk,a ysrh tk			50

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"Geet Manjula"})}>
41‐  [kq’kh [kq’kh dj nks fonk				51  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼x½ ;qxy efgek						</Text>
<View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"Geet Manjula"})}>
42‐  jru tfVr 'kS;k lqeufu lka			52
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"Geet Manjula"})}>
43‐  ?kqefu Fkk c+bZ xys c+kag n+sbZ			53
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"Geet Manjula"})}>
44‐  t; Jhd`".k deyny ykspu			54

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"Geet Manjula"})}>
45‐  ;qxy twa x+kfYgfM+;wa ve`r			56</Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
5   mRlo xhr						</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"Geet Manjula"})}>
46‐  vkm lt+.k gk.ks jaxq mnk;wa			 58
   

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:"Geet Manjula"})}>
47‐  vkbZ Qkx cgkj lquks lqdqekj			59
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:"Geet Manjula"})}>
48‐  Qwy caxys dh 'kksH;k I;kjh			60
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:"Geet Manjula"})}>
49‐  >wyks >wyks ;qxyoj				61
</Text>
<View style = {styles.lineStyle} />








<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
6   lusg xhr						</Text>

<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼d½ feBh vefM+ Lusg									</Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:"Geet Manjula"})}>
50‐  dnq# dksu d;M+qfe				  63

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:"Geet Manjula"})}>
51‐  ckiw ! vogka ts nj th				64

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:"Geet Manjula"})}>
52‐  ds# laEHkky.k bZanks js dkUgk			65

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:"Geet Manjula"})}>
53‐  Jhd`".k c+ps twa x+kfYgfM+;wa			67
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:"Geet Manjula"})}>
54‐  fnfyM+h d`".k bZ d`".k iqdkjs			69
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:"Geet Manjula"})}>
55‐  jk.kh nsodh eka rqafgth				71
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:"Geet Manjula"})}>
56‐  d`".k c+fpM+k eka rqafgth				72
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:"Geet Manjula"})}>
57‐  iafgts dkUgy n+s eka				73
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:"Geet Manjula"})}>
58‐  Åa/ko  +cq/kkb eka [ks				75
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:"Geet Manjula"})}>
59‐  Nks Fkh jksbZ veka				77
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:"Geet Manjula"})}>
60‐  yfBM+h vlka va/kfu th				79
  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:"Geet Manjula"})}>
61‐  gk ! gk ! Lokeh dkFks dkUgq			80
  </Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:"Geet Manjula"})}>
62‐  eqfgatk c+ky fd’ku eqafgtk c+ky			84
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:"Geet Manjula"})}>
63‐  gk; eqfgatk x+fpM+k x+jfu			85
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:"Geet Manjula"})}>
64‐  vph dkUgka va³.kq iafgtks			86
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:"Geet Manjula"})}>
65‐  dkn+s o¥ka rks[ks fgfrM+ Nn+s 			87
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:"Geet Manjula"})}>
66‐  ;’kqefr eu vfHkyk"k c&lt;	+kos			90
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:"Geet Manjula"})}>
67‐  gk; eqfgatk x+fpM+k x+jfu			93
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:"Geet Manjula"})}>
68‐  o¥ka dkn+q Nn+s rks[ks				94
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:"Geet Manjula"})}>
69‐  lHkq lgkjk fo;k NqVh				95
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:"Geet Manjula"})}>
70‐  vks vfryfM+ uUgha ykn+qyh			96

 </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼[k½ Jhtw Lusg 
							</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:"Geet Manjula"})}>
71‐  fnfy nq[kh v tks ds# vkgs			97
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:"Geet Manjula"})}>
72‐  vks veka ckck vkKk fn+;ks			100
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:"Geet Manjula"})}>
73‐  +cq/kq ';kelqUnj xq.kfu efUnj			102
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:"Geet Manjula"})}>
74‐  ifgjha I;kj djs ewa [ks ifgatks d;ks 		103
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:"Geet Manjula"})}>
75‐  eqafgtk I;kjk fd’ku eqafgtk			106
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:"Geet Manjula"})}>
76‐  n+hagq Fkks n+dk, jkfr Fkh #vk,			108
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:"Geet Manjula"})}>
77‐  ?k.kks u #vkjhafe jl fuf/k jk.kk			110
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:"Geet Manjula"})}>
78‐  izhre oVka ikrh vt+q 'kky bZanh			112
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:"Geet Manjula"})}>
79‐  rqafgts n’kZUk fcuk izhre				113
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:"Geet Manjula"})}>
80‐  nq[kfu nhuq dbZ feBh c+fpM+h			115
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:"Geet Manjula"})}>
81‐  gyq HksuM+h laHkkys vkgs jLrks			116
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:"Geet Manjula"})}>
82‐  rqafgth ;kfn esa Jhtw Lokfefu			118
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:"Geet Manjula"})}>
83‐  eqafgts I;kjs izk.kukFk lka				119
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:"Geet Manjula"})}>
84‐  I;kjy iydqfu ikao /kjhafe			119
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:"Geet Manjula"})}>
85‐  dafg fNjdk;ks I;kjy rks[ks			120
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:"Geet Manjula"})}>
86‐  rafgth rdh rwa okV fiz;k			121
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:"Geet Manjula"})}>
87‐  gyka izhre n+s gksfj;ka gksfj;ka			122
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:"Geet Manjula"})}>
88‐  eqafgtks euq Fkks ln+s				123
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:"Geet Manjula"})}>
89‐  iwfjM+k iofu iy iy esa uoka			125
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:"Geet Manjula"})}>
90‐  t; izk.kukFk izk.k thou I;kjk			126
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:"Geet Manjula"})}>
91‐  fnfy ts nnZ [ks fnycj Fkks t+k.kh			127
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:"Geet Manjula"})}>
92‐  rqafgth ;kfn tkfuc Fkh gj gj #vkjs		127
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:"Geet Manjula"})}>
93‐  dhjfr dqavfj [ks lnka fnfy			128
</Text>
<View style = {styles.lineStyle} />









<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼[k½ xksih Lusg 							</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:"Geet Manjula"})}>
94‐  vks eqjyh okys eueksgu				130


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:"Geet Manjula"})}>
95‐  uhagM+ks yx+ks vk r ukFk				132
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:"Geet Manjula"})}>
96‐  Å/koa  +c+q/kkb HkkbZ dn+fga			133
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri97,bookname:"Geet Manjula"})}>
97‐  rwa pbZa Fkks xksfi;wa tks +x+q d;ks			134
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri98,bookname:"Geet Manjula"})}>
98‐  rqfgats tksx+ th dFkk eu HkkbZ			136
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri99,bookname:"Geet Manjula"})}>
99‐  izk.kukFk vkm izk.kukFk vkm			138
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri100,bookname:"Geet Manjula"})}>
100‐  vks veka uanjk.kh dfgM+ks gkyq			139
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri101,bookname:"Geet Manjula"})}>
101‐  xksfi;ksa ds ?kj esa eueksgu			140
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri102,bookname:"Geet Manjula"})}>
102‐  rqafgth eqjyhv eLrq d;ks			141


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼?k½ Jhtw Lusg 					</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri103,bookname:"Geet Manjula"})}>
103‐  eSa clk gwa foofl e/kqcu			143
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri104,bookname:"Geet Manjula"})}>
104‐  vks ckck u dfj;ks fpUrk			145

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri105,bookname:"Geet Manjula"})}>
105‐  Å/ko veka [ks lans’kks				147
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri106,bookname:"Geet Manjula"})}>
106‐  l[kk Å/koa veka [ks lans’kks			149
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri107,bookname:"Geet Manjula"})}>
107‐  +cq/kks dq#&#123;	ks= esa dkUgy fefBM+s			153
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri108,bookname:"Geet Manjula"})}>
108‐  vFkfe rka?k ryc c`t okjfu th		156
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri109,bookname:"Geet Manjula"})}>
109‐  vks veka ! vk ;’kksnk veka			157
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri110,bookname:"Geet Manjula"})}>
110‐  dha; osBsa rwa Hkxoku				158
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri111,bookname:"Geet Manjula"})}>
111‐  dfgM+ks gkyq poka c`t okfl;qfu tks		159

</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
7	vfHkyk"kk] fou; ,sa vk’kh"k xhr					</Text>

<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri112,bookname:"Geet Manjula"})}>
112‐  dUgS;k dUgS;k iqdkjk djsaxs			162
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri113,bookname:"Geet Manjula"})}>
113‐  vefM+ ;’kksnk tk tkfuc c+fpM+k			163
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri114,bookname:"Geet Manjula"})}>
114‐  gs n;ke; nhu ca/kw				164
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri115,bookname:"Geet Manjula"})}>
115‐  uUn ds dqekj NkbZ c`t esa			165
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri116,bookname:"Geet Manjula"})}>
116‐  gedks rqEgkjk gh vkljk			165
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri117,bookname:"Geet Manjula"})}>
117‐  esjs eksgu izk.k I;kjs				166
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri118,bookname:"Geet Manjula"})}>
118‐  vkvks I;kj jkl fcgkjh			166
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri119,bookname:"Geet Manjula"})}>
119‐  xq.kfu tk /kke eueksgu			167
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri120,bookname:"Geet Manjula"})}>
120‐  d`".k dUgS;k I;kjs				168
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri121,bookname:"Geet Manjula"})}>
121‐  fn+Bqfe lqius I;kjy rks[ks			169
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri122,bookname:"Geet Manjula"})}>
122‐  vefM+ th xksn esa xksfoan			170
  </Text>
<View style = {styles.lineStyle} />




<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
8	yhyk n’kZu					172       </Text>

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
