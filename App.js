import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {Audio} from 'expo';

const listBackgroundColors = {
  1:"#EC4849",
  2:"#4834DF",
  3: "#4BCFFA",
  4: "#2ecc72",
  5: "#badc57",
  6: "#EEC213",
  7: "#2B2B52",
  8: "#E74292",
  9: "#758AA2",
  10: "#AE1438"
}

const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),
  }

export default class App extends React.Component {

  // function to play sound

  //loading playSound method asycno. by below type

  playSound = async number => {
    const soundObject = new Audio.Sound();
    try{
      //taking the number's sound path from list 
      let path = soundList[number];
      // in sound case, first we need to load that sound and then only it will plays that sound.
      // here we are loading the sound
      await soundObject.loadAsync(path)
      /*now here once the sound has been played we need to get the status of that sound, as soon as it played successfully,
       we will get the  playbackStatus, playbackStatus gives us lot of properties on eof the prop is playableDurationMills
       means how much duration of your sound is, once the sound is played successfully we will hold the set time out and 
       then unload that sound from the memory of sys to stop the crashing of the app. */
       await soundObject
       .playAsync()
       .then( async playbackStatus => {
        setTimeout(()=>{
          soundObject.unloadAsync();
        },playbackStatus.playableDurationMills);
       })
       .catch(error => {
        console.log(error);
      })
    }
    catch(error){
      console.log(error);
    }
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.gridContainer}>
        <Image 
        style = {styles.logo}
        source ={require("./assets/logo.png")}
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[1]},styles.item]}
          onPres={()=>{this.playSound("one")}}>
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[2]},styles.item]}
          onPres={()=>{this.playSound("two")}}>
            <Text style={styles.itemText}>two</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[3]},styles.item]}
          onPres={()=>{this.playSound("three")}}>
            <Text style={styles.itemText}>three</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[4]},styles.item]}
          onPres={()=>{this.playSound("four")}}>
            <Text style={styles.itemText}>four</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[5]},styles.item]}
          onPres={()=>{this.playSound("five")}}>
            <Text style={styles.itemText}>five</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[6]},styles.item]}
          onPres={()=>{this.playSound("six")}}>
            <Text style={styles.itemText}>six</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[7]},styles.item]}
          onPres={()=>{this.playSound("seven")}}>
            <Text style={styles.itemText}>seven</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[8]},styles.item]}
          onPres={()=>{this.playSound("eight")}}>
            <Text style={styles.itemText}>eight</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{backgroundColor: listBackgroundColors[9]},styles.item]}
          onPres={()=>{this.playSound("nine")}}>
            <Text style={styles.itemText}>nine</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridContainer:{
    flex: 1,
    margin: 5
  },
  logo:{
    alignSelf:"center",
    marginTop: 15
  },
  rowContainer:{
    flexDirection:"row"
    },
    item:{
      flex:1,
      height:110,
      alignItems:"center",
      justifyContent:"center",
      margin:2
    },
    itemText:{
      fontSize:20,
      color:"#FFF"
    }
});
