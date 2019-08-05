import Layout from '../../components/layout';
import { useRouter } from 'next/router';

export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is Dynamic Post Content!</p>
        </Layout>
    );
}
