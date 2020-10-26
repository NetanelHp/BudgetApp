import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import userReducder from "./userReducer";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

//Initial trans State
const initialTransState = {
  transactions: [],
  error: null,
  loadingTrans: true,
};

//Initial User Login
const initialUserState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

//Create Context
export const GlobalContext = createContext();

//Provider
export const GlobalProvider = ({ children }) => {
  const [transState, dispatchTrans] = useReducer(AppReducer, initialTransState);
  const [userState, dispatchUser] = useReducer(userReducder, initialUserState);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //User load
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/user/auth");

      dispatchUser({
        type: "USER_LOADED",
        payload: res.data,
      });
    } catch (err) {
      dispatchUser({
        type: "AUTH_ERROR",
      });
    }
  };

  //User Login Actions
  const login = async (user) => {
    try {
      const res = await axios.post(
        "/api/user/login",
        JSON.stringify(user),
        config
      );
      dispatchUser({
        type: "LOGIN_SUCCESS",
        payload: res.data.token,
      });
      loadUser();
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((err) => {
          alert(err.msg);
        });
      }
      dispatchUser({
        type: "LOGIN_FAILED",
      });
    }
  };

  const logout = () => {
    dispatchUser({
      type: "USER_LOGOUT",
    });
  };

  //Transaction Actions
  const getTransactions = async (id) => {
    try {
      const res = await axios.post(
        "/api/transactions",
        JSON.stringify(id),
        config
      );

      dispatchTrans({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatchTrans({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`);

      dispatchTrans({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      dispatchTrans({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const res = await axios.post(
        "/api/transactions/add",
        JSON.stringify(transaction),
        config
      );
      dispatchTrans({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatchTrans({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: transState.transactions,
        error: transState.error,
        loadingtrans: transState.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
        isAuthenticated: userState.isAuthenticated,
        user: userState.user,
        login,
        logout,
        loadUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
