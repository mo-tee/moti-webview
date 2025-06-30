import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { BackHandler, Platform, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const App = () => {
  const webViewRef = useRef(null);
  const canGoBack = useRef(false);

  const onBackPress = () => {
    if (canGoBack.current && webViewRef.current) {
      (webViewRef.current as any).goBack();
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    if (Platform.OS === "android") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );
      return () => backHandler.remove();
    }
  }, []);

  const onNavigationStateChange = (navState: any) => {
    canGoBack.current = navState.canGoBack;
  };

  return (
    <View style={styles.safeArea}>
      <WebView
        ref={webViewRef}
        style={styles.webView}
        source={{ uri: "http://10.150.2.232:3000" }}
        allowsBackForwardNavigationGestures={true}
        allowsFullscreenVideo={true}
        bounces={false}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        onNavigationStateChange={onNavigationStateChange}
      />
      <StatusBar style="auto" />
    </View>
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
