import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import Container from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Counter } from "./components/class/Counter";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templeteliterals/Toast";
import { CustomButton } from "./components/html/Button";
function App() {
  // const personName = {
  //   firstName: "Bruce",
  //   lastName: "Wayne",
  // };

  // const nameList = [
  //   {
  //     firstName: "Bruce",
  //     lastName: "Wayne",
  //   },
  //   {
  //     firstName: "Clark",
  //     lastName: "Kent",
  //   },
  //   {
  //     firstName: "Princess",
  //     lastName: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" size="sm" color="secondary">
        Label
      </Text>

      {/* <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Button Text
      </CustomButton> */}
      {/* <Toast position="lefft-center" /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Counter message="the count value is " /> */}
      {/* <UserContextProvider>
          <User />
        </UserContextProvider> */}

      {/* <ThemeContextProvider />
       */}
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, 1);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Status Status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Lenonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Aman" isLoggedIn={false} /> */}
      {/* <Greet name={10} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <Person name={nameList} /> */}
    </div>
  );
}

export default App;
