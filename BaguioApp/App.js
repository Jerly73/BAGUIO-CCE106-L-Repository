
import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/Statcard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom Dashboard</Text>

      <StatCard
        title="Total User"
        value="1,240"
        bgColor="#4f46e5"
      />
      <StatCard
        title="Revenue"
        value="$12,450"
        bgColor="#059669"
      />
      <StatCard
        title="Pending Issues"
        value="3"
        bgColor="#d97706"
      />

    </View>
  );
}

