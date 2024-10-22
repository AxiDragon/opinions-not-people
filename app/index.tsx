import "@/app/style.ts";
import Chat from "./components/chat/Chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { convo1, convo2 } from "./assets/exampleConversations";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer independent={true}>
        <Chat messages={convo2} />
      </NavigationContainer>
    </GestureHandlerRootView >
  );
}
