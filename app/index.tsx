import "@/assets/styling/style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/colors";
import { UserProvider } from "@/context/UserContext";
import IntroConversation from "@/components/chat/conversations/IntroConversation";

export default function Index() {
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
            <IntroConversation />
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