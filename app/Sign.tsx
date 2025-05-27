import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

const { width, height } = Dimensions.get('window');
export default function Sign() {
    const [id, setId] = useState('');
    const [nickName, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleSignUp = () => {
        if (!id || !nickName || !password || !confirmPassword || !email) {
            Alert.alert('Please fill in all fields!')
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('The password doesn\' t match')
            return;
        }

        Alert.alert(
            'Success Sign UP!',
            '',
            [
                {
                    text: 'OK',
                    onPress: () => router.push('/Login'),
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
            // input 이 많을 때 KeyboardAvoidingView 를 넣어야함,
            // KeyboardAvoidingView 가 TouchableWithoutFeedback 보다 부모인 경우 스크롤했을 때
            // 키보드가 스크롤 도중 포커스를 잃고 사라지는 문제 발생
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1, backgroundColor : '#A2D2FF', borderTopStartRadius : 24, borderTopEndRadius : 24 }}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
                    <View style={styles.inputBGConatiner}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="ID"
                                placeholderTextColor={'#A2D2FF'}
                                style={styles.inputBar}
                                value={id}
                                onChangeText={setId}
                            />
                            <TextInput
                                placeholder="NickName"
                                placeholderTextColor={'#A2D2FF'}
                                style={styles.inputBar}
                                value={nickName}
                                onChangeText={setNickname}
                            />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={'#A2D2FF'}
                                style={styles.inputBar}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor={'#A2D2FF'}
                                style={styles.inputBar}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            <TextInput
                                placeholder="E-mail"
                                placeholderTextColor={'#A2D2FF'}
                                style={styles.inputBar}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                    </View>
                    </ScrollView>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <View style={styles.signBtnConatiner}>
                <TouchableOpacity
                    style={styles.signBtnView}
                    onPress={handleSignUp}>
                    <Text style={{ fontWeight: '700', fontSize: 20, color: '#10375C' }}>Sign UP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => router.back()}
                >
                    <Text style={{ fontWeight: '600', fontSize: 15, color: '#10375C' }}>Do you remember your ID? Go to Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontWeight: '700',
        fontSize: 26,
        color: '#10375C'
    },
    inputBGConatiner: {
        padding: 24,
        alignItems: 'center'
    },
    inputContainer: {
        width: '100%',
        height: width,
        justifyContent: 'space-between',
        paddingVertical: 32,
        marginBottom: 56,
    },
    inputBar: {
        paddingLeft: 12,
        backgroundColor: '#fff',
        height: 44,
        borderRadius: 8,
    },
    signBtnConatiner: {
        height: height*0.2,
        marginTop: 'auto',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal : 20,
        backgroundColor : '#A2D2FF',
        gap: 8,
    },
    signBtnView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#fff',
        height: 54,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        // Android shadow
        elevation: 5,
    },
})