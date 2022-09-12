export default function Person({ person }) {
    return (
        <article>
            <img src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <p>{person.title}</p>
            <p>
                <a href={`mailto: ${person.mail}`}>{person.mail}</a>
            </p>
            <p>
                <a href={`tel: ${person.phone}`}>{person.phone}</a>
            </p>
        </article>
    );
}
