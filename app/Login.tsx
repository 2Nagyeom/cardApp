import { router } from "expo-router";
import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";


const { width, height } = Dimensions.get('window')
export default function Login() {

    // expo-router에서는 페이지 이동(네비게이션)을 위해 반드시 useRouter 훅을 사용해야 합니다:
    return (
        <SafeAreaView style={styles.bgContainer}>
            <View style={styles.imgContainer}>
                <Image source={require('@/assets/icons/cardLabIcon.png')} style={{ marginTop : 24, alignSelf: 'center', width: 180, height: 180 }} />
                <Text style={{ textAlign: 'center', color: '#10375C', fontWeight: '700' }}>A place where you know the market price of all the cards in the world</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    style={{ flex: 1 }}
                >
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputBar}
                            placeholder="ID"
                            placeholderTextColor={'white'} />
                        <TextInput
                            style={styles.inputBar}
                            placeholder="PWD"
                            placeholderTextColor={'white'}
                            // text pwd '*' 표시
                            secureTextEntry={true} />
                        <TouchableOpacity>
                            <Text style={{ textAlign: 'right', color: '#BFD7EA' }}>Don't you remember the password?</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <View style={styles.loginContainer}>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => router.push('/(tabs)/Home')}>
                    <Text style={{ textAlign: 'center', color: '#10375C', fontWeight: '600', fontSize: 24 }}>LOGIN</Text>
                </TouchableOpacity>
                {/* <View style={{ marginTop: height * 0.1, gap: 12 }}>
                    <View style={styles.otherLoginLine}>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#1A1A2E' }} />
                        <Text style={{ textAlign: 'center', color: '#1A1A2E', fontWeight: '500', fontSize: 16 }}>other login</Text>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#1A1A2E' }} />
                    </View>
                    <View style={styles.otherLoginBtnContainer}>
                        <TouchableOpacity style={[styles.otherLoginBtn, { backgroundColor: 'black' }]}>
                            <Image source={require('@/assets/icons/apple_logo.png')} style={{ width: 38, height: 38 }} />
                            <Text style={{ fontWeight: '600', color: 'white' }}>Go to Apple</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.otherLoginBtn, { borderWidth: 2, borderColor: '#DADADA' }]}>
                            <Image source={require('@/assets/icons/google_logo.png')} style={{ width: 34, height: 34 }} />
                            <Text style={{ fontWeight: '600' }}>Go to Google</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>
            <View style={{ marginTop: 'auto', marginBottom : 8, height: height * 0.04, justifyContent: 'flex-start' }}>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => router.push('/Sign')
                    }>
                    <Text style={{ color: '#1A1A2E', fontWeight: '500', fontSize: 14 }}>Are you a new user? Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 24,

    },
    imgContainer: {
        marginVertical : 32,
        alignItems: 'center',
    },
    inputContainer: {
        flex : 1,
        gap: 12,
        marginVertical : 16,
    },
    inputBar: {
        width: width - 48,
        height: 44,
        paddingHorizontal: 12,
        backgroundColor: '#BFD7EA',
        borderRadius: 8
    },
    loginContainer: {
        flex: 1,
        justifyContent : 'flex-end',
        marginBottom : 32,
    },
    loginBtn: {
        width: width - 48,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#A2D2FF'
    },
    otherLoginLine: {
        width: width - 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
    },
    otherLoginBtnContainer: {
        width: width - 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    otherLoginBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'space-between',
        padding: 8,
        paddingHorizontal: 12,
        borderRadius: 8
    }
})