import { IconSymbol } from "@/components/ui/IconSymbol";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { User } from "./TYPE/userInfo";
import { APIS } from "./apis/APIS";

const { width, height } = Dimensions.get('window');
export default function Sign() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickName, setNickname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agAll, setAgAll] = useState(false);
    const [agSms, setAgSms] = useState(false);
    const [agAlarm, setAgAlarm] = useState(false);
    const [agEmail, setAgEmail] = useState(false);

    const toggleAll = () => {
        const newValue = !agAll;
        setAgAll(newValue)
        setAgSms(newValue)
        setAgAlarm(newValue)
        setAgEmail(newValue)
    }

    const toggleItem = (
        currentValue: boolean,
        setValue: React.Dispatch<React.SetStateAction<boolean>>,
        otherStates: boolean[],
        setAll: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        const newValue = !currentValue;
        setValue(newValue);

        // 해제하면 무조건 전체 동의 해제
        if (!newValue) {
            setAll(false);
            return;
        }

        // 전부 true가 되면 전체 동의 체크
        const allChecked = otherStates.every(Boolean);
        if (allChecked) setAll(true);
    };


    const handleSignUp = async () => {
        if (!name || !nickName || !password || !confirmPassword || !email || !phoneNumber) {
            Alert.alert('Please fill in all fields!')
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('The password doesn\' t match')
            return;
        }

        const payload: User = {
            email,
            name,
            password,
            confirmPassword,
            nickname: nickName,
            phoneNumber,
            receiveSms: agSms,
            receiveEmail: agEmail,
            receivePush: agAlarm
        }

        try {
            const result = await APIS.signup(payload)

            if (result.status === 'already_registered') {
                Alert.alert('You already signed up!');
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
        } catch (e: any) {
            Alert.alert('Signup failed', e.message || 'Unknown error');
            console.error(e);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FDFDFD', paddingHorizontal: 24 }}>
            <View style={{ height: height * 0.24, paddingTop: height * 0.1, justifyContent: 'center', alignItems: 'flex-start' }}>
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
                    style={{ flex: 1, borderTopStartRadius: 24, borderTopEndRadius: 24 }}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.inputBGConatiner}>
                            <View style={styles.inputContainer}>
                                <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
                                    <Text style={{ fontSize: 16, color: '#BBBBBB', width: width * 0.16 }}>Email</Text>
                                    <TextInput
                                        placeholder="please input your Email"
                                        placeholderTextColor={'#BBBBBB'}
                                        style={styles.inputBar}
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                                <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
                                    <Text style={{ fontSize: 16, width: width * 0.16, color: '#BBBBBB' }}>Name</Text>
                                    <TextInput
                                        placeholder="please input your Name"
                                        placeholderTextColor={'#BBBBBB'}
                                        style={styles.inputBar}
                                        value={name}
                                        onChangeText={setName}

                                    />
                                </View>
                                <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
                                    <Text style={{ fontSize: 14, width: width * 0.16, color: '#BBBBBB' }}>Password</Text>
                                    <TextInput
                                        placeholder="8 characters or more including special symbols"
                                        placeholderTextColor={'#BBBBBB'}
                                        style={styles.inputBar}
                                        value={password}
                                        onChangeText={setPassword}

                                    />
                                </View>
                                <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
                                    <Text style={{ fontSize: 16, width: width * 0.16, color: '#BBBBBB' }}>Repeat</Text>
                                    <TextInput
                                        placeholder="diff Password"
                                        placeholderTextColor={'#BBBBBB'}
                                        style={styles.inputBar}
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}

                                    />
                                </View>
                                <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
                                    <Text style={{ fontSize: 14, width: width * 0.16, color: '#BBBBBB' }}>Nickname</Text>
                                    <TextInput
                                        placeholder="please input your Nickname"
                                        placeholderTextColor={'#BBBBBB'}
                                        style={styles.inputBar}
                                        value={nickName}
                                        onChangeText={setNickname}

                                    />
                                </View>
                                <View style={{ paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
                                    <Text style={{ fontSize: 16, width: width * 0.16, color: '#BBBBBB' }}>Phone</Text>
                                    <TextInput
                                        placeholder="please input your Phonenumber"
                                        placeholderTextColor={'#BBBBBB'}
                                        style={styles.inputBar}
                                        value={phoneNumber}
                                        onChangeText={setPhoneNumber}

                                    />
                                </View>
                            </View>
                            <Text style={{ color: '#C5C5C5' }}>The email address is used as a required guide.</Text>
                            <View style={[styles.inputContainer, { gap: 10 }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 4 }}>
                                    <TouchableOpacity onPress={toggleAll}><IconSymbol name={agAll ? 'chevron.down.circle.fill' : 'chevron.down.circle'} color="#A2D2FF" /></TouchableOpacity>
                                    <Text style={{ fontSize: 16 }}>Agree with all of the receiving methods</Text>
                                </View>
                                <View style={{ borderWidth: 0.5, marginVertical: 8, borderColor: '#BBBBBB' }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 4 }}>
                                    <TouchableOpacity
                                        onPress={() => toggleItem(agSms, setAgSms, [agAlarm, agEmail], setAgAll)}
                                    >
                                        <IconSymbol name={agSms ? 'chevron.down.circle.fill' : 'chevron.down.circle'} color="#A2D2FF" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 16 }}>Agree to receive sms</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 4 }}>
                                    <TouchableOpacity
                                        onPress={() => toggleItem(agAlarm, setAgAlarm, [agSms, agEmail], setAgAll)}
                                    >
                                        <IconSymbol name={agAlarm ? 'chevron.down.circle.fill' : 'chevron.down.circle'} color="#A2D2FF" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 16 }}>Agree to Notify</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 4 }}>
                                    <TouchableOpacity
                                        onPress={() => toggleItem(agEmail, setAgEmail, [agSms, agAlarm], setAgAll)}
                                    >
                                        <IconSymbol name={agEmail ? 'chevron.down.circle.fill' : 'chevron.down.circle'} color="#A2D2FF" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 16 }}>Agree to Email</Text>
                                </View>
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
        fontSize: 24,
        color: '#10375C'
    },
    inputBGConatiner: {
        paddingVertical: 24,
        paddingHorizontal: 4,
        // alignItems: 'center',
        gap: 16
    },
    inputContainer: {
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 12,
        // paddingBottom : 32,
        borderRadius: 12,
        shadowColor: '#BBBBBB',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 5,

    },
    inputBar: {
        flex: 1,
        height: 44,
        fontSize: 14,
        borderBottomWidth: 2,
        borderBottomColor: '#F3F3F3'
    },
    signBtnConatiner: {
        height: height * 0.2,
        marginTop: 'auto',
        justifyContent: 'center',
        width: '100%',
        gap: 8,
    },
    signBtnView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#A2D2FF',
        height: 54,
        shadowColor: '#BBBBBB',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 5,
    },
})