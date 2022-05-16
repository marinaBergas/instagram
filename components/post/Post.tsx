import React, {Component, Fragment} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
interface Props {
  personName: string;
  personImage: string;
  postImage: string;
}

interface State {}

class Posts extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headcont}>
          <View style={styles.imageCont}>
            <Image
              style={styles.image}
              source={this.props.personImage}
              resizeMode="stretch"
            />
          </View>
          <Text>{this.props.personName}</Text>
        </View>
        <View style={styles.postcont}>
          <Image
            style={styles.postImage}
            source={this.props.postImage}
            resizeMode="stretch"
          />
        </View>
        <View></View>
      </View>
    );
  }
}

export default Posts;
const styles = StyleSheet.create({
  container: {},
  headcont: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5,
    // marginVertical: 5,
    width: 80,
    height: 60,
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonCont: {
    flexDirection: 'row',
  },
  imageCont: {
    width: 32,
    borderRadius: 1000,
    textAlign: 'center',
    marginHorizontal: 10,
    height: 32,
  },
  image: {width: 32, height: 32, borderRadius: 2000, textAlign: 'center'},
  text: {
    textAlign: 'center',
  },
  postImage: {
    width: width,
    height: 200,
  },
  postcont: {
    width: 200,
    height: 200,
  },
});
