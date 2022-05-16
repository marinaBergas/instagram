import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Stories from '../../components/stories/stories';
import maryImage from '../../assets/image/mary.jpg';
import Posts from '../../components/post/Post';

const personList = [
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
  {userName: 'mary', image: maryImage},
];
const postList = [
  {
    userName: 'mary',
    userImage: maryImage,
    postImage: [maryImage, maryImage],
  },
  {
    userName: 'mary',
    userImage: maryImage,
    postImage: [maryImage, maryImage, maryImage, maryImage],
  },
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
        <View style={styles.container}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {personList.map(el => {
              return (
                <Stories personName={el.userName} personImage={el.image} />
              );
            })}
          </ScrollView>
        </View>
        <View>
          {postList.map(el => {
            return (
              <Posts
                postImage={el.postImage}
                personName={el.userName}
                personImage={el.userImage}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#dbdbdb',
    borderBottomWidth: 2,
    // marginBottom: 30,
  },
  storiesCont: {
    flexDirection: 'row',
    width: '100%',
    // justifyContent: 'space-around',
    // marginVertical: 2,
    // paddingHorizontal:5,
    // overFlow: 'scroll',
  },
  buttonCont: {
    flexDirection: 'row',
  },
});
