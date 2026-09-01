export type ScreenId =
  | 'explore'
  | 'article_detail'
  | 'fintech'
  | 'marketplace'
  | 'activity'
  | 'profile';

export type DeviceType = 'iphone16' | 'pixel9' | 'ipad' | 'desktop';

export type ThemeMode = 'light' | 'dark';

export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  verified?: boolean;
}

export interface Comment {
  id: string;
  author: Author;
  content: string;
  timestamp: string;
  likes: number;
  userLiked?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  galleryImages: string[];
  readTime: string;
  publishedAt: string;
  author: Author;
  likes: number;
  commentsCount: number;
  bookmarksCount: number;
  isBookmarked?: boolean;
  isLiked?: boolean;
  contentParagraphs: string[];
  quote?: {
    text: string;
    author: string;
  };
  tags: string[];
}

export interface StoryItem {
  id: string;
  userName: string;
  userAvatar: string;
  previewUrl: string;
  caption: string;
  hasUnseenStory: boolean;
}

export interface BankCard {
  id: string;
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  balance: number;
  currency: string;
  type: 'visa' | 'mastercard' | 'amex';
  gradient: string;
  isDefault?: boolean;
}

export interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  type: 'expense' | 'income' | 'transfer';
  date: string;
  time: string;
  iconName: string;
  merchantLogo?: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  galleryImages: string[];
  description: string;
  features: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isFavorite?: boolean;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
  selectedColor?: string;
}

export interface ActivityMetric {
  title: string;
  current: number;
  target: number;
  unit: string;
  color: string;
  percentage: number;
}

export interface ScheduleEvent {
  id: string;
  time: string;
  title: string;
  location: string;
  category: 'fitness' | 'meeting' | 'wellness' | 'personal';
  completed: boolean;
  imageUrl?: string;
}

export interface HotlinkAsset {
  id: string;
  title: string;
  category: 'Nature & Travel' | 'Architecture' | 'Technology' | 'Lifestyle' | 'Food & Drink' | 'People & Avatars';
  url: string;
  width: number;
  height: number;
  alt: string;
  photographer: string;
  photographerUrl?: string;
}
