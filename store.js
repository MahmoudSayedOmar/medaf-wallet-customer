import * as React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./src/state";

import thunk from "redux-thunk";

const store = compose(applyMiddleware(thunk))(createStore)(reducer);

export default store;
