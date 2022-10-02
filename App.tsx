import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {type PropsWithChildren} from 'react';

const ButtonComp: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({title}) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.backAndSkipContainer}>
        <Image  source={{uri: 'https://i.postimg.cc/N0BdD55x/back-arrow.png'}} style={{height:30,width:30}}/>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Where are you based?</Text>
          <TextInput
            placeholder="Ex: London"
            placeholderTextColor="#a89d9d"
            style={styles.locationInput}></TextInput>
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonComp title="Detect automatically" />
          <ButtonComp title="Continue" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  secondContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 120,
  },
  backAndSkipContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  skipText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  locationText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#4e3636',
    fontWeight: '500',
    marginBottom: 20,
  },
  locationInput: {
    borderWidth: 1,
    paddingVertical: 8,
    borderColor: '#dedede',
    borderRadius: 10,
    width: '90%',
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 8,
    backgroundColor: '#543b3b',
    marginBottom: 20,
    borderRadius: 10,
    width: '90%',
  },
  buttonText: {
    fontSize: 17,
    fontWeight:"400",
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
