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

export default function Index() {
  const [currentConversation, setCurrentConversation] = useState(0);

  const conversations = [
    <IntroConversation />,
    <Interrogation interrogatee={users.JASMIN} questionCount={3} />,
  ]

  const handleConversationEnd = () => {
    setCurrentConversation(currentConversation + 1);
  }

  useEffect(() => {
    window.addEventListener("onConversationEnd", handleConversationEnd);

    return () => { window.removeEventListener("onConversationEnd", handleConversationEnd) };
  }, [currentConversation]);

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
            {conversations[currentConversation]}
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