import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 45},
        { name: 'Friend #3', age: 84},
        { name: 'Friend #4', age: 58},
        { name: 'Friend #5', age: 12},
        { name: 'Friend #6', age: 78},
        { name: 'Friend #7', age: 73},
        { name: 'Friend #8', age: 48},
        { name: 'Friend #9', age: 27},
        { name: 'Friend #10', age: 19}
    ];

    return (
        <FlatList 
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({item}) => {
            //element === { item: {name: 'Friend #1' }, index: 0 }
            return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        } } 
        />
    ); 
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;
