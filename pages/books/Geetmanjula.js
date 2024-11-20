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



const uri0 = 'pdf/geetmanjula/geet_manjula_0.pdf';
const uri0_1 = 'pdf/geetmanjula/geet_manjula_0_1.pdf';


const uri1 = 'pdf/geetmanjula/geet_majula_1.pdf';
const uri2 = 'pdf/geetmanjula/geet_majula_2.pdf';
const uri3 = 'pdf/geetmanjula/geet_majula_3.pdf';

const uri4 = 'pdf/geetmanjula/geet_majula_4.pdf';
const uri5 = 'pdf/geetmanjula/geet_majula_5.pdf';
const uri6 = 'pdf/geetmanjula/geet_majula_6.pdf';
const uri7 = 'pdf/geetmanjula/geet_majula_7.pdf';
const uri8 = 'pdf/geetmanjula/geet_majula_8.pdf';
const uri9 = 'pdf/geetmanjula/geet_majula_9.pdf';
const uri10 = 'pdf/geetmanjula/geet_majula_10.pdf';
const uri11= 'pdf/geetmanjula/geet_majula_11.pdf';
const uri12= 'pdf/geetmanjula/geet_majula_12.pdf';
const uri13= 'pdf/geetmanjula/geet_majula_13.pdf';
const uri14= 'pdf/geetmanjula/geet_majula_14.pdf';
const uri15= 'pdf/geetmanjula/geet_majula_15.pdf';
const uri16= 'pdf/geetmanjula/geet_majula_16.pdf';
const uri17= 'pdf/geetmanjula/geet_majula_17.pdf';

const uri18= 'pdf/geetmanjula/geet_majula_18.pdf';
const uri19= 'pdf/geetmanjula/geet_majula_19.pdf';

const uri20= 'pdf/geetmanjula/geet_majula_20.pdf';
const uri21= 'pdf/geetmanjula/geet_majula_21.pdf';
const uri22= 'pdf/geetmanjula/geet_majula_22.pdf';
const uri23= 'pdf/geetmanjula/geet_majula_23.pdf';
const uri24= 'pdf/geetmanjula/geet_majula_24.pdf';
const uri25= 'pdf/geetmanjula/geet_majula_25.pdf';
const uri26= 'pdf/geetmanjula/geet_majula_26.pdf';
const uri27= 'pdf/geetmanjula/geet_majula_27.pdf';
const uri28= 'pdf/geetmanjula/geet_majula_28.pdf';
const uri29= 'pdf/geetmanjula/geet_majula_29.pdf';


const uri30= 'pdf/geetmanjula/geet_majula_30.pdf';
const uri31= 'pdf/geetmanjula/geet_majula_31.pdf';
const uri32= 'pdf/geetmanjula/geet_majula_32.pdf';
const uri33= 'pdf/geetmanjula/geet_majula_33.pdf';
const uri34= 'pdf/geetmanjula/geet_majula_34.pdf';
const uri35= 'pdf/geetmanjula/geet_majula_35.pdf';
const uri36= 'pdf/geetmanjula/geet_majula_36.pdf';
const uri37= 'pdf/geetmanjula/geet_majula_37.pdf';
const uri38= 'pdf/geetmanjula/geet_majula_38.pdf';
const uri39= 'pdf/geetmanjula/geet_majula_39.pdf';
const uri40= 'pdf/geetmanjula/geet_majula_40.pdf';

const uri41= 'pdf/geetmanjula/geet_majula_41.pdf';
const uri42= 'pdf/geetmanjula/geet_majula_42.pdf';
const uri43= 'pdf/geetmanjula/geet_majula_43.pdf';
const uri44= 'pdf/geetmanjula/geet_majula_44.pdf';
const uri45= 'pdf/geetmanjula/geet_majula_45.pdf';
const uri46= 'pdf/geetmanjula/geet_majula_46.pdf';
const uri47= 'pdf/geetmanjula/geet_majula_47.pdf';
const uri48= 'pdf/geetmanjula/geet_majula_48.pdf';
const uri49= 'pdf/geetmanjula/geet_majula_49.pdf';
const uri50= 'pdf/geetmanjula/geet_majula_50.pdf';

const uri51= 'pdf/geetmanjula/geet_majula_51.pdf';
const uri52= 'pdf/geetmanjula/geet_majula_52.pdf';
const uri53= 'pdf/geetmanjula/geet_majula_53.pdf';
const uri54= 'pdf/geetmanjula/geet_majula_54.pdf';
const uri55= 'pdf/geetmanjula/geet_majula_55.pdf';
const uri56= 'pdf/geetmanjula/geet_majula_56.pdf';
const uri57= 'pdf/geetmanjula/geet_majula_57.pdf';
const uri58= 'pdf/geetmanjula/geet_majula_58.pdf';
const uri59= 'pdf/geetmanjula/geet_majula_59.pdf';
const uri60= 'pdf/geetmanjula/geet_majula_60.pdf';

const uri61= 'pdf/geetmanjula/geet_majula_61.pdf';
const uri62= 'pdf/geetmanjula/geet_majula_62.pdf';
const uri63= 'pdf/geetmanjula/geet_majula_63.pdf';
const uri64= 'pdf/geetmanjula/geet_majula_64.pdf';
const uri65= 'pdf/geetmanjula/geet_majula_65.pdf';
const uri66= 'pdf/geetmanjula/geet_majula_66.pdf';
const uri67= 'pdf/geetmanjula/geet_majula_67.pdf';
const uri68= 'pdf/geetmanjula/geet_majula_68.pdf';
const uri69= 'pdf/geetmanjula/geet_majula_69.pdf';
const uri70= 'pdf/geetmanjula/geet_majula_70.pdf';

const uri71= 'pdf/geetmanjula/geet_majula_71.pdf';
const uri72= 'pdf/geetmanjula/geet_majula_72.pdf';
const uri73= 'pdf/geetmanjula/geet_majula_73.pdf';
const uri74= 'pdf/geetmanjula/geet_majula_74.pdf';
const uri75= 'pdf/geetmanjula/geet_majula_75.pdf';
const uri76= 'pdf/geetmanjula/geet_majula_76.pdf';
const uri77= 'pdf/geetmanjula/geet_majula_77.pdf';
const uri78= 'pdf/geetmanjula/geet_majula_78.pdf';
const uri79= 'pdf/geetmanjula/geet_majula_79.pdf';
const uri80= 'pdf/geetmanjula/geet_majula_80.pdf';




const uri81= 'pdf/geetmanjula/geet_majula_81.pdf';
const uri82= 'pdf/geetmanjula/geet_majula_82.pdf';
const uri83= 'pdf/geetmanjula/geet_majula_83.pdf';
const uri84= 'pdf/geetmanjula/geet_majula_84.pdf';
const uri85= 'pdf/geetmanjula/geet_majula_85.pdf';
const uri86= 'pdf/geetmanjula/geet_majula_86.pdf';
const uri87= 'pdf/geetmanjula/geet_majula_87.pdf';
const uri88= 'pdf/geetmanjula/geet_majula_88.pdf';
const uri89= 'pdf/geetmanjula/geet_majula_89.pdf';
const uri90= 'pdf/geetmanjula/geet_majula_90.pdf';

const uri91= 'pdf/geetmanjula/geet_majula_91.pdf';
const uri92= 'pdf/geetmanjula/geet_majula_92.pdf';
const uri93= 'pdf/geetmanjula/geet_majula_93.pdf';
const uri94= 'pdf/geetmanjula/geet_majula_94.pdf';
const uri95= 'pdf/geetmanjula/geet_majula_95.pdf';
const uri96= 'pdf/geetmanjula/geet_majula_96.pdf';
const uri97= 'pdf/geetmanjula/geet_majula_97.pdf';
const uri98= 'pdf/geetmanjula/geet_majula_98.pdf';
const uri99= 'pdf/geetmanjula/geet_majula_99.pdf';
const uri100= 'pdf/geetmanjula/geet_majula_100.pdf';
const uri101= 'pdf/geetmanjula/geet_majula_101.pdf';
const uri102= 'pdf/geetmanjula/geet_majula_102.pdf';
const uri103= 'pdf/geetmanjula/geet_majula_103.pdf';
const uri104= 'pdf/geetmanjula/geet_majula_104.pdf';
const uri105= 'pdf/geetmanjula/geet_majula_105.pdf';
const uri106= 'pdf/geetmanjula/geet_majula_106.pdf';
const uri107= 'pdf/geetmanjula/geet_majula_107.pdf';
const uri108= 'pdf/geetmanjula/geet_majula_108.pdf';
const uri109= 'pdf/geetmanjula/geet_majula_109.pdf';
const uri110= 'pdf/geetmanjula/geet_majula_110.pdf';
const uri111= 'pdf/geetmanjula/geet_majula_111.pdf';

const uri112= 'pdf/geetmanjula/geet_majula_112.pdf';
const uri113= 'pdf/geetmanjula/geet_majula_113.pdf';
const uri114= 'pdf/geetmanjula/geet_majula_114.pdf';
const uri115= 'pdf/geetmanjula/geet_majula_115.pdf';
const uri116= 'pdf/geetmanjula/geet_majula_116.pdf';
const uri117= 'pdf/geetmanjula/geet_majula_117.pdf';
const uri118= 'pdf/geetmanjula/geet_majula_118.pdf';



const uri119= 'pdf/geetmanjula/geet_majula_119.pdf';
const uri120= 'pdf/geetmanjula/geet_majula_120.pdf';
const uri121= 'pdf/geetmanjula/geet_majula_121.pdf';
const uri122= 'pdf/geetmanjula/geet_majula_122.pdf';
const uri123= 'pdf/geetmanjula/geet_majula_123.pdf';
const uri124= 'pdf/geetmanjula/geet_majula_124.pdf';
const uri125= 'pdf/geetmanjula/geet_majula_125.pdf';
const uri126= 'pdf/geetmanjula/geet_majula_126.pdf';
const uri127= 'pdf/geetmanjula/geet_majula_127.pdf';
const uri128= 'pdf/geetmanjula/geet_majula_128.pdf';
const uri129= 'pdf/geetmanjula/geet_majula_129.pdf';
const uri130= 'pdf/geetmanjula/geet_majula_130.pdf';
const uri131= 'pdf/geetmanjula/geet_majula_131.pdf';
const uri132= 'pdf/geetmanjula/geet_majula_132.pdf';
const uri133= 'pdf/geetmanjula/geet_majula_133.pdf';
const uri134= 'pdf/geetmanjula/geet_majula_134.pdf';
const uri135= 'pdf/geetmanjula/geet_majula_135.pdf';
const uri136= 'pdf/geetmanjula/geet_majula_136.pdf';
const uri137= 'pdf/geetmanjula/geet_majula_137.pdf';
const uri138= 'pdf/geetmanjula/geet_majula_138.pdf';
const uri139= 'pdf/geetmanjula/geet_majula_139.pdf';
const uri140= 'pdf/geetmanjula/geet_majula_140.pdf';




const uri141= 'pdf/geetmanjula/geet_majula_141.pdf';
const uri142= 'pdf/geetmanjula/geet_majula_142.pdf';
const uri143= 'pdf/geetmanjula/geet_majula_143.pdf';
const uri144= 'pdf/geetmanjula/geet_majula_144.pdf';
const uri145= 'pdf/geetmanjula/geet_majula_145.pdf';
const uri146= 'pdf/geetmanjula/geet_majula_146.pdf';
const uri147= 'pdf/geetmanjula/geet_majula_147.pdf';
const uri148= 'pdf/geetmanjula/geet_majula_148.pdf';
const uri149= 'pdf/geetmanjula/geet_majula_149.pdf';
const uri150= 'pdf/geetmanjula/geet_majula_150.pdf';

const uri151= 'pdf/geetmanjula/geet_majula_151.pdf';
const uri152= 'pdf/geetmanjula/geet_majula_152.pdf';
const uri153= 'pdf/geetmanjula/geet_majula_153.pdf';
const uri154= 'pdf/geetmanjula/geet_majula_154.pdf';
const uri155= 'pdf/geetmanjula/geet_majula_155.pdf';
const uri156= 'pdf/geetmanjula/geet_majula_156.pdf';
const uri157= 'pdf/geetmanjula/geet_majula_157.pdf';
const uri158= 'pdf/geetmanjula/geet_majula_158.pdf';
const uri159= 'pdf/geetmanjula/geet_majula_159.pdf';
const uri160= 'pdf/geetmanjula/geet_majula_160.pdf';

const uri161= 'pdf/geetmanjula/geet_majula_161.pdf';
const uri162= 'pdf/geetmanjula/geet_majula_162.pdf';
const uri163= 'pdf/geetmanjula/geet_majula_163.pdf';
const uri164= 'pdf/geetmanjula/geet_majula_164.pdf';
const uri165= 'pdf/geetmanjula/geet_majula_165.pdf';
const uri166= 'pdf/geetmanjula/geet_majula_166.pdf';
const uri167= 'pdf/geetmanjula/geet_majula_167.pdf';
const uri168= 'pdf/geetmanjula/geet_majula_168.pdf';
const uri169= 'pdf/geetmanjula/geet_majula_169.pdf';
const uri170= 'pdf/geetmanjula/geet_majula_170.pdf';

const uri171= 'pdf/geetmanjula/geet_majula_171.pdf';
const uri172= 'pdf/geetmanjula/geet_majula_172.pdf';
const uri173= 'pdf/geetmanjula/geet_majula_173.pdf';
const uri174= 'pdf/geetmanjula/geet_majula_174.pdf';
const uri175= 'pdf/geetmanjula/geet_majula_175.pdf';
const uri176= 'pdf/geetmanjula/geet_majula_176.pdf';
const uri177= 'pdf/geetmanjula/geet_majula_177.pdf';
const uri178= 'pdf/geetmanjula/geet_majula_178.pdf';
const uri179= 'pdf/geetmanjula/geet_majula_179.pdf';



const uri180= 'pdf/geetmanjula/geet_majula_180.pdf';


const uri181= 'pdf/geetmanjula/geet_majula_181.pdf';
const uri182= 'pdf/geetmanjula/geet_majula_182.pdf';
const uri183= 'pdf/geetmanjula/geet_majula_183.pdf';
const uri184= 'pdf/geetmanjula/geet_majula_184.pdf';
const uri185= 'pdf/geetmanjula/geet_majula_185.pdf';
const uri186= 'pdf/geetmanjula/geet_majula_186.pdf';
const uri187= 'pdf/geetmanjula/geet_majula_187.pdf';
const uri188= 'pdf/geetmanjula/geet_majula_188.pdf';
const uri189= 'pdf/geetmanjula/geet_majula_189.pdf';
const uri190= 'pdf/geetmanjula/geet_majula_190.pdf';

const uri191= 'pdf/geetmanjula/geet_majula_191.pdf';
const uri192= 'pdf/geetmanjula/geet_majula_192.pdf';
const uri193= 'pdf/geetmanjula/geet_majula_193.pdf';
const uri194= 'pdf/geetmanjula/geet_majula_194.pdf';
const uri195= 'pdf/geetmanjula/geet_majula_195.pdf';
const uri196= 'pdf/geetmanjula/geet_majula_196.pdf';
const uri197= 'pdf/geetmanjula/geet_majula_197.pdf';
const uri198= 'pdf/geetmanjula/geet_majula_198.pdf';
const uri199= 'pdf/geetmanjula/geet_majula_199.pdf';
const uri200= 'pdf/geetmanjula/geet_majula_200.pdf';

const uri201= 'pdf/geetmanjula/geet_majula_201.pdf';

export default function Geetmanjula({ navigation }) {
  const fsize=scaleFontSize(50);
  //const [dynamicFontSize, setFontSize] = useState(fsize); // Initial font size

  const dynamicFontSize = scaleFontSize(50);
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
xhr e´tqyk</Text>


<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

d`ik fu/kku lkbZa veka ts ije ikou tUeksRlo] xqj iwf.kZek]
vUudwV] Qwy caxys] >wyfu vkfn mRlofu ts ok/kk;qfu ts
e/kqj xhrfu tks xqynLrks

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
Lkfrxqj izlkfn  </Text>

 <View style = {styles.lineStyle} />

 <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:'Geet Manjusha (Mangal Kamna)'})}>
 izse th efgek  </Text>

 <View style = {styles.lineStyle} />



<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
1&&lkbZa lkfgc efgek
</Text>


<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"गीत मञ्जुला"})}>
1 dsn+ks dqfjc fudsr vk 					1
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"गीत मञ्जुला"})}>
2 oBh Hkxfr Hkko lka 					2
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"गीत मञ्जुला"})}>
3 fumM+r fueZy /kf.k;qfu th 				2 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"गीत मञ्जुला"})}>
4 lkbZa vefM+ fl;kjke ts 					2 
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"गीत मञ्जुला"})}>
5 vefM+ lkbZa eqfgatks I;kjks 					3 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"गीत मञ्जुला"})}>
6 ft;sa lkbZa lkbZa lkbZa					3 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"गीत मञ्जुला"})}>
7 rsjh :i ek/kqjh euq eksgs					4 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"गीत मञ्जुला"})}>
8 uSuksa esa lkbZa lq[kdkjh gS					6 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"गीत मञ्जुला"})}>
9 efgek vogka th vikj lkbZa 				7 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"गीत मञ्जुला"})}>
10 eka xq.k xhr rogka tk x+k;ka 				8 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"गीत मञ्जुला"})}>
11 lfrlax fogkjh						9 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"गीत मञ्जुला"})}>
12 lkbZa vefM+ th dhjfr Fkh x+k;ka 				10 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"गीत मञ्जुला"})}>
13 lkbZa lkfgc esjk izk.kksa dk I;kjk 				11 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"गीत मञ्जुला"})}>
14 lkbZa eqfgatks okyh okyh okyh 				12 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"गीत मञ्जुला"})}>
15 lkbZa eqfgatks jk.kks jk.kks jk.kks 				13 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"गीत मञ्जुला"})}>
16 lkbZa veka rogka th efgek feBh 				14 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"गीत मञ्जुला"})}>
17 lkbZa veak feBk lkbZa veka 				15 

</Text>
<View style = {styles.lineStyle} />




    <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
      2   mRlo ,sa tUe ok/kkbZ
  </Text>

  <View style = {styles.lineStyle} />



  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"गीत मञ्जुला"})}>


  18 vt+q vkuUn th vkbZ vk cgkj 				17 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"गीत मञ्जुला"})}>
19 vt+q r eqfgatks lkbZa t+kvks vk				18
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"गीत मञ्जुला"})}>
20 vt+q vkuUn th fefBM+h cgkjh vk				19
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"गीत मञ्जुला"})}>
21 veka lq[knsoh rks[ks ok/kkbZ vk				21
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"गीत मञ्जुला"})}>
22 veak t+kvks vk ykyq yk[kh.kks				22
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"गीत मञ्जुला"})}>
23 veka lq[knsoh v [ks t+kvks				23
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"गीत मञ्जुला"})}>
24 veka rqfgatks th, cgq xq.k c+k#				24
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"गीत मञ्जुला"})}>
25 vek ykn+ Fkh yn+k, lq[k /kke [ks				25
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"गीत मञ्जुला"})}>
26 veak t+kvks rks[ks c+k# tafg [ks				26
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"गीत मञ्जुला"})}>
27 veka lq[knsoh v [ks c+fpM+ks t+kvks jh			27
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"गीत मञ्जुला"})}>
28 veka lq[knsoh fn+;wa ok/kkbZ y[kokj				28
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"गीत मञ्जुला"})}>
29 vefM+ va³.k esa x+k;wa ok/kkbZ				30
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"गीत मञ्जुला"})}>
30 vefM+ rks[ks t+kvks vk fefBM+ks c+kyq			31
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"गीत मञ्जुला"})}>
31 vefM+ ok/kkbZ t+kvks ykyq lq[knkbZ				32
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"गीत मञ्जुला"})}>
32 vefM+ feBh eqfgath fefBM+ks c+k#				33
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"गीत मञ्जुला"})}>
33 vlha Nks u upwa ,sa x+k;wa   				34
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"गीत मञ्जुला"})}>
34 v’kZ rka vkbZ ?kM+h ghv lqgkbZ				35
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"गीत मञ्जुला"})}>
35 vkt esjs lkbZa dh eaxy ok/kkbZ gS				36
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"गीत मञ्जुला"})}>
36 vkt ok/kkbZ lkbZa va³.k esa					37
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"गीत मञ्जुला"})}>
37 vk;k fefBM+k n+hag mRlkg tk				38
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"गीत मञ्जुला"})}>
38 vk;ks vk vk;ks vk vt+q vk;ks vk				39
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"गीत मञ्जुला"})}>
39 vk;k mRlo lkbZa I;kjs dk					40
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"गीत मञ्जुला"})}>
40 vk;ks vk vk;ks vk lkbZa v tUe n+hagq			41
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"गीत मञ्जुला"})}>
41 vk;ks lkfgcq lq[kdkjh					42
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"गीत मञ्जुला"})}>
42 vk;ks vcyq feBks vorkjh					43
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"गीत मञ्जुला"})}>
43 vk;ks tUe n+hagq lqgk;ks					45
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"गीत मञ्जुला"})}>
44 vk;ks lfrlax /k.kh					46
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"गीत मञ्जुला"})}>
45 vkbZ vtc cgkj x+k;ks					48
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"गीत मञ्जुला"})}>
46 vkbZ ?kM+h Hkkx+ Hkjh					48
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:"गीत मञ्जुला"})}>
47 vkbZ vkuUn th jkfr lq[knkbZ				49
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:"गीत मञ्जुला"})}>
48 vks egjcku eS;k rqfgats v³.k esa				50
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:"गीत मञ्जुला"})}>
49 dksfdy tUe ok/kkbZ vk					52 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:"गीत मञ्जुला"})}>
50 dksfdy lkbZa dh xkÅa tue ok/kkbZ				53
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:"गीत मञ्जुला"})}>
51 x+k;ks eaxy ok/kkbZ esjs lkbZa lkfgc dh			54
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:"गीत मञ्जुला"})}>
52 x+k;wa gyh iafgats lkbZa v th ok/kkbZ				56
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:"गीत मञ्जुला"})}>
53 ?kj rqfgats lq[k Hkfj;ks lqofuM+ks				57
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:"गीत मञ्जुला"})}>
54 ?kM+h ?kM+h iy iy fNu fNu				58
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:"गीत मञ्जुला"})}>
55 fp# thvks lkbZa lqdqekjs ltuk				59
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:"गीत मञ्जुला"})}>
56 psV iw.kZek vt+q vkbZ vk					60
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:"गीत मञ्जुला"})}>
57 psV iw.kZek vkbZ vk					61
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:"गीत मञ्जुला"})}>
58 tUe tks 'kqHkq n+hagq vk;ks vk				62
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:"गीत मञ्जुला"})}>
59 tUe th 'kqHk ?kM+h vkbZ 					63
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:"गीत मञ्जुला"})}>
60 t+kvks t+kvks vefM+ rks[ks c+k#				64
  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:"गीत मञ्जुला"})}>
61 t+kvks t+kvks M+h vefM+ [ks dqekj vk
  </Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:"गीत मञ्जुला"})}>
62 t+kvks t+kvks vefM+ rks[ks c+k# vfr lqdqekj vk	
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:"गीत मञ्जुला"})}>
63 t+kvks vefM+ feBh v [ks c+k#M+h				66
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:"गीत मञ्जुला"})}>
64 t+kvks vk c+kydq I;kjks					68
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:"गीत मञ्जुला"})}>
65 t+kvks lqouq lq[k/kkeq veka					69
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:"गीत मञ्जुला"})}>
66 tkx+s Hkkx+ rsjs lq[knsoh eS;k				70
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:"गीत मञ्जुला"})}>
67 thou vk/kkj eqfgats lkg tks lhaxkj				71
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:"गीत मञ्जुला"})}>
68 th, ykyq rqfgatks lq[knsoh veka				72
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:"गीत मञ्जुला"})}>
69 rqfgats I;kjs I;kjs c+kyd rka				73
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:"गीत मञ्जुला"})}>
70 rqfgats ykyk tk xq.k x+k;ka					74
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:"गीत मञ्जुला"})}>
71 rqfgats c+ky tks feBks uke vk				75
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:"गीत मञ्जुला"})}>
72 rqfgats tkfuc c+ps rka c+ygkjh				76
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:"गीत मञ्जुला"})}>
73 rqfgats ykn+qys tk xq.k x+k;ka				76
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:"गीत मञ्जुला"})}>
74 rsjh :i ek/kqjh euq eksgs					77
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:"गीत मञ्जुला"})}>
75 rks[ks vefM+ fn+;wa Fkk ok/kkbZ				79
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:"गीत मञ्जुला"})}>
76 fFk;ks vk iz?kVq lkbZa lq[k/kke				80
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:"गीत मञ्जुला"})}>
77 fFk;ks iz?kVq lkbZa I;kjks euq					81
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:"गीत मञ्जुला"})}>
78 fn+;wa vefM+ [ks ok/kkbZ					82
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:"गीत मञ्जुला"})}>
79 fn;wa vt+q fn+;wa vt+q fn+;wa vt+q				83
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:"गीत मञ्जुला"})}>
80 fn+;wa vefM+ va³.k esa ok/kkbZ gyh				84
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:"गीत मञ्जुला"})}>
81 /kU;q lq[knsoh tuuh I;kjh					85
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:"गीत मञ्जुला"})}>
82 furq vk’kh’k fn+;ka ik.kh ?kksjs fi;ka				86
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:"गीत मञ्जुला"})}>
83 uUgks usgh vk;ks vk					87
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:"गीत मञ्जुला"})}>
84 iw.kZek th jkfr lkbZa tkvks					88
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:"गीत मञ्जुला"})}>
85 iw.kZek psV th vkbZ x+k;wa					89
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:"गीत मञ्जुला"})}>
86 izse exuq lq[knsoh eS;k					90
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:"गीत मञ्जुला"})}>
87 feBh veka egjcku eqfgath					91
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:"गीत मञ्जुला"})}>
88 eqfgatk lkbZa lq[kdank furq x+k;wa				92
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:"गीत मञ्जुला"})}>
89 eu eLr Hk;k 'kqHk fnu vk;k				93
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:"गीत मञ्जुला"})}>
90 cky :i esa vk;ks lkbZa					95
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:"गीत मञ्जुला"})}>
91 okg okg okg okg [kqf’kM+h NkbZ				96
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:"गीत मञ्जुला"})}>
92 ok/kkbZ ok/kkbZ tUe lkbZa I;kjs dh				97
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:"गीत मञ्जुला"})}>
93 ok/kk;wa x+k;wa eaxy euk;wa					98
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:"गीत मञ्जुला"})}>
94 ok/kkbZ lkbZa lps tUe th					99
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:"गीत मञ्जुला"})}>
95 ok/kkbZ lkbZa tUe th ckts					99
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:"गीत मञ्जुला"})}>
96 ok/kkbZ gS lkbZa tUe th 'kqHk			100
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri97,bookname:"गीत मञ्जुला"})}>
97 ok/kkbZ gks ok/kkbZ gks lfrxqj			101
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri98,bookname:"गीत मञ्जुला"})}>
98 cygkj rqfgats uke rka vks lkbZa			102
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri99,bookname:"गीत मञ्जुला"})}>
99 c+q/kq rwa xqfuM+k ykyu tk				103
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri100,bookname:"गीत मञ्जुला"})}>
100 c+kydq vk t+kvks fFk;ks eu Hkk;ks			105
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri101,bookname:"गीत मञ्जुला"})}>
101 ykn+k lkbZa v tk vlha lnka x+k;wa			106
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri102,bookname:"गीत मञ्जुला"})}>
102 Jh ehjiqj eaxykpkj jh				107
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri103,bookname:"गीत मञ्जुला"})}>
103 lkbZa v feBs ts tue lka fnfyM+h			108
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri104,bookname:"गीत मञ्जुला"})}>
104 lkbZa lkfgc dh tUe ok/kkbZ gS			110
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri105,bookname:"गीत मञ्जुला"})}>
105 lkbZa lkfgc tUe n+hagq vk;ks vkgs			111
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri106,bookname:"गीत मञ्जुला"})}>
106 lkbZa lkfgc tUe th 'kqHk ?kM+h vkbZ		112
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri107,bookname:"गीत मञ्जुला"})}>
107 lkbZa lkfgc tk eaxy euk;wa			113
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri108,bookname:"गीत मञ्जुला"})}>
108 lkbZa lkfgc ts tUe fnol th			114
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri109,bookname:"गीत मञ्जुला"})}>
109 lkfgc th tUe ok/kkbZ x+k;wa			115
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri110,bookname:"गीत मञ्जुला"})}>
110 lkbZa v tUe th ok/kkbZ gks				116
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri111,bookname:"गीत मञ्जुला"})}>
111 lkbZa tUe th feBh 'kqHk ?kM+h			117
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri112,bookname:"गीत मञ्जुला"})}>
112 lkbZa tUe tks n+hagq vk lqgk;ks			118
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri113,bookname:"गीत मञ्जुला"})}>
113 lkbZa tUe ok/kkbZ vt+q x+k;wwa gyh			119
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri114,bookname:"गीत मञ्जुला"})}>
114 lkbZa tUe tks vt+q n+hagq lq[k/kke vk		120
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri115,bookname:"गीत मञ्जुला"})}>
115 lkbZa tUe ok/kkbZ eka x+k;ka				121
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri116,bookname:"गीत मञ्जुला"})}>
116 lkbZa tUe mRlo tks lf[k;wa djfu			122
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri117,bookname:"गीत मञ्जुला"})}>
117 lkbZa tUe n+hagq vk;ks lHksbZ				124
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri118,bookname:"गीत मञ्जुला"})}>
118 lkbZa tUe tks n+hagM+ks vk;ks vk;ks			125
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri119,bookname:"गीत मञ्जुला"})}>
119 lkbZa I;kjs lkbZa I;kjs				126
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri120,bookname:"गीत मञ्जुला"})}>
120 lUr :i Hkx+oku lkbZa vk;ks			127
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri121,bookname:"गीत मञ्जुला"})}>
121 lq[knsoh eS;k ykbZ gwa vkt ok/kkbZ			129
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri122,bookname:"गीत मञ्जुला"})}>
122 lq[knsoh eS;k gekjh c+ygkjh			130
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri123,bookname:"गीत मञ्जुला"})}>
123 lyksuh 'kqHk ?kM+h vkbZ vk				131
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri124,bookname:"गीत मञ्जुला"})}>
124 gks vkt ?kj ?kj esa tS tS dkj gaS			131
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri125,bookname:"गीत मञ्जुला"})}>
125 gekjs vaxuk ckts gks				132
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri126,bookname:"गीत मञ्जुला"})}>
126 gj gj fn+;ka ok/kkbZ eS;k				133
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri127,bookname:"गीत मञ्जुला"})}>
127 gj gj ukFk ok/kkbZ Fkk x+k;wa				134
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri128,bookname:"गीत मञ्जुला"})}>
128 gyks Hksu# lHksbZ xfn+th				135
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri129,bookname:"गीत मञ्जुला"})}>
129 gyks gyks feyh feyh xq.k				136
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri130,bookname:"गीत मञ्जुला"})}>
130 vk;ks n+hagq [kqf’k;qfu tks I;kjks			137
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri131,bookname:"गीत मञ्जुला"})}>
131 vk;ks vk;ks vk;ks vk lqUnj n+hagq			138
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri132,bookname:"गीत मञ्जुला"})}>
132 mRlo vkuUn jpk, lkbZa				140
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri133,bookname:"गीत मञ्जुला"})}>
133 djds lksjag lhaxkj vkbZ				141
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri134,bookname:"गीत मञ्जुला"})}>
134 x+k;ks x+k;ks feyh f[kyh				142
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri135,bookname:"गीत मञ्जुला"})}>
135 thou tks vk/kkj lkfgcq lkbZa			143
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri136,bookname:"गीत मञ्जुला"})}>
136 upks M+h upks					144
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri137,bookname:"गीत मञ्जुला"})}>
137 iy iy x+k;ka eka					145
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri138,bookname:"गीत मञ्जुला"})}>
138 I;kjk izHkw vkuUn vk;ks vk			146
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri139,bookname:"गीत मञ्जुला"})}>
139 feBs lkbZa v tUe n+hagq				147
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri140,bookname:"गीत मञ्जुला"})}>
140 ok/kkbZ ok/kkbZ veka ok/kkbZ				148
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri141,bookname:"गीत मञ्जुला"})}>
141 jke [ks ok/kkbZ ';ke [ks ok/kkbZ			      149
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri142,bookname:"गीत मञ्जुला"})}>
142 lkbZa v tUe ok/kkbZ fn+;.k				150
</Text>
<View style = {styles.lineStyle} />











<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  3&>wyk mRlo     Hkkx& 2
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri143,bookname:"गीत मञ्जुला"})}>

143  vkt ekSle lyksuk lyksuk js				1
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri144,bookname:"गीत मञ्जुला"})}>
144 vkt >qyk cuk ljdkj dk				1
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri145,bookname:"गीत मञ्जुला"})}>
145 vkbZ lkaou dh rht gj;kyh ltuh			2
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri146,bookname:"गीत मञ्जुला"})}>
146 vkbZ lkaou dh rht lq[knkbZ				3
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri147,bookname:"गीत मञ्जुला"})}>
147 dSlh >wys dh 'kksHkk I;kjh cuh gS				5
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri148,bookname:"गीत मञ्जुला"})}>
148 tkfucq >wyk >wys izse fg.Mksys Qwys				5
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri149,bookname:"गीत मञ्जुला"})}>
149 >wyuk esa >wy lkbZ >wyuk esa >wy				6
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri150,bookname:"गीत मञ्जुला"})}>
150 >wyk >wyks ltu lkbZa panz onu				7
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri151,bookname:"गीत मञ्जुला"})}>
151 >wyk >qykos vkt l[kh lkbZa dk				8
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri152,bookname:"गीत मञ्जुला"})}>
152 >wys tks vkuanq ltuh x+k;ks				9
</Text>
  <View style = {styles.lineStyle} />


  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  4&xq# iw.kZek mRlo
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri153,bookname:"गीत मञ्जुला"})}>

153 xqj iw.kZek mRlo vkt feyds eukosa			11
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri154,bookname:"गीत मञ्जुला"})}>
154 xqj iw.kZek th lkbZa veka [ks ok/kkbZ				12

  </Text>
  <View style = {styles.lineStyle} />


  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  5&nhikoyh mRlo
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri155,bookname:"गीत मञ्जुला"})}>

  155 vkbZ Hkkx+fu lka lqUnj fn+;kjh				13
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri156,bookname:"गीत मञ्जुला"})}>
156 vk;ks vk;ks vk n+hagM+ks lqgk;ks				14
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri157,bookname:"गीत मञ्जुला"})}>
157 vkgs fn+;kjh v tks R;ksgkj vk;ks				15
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri158,bookname:"गीत मञ्जुला"})}>
158 ltuh ltk;ks ?kj c+kj lkbZa				16
</Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  6&Qwy caxyk mRlo
  </Text>
  <View style = {styles.lineStyle} />
  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri159,bookname:"गीत मञ्जुला"})}>

159 vkt Qwy caxys dh Nfc U;kjh				17
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri160,bookname:"गीत मञ्जुला"})}>
160 Qwyksa dh vtc cgkj jh					18
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri161,bookname:"गीत मञ्जुला"})}>
161 Qwyksa ds caxys jkts lkbZa					19
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri162,bookname:"गीत मञ्जुला"})}>
162 Lkfr laxfr lhaxkj M+h					20
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri163,bookname:"गीत मञ्जुला"})}>
163 Qwy caxys dh vtcq cgkjh				21
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri164,bookname:"गीत मञ्जुला"})}>
164 Qwy caxys dh 'kksHkk lqgkou gS				22
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri165,bookname:"गीत मञ्जुला"})}>
165 okg okg lqUnj Nfc dSlh					23
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri166,bookname:"गीत मञ्जुला"})}>
166 ns[kks ns[kks jh Qwyksa dk					24
  </Text>
  <View style = {styles.lineStyle} />



  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  7&vUudwV mRlo  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri167,bookname:"गीत मञ्जुला"})}>

 167 vt+q védwV vkuUn vkgs					25
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri168,bookname:"गीत मञ्जुला"})}>
168 védwV vkuan th cgkj vt+q				26
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri169,bookname:"गीत मञ्जुला"})}>
169 vk;k Hkkst+u Hkyh Hkkafr					27
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri170,bookname:"गीत मञ्जुला"})}>
170 vkgs védwV vkuUn vikjks				28
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri171,bookname:"गीत मञ्जुला"})}>
171 [kkvks [kkvks Hkkstu lqUnj					30
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri172,bookname:"गीत मञ्जुला"})}>
172 f[kyh f[kyh Hkkstu [kkm					31
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri173,bookname:"गीत मञ्जुला"})}>
173 [kkm Hkkstu dksfdfy jk.kh					32
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri174,bookname:"गीत मञ्जुला"})}>
174 lkbZa lpk jl Hkkstu ik;ks					32
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri175,bookname:"गीत मञ्जुला"})}>
175 lkbZa lkfgc lq[k /kke					34
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri176,bookname:"गीत मञ्जुला"})}>
176 lkbZav xksn esa lnka c`ktr					35
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri177,bookname:"गीत मञ्जुला"})}>
177 lfrxqj lkbZ ft;ksfe lnkbZa					36
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri178,bookname:"गीत मञ्जुला"})}>
178 lkbZa veka Hkkstu izse lka [kkvks				37
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri179,bookname:"गीत मञ्जुला"})}>
179 lkbZ lqdqekj c.kh Hkkstu cgkj vk				39
</Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  8&>wyk mRlo
  </Text>
  <View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri180,bookname:"गीत मञ्जुला"})}>

180 >wys esa vkt >wyks lkbZa lktu				41
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri181,bookname:"गीत मञ्जुला"})}>
181 >wyks lkbZa lqdqekj dnEc					42
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri182,bookname:"गीत मञ्जुला"})}>
182 >wyks >wyks fg.Mksy lqdqekj				43
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri183,bookname:"गीत मञ्जुला"})}>
183 >wys th vtcq cgkjh					44
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri184,bookname:"गीत मञ्जुला"})}>
184 Rkht gfj;kyh vkbZ vkbZ					45
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri185,bookname:"गीत मञ्जुला"})}>
185 rht lqgkbZ fg.Mksy esa					46
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri186,bookname:"गीत मञ्जुला"})}>
186 ns[kks NkbZ gS cgkjh					47
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri187,bookname:"गीत मञ्जुला"})}>
187 ns[kks >wysa fg.Mksys					48
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri188,bookname:"गीत मञ्जुला"})}>
188 fn+lks fn+lks vtkbc					48
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri189,bookname:"गीत मञ्जुला"})}>
189 izk.k I;kjs jkt nqykjs					49
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri190,bookname:"गीत मञ्जुला"})}>
190 lkbZa vkuan dan >wyk >wyks					50
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri191,bookname:"गीत मञ्जुला"})}>
191 lkbZa >wyfu >wys						51
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri192,bookname:"गीत मञ्जुला"})}>
192 lkbZa izk.k I;kjs >wyks					52
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri193,bookname:"गीत मञ्जुला"})}>
193 lkbZa esjs >wysa lqjax fgaMksys					53
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri194,bookname:"गीत मञ्जुला"})}>
194 lkbZa lkfgc >qyk;wa					54
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri195,bookname:"गीत मञ्जुला"})}>
195 lkbZa lkfgc >wys tks vkuan				54
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri196,bookname:"गीत मञ्जुला"})}>
196 lkbZa lkfgc >wyuk					55
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri197,bookname:"गीत मञ्जुला"})}>
197 lkaou dh fjrq vkbZ js					56
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri198,bookname:"गीत मञ्जुला"})}>
198 lkaou dh lqgkuh vkbZ cgkj				57
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri199,bookname:"गीत मञ्जुला"})}>
199 lkao.kq lyksuks vk;ks					58
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri200,bookname:"गीत मञ्जुला"})}>
200 gj;kyh vc vk xbZ ltuh				59
</Text>
<View style = {styles.lineStyle} />
  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  9&gksyh mRlo 
  </Text>
  <View style = {styles.lineStyle} />

  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri201,bookname:"गीत मञ्जुला"})}>

  201 vkbZ ckcy th jax gksjh					61

  </Text>
  <View style = {styles.lineStyle} />

{/* 
  <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
  Hkkx&2  </Text>
  <View style = {styles.lineStyle} />
 */}

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
