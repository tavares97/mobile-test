import { Button, Text, View } from "react-native";

import React from "react";
import UsersList from "../Components/UsersList";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, paddingBottom: 30 }}>Home Screen</Text>

      <UsersList />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default HomeScreen;
