import Layout from '../components/layout';
import Link from "next/link";

const TvShowLink = props => (
    <li>
        <Link href="/tvShows/[id]" as={`/tvShows/${props.id}`}>
            {props.id}
        </Link>
    </li>
);

const TvShows = () => (
    <Layout>
        <h1>Interesting TV Shows</h1>
        <ul>
            <TvShowLink id="Batman"/>
        </ul>
    </Layout>
);

export default TvShows;