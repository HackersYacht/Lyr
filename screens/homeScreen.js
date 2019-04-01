import React,  {
  Component
} from 'react'

import {
  Header, Container, Content, Item, Input, Icon, Text, Spinner
} from 'native-base'

import Axios from 'axios'
import SongsList from '../components/songsList'

export default class HomeScreen extends Component{
  constructor(props){
    super(props)

    this.state = {
      song: '',
      loading: false,
      songsList: null
    }
  }

  search(){
    //make the spinner run
    this.setState({loading:true})
    let {song} = this.state
    //alert(song)

    //make the api  request
    let apiEndpoint =
      'https://api.musixmatch.com/ws/1.1/track.search?format=json&q_track='+
      song+'&apikey=0298623f90e69244737105d190f71df6&page_size=100'

    Axios.get(apiEndpoint).then((res)=>{
      this.setState({songsList: res.data.message.body.track_list, loading:false})
    })
    .catch((err)=>{
        alert(err)
      })
  }

  render(){
    let {loading, songsList} = this.state

    return(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name='ios-search' />
            <Input
              autoFocus
              placeholder='your song, here'
              onChangeText={(song)=>this.setState({song})}
              onSubmitEditing = {()=>this.search()}
            />
          </Item>
        </Header>
        <Content>
          {loading? (<Spinner color='#1d1d1d' />): (
            <SongsList
              songs={songsList}
              navigation={this.props.navigation}
            />
          )}
        </Content>
      </Container>
    )
  }
}
