import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity,Alert,Modal, Pressable, FlatList} from 'react-native';



export default function App() {
   
   const CustomButton=({text,number,symbol})=>{
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
        onPress={()=> symbol(text,number)}
      >
      <Text>
          {text}
      </Text>

      </Pressable>
      );
   };
    
  
    const [buttons,setbuttons]=useState([{button:'1',text:''},{button:2,text:''},{button: 3,text:''},{button: 4,text:''},{button: 5,text:''},{button: 6,text:''},{button: 7,text:''},{button: 8,text:''},{button: 9,text:''}]);
    const [turn,setturn]=useState(true)
    const [getmodel,setmodel]=useState(false)
   
    const playersymbol=(txt,index)=>{
      if(txt==''){
      let temp=[...buttons]
      if(turn==1)
      temp[index-1].text='0'
      else
      temp[index-1].text='X'
      setbuttons(temp)
      setturn(!turn)
      }

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
      
      <Text style={{fontSize:20,padding:20,color:'red'}}>Turn of Player {turn ? 1:2}</Text>
      
    </View>
        <View style={{ flexDirection: 'row',}}>
      
      <Text style={{fontSize:20,padding:20}}>Player 1 : O</Text>
      
    </View>
        <View style={{ flexDirection: 'row',marginLeft:80}}>
        <FlatList
        numColumns={3}
        data={[...buttons]}
        renderItem={({item},index)=>(
          <CustomButton text={item.text} number={item.button} symbol={playersymbol}/>
        )}
        
        />
     </View>
      
      <View style={{ flexDirection: 'row',}}>
      
        <Text style={{fontSize:20,padding:20}}>Player 2 : X</Text>
        <StatusBar style="auto" />
      </View>
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