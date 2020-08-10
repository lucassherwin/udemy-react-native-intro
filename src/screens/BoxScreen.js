import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            {/* <Text style={styles.text1Style}>Child #1</Text>
            <Text style={styles.text2Style}>Child #2</Text>
            <Text style={styles.text3Style}>Child #3</Text> */}


            <View style={styles.view1Style}/>
            <View style={styles.view2Style}/>
            <View style={styles.view3Style}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text1Style: {
        borderWidth: 3,
        borderColor: 'red',
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'red',
        fontSize: 18,
        ...StyleSheet.absoluteFillObject
    },
    text3Style: {
        borderWidth: 3,
        borderColor: 'red',
    },
    view1Style: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    view2Style: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    view3Style: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
})

export default BoxScreen;