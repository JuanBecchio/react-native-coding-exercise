import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_URL } from "@env";

import { Routes } from "@typedef/Routes";

import Home from "@screens/home";
import Ticket from "@screens/ticket";
import { SafeAreaView } from "react-native-safe-area-context";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator<Routes>();

const windowDimensions = Dimensions.get("window");

export default function App() {
  return (
    <SafeAreaView
      style={{ width: windowDimensions.width, height: windowDimensions.height }}
    >
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
