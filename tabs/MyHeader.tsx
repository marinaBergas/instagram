import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import MyButton from '../shared/myButton/MyButton';
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
        <Text>{this.props.title}</Text>
        <View style={styles.buttonCont}>
          <MyButton iconName="plus-square" />
          <MyButton iconName="heart" />
          <MyButton iconName="facebook-messenger" />
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
