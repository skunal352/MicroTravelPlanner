import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CreateTripScreen from './screens/CreateTripScreen';
import SavedTripsScreen from './screens/SavedTripsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateTrip" component={CreateTripScreen} />
        <Stack.Screen name="SavedTrips" component={SavedTripsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
