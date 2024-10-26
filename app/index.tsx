import "@/assets/styling/style";
import Chat from "@/components/chat/Chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import intro from "@/assets/conversations/introConversation";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/colors";

export default function Index() {
  //TODO: implement those provider things
  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: COLORS.backgroundDark,
        width: "100%",
        height: "100%"
      }}>
      <View style={styles.container}>
        <NavigationContainer independent={true}>
          <Chat messages={intro} />
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