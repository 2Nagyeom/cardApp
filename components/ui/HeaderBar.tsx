import React, { JSX } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type HeaderButton = {
    child: JSX.Element;
    onPress?: () => void;
}

type Props = {
    title?: String;
    leftButton?: HeaderButton;
    rightButton?: HeaderButton;
    style?: object
}

export const HeaderBar = ({ title, leftButton, rightButton, style }: Props) => (
    <View style={[styles.container, style]}>
        <View style={styles.leftContainer}>
            {leftButton && (
                <TouchableOpacity onPress={leftButton.onPress}>
                    {leftButton.child}
                </TouchableOpacity>
            )}
            {title && <Text style={styles.title}>{title}</Text>}
        </View>
        <View style={styles.rightContainer}>
            {rightButton && (
                <TouchableOpacity onPress={rightButton.onPress}>
                    {rightButton.child}
                </TouchableOpacity>
            )}
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        width: '100%',
        borderBottomWidth : 1,
        borderBottomColor : '#ECF0F4'

    },
    leftContainer: { 
        alignItems: 'center', 
        flexDirection : 'row', 
        justifyContent : 'center'  
    },
    centerContainer: { 
        flex: 2,
        alignItems: 'center' 
    },
    rightContainer: { 
        flex: 1, 
        alignItems: 'flex-end' 
    },
    title: { 
        fontSize: 30, 
        fontWeight: 'bold', 
        color: '#1A1A2E' 
    },
});