import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { useRouter } from "next/router";

const baseApiURI = "https://api.tvmaze.com/search/shows/?q=";

TvShow.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(baseApiURI + id);
  const data = await res.json();

  console.log(`Fetched Data Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default function TvShow(props) {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id} Tv Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/tvShows/id/[showId]" as={`/tvShows/id/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
