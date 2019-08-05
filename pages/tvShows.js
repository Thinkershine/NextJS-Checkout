import Layout from '../components/layout';
import Link from "next/link";

const TvShowLink = props => (
    <li>
        <Link href="/tvShows/[id]" as={`/tvShows/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const TvShows = () => (
    <Layout>
        <h1>Interesting TV Shows</h1>
        <ul>
            <TvShowLink id="Batman"/>
            <TvShowLink id="Superman"/>
        </ul>
    </Layout>
);

export default TvShows;