import { useEffect } from "react";
import ChatListScreen from "./src/screens/ChatListScreen";
import { useAuthStore } from "./src/store/AuthStore";

const ChatAppReactNative = () => {
    const authStore = useAuthStore();

    useEffect(() => {
        const loadData = async () => {
            authStore.method.autoLogin();
        };
        loadData();
    }, []);

    return <ChatListScreen />;
};

export default ChatAppReactNative;
