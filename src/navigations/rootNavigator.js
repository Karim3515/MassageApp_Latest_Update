import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () =>
  navigationRef.current?.canGoBack() ? navigationRef.current?.goBack() : null;

export default {
  navigate,
  goBack,
};
