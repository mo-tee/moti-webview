import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        style={styles.webView}
        source={{ uri: "https://motist.vercel.app" }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
