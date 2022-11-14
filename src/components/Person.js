export default function Person({ person }) {
    // person is a prop containing person data, ex:
    // {id: "...", image: "...", mail: "...", name: "...", phone: "...", title: "..."}
    return (
        <article>
            <img src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <p>{person.title}</p>
            <p>
                <a href={`mailto: ${person.mail}`}>{person.mail}</a>
            </p>
        </article>
    );
}
