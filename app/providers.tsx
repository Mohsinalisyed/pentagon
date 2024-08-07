"use client";
import { WagmiProvider } from "wagmi";
import { config } from "./config/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { MintContextProvider } from "./mintContextProvider";

const queryClient = new QueryClient();

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <MintContextProvider>
          <ToastContainer
            limit={1}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Flip}
            className="!z-[99999]"
          />
          {children}
        </MintContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
