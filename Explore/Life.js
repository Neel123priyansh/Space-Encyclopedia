import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Alert, Dimensions} from 'react-native';
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import { useFonts } from 'expo-font';
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import Life from '../assets/images/Life.png';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTabs from '../Vertical_Tab';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import * as Speech from 'expo-speech';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { width, height } = Dimensions.get('window');

export default function Second({navigation}){

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const ARhandlePress = () => {
    Alert.alert('AR PLANETS COMING SOON.');
  };
  const navigatetoplanets = () => {
    navigation.navigate('MorePl')
  };
  const navigateToHomeScreen = () => {
    navigation.navigate('Main');
  };
  const navigatetosolar = () =>{
    navigation.navigate('Solar');
  };
  const handlePress = () => {
    Alert.alert('Image Pressed');
  };
  const buttonvertical = () => {
    setIsOpen(!isOpen);
  }

  const [fontsLoaded] = useFonts({'Spacee' : require('../assets/fonts/SpaceGrotesk-Medium.ttf')
});
const [isPaused, setIsPaused] = useState(false);
const [isStopped, setIsStopped] = useState(false);
const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
const chunksRef = useRef([]);
const textToSpeak = `It cannot be said with conviction that the Earth is the only planet with any life on it because
astronomers and space scientist are still trying to look for life on other planets. From what we
know of other planets it is however established that life supporting condition do not exist on
any other planets in our universe. To be able to support life the planet must not have extreme
variation in night and day temperature, they must have an atmosphere which has the right mix
of gases which can support life etc. As an example Venus, which is closest to Earth, has an
atmosphere which is composed of carbon dioxide and clouds made up of sulfuric acid - both
of which cannot support the type of life that exist on Earth. Life is further non-existent because
the atmospheric pressure on Venus is very high temperatures sour: for up to 450 degrees
centigrade. There are small quantities of water on Mars but they are frozen because of the low
temperature on the planet. From the above two example and from what we know of the other
planets we can see that, since none of the planets known to man so far have the necessary
conditions required to support life, no life has been found anywhere expect on the Earth.`;
useEffect(() => {
  if (isPaused || isStopped) return;
  if (chunksRef.current.length > 0 && currentChunkIndex < chunksRef.current.length) {
    Speech.speak(chunksRef.current[currentChunkIndex], {
      language: 'en-US',
      pitch: 1,
      rate: 0.9,
      onDone: () => {
        setCurrentChunkIndex(prev => prev + 1);
      }
    });
  }
}, [currentChunkIndex, isPaused, isStopped]);

const splitTextIntoChunks = (text) => {
  const maxChunkLength = 100; // Define maximum length of each chunk
  const regex = new RegExp(`.{1,${maxChunkLength}}(\\s|$)`, 'g');
  return text.match(regex) || [];
};

const handleSpeak = () => {
  setIsStopped(false);
  const chunks = splitTextIntoChunks(textToSpeak);
  chunksRef.current = chunks;
  setCurrentChunkIndex(0);
};

const handlePause = () => {
  setIsPaused(true);
  Speech.stop();
};

const handleResume = () => {
  setIsPaused(false);
};

const handleStop = () => {
  setIsStopped(true);
  Speech.stop();
  chunksRef.current = [];
  setCurrentChunkIndex(0);
};

  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Image source={Life} style={styles.Solarimg}/>
    <Text style={styles.textmain}>
    The search for life on other planets is one of the most intriguing and profound scientific endeavors. Scientists explore this possibility by studying planets both within our solar system and in distant star systems, looking for conditions that might support life. Key factors include the presence of liquid water, an energy source, and the right chemical ingredients, such as carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur.
    </Text>
    <Text style={styles.textmain2}>
    It cannot be said with conviction that the Earth is the only planet with any life on it because
astronomers and space scientist are still trying to look for life on other planets. From what we
know of other planets it is however established that life supporting condition do not exist on
any other planets in our universe. To be able to support life the planet must not have extreme
variation in night and day temperature, they must have an atmosphere which has the right mix
of gases which can support life etc. As an example Venus, which is closest to Earth, has an
atmosphere which is composed of carbon dioxide and clouds made up of sulfuric acid - both
of which cannot support the type of life that exist on Earth. Life is further non-existent because
the atmospheric pressure on Venus is very high temperatures sour: for up to 450 degrees
centigrade. There are small quantities of water on Mars but they are frozen because of the low
temperature on the planet. From the above two example and from what we know of the other
planets we can see that, since none of the planets known to man so far have the necessary
conditions required to support life, no life has been found anywhere expect on the Earth.
    </Text>
    </ScrollView>
    {isOpen && (
      <VTabs>
        <View style={styles.dropdownContent}>
          <TouchableOpacity onPress={handleSpeak}>
            <Icon2 name='volume-2' size={35}></Icon2>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStop}>
            <Icon2 name='volume-off' size={35}></Icon2>
          </TouchableOpacity>
        </View>
        </VTabs>
      )}
    <Tabs style={styles.tab}>
    <TouchableOpacity onPress={toggleDropdown} style={styles.icon}>
    <Icon name='up' size={40}></Icon>
    </TouchableOpacity>
    <Pressable onPress={navigatetoplanets} style={styles.icon}>
     <Icon name='rocket1'  size={35}></Icon>
    </Pressable>
    <Pressable onPress={navigateToHomeScreen} style={styles.icon}>
     <Icon name='home' color="#ffffff" size={40}></Icon>
    </Pressable>
    <Pressable onPress={navigatetosolar} style={styles.icon}>
     <Icon name='book'  size={35}></Icon>
    </Pressable>
    <Pressable onPress={ARhandlePress} style={styles.icon}>
     <Icon name='earth'  size={35}></Icon>
    </Pressable>
    </Tabs>
    </View>
  );
};
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#121221',
  },
  Solarimg: {
    justifyContent: 'center',
    height: responsiveScreenHeight(30),
    width: '100%',
    resizeMode: 'cover',
    marginBottom: '3%',
  },
  textmain: {
    textAlign: 'center',
    overflow: 'hidden',
    fontFamily: 'Spacee',
    color: '#9494C7',
    fontSize: responsiveFontSize(1.5),
    flexGrow: 1,
    flex: 1,
    justifyContent: 'flex-start'
  },
  textmain2: {
    textAlign: 'left',
    paddingLeft: '2%',
    overflow: 'hidden',
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Spacee',
    fontWeight:'300',
    flexGrow: 1,
    color: 'rgb(255 255 255)',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 110,
  },
  tab: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    padding: -20,
  },
  
  icon: {
    borderRadius: 50,
    height: responsiveScreenHeight(5),
    width: 40,
  },

  dropdownContent: {
    justifyContent: 'space-evenly',
    flexDirection:'column',
    gap:20,
    borderRadius:40,
    paddingBottom: '5%',
    paddingLeft: '15%'
  }
  });

