import { fonts } from "@/utils/fonts";
import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

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
            style={[styles.input, { marginRight: 10 }]}
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
    borderRadius: 12,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  header: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
    fontFamily: fonts.Bold,
  },
  subHeader: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
    textTransform: "capitalize",
    fontFamily: fonts.Regular,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#000",
    fontFamily: fonts.Light,
  },
  inputFullWidth: {
    width: "100%",
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#000",
    marginBottom: 15,
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
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: fonts.Regular,
  },
  footerText: {
    color: "#000",
    textAlign: "center",
    marginTop: 15,
    fontFamily: fonts.Light,
  },
});
