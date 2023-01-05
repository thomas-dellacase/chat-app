import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import React, { useState } from 'react';
import Hyperlink from 'react-native-hyperlink';
// import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input
        placeholder='Enter your Username'
        label='Username'
        leftIcon={{ type: 'material', name:'username'}}
        value={username}
        onChangeText={text => setUsername(text)}
      /> 
      <Input
        placeholder='Enter your Password'
        label='Password'
        leftIcon={{ type: 'material', name:'password'}}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      <Button title='Sign In' />
      <Hyperlink linkDefault={ true }>
        <Text style={{ fontSize: 15, alignItems: 'center' }}>Not registered ? Sign up here !</Text>
      </Hyperlink>
    </View>
  )
};

export default LoginScreen