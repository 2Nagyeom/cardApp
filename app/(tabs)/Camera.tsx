import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } =Dimensions.get('window');

export default function TabTwoScreen() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<Camera | null>(null);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    // 카메라 촬영
    const takePhoto = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync()
            console.log('take picture', photo.uri);
            router.push({
                pathname : '/Scan',
                params : {uri : photo.uri}
            });
        }
    }

    
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {backgroundColor : '#10375C', borderRadius : 12, padding : 12}]} onPress={toggleCameraFacing}>
                    <Text style={styles.text}>Flip Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor : '#A2D2FF', borderRadius : 12, padding : 12}]} onPress={takePhoto}>
                    <Text style={styles.text}>Take Photo</Text>
                </TouchableOpacity>
            </View>
            <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#000',
        zIndex : 2,
        top : 0,
        paddingBottom : width*0.04,
        paddingHorizontal : 20,
        width : width,
        height : height * 0.18,
        gap : 12,
        position : 'absolute'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
