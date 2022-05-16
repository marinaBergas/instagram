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
        <View style={styles.imageCont}>
          <Image
            style={styles.image}
            source={this.props.personImage}
            resizeMode="stretch"
          />
        </View>
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
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonCont: {
    flexDirection: 'row',
  },
  imageCont: {
    width: 75,
    // marginVertical: 50,
    borderWidth: 5,
    borderRadius: 1000,
    borderColor: '#262',
    // borderTopLeftRadius: 1000,
    // borderTopRightRadius: 1000,
    textAlign: 'center',

    height: 75,
  },
  image: {width: 65, height: 65, borderRadius: 2000, textAlign: 'center'},
  text: {
    textAlign: 'center',
  },
});
