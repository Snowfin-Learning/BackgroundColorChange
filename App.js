//importing default library  of react native

import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar  } from 'react-native';

const App = () => {

  //define state which assign the random values to randomColor

  const [randomColor, SetRandomColor] = useState('rgb(0,0,0)');
  
  //define method which genrate different values to the randomColor using SetRandomColor

  const changeBackgroundColor = () => {
    let color = 'rgb(' +
      Math.floor(Math.random()*256)+
      ',' +
      Math.floor(Math.random()*256)+
      ',' +
      Math.floor(Math.random()*256)+
      ')';

      SetRandomColor(color);
  };

  // define method to reset the value to the initial value

  const resetColor = () => {

    let setColor = '#000000';
    SetRandomColor(setColor);
    
  }
  
  return(
          <>
          <StatusBar backgroundColor={randomColor} />
            <View style={[styles.container,     {backgroundColor: randomColor}]}>
               <TouchableOpacity onPress={changeBackgroundColor} >
                  <Text style={styles.text}>Tap Me!</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={resetColor} style={{marginTop: 30}} >
                  <Text style={styles.text}>Reset</Text>
               </TouchableOpacity>
            </View>
          </>
  );
};


export default App;

//style sheet of the application

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase'
  }
});
