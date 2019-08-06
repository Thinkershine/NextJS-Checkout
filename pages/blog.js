import Link from "next/link";

// Create Link with Query String
const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <div>
    <h1>My Blog!</h1>
    <ul>
      <PostLink title="Why React with Next.js is Awesome?!" />
      <PostLink title="Why I am going to be Awesome React Developer?" />
      <PostLink title="Why I Would Love to Work for NetGuru?!" />
    </ul>
  </div>
);

export default Blog;
