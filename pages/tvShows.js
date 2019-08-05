import Layout from '../components/layout';
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const apiEndPoint = "https://api.tvmaze.com/shows";

TvShows.getInitialProps = async function(){
    const res = await fetch(apiEndPoint);
    const shows = await res.json();

    console.log(`Returned Shows : ${shows}`);

    return {
        shows : shows
    }
}

const TvShowLink = props => (
    <li>
        <Link href="/tvShows/[id]" as={`/tvShows/${props.id}`}>
            <img src={props.img} alt={props.name} />
        </Link>
        <Link href="/tvShows/[id]" as={`/tvShows/${props.id}`}>
            <a>{props.id}</a>
        </Link>
        <style jsx>
            {`
            img { cursor: pointer; }
            a { text-decoration: none; font-weight: bold; }
            a:hover { text-decoration: underline; }
            li { list-style: none; }
            `}
        </style>
    </li>
);

export default function TvShows(props) {
    console.log("SHOWS: ", props.shows);
    return (
    <Layout>
        <h1>Interesting TV Shows</h1>
        <ul>
            <TvShowLink id="Batman"/>
            <TvShowLink id="Superman"/>
            {props.shows.map(show => (<TvShowLink key={show.id} id={show.name} img={show.image.medium} name={show.name}/>))}
        </ul>
    </Layout>
)};