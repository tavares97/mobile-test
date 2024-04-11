import * as React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import DetailsScreen from "./screens/Details";
import HomeScreen from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import UsersList from "./Components/UsersList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: true,
    },
  },
});
const Stack = createNativeStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "User Details" }}
          />
          <Stack.Screen
            name="UsersList"
            component={UsersList}
            options={{ title: "User List" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
