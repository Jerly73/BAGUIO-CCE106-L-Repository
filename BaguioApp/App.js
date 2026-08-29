
import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/Statcard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header} >My Custom Dashboard</Text>

      <StatCard 
        title= "Total Users 👥"
        value="1,240"
        bgColor="#b384c9"
      />

      <StatCard
        title= "Revenue 💰"
        value="$12,450"
        bgColor="#c08da7"
      />

      <StatCard
        title= "Pending Issues ⚠️"
        value="3"
        bgColor="#d49ebe"
      />

    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: '#da74e580',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 300,
  },

  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7b0f94',
    textAlign: 'center',
  },
});