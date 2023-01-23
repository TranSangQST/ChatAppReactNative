import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";
import actions from "./actions";

// import authServices from "../../services/authServices";
import userServices from "../../services/userServices";
import { useFetchingStore } from "../FetchingApiStore";

function AuthProvider({ children }) {
    const fetchingStore = useFetchingStore();

    const [state, dispatch] = useReducer(reducer, initState);

    const login = async (email, password) => {
        fetchingStore.method.fetchApi();
        // const user = await authServices.login(email, password);

        if (user) {
            dispatch(actions.login(user));
            fetchingStore.method.fetchApiSuccess();
        } else {
            const message = "Incorrect Email or Password";
            fetchingStore.method.fetchApiFailed(message);
        }
    };
    const logout = async () => {
        // await authServices.logout();
        dispatch(actions.logout());
    };

    const autoLogin = async () => {
        fetchingStore.method.fetchApi();

        const user = await userServices.getCurrentUser();

        dispatch(actions.open());

        if (user) {
            dispatch(actions.login(user));
            fetchingStore.method.fetchApiSuccess();
        } else {
            const message = "Auto login failed";
            fetchingStore.method.fetchApiFailed(message);
        }
    };

    const register = async (email, password) => {
        fetchingStore.method.fetchApi();
        // const user = await authServices.register(email, password);

        if (user) {
            fetchingStore.method.fetchApiSuccess();
        } else {
            const message = "Register failed";
            fetchingStore.method.fetchApiFailed(message);
        }
        return user;
    };

    const forgotPasword = async (email) => {
        fetchingStore.method.fetchApi();
        const result = await userServices.forgotPassword(email);

        fetchingStore.method.fetchApiSuccess();
        return result;
    };

    const setUser = async (userData) => {
        fetchingStore.method.fetchApi();

        const user = await userServices.updateUserInfo(userData);

        if (user) {
            dispatch(actions.setUser(user));
            fetchingStore.method.fetchApiSuccess();
        } else {
            const message = "Update user failed";
            fetchingStore.method.fetchApiFailed(message);
        }

        return user;
    };

    const uploadAvatar = async (uri) => {
        fetchingStore.method.fetchApi();

        const result = await userServices.uploadAvatar(uri);

        if (result) {
            fetchingStore.method.fetchApiSuccess();
            await loadUser();
        } else {
            const message = "Update user failed";
            dispatch(actions.setUserFailed(message));
        }

        return result;
    };

    const changePassword = async (password, newPassword) => {
        fetchingStore.method.fetchApi();

        // const result = await authServices.changePassword(password, newPassword);

        if (result) {
            if (result.status) fetchingStore.method.fetchApiSuccess();
            else
                fetchingStore.method.fetchApiFailed(result?.message || "error");
        } else {
            const message = "Error API";
            fetchingStore.method.fetchApiFailed(message);
        }

        return result;
    };

    const loadUser = async () => {
        fetchingStore.method.fetchApi();

        const user = await userServices.getUserInfo();
        if (user) {
            dispatch(actions.setUser(user));
            fetchingStore.method.fetchApiSuccess();
        } else {
            const message = "Error API";
            fetchingStore.method.fetchApiFailed(message);
        }

        return user;
    };

    const method = {
        login,
        logout,
        autoLogin,
        register,
        forgotPasword,
        setUser,
        uploadAvatar,
        changePassword,
        loadUser,
    };

    const rest = {};

    return (
        <Context.Provider value={{ state, method, ...rest }}>
            {children}
        </Context.Provider>
    );
}

export default AuthProvider;
