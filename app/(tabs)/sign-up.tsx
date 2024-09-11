import { Link } from "expo-router";
import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.subHeader}>
          Enter your information to create an account
        </Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#555"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#555"
          />
        </View>
        <TextInput
          style={styles.inputFullWidth}
          placeholder="sleeky@example.com"
          placeholderTextColor="#555"
        />
        <TextInput
          style={styles.inputFullWidth}
          placeholder="********"
          secureTextEntry={true}
          placeholderTextColor="#555"
        />
        <Pressable style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>
        <View>
          <Text style={styles.footerText}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "blue" }}>
              Login
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "ffff",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 15,
  },
  header: {
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "PoppinsBold",
    fontSize: 30,
  },
  subHeader: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "PoppinsMedium",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    width: "20%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#000",
    fontFamily: "PoppinsLight",
  },
  inputFullWidth: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#000",
    marginBottom: 15,
    fontFamily: "PoppinsLight",
  },
  signUpButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
  footerText: {
    color: "#000",
    textAlign: "center",
    marginTop: 15,
    fontFamily: "PoppinsLight",
  },
});
