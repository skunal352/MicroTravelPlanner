import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function SavedTripsScreen() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const q = query(collection(db, "trips"), where("userId", "==", "user123"));
      const snapshot = await getDocs(q);
      setTrips(snapshot.docs.map(doc => ({id:doc.id,...doc.data()})));
    };
    fetchTrips();
  }, []);

  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:18,fontWeight:'bold'}}>Saved Trips</Text>
      <FlatList data={trips} keyExtractor={item=>item.id} renderItem={({item})=> <Text>{item.name}</Text>} />
    </View>
  );
}
