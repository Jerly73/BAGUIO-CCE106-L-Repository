import { View, Text, Image, Pressable } from "react-native";

export default function StudentCard({ student, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        marginHorizontal: 20,
        marginVertical: 8,
        padding: 12,
        borderRadius: 10,
      }}
    >
      <Image
        source={{ uri: student.image }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
        }}
      />

      <View style={{ marginLeft: 15, justifyContent: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {student.name}
        </Text>

        <Text style={{ color: "gray", marginTop: 5 }}>
          {student.course}
        </Text>
      </View>
    </Pressable>
  );
}