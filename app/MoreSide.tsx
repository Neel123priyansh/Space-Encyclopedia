import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { data } from '@/More_Part/DataP'
import { FlatList } from 'react-native-gesture-handler'
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { useFonts } from 'expo-font';


const Press = () => {
  Alert.alert("You Pressed");
}
export default function MoreSide({navigation}) {
  const [fontsLoaded] = useFonts({'Spacee' : require('../assets/fonts/SpaceGrotesk-Medium.ttf')
});
const navigateToScreen = (planetName) => {
  switch (planetName) {
    case 'Mercury':
      navigation.navigate('MorePlanets');
      break;
    case 'Venus':
      navigation.navigate('VenusP');
      break;
    case 'Earth':
      navigation.navigate('EarthP');
      break;
    case 'Mars':
      navigation.navigate('MarsP');
      break;
    case 'Jupiter':
      navigation.navigate('JupiterP');
      break;
    case 'Saturn':
      navigation.navigate('SaturnP');
      break;
    case 'Uranus':
      navigation.navigate('UranusP');
      break;
    case 'Neptune':
      navigation.navigate('NeptuneP');
      break;
    default:
      Alert.alert("No navigation available for this planet.");
      break;
  }
};
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#121221" translucent={true}/>
    <FlatList data={data} renderItem={({item, index})=>{
      return(
      <TouchableOpacity onPress={() => navigateToScreen(item.name)}>
      <View style={styles.itemview}>
        <Image source={item.artwork} style={styles.imagestyle}/>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      </TouchableOpacity>
      )
    }}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121221',
    alignContent: 'center',
  },
  itemview : {
    width: '90%',
    height: responsiveHeight(15),
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: responsiveFontSize(5), 
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: 10,
    fontFamily: 'Spacee',
  },
  imagestyle: {
    height: responsiveHeight(15),
    width: '100%',
    borderRadius: 10,
    alignContent: 'center',
    position: 'absolute',
    alignItems: 'center',
  }
})