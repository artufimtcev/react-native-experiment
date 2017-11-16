import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default class ConstellationsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={[styles.imageView]}
          source={require('./res/img/header_bg_1.png')}>
            <Text style={styles.lightText}>Constellations</Text>
        </Image>

        <FlatList style={styles.flatList}
          data={[
            { key: "Centaurus1" },
            { key: "Centaurus2" },
            { key: "Centaurus3" },
            { key: "Centaurus4" },
            { key: "Centaurus5" },
            { key: "Centaurus6" },
            { key: "Centaurus7" },
            { key: "Centaurus8" },
            { key: "Centaurus9" },
            { key: "Centaurus10" },
          ]}

          renderItem={({item}) => renderItem(item)}/>
      </View>
    )
  }
}

function renderItem(item) {
  return (
    <View style={styles.item}>
      <View style={[styles.itemContent, {justifyContent: 'space-between'}]}>
        <View style={styles.itemContent}>
          <Text>2 pm</Text>
          <Image
            style={[styles.avatar, {marginLeft: 10}]}
            source={require('./res/img/avatar.png')}/>
              <Text style={{marginLeft: 10}}>{item.key}</Text>
        </View>

        <View>
          <Image
          style={{width: 10, height: 10}}
          source={require('./res/img/status.png')}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  imageView: {
    resizeMode: 'cover',
    height: 270,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center'
  },

  lightText: {
    backgroundColor: '#0000',
    color: '#fff',
    textAlign: 'center',
    fontSize: 35
  },

  flatList: {
    flex: 1
  },

  item: {
    padding: 10,
    height: 66
  },

  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
})
