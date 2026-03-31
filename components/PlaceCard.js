import React from 'react';
import { View, Text } from 'react-native';

export default function PlaceCard({ place }) {
  return (
    <View style={{padding:10,margin:5,backgroundColor:'#eee',borderRadius:8}}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>{place.name}</Text>
      <Text>Category: {place.category}</Text>
      <Text>Rating: {place.rating}</Text>
    </View>
  );
}
