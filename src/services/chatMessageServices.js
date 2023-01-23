import camelcaseKeys from "camelcase-keys";
import { mockChatMessagePreviews } from "../mock/mockChatMessage";

const getChatMessageHistorys = async (userId) => {
    return camelcaseKeys(mockChatMessagePreviews, { deep: true });
};
export default { getChatMessageHistorys };
