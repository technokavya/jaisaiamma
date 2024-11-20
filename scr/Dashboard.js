import {FlatList, View, Text ,Dimensions,Image,SafeAreaView, TouchableOpacity,StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React, {useState,  useEffect} from 'react';
import {useFonts} from "expo-font";
import background from "../assets/images/brd3.png";
const style1=StyleSheet.create({
root:{flex:1},
container:{
  flex:1,justifyContent:'center',
  shadowColor: "black",
  shadowOffset: { height: 2},
  shadowOpacity: 0.3,
},
image:{opacity:0.8,width:180,height:220},
text:{
  textAlign:'center',fontSize:24,
}
});









export default function Dashboard({navigation}) {
   const [msghead, setMsgHead] = useState(' श्री साईं साहेब सिख्या वाणी दर्शन ');
   const [msg, setMsg] = useState('सतिगुरु साईं साहिब जू  ने कृपा करके  फ़रमाया  | भक्त के आशीष भाव पर प्रसन्न होते है श्री रघुराया || ');
    

console.log(msg);
  let [fontsLoaded]=useFonts({
    'Kruti-Dev012':require('./../assets/fonts/Kruti-Dev-012.ttf'),
    'Kruti-Dev016':require('./../assets/fonts/Kruti-Dev-016.ttf'),
    'Kruti-Dev':require('./../assets/fonts/Kruti-Dev-012.ttf'),
    'K105':require('./../assets/fonts/K105.ttf'),
    'Kd40':require('./../assets/fonts/K40.ttf'),
    'Kd20':require('./../assets/fonts/KRDEV020.ttf'),
    'K246':require('./../assets/fonts/K246.ttf'),
    'Kruti-Dev16':require('./../assets/fonts/Kruti-Dev-016.ttf'),
    'Kruti-Dev680':require('./../assets/fonts/Kruti-Dev-680.ttf')
  });
  displayData = async () => {
     fetch('https://sahayogerp.com/jaisaiamma/getheader') 
   .then((response) => response.json()) 
   .then((data) => { 
     //setMessage(msg);
     console.log(data);
setMsg(data.message);
setMsgHead(data.messagehead);

 //jj
 
     // do something with the data 
     console.log(data.message);
   }) 
   .catch((error) => { 
     console.error(error); 
   })
 }
 displayData();

  return (
    <View style={styles.container}>

<View style={{width:'100%',height:'32%',marginTop:0}}>  
{/* source={require('./../assets/images/bback1.jpg')} */}

    <ImageBackground
        source={require('./../assets/images/j1.gif')}
        style = {{ width: "100%", height: '100%',resizeMode:'cover' ,top: 0,overflow:'visible'}}

    >

<Image source={require('../assets/images/jaisai3.png')} 
                    style={styles1.mainimage} resizeMethod='visible' />



    </ImageBackground>

  </View>

 


<ScrollView>

<View style={{width:'100%',marginTop:0,paddingTop:5,paddingHorizontal:15}}>  
{/* source={require('./../assets/images/bback1.jpg')} */}

<Text style={{fontFamily:'',fontSize:24,textAlign:'center',overflow:'hidden'}}>
{msghead}
</Text>
<Text></Text>
<Text style={{fontFamily:'',fontSize:20,textAlign:'center',overflow:'hidden',marginTop:0}}>
{msg}
</Text>



  </View>
  <View style = {styles.lineStyle} />

         


























{/* //Mangal Aarti and sandhya aarti */}

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

              <View style={[styles.card3, styles.shadowProp]} 
                            >
                                  <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Mangalaarti')}} >
                    <ImageBackground
                source={require('../assets/images/brdl.png')} 
                style={styles1.boximage}
                resizeMode="stretch" >
                 <Image 
                 source={require('../assets/images/aarti.png')} 
                  style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> मंगल आरती </Text>

              
              </ImageBackground>   
              </TouchableOpacity>
          </View>
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity
                  onPress ={()=>{ navigation.navigate('Sandhyaaarti')}} >

                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                                                resizeMode="contain" >
                 <Image source={require('../assets/images/diya.png')} 
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> संध्या आरती  </Text>

       

              </ImageBackground>   
              
              </TouchableOpacity>
          </View>
   </View>



{/* //Aashish 1 and 2 */}

<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity
                  onPress ={()=>{ navigation.navigate('Aashish1')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/nn2.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading}> आशीष १    </Text>

                  <TouchableOpacity></TouchableOpacity>
              </ImageBackground>   
              </TouchableOpacity>
          </View>
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity
                  onPress ={()=>{ navigation.navigate('Aashish2')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/nnam.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> 
आशीष २  </Text>

        
              </ImageBackground>   
              </TouchableOpacity>
          </View>
   </View>




{/* //Naam Mala & Naam Panchamrt */}

<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

              <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Naammala')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/mala2.jpg')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading}> नाम माला    </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>

                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Naampanchamrut')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                <Image source={require('../assets/images/mala2.jpg')} 
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> नाम पंचामृत  </Text>

                  <TouchableOpacity></TouchableOpacity>
              </ImageBackground>  
              </TouchableOpacity> 
          </View>
   </View>


{/* //Nit NEM  1 and SHLOK MALA */}

<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Nityanem')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/daily.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> 
नित्य नेम  </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>


          <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Shloks')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/flw.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading}> श्लोक     </Text>

                  <TouchableOpacity></TouchableOpacity>
              </ImageBackground>   
              </TouchableOpacity>
          </View>

        
   </View>






   <View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
            
</View>

<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:50,resizeMode:'contain'}} >
             <Text style={{fontFamily:'',fontSize:20,textAlign:'center'}}>

             शील सिंधु शोभा सदन , कथा कल्पतरु नाथ |   </Text>
  <Text style={{fontFamily:'',fontSize:20,textAlign:'center',overflow:'hidden'}}>
  सदा जियो साईं अम्मा , सिय रघुनन्दन  साथ || 
      </Text>
</View>



<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
</View>


{/* //GEET PUSTAK*/}

<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
{/* //GEET Manas 1*/}
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmanas1')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> गीत मानस १   </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>

{/* //GEET Manas 2*/}
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmanas2')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> गीत मानस २  </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
        
   </View>

{/* ........................................................book period 1 */}



<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
{/* Geet Manjari */}
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmanjari')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> गीत मञ्जरी </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>

{/* Geet Manjula */}
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmanjula')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}> गीत मञ्जुला  </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
        
   </View>

{/* ........................................................book period 2 end */}



<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
{/* Geet Manjusha */}
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmanjusha')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}>
गीत मंञ्जुषा  </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>

{/* Geet Maralika */}
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmaralika')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}>गीत मरालिका</Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
        
   </View>

{/* ........................................................book period 3 end */}






<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

            {/* Geet Madhuri */}     
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmadhuri')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}>गीत माधुरी </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
        {/* Geet Malika */}  

          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmalika')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}>
गीत मालिका  </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
        
   </View>

{/* ........................................................book period 4 end */}






<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
 {/* Geet Muktavali */}  
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Geetmuktavali')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}>गीत मुक्तावली </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
 {/* Mahima Madhuri */}  


          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Mahimamadhuri')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading}>
महिमा माधुरी </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
        
   </View>

{/* ........................................................book period 5 end */}


   <View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
            
</View>



<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:50,resizeMode:'contain'}} >
             <Text style={{fontFamily:'',fontSize:20,textAlign:'center'}}>

             सतिगुरु मैगसि चंद्र  जू  बिन कारण  कृपाल | 

  </Text>
  <Text style={{fontFamily:'',fontSize:20,textAlign:'center',overflow:'hidden'}}>
    चिर जियो साहिब सचा, दीननि बन्धु  दयाल ||  </Text>
</View>



<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
</View>




   <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

    {/* shri bhakt kokil */}
              <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Bhaktkokil')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={{width:'100%',height:'100%', borderRadius: 8}}
                resizeMode="contain" >
                 <Image source={require('../assets/images/saiji.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading4}> श्री भक्त कोकिल 
    </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Anuraginamma')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/ammaji.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading4}> अनुरागिणि अम्माँ
 </Text>

                  
              </ImageBackground>   
     </TouchableOpacity>
          </View>


{/* LEELA MADHURI  1 */}
            <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Leelamadhuri1')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={{width:'100%',height:'100%', borderRadius: 8}}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading3}> लीला माधुरी १ 
  </Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
          <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                  
                                  onPress ={()=>{ navigation.navigate('Leelamadhuri2')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={{width:'100%',height:'100%', borderRadius: 8}}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading3}> लीला माधुरी २ 
</Text>

              </ImageBackground>   
              </TouchableOpacity>
          </View>
   </View>






























   <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Charitradarshan')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading3}>श्री साई साहिब   </Text>
<Text style={styles1.blockheading4}> चरित्र  दर्शन 
 </Text>

 
              </ImageBackground>   
   </TouchableOpacity>
          </View>
                 



          <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Vachanvilas')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading3}>वचन विलास 
 </Text>

 
              </ImageBackground>   
   </TouchableOpacity>
          </View>
   </View>











   <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

   <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Vrindavanmahima')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading3}> वृन्दावन महिमा 
    </Text>

 
              </ImageBackground>   
   </TouchableOpacity>
          </View>
                 
                 
   <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Charitrachalisa')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading3}>साई चरित्र चालीसा </Text>

 
              </ImageBackground>   
   </TouchableOpacity>
          </View>
                 
                 


   </View>




   <View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
            
</View>

<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:50,resizeMode:'contain'}} >
             <Text style={{fontFamily:'',fontSize:20,textAlign:'center'}}>
             जुगल चरण कमलनि  मधुप , मालिक मैगसि चन्द्र | 
  </Text>
<Text style={{fontFamily:'',fontSize:20,textAlign:'center'}}>
प्रेम सुधा पिओ सदां  , दासनि  जा दिलि बन्द  ||   </Text>
</View>



<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
</View>






















<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Satguru1')}} >
            
           
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
                      <Text style={{fontFamily:'',fontSize:20,textAlign:'center',marginTop:75,overflow:'hidden'}}>  
श्री सतिगुरु वाणी 

{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
<Text style={{fontFamily:'Kruti-Dev',fontSize:20,textAlign:'center',marginTop:2}}>
दर्शन १ 
{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
         
              </ImageBackground>   
              </TouchableOpacity>
          </View>
                 
        


          <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Satguru2')}} >
            
           
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
                   <Text style={{fontFamily:'',fontSize:20,textAlign:'center',marginTop:75,overflow:'hidden'}}>  
श्री सतिगुरु वाणी 

{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
<Text style={{fontFamily:'Kruti-Dev',fontSize:20,textAlign:'center',marginTop:2}}>
दर्शन  २ 
{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
         
         
              </ImageBackground>   
              </TouchableOpacity>
          </View>
   </View>





   <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
   <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Satguru3')}} >
            
           
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
                    <Text style={{fontFamily:'',fontSize:20,textAlign:'center',marginTop:75,overflow:'hidden'}}>  
श्री सतिगुरु वाणी 

{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
<Text style={{fontFamily:'Kruti-Dev',fontSize:20,textAlign:'center',marginTop:2}}>
दर्शन ३  
{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
         
         
              </ImageBackground>   
              </TouchableOpacity>
          </View>
                 
          <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Satguru4')}} >
            
           
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/bookname.png')} 
                    style={styles1.logoimage}/>
                     <Text style={{fontFamily:'',fontSize:20,textAlign:'center',marginTop:75,overflow:'hidden'}}>  
श्री सतिगुरु वाणी 

{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
<Text style={{fontFamily:'Kruti-Dev',fontSize:20,textAlign:'center',marginTop:2}}>
दर्शन ४   
{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>
         
         
              </ImageBackground>   
              </TouchableOpacity>
          </View>
   </View>










   <View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
            
</View>

<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:50,resizeMode:'contain'}} >
             <Text style={{fontFamily:'',fontSize:20,textAlign:'center'}}>
             जै जै  मैगसि चन्द्र जू , सद  बख्शंद उदार | 
           </Text>
             <Text style={{fontFamily:'',fontSize:20,textAlign:'center'}}>
             प्रेम भक्ति प्रकाश  निधि , सति संगति   सींगार ||   </Text>
</View>



<View style={{textAlign:'center',alignContent:'center',alignItem:'center',height:80,resizeMode:'contain'}} >
   <Image
       source={require('../assets/images/f1.png')}
        style={styles2.flowerimage}
        resizeMode="center"
         // Try other values: 'contain', 'stretch', 'repeat', or 'center'
      />
</View>




















<View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

              <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Japujisahib')}} >
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/1e2.png')} 
                    style={styles1.logoimage}/>
<Text style={styles1.blockheading4}> श्री जपुजी साहिब  </Text>

                  
              </ImageBackground>   
              </TouchableOpacity>
          </View>
                 
          <View style={[styles.card3, styles.shadowProp]}>
          <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Sukhmanisahib')}} >
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/1e2.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading4}> 
श्री सुखमनी साहिब
 </Text>

              </ImageBackground>   
     </TouchableOpacity>
          </View>
   </View>





   <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
   <View style={[styles.card3, styles.shadowProp]}>
              <TouchableOpacity 
                                                                    onPress ={()=>{ navigation.navigate('Anandsahib')}} >
            
           
                    <ImageBackground
                 source={require('../assets/images/brd4.png')} 
                 style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/1e2.png')} 
                    style={styles1.logoimage}/>
                    
                      <Text style={styles1.blockheading4}>
                      अंनंद साहिब 
                  
{/* <Text style={styles1.blockheading}> Jh lfrxqj ok.kh n'kZu ¼1½ </Text> */}
</Text>

         
              </ImageBackground>   
              </TouchableOpacity>
          </View>
                 
          <View style={[styles.card3, styles.shadowProp]}>
                    <ImageBackground
                   source={require('../assets/images/brd4.png')} 
                   style={styles1.boximage}
                resizeMode="contain" >
                 <Image source={require('../assets/images/1e2.png')}  
                    style={styles1.logoimage}/>
<Text  style={styles1.blockheading4}> अरदास  </Text>

                  <TouchableOpacity></TouchableOpacity>
              </ImageBackground>   
          </View>
   </View>







   <View style={{backgroundColor:'#e5e5e5'}}>
     <View style={styles.AudioPLayer}>
             
     <Text style={{fontSize: 22,textAlign:'center', marginTop:5, marginLeft:'0%', fontFamily:'',color:'red'}} >
     ||  आशीष प्रिय साईं अम्माँ  सदा खुशि  ||  </Text>

       

       </View>
  
       
             </View>

<Text></Text>

 </ScrollView>

    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    fontFamily:'Kruti-Dev680',
  },
  card: {
    backgroundColor: '#',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,

      shadowColor: '#000',
      shadowOffset: {width: 3, height: 4},
      shadowOpacity: 0.9,
      shadowRadius: 8,
 
  },

  card2: {
    backgroundColor: '#d8e2f0',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '50%',
    marginVertical: 10,
  },
  card3:{
        marginTop: 2,
        marginBottom: 3,
        shadowColor:'#000',
        margin:3,
      marginLeft:0,
      height:140,
      border:2 ,
            borderRadius: 10,
      shadowOpacity: 0.8,
      justifyContent: 'center',
      alignItems: 'left',
      backgroundColor: '#fff',
         width: '49%',
      marginVertical: 10,
     },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'contain', // Adjust as needed (cover, contain, stretch, etc.)
    height:220,
    width:180,
    borderRadius:8
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent overlay
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  lineStyle:{
    width:'100%',
    borderWidth:0.5,
    borderColor:'#e5e5e5',
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
       width:'30%',height:'40%',position:'absolute',marginVertical:30,marginLeft:'36%',opacity:1,
  },
  mainimage:{
    width:'90%',height:'90%',position:'absolute',marginVertical:40,marginLeft:20,overflow: 'visible'
    

},
  
  blockheading:{width:200,height:80,position:'absolute',marginVertical:90,textAlign:'center',opacity:1,fontFamily:'K246',fontSize:22},
  blockheading1:{width:200,height:80,position:'absolute',marginVertical:80,textAlign:'center',opacity:1,fontFamily:'K246',fontSize:24},
  blockheading2:{width:200,height:80,position:'absolute',marginVertical:100,textAlign:'center',opacity:1,fontFamily:'K246',fontSize:24},
  blockheading3:{width:200,height:80,position:'absolute',marginVertical:80,textAlign:'center',opacity:1,fontFamily:'K246',fontSize:20},
  blockheading4:{width:200,height:80,position:'absolute',marginVertical:100,textAlign:'center',opacity:1,fontFamily:'K246',fontSize:20}

})

const styles2=StyleSheet.create({
  flowercontainer:{
    marginTop:0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    verticalAlign:"center",
    textAlign:'center',
    resizeMode:'contain',
    height:110,
    backgroundColor:'#fff',
  },
  flowerimage:{
    marginTop:0,
    marginLeft:'25%',
    width:200,
    height:80,
  }


});