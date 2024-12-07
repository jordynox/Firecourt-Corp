"use client"
import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" className="h-10 w-10" />
          <span className="inline-block font-bold text-white">Firecourt Corp</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              asChild
              className="transition-colors duration-200 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/news">News</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className="transition-colors duration-200 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/store">Store</Link>
            </Button>
            <Button 
              variant="ghost" 
              asChild
              className="transition-colors duration-200 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/download">Download</Link>
            </Button>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="transition-colors duration-200 hover:bg-blue-600 hover:text-white">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/forum">Forum & Discussions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/documentation">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="default" 
              asChild
              className="transition-transform duration-200 hover:scale-105"
            >
              <Link href="/auth">Sign In / Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

