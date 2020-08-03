import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({imgSource, title, imageScore}) => {
    // console.log(props)
    return (
        <View>
            <Image source={imgSource} />
            <Text>{title} - {imageScore}</Text>
        </View>
    )
};

// const styles = StyleSheet.create({
    
// });

export default ImageDetail;
