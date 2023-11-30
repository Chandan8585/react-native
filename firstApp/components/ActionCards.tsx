import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActionCards = () => {
    function OpenWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View>
        <Text style={styles.headingText}>What is new in Javascript 21- ES12</Text>
      </View>
      <Image
      source={{
        uri: ""
      }}
      />
      </View>
    </View>
  )
}

export default ActionCards

const styles = StyleSheet.create({})