import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Headertxt() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To Do List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        paddingLeft: 20,
    },
    title: {
        textAlign: 'left',
        color: '#000080',
        fontSize: 35,
        fontWeight: 'bold',
    }
});