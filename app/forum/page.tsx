import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const forumPosts = [
  { title: "New Feature Announcement", category: "Product Updates", replies: 15, likes: 32 },
  { title: "Tips for Optimizing Your Workflow", category: "Tips & Tricks", replies: 8, likes: 24 },
  { title: "Industry Insights: The Future of Audio Production", category: "Industry Insights", replies: 22, likes: 47 },
  { title: "Troubleshooting Common Issues", category: "Product Updates", replies: 12, likes: 18 },
]

const forumSections = [
    { title: "General Discussion", posts: 120 },
    { title: "Technical Support", posts: 85 },
    { title: "Product Feedback", posts: 64 },
    { title: "Tips & Tricks", posts: 97 },
  ]

export default function ForumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Firecourt Corp Forum & Discussions</h1>
      
      <Tabs defaultValue="forum" className="mb-8">
        <TabsList>
          <TabsTrigger value="forum">Forum</TabsTrigger>
          <TabsTrigger value="blog">Blog Posts</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorial Videos</TabsTrigger>
          <TabsTrigger value="ai">AI Innovations</TabsTrigger>
        </TabsList>
        <TabsContent value="forum">
          <div className="grid gap-6 md:grid-cols-2">
            {forumSections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{section.posts} posts</p>
                  <Button asChild>
                    <Link href={`/forum/${section.title.toLowerCase().replace(' ', '-')}`}>View Threads</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="blog">
          <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
          {/* Add blog post list here */}
        </TabsContent>
        <TabsContent value="tutorials">
          <h2 className="text-2xl font-semibold mb-4">Tutorial Videos</h2>
          {/* Add tutorial video list here */}
        </TabsContent>
        <TabsContent value="ai">
          <h2 className="text-2xl font-semibold mb-4">AI Innovations</h2>
          {/* Add AI innovations content here */}
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Start a New Discussion</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Create New Thread</Button>
        </CardContent>
      </Card>
    </div>
  )
}

