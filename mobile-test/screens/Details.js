import { StyleSheet, Text, View } from "react-native";

import React from "react";

function Details({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>User ID: {user._id}</Text>
        <Text style={styles.detailText}>
          Interest: {user.interest ? user.interest : "N/A"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  detailsContainer: {
    alignSelf: "stretch",
    backgroundColor: "#f7f7f7",
    padding: 10,
    borderRadius: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
});

export default Details;
