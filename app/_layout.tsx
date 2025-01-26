import SecondScreen from './Second';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import HomeScreen from './index';
import MoreScreen from './More'
import ConstellationScreen from '../Explore/Constellation';
import CometScreen from '../Explore/Comets';
import GalaxieScreen from '../Explore/Galaxies';
import CreationScreen from '../Explore/Creation';
import StarsScreen from '../Explore/Stars';
import LifeScreen from '../Explore/Life';
import BlackScreen from '../Explore/Black';
import MoreSideScreen from '../app/MoreSide';
import PlanetsScreen from '../More_Part/Planets'
import VenusScreen from '../More_Part/VenusP';
import EarthScreen from '../More_Part/EarthP';
import MarsScreen from '../More_Part/MarsP';
import JupiterScreen from '../More_Part/JupiterP';
import SaturnScreen from '../More_Part/SaturnP';
import UranusScreen from '../More_Part/Uranus';
import NeptuneScreen from '../More_Part/NeptuneP';
import SolarScreen from '../Explore/Solar';
const Stack = createStackNavigator();

export default function index() {


  const [fontsLoaded] = useFonts({
    'Spac' : require('../assets/fonts/SpaceGrotesk-SemiBold.ttf'), // Make sure the path to your font file is correct
  });
  if (!fontsLoaded) {
    return null; // Consider showing a loading screen or fallback UI
  }
  return (
  <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name="Main" component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name="Second" component={SecondScreen} options={{title: 'Encyclopedia', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3), alignContent: 'center', justifyContent: 'center' ,fontWeight: '500',}}} />
    <Stack.Screen name="More" component={MoreScreen} options={{title: 'Encyclopedia', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3), alignContent: 'center', justifyContent: 'center' ,fontWeight: '500',}}} />
    <Stack.Screen name="Constellation" component={ConstellationScreen} options={{title: 'Constellation', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3)}}} />
    <Stack.Screen name="Comets" component={CometScreen} options={{title: 'Comets', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3)}}} />
    <Stack.Screen name="Creation" component={CreationScreen} options={{title: 'Creation of Starts', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3)}}} />
    <Stack.Screen name="Galaxies" component={GalaxieScreen} options={{title: 'Galaxies', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3)}}} />
    <Stack.Screen name="Stars" component={StarsScreen} options={{title: 'Stars', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3)}}} />        
    <Stack.Screen name="Life" component={LifeScreen} options={{title: 'Life on other Planets', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac',fontSize: responsiveScreenFontSize(3)}}} />
    <Stack.Screen name="Black" component={BlackScreen} options={{title: 'Black Hole', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3)}}} />
    <Stack.Screen name="MorePl" component={MoreSideScreen} options={{title: '3D Planets', headerStyle: {backgroundColor: '#121221', elevation: 0}, headerTintColor: 'white', headerTitleStyle: {fontFamily: 'Spac', fontSize: responsiveScreenFontSize(3)}}} />
    <Stack.Screen name="MorePlanets" component={PlanetsScreen} options={{headerShown: false}} />
    <Stack.Screen name="VenusP" component={VenusScreen} options={{headerShown: false}} />
    <Stack.Screen name="EarthP" component={EarthScreen} options={{headerShown: false}} />
    <Stack.Screen name="MarsP" component={MarsScreen} options={{headerShown: false}} />
    <Stack.Screen name="JupiterP" component={JupiterScreen} options={{headerShown: false}} />
    <Stack.Screen name="SaturnP" component={SaturnScreen} options={{headerShown: false}} />
    <Stack.Screen name="UranusP" component={UranusScreen} options={{headerShown: false}} />
    <Stack.Screen name="NeptuneP" component={NeptuneScreen} options={{headerShown: false}} />
    <Stack.Screen name="Solar" component={SolarScreen} options={{headerShown: false}} />
    
  </Stack.Navigator>
</NavigationContainer>
  );
}
