import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { useRouter } from "expo-router";

import students from "../students/students";
import StudentCard from "../components/StudentCard";

export default function Index() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          margin: 20,
        }}
      >
        Student Directory
      </Text>

      <TextInput
        placeholder="Search student..."
        value={search}
        onChangeText={setSearch}
        style={{
          backgroundColor: "white",
          marginHorizontal: 20,
          marginBottom: 10,
          padding: 15,
          borderRadius: 10,
        }}
      />

      {filteredStudents.length === 0 ? (
        <Text
          style={{
            textAlign: "center",
            marginTop: 50,
            fontSize: 18,
          }}
        >
          No students found.
        </Text>
      ) : (
        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StudentCard
              student={item}
              onPress={() => router.push(`/students/${item.id}`)}
            />
          )}
        />
      )}

    </View>
  );
}