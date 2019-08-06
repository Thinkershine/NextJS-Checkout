import fetch from "isomorphic-unfetch";

const apiEndPoint = "https://api.tvmaze.com/shows/";

Show.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(apiEndPoint + id);
  const show = await res.json();

  console.log(`Returned Show : ${show}`);

  return { show };
};

export default function Show(props) {
  const show = props.show;

  return (
    <>
      <h1>{show.name} SHOW!</h1>
      <p>Type: {show.type}</p>
      <p>Language: {show.language}</p>
      <p>
        Genres:{" "}
        {show.genres.map(genre => (
          <em key={genre}>{genre} </em>
        ))}
      </p>
      <p>Summary: {show.summary}</p>
      <img src={show.image.medium} alt={show.name} />
    </>
  );
}
