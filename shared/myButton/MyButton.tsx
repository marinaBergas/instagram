import {TouchableHighlight, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  iconName: string;
}
class MyButton extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableHighlight onPress={() => {}} style={styles.button}>
        <TouchableHighlight activeOpacity={0.2} underlayColor="#ddd000">
          <FontAwesome5 name={this.props.iconName} color="#000" />
        </TouchableHighlight>
        {/* <FontAwesome5 name="Home" color="#000" /> */}
      </TouchableHighlight>
    );
  }
}

export default MyButton;
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
  },
});
