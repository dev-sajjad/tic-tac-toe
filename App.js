import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity,Alert,Modal} from 'react-native';



export default function App() {
  
    
  
    const [getmodel,setmodel]=useState(false);
   
    function buttonClick(txt){

    }
  
  
    
 
  return (
    
    
    <View style={styles.container}>
        <Modal
      animationType="slide"
          
          visible={getmodel}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            
          }}
      ><View style={{
    justifyContent: "center",
  
    }}>
    <View style={{ margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5}}>
       
      </View>
      </View>
        </Modal>
       
        
        <Header game_title="Tic Tac Toe" />
        <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20,color:"red"}}>Turn : </Text>
      
    </View>
       
        <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20}}>Player 1 : O</Text>
      
    </View>
     
     
     
     
      
      <View style={{ flexDirection: 'row',}}>
        
        <View style={{ width: 100 }}>
        <TouchableOpacity
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
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
      <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        height:80,
        borderColor:'#FF0000',
        borderWidth:2,
        borderTopWidth:0,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
      <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        borderWidth:2,
        borderTopWidth:0,
        height:80,
        borderRightWidth:0,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
        
        </View>
        <View style={{ flexDirection: 'row',}}>
        
        <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        height:80,
        borderColor:'#FF0000',
        borderWidth:2,
        borderLeftWidth:0,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
      <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        height:80,
        borderColor:'#FF0000',
        borderWidth:2,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
      <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        borderWidth:2,
        height:80,
        borderRightWidth:0,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
        
        </View>
        <View style={{ flexDirection: 'row',}}>
        
        <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        borderWidth:2,
        height:80,
        borderBottomWidth:0,
        borderLeftWidth:0,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
      <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        borderWidth:2,
        height:80,
        borderBottomWidth:0,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
      </View>
      <View style={{ width: 100 }}>
        <TouchableOpacity
        style={{alignItems: "center",
        height:80,
        backgroundColor: "#DDDDDD",
        color:'#000000',
        borderColor:'#FF0000',
        borderWidth:2,
        borderBottomWidth:0,
        borderRightWidth:0,
        padding: 10}}
        
        
      >
        <Text style={{color:"black"}}></Text>
      </TouchableOpacity>
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