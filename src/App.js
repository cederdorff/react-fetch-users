import { useEffect, useState } from "react";
import Person from "./components/Person";

function App() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        //the side effect - fetch persons/users
        async function getData() {
            const response = await fetch("https://raw.githubusercontent.com/cederdorff/mdu-frontend/main/data/users.json");
            const data = await response.json();
            console.log(data);
            setPersons(data);
        }

        getData();
    }, []);

    return (
        <>
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
        </>
    );
}

export default App;
