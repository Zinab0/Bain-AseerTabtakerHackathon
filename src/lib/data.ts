
import type { User, Experience, Conversation, ReviewData, Booking } from './types';

export const users: User[] = [
  { id: 'user-1', name: 'Ali Mohammed', avatar: 'https://placehold.co/100x100.png', aiHint: "man portrait", isHost: true },
  { id: 'user-2', name: 'Fatima Al-Asmari', avatar: 'https://placehold.co/100x100.png', aiHint: "woman portrait", isHost: true },
  { id: 'user-3', name: 'John Doe', avatar: 'https://placehold.co/100x100.png', aiHint: "tourist portrait", isHost: false },
  { id: 'user-4', name: 'Noura Khalid', avatar: 'https://placehold.co/100x100.png', aiHint: "host portrait", isHost: true },
  { id: 'user-5', name: 'Ibrahim Hassan', avatar: 'https://placehold.co/100x100.png', aiHint: "artisan portrait", isHost: true },
  { id: 'user-6', name: 'Layla Faisal', avatar: 'https://placehold.co/100x100.png', aiHint: "chef portrait", isHost: true },
  { id: 'user-7', name: 'Jane Smith', avatar: 'https://placehold.co/100x100.png', aiHint: 'tourist portrait', isHost: false },
];

const reviews: ReviewData[] = [
    { id: 'rev-1-1', user: users[2], rating: 5, comment: "Amazing experience! Fatima is a wonderful host and the Areeqah was the best I've ever tasted.", date: '2023-10-15' },
    { id: 'rev-1-2', user: users[6], rating: 5, comment: "A must-do in Abha. The food was incredible.", date: '2023-10-12' },
    { id: 'rev-2-1', user: users[2], rating: 5, comment: "Attending a real Asiri wedding was a privilege. Noura's family was so welcoming!", date: '2023-09-20' },
    { id: 'rev-3-1', user: users[2], rating: 5, comment: "The views were absolutely spectacular. Ali is very knowledgeable about the area.", date: '2023-10-05' },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    name: 'Taste of Asir: Areeqah Making',
    description: 'Learn to make the famous Areeqah (عريكة), a cornerstone of Asiri cuisine.',
    longDescription: 'Join Fatima in her family home for an immersive cooking experience focused on Areeqah. You will learn the secrets of making this delicious and hearty dish, from preparing the dough to the artful presentation with dates and honey. This hands-on class ends with a communal meal where you can enjoy the Areeqah you prepared.',
    image: 'https://i.postimg.cc/NM8RFZnZ/Taste-of-Asir-Areeqah-Making.png',
    images: ['https://i.postimg.cc/NM8RFZnZ/Taste-of-Asir-Areeqah-Making.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    aiHint: 'traditional food',
    host: users[1],
    location: 'Abha, Asir',
    price: 80,
    rating: 4.9,
    reviewsCount: 42,
    availability: 'Daily, 11am',
    category: 'Food',
    whatYoullDo: ['Learn about the cultural significance of Areeqah', 'Prepare Areeqah from scratch with fresh, local ingredients', 'Enjoy the meal with the host family'],
    whatIsIncluded: ['All ingredients', 'Recipe card', 'Arabic coffee and dates'],
    reviews: [reviews[0], reviews[1]]
  },
  {
    id: 'exp-2',
    name: 'Attend a Traditional Asiri Wedding',
    description: 'Experience the vibrant celebration of a traditional Asiri wedding with a local family.',
    longDescription: 'Be an honored guest at a real Asiri wedding. Hosted by Noura and her family, you will be respectfully guided through the ceremonies, music, and dances. This is a unique opportunity to witness the rich cultural traditions of the region in a genuine and festive atmosphere. Please note that attire and conduct guidelines will be provided to ensure respect for the occasion.',
    image: 'https://i.postimg.cc/7ZpB28BL/hq720.jpg',
    images: ['https://i.postimg.cc/7ZpB28BL/hq720.jpg', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    aiHint: 'wedding celebration',
    host: users[3],
    location: 'Khamis Mushait',
    price: 250,
    rating: 5.0,
    reviewsCount: 15,
    availability: 'Select weekends (based on wedding dates)',
    category: 'Culture',
    whatYoullDo: ['Attend a wedding ceremony as a guest', 'Observe traditional music and dance performances', 'Partake in the wedding feast'],
    whatIsIncluded: ['Host guidance throughout the event', 'A small gift for the couple', 'Transportation to the venue'],
     reviews: [reviews[2]]
  },
  {
    id: 'exp-3',
    name: 'A trip to Mount Athrab',
    description: 'Embark on a tour with an experienced local guide through Mount Athrab, one of the most beautiful mountains in the Asir region. You will visit panoramic viewpoints, pass by old farms, and stop in a traditional village for tea with the locals. Learn about the unique plants and animals of the area.',
    longDescription: "Embark on a tour with an experienced local guide through Mount Athrab, one of the most beautiful mountains in the Asir region. You will visit panoramic viewpoints, pass by old farms, and stop in a traditional village for tea with the locals. Learn about the unique plants and animals of the area.",
    image: 'https://i.postimg.cc/YCgZrz7Z/Chat-GPT-Image-Jul-26-2025-01-52-34-AM.png',
    images: ['https://i.postimg.cc/YCgZrz7Z/Chat-GPT-Image-Jul-26-2025-01-52-34-AM.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    aiHint: 'mountain hiking',
    host: users[0],
    location: 'Asir National Park',
    price: 150,
    rating: 5.0,
    reviewsCount: 58,
    availability: 'Daily at 8am',
    category: 'Adventure',
    whatYoullDo: ['Hike or drive through scenic mountain trails', 'Visit a traditional Asiri village', 'Learn about local plants and wildlife'],
    whatIsIncluded: ['Professional guide', '4x4 Transportation', 'Snacks and water', 'Park entry fees'],
     reviews: [reviews[3]]
  },
  {
    id: 'exp-4',
    name: 'Wear Traditional Asiri Clothes & Photoshoot',
    description: 'Dress in beautiful traditional Asiri attire for a unique cultural photoshoot.',
    longDescription: 'Join Layla for a unique cultural immersion. You will get to choose from a selection of authentic, handcrafted Asiri garments for both men and women. After being dressed in the traditional style, including the famous flower crowns (Mekhlab), you will have a photoshoot in a scenic location to capture the memory.',
    image: 'https://i.postimg.cc/P54cvrLQ/IMG-2931.jpg',
    images: ['https://i.postimg.cc/P54cvrLQ/IMG-2931.jpg', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    aiHint: 'traditional clothing',
    host: users[5],
    location: 'Abha, Asir',
    price: 120,
    rating: 4.9,
    reviewsCount: 33,
    availability: 'Daily at 4pm',
    category: 'Culture',
    whatYoullDo: ['Learn about the different elements of Asiri clothing', 'Get dressed in a complete traditional outfit', 'Have a professional photoshoot in a scenic spot'],
    whatIsIncluded: ['Rental of traditional clothes and accessories', 'Assistance with dressing', 'Digital copies of your photos'],
    reviews: []
  },
  {
    id: 'exp-5',
    name: "A Journey Through Rijal Almaa's History",
    description: "A guided tour of the historic stone village of Rijal Almaa.",
    longDescription: "Walk through the corridors of time with a historian guide in the stunning village of Rijal Almaa. You will explore the unique architecture of the stone fortresses, visit the local museum, and hear stories of the village's rich history as a regional trade center. This tour provides deep insights into the heritage of the Asir region.",
    image: 'https://i.postimg.cc/fLj0DFqy/attraction-page-1.webp',
    images: ['https://i.postimg.cc/fLj0DFqy/attraction-page-1.webp', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    aiHint: 'historic village',
    host: users[4],
    location: 'Rijal Almaa',
    price: 50,
    rating: 4.8,
    reviewsCount: 61,
    availability: 'Tue, Thu, Sat at 9am',
    category: 'History',
    whatYoullDo: ['Explore the ancient alleyways and buildings', 'Visit the Rijal Almaa museum', 'Learn about the history and culture of the village'],
    whatIsIncluded: ['Expert historical guide', 'Museum entrance fee', 'Arabic coffee and dates'],
    reviews: []
  },
  {
    id: 'exp-6',
    name: 'Al-Qatt Al-Asiri Art Workshop',
    description: 'Discover the ancient art of Al-Qatt Al-Asiri with a master artisan.',
    longDescription: 'Under the guidance of Ibrahim, a master of the UNESCO-recognized Al-Qatt Al-Asiri art form, you will create your own masterpiece. This workshop covers the history of the art, the meaning behind the geometric patterns, and the techniques used to create these vibrant murals. You will leave with your own decorated wooden panel.',
    image: 'https://i.postimg.cc/DyrtrcJh/qatt-al-asiri-art-workshop-in-abha-5135760.jpg',
    images: ['https://i.postimg.cc/DyrtrcJh/qatt-al-asiri-art-workshop-in-abha-5135760.jpg', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    aiHint: 'art workshop',
    host: users[4],
    location: 'Rijal Almaa',
    price: 90,
    rating: 4.8,
    reviewsCount: 35,
    availability: 'Mon, Wed, Fri at 2pm',
    category: 'Culture',
    whatYoullDo: ['Learn about the history and symbolism of Al-Qatt Al-Asiri', 'Practice drawing the traditional patterns', 'Paint your own decorative piece to take home'],
    whatIsIncluded: ['All art supplies', 'Wooden panel', 'Protective apron'],
    reviews: []
  },
];

export const bookings: Booking[] = [
    { id: 'booking-1', experienceId: 'exp-1', guest: users[2], bookingDate: '2023-10-20', status: 'Confirmed' },
    { id: 'booking-2', experienceId: 'exp-1', guest: users[6], bookingDate: '2023-10-22', status: 'Confirmed' },
    { id: 'booking-3', experienceId: 'exp-3', guest: users[6], bookingDate: '2023-11-05', status: 'Confirmed' },
    { id: 'booking-4', experienceId: 'exp-3', guest: users[2], bookingDate: '2023-11-12', status: 'Pending' },
];

export const conversations: Conversation[] = [
  {
    id: 'conv-1',
    participant: users[0], // Ali Mohammed, host of mountain trip
    lastMessage: 'Hi Ali, I booked the mountain tour for next Friday. Just confirming the meeting point.',
    lastMessageTimestamp: '9:15 AM',
    messages: [
      { id: 'msg-1-1', sender: 'user', text: 'Hi Ali, I booked the mountain tour for next Friday. Just confirming the meeting point.', timestamp: '9:15 AM' },
      { id: 'msg-1-2', sender: 'participant', text: 'Hi John! Yes, we will meet at the entrance of Asir National Park at 8am. I will send you a precise location pin the day before.', timestamp: '9:17 AM' },
    ],
  },
  {
    id: 'conv-2',
    participant: users[1], // Fatima Al-Asmari
    lastMessage: 'Perfect, see you then!',
    lastMessageTimestamp: 'Yesterday',
     messages: [
      { id: 'msg-2-1', sender: 'user', text: 'Hi Fatima, I\'m interested in the Areeqah making, is it suitable for beginners?', timestamp: 'Yesterday' },
      { id: 'msg-2-2', sender: 'participant', text: 'Hi! Absolutely, it is designed for all skill levels. I will guide you through every step.', timestamp: 'Yesterday' },
      { id: 'msg-2-3', sender: 'user', text: 'That\'s great! Thank you. I am looking forward to it.', timestamp: 'Yesterday' },
    ],
  },
  {
    id: 'conv-3',
    participant: users[3],
    lastMessage: 'It was a pleasure to have you.',
    lastMessageTimestamp: '3 days ago',
     messages: [
      { id: 'msg-3-1', sender: 'user', text: 'Thank you for the incredible wedding experience. It was an honor to be there.', timestamp: '3 days ago' },
      { id: 'msg-3-2', sender: 'participant', text: 'You are very welcome! Our family was happy to share our special day. It was a pleasure to have you.', timestamp: '3 days ago' },
    ],
  },
];
