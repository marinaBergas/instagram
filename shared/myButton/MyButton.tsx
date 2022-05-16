import {TouchableHighlight, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface Props {
  iconName?: string;
  imgName?: string;
}
class MyButton extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableHighlight onPress={() => {}} style={styles.button}>
        <TouchableHighlight activeOpacity={0.2} underlayColor="#ddd000">
          {this.props.iconName ? (
            <FontAwesome5
              name={this.props.iconName}
              color="#000"
              style={styles.icon}
            />
          ) : (
            <Image source={this.props.imgName} style={styles.icon} />
          )}
        </TouchableHighlight>
      </TouchableHighlight>
    );
  }
}

export default MyButton;
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  icon: {
    fontSize: 15,
    width: 15,
    height: 15,
    marginHorizontal: 1,

  },
});
