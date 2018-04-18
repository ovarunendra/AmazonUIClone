//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Icon, Right, Item, Input, Content } from 'native-base';

// create a component
class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={[{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575' }, styles.androidHeader]}>
                    <Left style={{flexDirection: 'row'}}>
                        <Icon name="md-menu" style={{color: 'white', marginRight: 15}} />
                        <Icon type="FontAwesome" name="amazon" style={{color: 'white', fontSize: 32}} />
                    </Left>
                    <Right>
                        <Icon name="md-cart" style={{color: 'white'}} />
                    </Right>
                </Header>
                <View style={{position: 'absolute', left: 0, right: 0, top: 90, 
                height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
                    <TouchableOpacity>
                        <View style={{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10}}>
                            <Text style={{fontSize: 12}}>Shop by</Text>
                            <Text style={{fontWeight: 'bold'}}>category</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex: 1, height: '100%', marginLeft: 5, justifyContent: 'center'}}>
                        <Item style={{backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4}}>
                            <Icon name="search" style={{fontSize: 20, paddingTop: 5}} />
                            <Input placeholder="Search" />
                        </Item>
                    </View>
                </View>

                <Content style={{backgroundColor: '#d5d5d6', marginTop: 70}}>
                    <View style={{height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5,
                        alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text>Hello, Varunendra</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Your Account </Text>
                            <Icon name="arrow-forward" style={{fontSize: 18}} />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight,
            }
        })
    }
});

//make this component available to the app
export default HomeScreen;
