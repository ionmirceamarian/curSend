import { Redirect, Stack } from "expo-router";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function RootLayoutNav() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* This ensures all platforms redirect to login when not authenticated */}
      {!isLoggedIn && <Redirect href="/login" />}

      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            presentation: "fullScreenModal"
          }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
