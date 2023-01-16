import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Navbar = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>YOYOYOYOYOYO EUUUUUUUUUUUUUUUU</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Text style={styles.button}>Register</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        fontSize: 16,
        color: 'blue',
    },
    }

export default Navbar;