import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Reqct from 'react'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.boldText}>Hello world</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>lorem ipsum <Text></Text> dolor st amet</Text>
        <Text>lorem ipsum dolor st amet</Text>
        <Text>lorem ipsum dolor st amet</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
   backgroundColor: 'pink',
   padding : 20,
  },

  boldText: {
    fontWeight: 'bold',
   },
   body: {
    backgroundColor: 'yellow',
    padding : 20,
    fontWeight: 'bold'
   },
});
