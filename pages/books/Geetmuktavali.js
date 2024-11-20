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



const uri0 = 'pdf/geetmuktavali/geet_muktavali_0_compressed.pdf';


const uri1 = 'pdf/geetmuktavali/geet_muktavali_1_15_compressed.pdf';

const uri16= 'pdf/geetmuktavali/geet_muktavali_16_compressed.pdf';
const uri17= 'pdf/geetmuktavali/geet_muktavali_17_compressed.pdf';

const uri18= 'pdf/geetmuktavali/geet_muktavali_18_compressed.pdf';
const uri19= 'pdf/geetmuktavali/geet_muktavali_19_compressed.pdf';

const uri20= 'pdf/geetmuktavali/geet_muktavali_20_compressed.pdf';
const uri21= 'pdf/geetmuktavali/geet_muktavali_21_compressed.pdf';
const uri22= 'pdf/geetmuktavali/geet_muktavali_22_compressed.pdf';
const uri23= 'pdf/geetmuktavali/geet_muktavali_23_compressed.pdf';
const uri24= 'pdf/geetmuktavali/geet_muktavali_24_compressed.pdf';
const uri25= 'pdf/geetmuktavali/geet_muktavali_25_compressed.pdf';
const uri26= 'pdf/geetmuktavali/geet_muktavali_26_compressed.pdf';
const uri27= 'pdf/geetmuktavali/geet_muktavali_27_compressed.pdf';
const uri28= 'pdf/geetmuktavali/geet_muktavali_28_compressed.pdf';
const uri29= 'pdf/geetmuktavali/geet_muktavali_29_compressed.pdf';


const uri30= 'pdf/geetmuktavali/geet_muktavali_30_compressed.pdf';
const uri31= 'pdf/geetmuktavali/geet_muktavali_31_compressed.pdf';
const uri32= 'pdf/geetmuktavali/geet_muktavali_32_compressed.pdf';
const uri33= 'pdf/geetmuktavali/geet_muktavali_33_compressed.pdf';
const uri34= 'pdf/geetmuktavali/geet_muktavali_34_compressed.pdf';
const uri35= 'pdf/geetmuktavali/geet_muktavali_35_compressed.pdf';
const uri36= 'pdf/geetmuktavali/geet_muktavali_36_compressed.pdf';
const uri37= 'pdf/geetmuktavali/geet_muktavali_37_compressed.pdf';
const uri38= 'pdf/geetmuktavali/geet_muktavali_38_compressed.pdf';
const uri39= 'pdf/geetmuktavali/geet_muktavali_39_compressed.pdf';
const uri40= 'pdf/geetmuktavali/geet_muktavali_40_compressed.pdf';

const uri41= 'pdf/geetmuktavali/geet_muktavali_41_compressed.pdf';
const uri42= 'pdf/geetmuktavali/geet_muktavali_42_compressed.pdf';
const uri43= 'pdf/geetmuktavali/geet_muktavali_43_compressed.pdf';
const uri44= 'pdf/geetmuktavali/geet_muktavali_44_compressed.pdf';
const uri45= 'pdf/geetmuktavali/geet_muktavali_45_compressed.pdf';
const uri46= 'pdf/geetmuktavali/geet_muktavali_46_compressed.pdf';
const uri47= 'pdf/geetmuktavali/geet_muktavali_47_compressed.pdf';
const uri48= 'pdf/geetmuktavali/geet_muktavali_48_compressed.pdf';
const uri49= 'pdf/geetmuktavali/geet_muktavali_49_compressed.pdf';
const uri50= 'pdf/geetmuktavali/geet_muktavali_50_compressed.pdf';

const uri51= 'pdf/geetmuktavali/geet_muktavali_51_compressed.pdf';
const uri52= 'pdf/geetmuktavali/geet_muktavali_52_compressed.pdf';
const uri53= 'pdf/geetmuktavali/geet_muktavali_53_compressed.pdf';
const uri54= 'pdf/geetmuktavali/geet_muktavali_54_compressed.pdf';
const uri55= 'pdf/geetmuktavali/geet_muktavali_55_compressed.pdf';
const uri56= 'pdf/geetmuktavali/geet_muktavali_56_compressed.pdf';
const uri57= 'pdf/geetmuktavali/geet_muktavali_57_compressed.pdf';
const uri58= 'pdf/geetmuktavali/geet_muktavali_58_compressed.pdf';
const uri59= 'pdf/geetmuktavali/geet_muktavali_59_compressed.pdf';
const uri60= 'pdf/geetmuktavali/geet_muktavali_60_compressed.pdf';

const uri61= 'pdf/geetmuktavali/geet_muktavali_61_compressed.pdf';
const uri62= 'pdf/geetmuktavali/geet_muktavali_62_compressed.pdf';
const uri63= 'pdf/geetmuktavali/geet_muktavali_63_compressed.pdf';
const uri64= 'pdf/geetmuktavali/geet_muktavali_64_compressed.pdf';
const uri65= 'pdf/geetmuktavali/geet_muktavali_65_compressed.pdf';
const uri66= 'pdf/geetmuktavali/geet_muktavali_66_compressed.pdf';
const uri67= 'pdf/geetmuktavali/geet_muktavali_67_compressed.pdf';
const uri68= 'pdf/geetmuktavali/geet_muktavali_68_compressed.pdf';
const uri69= 'pdf/geetmuktavali/geet_muktavali_69_compressed.pdf';
const uri70= 'pdf/geetmuktavali/geet_muktavali_70_compressed.pdf';

const uri71= 'pdf/geetmuktavali/geet_muktavali_71_compressed.pdf';
const uri72= 'pdf/geetmuktavali/geet_muktavali_72_compressed.pdf';
const uri73= 'pdf/geetmuktavali/geet_muktavali_73_compressed.pdf';
const uri74= 'pdf/geetmuktavali/geet_muktavali_74_compressed.pdf';
const uri75= 'pdf/geetmuktavali/geet_muktavali_75_compressed.pdf';
const uri76= 'pdf/geetmuktavali/geet_muktavali_76_compressed.pdf';
const uri77= 'pdf/geetmuktavali/geet_muktavali_77_compressed.pdf';
const uri78= 'pdf/geetmuktavali/geet_muktavali_78_compressed.pdf';
const uri79= 'pdf/geetmuktavali/geet_muktavali_79_compressed.pdf';
const uri80= 'pdf/geetmuktavali/geet_muktavali_80_compressed.pdf';




const uri81= 'pdf/geetmuktavali/geet_muktavali_81_compressed.pdf';
const uri82= 'pdf/geetmuktavali/geet_muktavali_82_compressed.pdf';
const uri83= 'pdf/geetmuktavali/geet_muktavali_83_compressed.pdf';
const uri84= 'pdf/geetmuktavali/geet_muktavali_84_compressed.pdf';
const uri85= 'pdf/geetmuktavali/geet_muktavali_85_compressed.pdf';
const uri86= 'pdf/geetmuktavali/geet_muktavali_86_compressed.pdf';
const uri87= 'pdf/geetmuktavali/geet_muktavali_87_compressed.pdf';


export default function Geetmuktavali({ navigation }) {
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
xhr eqDrkoyh</Text>


<Text style={{fontSize:20,textAlign:'justify',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

vo/k ,sa c`t ljdkj ,sa lkbZa lkfgc th efgek
   ,sa yhykmfu ts feBfu xhrfu ,sa dFkkmfu tks 
   xqynLrks] feBs ckck ts Lusg] lEHkkj] efgek ,sa
	vk’kh’k ts xhrfu ,sa infu lesr



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
d`ik izlkn</Text>

 <View style = {styles.lineStyle} />




 <Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:'Geet Manjusha (Mangal Kamna)'})}>
 1 &lkbZa lkfgc efgek
</Text>




<View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼d½ efgek in xhr					</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"गीत मुक्तावली"})}>
1&15	in						1
  

</Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"गीत मुक्तावली"})}>
16&	vkbZ xqj iwf.kZek I;kjh				5




  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"गीत मुक्तावली"})}>
17&fp# thoks izk.k izhre				    6
</Text>
<View style = {styles.lineStyle} />




  <Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"गीत मुक्तावली"})}>
  18&tS tS lkbZa poka tS tS lkbZa				    6

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"गीत मुक्तावली"})}>
19&thm 'khy fla/kq lkbZa				    7
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"गीत मुक्तावली"})}>
20&rwa uhag tks ukxj vka				    8


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"गीत मुक्तावली"})}>
21&rogka tks tflM+ks tx+ [kka				    9

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"गीत मुक्तावली"})}>
22&uke tk nkrkj lkbZa				   10
    
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"गीत मुक्तावली"})}>
23&ihjh ehjh c+bZ ekf.k;fe				   11
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"गीत मुक्तावली"})}>
24&I;kjs fl;kjke ts Lusg esa				   12
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"गीत मुक्तावली"})}>
25&izk.k ukFk izk.k thou				   12
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"गीत मुक्तावली"})}>
26&izk.kfu I;kjks izk.kfu I;kjks				   13
   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"गीत मुक्तावली"})}>
27&ckadh vnk ckcy 'ksj th				   13
  
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"गीत मुक्तावली"})}>
28&egjckuq eqafgtks lfrxq#				   14   
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"गीत मुक्तावली"})}>

29&feBs lkbZa v tks lkSHkkx+q				   15
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"गीत मुक्तावली"})}>

30&eqafgtk lkbZa lkfgc lq[kdank			   16
   </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"गीत मुक्तावली"})}>

31&jl izse esa fHkuk us.k rqafgtk			   16
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"गीत मुक्तावली"})}>

32&lkbZa fl;kjke ts lusg esa				   18

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"गीत मुक्तावली"})}>
33&lfrxqj lka ewa usgq yx+k;ks				   18  </Text>
  <View style = {styles.lineStyle} />

<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼[k½ Lusg xhr		</Text>
<View style = {styles.lineStyle} />










<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"गीत मुक्तावली"})}>
34&dfj gk.ks ewa rs D;klq				19


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri35,bookname:"गीत मुक्तावली"})}>
35&c+q/kh iz’u Jh [kf.M c+kfy tks			20

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri36,bookname:"गीत मुक्तावली"})}>
36&&lt;jh d`ik esa eefrf.k ekrk				21
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri37,bookname:"गीत मुक्तावली"})}>
37&vt+q dk fey.k th okfx+M+h			22




</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri38,bookname:"गीत मुक्तावली"})}>
38&vUnj vk’k bgkbZ vk				23
   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri39,bookname:"गीत मुक्तावली"})}>
39&vkm ukFk rwa d#.kk djs				24
  
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri40,bookname:"गीत मुक्तावली"})}>
40&vkm eqafgtk lkbZa izk.k I;kjk			25

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri41,bookname:"गीत मुक्तावली"})}>
41&vkm izk.k thou vkm				25
 </Text>
<View style = {styles.lineStyle} />







<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri42,bookname:"गीत मुक्तावली"})}>
42&bgk vfHkyk"k vk iy Hkfj			26

   
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri43,bookname:"गीत मुक्तावली"})}>
43&vks iou lusgks eqafgtks				26
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri44,bookname:"गीत मुक्तावली"})}>
44&vks 'khy fla/kq lkbZa				27

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri45,bookname:"गीत मुक्तावली"})}>
45&dafg [ks c+q/kk;ka Hksu#				28
</Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri46,bookname:"गीत मुक्तावली"})}>
46&fp# fp# thoks izk.k I;kjs				29

   

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri47,bookname:"गीत मुक्तावली"})}>
47&?k.kh I;kl yx+h vk				29
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri48,bookname:"गीत मुक्तावली"})}>
48&rkslka yxfu yxh vkgs				30
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri49,bookname:"गीत मुक्तावली"})}>
49&rkslka yxfu yx+kbZ				31
</Text>
<View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri50,bookname:"गीत मुक्तावली"})}>
50&Fkdk jksbZ us.k fuek.kk				32

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri51,bookname:"गीत मुक्तावली"})}>
51&n;k fla/kq fnfycj tks				32

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri52,bookname:"गीत मुक्तावली"})}>
52&nnZfu esa Fkh fnfyM+h nhokuh			33

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri53,bookname:"गीत मुक्तावली"})}>
53&izk.k I;kjs fny Fkh lEHkkjs				34
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri54,bookname:"गीत मुक्तावली"})}>
54&ewa [ks rqafgts I;kj tks				34
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri55,bookname:"गीत मुक्तावली"})}>
55&ewa [ks rogka th vk’k vk				35
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri56,bookname:"गीत मुक्तावली"})}>
56&ewa [ks vkljks rqafgtks /k.kh				36
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri57,bookname:"गीत मुक्तावली"})}>
57&fofjgq eqafgts Hkkx+ esa				36  </Text>
<View style = {styles.lineStyle} />




<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼x½ fou; xhr	</Text>
<View style = {styles.lineStyle} />









<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri58,bookname:"गीत मुक्तावली"})}>
58&vkfg;ka nklh eka nj th				37


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri59,bookname:"गीत मुक्तावली"})}>
59&ewa izHkw rqafgth lnka pj.k 				38

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri60,bookname:"गीत मुक्तावली"})}>
60&Jh xq# d`ik th feBh ghjM+h			39
  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri61,bookname:"गीत मुक्तावली"})}>
61&oS| jkt eqafgtk lfrxqj ckck			40  </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼³½ vk’kh’k xhr	</Text>
<View style = {styles.lineStyle} />







<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri62,bookname:"गीत मुक्तावली"})}>
62&lkbZa lkfgc lar th lnka				41



  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri63,bookname:"गीत मुक्तावली"})}>
63&jgks lnka izlUu j?kqohj ts				42
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri64,bookname:"गीत मुक्तावली"})}>
64&vkbZ eka vkfg;ka lkbZa izk.k				42</Text>
<View style = {styles.lineStyle} />





<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼p½ vfHkyk"k xhr</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri65,bookname:"गीत मुक्तावली"})}>
65&g"kZ gqykl lka upwa ,sa x+k;wa				43
  </Text>
<View style = {styles.lineStyle} />




<Text style={{fontSize:28,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:'Geet Manjusha (Mangal Kamna)'})}>
2& Jh  d`".k  dFkk</Text>

<View style = {styles.lineStyle} />


<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼p½ Jh d`".k tUe Lrqfr</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri66,bookname:"गीत मुक्तावली"})}>
66&Hk, izxV xksikyk					44
  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼p½ Jh c`t ljdkj tUe Lrqfr</Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri67,bookname:"गीत मुक्तावली"})}>
67&izxVh Jh jk/kk :i vxk/kk				45

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri68,bookname:"गीत मुक्तावली"})}>
68&¼x½Jh uan xke&jl /kke ¼in½			46
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri69,bookname:"गीत मुक्तावली"})}>
69&¼?k½;k=k c`t Hkwfe th gk.ks				53 </Text>
<View style = {styles.lineStyle} />



<Text style={{fontSize:28,textAlign:'center', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0_1,bookname:'Geet Manjusha (Mangal Kamna)'})}>
3& Jh  jke  dFkk</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼d½ yhyk xhr</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri70,bookname:"गीत मुक्तावली"})}>
70&lEca/kh tho ds					55

 </Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri71,bookname:"गीत मुक्तावली"})}>
71&tS gks tS gks tS gks ¼vfgY;k Lrqfr½			55
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri72,bookname:"गीत मुक्तावली"})}>
72&tx+ iwT; Jh jke eS;k				58
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri73,bookname:"गीत मुक्तावली"})}>

73&eqfu lkFk pys fefFkyk				61
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri74,bookname:"गीत मुक्तावली"})}>
74&eqfu us dgk I;kjs jke				64
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri75,bookname:"गीत मुक्तावली"})}>
75&¼[k½ ekrk dh f’k&#123;kk ¼ok.kh½			67

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri76,bookname:"गीत मुक्तावली"})}>
76&¼x½ Jh vn~Hkqr jkek;.k ¼ok.kh½			74

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri77,bookname:"गीत मुक्तावली"})}>
77&¼?k½ cu okfl;qfu lusg ¼ok.kh½			90

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri78,bookname:"गीत मुक्तावली"})}>
78&¼³½ oru oj.kq ¼ok.kh½				95


  </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼p½ 'kcjh Lusg </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri79,bookname:"गीत मुक्तावली"})}>
79&yksd ykt Nn+s 'kcjh				  118

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri80,bookname:"गीत मुक्तावली"})}>
80&ik, 'kjf.k lfrxqj lkfgc th			  119
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri81,bookname:"गीत मुक्तावली"})}>
81&ik, vkKk xqjfu th				  120
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri82,bookname:"गीत मुक्तावली"})}>
82&bZanks vt+q jkeq gjh					  121
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri83,bookname:"गीत मुक्तावली"})}>
83&'kcjh v ts ikou izse rs				  122
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri84,bookname:"गीत मुक्तावली"})}>
84&vk;ks ?kj eqafgts vk				  123

</Text>

<View style = {styles.lineStyle} />
<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼N½ cu lekpkj  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri85,bookname:"गीत मुक्तावली"})}>
85&lquks ekrq iaFkdh					  124
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize:28,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
¼t½ fofo/k xhr  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri86,bookname:"गीत मुक्तावली"})}>
86&eqafgts eu esa vk jke				  128

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri87,bookname:"गीत मुक्तावली"})}>
87&j?kqukFk ds lusgh HkksykukFk				  129</Text>
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
