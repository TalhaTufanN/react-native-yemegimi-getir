import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
export default function OrderPreparingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <WebView
        source={{
          html: `
            <html>
              <body style="margin:0;padding:0;background:white;display:flex;justify-content:center;align-items:center;height:100vh;">
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHRxcXY3cDQ3aTdmYjIzMm05MzhwamNhMG5jd2o3aTlma2E1ZGkyaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/chzB2YGcJenccIgqAz/giphy.gif" style="width:100%;height:100%;object-fit:contain;" />
              </body>
            </html>
    `,
        }}
        style={{ width: 300, height: 300, backgroundColor: "transparent" }}
      />
    </View>
  );
}
