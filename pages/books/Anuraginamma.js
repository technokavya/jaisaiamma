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



const uri0 = 'pdf/anuraginamma/anuragin_amma_0.pdf';


const uri1 = 'pdf/anuraginamma/anuragin_amma_1.pdf';

const uri2 = 'pdf/anuraginamma/anuragin_amma_2.pdf';
const uri3 = 'pdf/anuraginamma/anuragin_amma_3.pdf';

const uri4 = 'pdf/anuraginamma/anuragin_amma_4.pdf';
const uri5 = 'pdf/anuraginamma/anuragin_amma_5.pdf';
const uri6 = 'pdf/anuraginamma/anuragin_amma_6.pdf';
const uri7 = 'pdf/anuraginamma/anuragin_amma_7.pdf';
const uri8 = 'pdf/anuraginamma/anuragin_amma_8.pdf';
const uri9 = 'pdf/anuraginamma/anuragin_amma_9.pdf';
const uri10 = 'pdf/anuraginamma/anuragin_amma_10.pdf';
const uri11= 'pdf/anuraginamma/anuragin_amma_11.pdf';
const uri12= 'pdf/anuraginamma/anuragin_amma_12.pdf';
const uri13= 'pdf/anuraginamma/anuragin_amma_13.pdf';
const uri14= 'pdf/anuraginamma/anuragin_amma_14.pdf';
const uri15= 'pdf/anuraginamma/anuragin_amma_15.pdf';
const uri16= 'pdf/anuraginamma/anuragin_amma_16.pdf';
const uri17= 'pdf/anuraginamma/anuragin_amma_17.pdf';

const uri18= 'pdf/anuraginamma/anuragin_amma_18.pdf';
const uri19= 'pdf/anuraginamma/anuragin_amma_19.pdf';

const uri20= 'pdf/anuraginamma/anuragin_amma_20.pdf';
const uri21= 'pdf/anuraginamma/anuragin_amma_21.pdf';
const uri22= 'pdf/anuraginamma/anuragin_amma_22.pdf';
const uri23= 'pdf/anuraginamma/anuragin_amma_23.pdf';
const uri24= 'pdf/anuraginamma/anuragin_amma_24.pdf';
const uri25= 'pdf/anuraginamma/anuragin_amma_25.pdf';
const uri26= 'pdf/anuraginamma/anuragin_amma_26-33.pdf';

const uri34= 'pdf/anuraginamma/anuragin_amma_34-35.pdf';

const uri36= 'pdf/anuraginamma/anuragin_amma_36.pdf';
const uri37= 'pdf/anuraginamma/anuragin_amma_37-39.pdf';
const uri40= 'pdf/anuraginamma/anuragin_amma_40-43.pdf';
const uri44= 'pdf/anuraginamma/anuragin_amma_44.pdf';
const uri45= 'pdf/anuraginamma/anuragin_amma_45-46.pdf';
const uri47= 'pdf/anuraginamma/anuragin_amma_47.pdf';
const uri48= 'pdf/anuraginamma/anuragin_amma_48.pdf';
const uri49= 'pdf/anuraginamma/anuragin_amma_49.pdf';
const uri50= 'pdf/anuraginamma/anuragin_amma_50-53.pdf';
const uri54= 'pdf/anuraginamma/anuragin_amma_54-55.pdf';
const uri56= 'pdf/anuraginamma/anuragin_amma_56.pdf';
const uri57= 'pdf/anuraginamma/anuragin_amma_57-58.pdf';
const uri59= 'pdf/anuraginamma/anuragin_amma_59.pdf';


const uri60= 'pdf/anuraginamma/anuragin_amma_60.pdf';
const uri61= 'pdf/anuraginamma/anuragin_amma_61-62.pdf';
const uri63= 'pdf/anuraginamma/anuragin_amma_63.pdf';
const uri64= 'pdf/anuraginamma/anuragin_amma_64.pdf';
const uri65= 'pdf/anuraginamma/anuragin_amma_65.pdf';
const uri66= 'pdf/anuraginamma/anuragin_amma_66.pdf';
const uri67= 'pdf/anuraginamma/anuragin_amma_67.pdf';
const uri68= 'pdf/anuraginamma/anuragin_amma_68.pdf';
const uri69= 'pdf/anuraginamma/anuragin_amma_69.pdf';
const uri70= 'pdf/anuraginamma/anuragin_amma_70.pdf';
const uri71= 'pdf/anuraginamma/anuragin_amma_71.pdf';
const uri72= 'pdf/anuraginamma/anuragin_amma_72-73.pdf';
const uri74= 'pdf/anuraginamma/anuragin_amma_74.pdf';
const uri75= 'pdf/anuraginamma/anuragin_amma_75.pdf';

const uri76= 'pdf/anuraginamma/anuragin_amma_76.pdf';
const uri77= 'pdf/anuraginamma/anuragin_amma_77.pdf';
const uri78= 'pdf/anuraginamma/anuragin_amma_78.pdf';
const uri79= 'pdf/anuraginamma/anuragin_amma_79.pdf';
const uri80= 'pdf/anuraginamma/anuragin_amma_80.pdf';

const uri81= 'pdf/anuraginamma/anuragin_amma_81.pdf';
const uri82= 'pdf/anuraginamma/anuragin_amma_82.pdf';
const uri83= 'pdf/anuraginamma/anuragin_amma_83.pdf';
const uri84= 'pdf/anuraginamma/anuragin_amma_84.pdf';
const uri85= 'pdf/anuraginamma/anuragin_amma_85.pdf';
const uri86= 'pdf/anuraginamma/anuragin_amma_86.pdf';
const uri87= 'pdf/anuraginamma/anuragin_amma_87.pdf';
const uri88= 'pdf/anuraginamma/anuragin_amma_88.pdf';
const uri89= 'pdf/anuraginamma/anuragin_amma_89.pdf';
const uri90= 'pdf/anuraginamma/anuragin_amma_90.pdf';

const uri91= 'pdf/anuraginamma/anuragin_amma_91.pdf';
const uri92= 'pdf/anuraginamma/anuragin_amma_92.pdf';
const uri93= 'pdf/anuraginamma/anuragin_amma_93.pdf';
const uri94= 'pdf/anuraginamma/anuragin_amma_94.pdf';
const uri95= 'pdf/anuraginamma/anuragin_amma_95.pdf';
const uri96= 'pdf/anuraginamma/anuragin_amma_96.pdf';






export default function Anuraginamma({ navigation }) {
  const fsize=scaleFontSize(56);
  // const [dynamicFontSize, setFontSize] = useState(fsize); // Initial font size

const dynamicFontSize = scaleFontSize(60);
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
      tS lkbZa veka

</Text>
<Text style={{fontSize:40,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0}}>
vuqjkfx+f.k veka</Text>


<Text style={{fontSize:24,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

¼ ije d#.kke;h feBh veka ts ikou yhyk
pfj= twa dqNq fefB;wa >kafd;wa ½

</Text>

<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
jphan+Mq %
	Jh lkbZa lkfgc d`ik ik=k
	ckck xsghjke
</Text>
<Text style={{fontSize:20,textAlign:'center',marginTop:20,fontFamily:'Kruti-Dev',top: 0}}>
lq[k  fuokl  lfrlax  e.My]  Jh  o`Unkou  281121
</Text>
<Text style={{fontSize:20,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev',top: 0}}>
lkbZa lkfgc tUeksRlo Û lañ 2054  & lu~ 1997
</Text>











      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      vuqdze
</Text>



 <View style = {styles.lineStyle} />

 <Text style={{fontSize:dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:' अनुरागिणी  अम्माँ '})}>
 lfrxqj izlkn </Text>

<View style = {styles.lineStyle} />


 <Text style={{fontSize:dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:' अनुरागिणी  अम्माँ '})}>
 1 + veka vkbZ veka vkbZ lkbZa v lka xn+q	1</Text>


<View style = {styles.lineStyle} />

<Text style={{fontSize:dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:' अनुरागिणी  अम्माँ '})}>
2 +  veka tUe th ok/kkbZ x+k;wa gyh			2		</Text>

<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:" अनुरागिणी  अम्माँ "})}>
3&4 +	lR; lusfgf.k					4
  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:" अनुरागिणी  अम्माँ "})}>
5&7 +	izhfr th jhfr					5

 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:" अनुरागिणी  अम्माँ "})}>
8 +	vuqjkx+ ijh&#123;kk					7
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:" अनुरागिणी  अम्माँ "})}>
9 +	ukfrM+ks fujokj					11

</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:" अनुरागिणी  अम्माँ "})}>
10 +fp# thm feBh ek;M+h lkbZa lkfgc I;kjh	
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:" अनुरागिणी  अम्माँ "})}>
11&12 +   fueZyq uhagq					14
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:" अनुरागिणी  अम्माँ "})}>
13 +	lkbZa veka lkFk jgks A ;qxy th yhyk tk 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:" अनुरागिणी  अम्माँ "})}>
14&16 +   ojth fo:ag					16    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:" अनुरागिणी  अम्माँ "})}>
17 +	lkbZa veka lusg th vn~Hkqr dFkk Fkks x+k;ka	

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:" अनुरागिणी  अम्माँ "})}>
18 +	uoka dkSrqd					19
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:" अनुरागिणी  अम्माँ "})}>
19 +	lkbZa v pj.kfu esa vefM+ tks lusg		20
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:" अनुरागिणी  अम्माँ "})}>
20 +	ehjiqj ekSt					21
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:" अनुरागिणी  अम्माँ "})}>
21&22 +  c`t ;k=k@vefM+ taw fefB;wa f’k&#123;kkÅa	  
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:" अनुरागिणी  अम्माँ "})}>
23 +	vks veka feBh rqafgth d`ik feBh			27
</Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:" अनुरागिणी  अम्माँ "})}>
24 +	eqafgth vefM+ feBh lkbZa rqafgtks vk		28
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:" अनुरागिणी  अम्माँ "})}>
25 +	fld lusgk					29
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:" अनुरागिणी  अम्माँ "})}>
26&33 +  eaxy fey.kq@e/kqj fey.kq			31
</Text>
<View style = {styles.lineStyle} />




  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:" अनुरागिणी  अम्माँ "})}>
  34&35 +  izse fo’kky					39

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:" अनुरागिणी  अम्माँ "})}>
36 +	fefFkyk iqjhv th ek/kqjh c`t /kke vkbZ vk
</Text>
<View style = {styles.lineStyle} />




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:" अनुरागिणी  अम्माँ "})}>
37&39 +vuqjkx+ vVkjh@:g fjgkf.k			46
  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:" अनुरागिणी  अम्माँ "})}>
40&43 +larfu lsoh@vUnj th mdhj			50
 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" अनुरागिणी  अम्माँ "})}>
44 +	veka eka nhokuh x+ksfy;ka fnfy tkuh		52
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:" अनुरागिणी  अम्माँ "})}>
45&46 +  rqafgtks bZ tflM+ks x+k;ka rqafgth Fkh eka pok;ka	53
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:" अनुरागिणी  अम्माँ "})}>
47 +lfn+M+ks djhfe lkbZa ekanh eka feBy vkfg;ka	
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:" अनुरागिणी  अम्माँ "})}>
48 +	c`t fo:ag					56
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:" अनुरागिणी  अम्माँ "})}>
49 +	vefM+ lkbZa lusg th vej dgkuh fl; jk?ko	
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:" अनुरागिणी  अम्माँ "})}>
50&53 +vn~Hkqr vuqjkx+					59


  
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:" अनुरागिणी  अम्माँ "})}>
54&55 +lkbZa vefM+ vkuan lka ?kqefu Fkk xqyt+kj esa	
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:" अनुरागिणी  अम्माँ "})}>
56 +vefM+ lkbZa lusg lka fo:ag dfu of.kdj esa	
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:" अनुरागिणी  अम्माँ "})}>
57&58 +fnO; n’kZu ¼ Jh}kfjdk /kke ½			69

   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:" अनुरागिणी  अम्माँ "})}>
59 +	xkserh luku ykb vk;k eqafgtk lkbZa lUrfu jk;k	71
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:" अनुरागिणी  अम्माँ "})}>
60 +	vefM+ #def.k n’kZuq				73
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:" अनुरागिणी  अम्माँ "})}>
61&62 +dyksyh djrkj@feBk fouksn			74 </Text>
  <View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:" अनुरागिणी  अम्माँ "})}>
63 +	lw> Hkjh lgsyh				76

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:" अनुरागिणी  अम्माँ "})}>
64 +	lkbZa veka thvks lnk bgk vk’kh’kM+h gj okj vk	79
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:" अनुरागिणी  अम्माँ "})}>
65 +	lk&#123;kkr~ Bkdqj					81
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:" अनुरागिणी  अम्माँ "})}>
66 +	vuks[kks R;kxq					82
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:" अनुरागिणी  अम्माँ "})}>
67 +	thou vk/kkj lkbZa eqafgth rwa lkj			84
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:" अनुरागिणी  अम्माँ "})}>
68 +	vuwie vfHkyk"k				85
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:" अनुरागिणी  अम्माँ "})}>
69 +	rqafgth ;kfn tkfuc thm Fkh ftvkjs		86

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:" अनुरागिणी  अम्माँ "})}>
70 +	lkbZa veka lkbZa veka thvks lnka lkbZa veka		
  </Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:" अनुरागिणी  अम्माँ "})}>
71 +	e/kqj Lrqfr					88


   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:" अनुरागिणी  अम्माँ "})}>
72&73 +vdFk dgk.kh					86
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:" अनुरागिणी  अम्माँ "})}>
74 +	lfn+M+ks djsbZ Fkks lkfuM+ks lkbZa nknf.k nsfj u ykb	96

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:" अनुरागिणी  अम्माँ "})}>
75 +	fnfyM+h osbZ vk vksn+kagq ftfr thou vk/kkj
</Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:" अनुरागिणी  अम्माँ "})}>
76 +	lqdqekj lkbZa lfpM+k tqx+ tqx+ ft;ksfe tkuh	

   

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:" अनुरागिणी  अम्माँ "})}>
77 +  	Fkdk jksbZ us.k fuek.kk vpq lkbZa lkfgc fl;k.kk 101

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:" अनुरागिणी  अम्माँ "})}>
78 +vt+q dk fey.k th okfx+M+h okfjft     	102

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:" अनुरागिणी  अम्माँ "})}>
79 +	fofjgq eqafgts Hkkx+ esa fyf[k;ks thouq Fkh fi;ks ck# 103

</Text>
<View style = {styles.lineStyle} />




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:" अनुरागिणी  अम्माँ "})}>
80 +fpj fpj thvks izk.k I;kjs thv ftvkjs	104

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:" अनुरागिणी  अम्माँ "})}>
81 +dfgMk+ n+hag feBk gqvk lkbZa lpk  105


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:" अनुरागिणी  अम्माँ "})}>
82 +	tkfuc fey.k tks tsfn+;wa ds# n+flM+k	107

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:" अनुरागिणी  अम्माँ "})}>
83 +eqafgtks lkbZa izk.k I;kjks thv ft;kjks vk 
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:" अनुरागिणी  अम्माँ "})}>
84 +  vks xjhfc nsoh thou lgsyh]  dhav Fkh xqtkjha 109
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:" अनुरागिणी  अम्माँ "})}>
85 +	rwa Fkhm u vfr v/khj c+ph xjhfc fuek.kh
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:" अनुरागिणी  अम्माँ "})}>
86 +vfeM+ lkbZa fey.k th ltuh e/kqcsyk vk vkbZ
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:" अनुरागिणी  अम्माँ "})}>
87 +	nklfu tks lpks thouq vefM+ lkbZa		113
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri88,bookname:" अनुरागिणी  अम्माँ "})}>
88 +lfrlax tks vk lkbZa jktk vefM+ feBh vk jk.kh
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri89,bookname:" अनुरागिणी  अम्माँ "})}>
89 +	lkbZa veka yhyk I;kjh jh ltuh			115
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri90,bookname:" अनुरागिणी  अम्माँ "})}>
90 +eka lfnds fFk;ka lkbZa veka rka ftfu izse
  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri91,bookname:" अनुरागिणी  अम्माँ "})}>
91 +tS lkbZa veka tS lkbZa veka tS lkbZa veka I;kjk
  </Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri92,bookname:" अनुरागिणी  अम्माँ "})}>
92 +lkbZa veka tSdkj pÅa lHkq lkbZa veka tSdkj 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri93,bookname:" अनुरागिणी  अम्माँ "})}>
93 +	eqafgth fnfyM+h lnka /;k;s lkbZa veka		118
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri94,bookname:" अनुरागिणी  अम्माँ "})}>
94 +	lkbZa v feBs th efgek th ewjfr	119
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri95,bookname:" अनुरागिणी  अम्माँ "})}>
95 +	vefM+ ts vuqjkx+ th dhjfr x+k;ka	120
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri96,bookname:" अनुरागिणी  अम्माँ "})}>
96 +	thvks lnka thvks lnka lkbZa veka jl jkt esa 



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
