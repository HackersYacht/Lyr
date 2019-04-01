import React from 'react'
import {
  FlatList, View, TouchableOpacity
} from 'react-native'

import {
  Text
} from 'native-base'

export default ({songs, navigation})=>(
  <FlatList
    data={songs}
    keyExtractor={(item, index)=>JSON.stringify(index)}
    renderItem={({item})=>(
      <TouchableOpacity style={{flex: 1, padding: 10,}}
          onPress={()=>navigation.navigate('Lyrics', {
            track_id: item.track.track_id,
            songTitle: item.track.track_name
          })}
        >
        <Text>{item.track.track_name}</Text>
        <Text note>by {item.track.artist_name}</Text>
      </TouchableOpacity>
    )}
  />
)
