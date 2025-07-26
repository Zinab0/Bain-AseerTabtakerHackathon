
"use client"

import { Suspense } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { users, experiences, bookings, conversations } from "@/lib/data";
import ExperienceCard from "@/components/ExperienceCard";
import { Edit, Mail, PlusCircle, Send, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import Link from "next/link";
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Conversation } from '@/lib/types';

function ProfilePageContent() {
  const { language, translations } = useLanguage();
  const { user } = useAuth();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations.profilePage;

  const currentUser = user ? users.find(u => u.id === user.id) ?? users[2] : users[2];
  const userT = translations.users[currentUser.id as keyof typeof translations.users];
  const isHost = user?.isHost ?? false;

  // Data for Tourists
  const bookedExperiences = [experiences[0], experiences[2]];
  const touristConversations: Conversation[] = [conversations[1]];
  const activeTouristConversation = touristConversations[0];
  const activeTouristConvoT = activeTouristConversation ? translations.conversations[activeTouristConversation.id as keyof typeof translations.conversations] : null;
  const activeTouristParticipantT = activeTouristConversation ? translations.users[activeTouristConversation.participant.id as keyof typeof translations.users] : null;

  // Data for Hosts
  const hostedExperiences = experiences.filter(exp => exp.host.id === currentUser.id);
  const hostExperienceIds = hostedExperiences.map(exp => exp.id);
  const hostBookings = bookings.filter(booking => hostExperienceIds.includes(booking.experienceId));
  const hostBookingGuestIds = hostBookings.map(booking => booking.guest.id);
  const hostConversations = conversations.filter(convo => {
      const guestIds = hostBookings.map(b => b.guest.id);
      return guestIds.includes(convo.participant.id) || convo.participant.id === users[2].id;
  });
  
  const activeHostConversation = hostConversations.find(c => c.id === 'conv-1');
  const activeHostConvoT = activeHostConversation ? translations.conversations[activeHostConversation.id as keyof typeof translations.conversations] : null;
  const activeHostParticipantT = activeHostConversation ? translations.users[activeHostConversation.participant.id as keyof typeof translations.users] : null;


  if (!user) {
     return (
       <div className="container mx-auto px-4 py-8 md:py-12 text-center" dir={dir}>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{t.pleaseLogin.title}</CardTitle>
            <CardDescription>{t.pleaseLogin.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/login">{translations.header.login}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
     )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12" dir={dir}>
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <Avatar className="h-28 w-28 border-4 border-primary">
              <AvatarImage src={currentUser.avatar} alt={userT.name} data-ai-hint={currentUser.aiHint} />
              <AvatarFallback>{userT.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-headline font-bold">{userT.name}</h1>
              <p className="text-muted-foreground">{isHost ? t.host : t.tourist}</p>
              <div className="flex gap-4 mt-2 justify-center sm:justify-start">
                  <div className="flex items-center text-muted-foreground"><Mail className="w-4 h-4 mr-2"/> {currentUser.name.toLowerCase().replace(' ', '.')}@email.com</div>
              </div>
            </div>
            <div className="sm:ml-auto">
                 <Button variant="outline"><Edit className="w-4 h-4 mr-2"/> {t.editProfile}</Button>
            </div>
          </div>
          
          <Separator />
          
          <div className="mt-8">
            {isHost ? (
              <Tabs defaultValue="my-experiences">
                  <TabsList className="grid w-full grid-cols-3 gap-x-2 mb-4">
                      <TabsTrigger value="my-experiences">{t.hostTabs.myExperiences}</TabsTrigger>
                      <TabsTrigger value="bookings">{t.hostTabs.bookings}</TabsTrigger>
                      <TabsTrigger value="messages">{t.hostTabs.messages}</TabsTrigger>
                  </TabsList>

                  <TabsContent value="my-experiences">
                      <div className="flex justify-between items-center mb-4">
                          <h2 className="text-2xl font-headline font-bold">{t.yourHostedExperiences}</h2>
                          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/host/add-experience">
                              <PlusCircle className="w-4 h-4 mr-2"/>
                              {t.addNewExperience}
                          </Link>
                          </Button>
                      </div>
                      {hostedExperiences.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {hostedExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
                          </div>
                      ) : (
                          <div className="text-center py-12 bg-muted rounded-lg">
                              <h3 className="text-xl font-semibold">{t.noExperiences.title}</h3>
                              <p className="text-muted-foreground mt-2 mb-4">{t.noExperiences.subtitle}</p>
                              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                              <Link href="/host/add-experience">{t.noExperiences.button}</Link>
                              </Button>
                          </div>
                      )}
                  </TabsContent>

                  <TabsContent value="bookings">
                        <h2 className="text-2xl font-headline font-bold mb-4">{t.hostTabs.bookings}</h2>
                        {hostBookings.length > 0 ? (
                          <Card>
                              <Table>
                                  <TableHeader>
                                      <TableRow>
                                      <TableHead>{t.bookingsTable.guest}</TableHead>
                                      <TableHead>{t.bookingsTable.experience}</TableHead>
                                      <TableHead>{t.bookingsTable.date}</TableHead>
                                      <TableHead className="text-right">{t.bookingsTable.status}</TableHead>
                                      </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                      {hostBookings.map(booking => {
                                          const experience = experiences.find(exp => exp.id === booking.experienceId);
                                          const expT = experience ? translations.experiences[experience.id as keyof typeof translations.experiences] : null;
                                          const guestT = translations.users[booking.guest.id as keyof typeof translations.users];
                                          return (
                                              <TableRow key={booking.id}>
                                                  <TableCell className="font-medium flex items-center gap-3">
                                                      <Avatar className="h-9 w-9">
                                                        <AvatarImage src={booking.guest.avatar} alt={guestT.name} data-ai-hint={booking.guest.aiHint} />
                                                        <AvatarFallback>{guestT.name.charAt(0)}</AvatarFallback>
                                                      </Avatar>
                                                      {guestT.name}
                                                  </TableCell>
                                                  <TableCell>{expT?.name ?? 'Unknown Experience'}</TableCell>
                                                  <TableCell>{booking.bookingDate}</TableCell>
                                                  <TableCell className="text-right">
                                                      <Badge variant={booking.status === 'Confirmed' ? 'default' : 'secondary'}>{booking.status}</Badge>
                                                  </TableCell>
                                              </TableRow>
                                          )
                                      })}
                                  </TableBody>
                              </Table>
                          </Card>
                        ) : (
                          <div className="text-center py-12 bg-muted rounded-lg">
                              <h3 className="text-xl font-semibold">{t.bookingsTable.noBookings}</h3>
                          </div>
                        )}
                  </TabsContent>
                  
                  <TabsContent value="messages">
                      <h2 className="text-2xl font-headline font-bold mb-4">{t.hostTabs.messages}</h2>
                      {hostConversations.length > 0 && activeHostConvoT && activeHostParticipantT ? (
                          <Card className="h-[600px]">
                              <div className="flex h-full">
                                  <aside className="w-1/3 border-r flex flex-col">
                                      <div className="p-4 border-b">
                                          <div className="relative">
                                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                              <Input placeholder={translations.messagesPage.searchPlaceholder} className="pl-8" />
                                          </div>
                                      </div>
                                      <ScrollArea className="flex-1">
                                          <div className="flex flex-col">
                                              {hostConversations.map((convo) => {
                                                  const convoT = translations.conversations[convo.id as keyof typeof translations.conversations];
                                                  const participantT = translations.users[convo.participant.id as keyof typeof translations.users];
                                                  return (
                                                      <div key={convo.id} className={`p-4 border-b cursor-pointer hover:bg-muted/50 ${activeHostConversation && convo.id === activeHostConversation.id ? 'bg-muted' : ''}`}>
                                                          <div className="flex items-center gap-3">
                                                              <Avatar className="h-10 w-10">
                                                                  <AvatarImage src={convo.participant.avatar} alt={participantT.name} data-ai-hint={convo.participant.aiHint} />
                                                                  <AvatarFallback>{participantT.name.charAt(0)}</AvatarFallback>
                                                              </Avatar>
                                                              <div className="flex-1 overflow-hidden">
                                                                  <p className="font-semibold truncate">{participantT.name}</p>
                                                                  <p className="text-xs text-muted-foreground truncate">{convoT.lastMessage}</p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  )
                                              })}
                                          </div>
                                      </ScrollArea>
                                  </aside>
                                  <main className="w-2/3 flex flex-col">
                                        <div className="p-4 border-b flex items-center gap-4">
                                          <Avatar>
                                              <AvatarImage src={activeHostConversation.participant.avatar} alt={activeHostParticipantT.name} data-ai-hint={activeHostConversation.participant.aiHint} />
                                              <AvatarFallback>{activeHostParticipantT.name.charAt(0)}</AvatarFallback>
                                          </Avatar>
                                          <div>
                                              <p className="font-semibold">{activeHostParticipantT.name}</p>
                                          </div>
                                      </div>
                                      <ScrollArea className="flex-1 p-6 bg-muted/20">
                                          <div className="space-y-4">
                                              {activeHostConvoT.messages.map((message, index) => (
                                                  <div key={message.id} className={`flex items-end gap-2 ${message.sender === 'participant' ? 'justify-start' : 'justify-end'}`}>
                                                      {message.sender === 'participant' && <Avatar className="h-8 w-8"><AvatarImage src={activeHostConversation.participant.avatar} data-ai-hint={activeHostConversation.participant.aiHint}/></Avatar>}
                                                      <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl ${message.sender === 'participant' ? 'bg-card shadow-sm rounded-bl-none' : 'bg-primary text-primary-foreground rounded-br-none'}`}>
                                                          <p>{message.text}</p>
                                                          <p className="text-xs mt-1 opacity-70 text-right">{activeHostConversation.messages[index].timestamp}</p>
                                                      </div>
                                                       {message.sender === 'user' && <Avatar className="h-8 w-8"><AvatarImage src={currentUser.avatar} data-ai-hint={currentUser.aiHint}/></Avatar>}
                                                  </div>
                                              ))}
                                          </div>
                                      </ScrollArea>
                                      <div className="p-4 border-t bg-background">
                                          <div className="relative">
                                              <Input placeholder={translations.messagesPage.inputPlaceholder} className="pr-12 h-12" />
                                              <Button type="submit" size="icon" className="absolute top-1.5 right-1.5 h-9 w-9 bg-accent hover:bg-accent/90">
                                                  <Send className="h-5 w-5" />
                                                  <span className="sr-only">{translations.messagesPage.sendButton}</span>
                                              </Button>
                                          </div>
                                      </div>
                                  </main>
                              </div>
                          </Card>
                      ) : (
                          <div className="text-center py-12 bg-muted rounded-lg">
                              <h3 className="text-xl font-semibold">{t.noMessages.title}</h3>
                              <p className="text-muted-foreground mt-2">{t.noMessages.subtitle}</p>
                          </div>
                      )}
                  </TabsContent>
              </Tabs>
            ) : (
              // Tourist View
              <Tabs defaultValue="bookings">
                <TabsList className="grid w-full grid-cols-2 gap-x-2">
                  <TabsTrigger value="bookings">{t.myBookings}</TabsTrigger>
                  <TabsTrigger value="messages">{t.touristTabs.messages}</TabsTrigger>
                </TabsList>
                <TabsContent value="bookings" className="mt-6">
                    <h2 className="text-2xl font-headline font-bold mb-4">{t.yourUpcomingAdventures}</h2>
                    {bookedExperiences.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {bookedExperiences.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-muted rounded-lg">
                          <h3 className="text-xl font-semibold">{t.noBookings.title}</h3>
                          <p className="text-muted-foreground mt-2 mb-4">{t.noBookings.subtitle}</p>
                          <Button asChild>
                            <Link href="/experiences">{t.noBookings.button}</Link>
                          </Button>
                        </div>
                    )}
                </TabsContent>
                <TabsContent value="messages">
                  <h2 className="text-2xl font-headline font-bold mb-4">{t.touristTabs.messages}</h2>
                  {touristConversations.length > 0 && activeTouristConvoT && activeTouristParticipantT ? (
                      <Card className="h-[600px]">
                          <div className="flex h-full">
                              <aside className="w-1/3 border-r flex flex-col">
                                  <div className="p-4 border-b">
                                      <div className="relative">
                                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                          <Input placeholder={translations.messagesPage.searchPlaceholder} className="pl-8" />
                                      </div>
                                  </div>
                                  <ScrollArea className="flex-1">
                                      <div className="flex flex-col">
                                          {touristConversations.map((convo) => {
                                              const convoT = translations.conversations[convo.id as keyof typeof translations.conversations];
                                              const participantT = translations.users[convo.participant.id as keyof typeof translations.users];
                                              return (
                                                  <div key={convo.id} className={`p-4 border-b cursor-pointer hover:bg-muted/50 ${convo.id === activeTouristConversation.id ? 'bg-muted' : ''}`}>
                                                      <div className="flex items-center gap-3">
                                                          <Avatar className="h-10 w-10">
                                                              <AvatarImage src={convo.participant.avatar} alt={participantT.name} data-ai-hint={convo.participant.aiHint} />
                                                              <AvatarFallback>{participantT.name.charAt(0)}</AvatarFallback>
                                                          </Avatar>
                                                          <div className="flex-1 overflow-hidden">
                                                              <p className="font-semibold truncate">{participantT.name}</p>
                                                              <p className="text-xs text-muted-foreground truncate">{convoT.lastMessage}</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              )
                                          })}
                                      </div>
                                  </ScrollArea>
                              </aside>
                              <main className="w-2/3 flex flex-col">
                                    <div className="p-4 border-b flex items-center gap-4">
                                      <Avatar>
                                          <AvatarImage src={activeTouristConversation.participant.avatar} alt={activeTouristParticipantT.name} data-ai-hint={activeTouristConversation.participant.aiHint} />
                                          <AvatarFallback>{activeTouristParticipantT.name.charAt(0)}</AvatarFallback>
                                      </Avatar>
                                      <div>
                                          <p className="font-semibold">{activeTouristParticipantT.name}</p>
                                      </div>
                                  </div>
                                  <ScrollArea className="flex-1 p-6 bg-muted/20">
                                      <div className="space-y-4">
                                          {activeTouristConvoT.messages.map((message, index) => (
                                              <div key={message.id} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                  {message.sender === 'participant' && <Avatar className="h-8 w-8"><AvatarImage src={activeTouristConversation.participant.avatar} data-ai-hint={activeTouristConversation.participant.aiHint}/></Avatar>}
                                                  <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl ${message.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-card shadow-sm rounded-bl-none'}`}>
                                                      <p>{message.text}</p>
                                                      <p className="text-xs mt-1 opacity-70 text-right">{activeTouristConversation.messages[index].timestamp}</p>
                                                  </div>
                                              </div>
                                          ))}
                                      </div>
                                  </ScrollArea>
                                  <div className="p-4 border-t bg-background">
                                      <div className="relative">
                                          <Input placeholder={translations.messagesPage.inputPlaceholder} className="pr-12 h-12" />
                                          <Button type="submit" size="icon" className="absolute top-1.5 right-1.5 h-9 w-9 bg-accent hover:bg-accent/90">
                                              <Send className="h-5 w-5" />
                                              <span className="sr-only">{translations.messagesPage.sendButton}</span>
                                          </Button>
                                      </div>
                                  </div>
                              </main>
                          </div>
                      </Card>
                  ) : (
                      <div className="text-center py-12 bg-muted rounded-lg">
                          <h3 className="text-xl font-semibold">{t.noMessages.title}</h3>
                          <p className="text-muted-foreground mt-2">{t.noMessages.subtitle}</p>
                      </div>
                  )}
                </TabsContent>
              </Tabs>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfilePageContent />
    </Suspense>
  )
}
