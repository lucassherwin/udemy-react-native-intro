import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi There!';
    const hello = <Text>Hello</Text>

    return( 
        <View>
            <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
            <Text>Hello World</Text>
            <Text>{greeting}</Text>
            {hello}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;