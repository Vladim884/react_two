import React from "react";

export const withSuspense = (Component) => {
  return (props) => {
      return <React.Suspense fallback={
    //   <div className="preloader"><Preloader /></div>
    <div>Loading ....</div>
      }>
      <Component {...props} />
    </React.Suspense>
  };
};
