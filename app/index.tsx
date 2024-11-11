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
import User from "@/models/User";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [interrogatees, setInterrogatees] = useState<User[]>(Array(5).fill(users.UNDEFINED));
  const [currentInterrogatee, setCurrentInterrogatee] = useState(-1);

  const screens = [
    <IntroConversation />,
    <DragSort />,
    <Interrogation interrogatee={interrogatees[currentInterrogatee]} questionCount={3} />,
    // end sequence something
  ]

  const handleConversationEnd = () => {
    setCurrentScreen(currentScreen => {
      //force talking to all interrogatees
      if (currentInterrogatee < interrogatees.length - 1) {
        return 1;
      } else {
        return currentScreen + 1;
      }
    });
  }

  function addInterrogatee(event: Event) {
    const customEvent = event as CustomEvent;
    const newInterrogatees = [...interrogatees];
    newInterrogatees[currentInterrogatee + 1] = customEvent.detail.user;
    console.log(currentInterrogatee);
    setInterrogatees(newInterrogatees);
    setCurrentInterrogatee(currentInterrogatee + 1);
    console.log("Added interrogatee", customEvent.detail.user);
    console.log("Interrogatees", newInterrogatees);
  }

  const startInterrogation = () => {
    setCurrentScreen(2);
  }

  useEffect(() => {
    window.setScreen = (screen: number) => {
      if (screen >= 0 && screen < screens.length) {
        setCurrentScreen(screen);
      } else {
        console.error("Screen index out of bounds");
      }
    };

    return () => {
      delete window.setScreen;
    };
  }, []);

  useEffect(() => {
    window.addEventListener("onConversationEnd", handleConversationEnd);


    return () => {
      window.removeEventListener("onConversationEnd", handleConversationEnd);

    };
  }, [currentScreen, currentInterrogatee]);

  useEffect(() => {
    window.addEventListener("addInterrogatee", addInterrogatee);
    window.addEventListener("startInterrogation", startInterrogation);

    return () => {
      window.removeEventListener("addInterrogatee", addInterrogatee);
      window.removeEventListener("startInterrogation", startInterrogation);
    };
  }, [interrogatees, currentInterrogatee]);

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