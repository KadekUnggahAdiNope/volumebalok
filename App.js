import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Hitungvolumebalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffcccc' }}>

      <View style={{ height: 24, backgroundColor: 'black' }} />

        <View style={{ backgroundColor: '#f8a5c2' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
            Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
            <TextInput
            style={{ height: 40 }}
              placeholder="Masukkan Panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
             style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />
            <TextInput
             style={{ height: 40 }}
              placeholder="Masukkan  lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.lebar * this.state.tinggi * this.state.panjang)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color='#f8a5c2'
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#f8a5c2' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Panjang {'\t'}= {this.state.panjang} {'\n'}
              Tinggi  {'\t'}{'\t'}= {this.state.tinggi} {'\n'}
              Lebar   {'\t'}{'\t'}= {this.state.lebar} {'\n'}
              Volume {'\t'}{'\t'}= {this.state.volume}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => Hitungvolumebalok);
