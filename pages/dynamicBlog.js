import Layout from "./../components/layout";
import Link from "next/link";

const PostLink = props => (
    <li>
        <Link href="/dynamic/[id]" as={`/dynamic/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function DynamicBlog() {
    return (
        <Layout>
            <h1>Dynamic Blog</h1>
            <ul>
                <PostLink id="Dynamic ID"/>
                <PostLink id="Dynamic ID2"/>
                <PostLink id="Dynamic ID3"/>
            </ul>
        </Layout>
    );
}