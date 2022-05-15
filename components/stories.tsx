import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
interface Props {
  personName: string;
  personImage: string;
}
// const personList = [{userName: 'mary', image: maryImage}];
interface State {}

class Stories extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  // state = { :  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageCont}
          source={this.props.personImage}
          resizeMode="stretch"
        />
        <Text style={styles.text}>{this.props.personName}</Text>
      </View>
    );
  }
}

export default Stories;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    width: 100,
    height: 100,
  },
  buttonCont: {
    flexDirection: 'row',
  },
  imageCont: {
    borderRadius: width / 2,
    textAlign: 'center',

    width: 80,
    height: 80,
  },
  text: {
    textAlign: 'center',
  },
});
