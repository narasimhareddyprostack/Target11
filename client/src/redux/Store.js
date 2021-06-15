import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
let Store = createStore(rootReducer);
export default Store;
