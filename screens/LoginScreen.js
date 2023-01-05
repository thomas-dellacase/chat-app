import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Input
        placeholder='Enter your Username'
        label='Username'
        leftIcon={{ type: 'material', name:'key'}}
        value={username}
        onChangeText={text => setUsername(text)}
      /> 
      <Input
        placeholder='Enter your Password'
        label='Password'
        leftIcon={{ type: 'material', name:'password'}}
        value={username}
        onChangeText={text => setPassword(text)}
      /> 
    </View>
  )
};

export default LoginScreen