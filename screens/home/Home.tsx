import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Stories from '../../components/stories/stories';
import maryImage from '../../assets/image/mary.jpg';

const personList = [
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
];

class Home extends Component {
  state = {
    screenWidth: 0,
  };
  constructor(props) {
    super(props);
  }

  // state = { :  }
  render() {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {personList.map(el => {
            return <Stories personName={el.userName} personImage={el.image} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  storiesCont: {
    flexDirection: 'row',
    width: '100%',
    // justifyContent: 'space-around',
    marginVertical: 2,
    // paddingHorizontal:5,
    // overFlow: 'scroll',
  },
  buttonCont: {
    flexDirection: 'row',
  },
});
