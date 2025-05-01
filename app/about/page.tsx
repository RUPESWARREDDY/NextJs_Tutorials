import Link from "next/link";

export const metadata = {
  title: {
    absolute:'About Us'
  },
  description: 'Learn more about us here',
};
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page of our app.</p>
      <Link href="/blog" replace>blog</Link>
    </div>
  )
}
