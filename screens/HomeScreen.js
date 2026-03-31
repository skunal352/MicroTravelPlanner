import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [hours, setHours] = useState('');
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('');

  const handleGenerate = () => {
    navigation.navigate('CreateTrip', {
      location: { lat: parseFloat(lat), lng: parseFloat(lng) },
      hours: parseInt(hours),
      budget: parseInt(budget),
      category: category
    });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Latitude:</Text>
      <TextInput value={lat} onChangeText={setLat} keyboardType="numeric" style={{borderWidth:1,marginBottom:10}}/>
      <Text>Longitude:</Text>
      <TextInput value={lng} onChangeText={setLng} keyboardType="numeric" style={{borderWidth:1,marginBottom:10}}/>
      <Text>Hours Available:</Text>
      <TextInput value={hours} onChangeText={setHours} keyboardType="numeric" style={{borderWidth:1,marginBottom:10}}/>
      <Text>Budget Level:</Text>
      <TextInput value={budget} onChangeText={setBudget} keyboardType="numeric" style={{borderWidth:1,marginBottom:10}}/>
      <Text>Category:</Text>
      <TextInput value={category} onChangeText={setCategory} style={{borderWidth:1,marginBottom:10}}/>
      <Button title="Generate Trip" onPress={handleGenerate} />
      <Button title="Saved Trips" onPress={() => navigation.navigate('SavedTrips')} />
    </ScrollView>
  );
}
