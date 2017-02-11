import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                style={styles.textInputStyle}
                value={value}
                onChangeText={onChangeText}
             />
        </View>
    )
};

const styles = StyleSheet.create({
    textInputStyle: {
        height: 20,
        width: 300
    }
});

export { Input };
