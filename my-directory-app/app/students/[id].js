import React from "react";

import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import students from "../../students/students";

export default function StudentDetails() {

  const { id } = useLocalSearchParams();

  const student = students.find(
    (item) => item.id === id
  );

  if (!student) {
    return (
      <View style={styles.container}>
        <Text>Student not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.name}>
        {student.name}
      </Text>

      <Text style={styles.course}>
        Course: {student.course}
      </Text>

      <Text style={styles.id}>
        Student ID: {student.id}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f4f7",
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 25,
  },

  course: {
    fontSize: 18,
    marginTop: 10,
    color: "#555",
  },

  id: {
    fontSize: 16,
    marginTop: 8,
    color: "#777",
  },
});