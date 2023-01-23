import { useContext } from "react";
import Context from "./Context";

const useFetchingStore = () => {
    const { state, method, ...rest } = useContext(Context);
    return { state, method, ...rest };
};

export { useFetchingStore };
