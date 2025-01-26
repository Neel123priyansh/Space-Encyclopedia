import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Alert, Dimensions} from 'react-native';
import Constellation from '../assets/images/2979868e063e4833b5704556f2c63604.png'
import { useFonts } from 'expo-font';
import Comets from '../assets/images/Comet-delivers-to-Earth-e1699975532872.jpg' 
import Tabs from '../app/Bottom_Tab';
import Icon from 'react-native-vector-icons/AntDesign';
import Tts from 'react-native-tts';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VTabs from '../Vertical_Tab';
import * as Speech from 'expo-speech';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
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
const textToSpeak = `Mars, the fourth planet, has a diameter of 6,794 kilometres and it orbits at a distance of 228
million kilometres from the Sun. The surface gravity on Mars is 0.38 of the Earth's gravity and
the planet is about one tenth the size of Earth. Mars moves at a speed of 24 km per second
and takes about 780 days to complete one revolution around the Sun. One rotation on its
axis is completed in about 24 hours and 37 minutes. It has two moons called Phobos which is
23 kilometres in diameter and Deimos which is 13 kilometres in diameter. Since it is relatively
closer to the sun as compared to the other outer planets, the surface temperature ranges from
-9 degrees to -23 degrees centigrade. In the earlier centuries, the astronomers believed
that Mars was very much like Earth. The first photograph of Mars was taken by the Mariner 4
spacecraft in the year 1965, subsequently Mariner 8 took some in the year 1971. As a result of
these pictures, it was discovered that the surface of the planet is red in colour, rocky and dry.
In 1976, two unmanned Viking spacecraft were sent to this planet. The data sent back by the
spacecraft showed an absence of carbon atoms and living organisms in the atmosphere and
soil. From this finding, the scientists concluded that there would be no life on Mars and that it was
a dead planet. Mars has a red colour because of two reasons: firstly, the soil and rocks are largely
composed of iron which has rusted due to exposure to weather, giving them a reddish
appearance; secondly, the entire surface is covered with a fine dust which hangs in the air as a
result of which the sky tends to have a reddish colour rather than the usual blue. Mars has two polar
caps both of which are frozen and covered with ice. It also has a number of volcanoes and valleys
which indicate that there may have been or there may still be geological activity on this planet.`;
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
    <Image source={Comets} style={styles.Solarimg}/>
    <Text style={styles.textmain}>
    Comets, often referred to as "dirty snowballs" or "icy balls with tails," are fascinating celestial objects composed of ice, dust, and rocky material. When these cosmic wanderers approach the Sun, the heat causes their ices to vaporize and release gases, creating a glowing coma and often a spectacular tail that can stretch for millions of kilometers. These tails always point away from the Sun due to the solar wind and radiation pressure. Studying comets provides valuable insights into the early solar system, as they are considered some of the most primitive bodies, preserving the original materials from which the solar system formed.
    </Text>
    <Text style={styles.textmain2}>
    Comets are celestial bodies composed primarily of ice, dust, and rocky material. They originate from the outer regions of the solar system, notably the Kuiper Belt and the Oort Cloud, where they remain frozen and inactive until gravitational interactions or perturbations send them on trajectories toward the inner solar system. As comets approach the Sun, the increase in temperature causes their ices to sublimate, transitioning directly from solid to gas, which leads to the formation of a glowing coma—a diffuse cloud of gas and dust surrounding the comet's nucleus. The solar wind and radiation pressure then push these particles away, creating the distinctive tails that comets are known for. Typically, a comet has two tails: a dust tail, which curves and reflects sunlight, and an ion tail, which is straight and glows due to ionized gases.

The nucleus of a comet is a solid core, usually a few kilometers in diameter, and contains the bulk of the comet's mass. Despite their relatively small size, comets have highly eccentric orbits, taking them from the distant reaches of the solar system to the vicinity of the Sun. These orbits can take hundreds, thousands, or even millions of years to complete. When observed from Earth, comets can be spectacular sights, often visible to the naked eye as they streak across the sky. Some of the most famous comets, like Halley's Comet, which returns every 76 years, have been recorded and studied for centuries, providing valuable insights into the history and evolution of our solar system.

Historically, comets were often considered omens or harbingers of significant events. Ancient civilizations recorded their appearances and associated them with various cultural and religious significances. In modern times, comets have become subjects of scientific investigation. Missions like the European Space Agency's Rosetta spacecraft, which landed the Philae probe on comet 67P/Churyumov-Gerasimenko in 2014, have provided unprecedented close-up views and data. These missions have revealed much about the composition and behavior of comets, including the discovery of complex organic molecules that are considered building blocks of life.

Comets also play a crucial role in understanding the early solar system. They are considered remnants from its formation, preserving the original material that formed the planets. Studying this material helps scientists reconstruct the conditions that prevailed in the early solar system. The impact of comets on Earth has also been a topic of interest, as some hypotheses suggest that cometary collisions may have contributed to the delivery of water and organic compounds to our planet, potentially playing a role in the origin of life.
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
