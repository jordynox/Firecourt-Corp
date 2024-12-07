"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send } from 'lucide-react'

interface Message {
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large' | 'icon';
}

export function AIChat() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Hello! I'm FireBot, your AI assistant. How can I help you with audio production today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMessage = {
            text: input,
            sender: 'user' as const,
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsTyping(true)

        try {
            // В будущем здесь будет API запрос к бэкенду
            await new Promise(resolve => setTimeout(resolve, 1000))
            const botResponse = {
                text: getAIResponse(input),
                sender: 'bot' as const,
                timestamp: new Date(),
            }
            setMessages(prev => [...prev, botResponse])
        } catch (error) {
            console.error('Failed to get bot response:', error)
        } finally {
            setIsTyping(false)
        }
    }

    const getAIResponse = (userInput: string) => {
        const input = userInput.toLowerCase()
        if (input.includes('daw') || input.includes('software')) {
            return "Our DAW provides professional-grade audio production capabilities. Would you like to learn more about specific features?"
        } else if (input.includes('plugin')) {
            return "We offer a wide range of audio plugins for mixing, mastering, and sound design. What type of plugin are you interested in?"
        } else if (input.includes('help')) {
            return "I'm here to help! What specific information about audio production or our products do you need?"
        } else {
            return "I understand you're interested in audio production. Could you please be more specific about what you'd like to know?"
        }
    }

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 rounded-full p-4"
                size="icon"
            >
                {isOpen ? <X /> : <MessageSquare />}
            </Button>

            {isOpen && (
                <Card className="fixed bottom-20 right-4 w-80 md:w-96">
                    <CardHeader>
                        <CardTitle className="text-lg">FireBot Assistant</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-96 overflow-y-auto space-y-4 mb-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${
                                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                                            message.sender === 'user'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-700 text-white'
                                        }`}
                                    >
                                        <p>{message.text}</p>
                                        <span className="text-xs opacity-70">
                                            {message.timestamp.toLocaleTimeString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-700 text-white rounded-lg px-4 py-2">
                                        Typing...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <div className="flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your message..."
                            />
                            <Button onClick={handleSend} size="icon">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    )
}