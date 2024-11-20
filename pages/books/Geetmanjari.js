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
const uri0 = 'pdf/geetmanjari/geet_majari_0_compressed.pdf';
const uri0_1 = 'pdf/geetmanjari/geet_majari_0A_compressed.pdf';


const uri1 = 'pdf/geetmanjari/geet_majari_1_compressed.pdf';
const uri2 = 'pdf/geetmanjari/geet_majari_2_compressed.pdf';
const uri3 = 'pdf/geetmanjari/geet_majari_3_compressed.pdf';

const uri4 = 'pdf/geetmanjari/geet_majari_4_compressed.pdf';
const uri5 = 'pdf/geetmanjari/geet_majari_5_compressed.pdf';
const uri6 = 'pdf/geetmanjari/geet_majari_6_compressed.pdf';
const uri7 = 'pdf/geetmanjari/geet_majari_7_compressed.pdf';
const uri8 = 'pdf/geetmanjari/geet_majari_8_compressed.pdf';
const uri9 = 'pdf/geetmanjari/geet_majari_9_compressed.pdf';
const uri10 = 'pdf/geetmanjari/geet_majari_10_compressed.pdf';
const uri11= 'pdf/geetmanjari/geet_majari_11_compressed.pdf';
const uri12= 'pdf/geetmanjari/geet_majari_12_compressed.pdf';
const uri13= 'pdf/geetmanjari/geet_majari_13_compressed.pdf';
const uri14= 'pdf/geetmanjari/geet_majari_14_compressed.pdf';
const uri15= 'pdf/geetmanjari/geet_majari_15_compressed.pdf';
const uri16= 'pdf/geetmanjari/geet_majari_16_compressed.pdf';
const uri17= 'pdf/geetmanjari/geet_majari_17_compressed.pdf';

const uri18= 'pdf/geetmanjari/geet_majari_18_compressed.pdf';
const uri19= 'pdf/geetmanjari/geet_majari_19_compressed.pdf';

const uri20= 'pdf/geetmanjari/geet_majari_20_compressed.pdf';
const uri21= 'pdf/geetmanjari/geet_majari_21_compressed.pdf';
const uri22= 'pdf/geetmanjari/geet_majari_22_compressed.pdf';
const uri23= 'pdf/geetmanjari/geet_majari_23_compressed.pdf';
const uri24= 'pdf/geetmanjari/geet_majari_24_compressed.pdf';
const uri25= 'pdf/geetmanjari/geet_majari_25_compressed.pdf';
const uri26= 'pdf/geetmanjari/geet_majari_26_compressed.pdf';
const uri27= 'pdf/geetmanjari/geet_majari_27_compressed.pdf';
const uri28= 'pdf/geetmanjari/geet_majari_28_compressed.pdf';
const uri29= 'pdf/geetmanjari/geet_majari_29_compressed.pdf';


const uri30= 'pdf/geetmanjari/geet_majari_30_compressed.pdf';
const uri31= 'pdf/geetmanjari/geet_majari_31_compressed.pdf';
const uri32= 'pdf/geetmanjari/geet_majari_32_compressed.pdf';
const uri33= 'pdf/geetmanjari/geet_majari_33_compressed.pdf';
const uri34= 'pdf/geetmanjari/geet_majari_34_compressed.pdf';
const uri35= 'pdf/geetmanjari/geet_majari_35_compressed.pdf';
const uri36= 'pdf/geetmanjari/geet_majari_36_compressed.pdf';
const uri37= 'pdf/geetmanjari/geet_majari_37_compressed.pdf';
const uri38= 'pdf/geetmanjari/geet_majari_38_compressed.pdf';
const uri39= 'pdf/geetmanjari/geet_majari_39_compressed.pdf';
const uri40= 'pdf/geetmanjari/geet_majari_40_compressed.pdf';

const uri41= 'pdf/geetmanjari/geet_majari_41_compressed.pdf';
const uri42= 'pdf/geetmanjari/geet_majari_42_compressed.pdf';
const uri43= 'pdf/geetmanjari/geet_majari_43_compressed.pdf';
const uri44= 'pdf/geetmanjari/geet_majari_44_compressed.pdf';
const uri45= 'pdf/geetmanjari/geet_majari_45_compressed.pdf';
const uri46= 'pdf/geetmanjari/geet_majari_46_compressed.pdf';
const uri47= 'pdf/geetmanjari/geet_majari_47_compressed.pdf';
const uri48= 'pdf/geetmanjari/geet_majari_48_compressed.pdf';
const uri49= 'pdf/geetmanjari/geet_majari_49_compressed.pdf';
const uri50= 'pdf/geetmanjari/geet_majari_50_compressed.pdf';

const uri51= 'pdf/geetmanjari/geet_majari_51_compressed.pdf';
const uri52= 'pdf/geetmanjari/geet_majari_52_compressed.pdf';
const uri53= 'pdf/geetmanjari/geet_majari_53_compressed.pdf';
const uri54= 'pdf/geetmanjari/geet_majari_54_compressed.pdf';
const uri55= 'pdf/geetmanjari/geet_majari_55_compressed.pdf';
const uri56= 'pdf/geetmanjari/geet_majari_56_compressed.pdf';
const uri57= 'pdf/geetmanjari/geet_majari_57_compressed.pdf';
const uri58= 'pdf/geetmanjari/geet_majari_58_compressed.pdf';
const uri59= 'pdf/geetmanjari/geet_majari_59_compressed.pdf';
const uri60= 'pdf/geetmanjari/geet_majari_60_compressed.pdf';

const uri61= 'pdf/geetmanjari/geet_majari_61_compressed.pdf';
const uri62= 'pdf/geetmanjari/geet_majari_62_compressed.pdf';
const uri63= 'pdf/geetmanjari/geet_majari_63_compressed.pdf';
const uri64= 'pdf/geetmanjari/geet_majari_64_compressed.pdf';
const uri65= 'pdf/geetmanjari/geet_majari_65_compressed.pdf';
const uri66= 'pdf/geetmanjari/geet_majari_66_compressed.pdf';
const uri67= 'pdf/geetmanjari/geet_majari_67_compressed.pdf';
const uri68= 'pdf/geetmanjari/geet_majari_68_compressed.pdf';
const uri69= 'pdf/geetmanjari/geet_majari_69_compressed.pdf';
const uri70= 'pdf/geetmanjari/geet_majari_70_compressed.pdf';

const uri71= 'pdf/geetmanjari/geet_majari_71_compressed.pdf';
const uri72= 'pdf/geetmanjari/geet_majari_72_compressed.pdf';
const uri73= 'pdf/geetmanjari/geet_majari_73_compressed.pdf';
const uri74= 'pdf/geetmanjari/geet_majari_74_compressed.pdf';
const uri75= 'pdf/geetmanjari/geet_majari_75_compressed.pdf';
const uri76= 'pdf/geetmanjari/geet_majari_76_compressed.pdf';
const uri77= 'pdf/geetmanjari/geet_majari_77_compressed.pdf';
const uri78= 'pdf/geetmanjari/geet_majari_78_compressed.pdf';
const uri79= 'pdf/geetmanjari/geet_majari_79_compressed.pdf';
const uri80= 'pdf/geetmanjari/geet_majari_80_compressed.pdf';




const uri81= 'pdf/geetmanjari/geet_majari_81_compressed.pdf';
const uri82= 'pdf/geetmanjari/geet_majari_82_compressed.pdf';
const uri83= 'pdf/geetmanjari/geet_majari_83_compressed.pdf';
const uri84= 'pdf/geetmanjari/geet_majari_84_compressed.pdf';
const uri85= 'pdf/geetmanjari/geet_majari_85_compressed.pdf';
const uri86= 'pdf/geetmanjari/geet_majari_86_compressed.pdf';
const uri87= 'pdf/geetmanjari/geet_majari_87_compressed.pdf';
const uri88= 'pdf/geetmanjari/geet_majari_88_compressed.pdf';
const uri89= 'pdf/geetmanjari/geet_majari_89_compressed.pdf';
const uri90= 'pdf/geetmanjari/geet_majari_90_compressed.pdf';

const uri91= 'pdf/geetmanjari/geet_majari_91_compressed.pdf';
const uri92= 'pdf/geetmanjari/geet_majari_92_compressed.pdf';
const uri93= 'pdf/geetmanjari/geet_majari_93_compressed.pdf';
const uri94= 'pdf/geetmanjari/geet_majari_94_compressed.pdf';
const uri95= 'pdf/geetmanjari/geet_majari_95_compressed.pdf';
const uri96= 'pdf/geetmanjari/geet_majari_96_compressed.pdf';
const uri97= 'pdf/geetmanjari/geet_majari_97_compressed.pdf';
const uri98= 'pdf/geetmanjari/geet_majari_98_compressed.pdf';
const uri99= 'pdf/geetmanjari/geet_majari_99_compressed.pdf';
const uri100= 'pdf/geetmanjari/geet_majari_100_compressed.pdf';
const uri101= 'pdf/geetmanjari/geet_majari_101_compressed.pdf';
const uri102= 'pdf/geetmanjari/geet_majari_102_compressed.pdf';
const uri103= 'pdf/geetmanjari/geet_majari_103_compressed.pdf';
const uri104= 'pdf/geetmanjari/geet_majari_104_compressed.pdf';


export default function Geetmanjari({ navigation }) {
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
xhr e´tjh</Text>
<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

¼ lkbZa veka efgek] Lusg] f’k&#123;kk] fou;] vfHkyk"kk 
,as vk’kh’k ts Hkkoiw.kZ xhrfu tks laxzg ½


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



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Malika (Ish Anugrah)'})}>
lkbZa lkfgc dk d`ikik=
 </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:'Geet Malika (Ish Anugrah)'})}>
	;qxy ljdkj ds I;kjs </Text>




<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
 efgek xhr
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:" गीत मञ्जरी "})}>

1   tS tS lRxqj lkfgc lkbZa				     1
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:" गीत मञ्जरी "})}>
   2   x+k;ka eka x+k;ka dhjfr vogkath			3
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:" गीत मञ्जरी "})}>
   3   feBks lkbZa lkfgc lq[k/kke vk			5
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:" गीत मञ्जरी "})}>
   4   o´ka  dqfjcku rogka ts opufu rka			6
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:" गीत मञ्जरी "})}>
5   rqfgatks ukeq vk izk.k vk/kkj			7
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:" गीत मञ्जरी "})}>
   6   d#.kk tk lkxj d`ik vogkath			9
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:" गीत मञ्जरी "})}>
   7   vks 'kjf.k i;fu tk ikyhanM+			10
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:" गीत मञ्जरी "})}>
   8   tn+gha [kka feyh lkbZa				11
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:" गीत मञ्जरी "})}>
   9   egjcku lkbZa fefBM+k				13
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:" गीत मञ्जरी "})}>
   10  lpq Fkh poka eqafgtk lkbZa				14
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:" गीत मञ्जरी "})}>

   11  jl tks vk/kkj lkbZa				 16
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:" गीत मञ्जरी "})}>
   12  efgjcku efgjcku feBks egkjkt			17
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:" गीत मञ्जरी "})}>
   13  vkgs gh.kfu tks gejkgq				18
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:" गीत मञ्जरी "})}>
   14  rqfgath d`ik –f"V Lokeh				    20
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:" गीत मञ्जरी "})}>
   15  egkHkkx+ dksfdy jk.kh				21
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:" गीत मञ्जरी "})}>
16  d#.kk lkxj lRxqj I;kjk				22
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:" गीत मञ्जरी "})}>
17  lkbZa v ?kj xyh					23
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:" गीत मञ्जरी "})}>
   18  lkfgcq lkbZa eqafgtks I;kjks				 25
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:" गीत मञ्जरी "})}>
   19  lkbZa lkfgc th tS tS x+k;wa lnka			  25
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:" गीत मञ्जरी "})}>
   20  dhav folkfj;ka midkj vogka tk			   27
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:" गीत मञ्जरी "})}>
   21  eka lfnds fFk;ka lkbZa veka rka			    28
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:" गीत मञ्जरी "})}>
   22  vks veka feBh rqfgath d`ik feBh			30
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:" गीत मञ्जरी "})}>
   23  lkbZa v tl th dFkk jlhyh			    32
</Text>
   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
ukeefgek&


</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:" गीत मञ्जरी "})}>

24  ewa[ks izk.kfu [kka I;kjks				34
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:" गीत मञ्जरी "})}>

   25  ehBks ehBks I;kjks I;kjks				36

 </Text>


   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

  f'k&#123;kk xhr&

</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:" गीत मञ्जरी "})}>
26  x+k;ks x+k;ks lHksbZ x+k;ks				37
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:" गीत मञ्जरी "})}>
   27  lRxqj tk xqfuM+k x+k;ks lnka			38
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:" गीत मञ्जरी "})}>
   28  gyh njlq dfj;wa					39
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:" गीत मञ्जरी "})}>
   29  lkbZa lkfgc th dhjfr feBh			 40
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:" गीत मञ्जरी "})}>
   30  d#.kk flU/kq lRxqj th				41
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:" गीत मञ्जरी "})}>
   31  d#.kk fu/kku lkbZa				42
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:" गीत मञ्जरी "})}>
32  lkbZa v tfgM+ks ekfydq				43
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:" गीत मञ्जरी "})}>
   33  lkbZa veka th dhjfr				45
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:" गीत मञ्जरी "})}>
   34  lkbZa veka th efgek I;kjh			46
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:" गीत मञ्जरी "})}>
   35  tsds lkbZa lkbZa x+kbfu				47
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:" गीत मञ्जरी "})}>
   36  g;krh gjh jl esa ?kkj.kq [kis			48
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:" गीत मञ्जरी "})}>
   37  ghm thouq lQyq frfu tks vk			49
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:" गीत मञ्जरी "})}>
 38  lkbZa x+k;ks thouq /kU;q Fkhanks			50
 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:" गीत मञ्जरी "})}>

   39  lkbZa veka tS x+kb js HkkbZ				51
   </Text>
   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

   fou; xhr&
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:" गीत मञ्जरी "})}>
   40  rqafgtwa ØksM+ Hkyk;wa Hkk;ka lt+.k			53
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:" गीत मञ्जरी "})}>
   41  ewa [ks rogka tks Hkjkslks vkgs			54
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:" गीत मञ्जरी "})}>
42  gFk tksM+s Fkh ukFk yhyk;ka			55
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:" गीत मञ्जरी "})}>
   43  I;kj th ewa[ks I;kl vk				57
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" गीत मञ्जरी "})}>
   44  vks eqfgatk lkbZa gjh ukeq c+q/kk;ks			 58
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:" गीत मञ्जरी "})}>
   45  vks usg fuek.kk dhu folkfjft			59
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:" गीत मञ्जरी "})}>
  46  lUr efgek ds loS;s ¼ fgUnh ½			61
   </Text>
   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

  Okk/kkbZ xhr&
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:" गीत मञ्जरी "})}>
  47  x+k;wa tUe ok/kkbZ lkbZa jke th			62
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:" गीत मञ्जरी "})}>
   48  nqanqHkh ctkbZ vkt nso xxu esa ¼ fgUnh ½		63
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:" गीत मञ्जरी "})}>
   49  dksfdy lkbZa dh x+kÅa tUe ok/kkbZ ¼ fgUnh ½	64
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:" गीत मञ्जरी "})}>
   50  thou vk/kkj izHkq yh;k vforkj gS ¼ fgUnh ½	65
   </Text>
   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

  c`tyhyk xhr&
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:" गीत मञ्जरी "})}>
   51  cky d`".k th yhyk				67
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:" गीत मञ्जरी "})}>
  52  fp# thoks feBk uUnyky gjh			68
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:" गीत मञ्जरी "})}>
   53  lnka 'kky ft;ans ;’kksnk nqykjk			71
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:" गीत मञ्जरी "})}>
 54  f[kyh f[kyh tafg vk fpfrM+ks pksjk;ks		72
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:" गीत मञ्जरी "})}>
   55  ckydq d`".k ups Fkks Ne Ne			74
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:" गीत मञ्जरी "})}>
   56  eqfgatks rwa c+k# vka				76
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:" गीत मञ्जरी "})}>
   57  thou tks lkFkh lt+.kq				78
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:" गीत मञ्जरी "})}>
   58  'kksHkk th fu/kku xkSjh ¼ fgUnh ½			79
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:" गीत मञ्जरी "})}>
   59  lkSHkkX; ewa va³.k tks				80
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:" गीत मञ्जरी "})}>
   60  d`ik Hk.Mkj Lokfefu				81
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:" गीत मञ्जरी "})}>
   61  eqafgtks euq vk’kh’k mpkjs				84
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:" गीत मञ्जरी "})}>
   62  uUnuUnu ?ku’;ke				87
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:" गीत मञ्जरी "})}>
   63  ';ke ';ke lqdqekj				88
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:" गीत मञ्जरी "})}>
   64  xksfi;qfu ts izse th				90
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:" गीत मञ्जरी "})}>
   65  Jh jk/kk jk/kk x+kb				91
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:" गीत मञ्जरी "})}>
   66  jk/ks’;ke jk/ks’;ke				93
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:" गीत मञ्जरी "})}>
   67  vlha xksdqy twa ukfj;wa				94
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:" गीत मञ्जरी "})}>
   68  gjs jke gjs jke					94

   </Text>
   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  Lusg xhr&
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:" गीत मञ्जरी "})}>
   69  vefM+ lkbZa lusg th				97
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:" गीत मञ्जरी "})}>
   70  lqdqekj lkbZa lfpM+k				98
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:" गीत मञ्जरी "})}>
   71  rks[kka flok; lkfgc lpk				99
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:" गीत मञ्जरी "})}>
    72  thou vk/kkj lkbZa				100
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:" गीत मञ्जरी "})}>
    73  d`ik tk lkxj					101
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:" गीत मञ्जरी "})}>
    74  dhav feyka ifgats				103
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:" गीत मञ्जरी "})}>
    75  lEHkkfj;ka lkg lkg esa				104

    </Text>
   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
   vf“yk"kk xhr&
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:" गीत मञ्जरी "})}>
    76  lkbZa lkbZa lEHkkfj;ka iy iy esa			106
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:" गीत मञ्जरी "})}>
    77  feBs lkbZa veka th tS tS x+k;ka			107
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:" गीत मञ्जरी "})}>
    78  x+k;ka eka xq.k xqjnso tk				108
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:" गीत मञ्जरी "})}>
    79  lkbZa lkfgc rka eka				108
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:" गीत मञ्जरी "})}>
    80  eqfgatks thou lgkjks				109
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:" गीत मञ्जरी "})}>
    81  eqfgatks jkseq jkseq jVs				111
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:" गीत मञ्जरी "})}>
    82  fFk;s thou lQj iwjks				112
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:" गीत मञ्जरी "})}>
    83  ftvks lkbZa veka					113
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:" गीत मञ्जरी "})}>
    84  vkfg;ka eka tfgatks				114
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:" गीत मञ्जरी "})}>
    85  rwa lkbZa lkfgc izk.k I;kjk				115
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:" गीत मञ्जरी "})}>
    86  lkbZa feBs uke rka				117
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:" गीत मञ्जरी "})}>
    87  ;kfn lka Hkfj;ks thouq eqfgatks			118
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:" गीत मञ्जरी "})}>
    88  lkbZa d`ik tk lkxj				119
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:" गीत मञ्जरी "})}>
    89  lkbZa izk.kfu [kka furq I;kjks vk			120
      </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:" गीत मञ्जरी "})}>
    90  osBh vkfg;ka rqfgath d`ik th			122
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:" गीत मञ्जरी "})}>
    91  rqfgats pj.kfu esa jgs eqfgatks euq			123

    </Text>
   <View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
 vk’kh’k xhr&
 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:" गीत मञ्जरी "})}>
92  thvks lnka thvks lnka				125
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:" गीत मञ्जरी "})}>
   93  lkbZa thvks lnka					126
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:" गीत मञ्जरी "})}>
   94  efgjcku lkbZa fefBM+k				127
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:" गीत मञ्जरी "})}>
   95  izHkq isze tks ikBq					129
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:" गीत मञ्जरी "})}>
 96  vkbZ vkfg;ka eka lkbZa				130
 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri97,bookname:" गीत मञ्जरी "})}>
   97  lRxqj lkbZa ft;ksfe lnkbZa				131
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri98,bookname:" गीत मञ्जरी "})}>
   98  fldh y/kk lkbZa					132
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri99,bookname:" गीत मञ्जरी "})}>
   99  fp# thoks feBy lRlax 				133
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri100,bookname:" गीत मञ्जरी "})}>
100  lnka ft,a lkbZa veka fl;kjke			135
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri101,bookname:" गीत मञ्जरी "})}>
101  fp# thoks lkbZa veka				136
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri102,bookname:" गीत मञ्जरी "})}>
102  fp# thoks izk.k izhre				137
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri103,bookname:" गीत मञ्जरी "})}>
103  eqfgatk lkbZa lkfgc 'khyfu/kh			137
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri104,bookname:" गीत मञ्जरी "})}>
104  Jh jk/kk Jh jk/kk vk’kh’kwa fn+;ka Fkh			139

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
