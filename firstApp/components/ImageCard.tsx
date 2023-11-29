import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import WhiteText from './stylingComponents/WhiteText'

const ImageCard = () => {
  return (
    <View style={styles.card}>
         <View  style= {styles.cardContainer}>
        <WhiteText style={{fontSize: 40}}>Hawa Mahal</WhiteText>
        <WhiteText style={{fontSize: 25}}>City: Pink City, Jaipur</WhiteText>
        <Image 
        source={{uri: 'https://images.unsplash.com/photo-1617516202907-ff75846e6667?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
      style= {styles.cardImage}
       />
      <WhiteText style={{fontSize: 20}}>lit. Ducimus corrupti iusto amet recusandae quibusdam similique cumque sint. Deleniti, suscipit! Fugiat eum sint aliquam obcaecati. Incidunt qui nam voluptas architecto quibusdam.
  </WhiteText>
      </View>
    </View>
  )
}

export default ImageCard
const styles = StyleSheet.create({
    card:{
      backgroundColor: 'burlywood',
      marginTop: 50,
      borderWidth: 10,
      borderColor: 'red',
      padding: 10,
      borderRadius: 25,
      height:600,
      width: 400,
    },
    cardImage: {
      justifyContent: 'center',
      alignContent: 'center',
        height: 300,
        width: 350
    },
    cardContainer: {
        flex: 1,   
        padding: 8, 
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    
})