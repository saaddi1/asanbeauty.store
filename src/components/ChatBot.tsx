
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { MessageCircle, X } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = window.innerWidth < 768;

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // In a real implementation, this would call the OpenAI API
      // For demo purposes, we'll just simulate a response
      setTimeout(() => {
        const botResponses = [
          "Thank you for your question. Our products are cruelty-free and environmentally friendly.",
          "I'd be happy to help you find the right product for your needs. Could you tell me more about what you're looking for?",
          "Our shipping usually takes 2-3 business days within the US.",
          "You can return any unused product within 30 days for a full refund.",
        ];
        
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: randomResponse },
        ]);
        setIsLoading(false);
      }, 1000);
      
      // Note: In production, you would integrate with OpenAI API like this:
      /* 
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });
      
      if (!response.ok) throw new Error('API request failed');
      
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
      */
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from assistant",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderChatContent = () => (
    <div className="flex flex-col h-full">
      <div className="bg-[#C1D9BF] p-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Asan Mart Support</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg max-w-[80%] ${
                message.role === "user"
                  ? "bg-[#C1D9BF]/60 text-gray-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-gray-100">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-3 bg-white">
        <div className="flex items-end space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask a question..."
            className="resize-none min-h-[60px]"
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!input.trim() || isLoading} 
            className="bg-[#C1D9BF] hover:bg-[#A3C2A0] text-gray-800"
          >
            Send
          </Button>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">
          Powered by ChatGPT
        </div>
      </div>
    </div>
  );

  // Use Dialog for desktop and Drawer for mobile
  return (
    <>
      {isMobile ? (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button 
              className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-[#C1D9BF] hover:bg-[#A3C2A0] text-gray-800 flex items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[90vh]">
            {renderChatContent()}
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-[#C1D9BF] hover:bg-[#A3C2A0] text-gray-800 flex items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle />
            </Button>
          </DialogTrigger>
          <DialogContent className="h-[500px] w-[380px] p-0">
            {renderChatContent()}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
