/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet, StatusBar } from 'react-native'
import { execute } from 'react-native-rust-provider'

const App = () => {
 const [s1, setS1] = useState('')
 const [s2, setS2] = useState('')
 const [result, setResult] = useState('')

 const handleConcat = () => {
   const concat_cmd = JSON.stringify({
     Concat: {
      s1,
      s2
     }
   })

   const concatenated = JSON.parse(execute(concat_cmd))
   setResult(concatenated.res)
 }

 return (
   <View style={styles.container}>
     <TextInput
       style={styles.input}
       placeholder="Enter first string"
       value={s1}
       onChangeText={(text: string) => setS1(text)}
     />

     <TextInput
       style={styles.input}
       placeholder="Enter second string"
       value={s2}
       onChangeText={(text: string) => setS2(text)}
     />

     <View style={styles.buttonContainer}>
       <Button title="Concatenate" onPress={handleConcat} />
       </View>

     <Text style={styles.resultText}>Result: {result}</Text>
   </View>
 )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 resultText: {
   fontSize: 20,
   marginBottom: 10,
 },
 input: {
   height: 40,
   width: '80%',
   borderColor: 'gray',
   borderWidth: 1,
   marginBottom: 10,
   paddingHorizontal: 10,
 },
 buttonContainer: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   width: '80%',
 },
})

export default App