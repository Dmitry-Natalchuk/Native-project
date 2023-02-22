import { useState } from "react";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading";
import {
    TextInput,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView, 
    Keyboard} from "react-native"

    const userRegister = {
        email: "",
        password: ""

  }
    const fontStyle = async() => {
        await Font.loadAsync({
            "Regular": require("../assets/fonts/Roboto-Regular.ttf"),
            "Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        });
    }

export const LoginScreen = () => {
    const[showKeyboard,setShowKeyboard] = useState(false)
    const[register,setRegister] = useState(userRegister)
    const[isFontReady,setIsFontReady] = useState(false)

    const eventKeyboard = () => {
        setShowKeyboard(true)
        Keyboard.dismiss()
        setRegister(userRegister)
    }

    if(!isFontReady){
        return <AppLoading 
        startAsync={fontStyle}
        onFinish={() => setIsFontReady(true)}
        onError={console.warn} />
    }
    return (
        <View style ={{...styles.div, paddingBottom : showKeyboard ? 44 : 10}}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Text style={styles.titleRegistration}>Войти</Text>
                <TextInput
                    style={styles.email} 
                    placeholder="Адрес электронной почты "
                    value={register.email}
                    onChangeText={(value) => setRegister((prevRegister) =>({...prevRegister,email:value}))}
                    placeholderTextColor={"#BDBDBD"}
                    keyboardType="email-address"
                    onFocus={()=> setShowKeyboard(true)}>
                </TextInput>
                <TextInput 
                    style={styles.password} 
                    placeholder="Пароль" 
                    value={register.password}
                    onChangeText={(value) => setRegister((prevRegister) =>({...prevRegister,password:value}))}
                    secureTextEntry={true}
                    placeholderTextColor={"#BDBDBD"}
                    onFocus={()=> setShowKeyboard(true)}>
                </TextInput>
            </KeyboardAvoidingView>
                <TouchableOpacity 
                    style={styles.btn} 
                    activeOpacity={0.5}
                    onPress={eventKeyboard}>
                <Text style={styles.btnText}>Войти</Text>
                </TouchableOpacity>
                <Text style={styles.registerText}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    div:{
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    titleRegistration: {
       fontSize: 30,
       fontFamily:"Medium",
       textAlign: "center",
       marginTop: 52,
       marginBottom:32,
       lineHeight: 35,
    },
    email: {
        marginHorizontal: 16,
        backgroundColor: "#F6F6F6",
        fontFamily:"Regular",
        borderWidth: 1,
        marginBottom: 16,
        padding: 16,
        height: 50,
        fontSize: 16,
        borderColor: "#E8E8E8",
        border: "1px solid",
        borderRadius: 8,
    },
    password: {
        marginHorizontal: 16,
        backgroundColor: "#F6F6F6",
        fontFamily:"Regular",
        borderWidth: 1,
        padding: 16,
        height: 50,
        fontSize: 16,
        borderColor: "#E8E8E8",
        border: "1px solid",
        borderRadius: 8,
    },
    btn: {
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"Regular",
        height:51,
        fontSize: 16,
        marginHorizontal: 16,
        backgroundColor:"#FF6C00",
        borderRadius: 100,
        marginTop: 43,
    },
    btnText: {
        color:"#FFFFFF",
        fontFamily:"Regular",
        fontSize: 16,

    },
    registerText: {
        textAlign: "center",
        fontFamily:"Regular",
        color:"#1B4371",
        marginTop: 16,
        fontSize: 16,

    }

  });