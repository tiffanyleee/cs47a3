import { StyleSheet, Text, SafeAreaView, FlatList} from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "./utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "./utils/constants";
import Colors from "./Themes/colors";
import { Pressable, View, Image } from 'react-native';


export default function Song({songIndex, albumImage, title, artist, album, duration}){
    return(
      <View style={styles.container}>
          <Text style={styles.numbering}>{songIndex}</Text>
          <Image style={styles.albImg} source={{uri: albumImage}} />  
          <View style={styles.songInfo}>
            <Text style={styles.song}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
          </View>
          <Text style={styles.album}>{album}</Text>
          <Text style={styles.duration}>{duration}</Text>
      </View>
      
    );
  }

const styles = StyleSheet.create({
    container: {    
        padding: 4,    
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'lightgrey',
        justifyContent: 'flex-start',
      },
    
      numbering: {
        color: 'black',
      },

      albImg: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: 'blue',
      },
    
      songinfo: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
    
      song:{
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Thonburi-Bold',
        color: 'white',
        backgroundColor:'purple',
      },
    
      artist:{
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Thonburi',
        color: 'white',
        backgroundColor: 'red',
        width: '100%',
      },
    
      album: {
        flex: 1,
        backgroundColor: 'green',
      },
    
      duration: {
        color: 'white',
        backgroundColor: 'orange',
      },
});