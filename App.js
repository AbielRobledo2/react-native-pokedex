//Dependencies
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

//Screens
import MenuPokedex from './src/screens/MenuPrincipal';
import PokemonInformation from './src/screens/PokemonInformation';

//Components

//Initializations
const client = new ApolloClient({
  uri: 'https://dex-server.herokuapp.com/',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="menu-principal" component={MenuPokedex} />
          <Stack.Screen
            name="pokemon-information"
            component={PokemonInformation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
