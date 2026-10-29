import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age , setAge ] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0
  const Lower  = (220-ageAsNumber) * 0.65
  const Upper = (220-ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput 
        placeholder='0'
        keyboardType='number-pad'
        value={age}
        onChangeText={setAge}
        />
      <Text>Lower Limit: {Lower.toFixed(2)} bpm</Text>
      <Text>Upper limit: {Upper.toFixed(2)} bpm</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
