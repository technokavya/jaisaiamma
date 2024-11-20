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
const uri0 ='pdf/geetmanas1/geet_manas1_0_compressed.pdf';
const uri1 ='pdf/geetmanas1/geet_manas1_1_4_compressed.pdf';
const uri2 ='pdf/geetmanas1/geet_manas1_1_4_compressed.pdf';
const uri3 ='pdf/geetmanas1/geet_manas1_1_4_compressed.pdf';
const uri4 ='pdf/geetmanas1/geet_manas1_1_4_compressed.pdf';
const uri5 ='pdf/geetmanas1/geet_manas1_5_compressed.pdf';
const uri6 ='pdf/geetmanas1/geet_manas1_6_compressed.pdf';
const uri7 ='pdf/geetmanas1/geet_manas1_7_compressed.pdf';
const uri8 ='pdf/geetmanas1/geet_manas1_8_compressed.pdf';
const uri9 ='pdf/geetmanas1/geet_manas1_9_compressed.pdf';
const uri10='pdf/geetmanas1/geet_manas1_10_compressed.pdf';
const uri11 ='pdf/geetmanas1/geet_manas1_11_compressed.pdf';
const uri12 ='pdf/geetmanas1/geet_manas1_12_compressed.pdf';
const uri13 ='pdf/geetmanas1/geet_manas1_13_compressed.pdf';
const uri14='pdf/geetmanas1/geet_manas1_14_compressed.pdf';
const uri15 ='pdf/geetmanas1/geet_manas1_15_compressed.pdf';
const uri16 ='pdf/geetmanas1/geet_manas1_16_compressed.pdf';
const uri17 ='pdf/geetmanas1/geet_manas1_17_compressed.pdf';
const uri18 ='pdf/geetmanas1/geet_manas1_18_compressed.pdf';
const uri19 ='pdf/geetmanas1/geet_manas1_19_compressed.pdf';
const uri20 ='pdf/geetmanas1/geet_manas1_20_compressed.pdf';
const uri21 ='pdf/geetmanas1/geet_manas1_21_compressed.pdf';
const uri22 ='pdf/geetmanas1/geet_manas1_22_compressed.pdf';
const uri23 ='pdf/geetmanas1/geet_manas1_23_compressed.pdf';
const uri24 ='pdf/geetmanas1/geet_manas1_24_compressed.pdf';
const uri25 ='pdf/geetmanas1/geet_manas1_25_compressed.pdf';
const uri26 ='pdf/geetmanas1/geet_manas1_26_compressed.pdf';
const uri27 ='pdf/geetmanas1/geet_manas1_27_compressed.pdf';
const uri28 ='pdf/geetmanas1/geet_manas1_28_compressed.pdf';
const uri29 ='pdf/geetmanas1/geet_manas1_29_compressed.pdf';
const uri30 ='pdf/geetmanas1/geet_manas1_30_compressed.pdf';


const uri31 ='pdf/geetmanas1/geet_manas1_31_compressed.pdf';
const uri32 ='pdf/geetmanas1/geet_manas1_32_compressed.pdf';
const uri33 ='pdf/geetmanas1/geet_manas1_33_compressed.pdf';
const uri34 ='pdf/geetmanas1/geet_manas1_34_compressed.pdf';
const uri35 ='pdf/geetmanas1/geet_manas1_35_compressed.pdf';
const uri36='pdf/geetmanas1/geet_manas1_36_compressed.pdf';
const uri37='pdf/geetmanas1/geet_manas1_37_compressed.pdf';
const uri38='pdf/geetmanas1/geet_manas1_38_compressed.pdf';
const uri39='pdf/geetmanas1/geet_manas1_39_compressed.pdf';
const uri40='pdf/geetmanas1/geet_manas1_40_compressed.pdf';
const uri41='pdf/geetmanas1/geet_manas1_41_compressed.pdf';
const uri42='pdf/geetmanas1/geet_manas1_42_compressed.pdf';
const uri43='pdf/geetmanas1/geet_manas1_43_compressed.pdf';
const uri44='pdf/geetmanas1/geet_manas1_44_compressed.pdf';
const uri45='pdf/geetmanas1/geet_manas1_45_compressed.pdf';
const uri46='pdf/geetmanas1/geet_manas1_46_compressed.pdf';
const uri47='pdf/geetmanas1/geet_manas1_47_compressed.pdf';
const uri48='pdf/geetmanas1/geet_manas1_48_compressed.pdf';
const uri49='pdf/geetmanas1/geet_manas1_49_compressed.pdf';
const uri50='pdf/geetmanas1/geet_manas1_50_compressed.pdf';
const uri51='pdf/geetmanas1/geet_manas1_51_compressed.pdf';
const uri52='pdf/geetmanas1/geet_manas1_52_compressed.pdf';

const uri53='pdf/geetmanas1/geet_manas1_53_compressed.pdf';
const uri54='pdf/geetmanas1/geet_manas1_54_compressed.pdf';
const uri55='pdf/geetmanas1/geet_manas1_55_compressed.pdf';
const uri56='pdf/geetmanas1/geet_manas1_56_compressed.pdf';
const uri57='pdf/geetmanas1/geet_manas1_57_compressed.pdf';
const uri58='pdf/geetmanas1/geet_manas1_58_compressed.pdf';
const uri59='pdf/geetmanas1/geet_manas1_59_compressed.pdf';
const uri60='pdf/geetmanas1/geet_manas1_60_compressed.pdf';
const uri61='pdf/geetmanas1/geet_manas1_61_compressed.pdf';
const uri62='pdf/geetmanas1/geet_manas1_62_compressed.pdf';
const uri63='pdf/geetmanas1/geet_manas1_63_compressed.pdf';
const uri64='pdf/geetmanas1/geet_manas1_64_compressed.pdf';
const uri65='pdf/geetmanas1/geet_manas1_65_compressed.pdf';
const uri66='pdf/geetmanas1/geet_manas1_66_compressed.pdf';
const uri67='pdf/geetmanas1/geet_manas1_67_compressed.pdf';
const uri68='pdf/geetmanas1/geet_manas1_68_compressed.pdf';
const uri69='pdf/geetmanas1/geet_manas1_69_compressed.pdf';
const uri70='pdf/geetmanas1/geet_manas1_70_compressed.pdf';
const uri71='pdf/geetmanas1/geet_manas1_71_compressed.pdf';
const uri72='pdf/geetmanas1/geet_manas1_72_compressed.pdf';
const uri73='pdf/geetmanas1/geet_manas1_73_compressed.pdf';
const uri74='pdf/geetmanas1/geet_manas1_74_compressed.pdf';
const uri75='pdf/geetmanas1/geet_manas1_75_compressed.pdf';
const uri76='pdf/geetmanas1/geet_manas1_76_compressed.pdf';
const uri77='pdf/geetmanas1/geet_manas1_77_compressed.pdf';
const uri78='pdf/geetmanas1/geet_manas1_78_compressed.pdf';
const uri79='pdf/geetmanas1/geet_manas1_79_compressed.pdf';
const uri80='pdf/geetmanas1/geet_manas1_80_compressed.pdf';

const uri81='pdf/geetmanas1/geet_manas1_81_compressed.pdf';
const uri82='pdf/geetmanas1/geet_manas1_82_compressed.pdf';
const uri83='pdf/geetmanas1/geet_manas1_83_compressed.pdf';
const uri84='pdf/geetmanas1/geet_manas1_84_compressed.pdf';
const uri85='pdf/geetmanas1/geet_manas1_85_compressed.pdf';
const uri86='pdf/geetmanas1/geet_manas1_86_compressed.pdf';
const uri87='pdf/geetmanas1/geet_manas1_87_compressed.pdf';
const uri88='pdf/geetmanas1/geet_manas1_88_compressed.pdf';
const uri89='pdf/geetmanas1/geet_manas1_89_compressed.pdf';
const uri90='pdf/geetmanas1/geet_manas1_90_compressed.pdf';

const uri91='pdf/geetmanas1/geet_manas1_91_compressed.pdf';
const uri92='pdf/geetmanas1/geet_manas1_92_compressed.pdf';
const uri93='pdf/geetmanas1/geet_manas1_93_compressed.pdf';
const uri94='pdf/geetmanas1/geet_manas1_94_compressed.pdf';
const uri95='pdf/geetmanas1/geet_manas1_95_compressed.pdf';
const uri96='pdf/geetmanas1/geet_manas1_96_compressed.pdf';
const uri97='pdf/geetmanas1/geet_manas1_97_compressed.pdf';
const uri98='pdf/geetmanas1/geet_manas1_98_compressed.pdf';
const uri99='pdf/geetmanas1/geet_manas1_99_compressed.pdf';
const uri100='pdf/geetmanas1/geet_manas1_100_compressed.pdf';
const uri101='pdf/geetmanas1/geet_manas1_101_compressed.pdf';
const uri102='pdf/geetmanas1/geet_manas1_102_compressed.pdf';
const uri103='pdf/geetmanas1/geet_manas1_103_compressed.pdf';
const uri104='pdf/geetmanas1/geet_manas1_104_compressed.pdf';
const uri105='pdf/geetmanas1/geet_manas1_105_compressed.pdf';
const uri106='pdf/geetmanas1/geet_manas1_106_compressed.pdf';
const uri107='pdf/geetmanas1/geet_manas1_107_compressed.pdf';
const uri108='pdf/geetmanas1/geet_manas1_108_compressed.pdf';
const uri109='pdf/geetmanas1/geet_manas1_109_compressed.pdf';
const uri110='pdf/geetmanas1/geet_manas1_110_compressed.pdf';
const uri111='pdf/geetmanas1/geet_manas1_111_compressed.pdf';

const uri112='pdf/geetmanas1/geet_manas1_112_compressed.pdf';
const uri113='pdf/geetmanas1/geet_manas1_113_compressed.pdf';
const uri114='pdf/geetmanas1/geet_manas1_114_compressed.pdf';
const uri115='pdf/geetmanas1/geet_manas1_115_compressed.pdf';
const uri116='pdf/geetmanas1/geet_manas1_116_compressed.pdf';
const uri117='pdf/geetmanas1/geet_manas1_117_compressed.pdf';
const uri118='pdf/geetmanas1/geet_manas1_118_compressed.pdf';



const uri119='pdf/geetmanas1/geet_manas1_119_compressed.pdf';
const uri120='pdf/geetmanas1/geet_manas1_120_compressed.pdf';
const uri121='pdf/geetmanas1/geet_manas1_121_compressed.pdf';
const uri122='pdf/geetmanas1/geet_manas1_122_compressed.pdf';
const uri123='pdf/geetmanas1/geet_manas1_123_compressed.pdf';
const uri124='pdf/geetmanas1/geet_manas1_124_compressed.pdf';
const uri125='pdf/geetmanas1/geet_manas1_125_compressed.pdf';
const uri126='pdf/geetmanas1/geet_manas1_126_compressed.pdf';
const uri127='pdf/geetmanas1/geet_manas1_127_compressed.pdf';
const uri128='pdf/geetmanas1/geet_manas1_128_compressed.pdf';
const uri129='pdf/geetmanas1/geet_manas1_129_compressed.pdf';
const uri130='pdf/geetmanas1/geet_manas1_130_compressed.pdf';
const uri131='pdf/geetmanas1/geet_manas1_131_compressed.pdf';
const uri132='pdf/geetmanas1/geet_manas1_132_compressed.pdf';
const uri133='pdf/geetmanas1/geet_manas1_133_compressed.pdf';
const uri134='pdf/geetmanas1/geet_manas1_134_compressed.pdf';
const uri135='pdf/geetmanas1/geet_manas1_135_compressed.pdf';
const uri136='pdf/geetmanas1/geet_manas1_136_compressed.pdf';
const uri137='pdf/geetmanas1/geet_manas1_137_compressed.pdf';
const uri138='pdf/geetmanas1/geet_manas1_138_compressed.pdf';
const uri139='pdf/geetmanas1/geet_manas1_139_compressed.pdf';
const uri140='pdf/geetmanas1/geet_manas1_140_compressed.pdf';







export default function Geetmanas1({ navigation }) {
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
xhr ekul & 1
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



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manas 1',pdn:'geet_manas1_0_compressed.pdf'})}>
lfrxqj izlkn  </Text>
  <View style = {styles.lineStyle} />


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
1&&lkbZa lkfgc efgek
</Text>







  


  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"गीत मानस  - १ ",pdn:'geet_manas1_1_compressed.pdf'})}>
  1&	tS nkrk tu =krk lkbZa			             	1  
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"गीत मानस  - १ "})}>
2&	tS eu eksgu ykM+ yM+Srs 				           1
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"गीत मानस  - १ "})}>
3&	tS dksey deys&#123;k.k I;kjs 	           			2
 </Text>
 <View style = {styles.lineStyle} />
 <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"गीत मानस  - १ "})}>
4&	tS panz onu lq[klnu lqgkou				        2
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"गीत मानस  - १ "})}>
5&	th,a th,a lkfgc I;kjk					            2
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"गीत मानस  - १ "})}>
6&	ft;sa lfrxqj 'ksj I;kjk					            3
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"गीत मानस  - १ "})}>
7&	tS tS lusgh lkfgc 					             3
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"गीत मानस  - १ "})}>
8&	nsf[k l[kh vkt lkbZa lt+.k tks 				     4
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"गीत मानस  - १ "})}>
9&	izse HkfDrofy iks[k.k okjks			          	5
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"गीत मानस  - १ "})}>
10&	on+h rks on+kbZ vk HkfDrfueu				       6
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"गीत मानस  - १ "})}>
11&	lusgh fl;kjke tks lkbZa lpkj vk 				  6
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"गीत मानस  - १ "})}>
12&	lyksuh csVh Jh [kf.M vkm lpkjh				  7
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"गीत मानस  - १ "})}>
13&	lkbZa rogka tk dfj;ka xq.k xku 				    8
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"गीत मानस  - १ "})}>
14&	lkbZa I;kjs th thv ft;kjs th 				    8
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"गीत मानस  - १ "})}>
15&	lkbZa lkfgc tks 'kkuq 					          9
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"गीत मानस  - १ "})}>
16&	lkbZa lkfgc lq[k/kke			          10
</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
2& Jh jke tUe
</Text>

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >

¼d½ vfHkyk"k
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"गीत मानस  - १ "})}>
17&	I;kjks ckck n’kjFkq ns+[kkjs 				       11
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"गीत मानस  - १ "})}>
18&	ekrq dkS’kY;k Jh jax nj iS				      13
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}} >
¼[k½ tUe o/kkbZ
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"गीत मानस  - १ "})}>
19&	vpks x+k;wa r feyh jl jax esa f[kyh		 	14
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"गीत मानस  - १ "})}>
20&	vpks r jke tUe twa ok/kk;wa x+k;wa		  		15
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"गीत मानस  - १ "})}>
21&	vtq+ t+kvks jkeq j?kqjkbZ 					        16
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"गीत मानस  - १ "})}>
22&	veka dkS’kY;k jk.kh v t+kvks				     17
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"गीत मानस  - १ "})}>
23&	veka dkS’kY;k egkjk.kh vo/k th 				 18
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"गीत मानस  - १ "})}>
24&	veka t+k;ks t+k;ks vt+q t+k;ks vk 		  		19
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"गीत मानस  - १ "})}>
25&	veka izse tks Hk.Mkj t+f.k;ks				      20
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"गीत मानस  - १ "})}>
26&	vefM+ dkS’kY;k fn+;ka Fkh ok/kkbZ			    	21
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"गीत मानस  - १ "})}>
27&	vefM+ dkS’kY;k [ks ok/kkbZ ok/kkbZ				   22
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"गीत मानस  - १ "})}>
28&	vfgM+ks iqfVM+ks I;kjks					           23
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"गीत मानस  - १ "})}>
29&	vkt fn[kykbZ fo/kkrk us				        23
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"गीत मानस  - १ "})}>
30&	vk;qfl veka rqafgts }kj					       24
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"गीत मानस  - १ "})}>
31&	vkgs v;ks/;k ts ?kj ?kj ok/kkbZ			   	25
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"गीत मानस  - १ "})}>
32&	vks eqafgth I;kjh veka					         26
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"गीत मानस  - १ "})}>
33&	vks lkdsr ljnkj vk x;k				       27
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"गीत मानस  - १ "})}>
34&	d#.kk ewjfr jke th v;ks/;k				     28
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"गीत मानस  - १ "})}>
35&	dkS;kY;k vefM+ [ks fn+;wa         				29
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"गीत मानस  - १ "})}>
36&	x+kbZfu ok/kkbZ tUe th 					        30
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"गीत मानस  - १ "})}>
37&	x+kbZank jgwa furq x+kbZank jgwa				       31
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"गीत मानस  - १ "})}>
38&	x+k;wa ok/kkbZ t+kvks j?kqjkbZ 				       32
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"गीत मानस  - १ "})}>
39&	x+k;wa x+k;wa ok/kkbZ tUe Jh jke 				   33
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"गीत मानस  - १ "})}>
40&	fp# thosa pkjksa yky					          34
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"गीत मानस  - १ "})}>
41&	tUe ok/kkbZ x+k;wa dkS’ky fd’kksj 			  	35
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"गीत मानस  - १ "})}>
42&	t+kvks dqav# n’kjFk egkjkt [ks 				 36
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"गीत मानस  - १ "})}>
43&	tS tS j?kqoj I;kjs veka dkS’kY;k 			 	36
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"गीत मानस  - १ "})}>
44&	t+kvks jk?koq I;kjks vk 					       38
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"गीत मानस  - १ "})}>
45&	t+kvks dkS’kY;k [ks c+kyq				        39
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"गीत मानस  - १ "})}>
46&	t+k, j?kqjS;k eaxy o/kS;k 				      40
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:"गीत मानस  - १ "})}>
47&	?kM+h ?kM+h iy iy fNu fNu 				   40
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:"गीत मानस  - १ "})}>
48&	rqafgth dq[kM+h v eka djrkj 				   41
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:"गीत मानस  - १ "})}>
49&	rqafgts fefBM+s c+fpM+s j?kqoj th   				42
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:"गीत मानस  - १ "})}>
50&	rks[ks ckck jke tUe th ok/kkbZ		   		43
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:"गीत मानस  - १ "})}>
51&	rks[ks fn+;wa ok/kk;wa y[k okj 			      	44
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:"गीत मानस  - १ "})}>
52&	fFk;ks v;ks/;k esa vkuan Hkkjh 				    45
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:"गीत मानस  - १ "})}>
53&	iz?kVq iqfVM+ks Jh j?kqjkbZ 					        45
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:"गीत मानस  - १ "})}>
54&	izk.kksa ls gS I;kjk eq>s 					         46
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:"गीत मानस  - १ "})}>
55&	euk;wa jke ukSeh v tks 				        47
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:"गीत मानस  - १ "})}>
56&	feyh lgsfy;wa lHksbZ vtq+ vpks 				   49
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:"गीत मानस  - १ "})}>
57&	eqafgth xksn esa vk;ks vtqq+				       49
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:"गीत मानस  - १ "})}>
58&	eS;k dkS’kY;k ts ?kj 					         51
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:"गीत मानस  - १ "})}>
59&	j?kqukFk I;kjs tUe twa fn+;wa 				      51
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:"गीत मानस  - १ "})}>
60&	j?kqukFk I;kjs th tUe dFkk				      52
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:"गीत मानस  - १ "})}>
61&	jke j?kqjkbZ t+k, jke j?kqjkbZ				      53
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:"गीत मानस  - १ "})}>
62&	okg okg ckyd th vk 'kksHkk				    54
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:"गीत मानस  - १ "})}>
63&	ok/kkbZ gks ok/kkbZ gks veka 				       55
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:"गीत मानस  - १ "})}>
64&	gyks x+k;wa ok/kkbZ j?kqohj th 				     56
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:"गीत मानस  - १ "})}>
65&	gyks Hks.k gyks Hks.k fn+;wa 				       56
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:"गीत मानस  - १ "})}>
66&	gyks vefM+ dkS’kY;k ts egyfu esa 			57
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:"गीत मानस  - १ "})}>
67&	Jh n’kjFk egkjkt fFk;uh iw.kZ				   58
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:"गीत मानस  - १ "})}>
68&	lkdsr fogkjh vk, lkdsr fogkjh 				59
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
	¼x½ cky yhyk
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:"गीत मानस  - १ "})}>
69&	fn+lka cky yhyk lq[klkj 				      60
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:"गीत मानस  - १ "})}>
70&	vkm vkm uhy jru lqdqekj 				   61



</Text>


<View style = {styles.lineStyle} />
 

 <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
 3& Jh tw tUe ok/kkbZ </Text>


  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:"गीत मानस  - १ "})}>
 71&	x+k;ks eaxy ok/kkbZ Fkh eu HkkbZ   	 		63
 </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:"गीत मानस  - १ "})}>
72&	x+k;ks x+k;ks jh ltuh eaxykpkj 			  63
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:"गीत मानस  - १ "})}>
73&	fp# thoks c+kyM+h tud dqekfj				  64
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:"गीत मानस  - १ "})}>
74&	tS tS lquSuk dqekjh c+ygkjh gS				  65
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:"गीत मानस  - १ "})}>
75&	Jh tud vaxuk cktsgSa				       66
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:"गीत मानस  - १ "})}>
76&	Jh fefFkyk iqj vkuan vkt gS				  66
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:"गीत मानस  - १ "})}>
77&	lquSuk eS;k ykbZ gwa vkt ok/kkbZ 				67
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:"गीत मानस  - १ "})}>
78&	Lokfefu feBh v tks tUe				     68
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:"गीत मानस  - १ "})}>
79&	ewa [ks c+fpM+h v tks njlq 				     69
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:"गीत मानस  - १ "})}>
80&	tqx+ tqx+ th, rsjh csfVM+h 				     70
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
 4& Jh jke fookg</Text>
  <View style = {styles.lineStyle} />



  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:"गीत मानस  - १ "})}>
81&	jk?ko dh vk,xh ckjkr 				70
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:"गीत मानस  - १ "})}>
82&	vkbZ fookg iapeh I;kjh				71
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:"गीत मानस  - १ "})}>
83&	vk;ks nqyg Jh jke lnkbZa				72
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:"गीत मानस  - १ "})}>
84&	vkm j?kqdqy tk mT;kjk					73
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:"गीत मानस  - १ "})}>
85&	esjh fl;k jktnqykjh 					74
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:"गीत मानस  - १ "})}>

86&	esjs izk.k thou j?kqjkbZ					75
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:"गीत मानस  - १ "})}>
87&	D;kssa gksrh gks v/khj 					76
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:"गीत मानस  - १ "})}>
88&	[kqf’k jganh fn+lka eka 					77


  </Text>
<View style = {styles.lineStyle} />




 
  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  5& Lusg xhr</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize:25,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  ¼d½ Jh tw lusg
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:"गीत मानस  - १ "})}>
89&	x+k;ks x+k;ks if[k;ks x+k;ks 				78
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:"गीत मानस  - १ "})}>
90&	tqx+ tqx+ thvks lqdqekj 				80
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:25,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼[k½ vefM+ Lusg
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:"गीत मानस  - १ "})}>
91&	rks fcuk jke eqafgtk 					81
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:"गीत मानस  - १ "})}>
92&	dgka yky esjk I;kjk					82
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:"गीत मानस  - १ "})}>
93&	lkbZa veka izse twwa x+kfYg;wwa 				83
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:"गीत मानस  - १ "})}>

94&	iyq u Fkhm ijs ew[kka 				85
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:"गीत मानस  - १ "})}>

95&	pj.kfu rka c+ygkj veka 				86
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:25,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼x½ Hkjr Lusg
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:"गीत मानस  - १ "})}>
96&	tafg vo/k esa lt+.k					88
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri97,bookname:"गीत मानस  - १ "})}>
97&	HkS;k eksfg NksfM+ ds 					96
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri98,bookname:"गीत मानस  - १ "})}>
98&	n;k dj n;k fla/kq j?kqoj 				97

</Text>
<View style = {styles.lineStyle} />


 
  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  6& fofo/k yhykÅa</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri99,bookname:"गीत मानस  - १ "})}>


99&	Hkksj le; Jh tud uanuh 				98
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri100,bookname:"गीत मानस  - १ "})}>
100&	fp# fp# thoks I;kjs 				99
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri101,bookname:"गीत मानस  - १ "})}>
101&	Jh lh; j?kqoj dh I;kjh yhyk 			100
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri102,bookname:"गीत मानस  - १ "})}>
102&	lkao.kq vk;ks vfr eu Hkk;ks 				101
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri103,bookname:"गीत मानस  - १ "})}>
103&	ther Jh lh;kjke 					102
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri104,bookname:"गीत मानस  - १ "})}>
104&	lkbZa v xksn esa lnka c`ktr 				103
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri105,bookname:"गीत मानस  - १ "})}>
105&	d#.kk fu/kku j?kqoj 					104
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri106,bookname:"गीत मानस  - १ "})}>
106&	vk;k 'kjf.k rqEgkj 					105
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri107,bookname:"गीत मानस  - १ "})}>
107&	cq+/kks j?kqoj tks 'khy LoHkko 				106
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri108,bookname:"गीत मानस  - १ "})}>
108&	/kuq /kuq ghm cuoklh 				106
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri109,bookname:"गीत मानस  - १ "})}>
109&	fp# thvks lkbZa					107
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri110,bookname:"गीत मानस  - १ "})}>
110&	'khy ,sa Lusg fla/kq 					109
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri111,bookname:"गीत मानस  - १ "})}>
111&	fl;kjke fl;kjke fl;kjke				110
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri112,bookname:"गीत मानस  - १ "})}>
112&	thou dh uS;k izHkw ikl 				110
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri113,bookname:"गीत मानस  - १ "})}>
113&	iM+h gwa }kj iS vkdj 				112
</Text>
<View style = {styles.lineStyle} />
 
  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  7& Jh jke dFkke`r</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri114,bookname:"गीत मानस  - १ "})}>

  ¼d½ fefFkyk esa cky fouksn				112
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri115,bookname:"गीत मानस  - १ "})}>
¼[k½ Jh tw mfeZyk Lusg 				115
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri116,bookname:"गीत मानस  - १ "})}>
¼x½ nwYg&nqyfgfu;qfu tks v;ks/;k vp.kq			120
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri117,bookname:"गीत मानस  - १ "})}>
¼?k½ Jh tw mfeZyk e/kqj lEokn 				125
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri118,bookname:"गीत मानस  - १ "})}>
¼M%½ Jh lqea= th O;Fkk					128
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼p½ e/kqj >kafd;wa
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri119,bookname:"गीत मानस  - १ "})}>
1&	NBh v tks vkuan					140
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri120,bookname:"गीत मानस  - १ "})}>
2&	vn~Hkqr vkuUnq					141
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri121,bookname:"गीत मानस  - १ "})}>
3&	vefM+ th vfHkyk"k					142
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri122,bookname:"गीत मानस  - १ "})}>
4&	eksn e;h veka 					143
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri123,bookname:"गीत मानस  - १ "})}>
5&	lkSHkkX;’kkyh veka 					144
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri124,bookname:"गीत मानस  - १ "})}>
6&	eksn exuq ekrkÅa					145
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri125,bookname:"गीत मानस  - १ "})}>
7&	lfrxqj d`ik						146
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri126,bookname:"गीत मानस  - १ "})}>
8&	equhv tks lkSHkkX; 					149
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri127,bookname:"गीत मानस  - १ "})}>

9&	vfgY;k m)kj 					149
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri128,bookname:"गीत मानस  - १ "})}>

10&	y[k.k lka dyksy 					150
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri129,bookname:"गीत मानस  - १ "})}>

11&	fonsg jkt th vfHkyk"k					151
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri130,bookname:"गीत मानस  - १ "})}>

12&	fefFkyk ukfj;qfu th vkdka&#123;kk				151
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri131,bookname:"गीत मानस  - १ "})}>

13&	izFke n’kZu						152
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri132,bookname:"गीत मानस  - १ "})}>

14&	feysbZ o# eu Hkkoanks					153
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri133,bookname:"गीत मानस  - १ "})}>

15&	tS fl;kjke						153
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri134,bookname:"गीत मानस  - १ "})}>

16&	fefFkyk okfl;qfu tks fo’oklq				154
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri135,bookname:"गीत मानस  - १ "})}>

17&	/kuq"kq VqVks] ;qxy fefy;k				155
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri136,bookname:"गीत मानस  - १ "})}>

18&	vefM+ th lEHkkj 					155
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri137,bookname:"गीत मानस  - १ "})}>

19&	vkuan lekpkj 					157
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri138,bookname:"गीत मानस  - १ "})}>

20&	yko.; fuf/k ;qxy 					158
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri139,bookname:"गीत मानस  - १ "})}>

21&	;qxy ykyfu tks n’kZu					159
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'8%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri140,bookname:"गीत मानस  - १ "})}>

22&	jkt vfHk"ksd th vkKk					159
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
