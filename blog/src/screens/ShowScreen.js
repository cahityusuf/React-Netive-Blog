import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext"
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(BlogContext);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"))


    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () =>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("EditScreen",{id:navigation.getParam("id")})
                }>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        
    };
};
const styles = StyleSheet.create({});

export default ShowScreen;