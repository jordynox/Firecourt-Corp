import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Sliders, Headphones, Speaker, Package } from 'lucide-react'

const products = [
  { name: "Pro Microphone", category: "Hardware", price: "$199.99", icon: Mic },
  { name: "Audio Interface", category: "Hardware", price: "$299.99", icon: Sliders },
  { name: "Studio Headphones", category: "Hardware", price: "$149.99", icon: Headphones },
  { name: "Monitor Speakers", category: "Hardware", price: "$399.99", icon: Speaker },
  { name: "DAW Software", category: "Software", price: "$599.99", icon: Package },
  { name: "Effect Plugin Bundle", category: "Software", price: "$199.99", icon: Package },
]

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Firecourt Store</h1>
      
      <div className="mb-8 flex flex-wrap gap-4">
        <Input className="max-w-xs" placeholder="Search products..." />
        <Select>
          <option value="">All Categories</option>
          <option value="hardware">Hardware</option>
          <option value="software">Software</option>
        </Select>
        <Select>
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name</option>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index} className="bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <product.icon className="h-5 w-5" />
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">{product.category}</p>
              <p className="mt-2 text-lg font-semibold">{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

