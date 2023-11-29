import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WhiteText from './stylingComponents/WhiteText';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={{ color: 'white', fontSize: 50, margin: 8 }}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <WhiteText style={styles.textColor}>Hiiiii</WhiteText>
        </View>
        <View style={styles.container}>
          <Text>ME</Text>
        </View>
        <View style={styles.container}>
          <Text>To</Text>
        </View>
        <View style={styles.container}>
          <Text>Scroll</Text>
        </View>
        <View style={styles.container}>
          <Text>Side</Text>
        </View>
        {/* Add more items here to exceed the screen width */}
        <View style={styles.container}>
          <Text>More</Text>
        </View>
        <View style={styles.container}>
          <Text>Items</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 100,
    width: 100,
    margin: 8,
  },
  textColor: {
    fontSize: 50
  }
});
