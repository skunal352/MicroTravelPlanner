import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { generateTrip } from '../utils/generateTrip';
import PlaceCard from '../components/PlaceCard';

import { db } from '../firebase/config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export default function CreateTripScreen({ route }) {
  const { location, hours, budget, category } = route.params;
  const [trip, setTrip] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const snapshot = await getDocs(collection(db, "places"));
      const places = snapshot.docs.map(doc => doc.data());
      setTrip(generateTrip(location, hours, budget, category, places));
    };
    fetchPlaces();
  }, []);

  const saveTrip = async () => {
    await addDoc(collection(db, "trips"), {
      userId: "user123",
      name: "Trip",
      places: trip.map(p => p.id),
      createdAt: new Date()
    });
    alert("Trip Saved!");
  };

  return (
    <View style={{flex:1,padding:20}}>
      <Text style={{fontSize:18,fontWeight:'bold'}}>Your Trip</Text>
      <FlatList data={trip} keyExtractor={item=>item.id} renderItem={({item})=> <PlaceCard place={item}/>} />
      <Button title="Save Trip" onPress={saveTrip}/>
    </View>
  );
}
