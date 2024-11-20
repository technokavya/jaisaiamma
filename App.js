import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './scr/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from "expo-font";
import Mangalaarti from './pages/Mangalaarti';
import Bookview from './pages/Bookview';
import Geetmadhuri from './pages/books/Geetmadhuri';

import Geetmalika from './pages/books/Geetmalika';
import Geetmanas1 from './pages/books/Geetmanas1';
import Geetmanas2 from './pages/books/Geetmanas2';
import Geetmanjari from './pages/books/Geetmanjari';
import Geetmanjusha from './pages/books/Geetmanjusha';
import Geetmanjula from './pages/books/Geetmanjula';
import Geetmaralika from './pages/books/Geetmaralika';
import Geetmuktavali from './pages/books/Geetmuktavali';
import Mahimamadhuri from './pages/books/Mahimamadhuri';
import Bhaktkokil from './pages/books/Bhaktkokil';
import Leelamadhuri1 from './pages/books/Leelamadhuri1';
import Leelamadhuri2 from './pages/books/Leelamadhuri2';
import vrindavanmahima from './pages/books/Vrindavanmahima';
import Charitrachalisa from './pages/books/Charitachalisa';
import Vachanvilas from './pages/books/Vachanvilas';
import Charitradarshan from './pages/books/Charitradarshan';
import Anuraginamma from './pages/books/Anuraginamma';
import Satguru1 from './pages/books/Satguru1';
import Satguru2 from './pages/books/Satguru2';
import Satguru3 from './pages/books/Satguru3';
import Satguru4 from './pages/books/Satguru4';
import Japujisahib from './pages/books/Japujisahib';
import Sukhmanisahib from './pages/books/Sukhmanisahib';
import Sandhyaaarti from './pages/Sandhyaaarti';
import Aashish1 from './pages/Aashish1';
import Aashish2 from './pages/Aashish2';
import Naammala from './pages/Naammala';
import Naammala2 from './pages/Naammala2';
import Naampancha from './pages/books/Naampancha';
import Nityanem from './pages/books/Nityanem';
import Shloks from './pages/books/Shloks';
import { ReactNativeFirebase } from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import Anandsahib from './pages/books/Anandsahib';
import Bookview2 from './pages/Bookview2';

// import Naammala from './pages/Naammala';
// import Sandhyaaarti from './pages/Sandhyaaarti';
// import Aashish1 from './pages/Aashish1';
// import Aashish2 from './pages/Aashish2';
// import Naammala2 from './pages/Naammala2';
// import Nityanem from './pages/Nityanem';

const Stack = createNativeStackNavigator();
export default function App() {
  const fontname='Kruti-Dev';
  let [fontsLoaded]=useFonts({
    'Kruti-Dev':require('./assets/fonts/Kruti-Dev-012.ttf'),
    'K105':require('./assets/fonts/K105.ttf'),
    'Kd20':require('./assets/fonts/KRDEV020.ttf'),
    'K246':require('./assets/fonts/K246.ttf'),
    'Kruti-Dev16':require('./assets/fonts/Kruti-Dev-016.ttf'),
    'Kruti-Dev680':require('./assets/fonts/Kruti-Dev-680.ttf')
  
  });


  // messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
      // App has been launched in the background by iOS, ignore
      return null;
    }
  
    return <App />;
  }

  const getToken=async()=>{
  
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log(token);
      }

  }
  useEffect(()=>{
    getToken();
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

    <Stack.Screen name="Jai Sai Amma" component={Dashboard}  options={{headerShown :true,headerTitle:'         🌹  जय साई अम्माँ सदा खुशि  🌹',orientation:'portrait',headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
           
          },}}/>
 <Stack.Screen name="Bookview" component={Bookview}  options={{headerShown :true,orientation:'all'}} />
 <Stack.Screen name="Bookview2" component={Bookview2}  options={{headerShown :true,orientation:'all'}} />

 <Stack.Screen name="Mangalaarti" component={Mangalaarti} options={{headerShown :false,orientation:'portrait'}} />
 <Stack.Screen name="Sandhyaaarti" component={Sandhyaaarti}  options={{headerShown :false,orientation:'portrait'}} />
 <Stack.Screen name="Aashish1" component={Aashish1}  options={{headerShown :false,orientation:'portrait'}} />
 <Stack.Screen name="Aashish2" component={Aashish2}  options={{headerShown :false,orientation:'portrait'}} />








 <Stack.Screen name="Naammala" component={Naammala}   options={{headerShown :true,orientation:'portrait',headerTitle:' नाम माला '}} />
 <Stack.Screen name="Naammala2" component={Naammala2}  options={{headerShown :true,orientation:'all'}} />
 <Stack.Screen name="Nityanem" component={Nityanem}   options={{headerShown :true,orientation:'all',headerTitle:' नित्य नेम '}} />
 <Stack.Screen name="Shloks" component={Shloks}   options={{headerShown :true,orientation:'all',headerTitle:'श्लोक '}} />
 <Stack.Screen name="Naampanchamrut" component={Naampancha}  options={{headerShown :true,orientation:'all',headerTitle:'नाम पंचामृत '}} />
 <Stack.Screen name="Geetmadhuri" component={Geetmadhuri}   options={{headerShown :true,headerTitle :' गीत माधुरी  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmalika" component={Geetmalika}  options={{headerShown :true,headerTitle :' गीत मालिका ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmanas1" component={Geetmanas1}  options={{headerShown :true,headerTitle :'गीत मानस  - १',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmanas2" component={Geetmanas2}  options={{headerShown :true,headerTitle :'गीत मानस  - २',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmanjari" component={Geetmanjari}   options={{headerShown :true,headerTitle :' गीत मञ्जरी ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmanjusha" component={Geetmanjusha}  options={{headerShown :true,headerTitle :' गीत मञ्जुषा ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmanjula" component={Geetmanjula}  options={{headerShown :true,headerTitle :'  गीत मञ्जुला  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmaralika" component={Geetmaralika}  options={{headerShown :true,headerTitle :' गीत मरालिका  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Geetmuktavali" component={Geetmuktavali}  options={{headerShown :true,headerTitle :' गीत मुक्तावली  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Mahimamadhuri" component={Mahimamadhuri}  options={{headerShown :true,headerTitle :' महिमा माधुरी ',headerTitleAlign:"center"}} />



 






 <Stack.Screen name="Bhaktkokil" component={Bhaktkokil}  options={{headerShown :true,headerTitle :' श्री भक्त कोकिल  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Leelamadhuri1" component={Leelamadhuri1}   options={{headerShown :true,headerTitle :' लीला माधुरी १ ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Leelamadhuri2" component={Leelamadhuri2}   options={{headerShown :true,headerTitle :' लीला माधुरी २  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Vrindavanmahima" component={vrindavanmahima}  options={{headerShown :true,headerTitle :' वृन्दावन महिमा  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Charitrachalisa" component={Charitrachalisa}   options={{headerShown :true,headerTitle :' श्री साईं चरित्र चालीसा  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Vachanvilas" component={Vachanvilas}  options={{headerShown :true,headerTitle :' श्री साईं साहिब वचन विलास  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Charitradarshan" component={Charitradarshan}  options={{headerShown :true,headerTitle:'श्री साईं साहिब  चरित्र दर्शन ',headerTitleAlign:"center"}} />


 <Stack.Screen name="Anuraginamma" component={Anuraginamma}   options={{headerShown :true,headerTitle :'  अनुरागिणी  अम्माँ  ',headerTitleAlign:"center"}} />

 





 <Stack.Screen name="Satguru1" component={Satguru1}  options={{headerShown :true,headerTitle :' श्री सतगुरु वाणी दर्शन १  ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Satguru2" component={Satguru2}  options={{headerShown :true,headerTitle :' श्री सतगुरु वाणी दर्शन २   ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Satguru3" component={Satguru3}  options={{headerShown :true,headerTitle :' श्री सतगुरु वाणी दर्शन ३   ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Satguru4" component={Satguru4}  options={{headerShown :true,headerTitle :' श्री सतगुरु वाणी दर्शन ४   ',headerTitleAlign:"center"}} />
 <Stack.Screen name="Japujisahib" component={Japujisahib}  options={{headerShown :false,headerTitle:'Japujisahib'}} />
 <Stack.Screen name="Anandsahib" component={Anandsahib}  options={{headerShown :false,headerTitle:'Anandsahib'}} />

 <Stack.Screen name="Sukhmanisahib" component={Sukhmanisahib}  options={{headerShown :false,headerTitle:'Sukhmani Sahib'}} />
 {/* जपुजी साहिब 
श्री सुखमनी साहिब 
अनंद साहिब 
अरदास  */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
