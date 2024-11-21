import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/colors";
import { UserProvider } from "@/context/UserContext";
import IntroConversation from "@/components/chat/conversations/IntroConversation";
import Interrogation from "@/components/chat/conversations/Interrogation";
import { allUsers, users } from "@/assets/users/users";
import { useEffect, useState } from "react";
import DragSort from "@/components/dragdrop/DragSort";
import User from "@/models/User";
import EndScreen from "@/components/EndScreen";
import SavedInterrogation from "@/components/chat/conversations/SavedInterrogation";
import { isProduction } from "@/utility/testMode";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [interrogatees, setInterrogatees] = useState<User[]>(Array(users.length).fill(allUsers.UNDEFINED));
  const [currentInterrogatee, setCurrentInterrogatee] = useState(-1);
  const [lastTapped, setLastTapped] = useState<User>(allUsers.UNDEFINED);

  const screens = [
    <IntroConversation />,
    <DragSort />,
    <Interrogation interrogatee={interrogatees[currentInterrogatee]}
      questionCount={isProduction() ? 3 : 0} />,
    <EndScreen />,
    <SavedInterrogation interrogatee={lastTapped} />,
  ]

  const handleSetScreen = (event: Event) => {
    const customEvent = event as CustomEvent;
    setCurrentScreen(customEvent.detail.screen);
  }

  function addInterrogatee(event: Event) {
    const customEvent = event as CustomEvent;
    const newInterrogatees = [...interrogatees];

    newInterrogatees[currentInterrogatee + 1] = customEvent.detail.user;

    setInterrogatees(newInterrogatees);
    setCurrentInterrogatee(currentInterrogatee + 1);
  }

  function tappedInterrogatee(event: Event) {
    const customEvent = event as CustomEvent;
    setLastTapped(customEvent.detail.user);
  }

  useEffect(() => {
    window.setScreen = (screen: number) => {
      if (screen >= 0 && screen < screens.length) {
        setCurrentScreen(screen);
      } else {
        console.error("Screen index out of bounds");
      }
    };

    window.addEventListener("setScreen", handleSetScreen);

    return () => {
      delete window.setScreen;
      window.removeEventListener("setScreen", handleSetScreen);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("addInterrogatee", addInterrogatee);

    return () => {
      window.removeEventListener("addInterrogatee", addInterrogatee);
    };
  }, [interrogatees, currentInterrogatee]);

  useEffect(() => {
    window.addEventListener("tappedInterrogatee", tappedInterrogatee);

    return () => {
      window.removeEventListener("tappedInterrogatee", tappedInterrogatee);
    };
  }, [lastTapped]);

  useEffect(() => {
    document.title = "Opinions not People";
  }, []);

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