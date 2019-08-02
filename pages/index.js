import Link from "next/link";

const Index = () => (
  <div>
    <h1>Hello from Next.js!</h1>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
);

export default Index;
