import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_URL } from "@env";

import { Routes } from "@typedef/Routes";

import Colors from "@helpers/colors";

import Home from "@screens/home";
import Ticket from "@screens/ticket";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator<Routes>();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Ticket" component={Ticket} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteMilk,
  },
});
