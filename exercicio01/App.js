import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.superior} />
      <View style={styles.saske}>
        <View style={styles.dodorex} />
        <View style={styles.terezino} />
      </View>
      <View style={styles.dodo}>
        <View style={styles.quetzel} />
        <View style={styles.dilofossauro} />
      </View>
      <View style={styles.rex} />
      <View style={styles.argentavis}>
        <View style={styles.tapejara}/>
        <View style={styles.tapejara}/>
        <View style={styles.tapejara}/>
        <View style={styles.tapejara}/>
        <View style={styles.tapejara}/>
        <View style={styles.tapejara}/>
      </View>
      <View style={styles.megalodon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  superior: {
    width: "100%",
    height: "1%",
    backgroundColor: "lightblue"
  },
  saske: {
    height: '35%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  dodorex: {
    width: '30%',
    height: '40%',
    backgroundColor: "orange"
  },
  terezino: {
    width: '60%',
    height: '10%',
    backgroundColor: "orange"
  },
  dodo: {
    flexDirection: 'row',
  },
  quetzel: {
    width: '50%',
    height: 100,
    backgroundColor: 'purple'
  },
  dilofossauro: {
    flexWrap: 'wrap',
    width: '50%',
    height: '100%',
    backgroundColor: 'darkblue'
  },
  rex: {
    width: "100%",
    height: "1%",
    backgroundColor: "lightblue"
  },
  argentavis:{
    height: '40%',
    flex: '1',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 80
  },
  tapejara:{
    width: '25%',
    height: 80,
    backgroundColor: "orange",
    margin: 15
  },
  megalodon: {
    width: '100%',
    height: 50,
    backgroundColor: 'darkblue'
  }
});
