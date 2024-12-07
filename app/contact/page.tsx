import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Contact Us</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault()
          }}>
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Our Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>123 Firecourt Street, Suite 100</p>
              <p>City, Country</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>+1 (123) 456-7890</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>contact@firecourt.com</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Find Us</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616562308246!5m2!1sen!2sus"
            width="100%" 
            height="450" 
            className="border-0"
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

