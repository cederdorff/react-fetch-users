import { useEffect, useState } from "react";
import Person from "./components/Person";

function App() {
    const [persons, setPersons] = useState([]); // state to handle the data (persons)
    // persons: name of the state
    // setPersons: name of the function to set the state

    useEffect(() => {
        //the side effect - fetch persons/users
        async function getData() {
            const response = await fetch("https://race-crud-rest-default-rtdb.firebaseio.com/users.json"); // read all users (persons) from firebase
            const data = await response.json();
            const array = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
            setPersons(array); // set the state with fetched data
        }

        getData();
    }, []); // <--- "[]" VERY IMPORTANT!!!

    return (
        <div>
            <header className="topbar">
                <h1>React Fetch Persons</h1>
            </header>
            <main className="page">
                <section className="grid-container">
                    {persons.map(personObject => (
                        <Person person={personObject} key={personObject.id} />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
