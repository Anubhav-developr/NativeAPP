import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const [btn,setbtn] = useState({});
function fn(){
 setbtn(styles.B)
}

  return (
<>
<View style={styles.containerA}>
  <Text style={styles.style1}>Form Authentication React Native</Text>
</View>
<View style={styles.container}>
    
      <Text>hello</Text>
    
    <input type="number"></input>
      <button onclick={fn} style={btn}>FILL THE FORM</button>
    
      </View>
  
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style1: {
    color:'red',
    fontSize:34,
    display:'flex',backgroundColor:'yellow'
    
    
  },
  containerA : {
    backgroundColor:'pink'
  },
  B : {
    color:'red',
    boxShadow:'2px 3px 4px red'
  }
});
