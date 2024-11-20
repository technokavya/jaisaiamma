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



const uri1 = 'pdf/naammala2/01.pdf';
const uri2 = 'pdf/naammala2/02.pdf';
const uri3 = 'pdf/naammala2/03.pdf';
const uri4 = 'pdf/naammala2/04.pdf';
const uri5 = 'pdf/naammala2/05.pdf';





export default function Naampancha({ navigation }) {
  const fsize=scaleFontSize(50);
  const [dynamicFontSize, setFontSize] = useState(fsize); // Initial font size

  //const dynamicFontSize = scaleFontSize(50);
  const fontname='Kruti-Dev';
  let [fontsLoaded]=useFonts({
    'Kruti-Dev':require('./../../assets/fonts/Kruti-Dev-012.ttf'),
    'K105':require('./../../assets/fonts/K105.ttf'),
    'Kd20':require('./../../assets/fonts/KRDEV020.ttf'),
    'Kd40':require('./../../assets/fonts/K40.ttf'),
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
<Text style={{fontSize:50,textAlign:'center',marginTop:10,fontFamily:'Kruti-Dev680',top: 0}}>
uke iapke`r
</Text>



<View style={{textAlign:'center',alignContent:"center",marginLeft:'25%'}}>
    <Image
        source={require('./../../assets/images/namrit.png')}
        style={{alignContent:"center"}}
    
/>
</View>
 
    


      <Text style={{fontSize:25,textAlign:'center',marginTop:10,fontFamily:'Kd40',top: 0}}>
      lq[k fuokl lRlax e.My
      </Text>
      <Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0}}>
lkbZa lkfgc tUeksRlo
</Text>
<Text style={{fontSize:18,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0}}>
la0 2045& lu~ 1988
</Text>
<Text style={{fontSize:25,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0}}>
Jho`Unkou
</Text>
<Text style={{fontSize:18,textAlign:'center',marginTop:0,fontFamily:'Kruti-Dev012',top: 0}}>

Ûeqnzd%
Jh gjhuke izsl] Jh o`Unkou @ ekpZ 88
</Text>









      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >


      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      vuqdze
</Text>
<View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri1,bookname:'Naam Panchamrut'})}>
Jh jke uke ekyk %   1
 </Text>

 <View style = {styles.lineStyle} />



<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"Naam Panchamrut"})}>
Jh d`".k uke ekyk %7

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"Naam Panchamrut"})}>
Jh c`t ljdkj efgekekyk %13

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"Naam Panchamrut"})}>
lkbZa lkfgc ukeekyk % 19

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"Naam Panchamrut"})}>
lr~xqj ukud uke ekyk    % 25
</Text>
<View style = {styles.lineStyle} />


  </View>


    </View>
    
    
    
    
     </ScrollView>


     <View style={{backgroundColor:'#e5e5e5'}}>
     <View style={styles.AudioPLayer}>
             
     <Text style={{fontSize: 30,textAlign:'justify', marginTop:5, marginLeft:'0%', fontFamily:'K246',color:'red'}} >
     AA t; lkabZ vEek lnk [kqf’k AA </Text>
     

       </View>
        
             </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
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
