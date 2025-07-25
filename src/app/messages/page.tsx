import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { conversations } from "@/lib/data";
import { Send, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function MessagesPage() {
  const activeConversation = conversations[0];

  return (
    <div className="container mx-auto h-[calc(100vh-4rem)] p-0">
      <div className="flex h-full border rounded-lg overflow-hidden my-4 shadow-lg">
        <aside className="w-1/3 border-r flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-headline font-bold">Messages</h1>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-8" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {conversations.map((convo) => (
                <div key={convo.id} className={`p-4 border-b cursor-pointer hover:bg-muted/50 ${convo.id === activeConversation.id ? 'bg-muted' : ''}`}>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={convo.participant.avatar} alt={convo.participant.name} data-ai-hint={convo.participant.aiHint}/>
                      <AvatarFallback>{convo.participant.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold truncate">{convo.participant.name}</p>
                        <p className="text-xs text-muted-foreground">{convo.lastMessageTimestamp}</p>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        <main className="w-2/3 flex flex-col">
          <div className="p-4 border-b flex items-center gap-4">
            <Avatar>
              <AvatarImage src={activeConversation.participant.avatar} alt={activeConversation.participant.name} data-ai-hint={activeConversation.participant.aiHint} />
              <AvatarFallback>{activeConversation.participant.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{activeConversation.participant.name}</p>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
          <ScrollArea className="flex-1 p-6 bg-muted/20">
            <div className="space-y-4">
              {activeConversation.messages.map(message => (
                <div key={message.id} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.sender === 'participant' && <Avatar className="h-8 w-8"><AvatarImage src={activeConversation.participant.avatar} data-ai-hint={activeConversation.participant.aiHint}/></Avatar>}
                  <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl ${message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-background shadow-sm rounded-bl-none'}`}>
                    <p>{message.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t bg-background">
            <div className="relative">
              <Input placeholder="Type a message..." className="pr-12 h-12" />
              <Button type="submit" size="icon" className="absolute top-1.5 right-1.5 h-9 w-9 bg-accent hover:bg-accent/90">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send Message</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
