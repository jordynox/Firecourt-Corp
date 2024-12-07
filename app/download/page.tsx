import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Apple, LaptopIcon as Linux, ComputerIcon as Windows } from 'lucide-react'

const downloads = [
  { name: "Firecourt Studio", platform: "MacOS", icon: Apple, checksum: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6" },
  { name: "Firecourt Studio", platform: "Linux", icon: Linux, checksum: "q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6" },
  { name: "Firecourt Studio", platform: "Windows", icon: Windows, checksum: "z1x2c3v4b5n6m7a8s9d0f1g2h3j4k5l6" },
]

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Download Firecourt Studio</h1>
      
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Installation Instructions</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Choose your platform below and click the download button.</li>
          <li>Once the download is complete, run the installer.</li>
          <li>Follow the on-screen instructions to complete the installation.</li>
          <li>Launch Firecourt Studio and start creating!</li>
        </ol>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {downloads.map((download, index) => (
          <Card key={index} className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <download.icon className="h-5 w-5" />
                {download.name} for {download.platform}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">SHA-256 Checksum:</p>
              <p className="mt-1 text-xs font-mono break-all">{download.checksum}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Download</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

