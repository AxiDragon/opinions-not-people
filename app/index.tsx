import "@/assets/styling/style";
import Chat from "@/components/chat/Chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import intro from "@/assets/conversations/introConversation";

export default function Index() {
  //TODO: implement those provider things
  return (
    <GestureHandlerRootView>
      <NavigationContainer independent={true}>
        <Chat messages={intro} />
      </NavigationContainer>
    </GestureHandlerRootView >
  );
}
