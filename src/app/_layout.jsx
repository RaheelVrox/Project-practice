import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
        
          headerStyle: { backgroundColor: "#f9ede3" },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: true, title: "Devemver",}} />
      </Stack>
    </>
  );
}
