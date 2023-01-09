import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

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
        leftIcon={{ type: 'material', name:'lock'}}
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