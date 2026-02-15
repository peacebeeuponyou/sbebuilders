import { getCollection } from "@/lib/db";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = await getCollection("blogs");
  return blogs.map((blog: any) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const blogs = await getCollection("blogs");
  const blog = blogs.find((b: any) => b.id === id);

  if (!blog) {
    return {
      title: "Blog Not Found | SBE Builders",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | SBE Builders Chennai Blog`,
    description: blog.excerpt,
    keywords: ["Construction Blog", "Chennai Builders", "Tamilnadu Construction", "Interior Design Tips", blog.category],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const blogs = await getCollection("blogs");
  const blog = blogs.find((b: any) => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
           <SafeImage 
             src={blog.image} 
             alt={blog.title} 
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-black/70" />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center max-w-4xl space-y-6">
             <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 mb-4 px-4 py-1 text-base">{blog.category}</Badge>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight">{blog.title}</h1>
             
             <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-lg">
               <span className="flex items-center gap-2"><Calendar className="h-5 w-5 text-accent" /> {blog.date}</span>
               <span className="flex items-center gap-2"><User className="h-5 w-5 text-accent" /> {blog.author}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="max-w-4xl mx-auto bg-white dark:bg-card rounded-3xl shadow-xl p-8 md:p-16 border border-border/50">
          <div className="flex justify-between items-center mb-12 pb-8 border-b border-border">
            <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </div>

          <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-accent prose-img:rounded-2xl">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-muted/30 rounded-2xl flex items-center gap-6">
             <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden shrink-0">
                <SafeImage src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`} alt={blog.author} className="w-full h-full object-cover" />
             </div>
             <div>
               <h3 className="text-xl font-bold font-heading">Written by {blog.author}</h3>
               <p className="text-muted-foreground">Expert contributor at SBE Builders, sharing insights on modern construction and design in Chennai.</p>
             </div>
          </div>
        </div>
      </div>
      
      {/* Related Posts CTA */}
      <section className="container mx-auto px-4 mt-24 text-center">
        <h2 className="text-3xl font-bold font-heading mb-8">More from our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           {blogs.filter((b: any) => b.id !== blog.id).slice(0, 3).map((b: any) => (
             <Link key={b.id} href={`/blog/${b.id}`} className="group text-left block">
               <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                 <SafeImage src={b.image} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
               </div>
               <h3 className="text-xl font-bold group-hover:text-accent transition-colors line-clamp-2">{b.title}</h3>
               <p className="text-sm text-muted-foreground mt-2">{b.date}</p>
             </Link>
           ))}
        </div>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link href="/blog">View All Articles</Link>
        </Button>
      </section>
    </div>
  );
}
