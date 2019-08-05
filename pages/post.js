import Layout from '../components/layout';
import {useRouter} from "next/router";

const Content = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is The Blog Post Content</p>
        </>
    );
}

export default function Post () {

    return (
        <Layout>
            <Content />
        </Layout>
    );
}