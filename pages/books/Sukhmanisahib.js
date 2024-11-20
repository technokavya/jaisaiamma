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



const uri1 = 'pdf/sukhmanisahib/1_compressed.pdf';
const uri2 = 'pdf/sukhmanisahib/2_compressed.pdf';
const uri3 = 'pdf/sukhmanisahib/3_compressed.pdf';
const uri4 = 'pdf/sukhmanisahib/4_compressed.pdf';
const uri5 = 'pdf/sukhmanisahib/5_compressed.pdf';
const uri6 = 'pdf/sukhmanisahib/6_compressed.pdf';
const uri7 = 'pdf/sukhmanisahib/7_compressed.pdf';

const uri8 = 'pdf/sukhmanisahib/8_compressed.pdf';
const uri9 = 'pdf/sukhmanisahib/9_compressed.pdf';
const uri10 = 'pdf/sukhmanisahib/10_compressed.pdf';
const uri11 = 'pdf/sukhmanisahib/11_compressed.pdf';
const uri12 = 'pdf/sukhmanisahib/12_compressed.pdf';
const uri13 = 'pdf/sukhmanisahib/13_compressed.pdf';
const uri14 = 'pdf/sukhmanisahib/14_compressed.pdf';
const uri15 = 'pdf/sukhmanisahib/15_compressed.pdf';
const uri16 = 'pdf/sukhmanisahib/16_compressed.pdf';
const uri17 = 'pdf/sukhmanisahib/17_compressed.pdf';
const uri18= 'pdf/sukhmanisahib/18_compressed.pdf';
const uri19 = 'pdf/sukhmanisahib/19_compressed.pdf';
const uri20 = 'pdf/sukhmanisahib/20_compressed.pdf';
const uri21 = 'pdf/sukhmanisahib/21_compressed.pdf';
const uri22 = 'pdf/sukhmanisahib/22_compressed.pdf';
const uri23 = 'pdf/sukhmanisahib/23_compressed.pdf';
const uri24 = 'pdf/sukhmanisahib/24_compressed.pdf';





export default function Sukhmanisahib({ navigation }) {
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
<View style={{height:450,width:'100%',alignContent:'center',paddingLeft:'0%'}}>
<Image source={require('../../assets/images/10guru.jpg')} 
                    style={{height:450,width:'100%'}}/>
                    </View>
<Text style={{fontSize:40,textAlign:'center',marginTop:20,fontFamily:'K246',top: 0}}>
Jh lq[keuh lkfgc
</Text>




      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >


<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri1,bookname:'श्री सुखमनी साहिब   (अष्टपदी 1)'})}>
असटपदी  1 </Text>

 <View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri2,bookname:"श्री सुखमनी साहिब   (अष्टपदी 2 ) "})}>
असटपदी 2 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri3,bookname:"श्री सुखमनी साहिब   (अष्टपदी 3)"})}>
असटपदी 3 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri4,bookname:"श्री सुखमनी साहिब   (अष्टपदी 4)"})}>
असटपदी 4

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri5,bookname:"श्री सुखमनी साहिब   (अष्टपदी 5)"})}>
असटपदी 5 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri6,bookname:"श्री सुखमनी साहिब   (अष्टपदी 6)"})}>
असटपदी 6
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri7,bookname:"श्री सुखमनी साहिब   (अष्टपदी 7)"})}>
असटपदी 7</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri8,bookname:"श्री सुखमनी साहिब   (अष्टपदी 8)"})}>
असटपदी 8</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri9,bookname:"श्री सुखमनी साहिब   (अष्टपदी 9)"})}>

असटपदी 9 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri10,bookname:"श्री सुखमनी साहिब   (अष्टपदी 10)"})}>
असटपदी 10</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri11,bookname:"श्री सुखमनी साहिब   (अष्टपदी 11)"})}>
असटपदी  11</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri12,bookname:"श्री सुखमनी साहिब   (अष्टपदी 12)"})}>
असटपदी 12 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri13,bookname:"श्री सुखमनी साहिब   (अष्टपदी 13)"})}>
असटपदी 13</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri14,bookname:"श्री सुखमनी साहिब   (अष्टपदी 14)"})}>
असटपदी 14</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri15,bookname:"श्री सुखमनी साहिब   (अष्टपदी 15)"})}>
असटपदी 15</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri16,bookname:"श्री सुखमनी साहिब   (अष्टपदी 16)"})}>
असटपदी 16</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri17,bookname:"श्री सुखमनी साहिब   (अष्टपदी 17)"})}>
असटपदी 17</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri18,bookname:"श्री सुखमनी साहिब   (अष्टपदी 18)"})}>
असटपदी 18</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri19,bookname:"श्री सुखमनी साहिब   (अष्टपदी 19)"})}>
असटपदी 19</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri20,bookname:"श्री सुखमनी साहिब   (अष्टपदी 20)"})}>
असटपदी 20 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri21,bookname:"श्री सुखमनी साहिब   (अष्टपदी 21)"})}>
असटपदी 21</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri22,bookname:"श्री सुखमनी साहिब   (अष्टपदी 22)"})}>
असटपदी 22</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri23,bookname:"श्री सुखमनी साहिब   (अष्टपदी 23 )"})}>
असटपदी 23</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview2',{pdfname:uri24,bookname:"श्री सुखमनी साहिब   (अष्टपदी 24)"})}>
असटपदी 24</Text>
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
