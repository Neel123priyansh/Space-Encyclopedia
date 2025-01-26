import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';

const { width, height } = Dimensions.get('window');
const Bottom_Tab = props => {
return (
     <BlurView intensity={9} experimentalBlurMethod="dimezisBlurView" style={{...styles.card, ...props.style}}>{props.children}
     </BlurView>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(220, 220, 220, 0.5)',
        borderRadius: 15,
        padding: 10,
        height: 107,
        position: 'absolute',
        overflow: 'hidden',
        marginTop: height * 0.67,
        marginLeft:  height * 0.03,
        width: '15%',
      }
});

export default Bottom_Tab;
