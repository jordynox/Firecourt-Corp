import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentationPage() {
  const docSections = [
    { title: "Installation", link: "/docs/installation" },
    { title: "Getting Started with Cubes", link: "/docs/getting-started" },
    { title: "How to Install Plugins", link: "/docs/plugins" },
    { title: "Teen Translator", link: "/docs/teen-translator" },
    { title: "Learn Zeta", link: "/docs/learn-zeta" },
    { title: "Tips for Eggheads", link: "/docs/tips" },
    { title: "How to Export to Streaming Platforms", link: "/docs/export" },
    { title: "How to Become an Insider", link: "/docs/insider" },
    { title: "How to Join Our Dev Team", link: "/docs/join-dev-team" },
    { title: "How to Promote Our Content on Social Media", link: "/docs/promote" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Firecourt Corp Documentation</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {docSections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={section.link}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

