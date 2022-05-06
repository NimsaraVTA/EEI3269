/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  CheckBox,

} from 'react-native';
import Headertxt from './src/components/HeaderTxt';

const App = () => {

  const [isSelected, setSelection] = useState(false);

  const persons = [
    {
    id: "1",
    name: "Task 1",
    },
    {
    id: "2",
    name: "Task 2",
    },
    {
    id: "3",
    name: "Task 3",
    },
    {
    id: "4",
    name: "Task 4",
    }
  ];

  return (
    <View style={styles.container}>

      <Headertxt />

      {persons.map((person) => {
        return (
          <View>
            <Text style={styles.item}> <CheckBox /> {person.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#b3ecff',
  },
  item: {
    padding: 20,
    fontSize: 25,
    marginTop: 5,
    backgroundColor: '#ffffff',
    fontWeight:'bold',
    color:'#000000',
  }
});

export default App;
