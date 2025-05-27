import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get('window');
export default function Sign() {
    const [id, setId] = useState(''); 
    const [nickName, setNickname] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [email, setEmail] = useState(''); 


    const handleSignUp = () => {
        if(!id || !nickName || !password || !confirmPassword || !email) {
            Alert.alert('Please fill in all fields!')
            return;
        }

        if(password !== confirmPassword) {
            Alert.alert('The password doesn\' t match')
            return;
        }

        Alert.alert(
            'Success Sign UP!',
            '',
            [
                {
                    text : 'OK',
                    onPress : () => router.push('/Login'),
                },
            ]
        );
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ height: height * 0.24, paddingTop: height * 0.06, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.titleText}>Card Lab's</Text>
                <Text style={styles.titleText}>Member Registration</Text>
                <Text style={styles.titleText}>Welcome!</Text>
            </View>
            <View style={styles.inputBGConatiner}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="ID"
                        placeholderTextColor={'#A2D2FF'}
                        style={styles.inputTextView}
                        value={id}
                        onChangeText={setId}
                    />
                    <TextInput
                        placeholder="NickName"
                        placeholderTextColor={'#A2D2FF'}
                        style={styles.inputTextView}
                        value={nickName}
                        onChangeText={setNickname}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor={'#A2D2FF'}
                        style={styles.inputTextView}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor={'#A2D2FF'}
                        style={styles.inputTextView}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor={'#A2D2FF'}
                        style={styles.inputTextView}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.signBtnConatiner}>
                    <TouchableOpacity 
                        style={styles.signBtnView}
                        onPress={handleSignUp}>
                        <Text style={{ fontWeight: '700', fontSize: 20, color: '#10375C' }}>Sign UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{ alignItems: 'center' }}
                        onPress={() => router.push('/Login')}
                        >
                        <Text style={{ fontWeight: '600', fontSize: 15, color: '#10375C' }}>Do you remember your ID? Go to Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText : { 
        fontWeight: '700', 
        fontSize: 26, 
        color: '#10375C' 
    },
    inputBGConatiner : { 
        flex: 1, 
        padding: 24, 
        backgroundColor: '#A2D2FF', 
        borderRadius: 24, 
        alignItems: 'center' 
    },
    inputContainer : { 
        width: '100%', 
        height: width, 
        justifyContent: 'space-between', 
        paddingVertical: 32, 
        marginBottom : 16 
    },
    inputTextView : { 
        paddingLeft: 12, 
        backgroundColor: '#fff', 
        height: 44, 
        borderRadius: 8,
    },
    signBtnConatiner : { 
        flex: 1, 
        marginTop: 'auto', 
        justifyContent: 'center', 
        width: '100%', 
        gap: 8 
    },
    signBtnView : {
        alignItems: 'center', justifyContent: 'center', borderRadius: 12, backgroundColor: '#fff', height: 50, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        // Android shadow
        elevation: 5,
    },
})