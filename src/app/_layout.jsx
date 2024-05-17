import { Stack } from "expo-router";
import {
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#f9ede3" },
          }}
        >
          <Stack.Screen
            name="index"
            options={{ headerShown: true, title: "Devemver" }}
          />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
