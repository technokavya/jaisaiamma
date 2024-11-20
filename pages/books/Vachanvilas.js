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



const uri1 = 'pdf/vachanvilas/vachan_vilas_01_compressed.pdf';
const uri2 = 'pdf/vachanvilas/vachan_vilas_02_compressed.pdf';
const uri3 = 'pdf/vachanvilas/vachan_vilas_03_compressed.pdf';
const uri4 = 'pdf/vachanvilas/vachan_vilas_04_compressed.pdf';
const uri5 = 'pdf/vachanvilas/vachan_vilas_05_compressed.pdf';
const uri6 = 'pdf/vachanvilas/vachan_vilas_06_compressed.pdf';

const uri7_1 = 'pdf/vachanvilas/vachan_vilas_07_01_compressed.pdf';
const uri7_2 = 'pdf/vachanvilas/vachan_vilas_07_02_compressed.pdf';
const uri7_3 = 'pdf/vachanvilas/vachan_vilas_07_03_compressed.pdf';
const uri7_4 = 'pdf/vachanvilas/vachan_vilas_07_04_compressed.pdf';
const uri7_5 = 'pdf/vachanvilas/vachan_vilas_07_05_compressed.pdf';
const uri7_6 = 'pdf/vachanvilas/vachan_vilas_07_06_compressed.pdf';
const uri7_7 = 'pdf/vachanvilas/vachan_vilas_07_07_compressed.pdf';
const uri7_8 = 'pdf/vachanvilas/vachan_vilas_07_08_compressed.pdf';
const uri7_9 = 'pdf/vachanvilas/vachan_vilas_07_09_compressed.pdf';
const uri7_10 = 'pdf/vachanvilas/vachan_vilas_07_10_compressed.pdf';

const uri7_11 = 'pdf/vachanvilas/vachan_vilas_07_11_compressed.pdf';
const uri7_12 = 'pdf/vachanvilas/vachan_vilas_07_12_compressed.pdf';
const uri7_13 = 'pdf/vachanvilas/vachan_vilas_07_13_compressed.pdf';
const uri7_14 = 'pdf/vachanvilas/vachan_vilas_07_14_compressed.pdf';
const uri7_15 = 'pdf/vachanvilas/vachan_vilas_07_15_compressed.pdf';
const uri7_16 = 'pdf/vachanvilas/vachan_vilas_07_16_compressed.pdf';
const uri7_17 = 'pdf/vachanvilas/vachan_vilas_07_17_compressed.pdf';
const uri7_18 = 'pdf/vachanvilas/vachan_vilas_07_18_compressed.pdf';
const uri7_19 = 'pdf/vachanvilas/vachan_vilas_07_19_compressed.pdf';
const uri7_20 = 'pdf/vachanvilas/vachan_vilas_07_20_compressed.pdf';
const uri7_21 = 'pdf/vachanvilas/vachan_vilas_07_21_compressed.pdf';
const uri7_22 = 'pdf/vachanvilas/vachan_vilas_07_22_compressed.pdf';
const uri7_23 = 'pdf/vachanvilas/vachan_vilas_07_23_compressed.pdf';
const uri7_24 = 'pdf/vachanvilas/vachan_vilas_07_24_compressed.pdf';
const uri7_25 = 'pdf/vachanvilas/vachan_vilas_07_25_compressed.pdf';


const uri8 = 'pdf/vachanvilas/vachan_vilas_08_compressed.pdf';
const uri9 = 'pdf/vachanvilas/vachan_vilas_09_compressed.pdf';





export default function Vachanvilas({ navigation }) {
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

<Text style={{fontSize:40,textAlign:'center',marginTop:20,fontFamily:'K246',top: 0}}>
Jh lkbZa lkfgc 
Tkk
opu foykl
</Text>


<Text style={{fontSize:20,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>

lq[k fuokl e.My] Jh o`Unkou /kke




</Text>

<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
izdk'kd %
Lokeh Jhv[k.MkuUn ljLorh

</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
tUeksRlo 2055&1998


</Text>

      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      rr~fdjks
</Text>



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manjusha (Mangal Kamna)'})}>
ok/kk;wa</Text>

 <View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:"श्री साईं साहिब वचन विलास"})}>
1 +	Jh xksfoan xhrk 					 1</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"श्री साईं साहिब वचन विलास"})}>
2 + 	Jh Qjhn ok.kh HkkokFkZ				10</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"श्री साईं साहिब वचन विलास"})}>
3 +	Jh izHkwv tk fuokl LFkku 			18

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"श्री साईं साहिब वचन विलास"})}>
4 +	o"kkZ ,sa 'kjn _rq o.kZuq 				29

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"श्री साईं साहिब वचन विलास"})}>
5 +	Jh dkS’kY;k&lquSuk lEokn				37

</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"श्री साईं साहिब वचन विलास"})}>
6 +	ek/kq;Z jl fl)kUr				47
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  >
7 +	Jh lfrxqj efgek iphlh				55
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_1,bookname:"श्री साईं साहिब वचन विलास"})}>

1&lr~ mins’k rogka tk lkbZa th; izk.kfu [ks vkfgfu 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_2,bookname:"श्री साईं साहिब वचन विलास"})}>
2&fnfynkj fnfy tklkbZa vkfg;ka rqfgath nhokuhA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_3,bookname:"श्री साईं साहिब वचन विलास"})}>
3&gyq rwa fnfyM+h lkfgc pj.kfu tsdks tx+ vk/kk# 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_4,bookname:"श्री साईं साहिब वचन विलास"})}>
4&lkbZa d#.kk lkxj vkm d`ik djsA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_5,bookname:"श्री साईं साहिब वचन विलास"})}>
5&xjhcfu tk lpk lkFkh xjhcfu th nqvk ek.khA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_6,bookname:"श्री साईं साहिब वचन विलास"})}>
6&lnka ft;ans lnka ft;ans lkbZa lkfgc lnka ft;ansA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_7,bookname:"श्री साईं साहिब वचन विलास"})}>
7&thm thm vks lkb;ka] rqfgatk xq.k x+kb;kaAA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_8,bookname:"श्री साईं साहिब वचन विलास"})}>
8&Ekqfgatk lkbZa lt+.k lpk usg jru 'kky ft;ans 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_9,bookname:"श्री साईं साहिब वचन विलास"})}>
9&lkbZa izse iqt+kjh eqfgatks lkbZa izse iqt+kjhA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_10,bookname:"श्री साईं साहिब वचन विलास"})}>
10&feBk lkfgc rqfgats nj rs eka iksfjfg;fr Fkh 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_11,bookname:"श्री साईं साहिब वचन विलास"})}>
11&tS tS lc+k>k lkfgc tS tS n;ky nkuhA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_12,bookname:"श्री साईं साहिब वचन विलास"})}>
12&Tkfgath d`ik esa tx+ tks dY;k.kq vk lek;ksA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_13,bookname:"श्री साईं साहिब वचन विलास"})}>
13&Rkogka tks Fkh tflM+ks pokaA
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_14,bookname:"श्री साईं साहिब वचन विलास"})}>
14&Ekqfgatk lkbZa lkfgc lq[kdkjh lph lkfgch ek.khA
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_15,bookname:"श्री साईं साहिब वचन विलास"})}>
	15&lnka 'kkuq rqfgatks vk Åpks I;kjkA
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_16,bookname:"श्री साईं साहिब वचन विलास"})}>
  16&tS lfrxq# lkfgc I;kjk  tS v/ke m/kkj.k gkjk
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_17,bookname:"श्री साईं साहिब वचन विलास"})}>
	17& ft;sa lusgh lkfgc I;kjkA vkuUn dUn tx+r 
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_18,bookname:"श्री साईं साहिब वचन विलास"})}>
	18&flf?kM+ks vkm lkbZa ify ify iqdkfj;kaA
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_19,bookname:"श्री साईं साहिब वचन विलास"})}>
		19&lnka th;sa lkfgc lq[knkbZA furq ek.ksfe eaxy 
      </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_20,bookname:"श्री साईं साहिब वचन विलास"})}>
20&nkuh f’kjksef.k lkfgc lkbZaA vfopyq jkft+M+ks ek.kh 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_21,bookname:"श्री साईं साहिब वचन विलास"})}>
21&Rkqqfgath efgek vijEikj /k.kh furq osn iqjk.k Hkh 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_22,bookname:"श्री साईं साहिब वचन विलास"})}>
	22&vks lfrxq# I;kjk flU/kqM+h v tk flrkjkA
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_23,bookname:"श्री साईं साहिब वचन विलास"})}>
	23&lkbZa lkfgc xq.k x+k;ka x+k;kaA
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_24,bookname:"श्री साईं साहिब वचन विलास"})}>
	  24&lfrxqj lka ewa usgq yx+k;ks vkA
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'5%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_25,bookname:"श्री साईं साहिब वचन विलास"})}>
	25&vk’kh’k fiz; lkbZa th vk xksfn I;kjhA



  </Text>
<View style = {styles.lineStyle} />







<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"श्री साईं साहिब वचन विलास"})}>
8 + 	jl th jkg					76
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"श्री साईं साहिब वचन विलास"})}>

9 + 	vk’kh’k						83</Text>
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
