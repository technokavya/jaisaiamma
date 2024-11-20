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



const uri0 = 'pdf/bhaktkokil/bhakt_kokil_0_compressed.pdf';
const uri1 = 'pdf/bhaktkokil/bhakt_kokil_1_compressed.pdf';
const uri2 = 'pdf/bhaktkokil/bhakt_kokil_2_compressed.pdf';
const uri3 = 'pdf/bhaktkokil/bhakt_kokil_3_compressed.pdf';
const uri4 = 'pdf/bhaktkokil/bhakt_kokil_4_compressed.pdf';
const uri5 = 'pdf/bhaktkokil/bhakt_kokil_5_compressed.pdf';
const uri6 = 'pdf/bhaktkokil/bhakt_kokil_6_compressed.pdf';
const uri7 = 'pdf/bhaktkokil/bhakt_kokil_7_compressed.pdf';
const uri8 = 'pdf/bhaktkokil/bhakt_kokil_8_compressed.pdf';
const uri9 = 'pdf/bhaktkokil/bhakt_kokil_9_compressed.pdf';


const uri10 = 'pdf/bhaktkokil/bhakt_kokil_10_compressed.pdf';
const uri11= 'pdf/bhaktkokil/bhakt_kokil_11_compressed.pdf';
const uri12= 'pdf/bhaktkokil/bhakt_kokil_12_compressed.pdf';
const uri13= 'pdf/bhaktkokil/bhakt_kokil_13_compressed.pdf';
const uri14= 'pdf/bhaktkokil/bhakt_kokil_14_compressed.pdf';
const uri15= 'pdf/bhaktkokil/bhakt_kokil_15_compressed.pdf';
const uri16= 'pdf/bhaktkokil/bhakt_kokil_16_compressed.pdf';
const uri17= 'pdf/bhaktkokil/bhakt_kokil_17_compressed.pdf';

const uri18= 'pdf/bhaktkokil/bhakt_kokil_18_compressed.pdf';
const uri19= 'pdf/bhaktkokil/bhakt_kokil_19_compressed.pdf';

const uri20= 'pdf/bhaktkokil/bhakt_kokil_20_compressed.pdf';
const uri21= 'pdf/bhaktkokil/bhakt_kokil_21_compressed.pdf';
const uri22= 'pdf/bhaktkokil/bhakt_kokil_22_compressed.pdf';
const uri23= 'pdf/bhaktkokil/bhakt_kokil_23_compressed.pdf';
const uri24= 'pdf/bhaktkokil/bhakt_kokil_24_compressed.pdf';
const uri25= 'pdf/bhaktkokil/bhakt_kokil_25_compressed.pdf';
const uri26= 'pdf/bhaktkokil/bhakt_kokil_26_compressed.pdf';
const uri27= 'pdf/bhaktkokil/bhakt_kokil_27_compressed.pdf';
const uri28= 'pdf/bhaktkokil/bhakt_kokil_28_compressed.pdf';
const uri29= 'pdf/bhaktkokil/bhakt_kokil_29_compressed.pdf';


const uri30= 'pdf/bhaktkokil/bhakt_kokil_30_compressed.pdf';
const uri31= 'pdf/bhaktkokil/bhakt_kokil_31_compressed.pdf';
const uri32= 'pdf/bhaktkokil/bhakt_kokil_32_compressed.pdf';
const uri33= 'pdf/bhaktkokil/bhakt_kokil_33_compressed.pdf';
const uri34= 'pdf/bhaktkokil/bhakt_kokil_34_compressed.pdf';
const uri35= 'pdf/bhaktkokil/bhakt_kokil_35_compressed.pdf';
const uri36= 'pdf/bhaktkokil/bhakt_kokil_36_compressed.pdf';
const uri37= 'pdf/bhaktkokil/bhakt_kokil_37_compressed.pdf';
const uri38= 'pdf/bhaktkokil/bhakt_kokil_38_compressed.pdf';
const uri39= 'pdf/bhaktkokil/bhakt_kokil_39_compressed.pdf';
const uri40= 'pdf/bhaktkokil/bhakt_kokil_40_compressed.pdf';

const uri41= 'pdf/bhaktkokil/bhakt_kokil_41_compressed.pdf';
const uri42= 'pdf/bhaktkokil/bhakt_kokil_42_compressed.pdf';
const uri43= 'pdf/bhaktkokil/bhakt_kokil_43_compressed.pdf';
const uri44= 'pdf/bhaktkokil/bhakt_kokil_44_compressed.pdf';
const uri45= 'pdf/bhaktkokil/bhakt_kokil_45_compressed.pdf';
const uri46= 'pdf/bhaktkokil/bhakt_kokil_46_compressed.pdf';
const uri47= 'pdf/bhaktkokil/bhakt_kokil_47_compressed.pdf';
const uri48= 'pdf/bhaktkokil/bhakt_kokil_48_compressed.pdf';
const uri49= 'pdf/bhaktkokil/bhakt_kokil_49_compressed.pdf';
const uri50= 'pdf/bhaktkokil/bhakt_kokil_50_compressed.pdf';
const uri50_1= 'pdf/bhaktkokil/bhakt_kokil_50_1_compressed.pdf';
const uri50_2= 'pdf/bhaktkokil/bhakt_kokil_50_2_compressed.pdf';

const uri51= 'pdf/bhaktkokil/bhakt_kokil_51_compressed.pdf';
const uri52= 'pdf/bhaktkokil/bhakt_kokil_52_compressed.pdf';
const uri53= 'pdf/bhaktkokil/bhakt_kokil_53_compressed.pdf';
const uri54= 'pdf/bhaktkokil/bhakt_kokil_54_compressed.pdf';
const uri55= 'pdf/bhaktkokil/bhakt_kokil_55_compressed.pdf';
const uri56= 'pdf/bhaktkokil/bhakt_kokil_56_compressed.pdf';
const uri57= 'pdf/bhaktkokil/bhakt_kokil_57_compressed.pdf';
const uri58= 'pdf/bhaktkokil/bhakt_kokil_58_compressed.pdf';
const uri59= 'pdf/bhaktkokil/bhakt_kokil_59_compressed.pdf';
const uri60= 'pdf/bhaktkokil/bhakt_kokil_60_compressed.pdf';

const uri61= 'pdf/bhaktkokil/bhakt_kokil_61_compressed.pdf';
const uri62= 'pdf/bhaktkokil/bhakt_kokil_62_compressed.pdf';
const uri63= 'pdf/bhaktkokil/bhakt_kokil_63_compressed.pdf';
const uri64= 'pdf/bhaktkokil/bhakt_kokil_64_compressed.pdf';
const uri65= 'pdf/bhaktkokil/bhakt_kokil_65_compressed.pdf';

export default function Bhaktkokil({ navigation }) {
  const fsize=scaleFontSize(50);
  const [dynamicFontSize, setFontSize] = useState(fsize); // Initial font size

  //const dynamicFontSize = scaleFontSize(50);
  const fontname='Kruti-Dev';
  let [fontsLoaded]=useFonts({
    'Kruti-Dev':require('./../../assets/fonts/Kruti-Dev-012.ttf'),
    'K105':require('./../../assets/fonts/K105.ttf'),
    'Kd20':require('./../../assets/fonts/K105.ttf'),
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
      <Text style={{fontSize:15,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0}}>
      Jh gfj%</Text>


<Text style={{fontSize:40,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0}}>
Jh HkDr dksfdy</Text>


<Text style={{fontSize:20,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
leiknd %
Lokeh Jhv[k.MkuUn ljLorh
Jh/kke o`Unkou

</Text>
<Text style={{fontSize:20,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0,padding:10}}>
izdk'kd %
czãewfrZ JhmfM+;kckck
yksd dY;k.k VªLV
o`Unkou

</Text>
<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
ॐ
	loZ lRlax lekt bl ckr ls cgqr gf"kZr gks jgk gS fd HkDr dksfdy xzUFk tks fd lkbZa lkgc dk ljy ljl ifo=&pfj= gS] czãewfrZ JhmfM+;kckck yksd dY;k.k VªLV lRlafx;ksa ds lq[k ds fy;s izdkf’kr dj jgk gS A blds fy;s lEiw.kZ lRlax lekt] Jhegkjkt ds d`ik iw.kZ Lusg okRlY; ds fy;s fpj d`rK gS A
				

</Text>
<Text style={{fontSize:20,textAlign:'right',marginTop:0,fontFamily:'Kd20',top: 0,padding:10}}>

&v[k.MkuUn ljLorh
				

</Text>


      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      lwph</Text>



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manjusha (Mangal Kamna)'})}>
D;ksa\ </Text>

 <View style = {styles.lineStyle} />








<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
izse i=&			</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:" श्री भक्त कोकिल"})}>
Jhdksfdy lkbZa ds izfr JhLokeh v[k.MkuUn
ljLorh dk o`Unkou ls gfj}kj dks


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:" श्री भक्त कोकिल"})}>
lkbZa lkfgc dh tS </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:" श्री भक्त कोकिल"})}>
vk'kh"k fiz; lkbZa lnka [kqf’k !</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:" श्री भक्त कोकिल"})}>
Jh HkDr dksfdy</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:" श्री भक्त कोकिल"})}>
1 +	vkfoZHkko vkSj 'kS’ko				 3  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:" श्री भक्त कोकिल"})}>
2 + 	oSjkX;						 7
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:" श्री भक्त कोकिल"})}>
3 +	Jhln~xq# dh izkfIr				12
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:" श्री भक्त कोकिल"})}>
4 +	ehjiqj&vkxeu					19
   
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:" श्री भक्त कोकिल"})}>
5 +	egUrh dk R;kx					21
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:" श्री भक्त कोकिल"})}>
6 +	Hkxorf}xzg dh izkfIr				22
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:" श्री भक्त कोकिल"})}>
7 +	mrd.Bk dh o`f)				24
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:" श्री भक्त कोकिल"})}>
8 + 	Jhtudiqj dh ;k=k				26
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:" श्री भक्त कोकिल"})}>
9 + 	fnO; Hkko					27
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:" श्री भक्त कोकिल"})}>
10 + 	lRlax dk izkjEHk					31
</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:" श्री भक्त कोकिल"})}>
11 + 	}kjdk&;k=k					34
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:" श्री भक्त कोकिल"})}>
12 + 	izsfe;ksa dk lekt vkSj mudk yhykfpUru		41
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:" श्री भक्त कोकिल"})}>
13 + 	;Kksiohr esa Jhd`".k dk ekr`&Lusg			44
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:" श्री भक्त कोकिल"})}>
14 + 	uV[kV dUgS;k					46
</Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:" श्री भक्त कोकिल"})}>
15 + 	cVksgh Jhjke					47
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:" श्री भक्त कोकिल"})}>
16 + 	izseksUekfnuh Jh;’kksnk				49
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:" श्री भक्त कोकिल"})}>
17 + 	iq=fo;ksfxuh JhdkS’kY;k				51

</Text>
<View style = {styles.lineStyle} />




  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:" श्री भक्त कोकिल"})}>


  18 + 	xksyksdfcgkjh dk cztkxeu				54

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:" श्री भक्त कोकिल"})}>
19 + 	lsokijk;.kk JhLokfeuh				57
</Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:" श्री भक्त कोकिल"})}>
20 + 	czt ds fojgh yksx fcpkjs				60  

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:" श्री भक्त कोकिल"})}>
21 + 	Jhtudiqj ls Jhfd’kksjhth dh fonkbZ		64

 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:" श्री भक्त कोकिल"})}>

22 + 	Jh fiz;kth dks fiz;re ds b"Vnso dk n’kZu		68

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:" श्री भक्त कोकिल"})}>
23 + 	Jh okYehfd vkJe esa fojfg.kh oSnsgh		73
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:" श्री भक्त कोकिल"})}>
24 + 	uke ladhrZu dh /kwe				88
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:" श्री भक्त कोकिल"})}>
25 + 	gfj}kj esa lkssgae dk R;kx			91
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:" श्री भक्त कोकिल"})}>
26 + 	cztkxeu						93
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:" श्री भक्त कोकिल"})}>
27 +Jhvo/kljdkj vkSj Jhcztljdkj dk e/kqj feyu	
  
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:" श्री भक्त कोकिल"})}>
28 + 	,d fe= dks ekulh lsok dk mins’k		99
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:" श्री भक्त कोकिल"})}>
29 + 	cjlkus esa				      101
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:" श्री भक्त कोकिल"})}>
30 + 	dksfdy Hkko dk izkdV~;			      104      </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:" श्री भक्त कोकिल"})}>
31 + 	;qxy ljdkj ds lans’k dk vknku&iznku	  107

    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:" श्री भक्त कोकिल"})}>
32 + 	xEHkhj izse				      121
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:" श्री भक्त कोकिल"})}>
33 + 	Hkxoku~ ds n’kZu				      133
</Text>
  <View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:" श्री भक्त कोकिल"})}>
34 + 	lgt fLFkfr				      139


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:" श्री भक्त कोकिल"})}>
35 + 	lUr feyu				      145   
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'2%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:" श्री भक्त कोकिल"})}>

  ¼d½ 	pkj izdkj ds Hkäksa dh uohu O;k[;k    153
    </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'2%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:" श्री भक्त कोकिल"})}>
¼[k½ 	Jhfiz;kth ls fiz;re dk fouksn	      157
  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'2%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:" श्री भक्त कोकिल"})}>
¼x½ 	fny dh [kkst+			      166
  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'2%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
¼?k½ 	izse izkfIr dh lqxe lk/kuk	      169
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'2%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:" श्री भक्त कोकिल"})}>
¼³½ 	f=ikf}Hkwfr			      181
</Text>
<View style = {styles.lineStyle} />




<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:" श्री भक्त कोकिल"})}>
36‐  Jhvo/k dh ;k=k				      189
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:" श्री भक्त कोकिल"})}>
37 + 	iqu% czt&;k=k				      194

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:" श्री भक्त कोकिल"})}>
38 + 	Jhjked`".k dh ,drk			      201
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:" श्री भक्त कोकिल"})}>
39 + 	xk¡o&xk¡o	 esa Hkfä xaxk dk izokg		      203   
  
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:" श्री भक्त कोकिल"})}>

¼d½ 	fojg rki ls nzfor Hkwfeij pj.k&fpUg
	vafdr				      

 
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:" श्री भक्त कोकिल"})}>
¼[k½ 	lRlax ds fu;e			211
 
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50_1,bookname:" श्री भक्त कोकिल"})}>
¼x½ 	ti lkgc esa ;qxy ljdkj	214
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50_2,bookname:" श्री भक्त कोकिल"})}>
¼?k½ 	Jh tudufUnuhtw dh d`ik ,oa okRly;  217
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:" श्री भक्त कोकिल"})}>
¼³½ 	fpUrk nwj djus dk lk/ku		222
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:" श्री भक्त कोकिल"})}>
¼p½ 	ekLVj dk eksg fuokj.k		223
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:" श्री भक्त कोकिल"})}>
¼N½ 	Hkfä ds fo?u			228
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:" श्री भक्त कोकिल"})}>
¼t½ 	ekLVj dks fnO; n’kZu		231
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'15%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:" श्री भक्त कोकिल"})}>
  	 Hkkuxzke	232
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:" श्री भक्त कोकिल"})}>
¼>½ 	uke ti dh fof/k		233
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:" श्री भक्त कोकिल"})}>
¼¥½ 	izse dk Lo:i			235
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:" श्री भक्त कोकिल"})}>
¼V½ 	Jhtkudhth dh rUe;rk		243
 
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'3%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:" श्री भक्त कोकिल"})}>
¼B½ 	djkph esa lRlax			245


 
</Text>
<View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:" श्री भक्त कोकिल"})}>
40 + 	izse&vkos’k vkSj Jhdq’k n’kZu		254

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:" श्री भक्त कोकिल"})}>
41 + 	ln~xq.kksa ds vkxkj lkbZa			257
</Text>
<View style = {styles.lineStyle} />






<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:" श्री भक्त कोकिल"})}>
42 + 	Jho`Unkou esa fuokl] lRlax vkSj vkuUn	 283

   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:" श्री भक्त कोकिल"})}>
43 + 	JhmfM+;kckck ls feyu			      297

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:" श्री भक्त कोकिल"})}>
44 + Jhfudqat izos’k		 			323

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:" श्री भक्त कोकिल"})}>
45 + 	lkbZa dh xksn esa ;qxy ljdkj		326</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: 30,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:" श्री भक्त कोकिल"})}>

fp=&lwph

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
1 + 	Lokeh Jhv[k.MkuUn ljLorh		

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
2 + 	cSjkxh fd’kksj				  7

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
3 + 	dksfdy Hkko esa eXu lkbZa			104

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
4 + 	lgt fLFkfr				138

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
5 + 	JhmfM+;k ckck th egkjkt		297

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
6 + 	lsok esa layXu lkbZa			      296

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
7 + 	lkbZa dh xksn esa ;qxy ljdkj		326

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:" श्री भक्त कोकिल"})}>
8 + 	védwV vkuUn				      329

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
