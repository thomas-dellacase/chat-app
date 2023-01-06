import React, { useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { Input, Button } from 'react-native-elements';

const RegisterScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Input
        placeholder='Enter your First Name'
        label='First Name'
        leftIcon={{ type: 'material', name:'firstname'}}
        value={firstname}
        onChangeText={text => setFirstname(text)}
      /> 
      <Input
        placeholder='Enter your Last Name'
        label='Last Name'
        leftIcon={{ type: 'material', name:'lastname'}}
        value={lastname}
        onChangeText={text => setLastname(text)}
      />
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
        leftIcon={{ type: 'material', name:'password'}}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      
      <Button title='Register' />
        <Text onPress={()=>{navigation.navigate('Login')}} style={{ fontSize: 15 }}>
          Got an account ? Login here !
        </Text>
    </View>
  )
}

export default RegisterScreen