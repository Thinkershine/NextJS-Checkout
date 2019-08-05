import Layout from "./../components/layout";
import Link from "next/link";

function getPosts(){
    return [
        {id: "hello-nextjs", title: "Hello Next.JS Checkout How It's Awesome!"},
        {id: "learn-nextjs", title: "Learn Next.JS It's Awesome!"},
        {id: "deploy-nextjs", title: "Deploy Apps with ZEIT"}
    ];
};

const PostLink = props => (
    <li>
        <Link href="/dynamic/[id]" as={`/dynamic/${props.id}`}>
            <a>{props.title}</a>
        </Link>
        <style jsx>{`
            li { list-style: none; margin: 5px 0 };
            a { text-decoration: none; color: blue };
            a:hover { opacity: 0.6; color: red};
            `}
        </style>
    </li>
);

export default function DynamicBlog() {
    return (
        <Layout>
            <h1>Dynamic Blog</h1>
            <ul>
                {getPosts().map(post => (<PostLink key={post.id} id={post.id} title={post.title}/>))}
            </ul>
            <style jsx>{`
                h1, a { font-family: 'Arial' };
                ul { padding: 5 };
                `}</style>
        </Layout>
    );
}