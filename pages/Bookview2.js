import { StyleSheet, Text, View ,Dimensions,Platform} from 'react-native'
import React from 'react'
 import Pdf  from 'react-native-pdf';
 import { Asset } from 'expo-asset';
import { useEffect,useState } from 'react';
export default function Bookview2({route,navigation}) {
 // const source = { uri: 'http://technokavya.com/naammala.pdf ', cache: true };

 
 const pname= 'bundle-assets://' +route.params.pdfname;
 //setSource('budle-assets//'+route.params.pdn);

 const [source2, setSource] = useState(pname);

//  Platform.OS == 'ios' ? require(route.params) : {uri:'bundle-assets://'+pname}

if(Platform.OS=='ios'){
  console.log('IOS');
  //const source2 = { uri: pdfname, cache: true };

}else{
  console.log('Android');
  // const source = {uri:'../pdf/geetmadhuri/g_madhuri_1_compressed.pdf',cache:true};

}
if(route.params.pdfname){
}
const {pdfname}=route.params;
console.log(route.params.pdn);
 const source = { uri: pname, cache: true };
// const uri0 = Asset.fromModule(require('../assets/pdf/geetmanas1/geet_manas1_0_compressed.pdf')).uri
  //const source = {uri:'bundle-assets://1.pdf' };
//  const source3 ={uri:'bundle-assets//'+route.params.pdn};
// const source =require('../assets/pdf/geetmanas1/geet_manas1_5_compressed.pdf');
console.log(pdfname);
console.log(source2);


 const { title } = route.params.bookname;
    
 useEffect(() => {
     navigation.setOptions({
         title: route.params.bookname,
     });
     
 }, [navigation]);
  return (

    <View style={styles.container}>


        <Pdf
          source={source}
                  trustAllCerts={false}
                     style={styles.pdf}
                     onError={(error)=>{
                      console.log(error);
                     }}
                     />
                 
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: 0,
  width:'100%',
  height:'100%',
  marginLeft:2,
  },
  pdf: {
  flex:1,
  width:Dimensions.get('window').width,
  height:Dimensions.get('window').height,
  }
  });