import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Pdf  from 'react-native-pdf';
import { Asset } from 'expo-asset';

const uri = 'bundle-assets://pdf/shrisaichalisa.pdf';

export default function Charitrachalisa() {
  // const source = { uri: 'http://technokavya.com/naammala.pdf ', cache: true };
        // const source = {uri:'file: ../assets/pdf/1.pdf'};
       const source = { uri: uri, cache: true };

  return (
    <View style={styles.container}>
    <Pdf
        source={source}
        trustAllCerts={false}
     
        style={styles.pdf}/>
</View>
  )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    },
    pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    }
    });