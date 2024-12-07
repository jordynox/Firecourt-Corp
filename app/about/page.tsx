import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const teamMembers = [
  { name: "Jordan Lewiston", role: "CEO & Founder", image: " " },
  { name: "==", role: "CTO", image: " " },
  { name: "===", role: "Lead Developer", image: " " },
  { name: "=====", role: "Head of Design", image: " " },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 relative">
        <Image
          src="public/images/logo.jpg"
          alt="Firecourt Corp Team"
          width={1200}
          height={400}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">About Firecourt Corp</h1>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-300 mb-4">
          Firecourt Corp was founded with a mission to revolutionize the audio production industry. 
          Our journey began when a group of passionate audio engineers and software developers came together 
          to create tools that would empower musicians and producers around the world.
        </p>
        <p className="text-gray-300">
          Today, we're proud to be at the forefront of audio technology, constantly innovating and pushing 
          the boundaries of what's possible in sound design and music production.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-300">
          At Firecourt Corp, our mission is to provide cutting-edge audio solutions that inspire creativity 
          and enable artists to bring their musical visions to life. We're committed to developing intuitive, 
          powerful tools that streamline the production process and elevate the quality of audio across all mediums.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-800">
              <CardHeader>
                <Image
                  src={member.image}   //вставляешь сюда свою фотку и фотки мемберов. путь указывай: /public/images/CEO.jpg например
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{member.name}</CardTitle>
                <p className="text-sm text-gray-400">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

