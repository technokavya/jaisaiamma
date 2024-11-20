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
const uri0 = 'pdf/geetmanjusha/1_compressed.pdf';
const uri0_1 = 'pdf/geetmanjusha/geet_manjusha_0_compressed.pdf';


const uri1 = 'pdf/geetmanjusha/geet_manjusha_1_compressed.pdf';
const uri2 = 'pdf/geetmanjusha/geet_manjusha_2_compressed.pdf';
const uri3 = 'pdf/geetmanjusha/geet_manjusha_3_compressed.pdf';
const uri4 = 'pdf/geetmanjusha/geet_manjusha_4_compressed.pdf';
const uri5 = 'pdf/geetmanjusha/geet_manjusha_5_compressed.pdf';
const uri6 = 'pdf/geetmanjusha/geet_manjusha_6_compressed.pdf';



const uri7 = 'pdf/geetmanjusha/geet_manjusha_7_compressed.pdf';
const uri8 = 'pdf/geetmanjusha/geet_manjusha_8_compressed.pdf';
const uri9 = 'pdf/geetmanjusha/geet_manjusha_9_compressed.pdf';
const uri10 = 'pdf/geetmanjusha/geet_manjusha_10_compressed.pdf';
const uri11 = 'pdf/geetmanjusha/geet_manjusha_11_compressed.pdf';
const uri12= 'pdf/geetmanjusha/geet_manjusha_12_compressed.pdf';
const uri13 = 'pdf/geetmanjusha/geet_manjusha_13_compressed.pdf';
const uri14 = 'pdf/geetmanjusha/geet_manjusha_14_compressed.pdf';
const uri15= 'pdf/geetmanjusha/geet_manjusha_15_compressed.pdf';
const uri16= 'pdf/geetmanjusha/geet_manjusha_16_compressed.pdf';
const uri17 = 'pdf/geetmanjusha/geet_manjusha_17_compressed.pdf';


const uri18 = 'pdf/geetmanjusha/geet_manjusha_18_compressed.pdf';
const uri19 = 'pdf/geetmanjusha/geet_manjusha_19_compressed.pdf';
const uri20 = 'pdf/geetmanjusha/geet_manjusha_20_compressed.pdf';
const uri21 = 'pdf/geetmanjusha/geet_manjusha_21_compressed.pdf';
const uri22 = 'pdf/geetmanjusha/geet_manjusha_22_compressed.pdf';
const uri23 = 'pdf/geetmanjusha/geet_manjusha_23_compressed.pdf';
const uri24 = 'pdf/geetmanjusha/geet_manjusha_24_compressed.pdf';
const uri25 = 'pdf/geetmanjusha/geet_manjusha_25_compressed.pdf';


const uri26 = 'pdf/geetmanjusha/geet_manjusha_26_compressed.pdf';
const uri27 = 'pdf/geetmanjusha/geet_manjusha_27_compressed.pdf';
const uri28 = 'pdf/geetmanjusha/geet_manjusha_28_compressed.pdf';
const uri29 = 'pdf/geetmanjusha/geet_manjusha_29_compressed.pdf';
const uri30 = 'pdf/geetmanjusha/geet_manjusha_30_compressed.pdf';
const uri31 = 'pdf/geetmanjusha/geet_manjusha_31_compressed.pdf';
const uri32 = 'pdf/geetmanjusha/geet_manjusha_32_compressed.pdf';
const uri33 = 'pdf/geetmanjusha/geet_manjusha_33_compressed.pdf';
const uri34 = 'pdf/geetmanjusha/geet_manjusha_34_compressed.pdf';


const uri35 = 'pdf/geetmanjusha/geet_manjusha_35_compressed.pdf';
const uri36 = 'pdf/geetmanjusha/geet_manjusha_36_compressed.pdf';
const uri37 = 'pdf/geetmanjusha/geet_manjusha_37_compressed.pdf';
const uri38 = 'pdf/geetmanjusha/geet_manjusha_38_compressed.pdf';
const uri39 = 'pdf/geetmanjusha/geet_manjusha_39_compressed.pdf';
const uri40 = 'pdf/geetmanjusha/geet_manjusha_40_compressed.pdf';


const uri41 = 'pdf/geetmanjusha/geet_manjusha_41_compressed.pdf';
const uri42 = 'pdf/geetmanjusha/geet_manjusha_42_compressed.pdf';
const uri43 = 'pdf/geetmanjusha/geet_manjusha_43_compressed.pdf';
const uri44 = 'pdf/geetmanjusha/geet_manjusha_44_compressed.pdf';
const uri45 = 'pdf/geetmanjusha/geet_manjusha_45_compressed.pdf';
const uri46 = 'pdf/geetmanjusha/geet_manjusha_46_compressed.pdf';
const uri47 = 'pdf/geetmanjusha/geet_manjusha_47_compressed.pdf';
const uri48 = 'pdf/geetmanjusha/geet_manjusha_48_compressed.pdf';
const uri49 = 'pdf/geetmanjusha/geet_manjusha_49_compressed.pdf';
const uri50 = 'pdf/geetmanjusha/geet_manjusha_50_compressed.pdf';




const uri51 = 'pdf/geetmanjusha/geet_manjusha_51_compressed.pdf';
const uri52 = 'pdf/geetmanjusha/geet_manjusha_52_compressed.pdf';
const uri53 = 'pdf/geetmanjusha/geet_manjusha_53_compressed.pdf';
const uri54 = 'pdf/geetmanjusha/geet_manjusha_54_compressed.pdf';
const uri55 = 'pdf/geetmanjusha/geet_manjusha_55_compressed.pdf';
const uri56 = 'pdf/geetmanjusha/geet_manjusha_56_compressed.pdf';
const uri57 = 'pdf/geetmanjusha/geet_manjusha_57_compressed.pdf';
const uri58 = 'pdf/geetmanjusha/geet_manjusha_58_compressed.pdf';
const uri59 = 'pdf/geetmanjusha/geet_manjusha_59_compressed.pdf';
const uri60 = 'pdf/geetmanjusha/geet_manjusha_60_compressed.pdf';



const uri61 = 'pdf/geetmanjusha/geet_manjusha_61_compressed.pdf';
const uri62 = 'pdf/geetmanjusha/geet_manjusha_62_compressed.pdf';
const uri63 = 'pdf/geetmanjusha/geet_manjusha_63_compressed.pdf';
const uri64 = 'pdf/geetmanjusha/geet_manjusha_64_compressed.pdf';
const uri65 = 'pdf/geetmanjusha/geet_manjusha_65_compressed.pdf';
const uri66 = 'pdf/geetmanjusha/geet_manjusha_66_compressed.pdf';

const uri67= 'pdf/geetmanjusha/geet_manjusha_67_compressed.pdf';
const uri68= 'pdf/geetmanjusha/geet_manjusha_68_compressed.pdf';
const uri69= 'pdf/geetmanjusha/geet_manjusha_69_compressed.pdf';
const uri70 = 'pdf/geetmanjusha/geet_manjusha_70_compressed.pdf';
const uri71 = 'pdf/geetmanjusha/geet_manjusha_71_compressed.pdf';
const uri72 = 'pdf/geetmanjusha/geet_manjusha_72_compressed.pdf';
const uri73 = 'pdf/geetmanjusha/geet_manjusha_73_compressed.pdf';
const uri74 = 'pdf/geetmanjusha/geet_manjusha_74_compressed.pdf';
const uri75 = 'pdf/geetmanjusha/geet_manjusha_75_compressed.pdf';
const uri76 = 'pdf/geetmanjusha/geet_manjusha_76_compressed.pdf';
const uri77 = 'pdf/geetmanjusha/geet_manjusha_77_compressed.pdf';
const uri78 = 'pdf/geetmanjusha/geet_manjusha_78_compressed.pdf';
const uri79 = 'pdf/geetmanjusha/geet_manjusha_79_compressed.pdf';



const uri80= 'pdf/geetmanjusha/geet_manjusha_80_compressed.pdf';


const uri81 = 'pdf/geetmanjusha/geet_manjusha_81_compressed.pdf';
const uri82 = 'pdf/geetmanjusha/geet_manjusha_82_compressed.pdf';
const uri83 = 'pdf/geetmanjusha/geet_manjusha_83_compressed.pdf';
const uri84 = 'pdf/geetmanjusha/geet_manjusha_84_compressed.pdf';










export default function Geetmanjusha({ navigation }) {
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
xhr ea¥tq"kk
</Text>
<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

lkbZa lkfgc th efgek ,sa vo/k ljdkj th 
fofHkUu yhykmfu ts xhrfu] dFkkmfu]
okf.k;qfu ,sa >kafd;qfu tks xqynLrks

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



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:' गीत मञ्जुषा (Mangal Kamna)'})}>
Eakxy dkeuk  </Text>
  <View style = {styles.lineStyle} />


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
1&&lkbZa lkfgc efgek
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:" गीत मञ्जुषा "})}>
¼d½ efgek lIrinh				   1
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} >
¼[k½ lkbZa efgek xhr		   1
</Text>


<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:" गीत मञ्जुषा"})}>
1‐ fy;k ehjiqj esa vforkj 			   5	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:" गीत मञ्जुषा"})}>
2‐  x+k;ks x+k;ks lt+.k lusgh			   5	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:" गीत मञ्जुषा"})}>
3‐  jk?ko tk 'kqHk xq.k 				   7	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:" गीत मञ्जुषा"})}>
4‐ne ne fnfy lka eaxy 			  8	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:" गीत मञ्जुषा"})}>
5‐ lkbZa v thouq fn+uks				 9	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:" गीत मञ्जुषा"})}>
6‐ lkbZa lusgh lkfgcq				10
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:" गीत मञ्जुषा"})}>
7‐ vks gk’ksokjk gkfde			11	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:" गीत मञ्जुषा"})}>
8‐ rogka th fefBM+h dFkk			11	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:" गीत मञ्जुषा"})}>
9‐ rqafgath ftfr fdfFk vkgs thr 			12	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:" गीत मञ्जुषा"})}>
10‐ lkbZa lkbZa lqdqekjs				12	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:" गीत मञ्जुषा"})}>
11‐ tqx+ tqx+ vfopy				13	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:" गीत मञ्जुषा"})}>
12‐ ua&lt;	i.k [kka usgq ykrks			14	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:" गीत मञ्जुषा"})}>
13‐ ftfu xfy;qfu esa ?kqeha Fkks			14	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:" गीत मञ्जुषा"})}>
14‐ vlka ts lkg tks lkfgcq			16	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:" गीत मञ्जुषा"})}>
15‐ eqafgatk d#.kk lkxj lfrxq#		17
</Text>
<View style = {styles.lineStyle} />







<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:" गीत मञ्जुषा"})}>
16‐ tS vkuUn tk nkrk lfrxq# 			17	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:" गीत मञ्जुषा"})}>
17‐ feBk lkbZa rqafgath efgek			18	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:" गीत मञ्जुषा"})}>
18‐ efgj ifjoj fefBM+k ekfyd 			19	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:" गीत मञ्जुषा"})}>
19‐ feBk lkbZa rqfgath dhjfr			19
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} >
¼x½ feBh vefM+ efgek xhr
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:" गीत मञ्जुषा"})}>
20‐ vefM+ lkbZa vks:a vksjs			20	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:" गीत मञ्जुषा"})}>
21‐ eqafgath vefM+ feBh				21
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:" गीत मञ्जुषा"})}>
22‐ fp# thm feBh ek;M+h			22	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:" गीत मञ्जुषा"})}>
23‐ lRlax tks lkbZa jktk			23	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:" गीत मञ्जुषा"})}>
24‐ lkbZa v feBs th efgek			24
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} >
2   Lusg xhr
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:" गीत मञ्जुषा"})}>
25‐ feBk efgjcku vks lkbZa			26	
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:" गीत मञ्जुषा"})}>



26‐ vks gky efgje lkbZa			26	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:" गीत मञ्जुषा"})}>
27‐ vks efg#fu Hkfj;k ekfyd			27	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:" गीत मञ्जुषा"})}>
28‐ efgjcku rqafgath vkfg;ka			27	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:" गीत मञ्जुषा"})}>
29‐ dfgM+k n+hag feBk gqvk			28
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:" गीत मञ्जुषा"})}>


3   jl lq/kk fuf/k  ¼ 30 ½			31
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
4   tS tS lc+k>k lkbZa  
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:" गीत मञ्जुषा"})}>
31‐ tS tS lc+k>k lRxqj				34	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:" गीत मञ्जुषा"})}>
32‐efgjcku vks /k.kh				34	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:" गीत मञ्जुषा"})}>
33‐ tS lkbZa izk.k I;kjk				35	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:" गीत मञ्जुषा"})}>
34‐ eqafgatk lkbZa lkfgc 'khy fu/kh 		36	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:" गीत मञ्जुषा"})}>
35‐ vks eqfgatk lkfgc lfpM+k			37
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
5   vfHkyk"kk xhr  
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:" गीत मञ्जुषा"})}>
36‐ rks[ks /;k;s eka				38	
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:" गीत मञ्जुषा"})}>
37‐ rogka ts pj.kfu th			38	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:" गीत मञ्जुषा"})}>
38‐ rogka [ks x+kabZnh jgka				39	
  </Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:" गीत मञ्जुषा"})}>
39‐ vkm nhu ca/kw fnycj			40	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:" गीत मञ्जुषा"})}>
40‐ vkm va³f.k eqafgatk				40
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:" गीत मञ्जुषा"})}>

41‐ vkvks izk.k I;kjs lkbZa 			   41	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:" गीत मञ्जुषा"})}>
42‐ lkbZa lkfgc th dhjfr tks x+k,		   42	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:" गीत मञ्जुषा"})}>
43‐ lkbZa lkfgc th efgek I;kjh			   42	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" गीत मञ्जुषा"})}>
44‐ lkbZa veka tks n’kZu d;kaslha			   43	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:" गीत मञ्जुषा"})}>
45‐ dfgM+k n+hga feBk gqvk			44
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
6   vk’kh’k xhr 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:" गीत मञ्जुषा"})}>
46‐ lnkbZa [kqf’k jgks lkbZa        		48	
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:" गीत मञ्जुषा"})}>
47‐ eka iy iy rogka tk 			   48	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:" गीत मञ्जुषा"})}>
48‐ fpj thvks feBk eqafgtk 			   49
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:" गीत मञ्जुषा"})}>
49‐ rwa eqfgatks ekfydq				50	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:" गीत मञ्जुषा"})}>
50‐ eka r gj Lokal esa				51	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:" गीत मञ्जुषा"})}>
51‐ lnka d`ik tks vkgha Hk.Mkj			52	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:" गीत मञ्जुषा"})}>
52‐ gky tk efgje				52	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:" गीत मञ्जुषा"})}>
53‐ gjh lnka rksalka gejkgq				53	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:" गीत मञ्जुषा"})}>
54‐ fp# thoks lkbZa lkfgc			54
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>


7   Jh jke dFkk  
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:" गीत मञ्जुषा"})}>
55‐ Jh n’kjFk ts fpr esa 			55
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:" गीत मञ्जुषा"})}>
56‐ iz?kfV;ks iqfVM+ks Jh j?kqjkbZ			   57
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:" गीत मञ्जुषा"})}>
57‐ ?kqesa furq xq.kfu xfy;qfu esa			   58
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:" गीत मञ्जुषा"})}>
58‐ xq.k xhr x+k;ka				   61
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

8   c`t yhyk xhr  
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:" गीत मञ्जुषा"})}>
59‐ x+k;ks x+k;ks HksfuM+h				   64
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:" गीत मञ्जुषा"})}>
60‐ t+kvks vefM+ ;’kksnk [ks c+k#			   65
  </Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:" गीत मञ्जुषा"})}>
61‐ Hkkx+ Hkjh jk.kh veka				   66
</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:" गीत मञ्जुषा"})}>
62‐ Jh dhjfr [ks dU;k t+kbZ vk			   67
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:" गीत मञ्जुषा"})}>
63‐ veka t+kbZ t+kbZ vt+q				   68
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:" गीत मञ्जुषा"})}>
64‐ ubZa ubZa yhyk furq 				   68
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:" गीत मञ्जुषा"})}>
65‐ osgq eqafgatk yky				   70
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:" गीत मञ्जुषा"})}>
66‐ izk.kksa ds I;kjs				   71
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:" गीत मञ्जुषा"})}>
67‐ Jh jk/ks vkm					   72
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:" गीत मञ्जुषा"})}>
68‐ x+kb oh.kka rwa x+kb				   72
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:" गीत मञ्जुषा"})}>
69‐ c+q/kkb eqjyh rwa c+q/kkb eqjyh			   73
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:" गीत मञ्जुषा"})}>
70‐ ckiw vogks ts nj th			   75
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:" गीत मञ्जुषा"})}>
71‐ dhav Fkh xqt+kjs nhagM+k			   75
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:" गीत मञ्जुषा"})}>
72‐ dfj gk.ksa ewa rs D;kl			   77
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:" गीत मञ्जुषा"})}>
73‐ feysxk feysxk dUgS;k 			   79
</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:" गीत मञ्जुषा"})}>
74‐ dfj gk.ksa ewa rs D;kl			80
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:" गीत मञ्जुषा"})}>
75‐ ;’kksnk ds thou				80
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:" गीत मञ्जुषा"})}>
76‐ ;equk rV ls calh cV ls			81
</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:" गीत मञ्जुषा"})}>
77‐ ';ke lqdqekjs eqjyh v okjs			82
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:" गीत मञ्जुषा"})}>
78‐ [kkvks Hkkstu ;qxy fogkjh			83
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:" गीत मञ्जुषा"})}>
79‐ fp# fp# thvks o`"kHkkuq c+kjh			83
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:" गीत मञ्जुषा"})}>


9   gksyh v tks gqYykl mQZ eSxfl efgykr	85
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:" गीत मञ्जुषा"})}>
10  yhyk n’kZu  					92
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
11  uke ekykÅa  
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:" गीत मञ्जुषा"})}>
¼d½ Jh dkS’kY;k vefM+ efgek		        107
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:" गीत मञ्जुषा"})}>
    ¼[k½ Jh j?kqukFk c+ky yhyk
      </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:" गीत मञ्जुषा"})}>
    ¼x½  gfj Hkä pfj=
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
