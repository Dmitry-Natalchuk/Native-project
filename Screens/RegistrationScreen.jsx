import { useState } from "react";
import {
    TextInput,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView, 
    Keyboard} from "react-native"

export const RegistrationScreen = () => {
    const[showKeyboard,setShowKeyboard] = useState(false)

    const eventKeyboard = () => {
        setShowKeyboard(true)
        Keyboard.dismiss()
    }
    return (
        <View style ={{...styles.div, paddingBottom : showKeyboard ? 20 : 10}}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Text style={styles.titleRegistration}>Регистрация</Text>
                <TextInput 
                    style={styles.login}
                    placeholder="Логин"
                    placeholderTextColor={"#BDBDBD"}
                    onFocus={()=> setShowKeyboard(true)}>    
                    </TextInput>
                <TextInput 
                    style={styles.email} 
                    placeholder="Адрес электронной почты "
                    placeholderTextColor={"#BDBDBD"}
                    keyboardType="email-address"
                    onFocus={()=> setShowKeyboard(true)}>
                </TextInput>
                <TextInput 
                    style={styles.password} 
                    placeholder="Пароль" 
                    secureTextEntry={true}
                    placeholderTextColor={"#BDBDBD"}
                    onFocus={()=> setShowKeyboard(true)}>
                </TextInput>
            </KeyboardAvoidingView>
                <TouchableOpacity 
                    style={styles.btn} 
                    activeOpacity={0.5}
                    onPress={eventKeyboard}>
                <Text style={styles.btnText}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <Text style={styles.registerText}>Уже есть аккаунт? Войти</Text>
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
       textAlign: "center",
       marginTop: 52,
       lineHeight: 35,
    },
    login: {
        marginHorizontal: 16,
        borderWidth: 1,
        marginTop: 32,
        fontSize: 16,
        marginBottom: 16,
        height: 50,
        padding: 16,
        background: "#F6F6F6",
        borderColor: "#E8E8E8",
        border: "1px solid",
        borderRadius: 8,
    },
    email: {
        marginHorizontal: 16,
        borderWidth: 1,
        marginBottom: 16,
        padding: 16,
        height: 50,
        fontSize: 16,
        background: "#F6F6F6",
        borderColor: "#E8E8E8",
        border: "1px solid",
        borderRadius: 8,
    },
    password: {
        marginHorizontal: 16,
        borderWidth: 1,
        padding: 16,
        height: 50,
        fontSize: 16,
        background: "#F6F6F6",
        borderColor: "#E8E8E8",
        border: "1px solid",
        borderRadius: 8,
    },
    btn: {
        justifyContent:"center",
        alignItems:"center",
        height:51,
        fontSize: 16,
        marginHorizontal: 16,
        backgroundColor:"#FF6C00",
        borderRadius: 100,
        marginTop: 43,
    },
    btnText: {
        color:"#FFFFFF",
        fontSize: 16,

    },
    registerText: {
        textAlign: "center",
        color:"#1B4371",
        marginTop: 16,
        fontSize: 16,

    }

  });