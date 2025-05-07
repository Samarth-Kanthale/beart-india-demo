import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type BlogPostCardProps = {
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
  tag: string;
  title: string;
  description: string;
  authorName: string;
  authorImageSrc: string;
  authorImageHint: string;
  date: string;
  readTime: string;
  link: string;
};

export function BlogPostCard({
  imageSrc,
  imageAlt,
  imageHint,
  tag,
  title,
  description,
  authorName,
  authorImageSrc,
  authorImageHint,
  date,
  readTime,
  link,
}: BlogPostCardProps) {
  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl animate-in fade-in zoom-in-95 duration-500">
        <div className="relative w-full aspect-[600/350] bg-muted overflow-hidden"> {/* Added overflow-hidden for image */}
          <Image
            src={imageSrc}
            alt={`${title} - ${tag} by ${authorName}`} // More descriptive alt text
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" // Subtle zoom on image
            data-ai-hint={imageHint}
            loading="lazy" // Added lazy loading
          />
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <Badge variant="secondary" className="mb-2 w-fit bg-green-100 text-green-800 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"> {/* Use Tailwind for specific badge color */}
            {tag}
          </Badge>
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow">
            {description}
          </p>
          <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-border">
            <Avatar className="h-10 w-10 transition-transform duration-300 group-hover:scale-110">
              <AvatarImage src={authorImageSrc} alt={authorName} data-ai-hint={authorImageHint} loading="lazy" />
              <AvatarFallback>{getInitials(authorName)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-foreground">{authorName}</p>
              <p className="text-xs text-muted-foreground">
                {date} &middot; {readTime}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

