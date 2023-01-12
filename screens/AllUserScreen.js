import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Image, FlatList } from 'react-native';

const AllUserScreen = ({ navigation }) =>{

    const getAllUser = () =>{
        console.log('mon cul')

        fetch('http://10.10.31.76:3000/api/users', {
            method: 'GET',
            body: {'Content-Type': 'application/json'}
        })

        .then(response => response.json())
        .then(data =>{
            result=data;
            
            if(data.result.length !== 0){
                data.results.forEach(element =>{
                    let firstname = element.firstname;
                    let lastname = element.lastname;
                    let email = element.email;
                })
                console.log('data')
            }
        })
    }
        return (
            <View>
            <FlatList
                data={this.state.users}
                renderItem={({ item }) => (
                <View>
                    <Text>{item.email}</Text>
                    <Text>{item.firstname}</Text>
                    <Text>{item.lastname}</Text>
                </View>
                )}
                keyExtractor={item => item.id}
            />
            </View>
        );
    };