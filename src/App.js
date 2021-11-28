import React from "react";
import Form from "./components/FormContainer";
import Counter from "./components/Counter";
import IntervalCounter from "./components/IntervalCounter";
import DataFetchingById from "./components/DataFetchingById";
import ComponentA from "./components/ComponentA";
import CounterReducer from "./components/CounterReducer";
import DataFetchingReducer from "./components/DataFetchingReducer";
import DataFetching from "./components/DataFetching";
import Navbar from "./components/Navbar";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div>
      <Navbar />
      <div class="container mt-5 mb-5">
        <Form />
        <Counter />
        <IntervalCounter />
        <DataFetching />
        <DataFetchingById />
        <ChannelContext.Provider value={"code"}>
          <UserContext.Provider value={"amirhossein"}>
            <ComponentA />
          </UserContext.Provider>
        </ChannelContext.Provider>
        <CounterReducer />
        <DataFetchingReducer />
      </div>
    </div>
  );
}

export default App;
