import {StyleSheet, Text, View } from 'react-native';
export default function StatCard(props)
{
    return(
        <view style={[styles.card, {backgroundcolor: props.bgColor }]}>
            <Text style={styles.title}>{props.title} </Text>
            <Text style={styles.value}>{props.value}</Text>
        </view>
    );
}
    const styles =StyleSheet.create({
        card: {
            padding: 20,
            borderRadius: 12,
            marginVertical: 10,
            width: '100',
        },
        title: {
            fontSize: 16,
            color: '#ffffff',
            fontWeight: '600',
        },
        value: {
            fontSize: 28,
            color: '#ffffff',
            fontWeight: 'bold',
            marginTop: 5,
        },
    });
