import React from "react"
import { Text, View, ScrollView, Button, TouchableOpacity } from "react-native"
import { Gatinho } from "./src/components/Gatinho"
import { styles } from "./styles"

export default function App() {

  const handlePress = () => {
    alert("aaaaaa")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HELLO WORLD</Text>
      <Gatinho />
      <Button onPress={handlePress} title="clique aqui" color='crimson' />
      <TouchableOpacity onPress={() => {handlePress()}} style={styles.botao}>
        <Text style={styles.texto}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  )
}

