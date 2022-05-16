import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

interface Props {
  placeHolder: string;
  label?: string;
  changeText?: () => {};
}

interface State {
  text: string;
}

class MyInput extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    let {placeHolder} = this.props;

    return (
      <View>
        <TextInput
          style={[styles.input, styles.locFontMed]}
          placeholder={placeHolder}
          placeholderTextColor={'#707070'}
          onChangeText={(text: string) => {
            this.setState({text});
          }}
        />
      </View>
    );
  }
}

export default MyInput;
const styles = StyleSheet.create({});
