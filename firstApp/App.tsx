import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import ImageCard from './components/ImageCard';
import ActionCards from './components/ActionCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
        <FlatCards />
        <ElevatedCards />
        <ScrollView horizontal={true}>
        <ImageCard/>
        <ImageCard/>
        <ImageCard/>
        </ScrollView>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
