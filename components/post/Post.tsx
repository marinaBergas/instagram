import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import MyButton from '../../shared/myButton/MyButton';
import {SliderBox} from 'react-native-image-slider-box';

interface Props {
  personName: string;
  personImage: string;
  postImage: string[];
}

interface State {}

class Posts extends Component<Props, State> {
  imgArray = [];
  constructor(props) {
    super(props);
    this.imgArray.push(this.props.postImage);
  }
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
          <SliderBox
            style={styles.postImage}
            images={this.props.postImage}
            sliderBoxwidth={width}
            resizeMode="stretch"
            dotColor="#2295F7"
            inactiveDotColor="#ACACAC"
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 15,
              padding: 0,
              marginVertical: 10,
            }}
          />
        </View>
        <View style={styles.buttonCont}>
          <MyButton iconName="plus-square" />
          <MyButton iconName="heart" />
          <MyButton iconName="facebook-messenger" />
        </View>
      </View>
    );
  }
}

export default Posts;
const styles = StyleSheet.create({
  container: {
    width,
  },
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
    width: width,
    height: 200,
  },
});
