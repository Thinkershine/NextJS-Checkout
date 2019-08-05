import Layout from "../../../components/layout";
import {useRouter} from "next/router";

export default function Show() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id} SHOW!</h1>
        </Layout>
    );
}