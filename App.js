import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity,Alert,Modal, Pressable} from 'react-native';



export default function App() {
  
    
  
    const [turn,setturn]=useState("player1");
   
    
  
  
    
 
  return (
    
    
    <View style={styles.container}>
        
        
        <Header game_title="Tic Tac Toe" />
        <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20,color:"red"}}>Turn : </Text>
      
    </View>
       
        <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20}}>Player 1 : O</Text>
      
    </View>
     
     
     
     
      
      <View style={{ flexDirection: 'row',}}>
        
        <View style={{ width: 100 }}>
        <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
      <View style={{ width: 100 }}>
      <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
      <View style={{ width: 100 }}>
      <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
        
        </View>
        <View style={{ flexDirection: 'row',}}>
        
        <View style={{ width: 100 }}>
        <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
      <View style={{ width: 100 }}>
      <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
      <View style={{ width: 100 }}>
      <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
        
        </View>
        <View style={{ flexDirection: 'row',}}>
        
        <View style={{ width: 100 }}>
        <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderBottomWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
      <View style={{ width: 100 }}>
      <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderBottomWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
      <View style={{ width: 100 }}>
      <Pressable
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        height:80,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderBottomWidth:0,
        borderRightWidth:0,
        borderWidth:2,
        padding: 10}}
        
      >
        
      </Pressable>
      </View>
        
        </View>
        <View>
          <Text>

          </Text>
        </View>
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