import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

const register = () => {
  console.log('salut les putes')
  fetch('http://10.10.31.76:3000/api/users', { 
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    })
  })
  .then(data => data.json())
  .then(data =>  { 
      console.log(data);
      if(data.response){
          alert("Successfully Registered"); 
          console.log(response)
      } else{
          alert("Sorry, email has already been taken.");
          console.log(response)
      } 
  })
  .catch((err) => {
       alert ("This is a warning message!");
      console.error(err);
  })

}

const RegisterScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_validation, setPasswordValidation] = useState('');

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Input
        placeholder='Enter your First Name'
        label='First Name'
        leftIcon={{ type: 'material', name:'face'}}
        value={firstname}
        onChangeText={text => setFirstname(text)}
        id={firstname}
      /> 
      <Input
        placeholder='Enter your Last Name'
        label='Last Name'
        leftIcon={{ type: 'material', name:'face'}}
        value={lastname}
        onChangeText={text => setLastname(text)}
        id={lastname}
      />
      <Input
        placeholder='Enter your Email'
        label='Email'
        leftIcon={{ type: 'material', name:'email'}}
        value={email}
        onChangeText={text => setEmail(text)}
        id={email}
      /> 
      <Input
        placeholder='Enter your Password'
        label='Password'
        leftIcon={{ type: 'material', name:'lock'}}
        value={password}
        onChangeText={text => setPassword(text)}
        id={password}
        secureTextEntry
      />

      <Input
        placeholder='Confirm your Password'
        label='Password validation'
        leftIcon={{ type: 'material', name:'lock'}}
        value={password_validation}
        onChangeText={text => setPasswordValidation(text)}
        id={password_validation}
        secureTextEntry
      />
      
      <Button title='Register' onPress={()=> register()} />
        <Text onPress={()=>{navigation.navigate('Login')}} style={{ fontSize: 15 }}>
          Got an account ? Login here !
        </Text>
    </View>
  )
}

export default RegisterScreen