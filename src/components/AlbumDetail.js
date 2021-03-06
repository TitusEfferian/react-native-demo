import React from 'react';
import {
    Text,
    View,
    Image,
    Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image,image,url} = album;
    const {
        thumbnailImageStyle,
        headerContentStyle,
        thumnailImageContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;
    return(
       <Card>

           <CardSection>
               <View style={thumnailImageContainerStyle}>
                   <Image style={thumbnailImageStyle}
                          source={{uri: thumbnail_image}} />
               </View>
               <View style={headerContentStyle}>
                   <Text style={headerTextStyle}>{title}</Text>
                   <Text>{artist}</Text>
               </View>


           </CardSection>
           <CardSection>
               <Image
                   style={imageStyle}
                   source={{uri: image}}
               />

           </CardSection>
           <CardSection>
               <Button onPress={()=>Linking.openURL(url)}/>
           </CardSection>
        



       </Card>
     );

};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize:19
    },
    thumnailImageContainerStyle: {
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10

    },
    thumbnailImageStyle: {
        height:50,
        width:50,
        borderRadius:60
    },
    imageStyle: {
        height: 300,
        /*technique for full width with your container*/
        flex:1,
        width:null,
        borderRadius:3

    }
};

export default AlbumDetail;