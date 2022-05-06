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
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View

} from 'react-native';
import Headertxt from './src/components/HeaderTxt';
import { Checkbox } from 'react-native-paper';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';


const App = () => {

  const [isSelected, setSelection] = useState(false);

  //Give alerts
  const simpleAlertHandler1 = () => {
    //function to make simple alert
    Alert.alert('You are going to add a new task!');
  };

  const simpleAlertHandler2 = () => {
    //function to make simple alert
    Alert.alert('Changes are saved!');
  };

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
    },
    {
    id: "5",
    name: "Task 5",
    }
  ];

  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState('first');
  

  return (
    <SafeAreaView style={styles.container}>

<ScrollView>
      <Headertxt />   
          <Image style={styles.imagestyle} source={require('./src/images/a.jpg')} />
          
          <View style={styles.buttonview}>
            <View style={styles.view1}>
                <Button
                  mode="contained"
                  color='#000080'
                  labelStyle={{color: 'white'}}
                  onPress={simpleAlertHandler1}>
                  ADD
                </Button>
            </View>

            <View style={styles.view2}>
                <Button
                  mode="contained"
                  color='#000080'
                  labelStyle={{color: 'white'}}
                  onPress={simpleAlertHandler2}>
                  SAVE
                </Button>
            </View>

          </View>

      {persons.map((person) => {
        return (
          <View key={person.id.toString()}>
            <Text style={styles.item}> 

            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
            setChecked(!checked);
            }}
            />

            {person.name}
            
            <View style={styles.radiobut}>
            <RadioButton
            value="first"
            status={ checked1 === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked1('first')}
            color={'red'}
            />
            </View>

            </Text>
          </View>
        );
      })}

</ScrollView>
    </SafeAreaView>
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
    marginTop: 15,
    backgroundColor: '#ffffff',
    fontWeight:'bold',
    color:'#000000',
  },
  imagestyle:{
    width:200,
    height:200,
    justifyContent:'center',
    marginLeft:80
  },

  buttonview:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 15,
    paddingBottom:15
  },

  view1:{
    flexDirection:'column'
  },

  view2:{
    flexDirection:'column'
  },

  radiobut:{
    paddingLeft:185
  }
});

export default App;
