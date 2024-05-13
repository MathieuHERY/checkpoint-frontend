import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
} from "@apollo/client";
import { API_URL } from "@/config/config";

const link = createHttpLink({
  uri: API_URL,
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
