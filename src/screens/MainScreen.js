import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerleft}>
          <Image style={styles.dp} source={require('../images/default-dp.png')} />
          <Text style={styles.title}>Texty</Text>
        </View>
        <View style={styles.headerright}>
          <Icon name='search' size={20} color='white' style={styles.search}/>
          <Icon name='ellipsis-v' size={20} color='white' style={styles.ellipsis}/>
        </View>        
      </View>

      <View style={styles.footer}>
        <Entypo name='new-message' color='white' size={40} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  headerleft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerright: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,

  },
  dp: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  search: {
    marginRight: 20
  },
  ellipsis: {
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingRight: 10
  }
})
