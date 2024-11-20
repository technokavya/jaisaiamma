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



const uri1 = 'pdf/leelamadhuri2/leela_madhuri2_0_compressed.pdf';


const uri2 = 'pdf/leelamadhuri2/leela_madhuri2_0_1_compressed.pdf';
const uri3 = 'pdf/leelamadhuri2/leela_madhuri2_1_compressed.pdf';

const uri4 = 'pdf/leelamadhuri2/leela_madhuri2_2_compressed.pdf';
const uri5 = 'pdf/leelamadhuri2/leela_madhuri2_5_compressed.pdf';

const uri6 = 'pdf/leelamadhuri2/leela_madhuri2_6_compressed.pdf';
const uri7 = 'pdf/leelamadhuri2/leela_madhuri2_7_compressed.pdf';
const uri8 = 'pdf/leelamadhuri2/leela_madhuri2_8_compressed.pdf';
const uri9 = 'pdf/leelamadhuri2/leela_madhuri2_9_compressed.pdf';
const uri10 = 'pdf/leelamadhuri2/leela_madhuri2_10_compressed.pdf';
const uri11= 'pdf/leelamadhuri2/leela_madhuri2_11_compressed.pdf';
const uri12= 'pdf/leelamadhuri2/leela_madhuri2_12_compressed.pdf';
const uri13= 'pdf/leelamadhuri2/leela_madhuri2_13_compressed.pdf';
const uri14= 'pdf/leelamadhuri2/leela_madhuri2_14_compressed.pdf';
const uri15= 'pdf/leelamadhuri2/leela_madhuri2_15_compressed.pdf';

const uri15_1= 'pdf/leelamadhuri2/leela_madhuri2_15_1_compressed.pdf';
const uri15_2= 'pdf/leelamadhuri2/leela_madhuri2_15_2_compressed.pdf';
const uri15_3= 'pdf/leelamadhuri2/leela_madhuri2_15_3_compressed.pdf';
const uri15_4= 'pdf/leelamadhuri2/leela_madhuri2_15_4_compressed.pdf';
const uri15_5= 'pdf/leelamadhuri2/leela_madhuri2_15_5_compressed.pdf';
const uri15_6= 'pdf/leelamadhuri2/leela_madhuri2_15_6_compressed.pdf';
const uri15_7= 'pdf/leelamadhuri2/leela_madhuri2_15_7_compressed.pdf';
const uri15_8= 'pdf/leelamadhuri2/leela_madhuri2_15_8_compressed.pdf';
const uri15_9= 'pdf/leelamadhuri2/leela_madhuri2_15_9_compressed.pdf';
const uri15_10= 'pdf/leelamadhuri2/leela_madhuri2_15_10_compressed.pdf';
const uri15_11= 'pdf/leelamadhuri2/leela_madhuri2_15_11_compressed.pdf';


const uri16= 'pdf/leelamadhuri2/leela_madhuri2_16_compressed.pdf';
const uri17= 'pdf/leelamadhuri2/leela_madhuri2_17_compressed.pdf';

const uri18= 'pdf/leelamadhuri2/leela_madhuri2_18_compressed.pdf';
const uri19= 'pdf/leelamadhuri2/leela_madhuri2_19_compressed.pdf';

const uri20= 'pdf/leelamadhuri2/leela_madhuri2_20_compressed.pdf';
const uri21= 'pdf/leelamadhuri2/leela_madhuri2_21_compressed.pdf';
const uri22= 'pdf/leelamadhuri2/leela_madhuri2_22_compressed.pdf';
const uri23= 'pdf/leelamadhuri2/leela_madhuri2_23_compressed.pdf';
const uri24= 'pdf/leelamadhuri2/leela_madhuri2_24_compressed.pdf';



const uri33= 'pdf/leelamadhuri2/leela_madhuri2_geet1_compressed.pdf';
const uri34= 'pdf/leelamadhuri2/leela_madhuri2_geet2_compressed.pdf';
const uri35= 'pdf/leelamadhuri2/leela_madhuri2_geet3_compressed.pdf';
const uri36= 'pdf/leelamadhuri2/leela_madhuri2_geet4_compressed.pdf';
const uri37= 'pdf/leelamadhuri2/leela_madhuri2_geet5_compressed.pdf';
const uri38= 'pdf/leelamadhuri2/leela_madhuri2_geet6_compressed.pdf';
const uri39= 'pdf/leelamadhuri2/leela_madhuri2_geet7_compressed.pdf';
const uri40= 'pdf/leelamadhuri2/leela_madhuri2_geet8_compressed.pdf';
const uri41= 'pdf/leelamadhuri2/leela_madhuri2_geet9_compressed.pdf';
const uri42= 'pdf/leelamadhuri2/leela_madhuri2_geet10_compressed.pdf';
const uri43= 'pdf/leelamadhuri2/leela_madhuri2_geet11_compressed.pdf';
const uri44= 'pdf/leelamadhuri2/leela_madhuri2_geet12_compressed.pdf';
const uri45= 'pdf/leelamadhuri2/leela_madhuri2_geet13_compressed.pdf';
const uri46= 'pdf/leelamadhuri2/leela_madhuri2_geet14_compressed.pdf';


const uri47= 'pdf/leelamadhuri2/leela_madhuri2_geet15_compressed.pdf';
const uri48= 'pdf/leelamadhuri2/leela_madhuri2_geet16_compressed.pdf';
const uri49= 'pdf/leelamadhuri2/leela_madhuri2_geet17_compressed.pdf';
const uri50= 'pdf/leelamadhuri2/leela_madhuri2_geet18_compressed.pdf';


const uri51= 'pdf/leelamadhuri2/leela_madhuri2_geet19_compressed.pdf';
const uri52= 'pdf/leelamadhuri2/leela_madhuri2_geet20_compressed.pdf';
const uri53= 'pdf/leelamadhuri2/leela_madhuri2_geet21_compressed.pdf';
const uri54= 'pdf/leelamadhuri2/leela_madhuri2_geet22_compressed.pdf';
const uri55= 'pdf/leelamadhuri2/leela_madhuri2_geet23_compressed.pdf';
const uri56= 'pdf/leelamadhuri2/leela_madhuri2_geet24_compressed.pdf';
const uri57= 'pdf/leelamadhuri2/leela_madhuri2_geet25_compressed.pdf';
const uri58= 'pdf/leelamadhuri2/leela_madhuri2_geet26_compressed.pdf';
const uri59= 'pdf/leelamadhuri2/leela_madhuri2_geet27_compressed.pdf';
const uri60= 'pdf/leelamadhuri2/leela_madhuri2_geet28_compressed.pdf';

const uri61= 'pdf/leelamadhuri2/leela_madhuri2_geet29_compressed.pdf';
const uri62= 'pdf/leelamadhuri2/leela_madhuri2_geet30_compressed.pdf';
const uri63= 'pdf/leelamadhuri2/leela_madhuri2_geet31_compressed.pdf';
const uri64= 'pdf/leelamadhuri2/leela_madhuri2_geet32_compressed.pdf';
const uri65= 'pdf/leelamadhuri2/leela_madhuri2_geet33_compressed.pdf';
const uri66= 'pdf/leelamadhuri2/leela_madhuri2_geet34_compressed.pdf';



export default function Leelamadhuri2({ navigation }) {
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
Jh lkbZalkfgc yhyk ek/kqjh 2</Text>


<Text style={{fontSize:20,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

¿ fla/kh dfork À

Hkkx+q fc+;ks





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


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"लीला माधुरी २"})}>
1 & Jh yhyk ek/kqjh th >kadh			     d&Hk
  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"लीला माधुरी २"})}>
2 & Jh lkbZa lkfgc ok.kh foykl			     1&24
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"लीला माधुरी २"})}>
3 & feBh efgek			     1&24
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"लीला माधुरी २"})}>
4 & rhFkZ jVuq		     1&24   
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"लीला माधुरी २"})}>
” Jh j?kqukFk tks yodq’k ykb okRlY;q</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"लीला माधुरी २"})}>
” Jh y&#123;e.k ykb v/kh#</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"लीला माधुरी २"})}>
5 & Jh ehjiqj lkSHkkX; lkbZa			     1&24 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"लीला माधुरी २"})}>
6 &ukbpfu  rs fuokt’k			     1&24  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"लीला माधुरी २"})}>
” c+ky lUr Jh oSnsgh th f’k&#123;kk </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"लीला माधुरी २"})}>
7 &fojg vkos’k esa pj.k fpUg			     1&24  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"लीला माधुरी २"})}>
8 &Hkä gfjnkljke lka opu foyklq		     1&24   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"लीला माधुरी २"})}>
9 &djkphv rs d`ik				     1&24</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"लीला माधुरी २"})}>
” yodq’k dqekjfu th vefM+ ykb vkrqjrk
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"लीला माधुरी २"})}>
10&}kjdk/kh’k tks n’kZuq				     1&24</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"लीला माधुरी २"})}>
11&gksjh jax c+ksjh				     1&24    
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"लीला माधुरी २"})}>
12&JhukFk nqvkjks				     1&24</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"लीला माधुरी २"})}>
13& lkbZa njckj esa lUrq dao#jkeq			     1&24  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"लीला माधुरी २"})}>
14&xq.kfu /kkeq Jhjkeq				     1&24	</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"लीला माधुरी २"})}>
15&Jh jkes’oj ;k=k				     1&24
 </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_1,bookname:"लीला माधुरी २"})}>
” cEcbZ esa ckcyq
 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_2,bookname:"लीला माधुरी २"})}>
” iapoVh esa I;kjks </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_3,bookname:"लीला माधुरी २"})}>
” i.Mjiqfj esa izhreq </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_4,bookname:"लीला माधुरी २"})}>
” JhjaxukFk esa jlfuf/k
 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_5,bookname:"लीला माधुरी २"})}>
” Jh jkes’oj esa jfld f’kjksef.k </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_5,bookname:"लीला माधुरी २"})}>
”  leqnz rV rs O;kdqyq Jhjkeq				215 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_6,bookname:"लीला माधुरी २"})}>
”  enwjk ,sa enzkl esa ekfydq				222 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_7,bookname:"लीला माधुरी २"})}>
”  txnh’k esa tkfucq					224 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_8,bookname:"लीला माधुरी २"})}>
”  uo}hi esa ukFkq					235 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_9,bookname:"लीला माधुरी २"})}>
”  dk’khv esa djrk#					247 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_10,bookname:"लीला माधुरी २"})}>
”  Jh v;ks/;k esa vkuUn dUnq				252 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15_11,bookname:"लीला माधुरी २"})}>
”  gfj}kj esa gjh					258
 </Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"लीला माधुरी २"})}>
16&djkph ,sa Jh cjlkus cgkj				264



  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"लीला माधुरी २"})}>
17&Jh o`Unkcu fuokl th mRd.Bk			273</Text>
<View style = {styles.lineStyle} />




  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"लीला माधुरी २"})}>
  18& Jh czt esa jg.k th ok/kkbZ				276

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"लीला माधुरी २"})}>
19&lUr LoHkkok Jh jke eS;k				284 </Text>
<View style = {styles.lineStyle} />












<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"लीला माधुरी २"})}>

20&fp=dwV ifjØek ,sa d#.k dFkk			300
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"लीला माधुरी २"})}>
21&Jh o`Unkcu esa lUr fey.kq				328
</Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"लीला माधुरी २"})}>
22&Jh Lokeh v[k.MkuUn lka xfgjh fe=rk		333
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"लीला माधुरी २"})}>
”  fou; if=dk					348
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"लीला माधुरी २"})}>
23& Jh lq[kfuokl fljt.kq ,sa Jh uUnxke fut+kjks		</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"लीला माधुरी २"})}>
”  Jh y&#123;e.k 'kfä izlaxq				357
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"लीला माधुरी २"})}>
”  Lrqfr ,sa vk’kh"k				  357&384
</Text>
<View style = {styles.lineStyle} />


<View style = {styles.lineStyle} />
<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
xhr lwph

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"लीला माधुरी २"})}>


1& vtq+ dk tks vkbZ fofiu n+kg ok/kkbZ ¼lkbZa lkfgc½ 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"लीला माधुरी २"})}>
2&  ckny fn+tkab U;kiks t’kksnk ts yky I;kjs		21       
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"लीला माधुरी २"})}>
3&  'khy e.kh izse /k.kh lkbZa I;kjk			41
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"लीला माधुरी २"})}>
4&  vkma o¥ka Fkh lkgqjs feBk ckcy yx+uq x+.kkb		43
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"लीला माधुरी २"})}>
5&  o`Unkcuq o`Unkcuq o`Unkcuq Fkh x+k;ka			57
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"लीला माधुरी २"})}>
6&lkbZa lqtlq rqfgatks vkgs thouq eqfgatks			65
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"लीला माधुरी २"})}>
7&  vo/k esa vkbZ vt+q dksfdy fuek.kh			102
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"लीला माधुरी २"})}>
8&  fl; j?kqoj tks lpks lusgh				107
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"लीला माधुरी २"})}>
9&  lkbZa lkjkg rqafgath gj ?kM+h fnfy x+k, Fkh  118</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"लीला माधुरी २"})}>
10& fxfjjktq iwts eS;k nksfguhv dq.M rs vkbZ		123


  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"लीला माधुरी २"})}>
11& jfgth vpsbZ 'ky jfgth vpsbZ¼lkbZa lkfgc½		125

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"लीला माधुरी २"})}>
12& rqfgath 'kjf.k lq[kfu tks lk# vk			134

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"लीला माधुरी २"})}>
13& rqfgats njckj th efgek] lkbZa eka dsrjh x+k;ka 150

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"लीला माधुरी २"})}>
14& lkbZa lkfgc lnka rkslka fnfyM+h yx+h			159

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:"लीला माधुरी २"})}>
15& dksfdyk lkdsr th fl;kjkeq x+k, 			164


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:"लीला माधुरी २"})}>
16& x+k;ks x+k;ks if[k;ks x+k;ks x+k;ks				178

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:"लीला माधुरी २"})}>
17& izse jl ihvks tqx+ka tqx+ thvks			191

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:"लीला माधुरी २"})}>
18& rqfgats pj.kfu esa jgs eqfgatks euq			206

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:"लीला माधुरी २"})}>
19& tS 'kj.kiky lq[k/kke lkfgc fl;oj lusgh		219

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:"लीला माधुरी २"})}>
20& n;koUr nkuh ekStwa rwa ek.kha				243

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:"लीला माधुरी २"})}>
21& fp# fp# thoks eqfgatk ukFk				257

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:"लीला माधुरी २"})}>
22& jkgh rwa fgeFk u gkfj				262
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:"लीला माधुरी २"})}>
23& izse meax lka ?kqesa xfy;qfu esa lkbZa lkfgcq cjlkus

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:"लीला माधुरी २"})}>
24& tkx+ks thou /ku eqfgatk fefBM+k tkx+ks izk.k I;kjk	


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:"लीला माधुरी २"})}>
25& rqfgatwa fdjksM+ Hkyk;wa Hkka;ka lt+.k			294

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:"लीला माधुरी २"})}>
26& lnka czt esa jg.k th feyh vk ok/kkbZ			298

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:"लीला माधुरी २"})}>
27& rogka tks n’kZuq vf[k;qfu tks vkjkeq vk		303

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:"लीला माधुरी २"})}>
28& dbZ fp=dwV th fr;kjh gyh ykn+ eka yqn+Unh ykjh

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:"लीला माधुरी २"})}>
29& I;kjs jke th jkg cq+/kk;ks lfpM+s lkfgc ts lfnds	

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:"लीला माधुरी २"})}>
30& d`ik Fkh fnfy Bkjs cq+n+Unk c+sM+k Fkh ikj		326

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:"लीला माधुरी २"})}>
31& fn+;ka lnka vk’kh"k lkbZa f’kjeksj [ks			351

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:"लीला माधुरी २"})}>
32& vkbZ vkbZ fofiu ls o/kkbZ				363

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:"लीला माधुरी २"})}>
33& dFkk tksx+ th rqfgath u HkkbZ				371

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:"लीला माधुरी २"})}>
34& pkjbZa osn pofu] lUr lk[k fn+;fu			383
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
