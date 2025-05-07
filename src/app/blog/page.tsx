import { BlogPostCard } from "@/components/blog/blog-post-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Beart India Group Insights',
  description: 'Stay updated with the latest news, articles, and insights from Beart India Group on investments, finance, technology, and software solutions.',
  keywords: ['Beart India Group blog', 'investment news', 'finance articles', 'technology insights', 'software solutions blog', 'market updates'],
  alternates: {
    canonical: '/blog',
  },
};

// Sample Blog Post Data (Replace with actual data fetching later)
const blogPosts = [
  {
    id: 1,
    imageSrc: "https://picsum.photos/600/350?random=1",
    imageAlt: "Abstract background representing investment tools",
    imageHint: "abstract background",
    tag: "News",
    title: "Beart India Group Launches New Investment Tool",
    description: "Discover our latest innovation designed to help you navigate the market with ease and confidence.",
    authorName: "Nilesh Kudale",
    authorImageSrc: "https://picsum.photos/40/40?random=10",
    authorImageHint: "person portrait",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    link: "#", // Replace with actual blog post link
  },
  {
    id: 2,
    imageSrc: "https://picsum.photos/600/350?random=2",
    imageAlt: "Team working collaboratively on laptops for SME hosting",
    imageHint: "team collaboration",
    tag: "Software",
    title: "The Importance of Reliable Hosting for SMEs",
    description: "Learn why choosing the right hosting provider is crucial for your business's online success.",
    authorName: "Jane Doe",
    authorImageSrc: "https://picsum.photos/40/40?random=11",
    authorImageHint: "business woman",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    link: "#", // Replace with actual blog post link
  },
  {
    id: 3,
    imageSrc: "https://picsum.photos/600/350?random=3",
    imageAlt: "Stock market graph illustrating mutual funds guide",
    imageHint: "market graph",
    tag: "Finance",
    title: "Understanding Mutual Funds: A Beginner's Guide",
    description: "Demystifying mutual funds and how they can be a part of your investment strategy.",
    authorName: "John Smith",
    authorImageSrc: "https://picsum.photos/40/40?random=12",
    authorImageHint: "professional man",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    link: "#", // Replace with actual blog post link
  },
  // Add more blog posts here
];


export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-top-8 duration-700">Blog</h1>

       {/* Check if there are blog posts */}
       {blogPosts.length === 0 ? (
          <div className="text-center text-muted-foreground animate-in fade-in duration-500">
            <p>No blog posts available yet. Check back soon!</p>
          </div>
        ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className={`animate-in fade-in zoom-in-95 duration-500`} style={{ animationDelay: `${index * 150}ms`}}>
                <BlogPostCard
                  imageSrc={post.imageSrc}
                  imageAlt={post.imageAlt}
                  imageHint={post.imageHint}
                  tag={post.tag}
                  title={post.title}
                  description={post.description}
                  authorName={post.authorName}
                  authorImageSrc={post.authorImageSrc}
                  authorImageHint={post.authorImageHint}
                  date={post.date}
                  readTime={post.readTime}
                  link={post.link}
                />
              </div>
            ))}
           </div>
        )}

    </div>
  );
}

