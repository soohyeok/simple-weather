import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherCases = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#304352", "#d7d2cc"],
        title: "Clouds",
        subTitle: "No need for 🕶 today.",
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subTitle: "You should stay inside.",
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#333333", "#e9d362"],
        title: "Thunderstorm",
        subTitle: "⚡️ Just don't get hit ⚡️",
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#136a8a", "#267871"],
        title: "Drizzle",
        subTitle: "It's kind of raining.",
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#616161", "#9bc5c3"],
        title: "Rain",
        subTitle: "Take your raincoat ☔️",
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#abbaab", "#ffffff"],
        title: "Snow",
        subTitle: "Want to build a ⛄️?",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ffd194", "#70e1f5"],
        title: "Clear",
        subTitle: "It's a nice day outside!",
    },
    Dust: {
        iconName: "weather-cloudy-alert",
        gradient: ["#1e130c", "#9a8478"],
        title: "Dust",
        subTitle: "Can you see anything? 👀",
    },
    Mist: {
        iconName: "weather-partly-rainy",
        gradient: ["#757f9a", "#d7dde8"],
        title: "Mist",
        subTitle: "Stay moisturized.",
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#b993d6", "#8ca6db"],
        title: "Fog",
        subTitle: `I tried to catch the fog.         But I mist.`,
    },
    Smoke: {
        iconName: "weather-cloudy-alert",
        gradient: ["#403b4a", "#e7e9bb"],
        title: "Smoke",
        subTitle: "I hope it's not your house.",
    },
    Sand: {
        iconName: "weather-cloudy-alert",
        gradient: ["#ff8008", "#ffc837"],
        title: "Sand",
        subTitle: "Time to get buried alive.",
    },
    Ash: {
        iconName: "weather-cloudy-alert",
        gradient: ["#16222a", "#3a6073"],
        title: "Ash",
        subTitle: "Good Luck!",
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#5c258d", "#4389a2"],
        title: "Squall",
        subTitle: "Don't get blown away.",
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#1f1c2c", "#928dab"],
        title: "Tornado",
        subTitle: "Stay out of the way.",
    },
};

export default function Weather ({temp, condition}){
    return(
        <LinearGradient
            colors={weatherCases[condition].gradient}
            style={styles.container}
            >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherCases[condition].iconName}
                    size={100}
                    color="#ffffff" />
                <Text style={styles.temp}>{temp}℉</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <View></View>
                <Text style={styles.title}>{weatherCases[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[condition].subTitle}</Text>
            </View>
        </LinearGradient>
        
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Dust",
        "Haze",
        "Mist",
        "Fog",
        "Smoke",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "#ffffff"
    },
    title: {
        color: "#ffffff",
        fontWeight: "300",
        fontSize: 55,
        marginBottom: 10,
    },
    subTitle: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 28,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
    },
});