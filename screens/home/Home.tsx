import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Stories from '../../components/stories';
import maryImage from '../../assets/image/mary.jpg';

const personList = [{userName: 'mary', image: maryImage}];

class Home extends Component {
  constructor(props) {
    super(props);
  }
  // state = { :  }
  render() {
    return (
      <View>
        {personList.map(el => {
          return <Stories personName={el.userName} personImage={el.image} />;
        })}
        {/* <Text>home</Text> */}
      </View>
    );
  }
}

export default Home;
