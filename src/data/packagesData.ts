import { TourPackage, Review, InquiryMessage, Booking, TravelVideo } from '../types';

export const TRAVEL_VIDEOS: TravelVideo[] = [
  {
    id: 'vid-sajek',
    youtubeId: '9T7M3-q07wA',
    titleBn: 'সাজেক ভ্যালির মেঘের সমুদ্র ও কংলাক চূড়া (৪K আল্ট্রা এইচডি)',
    titleEn: 'Sajek Valley Sea of Clouds & Konglak Peak (4K Drone)',
    destinationBn: 'সাজেক ভ্যালি, রাঙ্গামাটি',
    destinationEn: 'Sajek Valley, Rangamati',
    category: 'hill',
    duration: '04:15',
    thumbnail: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
    viewsBn: '১.৮ লাখ ভিউ',
    viewsEn: '180K Views',
    descriptionBn: 'সকালবেলা সাজেকের কটেজের বারান্দা থেকে মেঘের মেলা ও চাঁদের গাড়ির অ্যাডভেঞ্চার যাত্রা।',
    descriptionEn: 'Morning sunrise above floating clouds, eco-resort view and open jeep ride in Sajek.'
  },
  {
    id: 'vid-sundarban',
    youtubeId: 'W-Y8PzP7gK0',
    titleBn: 'সুন্দরবন ম্যানগ্রোভ বন ও রয়েল বেঙ্গল টাইগার সাফারি',
    titleEn: 'Sundarbans Mangrove Safari & Wild Royal Bengal Tiger',
    destinationBn: 'সুন্দরবন, বাগেরহাট ও খুলনা',
    destinationEn: 'Sundarbans, Bagerhat & Khulna',
    category: 'natural',
    duration: '05:30',
    thumbnail: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    viewsBn: '২.৩ লাখ ভিউ',
    viewsEn: '230K Views',
    descriptionBn: 'বিশ্বের বৃহত্তম ম্যানগ্রোভ সুন্দরবনের সরু ক্যানাল ক্রুজ, চিত্রা হরিণ ও বন্য পরিবেশ।',
    descriptionEn: 'Cruise through silent mangrove creeks, spotted deer sightings and untamed nature.'
  },
  {
    id: 'vid-tanguar',
    youtubeId: '0bLh4mXqP0A',
    titleBn: 'টাঙ্গুয়ার হাওর ও নিলাদ্রি লেকে বিলাসবহুল হাউসবোট ভ্রমণ',
    titleEn: 'Tanguar Haor & Blue Niladri Lake Houseboat Experience',
    destinationBn: 'টাঙ্গুয়ার হাওর, সুনামগঞ্জ',
    destinationEn: 'Tanguar Haor, Sunamganj',
    category: 'haor',
    duration: '06:10',
    thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    viewsBn: '৩.১ লাখ ভিউ',
    viewsEn: '310K Views',
    descriptionBn: 'ঐতিহ্যবাহী কাঠের হাউসবোটে ভেসে থাকা, নিলাদ্রি লেকের নীল জল ও শিমুল বাগানের দৃশ্য।',
    descriptionEn: 'Floating on traditional luxury wooden houseboat, turquoise lake and Meghalaya view.'
  },
  {
    id: 'vid-saintmartin',
    youtubeId: 'k7W_lG2r5Y8',
    titleBn: 'সেন্টমার্টিন প্রবাল দ্বীপ ও ছেঁড়াদ্বীপের নীল সমুদ্র',
    titleEn: 'Saint Martin Coral Island & Chera Dwip Blue Ocean',
    destinationBn: 'সেন্টমার্টিন দ্বীপ, কক্সবাজার',
    destinationEn: 'Saint Martin Island, Cox\'s Bazar',
    category: 'beach',
    duration: '04:45',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    viewsBn: '৪.৫ লাখ ভিউ',
    viewsEn: '450K Views',
    descriptionBn: 'স্বচ্ছ নীল সাগরে কোরাল ক্রুজ, নারিকেল বাগান ও তাজা সামুদ্রিক মাছের বার-বি-কিউ।',
    descriptionEn: 'Crystal turquoise waters of Bay of Bengal, live coral and coconut palm shores.'
  },
  {
    id: 'vid-coxsbazar',
    youtubeId: 't6r0W_q4P1A',
    titleBn: 'বিশ্বের দীর্ঘতম সমুদ্র সৈকত ও ইনানী মেরিন ড্রাইভ রোড',
    titleEn: 'World\'s Longest Sea Beach & Inani Marine Drive Tour',
    destinationBn: 'কক্সবাজার সমুদ্র সৈকত',
    destinationEn: 'Cox\'s Bazar Sea Beach',
    category: 'beach',
    duration: '05:00',
    thumbnail: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    viewsBn: '৫.২ লাখ ভিউ',
    viewsEn: '520K Views',
    descriptionBn: '১২০ কিমি অবিচ্ছিন্ন বালুকাবেলা, হিমছড়ির পাহাড় এবং চাঁদের গাড়িতে মেরিন ড্রাইভ লং ড্রাইভ।',
    descriptionEn: '120km unbroken natural sand beach, Himchhari hills and open jeep Marine Drive ride.'
  },
  {
    id: 'vid-heritage',
    youtubeId: 'a7d8K0bV3c9',
    titleBn: 'বাগেরহাট ষাট গম্বুজ মসজিদ ও সোনারগাঁও পানাম নগর ঐতিহ্য',
    titleEn: 'Bagerhat Sixty Dome UNESCO Mosque & Historic Panam City',
    destinationBn: 'বাগেরহাট ও সোনারগাঁও',
    destinationEn: 'Bagerhat & Sonargaon',
    category: 'historical',
    duration: '06:30',
    thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    viewsBn: '১.২ লাখ ভিউ',
    viewsEn: '120K Views',
    descriptionBn: '১৫শ শতাব্দীর সুলতানি স্থাপত্য ও উনিশ শতকের প্রাচীন পানাম নগরীর মায়াবী ইতিহাস।',
    descriptionEn: '15th-century Sultanate architecture and 19th-century Victorian ghost town of Panam.'
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-sajek-valley',
    slug: 'sajek-valley-cloud-kingdom',
    titleBn: 'সাজেক ভ্যালি - মেঘের রাজ্য ও রুইলুই পাড়া',
    titleEn: 'Sajek Valley - Kingdom of Clouds & Ruilui Para',
    category: 'hill',
    districtBn: 'রাঙ্গামাটি (বাঘাইছড়ি)',
    districtEn: 'Rangamati (Baghaichhari)',
    divisionBn: 'চট্টগ্রাম',
    divisionEn: 'Chattogram',
    taglineBn: 'মেঘের ওপর কটেজে রাতযাপন, কংলাক পাহাড় ও চান্দের গাড়ির থ্রিলিং যাত্রা',
    taglineEn: 'Stay above the clouds in eco-resorts, Konglak peak trek & open-air Chander Gari thrill',
    descriptionBn: 'পাহাড়ের বুক চিরে চলে যাওয়া সর্পিল রাস্তা, সকালের সোনালি রোদে ভেসে থাকা শুভ্র মেঘের মেলা আর কংলাক পাহাড়ের চূড়া থেকে সূর্যাস্ত দেখা—সাজেক ভ্যালি বাংলাদেশের সুইজারল্যান্ড হিসেবে পরিচিত। আমাদের এই বাজেট প্যাকেজে থাকছে খাগড়াছড়ি টু সাজেক রিজার্ভ চাঁদের গাড়ি, হ্যালিপ্যাডের কাছে প্রিমিয়াম কটেজ, ঐতিহ্যবাহী বাঁশ কোড়ল ও ব্যাম্বু চিকেন ডিনার এবং অভিজ্ঞ গাইড।',
    descriptionEn: 'Experience the magical sunrise above rolling clouds, wooden hilltop eco-cottages, thrilling open-top Chander Gari jeep rides, and indigenous gastronomy in Sajek Valley. Includes reserved transport, helipad view resorts, and traditional bamboo chicken BBQ.',
    priceRegular: 6500,
    priceDiscounted: 5499,
    durationDays: 3,
    durationNights: 2,
    durationTextBn: '৩ দিন ২ রাত',
    durationTextEn: '3 Days 2 Nights',
    departureFromBn: 'ঢাকা (সায়দাবাদ / কলাবাগান)',
    departureFromEn: 'Dhaka (Sayedabad / Kalabagan)',
    featuredImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: '9T7M3-q07wA',
    isFeatured: true,
    isPopular: true,
    isBudgetPick: true,
    isBudgetDeal: true,
    isAvailable: true,
    rating: 4.9,
    reviewCount: 342,
    groupSizeLimit: 24,
    itinerary: [
      {
        day: 1,
        titleBn: 'ঢাকা থেকে খাগড়াছড়ি ও সাজেক আগমন',
        titleEn: 'Departure Dhaka to Khagrachhari & Sajek Arrival',
        activitiesBn: [
          'রাতে ঢাকা থেকে নন-এসি/এসি বাসে খাগড়াছড়ির উদ্দেশ্যে রওনা',
          'ভোরে খাগড়াছড়ি পৌঁছে ফ্রেশ হয়ে স্থানীয় পাহাড়ি নাস্তা',
          'সেনাবাহিনী এসকর্টে সাজেকের পথে চাঁদের গাড়িতে যাত্রা',
          'দুপুরে সাজেক ভ্যালিতে রিসোর্টে চেক-ইন ও লাঞ্চ',
          'বিকেলে হ্যালিপ্যাডে সূর্যাস্ত ও মেঘ উপভোগ',
          'রাতে ঐতিহ্যবাহী বাঁশ চিকেন ও লাইভ বারবিকিউ ডিনার'
        ],
        activitiesEn: [
          'Overnight highway journey from Dhaka to Khagrachhari',
          'Morning fresh-up and traditional breakfast at Khagrachhari',
          'Army convoy escort ride to Sajek in open-air Chander Gari jeep',
          'Resort check-in with scenic cloud valley view and lunch',
          'Sunset watching at Helipad #2 and evening breeze',
          'Night special Bamboo Chicken BBQ & bonfire dinner'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, স্পেশাল ব্যাম্বু চিকেন বার-বি-কিউ',
        mealsEn: 'Breakfast, Lunch, Special Bamboo Chicken BBQ Dinner',
        stayBn: 'সাজেক মেঘ মাচাং / মেঘপল্লী ইকো রিসোর্ট',
        stayEn: 'Sajek Megh Machang / Meghpolli Eco Resort'
      },
      {
        day: 2,
        titleBn: 'কংলাক পাহাড় সামিট ও স্টোন গার্ডেন এক্সপ্লোরেশন',
        titleEn: 'Konglak Peak Trekking & Stone Garden Exploration',
        activitiesBn: [
          'ভোরে মেঘের সাগরে সূর্যোদয় দেখা ও কফি টাইম',
          'সকালের নাস্তা শেষে সাজেকের সর্বোচ্চ চূড়া কংলাক পাহাড়ে হাইকিং',
          'রুইলুই পাড়ায় লুসাই ও ত্রিপুরা উপজাতিদের জীবনযাত্রা দর্শন',
          'দুপুরে পাহাড়ি স্পেশাল হাসের মাংস ও পাহাড়ি শাকসবজি লাঞ্চ',
          'বিকেলে স্টোন গার্ডেন ও সাজেক চার্চ ভিউপয়েন্ট ভ্রমণ'
        ],
        activitiesEn: [
          'Early morning sunrise viewing over the sea of clouds',
          'Trek to Konglak Peak (highest peak in Sajek)',
          'Cultural walk through Ruilui Para indigenous village',
          'Hill duck curry and organic tribal vegetable lunch',
          'Visit Stone Garden and Lusai cultural heritage museum'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, রাতের খাবার',
        mealsEn: 'Breakfast, Lunch, Dinner',
        stayBn: 'সাজেক হিল রিসোর্ট',
        stayEn: 'Sajek Hill Resort'
      },
      {
        day: 3,
        titleBn: 'আলুটিলা গুহা, রিছাং ঝর্ণা ও ঢাকা প্রত্যাবর্তন',
        titleEn: 'Alutila Cave Mystery, Richhang Falls & Return Dhaka',
        activitiesBn: [
          'সকালে খাগড়াছড়ির উদ্দেশ্যে সাজেক ত্যাগ',
          'মায়াবী আলুটিলা রহস্যময় গুহা মশাল জ্বালিয়ে পাড়ি দেওয়া',
          'রিছাং ঝর্ণার শীতল পানিতে স্নান',
          'ঝুলন্ত সেতু ও তারাতারে পাহাড়ি হাট দর্শন',
          'রাতের বাসে ঢাকার উদ্দেশ্যে যাত্রা'
        ],
        activitiesEn: [
          'Morning descent from Sajek to Khagrachhari valley',
          'Cross mystical Alutila Cave holding traditional fire torches',
          'Swim & relax at crystal cool Richhang Waterfall',
          'Visit District Horticulture Suspended Bridge',
          'Night luxury coach ride back to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      'ঢাকা-খাগড়াছড়ি-ঢাকা বাস টিকেট',
      '৩ দিনের জন্য রিজার্ভ চাঁদের গাড়ি (সকল সাইটসিয়িং)',
      'সাজেকে ২ রাত কাঠের মাচাং রিসোর্ট শেয়ারিং স্টে',
      'প্রতিদিনের ৩ বেলা মানসম্মত খাবার ও নাস্তা',
      '১ রাত বিশেষ ব্যাম্বু চিকেন বারবিকিউ পার্টি',
      'আলুটিলা ও রিছাং ঝর্ণা এন্ট্রি টিকিট ও মশাল',
      'অভিজ্ঞ সার্বক্ষণিক ট্যুর হোস্ট ও গাইড'
    ],
    includedEn: [
      'Dhaka-Khagrachhari-Dhaka return bus tickets',
      'Reserved 4x4 Chander Gari jeep for all 3 days',
      '2 Nights accommodation in panoramic valley-view cottage',
      'All 7 meals (Breakfast, Lunch, Dinner with local delicacies)',
      '1 Night authentic Bamboo Chicken BBQ dinner',
      'Entry tickets, cave torches, and park permits',
      'Experienced friendly tour manager throughout'
    ],
    excludedBn: [
      'ব্যক্তিগত ঔষধ ও কেনাকাটার খরচ',
      'হাইওয়ে বিরতির ব্যক্তিগত খাবার',
      'প্যাকেজ বহির্ভূত অতিরিক্ত কোনো খাবার'
    ],
    excludedEn: [
      'Personal medicines and shopping expenses',
      'Highway break snacks',
      'Anything not mentioned in the inclusions'
    ],
    upcomingDates: ['১৫ অক্টোবর ২০২৬', '২২ অক্টোবর ২০২৬', '২৯ অক্টোবর ২০২৬', '০৫ নভেম্বর ২০২৬'],
    highlightsBn: ['মেঘের সমুদ্র', 'কংলাক পাহাড় চূড়া', 'ব্যাম্বু চিকেন', 'আলুটিলা গুহা', 'চাঁদের গাড়ি রাইড'],
    highlightsEn: ['Sea of Clouds', 'Konglak Peak', 'Bamboo Chicken', 'Alutila Mystical Cave', 'Chander Gari Ride']
  },

  {
    id: 'pkg-saint-martins',
    slug: 'saint-martins-coral-island',
    titleBn: 'সেন্টমার্টিন দ্বীপ ও ছেঁড়াদ্বীপ কোরাল ক্রুজ',
    titleEn: 'Saint Martin\'s Coral Island & Chera Dwip Blue Sea',
    category: 'beach',
    districtBn: 'কক্সবাজার (টেকনাফ)',
    districtEn: 'Cox\'s Bazar (Teknaf)',
    divisionBn: 'চট্টগ্রাম',
    divisionEn: 'Chattogram',
    taglineBn: 'নীল সমুদ্রের ঢেউ, প্রবাল দ্বীপ, রূপচাঁদা ফ্রাই ও নারিকেল জিঞ্জিরার সৈকত',
    taglineEn: 'Turquoise ocean water, live coral reef, fresh seafood BBQ & coconut groves',
    descriptionBn: 'বাংলাদেশের একমাত্র প্রবাল দ্বীপ সেন্টমার্টিন। টেকনাফ থেকে বিলাসবহুল জাহাজে বঙ্গোপসাগর পাড়ি দিয়ে নীল জলের মায়ায় ভেসে যাওয়া। কাঁচা ডাবের পানি, তাজা কোরাল ও রূপচাঁদা মাছ ফ্রাই, আর রাতে সমুদ্রের গর্জন শুনতে শুনতে বিচে সময় কাটানো। সঙ্গে থাকছে কাঠের ট্রলারে ছেঁড়াদ্বীপ ভ্রমণ।',
    descriptionEn: 'The only coral reef island of Bangladesh in the Bay of Bengal. Cruise on modern luxury passenger ship, cycle along coconut beaches, savor fresh seafood fries, and explore uninhabited Chera Dwip with live coral.',
    priceRegular: 7999,
    priceDiscounted: 6899,
    durationDays: 3,
    durationNights: 2,
    durationTextBn: '৩ দিন ২ রাত',
    durationTextEn: '3 Days 2 Nights',
    departureFromBn: 'ঢাকা (ফকিরাপুল / সায়দাবাদ)',
    departureFromEn: 'Dhaka (Fakirapool / Sayedabad)',
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: 'k7W_lG2r5Y8',
    isFeatured: true,
    isPopular: true,
    isBudgetPick: false,
    isAvailable: true,
    rating: 4.8,
    reviewCount: 489,
    groupSizeLimit: 30,
    itinerary: [
      {
        day: 1,
        titleBn: 'জাহাজে বঙ্গোপসাগর ক্রুজ ও সেন্টমার্টিন আগমন',
        titleEn: 'Bay of Bengal Sea Cruise & Island Arrival',
        activitiesBn: [
          'ভোরে টেকনাফ জাহাজ ঘাটে আগমন ও সকালের নাস্তা',
          'বিলাসবহুল সী-ট্রাক বা ক্রুজ জাহাজে সেন্টমার্টিনের পথে যাত্রা',
          'দুপুরে দ্বীপে পৌঁছে বিচ রিসোর্টে চেক-ইন',
          'বিকেলে পশ্চিম বিচে সূর্যাস্ত দর্শন ও সাইক্লিং',
          'রাতে সমুদ্রতীরে স্পেশাল ফিশ বার-বি-কিউ ডিনার'
        ],
        activitiesEn: [
          'Arrival at Teknaf Ship Jetty & breakfast',
          'Board modern sea-cruise ship with open deck viewing',
          'Check-in to beachfront palm cottage and fresh sea fish lunch',
          'Sunset photography and beach cycling along West Beach',
          'Night seaside Live Fish BBQ with Rupchanda & Coral'
        ],
        mealsBn: 'নাস্তা, সামুদ্রিক মাছের লাঞ্চ, ফিশ বারবিকিউ ডিনার',
        mealsEn: 'Breakfast, Sea Fish Lunch, Live Fish BBQ Dinner',
        stayBn: 'সেন্টমার্টিন ব্লু লেগুন বিচ রিসোর্ট',
        stayEn: 'Saint Martin Blue Lagoon Beach Resort'
      },
      {
        day: 2,
        titleBn: 'ছেঁড়াদ্বীপ কোরাল সাফারি ও জোছনা বিলাস',
        titleEn: 'Chera Dwip Coral Safari & Moonlit Beach Walk',
        activitiesBn: [
          'সকালে ইঞ্জিনের ট্রলার বা স্পিডবোটে ছেঁড়াদ্বীপ ভ্রমণ',
          'লাইভ কোরাল দেখা ও স্বচ্ছ নীল জলে স্নান',
          'ডাবের পানি ও মিষ্টি নারিকেলের স্বাদ গ্রহণ',
          'বিকেলে হুমায়ূন আহমেদের সমুদ্র বিলাস দর্শন'
        ],
        activitiesEn: [
          'Trawler / speed boat ride to the southernmost Chera Dwip',
          'Explore untouched coral reef and snorkeling spots',
          'Fresh green coconut tasting',
          'Visit Samudra Bilash and local handicraft markets'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, রাতের খাবার',
        mealsEn: 'Breakfast, Lunch, Dinner',
        stayBn: 'সেন্টমার্টিন বিচ ভিউ রিসোর্ট',
        stayEn: 'Saint Martin Beach View Resort'
      },
      {
        day: 3,
        titleBn: 'সকালে বিচে ফটোসেশন ও জাহাজে প্রত্যাবর্তন',
        titleEn: 'Morning Beach Walk & Ship Cruise Return',
        activitiesBn: [
          'সকালে বিচে মুক্ত হাঁটা ও ড্রাই ফিশ কেনাকাটা',
          'দুপুরে জাহাজে চড়ে টেকনাফের উদ্দেশ্যে রওনা',
          'রাতে বাসে ঢাকার উদ্দেশ্যে যাত্রা'
        ],
        activitiesEn: [
          'Free morning beach stroll & dry fish shopping',
          'Afternoon cruise ship departure back to mainland',
          'Night coach return to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      'ঢাকা-টেকনাফ-ঢাকা নন-এসি/এসি বাস টিকেট',
      'টেকনাফ-সেন্টমার্টিন-টেকনাফ জাহাজ রিটার্ন টিকেট',
      'দ্বীপে ২ রাত বিচ রিসোর্ট কাপল/টুইন শেয়ারিং স্টে',
      'প্রতিদিনের ৩ বেলা খাবার (তাজা সামুদ্রিক মাছসহ)',
      '১ রাত স্পেশাল রূপচাঁদা/কোরাল ফিশ বার-বি-কিউ',
      'ছেঁড়াদ্বীপ ট্রলার ভাড়া ও গাইড ফি'
    ],
    includedEn: [
      'Dhaka-Teknaf-Dhaka roundtrip bus transport',
      'Sea cruise return ship tickets',
      '2 Nights stay in beachfront resort',
      'All meals featuring fresh sea catch & delicacies',
      '1 Night sea beach fish BBQ dinner',
      'Chera Dwip boat transport and guiding'
    ],
    excludedBn: ['ব্যক্তিগত সাইকেল ভাড়া ও ডাব কেনার খরচ', 'হাইওয়ে খাবার'],
    excludedEn: ['Personal bicycle rental & shopping', 'Highway snacks'],
    upcomingDates: ['১২ নভেম্বর ২০২৬', '১৯ নভেম্বর ২০২৬', '২৬ নভেম্বর ২০২৬'],
    highlightsBn: ['নীল সমুদ্র', 'লাইভ কোরাল', 'রূপচাঁদা ফ্রাই', 'ছেঁড়াদ্বীপ ট্রলার রাইড', 'জাহাজ ক্রুজ'],
    highlightsEn: ['Turquoise Ocean', 'Live Coral', 'Seafood BBQ', 'Chera Dwip Boat', 'Sea Cruise']
  },

  {
    id: 'pkg-sundarbans',
    slug: 'sundarbans-mangrove-cruise',
    titleBn: 'সুন্দরবন ম্যানগ্রোভ ও রয়েল বেঙ্গল ট্র্যাকিং',
    titleEn: 'Sundarbans Mangrove Safari & Royal Bengal Cruise',
    category: 'natural',
    districtBn: 'বাগেরহাট ও খুলনা',
    districtEn: 'Bagerhat & Khulna',
    divisionBn: 'খুলনা',
    divisionEn: 'Khulna',
    taglineBn: 'ইউনেস্কো বিশ্ব ঐতিহ্য, কটকা বিচ, জামতলা ওয়াচ টাওয়ার ও হরিণ-কুমির সাফারি',
    taglineEn: 'UNESCO World Heritage Mangrove, Kotka Beach, Jamtola watchtower & wildlife safari',
    descriptionBn: 'বিশ্বের বৃহত্তম ম্যানগ্রোভ বন সুন্দরবন। মোংলা বা খুলনা থেকে বিলাসবহুল ট্যুরিস্ট জাহাজে ৩ দিনের নৌ-যাত্রা। বনের সরু খালে ক্যানাল ক্রুজিং, চিত্রা হরিণ, লোনা পানির কুমির, পাখি ও রয়েল বেঙ্গল টাইগারের পদচিহ্ন দর্শন। সঙ্গে থাকছে কটকা নির্জন সমুদ্র সৈকত।',
    descriptionEn: 'The largest contiguous mangrove forest on Earth. Liveaboard luxury cruise exploring remote canals, wildlife viewing watchtowers, spotted deer herds, saltwater crocodiles, and virgin Kotka beach.',
    priceRegular: 9500,
    priceDiscounted: 8499,
    durationDays: 3,
    durationNights: 2,
    durationTextBn: '৩ দিন ২ রাত',
    durationTextEn: '3 Days 2 Nights',
    departureFromBn: 'খুলনা / মোংলা ঘাট (ঢাকা থেকে কানেক্টিং)',
    departureFromEn: 'Khulna / Mongla Ghat (Connecting Dhaka)',
    featuredImage: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: 'W-Y8PzP7gK0',
    isFeatured: true,
    isPopular: false,
    isBudgetPick: false,
    isAvailable: true,
    rating: 4.9,
    reviewCount: 215,
    groupSizeLimit: 35,
    itinerary: [
      {
        day: 1,
        titleBn: 'মোংলা ঘাট থেকে সুন্দরবনে জাহাজে প্রবেশ ও করমজল',
        titleEn: 'Mongla Boarding, Forest Entry & Karamjal Sanctuary',
        activitiesBn: [
          'সকালে মোংলায় আধুনিক ট্যুরিস্ট জাহাজে বোর্ডিং ও ওয়েলকাম ড্রিঙ্কস',
          'বনবিভাগের অনুমতি ও সশস্ত্র বনরক্ষী সহ সুন্দরবনে প্রবেশ',
          'করমজল কুমির ও হরিণ প্রজনন কেন্দ্র এবং কাঠের ট্রেইল ভ্রমণ',
          'জাহাজের সান ডেকে সূর্যাস্ত ও পশুর নদীর সৌন্দর্য উপভোগ'
        ],
        activitiesEn: [
          'Boarding cruise ship at Mongla with welcome refreshments',
          'Forest Department clearance with armed security guards',
          'Visit Karamjal Crocodile Breeding Center & elevated wooden walkway',
          'Evening tea on sun deck cruising down Pasur river'
        ],
        mealsBn: 'নাস্তা, দুপুরের বুফে, বিকালের স্ন্যাক্স, রাতের স্পেশাল ডিনার',
        mealsEn: 'Breakfast, Buffet Lunch, Snacks, Special Dinner',
        stayBn: 'বিলাসবহুল ট্যুরিস্ট শিপ কেবিন (জাহাজেই রাতযাপন)',
        stayEn: 'Luxury Cruise Ship Cabin (Liveaboard)'
      },
      {
        day: 2,
        titleBn: 'কটকা ফরেস্ট ট্রেইল, জামতলা ওয়াচ টাওয়ার ও টাইগার পয়েন্ট',
        titleEn: 'Kotka Trail, Jamtola Watchtower & Virgin Beach',
        activitiesBn: [
          'ভোরে নিঃশব্দ কাঠের দেশি নৌকায় সরু খালে বার্ড ওয়াচিং ও ক্যানাল ক্রুজ',
          'কটকা অভয়ারণ্যে ট্র্যাকিং ও হরিণের পাল দর্শন',
          'জামতলা ওয়াচ টাওয়ার থেকে বাঘের পদচিহ্ন খোঁজা',
          'কটকা সমুদ্র সৈকতে সোনালি বালুকাবেলায় হাঁটা'
        ],
        activitiesEn: [
          'Silent country boat canal cruise for bird watching',
          'Guided forest trek in Kotka Sanctuary amidst spotted deer herds',
          'Climb Jamtola 4-story watchtower overlooking dense canopy',
          'Walk on the pristine, untouched Kotka sand beach'
        ],
        mealsBn: 'নাস্তা, খাঁটি দেশি হাঁস ও খাসির বুফে লাঞ্চ, ডিনার',
        mealsEn: 'Breakfast, Traditional Duck & Mutton Buffet, Dinner',
        stayBn: 'ট্যুরিস্ট শিপ কেবিন',
        stayEn: 'Tourist Ship Cabin'
      },
      {
        day: 3,
        titleBn: 'হারবাড়িয়া ইকো ট্যুরিজম কেন্দ্র ও মোংলা ফেরা',
        titleEn: 'Harbaria Eco Trail & Return Journey',
        activitiesBn: [
          'সকালে হারবাড়িয়া ঝুলন্ত কাঠের সেতু ও বাঘের ডেরা দর্শন',
          'দুপুরে মোংলা ঘাটে প্রত্যাবর্তন ও ঢাকার উদ্দেশ্যে রওনা'
        ],
        activitiesEn: [
          'Harbaria eco-park trail and suspension bridge walk',
          'Afternoon arrival at Mongla & bus journey back to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      'ট্যুরিস্ট জাহাজে ২ রাত ৩ দিন থাকা ও ভ্রমণ',
      'প্রতিদিনের ৬ বেলা প্রিমিয়াম বুফে খাবার ও সার্বক্ষণিক চা/কফি',
      'বনবিভাগের রাজস্ব কর ও সশস্ত্র ফরেস্ট গার্ড ফি',
      'ছোট নৌকায় নীরব ক্যানাল ক্রুজিং',
      'প্রফেশনাল ন্যাচারালিস্ট গাইড'
    ],
    includedEn: [
      '2 Nights liveaboard accommodation on ship',
      '6 Daily meals/buffets with unlimited tea/coffee',
      'Forest entry fees & armed forest guard security',
      'Silent country boat canal cruise',
      'Certified Wildlife Naturalist guide'
    ],
    excludedBn: ['ব্যক্তিগত খরচ ও ভিডিও ক্যামেরা ফি'],
    excludedEn: ['Personal shopping & video camera fees'],
    upcomingDates: ['১৮ অক্টোবর ২০২৬', '০৮ নভেম্বর ২০২৬', '২২ নভেম্বর ২০২৬'],
    highlightsBn: ['রয়েল বেঙ্গল ট্র্যাকিং', 'কটকা সৈকত', 'ক্যানাল ক্রুজ', 'চিত্রা হরিণ', 'লাইভঅ্যাবোর্ড শিপ'],
    highlightsEn: ['Tiger Tracking', 'Kotka Virgin Beach', 'Silent Canal Cruise', 'Spotted Deer', 'Liveaboard Ship']
  },

  {
    id: 'pkg-tanguar-haor',
    slug: 'tanguar-haor-niladri-houseboat',
    titleBn: 'টাঙ্গুয়ার হাওর ও নিলাদ্রি লেক প্রিমিয়াম হাউসবোট',
    titleEn: 'Tanguar Haor & Niladri Lake Premium Houseboat',
    category: 'haor',
    districtBn: 'সুনামগঞ্জ (তাহিরপুর)',
    districtEn: 'Sunamganj (Tahirpur)',
    divisionBn: 'সিলেট',
    divisionEn: 'Sylhet',
    taglineBn: 'স্বচ্ছ কাঁচের মতো জল, মেঘালয় পাহাড়ের পাদদেশ, শিমুল বাগান ও সুরমা নদী',
    taglineEn: 'Crystal clear freshwater wetland, Indian Meghalaya mountain backdrop & Shimul garden',
    descriptionBn: 'ইউনেস্কো ঘোষিত রামসার সাইট টাঙ্গুয়ার হাওর। প্রিমিয়াম কাঠের ঐতিহ্যবাহী হাউসবোটে ভেসে থাকা, নিলাদ্রি লেকের নীল পানিতে স্নান, যাদুকাটা নদীর বালুকাময় সৌন্দর্য আর বসন্তের লাল শিমুল বাগান—সবকিছু নিয়ে এক অপার্থিব শান্তির ভ্রমণ।',
    descriptionEn: 'Ramsar wetland Tanguar Haor on traditional luxury wooden houseboats with attached washrooms. Swim in turquoise Niladri Lake, cruise through Jadukata crystal river, and visit lush Shimul Gardens.',
    priceRegular: 4800,
    priceDiscounted: 3999,
    durationDays: 2,
    durationNights: 1,
    durationTextBn: '২ দিন ১ রাত',
    durationTextEn: '2 Days 1 Night',
    departureFromBn: 'সুনামগঞ্জ ঘাট (ঢাকা থেকে ডিরেক্ট বাস)',
    departureFromEn: 'Sunamganj Ghat (Direct from Dhaka)',
    featuredImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: '0bLh4mXqP0A',
    isFeatured: false,
    isPopular: true,
    isBudgetPick: true,
    isAvailable: true,
    rating: 4.85,
    reviewCount: 310,
    groupSizeLimit: 18,
    itinerary: [
      {
        day: 1,
        titleBn: 'সুনামগঞ্জ থেকে প্রিমিয়াম হাউসবোটে টাঙ্গুয়ার হাওরে যাত্রা',
        titleEn: 'Boarding Houseboat & Tanguar Haor Exploration',
        activitiesBn: [
          'সকালে তাহিরপুর ঘাটে হাউসবোটে বোর্ডিং ও খাঁটি হাঁসের মাংসের নাস্তা',
          'টাঙ্গুয়ার হাওরের ওয়াচ টাওয়ারে আগমন ও হাওরের পানিতে লাইফজ্যাকেট পরে সাঁতার',
          'দুপুরে হাওরের তাজা বোয়াল, রুই ও ছোট মাছের ভুনা লাঞ্চ',
          'বিকেলে টেকরেঘাট ও নিলাদ্রি লেকের সৌন্দর্য দর্শন'
        ],
        activitiesEn: [
          'Boarding wooden luxury houseboat at Tahirpur with duck breakfast',
          'Anchor at Tanguar Haor watchtower with lifejacket swimming',
          'Lunch on boat with freshly caught Haor fish and local rice',
          'Afternoon exploration of Tekerghat and blue Niladri lake'
        ],
        mealsBn: 'নাস্তা, হাওরের তাজা মাছের লাঞ্চ, বিকেলের নাস্তা, হাঁসের মাংসের ডিনার',
        mealsEn: 'Breakfast, Fresh Haor Fish Lunch, Evening Snacks, Duck Curry Dinner',
        stayBn: 'প্রিমিয়াম ওয়াটারপ্রুফ কাঠের হাউসবোট (কেবিন)',
        stayEn: 'Premium Wooden Houseboat (Private Cabin)'
      },
      {
        day: 2,
        titleBn: 'যাদুকাটা নদী, বারিক্কা টিলা ও শিমুল বাগান',
        titleEn: 'Jadukata River, Barikka Tila & Shimul Garden',
        activitiesBn: [
          'ভোরে হাউসবোটের ছাদ থেকে মেঘালয় পাহাড়ের কুয়াশা উপভোগ',
          'যাদুকাটা নদীর স্ফটিক স্বচ্ছ পানিতে স্নান ও বারিক্কা টিলায় আরোহণ',
          'বিখ্যাত রক্তিম লাল শিমুল বাগান দর্শন',
          'বিকেলে সুনামগঞ্জে ফিরে ঢাকার বাস ধরা'
        ],
        activitiesEn: [
          'Sunrise coffee on boat rooftop facing Meghalaya hills',
          'Cruise along crystal clear Jadukata river and climb Barikka Tila',
          'Stroll through iconic Shimul forest garden',
          'Evening transfer to Sunamganj and return to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      '১ রাত প্রিমিয়াম হাউসবোটে থাকা ও ভ্রমণ',
      'প্রতিদিনের সকল খাবার (হাওরের তাজা মাছ ও হাঁস)',
      'লাইফজ্যাকেট ও সাঁতারের নিরাপত্তা সরঞ্জাম',
      'যাদুকাটা নদী ও নিলাদ্রি লেক দর্শন',
      'হাউসবোট ক্রু ও অভিজ্ঞ গাইড'
    ],
    includedEn: [
      '1 Night on luxury wooden houseboat',
      'All gourmet meals on boat with local fish & duck',
      'Certified lifejackets and swimming safety gear',
      'Jadukata river, Niladri lake & Shimul garden tour',
      'Professional boat crew & local guide'
    ],
    excludedBn: ['ব্যক্তিগত বাইক রাইড ভাড়া (টেকেরঘাট এলাকায়)'],
    excludedEn: ['Personal local bike rental at Tekerghat'],
    upcomingDates: ['১০ অক্টোবর ২০২৬', '২৪ অক্টোবর ২০২৬', '০৭ নভেম্বর ২০২৬'],
    highlightsBn: ['হাউসবোট লাইফ', 'নিলাদ্রি লেক', 'যাদুকাটা নদী', 'হাওরের তাজা মাছ', 'শিমুল বাগান'],
    highlightsEn: ['Houseboat Life', 'Niladri Blue Lake', 'Jadukata River', 'Fresh Haor Fish', 'Shimul Garden']
  },

  // Historical Places
  {
    id: 'pkg-bagerhat-sixty-dome',
    slug: 'bagerhat-sixty-dome-heritage',
    titleBn: 'বাগেরহাট ষাট গম্বুজ মসজিদ ও খান জাহান আলী মাজার',
    titleEn: 'Bagerhat Sixty Dome Mosque & Historic Heritage (UNESCO)',
    category: 'historical',
    districtBn: 'বাগেরহাট',
    districtEn: 'Bagerhat',
    divisionBn: 'খুলনা',
    divisionEn: 'Khulna',
    taglineBn: '১৫শ শতাব্দীর সুলতানি স্থাপত্য, ইউনেস্কো বিশ্ব ঐতিহ্য ও ঐতিহাসিক দীঘি',
    taglineEn: '15th century Sultanate Islamic architecture, UNESCO World Heritage & historic lakes',
    descriptionBn: 'ইউনেস্কো বিশ্ব ঐতিহ্য হিসেবে স্বীকৃতিপ্রাপ্ত বাগেরহাটের ঐতিহাসিক মসজিদ শহর। হযরত খান জাহান আলী (রহ.) কর্তৃক ১৫শ শতাব্দীতে নির্মিত ঐতিহাসিক ৬০ গম্বুজ মসজিদ (প্রকৃতপক্ষে ৭৭টি গম্বুজ), নয় গম্বুজ মসজিদ, রেজা খোদা মসজিদ এবং কালাপাহাড় ও বিখ্যাত মিষ্টি পানির ঘোড়াদীঘি। ইতিহাসপ্রেমীদের জন্য এক স্বর্গরাজ্য।',
    descriptionEn: 'Explore the UNESCO World Heritage historic mosque city of Bagerhat founded by Saint-Warrior Khan Jahan Ali in the 15th century. Admire the 77-domed architectural marvel, Nine Dome Mosque, and serene sacred crocodile lakes.',
    priceRegular: 3200,
    priceDiscounted: 2499,
    durationDays: 1,
    durationNights: 0,
    durationTextBn: '১ দিন (ডে ট্যুর)',
    durationTextEn: '1 Day (Day Tour)',
    departureFromBn: 'ঢাকা (পদ্মা সেতু হয়ে আরামদায়ক হাইওয়ে)',
    departureFromEn: 'Dhaka (Via Padma Bridge Highway)',
    featuredImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: 'a7d8K0bV3c9',
    isFeatured: true,
    isPopular: true,
    isHistorical: true,
    isBudgetPick: true,
    isAvailable: true,
    rating: 4.95,
    reviewCount: 180,
    groupSizeLimit: 28,
    itinerary: [
      {
        day: 1,
        titleBn: 'পদ্মা সেতু হয়ে বাগেরহাট ঐতিহাসিক স্থান পরিদর্শন',
        titleEn: 'Padma Bridge Crossing & Bagerhat Heritage Walk',
        activitiesBn: [
          'ভোর ৬টায় ঢাকা থেকে এসি মাইক্রো/কোচে রওনা',
          'পদ্মা সেতুর সৌন্দর্য উপভোগ ও হাইওয়ে রেস্তোরাঁয় সকালের নাস্তা',
          'বাগেরহাটে ষাট গম্বুজ মসজিদ ও সংলগ্ন প্রত্নতাত্ত্বিক জাদুঘর দর্শন',
          'দুপুরে ঐতিহ্যবাহী বাগেরহাটের চিংড়ি ও দেশি খাবারের লাঞ্চ',
          'খান জাহান আলীর মাজার ও মিষ্টি পানির দীঘি পরিদর্শন',
          'সন্ধ্যায় ঢাকার উদ্দেশ্যে রওনা ও রাত ৯টায় ঢাকায় পৌঁছানো'
        ],
        activitiesEn: [
          '6:00 AM departure from Dhaka via modern expressway',
          'Scenic Padma Bridge crossing & breakfast at highway plaza',
          'Guided tour of Sixty Dome Mosque and archaeological museum',
          'Traditional Bagerhat prawn curry and rice lunch',
          'Visit Shrine of Khan Jahan Ali and sacred crocodile lake',
          'Evening return to Dhaka by 9:00 PM'
        ],
        mealsBn: 'নাস্তা, স্পেশাল চিংড়ি ও দেশি মাংসের লাঞ্চ, বিকালের স্ন্যাক্স',
        mealsEn: 'Breakfast, Special Prawn & Meat Lunch, Evening Snacks'
      }
    ],
    includedBn: [
      'ঢাকা-বাগেরহাট-ঢাকা এসি বাস / মাইক্রোবাস যাতায়াত',
      'পদ্মা সেতু ও এক্সপ্রেসওয়ে টোল ফি',
      'সকালের নাস্তা, দুপুরের স্পেশাল খাবার ও বিকালের চা/স্ন্যাক্স',
      'সকল প্রত্নতাত্ত্বিক সাইট ও জাদুঘরের প্রবেশ টিকিট',
      'ইতিহাস বিশেষজ্ঞ ট্রাভেল গাইড'
    ],
    includedEn: [
      'Dhaka-Bagerhat-Dhaka AC tourist transport',
      'Padma Bridge & expressway toll charges',
      'Breakfast, rich traditional lunch & snacks',
      'All UNESCO monument & museum entry tickets',
      'Expert archaeological heritage guide'
    ],
    excludedBn: ['ব্যক্তিগত কেনাকাটা ও অতিরিক্ত রাইড'],
    excludedEn: ['Personal shopping & souvenir expenses'],
    upcomingDates: ['০৪ অক্টোবর ২০২৬', '১১ অক্টোবর ২০২৬', '১৮ অক্টোবর ২০২৬', '২৫ অক্টোবর ২০২৬'],
    highlightsBn: ['ইউনেস্কো ৬০ গম্বুজ মসজিদ', 'খান জাহান আলী মাজার', 'পদ্মা সেতু রোড ট্রিপ', 'বাগেরহাটের গলদা চিংড়ি'],
    highlightsEn: ['UNESCO Sixty Dome Mosque', 'Khan Jahan Ali Shrine', 'Padma Bridge Express', 'Bagerhat Prawn Feast']
  },

  {
    id: 'pkg-paharpur-mahavihara',
    slug: 'paharpur-somapura-mahavihara',
    titleBn: 'পাহাড়পুর সোমপুর মহাবিহার ও মহাস্থানগড় প্রাচীন পুণ্ড্রনগর',
    titleEn: 'Paharpur Somapura Buddhist Vihara & Mahasthangarh',
    category: 'historical',
    districtBn: 'নওগাঁ ও বগুড়া',
    districtEn: 'Naogaon & Bogura',
    divisionBn: 'রাজশাহী',
    divisionEn: 'Rajshahi',
    taglineBn: '৮ম শতাব্দীর সর্ববৃহৎ বৌদ্ধ বিহার, ইউনেস্কো হেরিটেজ ও বগুড়ার দই',
    taglineEn: '8th century largest Buddhist monastery south of Himalayas, ancient ruins & famous Bogura curd',
    descriptionBn: 'হিমালয়ের দক্ষিণে সর্ববৃহৎ প্রাচীন বৌদ্ধ বিহার—সোমপুর মহাবিহার। পাল সাম্রাজ্যের দ্বিতীয় রাজা ধর্মপাল কর্তৃক ৮ম শতাব্দীতে নির্মিত এই প্রত্নতাত্ত্বিক বিস্ময়। সঙ্গে থাকছে ২৫০০ বছরের পুরনো পুণ্ড্রবর্ধনের রাজধানী মহাস্থানগড়, ভাসু বিহার ও বগুড়ার বিখ্যাত খাঁটি দইয়ের স্বাদ।',
    descriptionEn: 'Step back to the 8th century at Somapura Mahavihara in Paharpur, a monumental UNESCO World Heritage monastery. Explore 2,500-year-old Mahasthangarh citadel ruins and taste authentic Bogura curd.',
    priceRegular: 4500,
    priceDiscounted: 3499,
    durationDays: 2,
    durationNights: 1,
    durationTextBn: '২ দিন ১ রাত',
    durationTextEn: '2 Days 1 Night',
    departureFromBn: 'ঢাকা (গাবতলী / মহাখালী)',
    departureFromEn: 'Dhaka (Gabtoli / Mohakhali)',
    featuredImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: 'd9X2m1L0e8b',
    isFeatured: false,
    isPopular: false,
    isHistorical: true,
    isBudgetPick: true,
    isAvailable: true,
    rating: 4.9,
    reviewCount: 142,
    groupSizeLimit: 22,
    itinerary: [
      {
        day: 1,
        titleBn: 'ঢাকা থেকে বগুড়া ও মহাস্থানগড় প্রাচীন ধ্বংসাবশেষ',
        titleEn: 'Dhaka to Bogura & Mahasthangarh Ancient Citadel',
        activitiesBn: [
          'সকালে যমুনা সেতু পার হয়ে বগুড়া গমন',
          'প্রাচীন পুণ্ড্রনগরের দুর্গ নগরী ও মহাস্থানগড় জাদুঘর পরিদর্শন',
          'ভাসু বিহার ও গোকুল মেধা (বেহুলার বাসর ঘর) দর্শন',
          'বগুড়া শহরের ঐতিহ্যবাহী দই ও মিষ্টির স্বাদ গ্রহণ'
        ],
        activitiesEn: [
          'Morning travel across Jamuna Bridge to Bogura',
          'Explore Mahasthangarh ramparts and museum artifacts',
          'Visit Vasu Vihara and Gokul Medh (Behula\'s chamber)',
          'Tasting famous traditional Bogura special curd'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, রাতের খাবার',
        mealsEn: 'Breakfast, Lunch, Dinner',
        stayBn: 'বগুড়া ৩-স্টার হোটেল ক্যাসেল সোয়াদ / মম ইন',
        stayEn: 'Bogura 3-Star Hotel Castle Soad'
      },
      {
        day: 2,
        titleBn: 'পাহাড়পুর সোমপুর মহাবিহার ও ঢাকা প্রত্যাবর্তন',
        titleEn: 'Paharpur Somapura Buddhist Vihara & Return',
        activitiesBn: [
          'সকালের নাস্তা শেষে নওগাঁর পাহাড়পুরে যাত্রা',
          'ইউনেস্কো ঘোষিত সোমপুর মহাবিহারের টেরাকোটা ও স্তূপা পরিদর্শন',
          'পাহাড়পুর সাইট মিউজিয়াম ও টেরাকোটা প্লাক দর্শন',
          'দুপুরে উত্তরবঙ্গের স্পেশাল খাবার খেয়ে ঢাকার পথে রওনা'
        ],
        activitiesEn: [
          'Drive to Naogaon Paharpur after breakfast',
          'Guided walk through ancient monastery sanctum & terracotta friezes',
          'Visit Paharpur Archaeological On-site Museum',
          'Special North Bengal lunch & afternoon return to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      'ঢাকা-বগুড়া-নওগাঁ-ঢাকা এসি বাস / মাইক্রোবাস',
      'বগুড়ায় ১ রাত মানসম্মত ৩-স্টার হোটেলে স্টে',
      'প্রতিদিনের ৩ বেলা খাবার ও বগুড়ার খাঁটি দই',
      'মহাস্থানগড় ও পাহাড়পুর বিহারের সকল টিকিট',
      'প্রত্নতত্ত্ব বিশেষজ্ঞ গাইড'
    ],
    includedEn: [
      'Roundtrip AC transport throughout the tour',
      '1 Night accommodation in 3-star hotel',
      'All meals plus authentic Bogura curd treats',
      'All heritage site & museum admission fees',
      'Certified Archaeological guide'
    ],
    excludedBn: ['ব্যক্তিগত খরচ'],
    excludedEn: ['Personal shopping & tips'],
    upcomingDates: ['০৯ অক্টোবর ২০২৬', '২৩ অক্টোবর ২০২৬', '০৬ নভেম্বর ২০২৬'],
    highlightsBn: ['ইউনেস্কো পাহাড়পুর মহাবিহার', 'মহাস্থানগড় দুর্গ', 'বগুড়ার স্পেশাল দই', 'টেরাকোটা আর্ট'],
    highlightsEn: ['UNESCO Somapura Vihara', 'Mahasthangarh Citadel', 'Bogura Curd', 'Terracotta Art']
  },

  {
    id: 'pkg-sonargaon-panam',
    slug: 'sonargaon-panam-city-heritage',
    titleBn: 'সোনারগাঁও পানাম নগর ও লোকশিল্প জাদুঘর ডে ট্যুর',
    titleEn: 'Sonargaon Panam City & Folk Art Museum Day Tour',
    category: 'historical',
    districtBn: 'নারায়ণগঞ্জ (সোনারগাঁও)',
    districtEn: 'Narayanganj (Sonargaon)',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    taglineBn: 'বাংলার প্রাচীন রাজধানী, উনিশ শতকের ঐতিহাসিক ভিক্টোরিয়ান স্থাপত্য ও জামদানি ভিলেজ',
    taglineEn: 'Ancient capital of Bengal, 19th-century Victorian ghost town & Jamdani weaving village',
    descriptionBn: 'ঈসা খাঁর প্রাচীন রাজধানী সোনারগাঁও। উনিশ শতকের ব্রিটিশ ও মুঘল স্থাপত্যের মিশ্রণে তৈরি ঐতিহাসিক পানাম নগরীর মায়াবী ৫০টি প্রাচীন অট্টালিকা। সঙ্গে শিল্পাচার্য জয়নুল আবেদিন লোক ও কারুশিল্প ফাউন্ডেশনের জাদুঘর, রাজবাড়ি এবং রূপগঞ্জের ঐতিহ্যবাহী জামদানি পল্লী।',
    descriptionEn: 'Travel back to medieval Bengal\'s golden capital. Walk along Panam Nagar\'s 50 Victorian merchant mansions, Zainul Abedin Folk Art Museum, royal lakes, and traditional Jamdani weavers.',
    priceRegular: 1999,
    priceDiscounted: 1499,
    durationDays: 1,
    durationNights: 0,
    durationTextBn: '১ দিন (ডে ট্যুর)',
    durationTextEn: '1 Day (Budget Day Trip)',
    departureFromBn: 'ঢাকা (উত্তরা / ধানমন্ডি / প্রেস ক্লাব)',
    departureFromEn: 'Dhaka (Uttara / Dhanmondi / Press Club)',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: 'a7d8K0bV3c9',
    isFeatured: false,
    isPopular: true,
    isHistorical: true,
    isBudgetPick: true,
    isAvailable: true,
    rating: 4.88,
    reviewCount: 520,
    groupSizeLimit: 30,
    itinerary: [
      {
        day: 1,
        titleBn: 'সোনারগাঁও রাজবাড়ি, পানাম নগরী ও জামদানি পল্লী',
        titleEn: 'Sonargaon Palace, Panam Nagar & Jamdani Village',
        activitiesBn: [
          'সকাল ৮টায় ঢাকা থেকে যাত্রা',
          'সোনারগাঁও লোক ও কারুশিল্প জাদুঘর এবং বড় সরদার বাড়ি দর্শন',
          'পানাম নগরের ঐতিহাসিক প্রাচীন সড়ক ও অট্টালিকা এক্সপ্লোরেশন',
          'দুপুরে ঐতিহ্যবাহী রাজকীয় মোরগ পোলাও লাঞ্চ',
          'ঐতিহ্যবাহী তাঁতিদের হাতে বোনা জামদানি শাড়ি তৈরি দেখা',
          'সন্ধ্যা ৬টায় ঢাকায় ফেরা'
        ],
        activitiesEn: [
          '8:00 AM departure from Dhaka',
          'Visit Zainul Abedin Folk Art Museum & Sardar Bari palace',
          'Photo walk along historic Panam Nagar avenue',
          'Rich traditional Morog Polao feast lunch',
          'Witness live Jamdani weaving by master artisans',
          'Return to Dhaka by 6:00 PM'
        ],
        mealsBn: 'সকালের নাস্তা, রাজকীয় মোরগ পোলাও লাঞ্চ ও বিকালের মিষ্টি',
        mealsEn: 'Breakfast, Royal Morog Polao Lunch & Traditional Sweets'
      }
    ],
    includedBn: [
      'ঢাকা-সোনারগাঁও-ঢাকা এসি বাস যাতায়াত',
      'সকালের নাস্তা ও দুপুরের স্পেশাল মোরগ পোলাও',
      'পানাম নগর ও লোকশিল্প জাদুঘরের এন্ট্রি টিকিট',
      'প্রফেশনাল ট্যুর গাইড ও ফটোগ্রাফি সহায়তা'
    ],
    includedEn: [
      'Roundtrip AC coach transport',
      'Breakfast and royal lunch feast',
      'All monument admission tickets',
      'Professional guide & photography assistance'
    ],
    excludedBn: ['ব্যক্তিগত কেনাকাটা (যেমন জামদানি শাড়ি)'],
    excludedEn: ['Personal shopping (e.g. Jamdani textiles)'],
    upcomingDates: ['প্রতি শুক্র ও শনিবার', '০২ অক্টোবর ২০২৬', '০৯ অক্টোবর ২০২৬'],
    highlightsBn: ['পানাম নগরী', 'লোকশিল্প জাদুঘর', 'মোরগ পোলাও', 'জামদানি পল্লী'],
    highlightsEn: ['Panam Ancient City', 'Folk Art Museum', 'Morog Polao Lunch', 'Jamdani Weaving']
  },

  {
    id: 'pkg-sreemangal-tea',
    slug: 'sreemangal-tea-garden-lawachara',
    titleBn: 'শ্রীমঙ্গল চা বাগান, লাউয়াছড়া রেইনফরেস্ট ও মাধবপুর লেক',
    titleEn: 'Sreemangal Tea Capital, Lawachara Rainforest & Madhabpur Lake',
    category: 'natural',
    districtBn: 'মৌলভীবাজার (শ্রীমঙ্গল)',
    districtEn: 'Moulvibazar (Sreemangal)',
    divisionBn: 'সিলেট',
    divisionEn: 'Sylhet',
    taglineBn: 'সবুজের চাদর মোড়া চায়ের দেশ, নীলকণ্ঠের ৭ রঙের চা ও উল্লুকের ডাক',
    taglineEn: 'Lush green tea estates, Nilkantha 7-layer tea & endangered Hoolock Gibbons',
    descriptionBn: 'চা কন্যা শ্রীমঙ্গল—বাংলাদেশের চায়ের রাজধানী। মাইলের পর মাইল সবুজ চা বাগান, ছায়াতরু, লাউয়াছড়া জাতীয় উদ্যানের ঘন ট্রপিক্যাল রেইনফরেস্ট, মাধবপুর লেকের পদ্মফুল এবং মনিপুরী উপজাতি পল্লী। আরামদায়ক রিসোর্ট ও প্রকৃতির অপার শান্তি।',
    descriptionEn: 'The tea capital of Bangladesh. Endless rolling green tea plantations, canopy trails of Lawachara National Park home to Hoolock Gibbons, scenic lotus lake of Madhabpur, and indigenous Manipuri weaving villages.',
    priceRegular: 3800,
    priceDiscounted: 2999,
    durationDays: 2,
    durationNights: 1,
    durationTextBn: '২ দিন ১ রাত',
    durationTextEn: '2 Days 1 Night',
    departureFromBn: 'ঢাকা (কমলাপুর ট্রেন / মহাখালী বাস)',
    departureFromEn: 'Dhaka (Kamalapur Train / Mohakhali Bus)',
    featuredImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: 'Z3Qk8P9wL0c',
    isFeatured: false,
    isPopular: true,
    isBudgetPick: true,
    isAvailable: true,
    rating: 4.87,
    reviewCount: 290,
    groupSizeLimit: 20,
    itinerary: [
      {
        day: 1,
        titleBn: 'লাউয়াছড়া রেইনফরেস্ট ট্র্যাকিং ও মাধবপুর লেক',
        titleEn: 'Lawachara Rainforest Trekking & Madhabpur Lake',
        activitiesBn: [
          'ভোরের ট্রেনে বা বাসে শ্রীমঙ্গল আগমন ও রিসোর্টে চেক-ইন',
          'লাউয়াছড়া জাতীয় উদ্যানে বন্যপ্রাণী ও ট্রেইল ওয়াক',
          'মাধবপুর লেকে চা বাগান ঘেরা নীল জলের সৌন্দর্য উপভোগ',
          'বিখ্যাত রমেশ রাম গৌড়ের ৭ লেয়ার চায়ের স্বাদ গ্রহণ'
        ],
        activitiesEn: [
          'Morning arrival in Sreemangal & resort check-in',
          'Nature walk in Lawachara National Park spotting wildlife',
          'Visit panoramic Madhabpur Lake surrounded by tea hills',
          'Taste the famous 7-layer Nilkantha Tea'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, রাতের খাবার',
        mealsEn: 'Breakfast, Lunch, Dinner',
        stayBn: 'শ্রীমঙ্গল গ্রিন ভিউ ইকো রিসোর্ট',
        stayEn: 'Sreemangal Green View Eco Resort'
      },
      {
        day: 2,
        titleBn: 'ফিনলে টি এস্টেট, মনিপুরী পাড়া ও ঢাকা প্রত্যাবর্তন',
        titleEn: 'Finlay Tea Estate, Manipuri Village & Return',
        activitiesBn: [
          'সকালে বাইক্কাবিল বা ফিনলে চা বাগানে সাইক্লিং/হাঁটা',
          'মনিপুরী তাঁত পল্লীতে ঐতিহ্যবাহী পোশাক ও হস্তশিল্প দর্শন',
          'দুপুরে সাতকড়া গরুর মাংসের বিখ্যাত সিলেটের খাবার',
          'বিকেলের ট্রেনে ঢাকার উদ্দেশ্যে রওনা'
        ],
        activitiesEn: [
          'Morning tea plantation stroll through Finlay Tea Estate',
          'Explore indigenous Manipuri handloom textile village',
          'Special Sylheti Shatkora beef / fish lunch',
          'Afternoon scenic train ride back to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      'ঢাকা-শ্রীমঙ্গল-ঢাকা ট্রেন / বাস টিকিট',
      '১ রাত চা বাগান ভিউ রিসোর্টে থাকা',
      'সকল বেলার খাবার (সিলেটি সাতকড়া বিফ সহ)',
      'লাউয়াছড়া ও মাধবপুর লেকের অটো/মাইক্রো সাইটসিয়িং',
      'লোকাল গাইড'
    ],
    includedEn: [
      'Dhaka-Sreemangal roundtrip train/bus tickets',
      '1 Night eco resort accommodation',
      'All meals featuring Sylheti Shatkora beef/fish',
      'Reserved sightseeing transport',
      'Local nature guide'
    ],
    excludedBn: ['ব্যক্তিগত কেনাকাটা ও ৭ রঙের চা'],
    excludedEn: ['Personal shopping & 7-layer tea bill'],
    upcomingDates: ['০৩ অক্টোবর ২০২৬', '১৭ অক্টোবর ২০২৬', '৩১ অক্টোবর ২০২৬'],
    highlightsBn: ['সবুজ চা বাগান', 'লাউয়াছড়া রেইনফরেস্ট', '৭ লেয়ার চা', 'মাধবপুর লেক', 'মনিপুরী হস্তশিল্প'],
    highlightsEn: ['Tea Estates', 'Lawachara Forest', '7-Layer Tea', 'Madhabpur Lake', 'Manipuri Village']
  },

  {
    id: 'pkg-coxs-bazar-inani',
    slug: 'coxs-bazar-sea-beach-marine-drive',
    titleBn: 'কক্সবাজার সমুদ্র সৈকত ও ইনানী মেরিন ড্রাইভ',
    titleEn: 'Cox\'s Bazar Longest Sea Beach & Inani Marine Drive',
    category: 'beach',
    districtBn: 'কক্সবাজার',
    districtEn: 'Cox\'s Bazar',
    divisionBn: 'চট্টগ্রাম',
    divisionEn: 'Chattogram',
    taglineBn: 'বিশ্বের দীর্ঘতম ১২০ কিমি অবিচ্ছিন্ন বালুকাময় সমুদ্র সৈকত ও হিমছড়ি ঝর্ণা',
    taglineEn: 'World\'s longest 120km unbroken natural sand beach, Marine Drive & Himchhari falls',
    descriptionBn: 'বিশ্বের দীর্ঘতম সমুদ্র সৈকত কক্সবাজার। লাবণী, সুগন্ধা ও কলাতলী বিচে জলকেলি, খোলা চাঁদের গাড়িতে বিশ্বের দীর্ঘতম মেরিন ড্রাইভ রোড ধরে ইনানী প্রবাল সৈকত ও হিমছড়ি পাহাড়ি ঝর্ণায় যাওয়া। সূর্যাস্তের মনোরম দৃশ্য আর সি-ফুডের মহাভোজ।',
    descriptionEn: 'The world\'s longest natural sandy sea beach. Cruise along scenic Marine Drive between lush green hills and azure sea, walk on coral stones at Inani beach, and enjoy Himchhari hills.',
    priceRegular: 5500,
    priceDiscounted: 4499,
    durationDays: 3,
    durationNights: 2,
    durationTextBn: '৩ দিন ২ রাত',
    durationTextEn: '3 Days 2 Nights',
    departureFromBn: 'ঢাকা (সায়দাবাদ / আরামবাগ)',
    departureFromEn: 'Dhaka (Sayedabad / Arambagh)',
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: 't6r0W_q4P1A',
    isFeatured: true,
    isPopular: true,
    isBudgetPick: true,
    isAvailable: true,
    rating: 4.89,
    reviewCount: 620,
    groupSizeLimit: 32,
    itinerary: [
      {
        day: 1,
        titleBn: 'কক্সবাজার আগমন, হোটেল চেক-ইন ও বিচে সূর্যাস্ত',
        titleEn: 'Arrival, Hotel Check-in & Sunset at Beach',
        activitiesBn: [
          'সকালে কক্সবাজারে পৌঁছে ৩-স্টার হোটেলে চেক-ইন',
          'লাবণী ও সুগন্ধা পয়েন্টে সমুদ্র স্নান ও ফ্রেশ হওয়া',
          'দুপুরে তাজা রূপচাঁদা ও শুঁটকি ভর্তার লাঞ্চ',
          'বিকেলে বিচে সূর্যাস্ত দেখা ও বার্মিজ মার্কেটে কেনাকাটা'
        ],
        activitiesEn: [
          'Morning check-in at 3-star hotel near beach',
          'Sea bathing at Laboni & Sugandha beach',
          'Seafood lunch with Rupchanda & spicy bhartas',
          'Sunset watching & Burmese market handicraft shopping'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, রাতের খাবার',
        mealsEn: 'Breakfast, Lunch, Dinner',
        stayBn: 'কক্সবাজার হোটেল সী ক্রাউন / সী গাল সংলগ্ন',
        stayEn: 'Cox\'s Bazar Hotel Sea Crown Area'
      },
      {
        day: 2,
        titleBn: 'মেরিন ড্রাইভ, ইনানী কোরাল বিচ ও হিমছড়ি পাহাড়',
        titleEn: 'Marine Drive Open Jeep Tour & Inani Coral Beach',
        activitiesBn: [
          'সকালের নাস্তা শেষে খোলা চাঁদের গাড়িতে মেরিন ড্রাইভে যাত্রা',
          'হিমছড়ি পাহাড়ে আরোহণ ও উপর থেকে সমুদ্রের ভিউ',
          'ইনানী প্রবাল বিচে কোরাল পাথরের ওপর হাঁটা',
          'রাতে সমুদ্র সৈকতের কাছে ফিশ বারবিকিউ ডিনার'
        ],
        activitiesEn: [
          'Chander Gari open jeep tour along 80km Marine Drive',
          'Climb Himchhari hilltop for breathtaking panoramic ocean view',
          'Relax at Inani Coral Beach',
          'Night seaside Live BBQ dinner'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, ফিশ বারবিকিউ ডিনার',
        mealsEn: 'Breakfast, Lunch, Live Fish BBQ Dinner',
        stayBn: 'কক্সবাজার হোটেল',
        stayEn: 'Cox\'s Bazar Hotel'
      },
      {
        day: 3,
        titleBn: 'সকালে ফ্রি টাইম ও ঢাকার উদ্দেশ্যে রওনা',
        titleEn: 'Free Morning & Return Journey to Dhaka',
        activitiesBn: [
          'সকালে বিচে মুক্ত সময় ও ছবি তোলা',
          'দুপুরে চেক-আউট শেষে বাসে ঢাকার উদ্দেশ্যে রওনা'
        ],
        activitiesEn: [
          'Morning leisure time on beach for photography',
          'Afternoon highway coach ride back to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      'ঢাকা-কক্সবাজার-ঢাকা নন-এসি/এসি বাস টিকেট',
      '২ রাত বিচ সংলগ্ন ৩-স্টার হোটেলে স্টে',
      'প্রতিদিনের ৩ বেলা মানসম্মত খাবার',
      'মেরিন ড্রাইভ ও ইনানী বিচের চাঁদের গাড়ি রিজার্ভ',
      '১ রাত স্পেশাল ফিশ বারবিকিউ'
    ],
    includedEn: [
      'Dhaka-Cox\'s Bazar roundtrip bus ticket',
      '2 Nights stay in quality 3-star hotel near beach',
      'All meals throughout the tour',
      'Open jeep tour to Inani & Marine Drive',
      '1 Night seafood BBQ dinner'
    ],
    excludedBn: ['ব্যক্তিগত বিচ বাইক বা প্যারাসেইলিং ফি'],
    excludedEn: ['Beach water sports, parasailing & personal shopping'],
    upcomingDates: ['০৮ অক্টোবর ২০২৬', '১৫ অক্টোবর ২০২৬', '২২ অক্টোবর ২০২৬'],
    highlightsBn: ['বিশ্বের দীর্ঘতম বিচ', 'মেরিন ড্রাইভ রোড', 'ইনানী কোরাল বিচ', 'হিমছড়ি পাহাড়', 'সি-ফুড ডিনার'],
    highlightsEn: ['Longest Sea Beach', 'Marine Drive', 'Inani Coral Beach', 'Himchhari Hill', 'Seafood Feast']
  },

  {
    id: 'pkg-bandarban-nilgiri',
    slug: 'bandarban-nilgiri-boga-lake',
    titleBn: 'বান্দরবান নীলগিরি, বগালেক ও নাফাখুম ট্র্যাকিং',
    titleEn: 'Bandarban Nilgiri Cloud Top & Boga Lake Adventure',
    category: 'hill',
    districtBn: 'বান্দরবান (রুমা ও থানচি)',
    districtEn: 'Bandarban (Ruma & Thanchi)',
    divisionBn: 'চট্টগ্রাম',
    divisionEn: 'Chattogram',
    taglineBn: 'মেঘের স্পর্শে পাহাড়ের চূড়া, নীল দিগন্ত, আদিবাসী সংস্কৃতি ও জলপ্রপাত',
    taglineEn: 'Touch clouds at Nilgiri mountain peak, volcanic Boga lake & Nafakhum waterfall',
    descriptionBn: 'পাহাড়ের রানী বান্দরবান। সমুদ্রপৃষ্ঠ থেকে ২৪০০ ফুট উঁচুতে অবস্থিত নীলগিরি রিসোর্ট যেখানে আপনি মেঘের ভেতর দিয়ে হাঁটবেন। সঙ্গে থাকছে রহস্যময় বগালেক, থানচির সাঙ্গু নদী ক্রুজ ও শৈলপ্রপাত।',
    descriptionEn: 'The hill district of Bandarban. Stand 2,400 feet above sea level at Nilgiri, cruise the mystical Sangu river through limestone gorges in Thanchi, and stay beside the legendary Boga Lake.',
    priceRegular: 6800,
    priceDiscounted: 5799,
    durationDays: 3,
    durationNights: 2,
    durationTextBn: '৩ দিন ২ রাত',
    durationTextEn: '3 Days 2 Nights',
    departureFromBn: 'ঢাকা (ফকিরাপুল / সায়দাবাদ)',
    departureFromEn: 'Dhaka (Fakirapool / Sayedabad)',
    featuredImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
    ],
    youtubeVideoId: '9T7M3-q07wA',
    isFeatured: true,
    isPopular: true,
    isBudgetPick: false,
    isAvailable: true,
    rating: 4.92,
    reviewCount: 275,
    groupSizeLimit: 20,
    itinerary: [
      {
        day: 1,
        titleBn: 'বান্দরবান আগমন, নীলগিরি ও নীলাচল সূর্যাস্ত',
        titleEn: 'Arrival, Nilgiri Cloud Summit & Nilachal Sunset',
        activitiesBn: [
          'ভোরে বান্দরবান পৌঁছে পাহাড়ি নাস্তা ও চাঁদের গাড়িতে নীলগিরি যাত্রা',
          'নীলগিরি থেকে মেঘের সাগর ও সর্পিল পাহাড়ি রাস্তা দেখা',
          'শৈলপ্রপাত ঝর্ণা ও চিম্বুক পাহাড়ে আদিবাসী ফলমূলের স্বাদ গ্রহণ',
          'নীলাচল ভিউপয়েন্টে সূর্যাস্ত ও রাতে পাহাড়ি বার-বি-কিউ'
        ],
        activitiesEn: [
          'Morning arrival in Bandarban & 4x4 Chander Gari jeep ride to Nilgiri',
          'Witness sea of clouds from 2,400ft Nilgiri peak',
          'Explore Shoilo Propat waterfall & Chimbuk hill',
          'Spectacular sunset from Nilachal and indigenous BBQ dinner'
        ],
        mealsBn: 'নাস্তা, লাঞ্চ, ডিনার',
        mealsEn: 'Breakfast, Lunch, Dinner',
        stayBn: 'বান্দরবান হিল ইকো রিসোর্ট',
        stayEn: 'Bandarban Hill Eco Resort'
      },
      {
        day: 2,
        titleBn: 'সাঙ্গু নদী ক্রুজিং ও থানচি রিমাক্রি দর্শন',
        titleEn: 'Sangu River Cruise & Thanchi Exploration',
        activitiesBn: [
          'সকালে থানচির উদ্দেশ্যে রওনা ও কাঠের দেশি নৌকায় সাঙ্গু নদী ক্রুজিং',
          'বিশাল পাথুরে তিন্দু ও রিমাক্রি জলপ্রপাত দর্শন',
          'আদিবাসী মারমা ও মুরং পাড়ার জীবনযাত্রা পরিদর্শন'
        ],
        activitiesEn: [
          'Scenic morning drive to Thanchi and wooden boat cruise on Sangu River',
          'Visit iconic Tindu rock formations & Remakri water cascade',
          'Experience Marma & Murong tribal cultural heritage'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার, রাতের খাবার',
        mealsEn: 'Breakfast, Lunch, Dinner',
        stayBn: 'বান্দরবান রিসোর্ট',
        stayEn: 'Bandarban Resort'
      },
      {
        day: 3,
        titleBn: 'স্বর্ণমন্দির, মেঘলা লেক ও ঢাকা প্রত্যাবর্তন',
        titleEn: 'Golden Temple, Meghla Lake & Return',
        activitiesBn: [
          'সকালে ঐতিহ্যবাহী স্বর্ণমন্দির (বুদ্ধ ধাতু জাদি) পরিদর্শন',
          'মেঘলা পর্যটন কমপ্লেক্স ও ঝুলন্ত সেতু পার হওয়া',
          'সন্ধ্যায় বাসে ঢাকার উদ্দেশ্যে রওনা'
        ],
        activitiesEn: [
          'Visit iconic Buddhist Golden Temple (Buddha Dhatu Jadi)',
          'Stroll around Meghla Lake and cable car / suspension bridge',
          'Evening bus journey back to Dhaka'
        ],
        mealsBn: 'নাস্তা, দুপুরের খাবার',
        mealsEn: 'Breakfast, Lunch'
      }
    ],
    includedBn: [
      'ঢাকা-বান্দরবান-ঢাকা নন-এসি/এসি বাস টিকেট',
      '৩ দিনের জন্য রিজার্ভ চাঁদের গাড়ি (নীলগিরি, নীলাচল, চিম্বুক)',
      '২ রাত মানসম্মত ইকো রিসোর্টে থাকা',
      'সকল বেলার পাহাড়ি স্পেশাল খাবার ও বার-বি-কিউ',
      'সাঙ্গু নদীর বোট ভাড়া ও গাইড ফি'
    ],
    includedEn: [
      'Roundtrip bus tickets from Dhaka',
      'Reserved 4x4 Chander Gari jeep for all 3 days',
      '2 Nights eco resort accommodation',
      'All local organic meals & BBQ night',
      'Sangu river boat fees & certified local guide'
    ],
    excludedBn: ['ব্যক্তিগত কেনাকাটা ও এন্ট্রি ফি'],
    excludedEn: ['Personal shopping & temple donations'],
    upcomingDates: ['১১ অক্টোবর ২০২৬', '২৫ অক্টোবর ২০২৬', '০৮ নভেম্বর ২০২৬'],
    highlightsBn: ['নীলগিরি মেঘের চূড়া', 'সাঙ্গু নদী বোট ক্রুজ', 'স্বর্ণমন্দির', 'নীলাচল সূর্যাস্ত'],
    highlightsEn: ['Nilgiri Cloud Peak', 'Sangu River Cruise', 'Golden Temple', 'Nilachal Sunset']
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    userName: 'তানভীর আহমেদ',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '২০২৬-০৮-১৫',
    commentBn: 'সাজেক ভ্যালির ট্যুরটা অসাধারণ ছিল! মেঘের ওপর কটেজে থাকা আর রাতের ব্যাম্বু চিকেন বারবিকিউ কখনও ভুলব না। সবচেয়ে ভালো লেগেছে গাইড ভাইয়ের সার্বক্ষণিক আন্তরিক সহযোগিতা ও রিজনেবল প্রাইস।',
    commentEn: 'The Sajek Valley tour was extraordinary! Staying above the clouds and enjoying the bamboo chicken BBQ was unforgettable. The tour manager was extremely helpful.',
    tourNameBn: 'সাজেক ভ্যালি - মেঘের রাজ্য',
    tourNameEn: 'Sajek Valley - Kingdom of Clouds',
    verified: true
  },
  {
    id: 'rev-2',
    userName: 'নুসরাত জাহান মিম',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '২০২৬-০৮-২০',
    commentBn: 'টাঙ্গুয়ার হাওরের হাউসবোট সার্ভিস ফাইভ স্টার মানের ছিল! এত সুন্দর কাঁচের মতো স্বচ্ছ পানি আর গরম গরম তাজা মাছ ও হাঁসের মাংসের ভূরিভোজ। পুরো পরিবার নিয়ে নিশ্চিন্তে ভ্রমণ করা যায়।',
    commentEn: 'The Tanguar Haor houseboat experience was 5-star quality! Crystal clear waters and mouthwatering fresh fish & duck curries. Completely safe for family trips.',
    tourNameBn: 'টাঙ্গুয়ার হাওর ও নিলাদ্রি লেক',
    tourNameEn: 'Tanguar Haor & Niladri Lake',
    verified: true
  },
  {
    id: 'rev-3',
    userName: 'রাকিবুল হাসান চৌধুরী',
    userAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    date: '২০২৬-০৮-২৮',
    commentBn: 'বাগেরহাট ও সুন্দরবন ট্যুরে গিয়েছিলাম। জাহাজের নিরাপত্তা ও গাইডদের অভিজ্ঞতা প্রশংসনীয়। ৬০ গম্বুজ মসজিদের ইতিহাস ও জামতলা বিচের দৃশ্য চোখে লেগে থাকবে।',
    commentEn: 'Went to Bagerhat and Sundarbans. Ship security and naturalist guides were top class. UNESCO Sixty Dome Mosque and Kotka beach were breathtaking.',
    tourNameBn: 'সুন্দরবন ও বাগেরহাট ষাট গম্বুজ',
    tourNameEn: 'Sundarbans & Bagerhat Heritage',
    verified: true
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'bk-1001',
    bookingCode: 'CGB-2026-8921',
    packageId: 'pkg-sajek-valley',
    packageTitleBn: 'সাজেক ভ্যালি - মেঘের রাজ্য ও রুইলুই পাড়া',
    packageTitleEn: 'Sajek Valley - Kingdom of Clouds & Ruilui Para',
    packageImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80',
    customerName: 'ইমরান হোসেন',
    customerPhone: '01812345678',
    customerEmail: 'imran.travel@gmail.com',
    travelDate: '১৫ অক্টোবর ২০২৬',
    travelersCount: { adults: 2, children: 0 },
    transportType: 'ac_bus',
    roomType: 'couple',
    totalPrice: 12998,
    paidAmount: 5000,
    paymentMethod: 'bkash',
    paymentStatus: 'partial',
    bookingStatus: 'confirmed',
    specialRequirements: 'কাপল ব্যালকনি ভিউ কটেজ ও হালাল খাবার প্রয়োজন',
    createdAt: '2026-08-28 14:20'
  },
  {
    id: 'bk-1002',
    bookingCode: 'CGB-2026-4432',
    packageId: 'pkg-tanguar-haor',
    packageTitleBn: 'টাঙ্গুয়ার হাওর ও নিলাদ্রি লেক প্রিমিয়াম হাউসবোট',
    packageTitleEn: 'Tanguar Haor & Niladri Lake Premium Houseboat',
    packageImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
    customerName: 'মেহেদী হাসান',
    customerPhone: '01798765432',
    customerEmail: 'mehedi.h@gmail.com',
    travelDate: '২৪ অক্টোবর ২০২৬',
    travelersCount: { adults: 4, children: 1 },
    transportType: 'sedan_hiace',
    roomType: 'family',
    totalPrice: 18500,
    paidAmount: 18500,
    paymentMethod: 'nagad',
    paymentStatus: 'paid',
    bookingStatus: 'confirmed',
    specialRequirements: 'বোটের আপার ডেক কেবিন প্রয়োজন',
    createdAt: '2026-08-30 11:15'
  }
];

export const INITIAL_INQUIRIES: InquiryMessage[] = [
  {
    id: 'inq-1',
    name: 'ফারজানা আক্তার',
    phone: '01611223344',
    email: 'farzana.ak@gmail.com',
    subject: 'কর্পোরেট গ্রুপ ট্যুর (৩০ জন)',
    destination: 'সেন্টমার্টিন দ্বীপ ও কক্সবাজার',
    travelers: 30,
    date: 'নভেম্বর ২০২৬',
    message: 'আমাদের অফিস টিম নিয়ে ৩০ জনের সেন্টমার্টিন ট্যুর করতে চাই। এসি বাস ও কাপল/টুইন রুম সহ সেরা ডিসকাউন্ট কোটেশন জানাবেন প্লিজ।',
    status: 'new',
    isRead: false,
    createdAt: '2026-08-31 16:45'
  }
];

export const initialTourPackages = TOUR_PACKAGES;
export const initialReviews = MOCK_REVIEWS;
export const initialBookings = INITIAL_BOOKINGS;
export const initialInquiries = INITIAL_INQUIRIES;
export const initialTravelVideos = TRAVEL_VIDEOS;
