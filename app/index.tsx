import { View, Button, Alert, StyleSheet, TouchableOpacity, Text, ImageBackground,Share, Image, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import bgimage from "../assets/images/background6.jpg";
import centerimage from '../assets/images/NGC_4414_(NASA-med).jpg'
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Index({navigation}) {
  const navigateToSecondScreen = () => {
    navigation.navigate('Second');
  };
  const navigateToMorePlantes = () => {
    navigation.navigate('More');
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Space Encyclopedia - 3D Solar System(CS)|3D Planets|AR Planets(CS)',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {

        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!');
  };
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Quicksand-Regular.ttf'),
    'Spacemono': require('../assets/fonts/SpaceMono-Italic.ttf'),
    'Spacex' : require('../assets/fonts/SpaceGrotesk-Light.ttf'),
    'Pro' : require('../assets/fonts/PROMETHEUS.ttf'),
    'Sans' : require('../assets/fonts/JosefinSans-Light.ttf'),
  });
  setTimeout(() => {
    SplashScreen.hideAsync();
  }, 5000); 
  
  return (
    <View style={styles.container}>
    <StatusBar hidden={true}/>
      <ImageBackground source={bgimage} style={styles.bgsimage}>
        <Image source={(centerimage)} style={styles.image}/>
        <Text style={styles.text}>SPACE ENCYCLOPEDIA</Text>
        <TouchableOpacity onPress={navigateToSecondScreen} style={styles.button}>
          <Text style={styles.text_explore}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToMorePlantes} style={styles.button}>
          <Text style={styles.text_explore}>More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare} style={styles.button}>
          <Text style={styles.text_explore}>Share</Text>
        </TouchableOpacity>
      </ImageBackground>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgsimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    objectFit: 'contain',
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: responsiveWidth(60),
    alignSelf: 'center',
    marginBottom: '5%',
  },
  text_explore: {
    fontSize: responsiveFontSize(4.7),
    color: 'black',
    justifyContent: 'flex-start',
    fontFamily: 'Sans',
    alignSelf: 'center',
    textAlign: 'center'
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: '10%',
    marginTop: '-9%',
    fontSize: responsiveFontSize(4.3),
    fontFamily: 'Inter-Black',
  },
  image: {
    height: responsiveScreenHeight(45),
    resizeMode: 'center',
    alignSelf: 'center',
    marginBottom: '7%'
  }
});
