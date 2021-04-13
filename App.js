import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity,Alert,Modal, Pressable, FlatList} from 'react-native';



export default function App() {
   
   const CustomButton=({text,number})=>{
      return(
        <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        width:80,
        borderWidth:2,
        padding: 10}}
      >
      <Text>
          {text}
      </Text>

      </Pressable>
      );
   };
    
  
    const [buttons,setbuttons]=useState([{button:'1',text:''},{button:2,text:''},{button: 3,text:''},{button: 4,text:''},{button: 5,text:''},{button: 6,text:''},{button: 7,text:''},{button: 8,text:''},{button: 9,text:''}]);
    const playersymbol=(txt,index)=>{
      let temp=[...buttons]
      temp[number].text='0'
      setbuttons(temp)
    }
  return (
    
    
    <View style={styles.container}>
        
        
        <Header game_title="Tic Tac Toe" />
        <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20,color:"red"}}>Turn : </Text>
      
    </View>
       
        <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20}}>Player 1 : O</Text>
      
    </View>
        <FlatList
        numColumns={3}
        data={[...buttons]}
        renderItem={({item},index)=>(
          <CustomButton text={item.text} number={item.button} />
        )}
        
        />
      <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20}}>Player 2 : X</Text>
      
    </View>
      <StatusBar style="auto" />
    </View>
  );

  }
const Header = (props) => {
  return (
    <View>
      <Text style={headerStyles.text}>{props.game_title}</Text>
    </View>
  )
}



const headerStyles = StyleSheet.create({
  text: {
    fontSize: 20
    ,padding :20
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});