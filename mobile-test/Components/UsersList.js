import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { fetchUserData } from "../API/fetchUsers";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";

function UsersList() {
  const navigation = useNavigation();

  const { data, error, isLoading } = useQuery("userData", fetchUserData);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>An error occurred: {error.message}</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {data.users.map((user) => (
        <TouchableOpacity
          key={user._id}
          style={styles.row}
          onPress={() => navigation.navigate("Details", { user })}
        >
          <Text style={styles.cell}>{user._id}</Text>
          <Text style={styles.cell}>{user.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 400,
    backgroundColor: "lightgrey",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 4,
    marginBottom: 4,
  },
  headerText: {
    fontWeight: "bold",
    flex: 1,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
});

export default UsersList;
