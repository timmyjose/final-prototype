/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, TextInput, Button, Text, StyleSheet, StatusBar } from 'react-native'
import { execute } from 'react-native-rust-provider'

const App = () => {
 const [x, setX] = useState(0)
 const [y, setY] = useState(0)
 const [result, setResult] = useState(0)

 const handleAdd = () => {
   const add_cmd = JSON.stringify({
     Add: {
       x: x,
       y: y,
     }
   })

   const sum = JSON.parse(execute(add_cmd))
   setResult(sum.res)
 }

 const handleSub = () => {
   const sub_cmd = JSON.stringify({
     Sub: {
       x: x,
       y: y
     }
   })
   const diff = JSON.parse(execute(sub_cmd))
   setResult(diff.res)
 }

 const handleMul = () => {
   const mul_cmd = JSON.stringify({
     Mul: {
       x: x,
       y: y
     }
   })

   const prod = JSON.parse(execute(mul_cmd))
   setResult(prod.res)
 }

 const handleDiv = () => {
   const div_cmd = JSON.stringify({
     Div: {
       x: x,
       y: y
     }
   })

   const quot = JSON.parse(execute(div_cmd))
   setResult(quot.res)
 }

 return (
   <View style={styles.container}>
     <TextInput
       style={styles.input}
       placeholder="Enter number 1"
       keyboardType="numeric"
       value={x.toString()}
       onChangeText={(text: string) => setX(parseFloat(text))}
     />

     <TextInput
       style={styles.input}
       placeholder="Enter number 2"
       keyboardType="numeric"
       value={y.toString()}
       onChangeText={(text: string) => setY(parseFloat(text))}
     />

     <View style={styles.buttonContainer}>
       <Button title="Add" onPress={handleAdd} />
       <Button title="Subtract" onPress={handleSub} />
       <Button title="Multiply" onPress={handleMul} />
       <Button title="Divide" onPress={handleDiv} />
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