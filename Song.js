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
          <Text style={styles.numbering}>{songIndex + 1}</Text>
          <Image style={styles.albImg} source={{uri: albumImage}} />  
          <View style={styles.songInfo}>
            <Text style={styles.song} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
            <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail" >{artist}</Text>
          </View>
          <Text style={styles.album} numberOfLines={2} ellipsizeMode="tail">{album}</Text>
          <Text style={styles.duration}>{duration}</Text>
      </View>
      
    );
  }

const styles = StyleSheet.create({
    container: {    
        padding: 6,    
        flex: 1,
        flexDirection: 'row',
      },
    
      numbering: {
        textAlignVertical: 'center',
        width: '5%',
        color: 'grey',
      },

      albImg: {
        backgroundColor: 'blue',
        width: '20%',
      },
    
      songInfo: {
        padding: 5,
        width: '35%',
      },
    
      song:{
        flex: 1,
        textAlignVertical: 'center',
        fontFamily: 'Thonburi-Bold',
        color: 'white',
        alignSelf: 'flex-start',
      },
    
      artist:{
        flex: 1,
        textAlignVertical: 'center',
        fontFamily: 'Thonburi',
        color: 'grey',
      },
    
      album: {
        padding: 5,
        width: '25%',
        color: 'white',
      },
    
      duration: {
        width: '10%',
        color: 'white',
      },
});