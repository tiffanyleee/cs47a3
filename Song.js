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
        flex: 1/4,
        color: 'grey',
      },

      albImg: {
        flex: 1,
        resizeMode: 'contain',
        backgroundColor: 'blue',
        width: '100%',
        height: '100%',
      },
    
      songinfo: {
        flex: 3,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
    
      song:{
        flex: 2,
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Thonburi-Bold',
        color: 'white',
      },
    
      artist:{
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Thonburi',
        color: 'grey',
        width: '100%',
      },
    
      album: {
        flex: 1,
        backgroundColor: 'green',
        color: 'white',
      },
    
      duration: {
        flex: 1/2,
        color: 'white',
        backgroundColor: 'orange',
      },
});