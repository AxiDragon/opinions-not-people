import "@/assets/styling/style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/colors";
import { UserProvider } from "@/context/UserContext";
import IntroConversation from "@/components/chat/conversations/IntroConversation";
import Interrogation from "@/components/chat/conversations/Interrogation";
import { users } from "@/assets/users/users";
import { useEffect, useState } from "react";
import DragSort from "@/components/dragdrop/DragSort";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <IntroConversation />,
    <Interrogation interrogatee={users.JASMIN} questionCount={3} />,
    <DragSort />,
  ]

  const handleConversationEnd = () => {
    setCurrentScreen(currentScreen + 1);
  }

  useEffect(() => {
    window.addEventListener("onConversationEnd", handleConversationEnd);

    // functions
    window.setScreen = (screen: number) => {
      if (screen >= 0 && screen < screens.length) {
        setCurrentScreen(screen);
      } else {
        console.error("Screen index out of bounds");
      }
    };

    return () => {
      window.removeEventListener("onConversationEnd", handleConversationEnd);
      delete window.setScreen;
    };
  }, [currentScreen]);

  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: COLORS.backgroundDark,
        width: "100%",
        height: "100%"
      }}>
      <View style={styles.container}>
        <NavigationContainer independent={true}>
          <UserProvider>
            {screens[currentScreen]}
          </UserProvider>
        </NavigationContainer>
      </View>
    </GestureHandlerRootView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: COLORS.background,
    width: 500,
    maxWidth: "100%",
  },
});