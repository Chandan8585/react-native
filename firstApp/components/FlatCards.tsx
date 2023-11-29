import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={{color: 'white', fontSize: 50 , margin: 8}}>FlatCards</Text>
      <View style={[styles.mainContainer]}>
       
      <View style={[styles.container, styles.redBox]}>
      <Text style={{color: 'black' }}>Red</Text>
    </View>
    <View style={[styles.container, styles.blueBox]}>
      <Text style={{color: 'black' }}>Blue</Text>
    </View>
    <View style={[styles.container, styles.greenBox]}>
      <Text style={{color: 'black' }}>Green</Text>
    </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
},
container: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderWidth: 2,
   
    borderColor: 'black',
    borderRadius: 5
},
font:{
  color: 'black'
},
redBox: {
    backgroundColor: 'red',
    
},
greenBox: {
    backgroundColor: 'green',
},
blueBox: {
    backgroundColor: 'blue',
    
}

})