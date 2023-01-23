/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from "react-native";

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import ChatListScreen from "./src/screens/ChatListScreen";
import ChatAppReactNative from "./ChatAppReactNative";
import { FetchingProvider } from "./src/store/FetchingApiStore";
import { AuthProvider } from "./src/store/AuthStore";

type SectionProps = PropsWithChildren<{
    title: string;
}>;
function App(): JSX.Element {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FetchingProvider>
                <AuthProvider>
                    <ChatAppReactNative />
                </AuthProvider>
            </FetchingProvider>
        </SafeAreaView>
    );
}

export default App;
