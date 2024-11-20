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
const uri0 = 'pdf/geetmanas2/geet_manas2_0_compressed.pdf';
const uri0_1 = 'pdf/geetmanas2/geet_manas2_0_1_compressed.pdf';


const uri1 = 'pdf/geetmanas2/geet_manas2_1_compressed.pdf';
const uri2 = 'pdf/geetmanas2/geet_manas2_2_compressed.pdf';
const uri3 = 'pdf/geetmanas2/geet_manas2_3_compressed.pdf';

const uri4 = 'pdf/geetmanas2/geet_manas2_4_compressed.pdf';
const uri5 = 'pdf/geetmanas2/geet_manas2_5_compressed.pdf';
const uri6 = 'pdf/geetmanas2/geet_manas2_6_compressed.pdf';
const uri7 = 'pdf/geetmanas2/geet_manas2_7_compressed.pdf';
const uri8 = 'pdf/geetmanas2/geet_manas2_8_compressed.pdf';
const uri9 = 'pdf/geetmanas2/geet_manas2_9_compressed.pdf';
const uri10 = 'pdf/geetmanas2/geet_manas2_10_compressed.pdf';
const uri11= 'pdf/geetmanas2/geet_manas2_11_compressed.pdf';
const uri12= 'pdf/geetmanas2/geet_manas2_12_compressed.pdf';
const uri13= 'pdf/geetmanas2/geet_manas2_13_compressed.pdf';
const uri14= 'pdf/geetmanas2/geet_manas2_14_compressed.pdf';
const uri15= 'pdf/geetmanas2/geet_manas2_15_compressed.pdf';
const uri16= 'pdf/geetmanas2/geet_manas2_16_compressed.pdf';
const uri17= 'pdf/geetmanas2/geet_manas2_17_compressed.pdf';

const uri18= 'pdf/geetmanas2/geet_manas2_18_compressed.pdf';
const uri19= 'pdf/geetmanas2/geet_manas2_19_compressed.pdf';

const uri20= 'pdf/geetmanas2/geet_manas2_20_compressed.pdf';
const uri21= 'pdf/geetmanas2/geet_manas2_21_compressed.pdf';
const uri22= 'pdf/geetmanas2/geet_manas2_22_compressed.pdf';
const uri23= 'pdf/geetmanas2/geet_manas2_23_compressed.pdf';
const uri24= 'pdf/geetmanas2/geet_manas2_24_compressed.pdf';
const uri25= 'pdf/geetmanas2/geet_manas2_25_compressed.pdf';
const uri26= 'pdf/geetmanas2/geet_manas2_26_compressed.pdf';
const uri27= 'pdf/geetmanas2/geet_manas2_27_compressed.pdf';
const uri28= 'pdf/geetmanas2/geet_manas2_28_compressed.pdf';
const uri29= 'pdf/geetmanas2/geet_manas2_29_compressed.pdf';


const uri30= 'pdf/geetmanas2/geet_manas2_30_compressed.pdf';
const uri31= 'pdf/geetmanas2/geet_manas2_31_compressed.pdf';
const uri32= 'pdf/geetmanas2/geet_manas2_32_compressed.pdf';
const uri33= 'pdf/geetmanas2/geet_manas2_33_compressed.pdf';
const uri34= 'pdf/geetmanas2/geet_manas2_34_compressed.pdf';
const uri35= 'pdf/geetmanas2/geet_manas2_35_compressed.pdf';
const uri36= 'pdf/geetmanas2/geet_manas2_36_compressed.pdf';
const uri37= 'pdf/geetmanas2/geet_manas2_37_compressed.pdf';
const uri38= 'pdf/geetmanas2/geet_manas2_38_compressed.pdf';
const uri39= 'pdf/geetmanas2/geet_manas2_39_compressed.pdf';
const uri40= 'pdf/geetmanas2/geet_manas2_40_compressed.pdf';

const uri41= 'pdf/geetmanas2/geet_manas2_41_compressed.pdf';
const uri42= 'pdf/geetmanas2/geet_manas2_42_compressed.pdf';
const uri43= 'pdf/geetmanas2/geet_manas2_43_compressed.pdf';
const uri44= 'pdf/geetmanas2/geet_manas2_44_compressed.pdf';
const uri45= 'pdf/geetmanas2/geet_manas2_45_compressed.pdf';
const uri46= 'pdf/geetmanas2/geet_manas2_46_compressed.pdf';
const uri47= 'pdf/geetmanas2/geet_manas2_47_compressed.pdf';
const uri48= 'pdf/geetmanas2/geet_manas2_48_compressed.pdf';
const uri49= 'pdf/geetmanas2/geet_manas2_49_compressed.pdf';
const uri50= 'pdf/geetmanas2/geet_manas2_50_compressed.pdf';

const uri51= 'pdf/geetmanas2/geet_manas2_51_compressed.pdf';
const uri52= 'pdf/geetmanas2/geet_manas2_52_compressed.pdf';
const uri53= 'pdf/geetmanas2/geet_manas2_53_compressed.pdf';
const uri54= 'pdf/geetmanas2/geet_manas2_54_compressed.pdf';
const uri55= 'pdf/geetmanas2/geet_manas2_55_compressed.pdf';
const uri56= 'pdf/geetmanas2/geet_manas2_56_compressed.pdf';
const uri57= 'pdf/geetmanas2/geet_manas2_57_compressed.pdf';
const uri58= 'pdf/geetmanas2/geet_manas2_58_compressed.pdf';
const uri59= 'pdf/geetmanas2/geet_manas2_59_compressed.pdf';
const uri60= 'pdf/geetmanas2/geet_manas2_60_compressed.pdf';

const uri61= 'pdf/geetmanas2/geet_manas2_61_compressed.pdf';
const uri62= 'pdf/geetmanas2/geet_manas2_62_compressed.pdf';
const uri63= 'pdf/geetmanas2/geet_manas2_63_compressed.pdf';
const uri64= 'pdf/geetmanas2/geet_manas2_64_compressed.pdf';
const uri65= 'pdf/geetmanas2/geet_manas2_65_compressed.pdf';
const uri66= 'pdf/geetmanas2/geet_manas2_66_compressed.pdf';
const uri67= 'pdf/geetmanas2/geet_manas2_67_compressed.pdf';
const uri68= 'pdf/geetmanas2/geet_manas2_68_compressed.pdf';
const uri69= 'pdf/geetmanas2/geet_manas2_69_compressed.pdf';
const uri70= 'pdf/geetmanas2/geet_manas2_70_compressed.pdf';

const uri71= 'pdf/geetmanas2/geet_manas2_71_compressed.pdf';
const uri72= 'pdf/geetmanas2/geet_manas2_72_compressed.pdf';
const uri73= 'pdf/geetmanas2/geet_manas2_73_compressed.pdf';
const uri74= 'pdf/geetmanas2/geet_manas2_74_compressed.pdf';
const uri75= 'pdf/geetmanas2/geet_manas2_75_compressed.pdf';
const uri76= 'pdf/geetmanas2/geet_manas2_76_compressed.pdf';
const uri77= 'pdf/geetmanas2/geet_manas2_77_compressed.pdf';
const uri78= 'pdf/geetmanas2/geet_manas2_78_compressed.pdf';
const uri79= 'pdf/geetmanas2/geet_manas2_79_compressed.pdf';
const uri80= 'pdf/geetmanas2/geet_manas2_80_compressed.pdf';




const uri81= 'pdf/geetmanas2/geet_manas2_81_compressed.pdf';
const uri82= 'pdf/geetmanas2/geet_manas2_82_compressed.pdf';
const uri83= 'pdf/geetmanas2/geet_manas2_83_compressed.pdf';
const uri84= 'pdf/geetmanas2/geet_manas2_84_compressed.pdf';
const uri85= 'pdf/geetmanas2/geet_manas2_85_compressed.pdf';
const uri86= 'pdf/geetmanas2/geet_manas2_86_compressed.pdf';
const uri87= 'pdf/geetmanas2/geet_manas2_87_compressed.pdf';
const uri88= 'pdf/geetmanas2/geet_manas2_88_compressed.pdf';
const uri89= 'pdf/geetmanas2/geet_manas2_89_compressed.pdf';
const uri90= 'pdf/geetmanas2/geet_manas2_90_compressed.pdf';

const uri91= 'pdf/geetmanas2/geet_manas2_91_compressed.pdf';
const uri92= 'pdf/geetmanas2/geet_manas2_92_compressed.pdf';
const uri93= 'pdf/geetmanas2/geet_manas2_93_compressed.pdf';
const uri94= 'pdf/geetmanas2/geet_manas2_94_compressed.pdf';
const uri95= 'pdf/geetmanas2/geet_manas2_95_compressed.pdf';
const uri96= 'pdf/geetmanas2/geet_manas2_96_compressed.pdf';
const uri97= 'pdf/geetmanas2/geet_manas2_97_compressed.pdf';
const uri98= 'pdf/geetmanas2/geet_manas2_98_compressed.pdf';
const uri99= 'pdf/geetmanas2/geet_manas2_99_compressed.pdf';
const uri100= 'pdf/geetmanas2/geet_manas2_100_compressed.pdf';
const uri101= 'pdf/geetmanas2/geet_manas2_101_compressed.pdf';
const uri102= 'pdf/geetmanas2/geet_manas2_102_compressed.pdf';
const uri103= 'pdf/geetmanas2/geet_manas2_103_compressed.pdf';
const uri104= 'pdf/geetmanas2/geet_manas2_104_compressed.pdf';
const uri105= 'pdf/geetmanas2/geet_manas2_105_compressed.pdf';
const uri106= 'pdf/geetmanas2/geet_manas2_106_compressed.pdf';
const uri107= 'pdf/geetmanas2/geet_manas2_107_compressed.pdf';
const uri108= 'pdf/geetmanas2/geet_manas2_108_compressed.pdf';
const uri109= 'pdf/geetmanas2/geet_manas2_109_compressed.pdf';
const uri110= 'pdf/geetmanas2/geet_manas2_110_compressed.pdf';
const uri111= 'pdf/geetmanas2/geet_manas2_111_compressed.pdf';

const uri112= 'pdf/geetmanas2/geet_manas2_112_compressed.pdf';
const uri113= 'pdf/geetmanas2/geet_manas2_113_compressed.pdf';
const uri114= 'pdf/geetmanas2/geet_manas2_114_compressed.pdf';
const uri115= 'pdf/geetmanas2/geet_manas2_115_compressed.pdf';
const uri116= 'pdf/geetmanas2/geet_manas2_116_compressed.pdf';
const uri117= 'pdf/geetmanas2/geet_manas2_117_compressed.pdf';
const uri118= 'pdf/geetmanas2/geet_manas2_118_compressed.pdf';



const uri119= 'pdf/geetmanas2/geet_manas2_119_compressed.pdf';
const uri120= 'pdf/geetmanas2/geet_manas2_120_compressed.pdf';
const uri121= 'pdf/geetmanas2/geet_manas2_121_compressed.pdf';
const uri122= 'pdf/geetmanas2/geet_manas2_122_compressed.pdf';
const uri123= 'pdf/geetmanas2/geet_manas2_123_compressed.pdf';
const uri124= 'pdf/geetmanas2/geet_manas2_124_compressed.pdf';
const uri125= 'pdf/geetmanas2/geet_manas2_125_compressed.pdf';
const uri126= 'pdf/geetmanas2/geet_manas2_126_compressed.pdf';
const uri127= 'pdf/geetmanas2/geet_manas2_127_compressed.pdf';
const uri128= 'pdf/geetmanas2/geet_manas2_128_compressed.pdf';
const uri129= 'pdf/geetmanas2/geet_manas2_129_compressed.pdf';
const uri130= 'pdf/geetmanas2/geet_manas2_130_compressed.pdf';
const uri131= 'pdf/geetmanas2/geet_manas2_131_compressed.pdf';
const uri132= 'pdf/geetmanas2/geet_manas2_132_compressed.pdf';
const uri133= 'pdf/geetmanas2/geet_manas2_133_compressed.pdf';
const uri134= 'pdf/geetmanas2/geet_manas2_134_compressed.pdf';
const uri135= 'pdf/geetmanas2/geet_manas2_135_compressed.pdf';
const uri136= 'pdf/geetmanas2/geet_manas2_136_compressed.pdf';
const uri137= 'pdf/geetmanas2/geet_manas2_137_compressed.pdf';
const uri138= 'pdf/geetmanas2/geet_manas2_138_compressed.pdf';
const uri139= 'pdf/geetmanas2/geet_manas2_139_compressed.pdf';
const uri140= 'pdf/geetmanas2/geet_manas2_140_compressed.pdf';




const uri141= 'pdf/geetmanas2/geet_manas2_141_compressed.pdf';
const uri142= 'pdf/geetmanas2/geet_manas2_142_compressed.pdf';
const uri143= 'pdf/geetmanas2/geet_manas2_143_compressed.pdf';
const uri144= 'pdf/geetmanas2/geet_manas2_144_compressed.pdf';
const uri145= 'pdf/geetmanas2/geet_manas2_145_compressed.pdf';
const uri146= 'pdf/geetmanas2/geet_manas2_146_compressed.pdf';
const uri147= 'pdf/geetmanas2/geet_manas2_147_compressed.pdf';
const uri148= 'pdf/geetmanas2/geet_manas2_148_compressed.pdf';
const uri149= 'pdf/geetmanas2/geet_manas2_149_compressed.pdf';
const uri150= 'pdf/geetmanas2/geet_manas2_150_compressed.pdf';

const uri151= 'pdf/geetmanas2/geet_manas2_151_compressed.pdf';
const uri152= 'pdf/geetmanas2/geet_manas2_152_compressed.pdf';
const uri153= 'pdf/geetmanas2/geet_manas2_153_compressed.pdf';
const uri154= 'pdf/geetmanas2/geet_manas2_154_compressed.pdf';
const uri155= 'pdf/geetmanas2/geet_manas2_155_compressed.pdf';
const uri156= 'pdf/geetmanas2/geet_manas2_156_compressed.pdf';
const uri157= 'pdf/geetmanas2/geet_manas2_157_compressed.pdf';
const uri158= 'pdf/geetmanas2/geet_manas2_158_compressed.pdf';
const uri159= 'pdf/geetmanas2/geet_manas2_159_compressed.pdf';
const uri160= 'pdf/geetmanas2/geet_manas2_160_compressed.pdf';

const uri161= 'pdf/geetmanas2/geet_manas2_161_compressed.pdf';
const uri162= 'pdf/geetmanas2/geet_manas2_162_compressed.pdf';
const uri163= 'pdf/geetmanas2/geet_manas2_163_compressed.pdf';
const uri164= 'pdf/geetmanas2/geet_manas2_164_compressed.pdf';
const uri165= 'pdf/geetmanas2/geet_manas2_165_compressed.pdf';
const uri166= 'pdf/geetmanas2/geet_manas2_166_compressed.pdf';
const uri167= 'pdf/geetmanas2/geet_manas2_167_compressed.pdf';
const uri168= 'pdf/geetmanas2/geet_manas2_168_compressed.pdf';
const uri169= 'pdf/geetmanas2/geet_manas2_169_compressed.pdf';
const uri170= 'pdf/geetmanas2/geet_manas2_170_compressed.pdf';

const uri171= 'pdf/geetmanas2/geet_manas2_171_compressed.pdf';
const uri172= 'pdf/geetmanas2/geet_manas2_172_compressed.pdf';
const uri173= 'pdf/geetmanas2/geet_manas2_173_compressed.pdf';
const uri174= 'pdf/geetmanas2/geet_manas2_174_compressed.pdf';
const uri175= 'pdf/geetmanas2/geet_manas2_175_compressed.pdf';
const uri176= 'pdf/geetmanas2/geet_manas2_176_compressed.pdf';
const uri177= 'pdf/geetmanas2/geet_manas2_177_compressed.pdf';
const uri178= 'pdf/geetmanas2/geet_manas2_178_compressed.pdf';
const uri179= 'pdf/geetmanas2/geet_manas2_179_compressed.pdf';


export default function Geetmanas2({ navigation }) {
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
xhr ekul & ¼ 2 ½
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



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manas2'})}>
fldHkjh lw[kM+h  </Text>
  <View style = {styles.lineStyle} />


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
1&&lkbZa lkfgc efgek
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼1½ efgek xhr
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"गीत मानस  - २"})}>

1-  iszfe;qfu ijekRek					     1
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"गीत मानस  - २"})}>
2-  ॐ tS lfrxqj I;kjk					2
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"गीत मानस  - २"})}>
3-  TkS 'kj.k iky Hkxoku					2
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"गीत मानस  - २"})}>
4-  vfn;wa va³f.k vk;ks Hkyk					3
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"गीत मानस  - २"})}>
5-  tafg [ks lkbZa crk, jkg					3
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"गीत मानस  - २"})}>
6-  thou esa dhu dh HkqyUnh					4
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"गीत मानस  - २"})}>
7-  rqafgts dnefu rka dqfjckuq o¥ka				     4
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"गीत मानस  - २"})}>
8-  rqafgtk pj.k dey eqafgtks thouq				5
</Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"गीत मानस  - २"})}>
9-  rqe I;kjs j?kqoj jke ds					6
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"गीत मानस  - २"})}>
10-  rwa bZ n;k tks lkx#					7
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"गीत मानस  - २"})}>
11-  feBk eSxfl pUnz egjckuk					7
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"गीत मानस  - २"})}>
12-  eqafgtk lfrxqj 'ksj lksHkkjk				8
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"गीत मानस  - २"})}>
13-  eqafgth fny Fkh xquM+k x+k,				9
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"गीत मानस  - २"})}>
14- lkbZa lUrfu tk ljnkj					10
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"गीत मानस  - २"})}>
15-  lfrlax tk ljnkj /k.kh					10
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"गीत मानस  - २"})}>
16-  gj gj poka Fkh lkbZa					11
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"गीत मानस  - २"})}>
17- gkfde gksr iqUgy th					11

</Text>



<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼2½ ok/kkbZ xhr
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"गीत मानस  - २"})}>
18- veka ân; esa vk vkuan					12
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"गीत मानस  - २"})}>
19- upwa x+k;wa [kwcq [kqf’k;qfu esa				13
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"गीत मानस  - २"})}>
20- vkt lkbZa tUe dh cgkj					14
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"गीत मानस  - २"})}>
21- veka vkbZ veka vkbZ					14
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"गीत मानस  - २"})}>
22- veka tUe th ok/kkbZ x+k;wa gyh				 15
</Text>


<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼3½ Lusg xhr
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"गीत मानस  - २"})}>
23- vefM+ lkbZa fey.k th ltuh				 16
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"गीत मानस  - २"})}>
24- vkm nhu ca/kw nkrkj					 17
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"गीत मानस  - २"})}>
25- vkm jkg tk jgcj gk.ks gyh				18
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"गीत मानस  - २"})}>
26- vkfg;ka pj.k njl th eka I;klh				19
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"गीत मानस  - २"})}>
27-  vks xjhfc nsoh thou lgsyh				    19
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"गीत मानस  - २"})}>
28-  vks n;k fla/kq nkuh					20
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"गीत मानस  - २"})}>
29-  pj.kfu th psjh v [ks lkfgc lEHkkjha			22
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"गीत मानस  - २"})}>
30-  tkfuc fey.k tks tsfn+;wa					23
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"गीत मानस  - २"})}>
31-  rogka th d`ik th I;kflf.k				23
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"गीत मानस  - २"})}>
32-  rogka th d`ik th ;kfn					24
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"गीत मानस  - २"})}>
33-  rqafgth d`ik fuxkg th					25
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"गीत मानस  - २"})}>
34-  rqafgtks bZ tlM+ks x+k;ka					26
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"गीत मानस  - २"})}>
35-  rqafgts I;kj esa eqafgtk fi;k				26
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"गीत मानस  - २"})}>
36-  rqafgth lkfn tkfuc thm Fkh				27
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"गीत मानस  - २"})}>
37-  rqafgth eqgcr eLr c.kk;ks				28
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"गीत मानस  - २"})}>
38-  rks[ks /;k;ka rks[ks bZ /;k;ka				28
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"गीत मानस  - २"})}>
39-  rks rka lfnds fFk;ka lkS okj				29
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"गीत मानस  - २"})}>
40-  eka rqafgth d`ik th vkfg;ka				30
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"गीत मानस  - २"})}>
41-  lfn+M+ks djhfe lkbZa					32
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"गीत मानस  - २"})}>
42-  lkbZa lkfgc lpk jkspy larc+pk				33
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"गीत मानस  - २"})}>
43-  gj gj Fkh lEHkkfj;ka eka					34
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼4½ fogkj xhr
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"गीत मानस  - २"})}>
44-  vkvks vkvks jh l[kh					34
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"गीत मानस  - २"})}>
45-  x+k;wa eaxykpkj jh					35
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"गीत मानस  - २"})}>
46-  tksrh l:i tkuh					36
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:"गीत मानस  - २"})}>
47-  fn+lks iq"id foeku th NVk				36
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:"गीत मानस  - २"})}>
48-  ckx+ ?kqesfe cksLrku M+h					37
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:"गीत मानस  - २"})}>
49-  feBks lkbZa lkfgc lq[k/kke				38
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:"गीत मानस  - २"})}>
50-  jFk ij lokj gq, vkt					39
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:"गीत मानस  - २"})}>
51-  lq[k fuokl lq[kfu lnu					40
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:"गीत मानस  - २"})}>
52-  gyks t+ewa v n+s gk.ks dkgs					41

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼5½ fou; xhr
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:"गीत मानस  - २"})}>

53-  veka eka nhokuh					42
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:"गीत मानस  - २"})}>
54-  vkbZ vkfg;ka rqafgth 'kj.k esa				42
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:"गीत मानस  - २"})}>
55-  vefM+ lkbZa fey.k th ltuh				43
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:"गीत मानस  - २"})}>
56-  vkm nhu ca/kw nkrkj					44
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:"गीत मानस  - २"})}>
57-  d#.kk tk lkxj Lusg fla/kq				44
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:"गीत मानस  - २"})}>
58-  pjf.k 'kjf.k eka vk;ks					45
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:"गीत मानस  - २"})}>
59-  thou lkjks fo;ks lt+.k					46
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:"गीत मानस  - २"})}>
60-  rqafgth bZ vksV Hkjkslks					47
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:"गीत मानस  - २"})}>
61-  n’kZu n+s lkbZa feBk					48
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:"गीत मानस  - २"})}>
62-  ewa [ks egjcku ekfyd th				49
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:"गीत मानस  - २"})}>
63-  lfrxqj lfpM+k efgj tk ifjoj				49
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:"गीत मानस  - २"})}>
64-  lkg tk lhaxkj lkbZa					50
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:"गीत मानस  - २"})}>
65  fgd okj va³.k esa ts bZans					50
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼6½ vk’kh’k xhr
</Text>
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:"गीत मानस  - २"})}>
66-  vfopyq jktq djhfe					51
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:"गीत मानस  - २"})}>
67-  veka lq[knsoh v lqdqekj					52
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:"गीत मानस  - २"})}>
68-  vkfg;ka pj.kfu th nklh					53
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:"गीत मानस  - २"})}>
69-  vks lfrxqj lkfgc lkbZa					53
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:"गीत मानस  - २"})}>
70-  d;ka meax lka vk’kh’k					54
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:"गीत मानस  - २"})}>
71-  ft;ks lkbZa ft;ks lkbZa					55
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:"गीत मानस  - २"})}>
72-  jkt++q djks jl /kke lkbZa					56
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:"गीत मानस  - २"})}>
73-  oj fo:ag esa eqafgtk lkbZa 				56
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:"गीत मानस  - २"})}>
74-  lnka	 ft;ks eqafgtk lksuM+k lkbZa				57
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:"गीत मानस  - २"})}>
75-  lkbZa losa Hksjk ykyu y[ksa Hksjk				58
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼7½ vfHkyk"k xhr
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:"गीत मानस  - २"})}>

76-  rqafgth feBh ;kfn eqafgts					59
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:"गीत मानस  - २"})}>
77-  izHkw v d`ik lka feyh					60
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:"गीत मानस  - २"})}>
78-  'ky j[k Fkh jt lka feyanklha				60
  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
2&Jh jke dFkke`r</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:"गीत मानस  - २"})}>
79-  lkbZa vefM+ vkuUn lka					61
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:"गीत मानस  - २"})}>
80-  fp# thvks esjh tud yyh				63
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:"गीत मानस  - २"})}>
81-  Jhjke vuqjkx+ fla/kq Hkjr					63

</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
dFkk izlax</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:"गीत मानस  - २"})}>

82-  veka th osnuk						65
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:"गीत मानस  - २"})}>
83-  osx+k.kh vefM+						66
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:"गीत मानस  - २"})}>
84-  fuek.kh vefM+						67
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:"गीत मानस  - २"})}>
85-  izse fofgoy veka					68
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:"गीत मानस  - २"})}>
86-  izse mUefr veka					69
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:"गीत मानस  - २"})}>
87-  fojg fody veka					70
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:"गीत मानस  - २"})}>
88-  izse ixyh veka					71
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:"गीत मानस  - २"})}>
89-  Lusg mUekfnuh veka					72
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:"गीत मानस  - २"})}>
90-  n;kyw veka						73
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:"गीत मानस  - २"})}>
91-  nhokuh veka						73
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:"गीत मानस  - २"})}>
92-  Lusg fla/kq Hkjr					74
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:"गीत मानस  - २"})}>
93-  Hkjr Lusg lq/kk					76
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:"गीत मानस  - २"})}>
94-  Lusg flf) veka					77
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:"गीत मानस  - २"})}>
95-  lR; Lusgh Hkjr					78
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:"गीत मानस  - २"})}>
96-  nq[kh nhu rksrks eSuk					80
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri97,bookname:"गीत मानस  - २"})}>
97-  lqâ; Lusgh fu"kknjkt					82
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri98,bookname:"गीत मानस  - २"})}>
98-  Jhjke Hkjr feyki					83
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri99,bookname:"गीत मानस  - २"})}>
99-  Hkjr fou;						84
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri100,bookname:"गीत मानस  - २"})}>
100-  Jhjke vuqdEik					85
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri101,bookname:"गीत मानस  - २"})}>
101-  fou;h Hkjr						88
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri102,bookname:"गीत मानस  - २"})}>
102-  Hkjr riL;k						89
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri103,bookname:"गीत मानस  - २"})}>
103-  o`gh Hkjr						90
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri104,bookname:"गीत मानस  - २"})}>
104-  vxeq izhfr						91
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri105,bookname:"गीत मानस  - २"})}>
105-  xh/kjkt tks i'pkrki					91
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri106,bookname:"गीत मानस  - २"})}>
106-  xh/k rs d`ik						92
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri107,bookname:"गीत मानस  - २"})}>
107-  xh/k fou;						93
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri108,bookname:"गीत मानस  - २"})}>
108-  xh/k rs vuqdEik					93
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri109,bookname:"गीत मानस  - २"})}>
109-  izhre th lfw[kM+h					94
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri110,bookname:"गीत मानस  - २"})}>
110-  izHkw v tks lans’k					94
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri111,bookname:"गीत मानस  - २"})}>
111-  lksuks lHkkx+ks n+hagq					95
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri112,bookname:"गीत मानस  - २"})}>
112-  O;kdqyq veka						96
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri113,bookname:"गीत मानस  - २"})}>
113-  o`g osx+k.kh veka					96
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri114,bookname:"गीत मानस  - २"})}>
114-  vefM+ th mRd.Bk					97
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri115,bookname:"गीत मानस  - २"})}>
115-  eaxy lans’kq						97
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri116,bookname:"गीत मानस  - २"})}>
116-  Jh mfeZyk Lusg					98

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
3&Jh d`".k dFkke`r</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼d½ Jh d`".k fogkaoq
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri117,bookname:"गीत मानस  - २"})}>
117-  vtcq cfujks cu vk;ks					    101
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri118,bookname:"गीत मानस  - २"})}>
118-  p&lt;+ q eqafgtk enu xksiky					    102
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri119,bookname:"गीत मानस  - २"})}>
119-  fp# thvks uan dqekj					    102	
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri120,bookname:"गीत मानस  - २"})}>
120-  ft, nwygq feBks c`tpanq					    103
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri121,bookname:"गीत मानस  - २"})}>
121-  thfe ;’kksnk tk c+kj					    104
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri122,bookname:"गीत मानस  - २"})}>
122-  rqafgtks :iq fn+lka gj gj					    104
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri123,bookname:"गीत मानस  - २"})}>
123-  rqafgtks vuks[kks lhaxkj vk				    105
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri124,bookname:"गीत मानस  - २"})}>
124-  fn+lks fn+lks l[kh 'kksHkk					    106
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri125,bookname:"गीत मानस  - २"})}>
125-  nwyg th 'kksHkk eu izk.kfu HkkbZ				    106
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri126,bookname:"गीत मानस  - २"})}>
126-  I;kjks uan dqek# vt+q ikydh v rs     107
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri127,bookname:"गीत मानस  - २"})}>
127-  eqafgtk ';ke cujk					    108
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri128,bookname:"गीत मानस  - २"})}>
128-  eqafgtks thou vk/kkj					    109
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri129,bookname:"गीत मानस  - २"})}>
129-  esjs NksVs ls dUgS;k					    110
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri130,bookname:"गीत मानस  - २"})}>
130-  :iq euksgj 'kksHkk lkxj					    111
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri131,bookname:"गीत मानस  - २"})}>
131-  lkaoyq lqdqekj vk					    112
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri132,bookname:"गीत मानस  - २"})}>
132-  gksrk gS dkSu fof/k O;kgq					    112
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
    ¼[k½ Lusg xhr 
      </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri133,bookname:"गीत मानस  - २"})}>
133-  egk HkkX; eqafgth c+kfjM+h				    113
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri134,bookname:"गीत मानस  - २"})}>
134-  gj gj gqjs Fkh fnfy esa					    114
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri135,bookname:"गीत मानस  - २"})}>
135-  vps vkaMfu [ks Fkks vkjke				    115
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri136,bookname:"गीत मानस  - २"})}>
136-  fnfy tkb dt+kb tuuh					    116
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri137,bookname:"गीत मानस  - २"})}>
137-  /khjs /khjs vk js ckny					    117
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri138,bookname:"गीत मानस  - २"})}>
138-  Jh tw uke izrki lka					    118
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri139,bookname:"गीत मानस  - २"})}>
139-  'kksHkk fla/kq yknqyh					    119
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri140,bookname:"गीत मानस  - २"})}>
140-  I;kjks lEHkkys iy iy eka jksbZ				    119
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri141,bookname:"गीत मानस  - २"})}>
141-  iy iy esa ios ;kfn					    120
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri142,bookname:"गीत मानस  - २"})}>
142-  nknk ! vks nknk ! ewa [ks				    120
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri143,bookname:"गीत मानस  - २"})}>
143-  gk; o¥ka Fkh Hkw e.My esa				    121
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
    ¼x½ fofo/k yhyk xhr 
    </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri144,bookname:"गीत मानस  - २"})}>
144-  rks[ks x+ksYgs x+ksYgs Fkdk us.k ewa				    122
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri145,bookname:"गीत मानस  - २"})}>
145-  NksM+ks th NksM+ks th ';ke				    123
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri146,bookname:"गीत मानस  - २"})}>
146-  izk.kksa ds I;kjs thv ds ft;kjs				    123
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1147,bookname:"गीत मानस  - २"})}>
147-  eka pkSajh [k.kh psYg rs					    124
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri148,bookname:"गीत मानस  - २"})}>
148-  ';kek ’;ke ’;kek ’;ke				    124
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri148,bookname:"गीत मानस  - २"})}>
149-  eqafgtks lfnds fd’ku rka				    126
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri150,bookname:"गीत मानस  - २"})}>
150-  Jho`Unkou vk /kke I;kjks				    126
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri151,bookname:"गीत मानस  - २"})}>
151-  ft;ks ;qxy /k.kh					    127
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri152,bookname:"गीत मानस  - २"})}>
152-  fp# thvks jk/ks’;ke feBk				    127
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri153,bookname:"गीत मानस  - २"})}>
153-  eqfgath vefM+ ;’kksefr Hkkx+Hkjh				    128
</Text>
<View style = {styles.lineStyle} />









<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
4& Hkä efgek
</Text>




<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
¼d½ xq# lkfgc tUe 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri154,bookname:"गीत मानस  - २"})}>
154-  iz?kVs ukud pan					    129
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri155,bookname:"गीत मानस  - २"})}>
155-  fuek.kfu tks ek.kq xq#					    130
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri156,bookname:"गीत मानस  - २"})}>
156-  okg okg xq# ukud fujadkj				    131
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri157,bookname:"गीत मानस  - २"})}>
157-  v/k jkfr t+kvks xq#					    131
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:24,textAlign:'left',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
   ¼d½ lar izse 
   </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri158,bookname:"गीत मानस  - २"})}>
158-  izk.kfu [kka ewa [ks vkfgfu				132
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri159,bookname:"गीत मानस  - २"})}>
159-  jfld larfu tks eka[ks					132
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri160,bookname:"गीत मानस  - २"})}>
160-  Hkx+qoar ts pj.kfu lka tsds				133
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri161,bookname:"गीत मानस  - २"})}>
161-  feBh efgek Hkäfu th					134
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri162,bookname:"गीत मानस  - २"})}>
162-  tqx+ tqx+ Hkäfu [ks izHkq v				134
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri163,bookname:"गीत मानस  - २"})}>
163-  lnka lUrfu tks tlq x+k;wa				135
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri164,bookname:"गीत मानस  - २"})}>
164-  ewa lka dsn+h vk izhfrM+h					135
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri165,bookname:"गीत मानस  - २"})}>
165-  Hkäfu lka Hkx+oku tks					136
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri166,bookname:"गीत मानस  - २"})}>
166-  ftfu ?kfjM+fu esa Fkk lar vpfu				137
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri167,bookname:"गीत मानस  - २"})}>
167-  d;ka larfu lka eka flfdM+h lph				    137
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri168,bookname:"गीत मानस  - २"})}>
168-  ewa [ks Hkä I;kjk vkfgfu				    138
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri169,bookname:"गीत मानस  - २"})}>
169-  lUrfu th d`ik [ks x+k;wa lnka				    138	
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri170,bookname:"गीत मानस  - २"})}>
170-  Hkx+oku [kka Hkh on+h lUrfu on+kbZ				    139
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri171,bookname:"गीत मानस  - २"})}>
171-  lUrfu lka djs I;kj I;kjks ';ke gjh		   139
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri172,bookname:"गीत मानस  - २"})}>
172-  ftrs lar osgh xqfuM+k Fkk x+kbfe				    140
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri173,bookname:"गीत मानस  - २"})}>
173-  ftfuts eFkka lUrd`ik &lt;jh vk				    140
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri174,bookname:"गीत मानस  - २"})}>
174-  brus xq.k tkesa lks lUr					    141
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri175,bookname:"गीत मानस  - २"})}>
175-  efgek in						    142
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri176,bookname:"गीत मानस  - २"})}>
176-  Nks Qdhj c.kh vk,a js					    142
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri177,bookname:"गीत मानस  - २"})}>
177-  gy.k esa fof[kM+h o/kkb					    144
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri178,bookname:"गीत मानस  - २"})}>
178-  gjh uke efgek pkjbZ osn				    143
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri179,bookname:"गीत मानस  - २"})}>
179-  lnka lUrfu pj.kfu 'kh’k				    144


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
