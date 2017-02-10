import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const onPress = () =>
        Linking.openURL(url);

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.albumHeader}>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.coverImage}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={onPress}>Buy</Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    albumHeader: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnail: {
        height: 50,
        width: 50
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    coverImage: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
