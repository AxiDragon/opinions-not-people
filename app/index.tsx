import "@/assets/styling/style";
import Chat from "@/components/chat/Chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { convo1alt } from "../assets/placeholder/exampleConversations";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer independent={true}>
        <Chat messages={convo1alt} />
      </NavigationContainer>
    </GestureHandlerRootView >
  );
}
