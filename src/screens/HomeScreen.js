import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//destructured out props object so its just navigation
const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return(
    <View>
      <Text style={styles.text}>Hello Android Development</Text>
      <Button
        title="Go to componenets demo"
        onPress={() => navigation.navigate('Components')}
        />
        <Button
          title='Go to List Demo'
          onPress={() => navigation.navigate('List')}
        />
        <Button title='Image Screen' onPress={() => navigation.navigate('ImageScreen')} />
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
          <Text>Go to List Demo</Text>
        </TouchableOpacity> */}
        <Button title='Go To Counter Demo' onPress={() => navigation.navigate('Counter')} />
        <Button title='Go To Color Screen' onPress={() => navigation.navigate('Color')} />
        <Button title='Go To Square Screen' onPress={() => navigation.navigate('Square')} />
        <Button title='Go To Text Screen' onPress={() => navigation.navigate('Text')} />



    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;