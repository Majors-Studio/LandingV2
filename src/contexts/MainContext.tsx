'use client'
import {
  layoutInitialState,
  layoutReducer,
  LayoutType,
} from "@/reducers/layoutReducer";
import { reducerActionType } from "@/types/reducerActionType";
import React, { createContext, useReducer, useState } from "react";

interface initialStateType {
  layout: LayoutType;
}

interface ContextType  {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
}

const initialState: initialStateType = {
  layout: layoutInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  layout: layoutReducer(state.layout, action),
});

export const ContextProvider: any = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
