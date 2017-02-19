import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
const { textInputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={textInputStyle}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                placeholder={placeholder}
             />
        </View>
    )
};

const styles = StyleSheet.create({
    textInputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        color: '#000',
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };
