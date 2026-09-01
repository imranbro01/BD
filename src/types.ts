export type Language = 'bn' | 'en';
export type ThemeMode = 'light' | 'dark';
export type UserRole = 'admin' | 'customer';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
}

export type TourCategory = 
  | 'all'
  | 'natural' 
  | 'historical' 
  | 'beach' 
  | 'hill' 
  | 'haor' 
  | 'daytrip';

export interface ItineraryDay {
  day: number;
  titleBn: string;
  titleEn: string;
  activitiesBn: string[];
  activitiesEn: string[];
  mealsBn: string;
  mealsEn: string;
  stayBn?: string;
  stayEn?: string;
}

export interface TravelVideo {
  id: string;
  youtubeId: string;
  titleBn: string;
  titleEn: string;
  destinationBn: string;
  destinationEn: string;
  category: 'hill' | 'beach' | 'natural' | 'haor' | 'historical';
  duration: string;
  thumbnail: string;
  viewsBn: string;
  viewsEn: string;
  descriptionBn: string;
  descriptionEn: string;
}

export interface TourPackage {
  id: string;
  slug?: string;
  titleBn: string;
  titleEn: string;
  category: 'natural' | 'historical' | 'beach' | 'hill' | 'haor' | 'daytrip';
  districtBn: string;
  districtEn: string;
  divisionBn: string;
  divisionEn: string;
  taglineBn: string;
  taglineEn: string;
  descriptionBn: string;
  descriptionEn: string;
  priceRegular: number;
  priceDiscounted: number;
  durationDays: number;
  durationNights: number;
  durationTextBn: string;
  durationTextEn: string;
  departureFromBn: string;
  departureFromEn: string;
  featuredImage: string;
  gallery: string[];
  youtubeVideoId?: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  isHistorical?: boolean;
  isBudgetPick?: boolean;
  isBudgetDeal?: boolean;
  isAvailable?: boolean;
  rating: number;
  reviewCount: number;
  groupSizeLimit?: number;
  itinerary: ItineraryDay[];
  includedBn: string[];
  includedEn: string[];
  excludedBn: string[];
  excludedEn: string[];
  upcomingDates: string[];
  highlightsBn: string[];
  highlightsEn: string[];
}

export interface Booking {
  id: string;
  bookingCode: string;
  packageId: string;
  packageTitleBn: string;
  packageTitleEn: string;
  packageImage: string;
  userId?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  travelDate: string;
  travelersCount: {
    adults: number;
    children: number;
  };
  transportType: 'ac_bus' | 'non_ac_bus' | 'sedan_hiace' | 'train' | 'boat';
  roomType: 'couple' | 'twin' | 'family' | 'dormitory';
  totalPrice: number;
  paidAmount: number;
  paymentMethod: 'bkash' | 'nagad' | 'rocket' | 'bank' | 'cash_office';
  paymentStatus: 'unpaid' | 'partial' | 'paid';
  bookingStatus: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  specialRequirements?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  packageId?: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  commentBn: string;
  commentEn: string;
  tourNameBn: string;
  tourNameEn: string;
  verified: boolean;
}

export interface InquiryMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject?: string;
  destination?: string;
  travelers?: number;
  date?: string;
  message: string;
  status?: 'new' | 'contacted' | 'resolved';
  isRead?: boolean;
  createdAt: string;
}

export interface CustomTourQuote {
  destination: string;
  days: number;
  travelers: number;
  transportPreference: string;
  accommodationType: string;
  mealPlan: string;
  guideRequired: boolean;
  estimatedBudgetPerPerson: number;
  totalEstimatedBudget: number;
}
