import camelcaseKeys from "camelcase-keys";

import { mockCurrentUser, mockUsers } from "../mock/mockUser";

const getCurrentUser = async () => {
    return camelcaseKeys(mockCurrentUser, { deep: true });
};

const getFriendByUserId = async (userId) => {
    return camelcaseKeys(mockUsers, { deep: true });
};

export default { getFriendByUserId, getCurrentUser };
