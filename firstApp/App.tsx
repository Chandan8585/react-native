import React from "react";
import {View,
StyleSheet,
Text,
useColorScheme
} from 'react-native'

function App(){
  const isDarkModeOn = useColorScheme() === 'dark'
 return(
  <View style={styles.container}>
    <Text style={isDarkModeOn ? styles.whiteText : styles.darkText}>Hello World</Text>
  </View>
 )
}

export default App;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    
   },
   whiteText: {
    color: 'white',
    
   },
   darkText: {
    color: 'black'
   }
})