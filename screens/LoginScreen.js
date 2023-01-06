import React, { useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements';
// import {Routes, Route, useNavigate} from 'react-router-dom';
// import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Input
        placeholder='Enter your Email'
        label='Email'
        leftIcon={{ type: 'material', name:'email'}}
        value={email}
        onChangeText={text => setEmail(text)}
      /> 
      <Input
        placeholder='Enter your Password'
        label='Password'
        leftIcon={{ type: 'material', name:''}}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      <Button title='Sign In' />
        <Text onPress={()=>{navigation.navigate('Register')}} style={{ fontSize: 15 }}>
          Not registered ? Sign up here !
        </Text>
    </View>
  )
};

export default LoginScreen