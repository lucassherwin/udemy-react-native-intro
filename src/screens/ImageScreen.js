import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail.js';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imgSource={require('../../assets/forest.jpg')} imageScore='8/10' />
            <ImageDetail title="Beach" imgSource={require('../../assets/beach.jpg')} imageScore='6/10' />
            <ImageDetail title="Mountain" imgSource={require('../../assets/mountain.jpg')} imageScore='9/10' />
        </View>
    )
};

// const styles = StyleSheet.create({
    
// });

export default ImageScreen;
