import Link from "next/link";
import fetch from "isomorphic-unfetch";

const apiEndPoint = "https://api.tvmaze.com/shows";

TvShows.getInitialProps = async function() {
  const res = await fetch(apiEndPoint);
  const shows = await res.json();

  console.log(`Returned Shows : ${shows}`);

  return {
    shows: shows
  };
};

const TvShowLink = props => (
  <div className="col-12 col-sm-4 text-center">
    <Link href="/tvShows/[id]" as={`/tvShows/${props.id}`}>
      <img className="card-img-top" src={props.img} alt={props.name} />
    </Link>
    <div className="card-body">
      <h4 className="card-title">
        <Link href="/tvShows/[id]" as={`/tvShows/${props.id}`}>
          <a>{props.id}</a>
        </Link>
      </h4>
    </div>
    <style jsx>
      {`
        img {
          cursor: pointer;
        }
        a {
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
        li {
          list-style: none;
        }
      `}
    </style>
  </div>
);

export default function TvShows(props) {
  console.log("SHOWS: ", props.shows);

  return (
    <>
      <h1>Interesting TV Shows</h1>
      <div className="input-group mb-5">
        <div className="input-group-prepend">
          <span className="input-group-text">>></span>
        </div>
        <input
          className="form-control"
          onChange={e => {
            setSearchText(e.target.value);
          }}
          placeholder="Search for Shows..."
        />
      </div>
      <p>You Search For : {searchText}</p>

      <div className="row">
        {props.shows.map(show => (
          <TvShowLink
            key={show.id}
            id={show.name}
            img={show.image.medium}
            name={show.name}
          />
        ))}

        <TvShowLink id="Batman" />
        <TvShowLink id="Superman" />
      </div>
    </>
  );
}
