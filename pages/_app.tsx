import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BlogContextProvider } from "../store/blog-context";

function MyApp({ Component, pageProps }) {
  return (
    <BlogContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </BlogContextProvider>
  );
}

export default MyApp;
