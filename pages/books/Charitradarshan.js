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



const uri1 = 'pdf/charitradarshan/sscd_01_compressed.pdf';
const uri2 = 'pdf/charitradarshan/sscd_02_compressed.pdf';
const uri3 = 'pdf/charitradarshan/sscd_03_compressed.pdf';
const uri4 = 'pdf/charitradarshan/sscd_04_compressed.pdf';
const uri5 = 'pdf/charitradarshan/sscd_05_compressed.pdf';
const uri6 = 'pdf/charitradarshan/sscd_06_compressed.pdf';
const uri7 = 'pdf/charitradarshan/sscd_07_compressed.pdf';

const uri7_1 = 'pdf/charitradarshan/sscd_08_compressed.pdf';
const uri7_2 = 'pdf/charitradarshan/sscd_09_compressed.pdf';
const uri7_3 = 'pdf/charitradarshan/sscd_10_compressed.pdf';
const uri7_4 = 'pdf/charitradarshan/sscd_11_compressed.pdf';
const uri7_5 = 'pdf/charitradarshan/sscd_12_compressed.pdf';
const uri7_6 = 'pdf/charitradarshan/sscd_13_compressed.pdf';
const uri7_7 = 'pdf/charitradarshan/sscd_14_compressed.pdf';
const uri7_8 = 'pdf/charitradarshan/sscd_15_compressed.pdf';
const uri7_9 = 'pdf/charitradarshan/sscd_16_compressed.pdf';
const uri7_10 = 'pdf/charitradarshan/sscd_17_compressed.pdf';

const uri7_11 = 'pdf/charitradarshan/sscd_18_compressed.pdf';
const uri7_12 = 'pdf/charitradarshan/sscd_19_compressed.pdf';
const uri7_13 = 'pdf/charitradarshan/sscd_20_compressed.pdf';
const uri7_14 = 'pdf/charitradarshan/sscd_21_compressed.pdf';





export default function Charitradarshan({ navigation }) {
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
      <Text style={{fontSize:20,textAlign:'center',marginTop:20,fontFamily:'K246',top: 0}}>
      tS lkbZa veka

</Text>
<View style={{height:450,width:350,alignContent:'center',paddingLeft:'15%'}}>
<Image source={require('../../assets/images/saiji2.png')} 
                    style={{height:450,width:'100%'}}/>
                    </View>
<Text style={{fontSize:40,textAlign:'center',marginTop:20,fontFamily:'K246',top: 0}}>
Jh lkbZa lkfgc pfj= n’kZu
</Text>

<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,paddingLeft:10}}>

Ikjk izse ewjfr feBh lkabZ lkfgc lq[k/kke

</Text>

<Text style={{fontSize:30,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0,paddingLeft:10}}>


Okls lnk us.kfu esa yhyk ;qxy yyke

</Text>



      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >


      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      vuqdze
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:'Geet Manjusha (Mangal Kamna)'})}>
ije iwT; egkjktfu tk e/kqj Hkko </Text>

 <View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
Jh lkbZa lkfgc pfj= lq/kk</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
rhFkZ jVu</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
lUr feyuq

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
Jh o`Unkou fuoklq
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
lsod oRly loZK lkbZa
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
vuwie ,sa vykSfdd leq>kf.k;wa</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_1,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
Kkuh ,sa Hkä</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_2,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>

tho th iqdkj ,sa Hkfä  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_3,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
fu"dke Hkfä</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_4,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
lRlax tk fu;e</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_5,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
pUnzek ,sa izhreq</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_6,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
dehZ] Kkuh ,sa Hkä</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_7,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
Hkfä tk fof?ku</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_8,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
izse tks Lo:i</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_9,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
lkbZa lkfgc Lrqfr</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_10,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
fefB;wa yksfy;wa</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_11,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
Nyk vk’kh’k</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_12,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
e/kqj vfHkyk"kkÅa</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_13,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
pj.k dey psjh</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7_14,bookname:"श्री साईं साहिब  चरित्र दर्शन "})}>
lHkq dqN lkbZa lsok esa</Text>
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
const styles1 = StyleSheet.create({
  shadowProp: {
    shadowColor: 'red',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  boximage:{
    width:'100%',height:'100%', borderRadius: 8,
  },
  logoimage:{
       width:'30%',height:'40%',position:'absolute',marginVertical:30,marginLeft:'35%',opacity:0.7,
  },
});
