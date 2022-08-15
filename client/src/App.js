import BasePage from "./BasePage";
import 'react-toastify/dist/ReactToastify.css';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import language from "./helpers/language";
import { useEffect } from "react";
export const SettingContext = createContext();
function App() {
  const [lang, setLang] = useState("en");
  const [uType, setUType] = useState(null);
  const [languageData, setLanguageData] = useState(language.en);
  const storedLang = localStorage.getItem("lang");
  const userType = localStorage.getItem("userType");
  useEffect(() => {
    if (storedLang) {
      setLang(storedLang);
      setLanguageData(language[storedLang]);
    }
    if (userType) {
      setUType(+userType)
    }
  }, [])

  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message }) => {
        console.log(`Graphql error ${message}`);
        if (message === "Unauthenticated.") {
          localStorage.clear();
          client.cache.reset();
          window.location.replace("/");
        }
      });
      if (networkError) {
        console.log("Network error", networkError);
      }
    }
  });

  const link = from([
    errorLink,
    new createUploadLink({
      uri: "http://localhost:4000/graphql"
    })
  ]);

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          myAdvertise: {
            merge(existing, incoming) {
              return incoming
            }
          }
        }
      }
    }
  })
  const client = new ApolloClient({
    cache,
    link: authLink.concat(link),
    fetchOptions: {
      mode: 'no-cors',
    },
  });
  return (
    <ApolloProvider client={client}>
      <SettingContext.Provider value={{ lang, setLang, languageData, setLanguageData, uType, setUType }}>
        <ToastContainer />
        <BasePage />
      </SettingContext.Provider>
    </ApolloProvider>
  );
}

export default App;
