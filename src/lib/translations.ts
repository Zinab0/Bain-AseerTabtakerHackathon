
const translations = {
  en: {
    header: {
      experiences: 'Experiences',
      recommendations: 'AI Recommender',
      profile: 'Profile',
      login: 'Login',
      signUp: 'Sign Up',
      logout: 'Log Out',
    },
    home: {
      title: "The bridge between tourists and the people of Asir.",
      subtitle: "From its authentic traditions to its mountain adventures — discover Asir through its people and unforgettable experiences.",
      browseButton: 'Browse Experiences',
      aiButton: 'Get AI Recommendations',
      featuredExperiences: 'Featured Experiences',
      browseAllButton: 'Browse All Experiences',
      recommendations: {
        title: 'Recommended For You',
        subtitle: 'Based on your past experiences, you might also like these.',
        aiButton: 'Get More AI Recommendations',
      }
    },
    loginPage: {
      title: 'Welcome Back!',
      subtitle: 'Choose your role and enter your details to log in.',
    },
    signupPage: {
        title: 'Create an Account',
        subtitle: 'Choose your role, enter your details, and select your preferred language.',
    },
    authForm: {
        iAmA: 'I am a...',
        tourist: 'Tourist',
        host: 'Host',
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        password: 'Password',
        passport: 'Passport Number',
        passportPlaceholder: 'Enter your passport number',
        hostId: 'National ID',
        hostIdPlaceholder: 'Enter your National ID',
        preferredLanguage: 'Preferred Language',
        languagePlaceholder: 'Select a language',
        loginButton: 'Login',
        signupButton: 'Create Account',
        noAccount: 'Don\'t have an account?',
        haveAccount: 'Already have an account?',
        signupLink: 'Sign up',
        loginLink: 'Login',
        validation: {
            nameRequired: 'Name is required',
            invalidEmail: 'Invalid email address',
            passwordLength: 'Password must be at least 8 characters',
            roleRequired: 'You must select a role.',
            languageRequired: 'Please select a language.',
            passwordRequired: 'Password is required',
            passportRequired: 'Passport number is required.',
            hostIdRequired: 'National ID is required.',
        }
    },
    experiencesPage: {
      title: 'Explore All Experiences',
      subtitle: 'Find your next adventure in Asir. Filter by your interests and availability.',
    },
    filterSidebar: {
        title: 'Filter By',
        category: 'Category',
        categories: {
            food: 'Food',
            culture: 'Culture',
            adventure: 'Adventure',
            history: 'History',
            nature: 'Nature',
            crafts: 'Crafts',
        },
        maxPrice: 'Max Price',
        availability: 'Availability',
        applyFilters: 'Apply Filters',
    },
    experienceCard: {
        details: 'Details',
    },
    experienceDetails: {
        reviews: 'reviews',
        about: 'About this experience',
        whatYoullDo: "What you'll do",
        whatIsIncluded: "What's included",
        meetYourHost: 'Meet your host',
        hostQuote: "I'm passionate about sharing the rich culture and natural beauty of my home, Asir, with visitors from around the world. I look forward to welcoming you!",
        contactHost: 'Contact Host',
        whereYoullBe: "Where you'll be",
        noReviews: 'No reviews yet for this experience.',
        bookYourSpot: 'Book Your Spot',
        currency: 'SAR',
        person: 'person',
        guests: 'Guests',
        guest: 'guest',
        date: 'Date',
        selectDate: 'Select a date',
        bookNow: 'Book Now',
        notChargedYet: "You won't be charged yet",
    },
    profilePage: {
        tourist: 'Tourist',
        host: 'Host',
        editProfile: 'Edit Profile',
        myBookings: 'My Bookings',
        hostDashboard: 'Host Dashboard',
        yourUpcomingAdventures: 'Your Upcoming Adventures',
        pleaseLogin: {
            title: 'Please Log In',
            subtitle: 'You need to be logged in to view your profile.',
        },
        noBookings: {
            title: 'You have no upcoming bookings.',
            subtitle: 'Time to find your next adventure!',
            button: 'Explore Experiences',
        },
        noMessages: {
            title: 'You have no new messages.',
            subtitle: 'Conversations with guests will appear here.',
        },
        touristTabs: {
            messages: 'Messages',
        },
        hostTabs: {
            myExperiences: 'My Experiences',
            bookings: 'Bookings',
            messages: 'Messages',
        },
        bookingsTable: {
            guest: 'Guest',
            experience: 'Experience',
            date: 'Date',
            status: 'Status',
            noBookings: 'No bookings for your experiences yet.'
        },
        yourHostedExperiences: 'Your Hosted Experiences',
        addNewExperience: 'Add New Experience',
        noExperiences: {
            title: "You haven't created any experiences yet.",
            subtitle: 'Start sharing your culture with the world!',
            button: 'Create Your First Experience',
        },
        notAHost: {
            title: 'You are not a host yet',
            subtitle: 'To manage experiences, please sign up or log in as a host.',
            button: 'Become a host',
        },
    },
    addExperiencePage: {
        title: 'Create a New Experience',
        subtitle: 'Fill in the details below to offer a new experience to tourists.',
        form: {
            experienceTitle: {
                label: 'Experience Title',
                placeholder: 'e.g., Traditional Asiri Cooking Class',
            },
            description: {
                label: 'Detailed Description',
                placeholder: "Describe what makes your experience unique. Talk about the activities, the culture, and what guests will learn.",
            },
            price: {
                label: 'Price per Person (in SAR)',
                placeholder: '75',
            },
            category: {
                label: 'Category',
                placeholder: 'Select a category',
                options: {
                    food: 'Traditional Food (e.g., Areeqah)',
                    culture: 'Cultural Events (e.g., Wedding)',
                    history: 'History & Art',
                    adventure: 'Mountain Tours & Hiking',
                    crafts: 'Traditional Crafts (e.g., Clothes)',
                }
            },
            location: {
                label: 'Location',
                placeholder: 'e.g., Abha, Asir',
                mapDefault: 'Asir Region'
            },
            photos: {
                label: 'Upload Photos',
                prompt: 'Drag & drop your photos here or click to browse.',
                recommendation: 'High-resolution images are recommended',
                button: 'Browse Files',
                description: 'You can upload multiple images. The first image will be the main cover.',
            },
            submitButton: 'Add Experience'
        }
    },
    messagesPage: {
        title: 'Messages',
        searchPlaceholder: 'Search conversations...',
        online: 'Online',
        inputPlaceholder: 'Type a message...',
        sendButton: 'Send Message'
    },
    recommendationsPage: {
        title: 'AI Experience Recommender',
        subtitle: 'Let our AI find the perfect cultural experiences in Asir for you. Just tell us your interests and travel dates.',
        form: {
            title: 'Your Preferences',
            subtitle: 'Fill out the form below to get started.',
            interests: {
                label: 'Your Interests',
                placeholder: "e.g., I'm passionate about history, love hiking in nature, and enjoy authentic culinary experiences...",
            },
            submitButton: 'Find My Experiences',
            loadingButton: 'Thinking...',
        },
        results: {
            loading: {
                title: 'Generating your personalized recommendations...',
            },
            successTitle: "Here's our top recommendation for you!",
        }
    },
    users: {
        'user-1': { name: 'Ali Mohammed' },
        'user-2': { name: 'Fatima Al-Asmari' },
        'user-3': { name: 'John Doe' },
        'user-4': { name: 'Noura Khalid' },
        'user-5': { name: 'Ibrahim Hassan' },
        'user-6': { name: 'Layla Faisal' },
        'user-7': { name: 'Jane Smith' },
    },
    experiences: {
        'exp-1': {
            name: 'Taste of Asir: Areeqah Making',
            description: 'Learn to make the famous Areeqah (عريكة), a cornerstone of Asiri cuisine.',
            longDescription: 'Join Fatima in her family home for an immersive cooking experience focused on Areeqah. You will learn the secrets of making this delicious and hearty dish, from preparing the dough to the artful presentation with dates and honey. This hands-on class ends with a communal meal where you can enjoy the Areeqah you prepared.',
            location: 'Abha, Asir',
            category: 'Food',
            whatYoullDo: ['Learn about the cultural significance of Areeqah', 'Prepare Areeqah from scratch with fresh, local ingredients', 'Enjoy the meal with the host family'],
            whatIsIncluded: ['All ingredients', 'Recipe card', 'Arabic coffee and dates'],
            reviews: [
                { id: 'rev-1-1', user: 'user-3', comment: "Amazing experience! Fatima is a wonderful host and the Areeqah was the best I've ever tasted." },
                { id: 'rev-1-2', user: 'user-7', comment: "A must-do in Abha. The food was incredible." },
            ]
        },
        'exp-2': {
            name: 'Attend a Traditional Asiri Wedding',
            description: 'Experience the vibrant celebration of a traditional Asiri wedding with a local family.',
            longDescription: 'Be an honored guest at a real Asiri wedding. Hosted by Noura and her family, you will be respectfully guided through the ceremonies, music, and dances. This is a unique opportunity to witness the rich cultural traditions of the region in a genuine and festive atmosphere. Please note that attire and conduct guidelines will be provided to ensure respect for the occasion.',
            location: 'Khamis Mushait',
            category: 'Culture',
            whatYoullDo: ['Attend a wedding ceremony as a guest', 'Observe traditional music and dance performances', 'Partake in the wedding feast'],
            whatIsIncluded: ['Host guidance throughout the event', 'A small gift for the couple', 'Transportation to the venue'],
            reviews: [
                { id: 'rev-2-1', user: 'user-3', comment: "Attending a real Asiri wedding was a privilege. Noura's family was so welcoming!" },
            ]
        },
        'exp-3': {
            name: 'A trip to Mount Athrab',
            description: 'Embark on a tour with an experienced local guide through Mount Athrab, one of the most beautiful mountains in the Asir region. You will visit panoramic viewpoints, pass by old farms, and stop in a traditional village for tea with the locals. Learn about the unique plants and animals of the area.',
            longDescription: "Embark on a tour with an experienced local guide through Mount Athrab, one of the most beautiful mountains in the Asir region. You will visit panoramic viewpoints, pass by old farms, and stop in a traditional village for tea with the locals. Learn about the unique plants and animals of the area.",
            location: 'Asir National Park',
            category: 'Adventure',
            whatYoullDo: ['Hike or drive through scenic mountain trails', 'Visit a traditional Asiri village', 'Learn about local plants and wildlife'],
            whatIsIncluded: ['Professional guide', '4x4 Transportation', 'Snacks and water', 'Park entry fees'],
            reviews: [
                { id: 'rev-3-1', user: 'user-3', comment: "The views were absolutely spectacular. Ali is very knowledgeable about the area." },
            ]
        },
        'exp-4': {
            name: 'Wear Traditional Asiri Clothes & Photoshoot',
            description: 'Dress in beautiful traditional Asiri attire for a unique cultural photoshoot.',
            longDescription: 'Join Layla for a unique cultural immersion. You will get to choose from a selection of authentic, handcrafted Asiri garments for both men and women. After being dressed in the traditional style, including the famous flower crowns (Mekhlab), you will have a photoshoot in a scenic location to capture the memory.',
            location: 'Abha, Asir',
            category: 'Culture',
            whatYoullDo: ['Learn about the different elements of Asiri clothing', 'Get dressed in a complete traditional outfit', 'Have a professional photoshoot in a scenic spot'],
            whatIsIncluded: ['Rental of traditional clothes and accessories', 'Assistance with dressing', 'Digital copies of your photos'],
            reviews: []
        },
        'exp-5': {
            name: "A Journey Through Rijal Almaa's History",
            description: "A guided tour of the historic stone village of Rijal Almaa.",
            longDescription: "Walk through the corridors of time with a historian guide in the stunning village of Rijal Almaa. You will explore the unique architecture of the stone fortresses, visit the local museum, and hear stories of the village's rich history as a regional trade center. This tour provides deep insights into the heritage of the Asir region.",
            location: 'Rijal Almaa',
            category: 'History',
            whatYoullDo: ['Explore the ancient alleyways and buildings', 'Visit the Rijal Almaa museum', 'Learn about the history and culture of the village'],
            whatIsIncluded: ['Expert historical guide', 'Museum entrance fee', 'Arabic coffee and dates'],
            reviews: []
        },
        'exp-6': {
            name: 'Al-Qatt Al-Asiri Art Workshop',
            description: 'Discover the ancient art of Al-Qatt Al-Asiri with a master artisan.',
            longDescription: 'Under the guidance of Ibrahim, a master of the UNESCO-recognized Al-Qatt Al-Asiri art form, you will create your own masterpiece. This workshop covers the history of the art, the meaning behind the geometric patterns, and the techniques used to create these vibrant murals. You will leave with your own decorated wooden panel.',
            location: 'Rijal Almaa',
            category: 'Crafts',
            whatYoullDo: ['Learn about the history and symbolism of Al-Qatt Al-Asiri', 'Practice drawing the traditional patterns', 'Paint your own decorative piece to take home'],
            whatIsIncluded: ['All art supplies', 'Wooden panel', 'Protective apron'],
            reviews: []
        }
    },
    conversations: {
        'conv-1': {
            lastMessage: "Hi John! Yes, we will meet at the entrance of Asir National Park at 8am. I will send you a precise location pin the day before.",
            messages: [
                { id: 'msg-1-1', sender: 'user', text: "Hi Ali, I booked the mountain tour for next Friday. Just confirming the meeting point." },
                { id: 'msg-1-2', sender: 'participant', text: "Hi John! Yes, we will meet at the entrance of Asir National Park at 8am. I will send you a precise location pin the day before." },
            ],
        },
        'conv-2': {
            lastMessage: "Welcome! Thank you for asking. We sometimes garnish the Areeqah with nuts like walnuts or almonds, but they’re not an essential ingredient. If you book the experience, just let me know and I’ll prepare it without nuts for you.",
            messages: [
                { id: "msg-2-1", sender: "user", text: "Hi! I'm really interested in the Areeqah-making experience, but I have a quick question: does it contain any nuts? I have a nut allergy." },
                { id: "msg-2-2", sender: "participant", text: "Welcome! Thank you for asking. We sometimes garnish the Areeqah with nuts like walnuts or almonds, but they’re not an essential ingredient. If you book the experience, just let me know and I’ll prepare it without nuts for you." },
            ],
        },
        'conv-3': {
            lastMessage: 'You are very welcome! Our family was happy to share our special day. It was a pleasure to have you.',
            messages: [
                { id: 'msg-3-1', sender: 'user', text: 'Thank you for the incredible wedding experience. It was an honor to be there.' },
                { id: 'msg-3-2', sender: 'participant', text: 'You are very welcome! Our family was happy to share our special day. It was a pleasure to have you.' },
            ],
        },
    },
  },
  ar: {
    header: {
      experiences: 'التجارب',
      recommendations: 'موصي الذكاء الاصطناعي',
      profile: 'الملف الشخصي',
      login: 'تسجيل الدخول',
      signUp: 'إنشاء حساب',
      logout: 'تسجيل الخروج',
    },
    home: {
      title: 'حلقة الوصل بين السائح وأهل عسير',
      subtitle: 'من تقاليدها الأصيلة إلى مغامرات جبالها — اكتشف عسير من خلال أهلها وتجارب لا تُنسى.',
      browseButton: 'تصفح التجارب',
      aiButton: 'احصل على توصيات الذكاء الاصطناعي',
      featuredExperiences: 'تجارب مميزة',
      browseAllButton: 'تصفح كل التجارب',
      recommendations: {
        title: 'مقترح لك',
        subtitle: 'بناءً على تجاربك السابقة، قد تعجبك هذه أيضًا.',
        aiButton: 'احصل على المزيد من توصيات الذكاء الاصطناعي',
      }
    },
    loginPage: {
      title: 'أهلاً بعودتك!',
      subtitle: 'اختر دورك وأدخل بياناتك لتسجيل الدخول.',
    },
    signupPage: {
        title: 'إنشاء حساب',
        subtitle: 'اختر دورك، أدخل بياناتك، واختر لغتك المفضلة.',
    },
    authForm: {
        iAmA: 'أنا...',
        tourist: 'سائح',
        host: 'مضيف',
        name: 'الاسم',
        namePlaceholder: 'اسمك الكامل',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        passport: 'رقم جواز السفر',
        passportPlaceholder: 'أدخل رقم جواز سفرك',
        hostId: 'رقم الهوية الوطنية',
        hostIdPlaceholder: 'أدخل رقم هويتك الوطنية',
        preferredLanguage: 'اللغة المفضلة',
        languagePlaceholder: 'اختر لغة',
        loginButton: 'تسجيل الدخول',
        signupButton: 'إنشاء حساب',
        noAccount: 'ليس لديك حساب؟',
        haveAccount: 'هل لديك حساب بالفعل؟',
        signupLink: 'إنشاء حساب',
        loginLink: 'تسجيل الدخول',
        validation: {
            nameRequired: 'الاسم مطلوب',
            invalidEmail: 'بريد إلكتروني غير صالح',
            passwordLength: 'يجب أن لا تقل كلمة المرور عن 8 أحرف',
            roleRequired: 'يجب عليك اختيار دور.',
            languageRequired: 'الرجاء اختيار لغة.',
            passwordRequired: 'كلمة المرور مطلوبة',
            passportRequired: 'رقم جواز السفر مطلوب.',
            hostIdRequired: 'رقم الهوية الوطنية مطلوب.',
        }
    },
    experiencesPage: {
        title: 'استكشف كل التجارب',
        subtitle: 'ابحث عن مغامرتك القادمة في عسير. قم بالتصفية حسب اهتماماتك وتوافرك.',
    },
    filterSidebar: {
        title: 'تصفية حسب',
        category: 'الفئة',
        categories: {
            food: 'طعام',
            culture: 'ثقافة',
            adventure: 'مغامرة',
            history: 'تاريخ',
            nature: 'طبيعة',
            crafts: 'حرف يدوية',
        },
        maxPrice: 'السعر الأقصى',
        availability: 'التوفر',
        applyFilters: 'تطبيق المرشحات',
    },
    experienceCard: {
        details: 'التفاصيل',
    },
    experienceDetails: {
        reviews: 'تقييمات',
        about: 'عن هذه التجربة',
        whatYoullDo: 'ماذا ستفعل',
        whatIsIncluded: 'ماذا تتضمن',
        meetYourHost: 'تعرف على مضيفك',
        hostQuote: 'أنا شغوف بمشاركة الثقافة الغنية والجمال الطبيعي لموطني، عسير، مع الزوار من جميع أنحاء العالم. أتطلع إلى الترحيب بكم!',
        contactHost: 'تواصل مع المضيف',
        whereYoullBe: 'أين ستكون',
        noReviews: 'لا توجد تقييمات لهذه التجربة بعد.',
        bookYourSpot: 'احجز مكانك',
        currency: 'ريال سعودي',
        person: 'شخص',
        guests: 'الضيوف',
        guest: 'ضيف',
        date: 'التاريخ',
        selectDate: 'اختر تاريخًا',
        bookNow: 'احجز الآن',
        notChargedYet: 'لن يتم محاسبتك بعد',
    },
    profilePage: {
        tourist: 'سائح',
        host: 'مضيف',
        editProfile: 'تعديل الملف الشخصي',
        myBookings: 'حجوزاتي',
        hostDashboard: 'لوحة تحكم المضيف',
        yourUpcomingAdventures: 'مغامراتك القادمة',
        pleaseLogin: {
            title: 'الرجاء تسجيل الدخول',
            subtitle: 'يجب عليك تسجيل الدخول لعرض ملفك الشخصي.',
        },
        noBookings: {
            title: 'ليس لديك حجوزات قادمة.',
            subtitle: 'حان الوقت للعثور على مغامرتك القادمة!',
            button: 'استكشف التجارب',
        },
        noMessages: {
            title: 'ليس لديك رسائل جديدة.',
            subtitle: 'ستظهر هنا المحادثات مع المضيفين.',
        },
        touristTabs: {
            messages: 'الرسائل',
        },
        hostTabs: {
            myExperiences: 'تجاربي',
            bookings: 'الحجوزات',
            messages: 'الرسائل',
        },
        bookingsTable: {
            guest: 'الضيف',
            experience: 'التجربة',
            date: 'التاريخ',
            status: 'الحالة',
            noBookings: 'لا توجد حجوزات لتجاربك حتى الآن.'
        },
        yourHostedExperiences: 'تجاربك المستضافة',
        addNewExperience: 'أضف تجربة جديدة',
        noExperiences: {
            title: 'لم تقم بإنشاء أي تجارب بعد.',
            subtitle: 'ابدأ بمشاركة ثقافتك مع العالم!',
            button: 'أنشئ تجربتك الأولى',
        },
        notAHost: {
            title: 'أنت لست مضيفًا بعد',
            subtitle: 'لإدارة التجارب، يرجى التسجيل أو تسجيل الدخول كمضيف.',
            button: 'كن مضيفًا',
        },
    },
    addExperiencePage: {
        title: 'إنشاء تجربة جديدة',
        subtitle: 'املأ التفاصيل أدناه لتقديم تجربة جديدة للسياح.',
        form: {
            experienceTitle: {
                label: 'عنوان التجربة',
                placeholder: 'مثال: درس طبخ العريكة العسيرية التقليدية',
            },
            description: {
                label: 'وصف مفصل',
                placeholder: 'صف ما يجعل تجربتك فريدة. تحدث عن الأنشطة والثقافة وما سيتعلمه الضيوف.',
            },
            price: {
                label: 'السعر للشخص الواحد (بالريال السعودي)',
                placeholder: '75',
            },
            category: {
                label: 'الفئة',
                placeholder: 'اختر فئة',
                options: {
                    food: 'طعام تقليدي (مثل العريكة)',
                    culture: 'مناسبات ثقافية (مثل حضور زواج)',
                    history: 'تاريخ وفن',
                    adventure: 'جولات جبلية وتنزه',
                    crafts: 'حرف تقليدية (مثل الملابس)',
                }
            },
            location: {
                label: 'الموقع',
                placeholder: 'مثال: أبها، عسير',
                mapDefault: 'منطقة عسير'
            },
            photos: {
                label: 'تحميل الصور',
                prompt: 'اسحب وأفلت صورك هنا أو انقر للتصفح.',
                recommendation: 'يوصى باستخدام صور عالية الدقة',
                button: 'تصفح الملفات',
                description: 'يمكنك تحميل صور متعددة. الصورة الأولى ستكون الغلاف الرئيسي.',
            },
            submitButton: 'إضافة تجربة'
        }
    },
    messagesPage: {
        title: 'Messages',
        searchPlaceholder: 'Search conversations...',
        online: 'Online',
        inputPlaceholder: 'Type a message...',
        sendButton: 'Send Message'
    },
    recommendationsPage: {
        title: 'موصي التجارب بالذكاء الاصطناعي',
        subtitle: 'دع الذكاء الاصطناعي يجد لك التجارب الثقافية المثالية في عسير. فقط أخبرنا باهتماماتك وتواريخ سفرك.',
        form: {
            title: 'تفضيلاتك',
            subtitle: 'املأ النموذج أدناه للبدء.',
            interests: {
                label: 'اهتماماتك',
                placeholder: 'مثال: أنا شغوف بالتاريخ، أحب التنزه في الطبيعة، وأستمتع بالتجارب الطهوية الأصيلة...',
            },
            submitButton: 'ابحث عن تجاربي',
            loadingButton: 'جاري التفكير...',
        },
        results: {
            loading: {
                title: 'جاري إنشاء توصياتك المخصصة...',
            },
            successTitle: "إليك أفضل توصياتنا لك!",
        }
    },
    users: {
        'user-1': { name: 'علي محمد' },
        'user-2': { name: 'فاطمة الأسمري' },
        'user-3': { name: 'جون دو' },
        'user-4': { name: 'نورة خالد' },
        'user-5': { name: 'إبراهيم حسن' },
        'user-6': { name: 'ليلى فيصل' },
        'user-7': { name: 'جين سميث' },
    },
    experiences: {
        'exp-1': {
            name: 'تذوق طعم عسير: صنع العريكة',
            description: 'تعلم كيفية صنع العريكة الشهيرة، وهي حجر الزاوية في المطبخ العسيري.',
            longDescription: 'انضم إلى فاطمة في منزل عائلتها لتجربة طهي غامرة تركز على العريكة. ستتعلم أسرار صنع هذا الطبق اللذيذ والشهي، من تحضير العجين إلى طريقة التقديم الفنية مع التمر والعسل. ينتهي هذا الدرس العملي بوجبة جماعية حيث يمكنك الاستمتاع بالعريكة التي أعددتها.',
            location: 'أبها، عسير',
            category: 'طعام',
            whatYoullDo: ['تعرف على الأهمية الثقافية للعريكة', 'تحضير العريكة من الصفر بمكونات محلية طازجة', 'استمتع بالوجبة مع العائلة المضيفة'],
            whatIsIncluded: ['جميع المكونات', 'بطاقة الوصفة', 'قهوة عربية وتمر'],
            reviews: [
                { id: 'rev-1-1', user: 'user-3', comment: 'تجربة مدهشة! فاطمة مضيفة رائعة والعريكة كانت أفضل ما ذقت في حياتي.' },
                { id: 'rev-1-2', user: 'user-7', comment: 'يجب تجربتها في أبها. كان الطعام لا يصدق.' },
            ]
        },
        'exp-2': {
            name: 'حضور حفل زفاف عسيري تقليدي',
            description: 'جرب الاحتفال النابض بالحياة لحفل زفاف عسيري تقليدي مع عائلة محلية.',
            longDescription: 'كن ضيفًا مكرمًا في حفل زفاف عسيري حقيقي. باستضافة نورة وعائلتها، سيتم إرشادك بكل احترام خلال الاحتفالات والموسيقى والرقصات. هذه فرصة فريدة لمشاهدة التقاليد الثقافية الغنية للمنطقة في جو حقيقي واحتفالي. يرجى ملاحظة أنه سيتم توفير إرشادات خاصة بالملابس والسلوك لضمان احترام المناسبة.',
            location: 'خميس مشيط',
            category: 'ثقافة',
            whatYoullDo: ['حضور حفل زفاف كضيف', 'مشاهدة عروض الموسيقى والرقص التقليدية', 'المشاركة في وليمة الزفاف'],
            whatIsIncluded: ['إرشاد من المضيف طوال الحدث', 'هدية صغيرة للعروسين', 'المواصلات إلى مكان الحفل'],
            reviews: [
                { id: 'rev-2-1', user: 'user-3', comment: 'كان حضور حفل زفاف عسيري حقيقي شرفًا لي. كانت عائلة نورة مرحبة جدًا!' },
            ]
        },
        'exp-3': {
            name: 'جولة في جبل أثرب',
            description: 'انطلق في جولة بصحبة دليل محلي متمرس عبر جبل أثرب، أحد أجمل الجبال في منطقة عسير. ستزور نقاط مشاهدة بانورامية، وتمر بالمزارع القديمة، وتتوقف في قرية تقليدية لتناول الشاي مع السكان المحليين. تعرف على النباتات والحيوانات الفريدة في المنطقة.',
            longDescription: 'انطلق في جولة بصحبة دليل محلي متمرس عبر جبل أثرب، أحد أجمل الجبال في منطقة عسير. ستزور نقاط مشاهدة بانورامية، وتمر بالمزارع القديمة، وتتوقف في قرية تقليدية لتناول الشاي مع السكان المحليين. تعرف على النباتات والحيوانات الفريدة في المنطقة.',
            location: 'متنزه عسير الوطني',
            category: 'مغامرة',
            whatYoullDo: ['التنزه أو القيادة عبر مسارات جبلية ذات مناظر خلابة', 'زيارة قرية عسيرية تقليدية', 'التعرف على النباتات والحياة البرية المحلية'],
            whatIsIncluded: ['دليل محترف', 'مواصلات بالدفع الرباعي', 'وجبات خفيفة ومياه', 'رسوم دخول المنتزه'],
            reviews: [
                { id: 'rev-3-1', user: 'user-3', comment: 'كانت المناظر الطبيعية مذهلة للغاية. علي على دراية كبيرة بالمنطقة.' },
            ]
        },
        'exp-4': {
            name: 'ارتداء الملابس العسيرية التقليدية وجلسة تصوير',
            description: 'ارتدِ الملابس العسيرية التقليدية الجميلة لجلسة تصوير ثقافية فريدة.',
            longDescription: 'انضم إلى ليلى في تجربة ثقافية فريدة. ستتمكن من الاختيار من بين مجموعة من الملابس العسيرية الأصيلة المصنوعة يدويًا للرجال والنساء. بعد ارتداء الزي التقليدي، بما في ذلك أكاليل الزهور الشهيرة (المخلب)، ستحصل على جلسة تصوير في موقع خلاب لالتقاط الذكرى.',
            location: 'أبها، عسير',
            category: 'ثقافة',
            whatYoullDo: ['التعرف على العناصر المختلفة للملابس العسيرية', 'ارتداء زي تقليدي كامل', 'الحصول على جلسة تصوير احترافية في مكان جميل'],
            whatIsIncluded: ['استئجار الملابس والإكسسوارات التقليدية', 'المساعدة في ارتداء الملابس', 'نسخ رقمية من صورك'],
            reviews: []
        },
        'exp-5': {
            name: "رحلة عبر تاريخ رجال ألمع",
            description: "جولة إرشادية في قرية رجال ألمع الحجرية التاريخية.",
            longDescription: "تجول في ممرات الزمن مع مرشد مؤرخ في قرية رجال ألمع المذهلة. ستستكشف العمارة الفريدة للحصون الحجرية، وتزور المتحف المحلي، وتسمع قصصًا عن تاريخ القرية الغني كمركز تجاري إقليمي. توفر هذه الجولة رؤى عميقة في تراث منطقة عسير.",
            location: 'رجال ألمع',
            category: 'تاريخ',
            whatYoullDo: ['استكشاف الأزقة والمباني القديمة', 'زيارة متحف رجال ألمع', 'التعرف على تاريخ وثقافة القرية'],
            whatIsIncluded: ['مرشد تاريخي خبير', 'رسوم دخول المتحف', 'قهوة عربية وتمر'],
            reviews: []
        },
        'exp-6': {
            name: 'ورشة عمل فن القط العسيري',
            description: 'اكتشف فن القط العسيري القديم مع فنان حرفي.',
            longDescription: 'بتوجيه من إبراهيم، وهو فنان محترف في فن القط العسيري المعترف به من قبل اليونسكو، ستبتكر تحفتك الفنية الخاصة. تغطي هذه الورشة تاريخ الفن، والمعنى الكامن وراء الأنماط الهندسية، والتقنيات المستخدمة لإنشاء هذه الجداريات النابضة بالحياة. ستغادر ومعك لوحتك الخشبية المزينة.',
            location: 'رجال ألمع',
            category: 'حرف يدوية',
            whatYoullDo: ['التعرف على تاريخ ورمزية القط العسيري', 'التدرب على رسم الأنماط التقليدية', 'رسم قطعتك الزخرفية الخاصة لأخذها إلى المنزل'],
            whatIsIncluded: ['جميع لوازم الفن', 'لوحة خشبية', 'مريلة واقية'],
            reviews: []
        }
    },
    conversations: {
        'conv-1': {
            lastMessage: 'أهلاً يا جون! نعم، سنلتقي عند مدخل منتزه عسير الوطني الساعة 8 صباحًا. سأرسل لك موقعًا دقيقًا في اليوم السابق.',
            messages: [
                { id: 'msg-1-1', sender: 'user', text: "مرحباً علي، لقد حجزت الجولة الجبلية ليوم الجمعة القادم. فقط أؤكد نقطة الالتقاء." },
                { id: 'msg-1-2', sender: 'participant', text: "أهلاً يا جون! نعم، سنلتقي عند مدخل منتزه عسير الوطني الساعة 8 صباحًا. سأرسل لك موقعًا دقيقًا في اليوم السابق." },
            ],
        },
        'conv-2': {
            lastMessage: 'أهلاً بك! شكراً لسؤالك. نحن أحيانًا نزين العريكة بالمكسرات مثل الجوز أو اللوز، لكنها ليست مكونًا أساسيًا. إذا حجزت التجربة، فقط أخبرني وسأقوم بإعدادها لك بدون مكسرات.',
            messages: [
                { id: "msg-2-1", sender: "user", text: "مرحبًا! أنا مهتم جدًا بتجربة صنع العريكة، ولكن لدي سؤال سريع: هل تحتوي على أي مكسرات؟ لدي حساسية من المكسرات." },
                { id: "msg-2-2", sender: "participant", text: "أهلاً بك! شكراً لسؤالك. نحن أحيانًا نزين العريكة بالمكسرات مثل الجوز أو اللوز، لكنها ليست مكونًا أساسيًا. إذا حجزت التجربة، فقط أخبرني وسأقوم بإعدادها لك بدون مكسرات." },
            ],
        },
        'conv-3': {
            lastMessage: 'على الرحب والسعة! سعدت عائلتنا بمشاركة يومنا الخاص. كان من دواعي سرورنا وجودك.',
            messages: [
                { id: 'msg-3-1', sender: 'user', text: 'شكراً لكم على تجربة الزفاف المذهلة. كان لي الشرف أن أكون هناك.' },
                { id: 'msg-3-2', sender: 'participant', text: 'على الرحب والسعة! سعدت عائلتنا بمشاركة يومنا الخاص. كان من دواعي سرورنا وجودك.' },
            ],
        },
    },
  },
};

export default translations;
