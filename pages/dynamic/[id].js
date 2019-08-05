import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import Markdown from "react-markdown";

export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <div className="markdown">
                <Markdown source={`This is Our Blog Post,
                Here you can have [Link](/Link)
                
                # This is a Title
                // Here Comes the Content`}/>
            </div>
            <style jsx global>
                {`
                    .markdown { font-family: "Arial"; }
                    .markdown a { text-decoration: none; color: blue; }
                    .markdown a:hover { text-decoration: underline; color: red; opacity: 0.6; }
                    .markdown h3 { margin: 0; padding: 0; text-transform: uppercase; }
                `}
            </style>
        </Layout>
    );
}
