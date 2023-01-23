import { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import Avatar from "../../../components/Avatar";
import chatMessageServices from "../../services/chatMessageServices";
import userServices from "../../services/userServices";

import ChatListScreenStyles from "./ChatListScreenStyles";

function ChatListScreen() {
    const [friends, setFriends] = useState([]);
    const [chatMessageHistorys, setchatMessageHistorys] = useState([]);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const loadData = async () => {
            const currentUserData = await userServices.getCurrentUser();
            setCurrentUser(currentUserData);

            const userId = currentUserData?.id;

            const friendsData = await userServices.getFriendByUserId(userId);
            setFriends(friendsData);

            const chatMessageHistorysData =
                await chatMessageServices.getChatMessageHistorys(userId);
            setchatMessageHistorys(chatMessageHistorysData);
        };
        loadData();
    }, []);

    console.log("currentUser: ", currentUser);

    return (
        <SafeAreaView style={ChatListScreenStyles.wrapper}>
            <View>
                <Avatar size={60} src={currentUser.avatar} rounded />
            </View>
            <View>
                {friends.map((friend, index) => (
                    <Text key={index}>{friend?.fullName}</Text>
                ))}
            </View>
            <View>
                {chatMessageHistorys.map((hatMessagePreview, index) => (
                    <Text key={index}>
                        {hatMessagePreview?.lastChatMessage?.message}
                    </Text>
                ))}
            </View>
        </SafeAreaView>
    );
}

export default ChatListScreen;
