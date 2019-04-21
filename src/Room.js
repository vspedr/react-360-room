import React from 'react';
import {
  View,
  PointLight,
  NativeModules,
  // AmbientLight,
  asset,
} from 'react-360';
import Entity from 'Entity';
import { subscribe } from './subscribe';

const { AudioModule } = NativeModules;

export default class Room extends React.Component {
  state = {
    lightsOn: false,
  };

  componentDidMount() {
    subscribe(this.toggleLight);
    AudioModule.createAudio('jazz', {
      source: asset('bensound-thejazzpiano.mp3'),
      is3d: true,
    });
    AudioModule.play('jazz', {
      position: [-3, 0, 0],
      loop: true,
      volume: 0.3,
    });
  }

  toggleLight = () => {
    const { lightsOn } = this.state;
    this.setState({ lightsOn: !lightsOn });
  }

  render() {
    return (
      <View>
        <Entity
          lit
          source={{
            obj: asset('model.obj'),
            mtl: asset('materials.mtl'),
          }}
          style={{
            transform: [
              { translateX: -1.0 },
              { translateY: -1.0 },
              { translateZ: -0.5 },
              { rotateY: 90 },
            ],
          }}
        />
        {/* <AmbientLight intensity={this.state.lightsOn ? 1.0 : 0.5} /> */}
        <PointLight
          style={{
            transform: [
              { translateY: 2.0 },
            ],
          }}
          intensity={this.state.lightsOn ? 1.0 : 0.5}
        />
      </View>
    );
  }
};
