import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';

const { width, height } = Dimensions.get('window');

const Bottom_Tab = (props: { style: any; children: any; }) => {
return (
     <BlurView intensity={0} experimentalBlurMethod="dimezisBlurView" style={{...styles.card, ...props.style}}>{props.children}
     </BlurView>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(220, 220, 220, 0.5)',
        borderRadius: 25,
        flexDirection: 'row',
        height: responsiveScreenHeight(9),
        position: 'absolute',
        width: '94%',
        bottom: '3%',
        elevation: 0
      }
});

export default Bottom_Tab;
