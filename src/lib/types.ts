
export type User = {
  id: string;
  name: string;
  avatar: string;
  aiHint: string;
  isHost: boolean;
};

export type ReviewData = {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

export type Experience = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  aiHint: string;
  host: User;
  location: string;
  price: number;
  rating: number;
  reviewsCount: number;
  reviews: ReviewData[];
  availability: string;
  category: string;
  whatYoullDo: string[];
  whatIsIncluded: string[];
};

export type Booking = {
  id: string;
  experienceId: string;
  guest: User;
  bookingDate: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
};

export type Message = {
  id: string;
  sender: 'user' | 'participant';
  text: string;
  timestamp: string;
};

export type Conversation = {
  id: string;
  participant: User;
  messages: Message[];
  lastMessage: string;
  lastMessageTimestamp: string;
};
