import React, { useState } from "react"
import { Text, View, ScrollView, Button, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native"
import { Gatinho } from "./src/components/Gatinho"
import { styles } from "./styles"
import sla from './src/assets/unknown.png'

export default function App() {
  const [nome, setNome] = useState("")
  const [isTrue, setIsTrue] = useState(false)
  const [imagem, setImagem] = useState("")

  const handlePress = () => {
    // alert("aaaaaa")

    setIsTrue(!isTrue)
  }

  return (
    <View style={styless.container}>
      <View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
      </View>
      <View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
      </View>
      <View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
        <View style={styless.superior}></View>
      </View>
    </View>
  )
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  containerColuna: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  texto: {
    color: "#fff",
    fontSiza: 50,
    marginBottom: 100
  },
  superior: {
    flexDirection: "row",
    height: 100,
    width: 100,
    backgroundColor: "powderblue",
    margin: 15
  },
  meio: {
    height: 100,
    width: 100,
    backgroundColor: "skyblue",
    margin: 15
  },
  inferior: {
    height: 100,
    width: 100,
    backgroundColor: "darkblue",
    margin: 15
  },
  saske: {
    height: 100,
    width: 100,
    backgroundColor: "orange",
    margin: 15
  }
})



// const Flexbox = () => {
//   return(
//       <View style={styless.container}>
//           <Text style={styless.texto}>FLEXBOX</Text>
//       </View>
//   )
// }

// const styless = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#31313",
//     height: 300
//   },
//   texto: {
//     color:"#fff",
//     fontSiza: 50
//   }
// })

// export default Flexbox
