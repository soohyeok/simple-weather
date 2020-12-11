import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

import Loading from './components/Loading';
import Weather from './components/Weather';


const API_KEY = "9afcc00a799605728bc27ccc88438ae8"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const{
      data:{
        main: {temp},
        weather 
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=imperial`
    );
    this.setState({
      isLoading:false, 
      condition: weather[0].main, 
      temp
    });
    console.log(data.weather[0].main);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    }catch (error){
      Alert.alert("Can't find you.", "So sad.");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render (){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
