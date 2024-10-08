import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '../globals/style';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
        <View style={styles.box}>
          <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/>
          <Text style={styles.text}>Burger</Text>

        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    // backgroundColor: 'red',
    width: '90%',
    // height: 100,
    // alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
  },
  head: {
    color: colors.text1,
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBlockColor: colors.text1,
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  myicon: {
    color: colors.text3,
    marginBottom: 10,
  },
  
})