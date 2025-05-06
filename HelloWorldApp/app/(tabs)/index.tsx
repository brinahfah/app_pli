import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white' }}
      headerImage={
        <Image
          source={require('@/assets/images/femme.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title"> Hello!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">My name is Elysee, I have 22 years old and I'm web designer</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Welcome to MyWorld!  </ThemedText>

          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: '',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          {``}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          {` `}
          <ThemedText type="defaultSemiBold"></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#0d0d0d',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    backgroundColor: '#0d0d0d'
  },
  reactLogo: {
    height: 250,
    width: 220,
    position: 'relative',
    bottom: 0,
    left: 110,
    top: 0,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  }
});
