import {Text, View, StyleSheet,Image} from 'react-native';
import React, {Component} from 'react';
import MyButton from '../shared/myButton/MyButton';
import share from '../assets/image/share.png';
import instLogo from '../assets/image/logo.png'
interface Props {
  title: string;
}
export default class MyHeader extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={instLogo}/>
        <View style={styles.buttonCont}>
          <MyButton iconName="plus-square" />
          <MyButton iconName="heart" />
          <MyButton imgName={share} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  buttonCont: {
    flexDirection: 'row',
  },
});
