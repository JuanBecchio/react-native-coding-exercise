import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_URL } from "@env";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "@helpers/colors";

import Home from "@screens/home";
import Ticket from "@screens/ticket";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPastResult: {
            keyArgs: false,
          },
        },
      },
    },
  }),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Ticket" component={Ticket} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteMilk,
  },
});
