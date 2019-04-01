import React, {Component} from 'react'
import {
  Text, Header, Container, Content, Left, Button, Body, Icon, Spinner
} from 'native-base'

import Axios from 'axios'

export default class LyricsScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      lyrics: null
    }
  }

  //life cycle methods
  componentDidMount(){
    const track_id = this.props.navigation.getParam('track_id')
    //alert(track_id)
    let startApi = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=json&track_id='
    let endApi = '&apikey=0298623f90e69244737105d190f71df6'
    let request = startApi+track_id+endApi

    Axios.get(request).then((res)=>{
      this.setState({lyrics: res.data.message.body.lyrics.lyrics_body, loading:false})
    })
  }


  render(){
    let track_id = this.props.navigation.getParam('track_id')
    let {loading } = this.state

    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body />
        </Header>
        <Content>
          {loading? (<Spinner color='#1d1d1d' />): 
          <Text>{this.state.lyrics}</Text>
        }
        </Content>
    </Container>
    )
  }
}
