//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CardItem, Right } from 'native-base';
import StarRating from 'react-native-star-rating'

// create a component
class RecommendedCardItem extends Component {
    render() {
        const { imageUri, itemName, itemCreator, itemPrice, savings, rating } = this.props;
        return (
            <CardItem>
                <View>
                    <Image style={{height: 90, width: 60}} source={{uri: imageUri}}/>
                </View>
                <Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20 }}>
                    <Text>{itemName}</Text>
                    <Text style={{ color: 'grey', fontSize: 11 }}>{itemCreator}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{itemPrice}</Text>
                    <Text><Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
                        You save
                    </Text> ${savings}</Text>

                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={rating}
                        starSize={12}
                        fullStarColor='orange'
                        emptyStarColor='orange'
                    />
                </Right>
            </CardItem>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default RecommendedCardItem;
