import { StyleSheet, Text, TextStyle } from 'react-native'
import React from 'react'

interface WhiteTextProps {
    children: React.ReactNode;
    style?: TextStyle;
  }

const WhiteText: React.FC<WhiteTextProps> = ({children, style}) => {
  return (

      <Text style={[styles.textColor, style]}>{children}</Text>
    
  )
}

export default WhiteText

const styles = StyleSheet.create({
    textColor:{
        color: 'white'
    }
})