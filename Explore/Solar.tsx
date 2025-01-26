import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { datass } from './Datass'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const Solar = () => {
  return (
    <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#121221" translucent={true}/>
        <FlatList data={datass}  horizontal renderItem={({item, index})=>{
        return(
            <LinearGradient colors={['#3c50e0', '#00df9a']} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={styles.itemview}>
                <Image source={item.uri} style={styles.imagestyle}/>
                <Text style={styles.name}>{item.name}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.content}>{item.para}</Text>
                </ScrollView>
            </LinearGradient>
        )
      }}>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121221',
        flex: 1
      },
      itemview : {
        width: responsiveScreenWidth(92),
        height: responsiveScreenHeight(85),
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: responsiveScreenWidth(4),
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 3
      },
      name: {
        fontSize: responsiveFontSize(6), 
        alignSelf: 'center',
        color: 'white',
        alignItems: 'center',
        fontFamily: 'Spacee',
        marginTop: '3%',
      },
      imagestyle: {
        height: responsiveHeight(40),
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
      },
      content: {
        fontSize: responsiveFontSize(2), 
        alignSelf: 'center',
        color: 'white',
        alignItems: 'center',
        position: 'relative',
        fontFamily: 'Spacee',
        marginTop: '1%',
        textAlign: 'center',
        paddingHorizontal: '1%',
      },
}) 
export default Solar