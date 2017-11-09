import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View style={styles.container}>
          <Image
            style={[styles.imageView]}
            source={require('./res/img/header.png')}>
              <Text style={styles.darkText}>Lets do it</Text>
          </Image>

          <Text style={{marginTop: 40}}>Username</Text>

          <TextInput
            style={styles.textInput}
            defaultValue="Email"
            numberOfLines={1}/>

          <Text style={{marginTop: 20}}>Password</Text>

          <TextInput
            style={styles.textInput}
            defaultValue="Password"
            numberOfLines={1}
            secureTextEntry={true}/>

          <View style={[styles.stretchComponent,
              styles.horizontalStack,
              styles.containerSpread,
              {marginTop: 20}]}>
            <TouchableOpacity
              style={styles.forgotPassword}>
              <Text>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signUp}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[styles.container, {justifyContent: 'flex-end', marginBottom: 20, alignItems: 'stretch'}]}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: "#292931", marginLeft: 20, marginRight: 20}]}
            onPress={() => navigate('Constellations', {})}>
              <Text style={{color: "#fff"}}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: "#4F75BF", marginTop: 20, marginLeft: 20, marginRight: 20}]}>
              <Text style={{color: "#fff"}}>Sign in with facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },

  imageView: {
    resizeMode: 'cover',
    height: 270,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'
  },

  darkText: {
    backgroundColor: '#0000',
    color: '#fff',
    textAlign: 'center',
    fontSize: 35
  },

  textInput: {
    height: 40,
    alignSelf: "stretch",
    textAlign: 'center'
  },

  stretchComponent: {
    alignSelf: "stretch"
  },

  forgotPassword: {
    marginLeft: 16
  },

  signUp: {
    marginRight: 16
  },

  horizontalStack: {
    flexDirection: 'row'
  },

  containerSpread: {
    justifyContent: 'space-between'
  },

  button: {
    padding: 20,
    alignItems: 'center'
  }
});
