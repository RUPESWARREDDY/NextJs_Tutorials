import React from "react";

export default function Layout({children,revenue,users,notifications,login}:{children:React.ReactNode,revenue:React.ReactNode,users:React.ReactNode,notifications:React.ReactNode,login:React.ReactNode}) {
   const isLogin=false;
return (
  <>
    {isLogin ? (
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    ) : (
    <>
      {login}
    </>
    )}
  </>
);
}
