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
const uri0 = 'pdf/satguru2/satguru2_0_compressed.pdf';



const uri2 = 'pdf/satguru2/satguru2_01_compressed.pdf';
const uri3 = 'pdf/satguru2/satguru2_02_compressed.pdf';
const uri4 = 'pdf/satguru2/satguru2_03_compressed.pdf';
const uri5 = 'pdf/satguru2/satguru2_04_compressed.pdf';
const uri6 = 'pdf/satguru2/satguru2_05_compressed.pdf';
const uri7 = 'pdf/satguru2/satguru2_06_compressed.pdf';

const uri8 = 'pdf/satguru2/satguru2_07_compressed.pdf';
const uri9 = 'pdf/satguru2/satguru2_08_compressed.pdf';
const uri10 = 'pdf/satguru2/satguru2_09_compressed.pdf';
const uri11 = 'pdf/satguru2/satguru2_10_compressed.pdf';
const uri12 = 'pdf/satguru2/satguru2_11_compressed.pdf';
const uri13 = 'pdf/satguru2/satguru2_12_compressed.pdf';
const uri14 = 'pdf/satguru2/satguru2_13_compressed.pdf';
const uri15 = 'pdf/satguru2/satguru2_14_compressed.pdf';
const uri16 = 'pdf/satguru2/satguru2_15_compressed.pdf';
const uri17 = 'pdf/satguru2/satguru2_16_compressed.pdf';
const uri18 = 'pdf/satguru2/satguru2_17_compressed.pdf';
const uri19 = 'pdf/satguru2/satguru2_18_compressed.pdf';
const uri20= 'pdf/satguru2/satguru2_19_compressed.pdf';
const uri21 = 'pdf/satguru2/satguru2_20_compressed.pdf';
const uri22 = 'pdf/satguru2/satguru2_21_compressed.pdf';
const uri23 = 'pdf/satguru2/satguru2_22_compressed.pdf';
const uri24 = 'pdf/satguru2/satguru2_23_compressed.pdf';
const uri25 = 'pdf/satguru2/satguru2_24_compressed.pdf';
const uri26 = 'pdf/satguru2/satguru2_25_compressed.pdf';
const uri27 = 'pdf/satguru2/satguru2_26_compressed.pdf';
const uri28 = 'pdf/satguru2/satguru2_27_compressed.pdf';
const uri29 = 'pdf/satguru2/satguru2_28_compressed.pdf';
const uri30 = 'pdf/satguru2/satguru2_29_compressed.pdf';
const uri31 = 'pdf/satguru2/satguru2_30_compressed.pdf';
const uri32 = 'pdf/satguru2/satguru2_31_compressed.pdf';

const uri33 = 'pdf/satguru2/satguru2_32_compressed.pdf';
const uri34= 'pdf/satguru2/satguru2_33_compressed.pdf';






export default function Satguru2({ navigation }) {
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
      tS lkbZa veka </Text>

<Text style={{fontSize:40,textAlign:'center',marginTop:20,fontFamily:'K246',top: 0}}>
Jh lfrxqj ok.kh n'kZu ¼2½</Text>


<Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'Kd20',top: 0,paddingLeft:10}}>

¼ fou; if=dk ½

</Text>

<Text style={{fontSize:20,textAlign:'center',marginTop:0,fontFamily:'Kd20',top: 0,padding:10}}>

lq[k fuokl lRlax Hkou] Jh o`Unkou/kke

</Text>
<Text style={{fontSize:20,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,padding:10}}>
HkkokFkZ %
lkbZa lkfgc vuqjkx+h
ckck xsghjke


</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:10,fontFamily:'Kd20',top: 0,paddingLeft:10}}>
lq[kfuokl lRlax e.My Jho`Unkcu&281121

</Text>
<Text style={{fontSize:18,textAlign:'right',marginTop:0,fontFamily:'Kd20',top: 0,paddingLeft:10}}>
nhikoyh la0 2055•lu~ 1998
</Text>
      <View style={{textAlign:'center',alignContent:'center',alignItem:'center',padding:10}} >
      <Text style={{fontSize:30,textAlign:'center',marginTop:10,fontFamily:'K246',top: 0,padding:10}}>
      lwph</Text>
      <View style = {styles.lineStyle} />


<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri0,bookname:'Geet Manjusha (Mangal Kamna)'})}>
Jh xqj vuqdEik</Text>

 <View style = {styles.lineStyle} />








<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri2,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
1   ,dks vksadkj lfrxqj izlkfn				1</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri3,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
2   ckck ukud lkbZa c+sM+k c+fuM+s ykbZa			 3
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri4,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
3   lfrxqj fl;k.kk Lokeh lq¥k.kk				 7
 
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri5,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
4   lfrxqj lpk ikfr’kkg j[kq yTtk esjh			18

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri6,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
5   djgq d`ik esjs xqj ';ke				23
  
</Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri7,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
6   dfgM+ks d;kao gkfyM+ks eka ewjf[k v;k.kh		25
 </Text>
<View style = {styles.lineStyle} />
<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri8,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
7   lps xqj rsx+ cgknqj c+Ppk				30
 </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri9,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>

8   ewa [ks ekQh n+s eqafgtk /k.kh				33
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri10,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
9   Jh xqj bZ’oj izlkfn eSxfl ds				37
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri11,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
10   Jh xqj iwjs iwjh dhuh					39
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri12,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
11   Jh eSxfl dh j&#123;kk djks				44

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri13,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
12   thv dh c`Fkk gks; lq Jhxqj iS			50
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri14,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
13   esjh Hko ck/kk gjks					51
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri15,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
14   lnk lqn`f"V djs ckiw deykdUr			53


</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri16,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
15   'kj.kkxr djs gSa cpkrs lcS				57





</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri17,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
16   Jh Jh xkSjh ekrk tS tS xkSjh ekrk 			59

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri18,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
17   rqEgsa izHkq ckag xgs dh ykt				63



</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri19,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
18   b’d esa vps vkjkeq					65

</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri20,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
19   Hkwy.kgkj ew&lt;	+ uafg eksfg tsgk				70



</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri21,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
20   vks lpk lfrxqj rsjh 'kjf.k vkds 			75
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri22,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
21   lnk f’ko ikfj djks esjh uS;k				83  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri23,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
22   Jhxksfoan jk[kks 'kjf.k vc rks thou gkjs		 88

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri24,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
23   esjs ckiw n;k fuf/k cgqr gks				 91
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri25,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
24   Jhjke rsjh jkg esa fefV tkÅaxk 			 96
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri26,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
25   rw Bkdqj eka c+kyh Hkksyh Hkkyh 			102
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri27,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
26   dgka tkam dklwa dgwa vkSj BkSj u esjks 			103
      </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri28,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
27   lfnds deyk ts c+sM+ks rkfj eqafgtks 			109
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri29,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
28   vfjnkl						113
</Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri30,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
29   Jh c`t jk.kh fefBM+h vefM+ ewa [ks 			119

  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri31,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
30   Jh c`t jk.kh fefBM+h vefM+ eq>dks 			122
  </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri32,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
31   lnk [kqf’k jgks ckcy esjs				125
    </Text>
<View style = {styles.lineStyle} />

<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri33,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
32   gky efgjfe #lq u Jhtw				129



  </Text>
<View style = {styles.lineStyle} />







<Text style={{fontSize: dynamicFontSize,textAlign:'justify', marginTop:0, marginLeft:'0%', fontFamily:'Kd20'}}  onPress={() => navigation.navigate('Bookview',{pdfname:uri34,bookname:"श्री सतगुरु वाणी दर्शन २ "})}>
33   Jh fl;oj jke dgks lnk iw.kZ 			134
</Text>
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
