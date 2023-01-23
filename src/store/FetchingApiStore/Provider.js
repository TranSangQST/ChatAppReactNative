import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";
import actions from "./actions";

function FetchingProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    const method = {
        fetchApi: () => {
            dispatch(actions.fetchApi());
        },
        fetchApiSuccess: () => {
            dispatch(actions.fetchApiSuccess());
        },
        fetchApiFailed: (error) => {
            dispatch(actions.fetchApiFailed(error));
        },
    };

    return (
        <Context.Provider value={{ state, method }}>
            {children}
        </Context.Provider>
    );
}

export default FetchingProvider;
