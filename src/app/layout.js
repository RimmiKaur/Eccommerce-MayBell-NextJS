"use client"

import { Provider } from "react-redux";
import MainLayout from "./Components/MainLayout";
import { store } from "./change-password/Store/StoreConfig";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
        <MainLayout>
           {children}
        </MainLayout>
        </Provider>;
      </body>
    </html>
  );
}
