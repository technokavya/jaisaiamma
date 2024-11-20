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
const uri0 = 'pdf/geetmadhuri/g_madhuri_0_0_compressed.pdf';


const uri0_1 = 'pdf/geetmadhuri/g_madhuri_0_compressed.pdf';


const uri1 = 'pdf/geetmadhuri/g_madhuri_1_compressed.pdf';
const uri2 = 'pdf/geetmadhuri/g_madhuri_2_compressed.pdf';
const uri3 = 'pdf/geetmadhuri/g_madhuri_3_compressed.pdf';

const uri4 = 'pdf/geetmadhuri/g_madhuri_4_compressed.pdf';
const uri5 = 'pdf/geetmadhuri/g_madhuri_5_compressed.pdf';
const uri6 = 'pdf/geetmadhuri/g_madhuri_6_compressed.pdf';
const uri7 = 'pdf/geetmadhuri/g_madhuri_7_compressed.pdf';
const uri8 = 'pdf/geetmadhuri/g_madhuri_8_compressed.pdf';
const uri9 = 'pdf/geetmadhuri/g_madhuri_9_compressed.pdf';
const uri10 = 'pdf/geetmadhuri/g_madhuri_10_compressed.pdf';
const uri11= 'pdf/geetmadhuri/g_madhuri_11_compressed.pdf';
const uri12= 'pdf/geetmadhuri/g_madhuri_12_compressed.pdf';
const uri13= 'pdf/geetmadhuri/g_madhuri_13_compressed.pdf';
const uri14= 'pdf/geetmadhuri/g_madhuri_14_compressed.pdf';
const uri15= 'pdf/geetmadhuri/g_madhuri_15_compressed.pdf';
const uri16= 'pdf/geetmadhuri/g_madhuri_16_compressed.pdf';
const uri17= 'pdf/geetmadhuri/g_madhuri_17_compressed.pdf';

const uri18= 'pdf/geetmadhuri/g_madhuri_18_compressed.pdf';
const uri19= 'pdf/geetmadhuri/g_madhuri_19_compressed.pdf';

const uri20= 'pdf/geetmadhuri/g_madhuri_20_compressed.pdf';
const uri21= 'pdf/geetmadhuri/g_madhuri_21_compressed.pdf';
const uri22= 'pdf/geetmadhuri/g_madhuri_22_compressed.pdf';
const uri23= 'pdf/geetmadhuri/g_madhuri_23_compressed.pdf';
const uri24= 'pdf/geetmadhuri/g_madhuri_24_compressed.pdf';
const uri25= 'pdf/geetmadhuri/g_madhuri_25_compressed.pdf';
const uri26= 'pdf/geetmadhuri/g_madhuri_26_compressed.pdf';
const uri27= 'pdf/geetmadhuri/g_madhuri_27_compressed.pdf';
const uri28= 'pdf/geetmadhuri/g_madhuri_28_compressed.pdf';
const uri29= 'pdf/geetmadhuri/g_madhuri_29_compressed.pdf';


const uri30= 'pdf/geetmadhuri/g_madhuri_30_compressed.pdf';
const uri31= 'pdf/geetmadhuri/g_madhuri_31_compressed.pdf';
const uri32= 'pdf/geetmadhuri/g_madhuri_32_compressed.pdf';
const uri33= 'pdf/geetmadhuri/g_madhuri_33_compressed.pdf';
const uri34= 'pdf/geetmadhuri/g_madhuri_34_compressed.pdf';
const uri35= 'pdf/geetmadhuri/g_madhuri_35_compressed.pdf';
const uri36= 'pdf/geetmadhuri/g_madhuri_36_compressed.pdf';
const uri37= 'pdf/geetmadhuri/g_madhuri_37_compressed.pdf';
const uri38= 'pdf/geetmadhuri/g_madhuri_38_compressed.pdf';
const uri39= 'pdf/geetmadhuri/g_madhuri_39_compressed.pdf';
const uri40= 'pdf/geetmadhuri/g_madhuri_40_compressed.pdf';

const uri41= 'pdf/geetmadhuri/g_madhuri_41_compressed.pdf';
const uri42= 'pdf/geetmadhuri/g_madhuri_42_compressed.pdf';
const uri43= 'pdf/geetmadhuri/g_madhuri_43_compressed.pdf';
const uri44= 'pdf/geetmadhuri/g_madhuri_44_compressed.pdf';
const uri45= 'pdf/geetmadhuri/g_madhuri_45_compressed.pdf';
const uri46= 'pdf/geetmadhuri/g_madhuri_46_compressed.pdf';
const uri47= 'pdf/geetmadhuri/g_madhuri_47_compressed.pdf';
const uri48= 'pdf/geetmadhuri/g_madhuri_48_compressed.pdf';
const uri49= 'pdf/geetmadhuri/g_madhuri_49_compressed.pdf';
const uri50= 'pdf/geetmadhuri/g_madhuri_50_compressed.pdf';

const uri51= 'pdf/geetmadhuri/g_madhuri_51_compressed.pdf';
const uri52= 'pdf/geetmadhuri/g_madhuri_52_compressed.pdf';
const uri53= 'pdf/geetmadhuri/g_madhuri_53_compressed.pdf';
const uri54= 'pdf/geetmadhuri/g_madhuri_54_compressed.pdf';
const uri55= 'pdf/geetmadhuri/g_madhuri_55_compressed.pdf';
const uri56= 'pdf/geetmadhuri/g_madhuri_56_compressed.pdf';
const uri57= 'pdf/geetmadhuri/g_madhuri_57_compressed.pdf';
const uri58= 'pdf/geetmadhuri/g_madhuri_58_compressed.pdf';
const uri59= 'pdf/geetmadhuri/g_madhuri_59_compressed.pdf';
const uri60= 'pdf/geetmadhuri/g_madhuri_60_compressed.pdf';

const uri61= 'pdf/geetmadhuri/g_madhuri_61_compressed.pdf';
const uri62= 'pdf/geetmadhuri/g_madhuri_62_compressed.pdf';
const uri63= 'pdf/geetmadhuri/g_madhuri_63_compressed.pdf';
const uri64= 'pdf/geetmadhuri/g_madhuri_64_compressed.pdf';
const uri65= 'pdf/geetmadhuri/g_madhuri_65_compressed.pdf';
const uri66= 'pdf/geetmadhuri/g_madhuri_66_compressed.pdf';
const uri67= 'pdf/geetmadhuri/g_madhuri_67_compressed.pdf';
const uri68= 'pdf/geetmadhuri/g_madhuri_68_compressed.pdf';
const uri68_1= 'pdf/geetmadhuri/g_madhuri_68_1_compressed.pdf';

const uri69= 'pdf/geetmadhuri/g_madhuri_69_compressed.pdf';
const uri70= 'pdf/geetmadhuri/g_madhuri_70_compressed.pdf';

const uri71= 'pdf/geetmadhuri/g_madhuri_71_compressed.pdf';
const uri72= 'pdf/geetmadhuri/g_madhuri_72_compressed.pdf';
const uri73= 'pdf/geetmadhuri/g_madhuri_73_compressed.pdf';
const uri74= 'pdf/geetmadhuri/g_madhuri_74_compressed.pdf';
const uri75= 'pdf/geetmadhuri/g_madhuri_75_compressed.pdf';
const uri76= 'pdf/geetmadhuri/g_madhuri_76_compressed.pdf';
const uri77= 'pdf/geetmadhuri/g_madhuri_77_compressed.pdf';
const uri78= 'pdf/geetmadhuri/g_madhuri_78_compressed.pdf';
const uri79= 'pdf/geetmadhuri/g_madhuri_79_compressed.pdf';
const uri80= 'pdf/geetmadhuri/g_madhuri_80_compressed.pdf';




const uri81= 'pdf/geetmadhuri/g_madhuri_81_compressed.pdf';
const uri82= 'pdf/geetmadhuri/g_madhuri_82_compressed.pdf';
const uri83= 'pdf/geetmadhuri/g_madhuri_83_compressed.pdf';
const uri84= 'pdf/geetmadhuri/g_madhuri_84_compressed.pdf';
const uri85= 'pdf/geetmadhuri/g_madhuri_85_compressed.pdf';
const uri86= 'pdf/geetmadhuri/g_madhuri_86_compressed.pdf';
const uri87= 'pdf/geetmadhuri/g_madhuri_87_compressed.pdf';
const uri88= 'pdf/geetmadhuri/g_madhuri_88_compressed.pdf';
const uri89= 'pdf/geetmadhuri/g_madhuri_89_compressed.pdf';
const uri89_1= 'pdf/geetmadhuri/g_madhuri_89_1_compressed.pdf';

const uri90= 'pdf/geetmadhuri/g_madhuri_90_compressed.pdf';

const uri91= 'pdf/geetmadhuri/g_madhuri_91_compressed.pdf';
const uri92= 'pdf/geetmadhuri/g_madhuri_92_compressed.pdf';
const uri93= 'pdf/geetmadhuri/g_madhuri_93_compressed.pdf';
const uri94= 'pdf/geetmadhuri/g_madhuri_94_compressed.pdf';
const uri95= 'pdf/geetmadhuri/g_madhuri_95_compressed.pdf';
const uri96= 'pdf/geetmadhuri/g_madhuri_96_compressed.pdf';
const uri97= 'pdf/geetmadhuri/g_madhuri_97_compressed.pdf';
const uri98= 'pdf/geetmadhuri/g_madhuri_98_compressed.pdf';
const uri99= 'pdf/geetmadhuri/g_madhuri_99_compressed.pdf';
const uri100= 'pdf/geetmadhuri/g_madhuri_100_compressed.pdf';
const uri101= 'pdf/geetmadhuri/g_madhuri_101_compressed.pdf';
const uri102= 'pdf/geetmadhuri/g_madhuri_102_compressed.pdf';
const uri103= 'pdf/geetmadhuri/g_madhuri_103_compressed.pdf';
const uri104= 'pdf/geetmadhuri/g_madhuri_104_compressed.pdf';
const uri105= 'pdf/geetmadhuri/g_madhuri_105_compressed.pdf';
const uri106= 'pdf/geetmadhuri/g_madhuri_106_compressed.pdf';
const uri107= 'pdf/geetmadhuri/g_madhuri_107_compressed.pdf';




export default function Geetmadhuri({ navigation }) {
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
xhr ek/kqjh
</Text>
<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
lkbZa veka ,sa vo/k ,a c`t ljdkj th efgek] 
Lusg] fou;] vfHkyk"kk] f'k&#123;kk ,sa vk'kh'k ts 
Hkkoe;h infu] xhrfu] dFkkmfu ,sa ef.k 
ekykmfu tks laxzg A
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



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:' गीत माधुरी '})}>
  'kqHkk'kh'k        
  </Text>
  <View style = {styles.lineStyle} />


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
1&&lkbZa lkfgc efgek
</Text>




      <View style={[styles.card3, styles.shadowProp]} 
                            >
                                  <TouchableOpacity 
                                  
                                 >
    
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:fontname}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:' गीत माधुरी '})}>
efgek v"Vinh
  </Text>
  </TouchableOpacity>
  </View>


  <View style = {styles.lineStyle} />

  


  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}  >
  efgek xhr
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:' गीत माधुरी '})}>
  1 &	lfrxqj d`ikn`f"V th efgek				5
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:' गीत माधुरी '})}>
  2 &	dksu fn+Bkslha tx+ esa tsfn+;wa				6			5
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:' गीत माधुरी '})}>
  3 &	lkbZa lkfgc th on+h vk on+kbZ			7
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:' गीत माधुरी '})}>
  4 &	lkbZa 'kj.k lq[knkbZ vk	 7 
    </Text>
    <View style = {styles.lineStyle} />		
      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:' गीत माधुरी '})}>

5 &	vkuUn dUn mft;kjs

			8
</Text>
<View style = {styles.lineStyle} />	
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:' गीत माधुरी '})}>
6 &	lkbZa dj dey th Nk;k				8
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:' गीत माधुरी '})}>
7 &	lfrxqj leku nkrk				11
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:' गीत माधुरी '})}>
8 &	rogka th d`ik th Nk;k				12
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:' गीत माधुरी '})}>
9 &	rogka th efgek tks ukgs				13
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:' गीत माधुरी '})}>
10 &	lkbZa 'kj.k eqfgatks vkgs lgkjks			14

</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:' गीत माधुरी '})}>
11 &	lkbZa tflM+ks cq/qfe rogka tks			15

</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:' गीत माधुरी '})}>
12 &	lkbZa rogka th &gt;kadh vk				16
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:' गीत माधुरी '})}>
13 &	tS tS lfrxqj lkfgc I;kjk				18
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:' गीत माधुरी '})}>
14 &	uhga uxj ds lkbZa fuoklh				18
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:' गीत माधुरी '})}>
15 &	izse ijkfof/k izhre lkbZa				19
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:' गीत माधुरी '})}>
16 &	v/khufu tks vk/kkj				20
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:' गीत माधुरी '})}>
17 &	lfruke lkbZa lq[k/kke tks				21
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:' गीत माधुरी '})}>
18 &	gs lfrxqj nso rogka th				22
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:' गीत माधुरी '})}>
19 &	gejh lcgha Hkkafr lq/kkjh				23
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:' गीत माधुरी '})}>
20 &	gk.ks r rogka th d`ik th				23
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:' गीत माधुरी '})}>
21 &	lkbZa veka tSdkj pÅa lHkq				24
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:' गीत माधुरी '})}>
22 &	xk;wa gks xk;wa lkbZa tS tl				25
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:' गीत माधुरी '})}>
23 &	tS tS lkbZa lkfgc fefBM+k				26
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:' गीत माधुरी '})}>
24 &	tS lkbZa veka tS lkbZa veka				27
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:' गीत माधुरी '})}>
25 &	rogka th dhjfr x+k;ka Fkh				28
</Text>
<View style = {styles.lineStyle} /><Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:' गीत माधुरी '})}>
26 &	v +tq l[kh n+hagq mRlo tks				29

    </Text>
    <View style = {styles.lineStyle} />



  

    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
    Lusg xhr
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:' गीत माधुरी '})}>
  27 &	lkbZa vks lkbZa lfnM+k dj;ka Fkh			31
  </Text>
    <View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:' गीत माधुरी '})}>
    28 &	rqfgats izse th iqt+kfjf.k				32
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:' गीत माधुरी '})}>
    29 &	fefFkykiqjh v th ek/kqjh				33
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:' गीत माधुरी '})}>
    30 &	thou vk rqfgats bZ ukFk lgkjs			35
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:' गीत माधुरी '})}>
    31 &	dhav dfj;ka dk +ns o±kka				36
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:' गीत माधुरी '})}>
    32 &	lkbZa v pfj.kfu esa				37
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:' गीत माधुरी '})}>
    33 &	lfn+M+k dfj;ka Fkh lkbZa				38
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:' गीत माधुरी '})}>
    34 &	fny fuek.kh ln+ djs Fkh				39
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:' गीत माधुरी '})}>
    35 &	ew [ks iyd iyd ;kn vk				40
        </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:' गीत माधुरी '})}>
        36&	vk;ks vk;ks feBy eu Hkk;ks			41
        </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:' गीत माधुरी '})}>
        37 &	feBk eqgaM+ks eV.kq ojh nwj fFk;.kq			43
        </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:' गीत माधुरी '})}>
        38 &	us.kfu esa fuafMM+h u vkbZ				44
        </Text>
    <View style = {styles.lineStyle} />

    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >

     fueZy usagq				
    </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:' गीत माधुरी '})}>
  39 &	lkbZ veka Lusg th vnHkqr dFkk			45
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:' गीत माधुरी '})}>
  40 &	eqfgatks lkbZa izk.k I;kjks				46
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:' गीत माधुरी '})}>
  41 &	lkbZa veka v[kfM+;qfu vkjke			48
    </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:' गीत माधुरी '})}>
  42 &	lkbZa veka ts n'kZu ykb				49
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:' गीत माधुरी '})}>
  43 &	lkbZa veka yhyk I;kjh jh				51
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:' गीत माधुरी '})}>
  44 &	eqfgath fnyM+h lnka /;k;s				51
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:' गीत माधुरी '})}>
  45 &	lkbZa veka ts njl th				52
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:' गीत माधुरी '})}>
  46 &	vefM+ ts vuqjkx+ th dhjfr		   53
  
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >

fou; xhr
</Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:' गीत माधुरी '})}>
  47 &	fny fuek.kh lfn+M+k djs Fkh			57
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:' गीत माधुरी '})}>
  48 &	rks[ks Nk poka eqfgatk lkb;ka			58
    </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:' गीत माधुरी '})}>
  49 &	eqfgatk ukFk n+hag jkfr d;ka				59
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:' गीत माधुरी '})}>
  50 &	rqfgath 'kj.k esa vk;fl eka				61
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:' गीत माधुरी '})}>
  51 &	ewa [ks lgkjks rqfgatks ukFk vkgs			62
    </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:' गीत माधुरी '})}>
  52 &	dn+gha r ygq lqf/k lt+.k lusgh			63
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:' गीत माधुरी '})}>
  53 &	fey.k th rkj yx+h vk ru esa			64
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:' गीत माधुरी '})}>
  54 &	eqfgatks euq Fkks l +ns eqfgath fny Fkh 		65
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:' गीत माधुरी '})}>
  55 &	dhav feyka ifgats izk.kukFk lka			66
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
  
 vfHkyk"kk xhr
</Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:' गीत माधुरी '})}>
  56 &	lkbZa rogka ts pj.kfu rka				68
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:' गीत माधुरी '})}>
  57 &	rqfgath fefBM+h dhjfr lkbZa				69
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:' गीत माधुरी '})}>
  58 &	rqfgath 'kj.k eqfgatks thou				70
  </Text>

    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:' गीत माधुरी '})}>
  59 &	fFk;ka c+kUgh lnka rqfgath				71
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:' गीत माधुरी '})}>
  60 &	thou tks lgkjks rks[ks				72
    </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:' गीत माधुरी '})}>
  61 &	lkfgc lps tks tlM+ks				73
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:' गीत माधुरी '})}>
  62 &	gs ukFk rqfgats njl th				74
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}  >
f'k&#123;kk xhr
  </Text>
  <View style = {styles.lineStyle} />
      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:' गीत माधुरी '})}>
63 &	HkS;k lkbZa xq.k x+k;ks				75
</Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:' गीत माधुरी '})}>
  64 &	ls on+Hkkx+h lkbZa v xq.k				76
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:' गीत माधुरी '})}>
  65 &	jl fuf/k lkbZa v nfjM+s				77
  </Text>
    <View style = {styles.lineStyle} />



    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
   vk'kh'k xhr
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:' गीत माधुरी '})}>
  66 &	rqfgath lkfgch lnkbZa Fkhanh				78
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:' गीत माधुरी '})}>
  67 &	lkbZa vks lkbZa ft;ksfe lnkbZa				79
  </Text>
    <View style = {styles.lineStyle} />




    <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
    2&&Jhjke dFkke`r
    </Text>
    <View style = {styles.lineStyle} />

    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >

	Jhlh; Lokfefu efgek
</Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:' गीत माधुरी '})}>
  68 &	yM+srh yky yodq'k th				81
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri68_1,bookname:' गीत माधुरी '})}>
	Jhjke Lrqfr					82
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:' गीत माधुरी '})}>
Hkjr jke Lusg xkFkk
	'kadj pos Jhikjorh				86
    </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:' गीत माधुरी '})}>
  69 &	yfNe.k vlka tks ckck				91
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:' गीत माधुरी '})}>
  70 &	Lusg fla/qk Lokeh					95
  </Text>
    <View style = {styles.lineStyle} />




    <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  		
3&&c`t yhyk jlke`r
</Text>



    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
  
	eueksgu efgek
       </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:' गीत माधुरी '})}>
  71 &	rqfgtks #i vuwi I;kjks vk				100
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:' गीत माधुरी '})}>
  72 &	eqfgatks vk eksgu I;kjks				101
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:' गीत माधुरी '})}>
  73 &	eqfgatks ';ke lqUnj lka				103
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:' गीत माधुरी '})}>
  74 &	eS;k eksgu ?kj vk;s				104
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:' गीत माधुरी '})}>
  75 &	lkaojks lyksuks fi;k				105
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:' गीत माधुरी '})}>
  76 &	ts ewa ?kfj vpha					106
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:' गीत माधुरी '})}>
  77 &	Jhd`".k Jhd`".k					107
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
Jhtw efgek
    </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:' गीत माधुरी '})}>
  78&	dey dyh ykn+ iyh				108
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:' गीत माधुरी '})}>
  79 &	eka lfnds fFk;ka					109
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:' गीत माधुरी '})}>
  80 &	Lokfefu lusg ';ke esa				111
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:' गीत माधुरी '})}>
  81 &	d+ksu fn+Bkslha tx+ esa				113
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:' गीत माधुरी '})}>
  82 &	iy iy ;kn ios Fkh				114
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:' गीत माधुरी '})}>
  83 &	rqfgatw pok, fac+;ks dfgtwa				115
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:' गीत माधुरी '})}>
  84 &	lnka yk +nq rqfgatks vk				116
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}  >
;qxy Lusg
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:' गीत माधुरी '})}>
  85 &	uUn ;'kksnk tk uSufu rkjk				117
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:' गीत माधुरी '})}>
  86 &	dfgM+k n+hag feBk gqvk eueksgu			119
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:' गीत माधुरी '})}>
  87 &	izhre rkj yxh rqfgath ru esa			125
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:' गीत माधुरी '})}>
  88 &	l[kh lhaxkj ljlk;ks				126
    </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
vefM+ laEHkkj
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri89_1,bookname:' गीत माधुरी '})}>
  89 &	iy iy esa ios ;kn				127
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:' गीत माधुरी '})}>
  90 &	c+ksyh ;kn ibZ c`t ckju th			128
  </Text>
    <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
	vk'kh'k xhr
</Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:' गीत माधुरी '})}>
  91 &	fp# fp# thvks I;kjs				129
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:' गीत माधुरी '})}>
  92 &	feB veka rqfgatks c+kyq I;kjks			130
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:' गीत माधुरी '})}>
  93 &	fp# thvks o`"kHkkuq yyh				132
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:' गीत माधुरी '})}>
  94 &	fp#thvks yk +nqyh yky feBk eqfgatks		134
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:' गीत माधुरी '})}>
  95 &	fp#thvks yk +nqyh yky feBk rogkath		135
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:' गीत माधुरी '})}>
  96 &	fp#thm yk +nqyh					137
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri97,bookname:' गीत माधुरी '})}>
  97 &	feBk fd'ku rqfgath veka				139
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
	vfHkyk"kk xhr
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri98,bookname:' गीत माधुरी '})}>
  98 &	jk/ks';ke jk/ks';ke x+k;ka				141
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri99,bookname:' गीत माधुरी '})}>
  99 &	rwa u folkfj rwa u folkfj				143
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
f'k&#123;kk xhr
  </Text>
  <View style = {styles.lineStyle} />
      <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri100,bookname:' गीत माधुरी '})}>
100&	jk/ks';ke jk/ks';ke dfg;s				144
</Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri101,bookname:' गीत माधुरी '})}>
  101&	jk/ks';ke jk/ks';ke lnka				144
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri102,bookname:' गीत माधुरी '})}>
  102&	u rqfgatks dksbZ Hkh lkFkh				145
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri103,bookname:' गीत माधुरी '})}>
  103&	Jhd`".k xq.k x+k;ks HkkbZ				146
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'K246'}}   >
 ;equk Lrqfr
  </Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri104,bookname:' गीत माधुरी '})}>
  104&	tS ;equk eS;k					147
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  
4&&jke ';ke e/kqj yhyk
</Text>
    <View style = {styles.lineStyle} />
        <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}   onPress={() => navigation.navigate('Bookview',{pdfname:uri105,bookname:' गीत माधुरी '})}>
  105&	jke ';ke e/kqj yhyk				150
  </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} onPress={() => navigation.navigate('Bookview',{pdfname:uri106,bookname:' गीत माधुरी '})}>
  		5&&yhyk n'kZu				153
          </Text>
    <View style = {styles.lineStyle} />
    <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}} onPress={() => navigation.navigate('Bookview',{pdfname:uri107,bookname:' गीत माधुरी '})}>
  6&&fnfyM+hv Hkkofu ef.k ekyk		180

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
