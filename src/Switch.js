import React from 'react';
import {
  View,
  Text,
  VrButton,
  StyleSheet,
} from 'react-360';
import { toggle } from './subscribe';

export default class Switch extends React.Component {

  toggleLight = () => {
    toggle();
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <VrButton style={styles.button}
              onClick={this.toggleLight}
            >
              <Text style={styles.buttonText}>Lights</Text>
            </VrButton>
          </View>
        </View>
      </React.Fragment>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderColor: '#639dda',
    borderWidth: 4,
    borderRadius: 8,
  },
  button: {
    width: 80,
    height: 40,
  },
  buttonText: {
    color: '#639dda',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical : 'center',
  }
});