import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Firecourt Corp News</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((event) => (
            <Card key={event}>
              <CardHeader>
                <CardTitle>Upcoming Event {event}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Join us for an exciting event showcasing the latest in audio technology.</p>
                <Button asChild>
                  <Link href={`/events/${event}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Conference Results</h2>
        <Card>
          <CardHeader>
            <CardTitle>Annual Audio Tech Conference 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Summary of the latest conference results and key announcements.</p>
            <Button className="mt-4" asChild>
              <Link href="/conference-results">View Full Report</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((member) => (
            <Card key={member}>
              <CardHeader>
                <CardTitle>Team Member {member}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brief bio of the team member.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Stock Information</h2>
        <Card>
          <CardHeader>
            <CardTitle>Firecourt Corp Stock Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Latest stock information and market analysis.</p>
            <Button className="mt-4" asChild>
              <Link href="/stocks">View Detailed Report</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

