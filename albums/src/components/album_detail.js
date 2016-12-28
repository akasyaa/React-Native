import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Card from './card';
import CardSection from './card_section';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;

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
        </Card>
    );
};

const styles = StyleSheet.create({
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
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
    }
});

export default AlbumDetail;
