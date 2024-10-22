import { Text, View } from "react-native";
import TextBubble from "./components/chat/TextBubble";
import "@/app/style.ts";
import Chat from "./components/chat/Chat";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chat messages={[
        "Hi! How are you doing?",
        "Yeah, I'm fine. How about you?",
        "I'm doing well, thanks for asking. What have you been up to lately?",
        "Not much, just working on some projects. You?",
        "Same here, been pretty busy with work. Any plans for the weekend?",
        "Not really, just planning to relax and maybe catch up on some reading. You?",
        "I might go hiking if the weather is nice. Have you read any good books lately?",
        "Yeah, I just finished a great mystery novel. What about you?",
        "I've been reading a lot of science fiction lately. Any recommendations?",
        "You should check out 'Dune' by Frank Herbert. It's a classic.",
        "I've heard a lot about it. I'll definitely add it to my list. Thanks!",
        "No problem! Let me know what you think once you start reading it.",
        "Will do! By the way, have you watched any good movies recently?",
        "Yeah, I watched 'Inception' again. It's always a mind-bender.",
        "That's a great movie! I love the concept and the visuals.",
        "Me too. It's one of those movies you can watch multiple times and still find something new.",
        "Absolutely. Have you seen 'Interstellar'? It's another great one by Christopher Nolan.",
        "Yes, I have. It's amazing! The visuals and the story are just incredible.",
        "Agreed. Nolan really knows how to make thought-provoking films.",
        "Definitely. Well, it was great catching up with you. Let's chat again soon!",
        "For sure! Take care and have a great weekend!",
        "You too! Bye!"
      ]} />
    </View>
  );
}
