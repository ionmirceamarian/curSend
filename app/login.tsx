import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";

export default function LoginScreen() {
    const { login, register } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        if (isLogin) {
            // Use the login function from AuthContext
            login(email, password);
            router.replace("/");
        } else {
            // Handle registration logic here
            if (password !== confirmPassword) {
                alert("Passwords don't match!");
                return;
            }
            // Use the register function from AuthContext
            register(email, password);
            router.replace("/");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/images/react-logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.appName}>CurSend</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.title}>{isLogin ? "Login" : "Register"}</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {!isLogin && (
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                )}

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>{isLogin ? "Login" : "Register"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.switchButton}
                    onPress={() => setIsLogin(!isLogin)}
                >
                    <Text style={styles.switchText}>
                        {isLogin
                            ? "Don't have an account? Register"
                            : "Already have an account? Login"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 60,
        marginBottom: 40,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    appName: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 10,
        color: "#2E86C1",
    },
    formContainer: {
        flex: 1,
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#2E86C1",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    switchButton: {
        marginTop: 20,
        alignItems: "center",
    },
    switchText: {
        color: "#2E86C1",
        fontSize: 16,
    },
});