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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
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
