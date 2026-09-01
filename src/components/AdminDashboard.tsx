import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Plus, 
  Package, 
  Users, 
  DollarSign, 
  MessageSquare, 
  Edit3, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Phone, 
  Mail, 
  ArrowLeft, 
  Eye, 
  Sparkles,
  Search,
  MessageCircle,
  Save,
  X
} from 'lucide-react';
import { TourPackage, Booking, InquiryMessage } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface AdminDashboardProps {
  tours: TourPackage[];
  bookings: Booking[];
  inquiries: InquiryMessage[];
  onAddTour: (tour: TourPackage) => void;
  onUpdateTour: (tour: TourPackage) => void;
  onDeleteTour: (tourId: string) => void;
  onUpdateBookingStatus: (bookingId: string, status: Booking['bookingStatus']) => void;
  onBackToHome: () => void;
  onSelectBooking: (booking: Booking) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  tours,
  bookings,
  inquiries,
  onAddTour,
  onUpdateTour,
  onDeleteTour,
  onUpdateBookingStatus,
  onBackToHome,
  onSelectBooking,
}) => {
  const { language, t, formatCurrency, formatNumber } = useLanguage();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'packages' | 'bookings' | 'inquiries'>('overview');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTour, setEditingTour] = useState<TourPackage | null>(null);

  // New Tour Form State
  const [newTitleBn, setNewTitleBn] = useState('');
  const [newTitleEn, setNewTitleEn] = useState('');
  const [newDistrictBn, setNewDistrictBn] = useState('কক্সবাজার');
  const [newDistrictEn, setNewDistrictEn] = useState('Cox\'s Bazar');
  const [newDivisionBn, setNewDivisionBn] = useState('চট্টগ্রাম');
  const [newDivisionEn, setNewDivisionEn] = useState('Chattogram');
  const [newCategory, setNewCategory] = useState<TourPackage['category']>('natural');
  const [newDurationBn, setNewDurationBn] = useState('৩ দিন ২ রাত');
  const [newDurationEn, setNewDurationEn] = useState('3 Days 2 Nights');
  const [newPriceRegular, setNewPriceRegular] = useState(6500);
  const [newPriceDiscounted, setNewPriceDiscounted] = useState(5500);
  const [newImage, setNewImage] = useState('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80');
  const [newTaglineBn, setNewTaglineBn] = useState('সুন্দর পরিবেশ ও বাজেট ফ্রেন্ডলি ট্যুর');
  const [newTaglineEn, setNewTaglineEn] = useState('Breathtaking natural experience with affordable package');

  // Search in tables
  const [packageSearch, setPackageSearch] = useState('');
  const [bookingFilter, setBookingFilter] = useState<'all' | 'confirmed' | 'pending' | 'completed'>('all');

  // Summary Metrics
  const totalRevenue = bookings.reduce((acc, b) => acc + (b.totalPrice || 0), 0);
  const totalPaidRevenue = bookings.reduce((acc, b) => acc + (b.paidAmount || 0), 0);

  const filteredBookings = bookings.filter((b) => {
    if (bookingFilter === 'all') return true;
    return b.bookingStatus === bookingFilter;
  });

  const filteredTours = tours.filter((tr) => 
    tr.titleEn.toLowerCase().includes(packageSearch.toLowerCase()) || 
    tr.titleBn.includes(packageSearch)
  );

  const handleCreateTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitleBn.trim() || !newTitleEn.trim()) return;

    const newPkg: TourPackage = {
      id: 'cgb_custom_' + Date.now(),
      titleBn: newTitleBn.trim(),
      titleEn: newTitleEn.trim(),
      districtBn: newDistrictBn.trim(),
      districtEn: newDistrictEn.trim(),
      divisionBn: newDivisionBn.trim(),
      divisionEn: newDivisionEn.trim(),
      category: newCategory,
      durationDays: 3,
      durationNights: 2,
      durationTextBn: newDurationBn,
      durationTextEn: newDurationEn,
      priceRegular: Number(newPriceRegular),
      priceDiscounted: Number(newPriceDiscounted),
      isBudgetDeal: true,
      departureFromBn: 'ঢাকা (সায়দাবাদ/উত্তরা)',
      departureFromEn: 'Dhaka (Sayedabad / Uttara)',
      featuredImage: newImage,
      gallery: [newImage],
      taglineBn: newTaglineBn,
      taglineEn: newTaglineEn,
      descriptionBn: newTaglineBn,
      descriptionEn: newTaglineEn,
      highlightsBn: ['ঢাকা থেকে আরামদায়ক যাতায়াত', 'মানসম্মত হোটেল/রিসোর্ট', 'অভিজ্ঞ গাইড'],
      highlightsEn: ['Comfortable Transport', 'Quality Accommodation', 'Experienced Guide'],
      includedBn: ['বাসের টিকিট', 'হোটেল রুম', 'প্রতিদিনের খাবার'],
      includedEn: ['Bus Tickets', 'Hotel Room', 'Daily Meals'],
      excludedBn: ['ব্যক্তিগত খরচ'],
      excludedEn: ['Personal Expenses'],
      itinerary: [
        {
          day: 1,
          titleBn: 'ঢাকা থেকে যাত্রা ও গন্তব্যে পৌঁছানো',
          titleEn: 'Departure from Dhaka & Arrival',
          activitiesBn: ['সকালে পৌঁছানো ও হোটেলে চেক ইন'],
          activitiesEn: ['Morning arrival and hotel check-in'],
          mealsBn: 'ব্রেকফাস্ট, লাঞ্চ, ডিনার',
          mealsEn: 'Breakfast, Lunch, Dinner',
          stayBn: 'স্ট্যান্ডার্ড রিসোর্ট',
          stayEn: 'Standard Resort'
        }
      ],
      upcomingDates: ['Every Thursday Night', 'Every Friday Night'],
      rating: 4.9,
      reviewCount: 1
    };

    onAddTour(newPkg);
    setShowAddModal(false);
    // reset
    setNewTitleBn('');
    setNewTitleEn('');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-bold text-purple-400 hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'bn' ? 'মেইন ওয়েবসাইটে ফিরে যান' : 'Back to Website'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-900/60 text-purple-200 border border-purple-500/40 text-xs font-bold font-mono">
              Admin: Eleash Ahmed (01312816223)
            </span>
          </div>
        </div>

        {/* Admin Header Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950 via-indigo-950 to-neutral-900 border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-purple-300 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Super Administrator Control Portal</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white">
                Cholo Ghuri Bangladesh Management
              </h1>
              <p className="text-xs text-neutral-400">
                eleashahmed6223@gmail.com • Hotline 01312816223
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-purple-950 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{t('addNewTourBtn')}</span>
          </button>
        </div>

        {/* 4 Stat Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="text-xs text-neutral-400 block">{t('statActiveTours')}</span>
            <div className="text-2xl font-extrabold font-mono text-purple-400">
              {formatNumber(tours.length)}
            </div>
            <span className="text-[10px] text-emerald-400">All Live On Website</span>
          </div>

          <div className="p-5 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="text-xs text-neutral-400 block">{t('statTotalBookings')}</span>
            <div className="text-2xl font-extrabold font-mono text-emerald-400">
              {formatNumber(bookings.length)}
            </div>
            <span className="text-[10px] text-neutral-500">Confirmed Traveler Seats</span>
          </div>

          <div className="p-5 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="text-xs text-neutral-400 block">{t('statTotalRevenue')}</span>
            <div className="text-2xl font-extrabold font-mono text-amber-400">
              {formatCurrency(totalRevenue)}
            </div>
            <span className="text-[10px] text-neutral-500">Advance Paid: {formatCurrency(totalPaidRevenue)}</span>
          </div>

          <div className="p-5 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-1">
            <span className="text-xs text-neutral-400 block">{t('statInquiriesCount')}</span>
            <div className="text-2xl font-extrabold font-mono text-teal-400">
              {formatNumber(inquiries.length)}
            </div>
            <span className="text-[10px] text-neutral-500">Customer Messages</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-neutral-800 text-xs sm:text-sm font-bold overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Tours Management' },
            { id: 'bookings', label: `Bookings (${bookings.length})` },
            { id: 'inquiries', label: `Inquiries (${inquiries.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-4 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-400 font-extrabold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Tours Management */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            
            <div className="flex items-center justify-between gap-4">
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  value={packageSearch}
                  onChange={(e) => setPackageSearch(e.target.value)}
                  placeholder="Search packages by title..."
                  className="w-full pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs outline-none"
                />
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Tour</span>
              </button>
            </div>

            {/* Tours Table */}
            <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-neutral-900/60">
              <table className="w-full text-left text-xs text-neutral-300">
                <thead className="bg-neutral-900 border-b border-neutral-800 uppercase text-[10px] text-neutral-500 font-bold">
                  <tr>
                    <th className="p-4">Package</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Duration</th>
                    <th className="p-4">Discounted Price</th>
                    <th className="p-4">Regular Price</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 font-medium">
                  {filteredTours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-neutral-850/60 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <img
                          src={tour.featuredImage}
                          alt={tour.titleEn}
                          className="w-12 h-12 rounded-xl object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="font-bold text-white text-xs">{tour.titleEn}</div>
                          <div className="text-[11px] text-neutral-400">{tour.titleBn}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 text-[10px] uppercase font-bold">
                          {tour.category}
                        </span>
                      </td>
                      <td className="p-4 font-mono">{tour.durationTextEn}</td>
                      <td className="p-4 font-mono font-bold text-emerald-400">{formatCurrency(tour.priceDiscounted)}</td>
                      <td className="p-4 font-mono text-neutral-500 line-through">{formatCurrency(tour.priceRegular)}</td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => onDeleteTour(tour.id)}
                          className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                          title="Delete Package"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Tab 2: Bookings */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            
            {/* Filter buttons */}
            <div className="flex items-center gap-2 text-xs">
              {(['all', 'confirmed', 'pending', 'completed'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setBookingFilter(st)}
                  className={`px-3 py-1.5 rounded-xl font-bold uppercase text-[10px] transition-colors ${
                    bookingFilter === st
                      ? 'bg-purple-600 text-white'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Bookings Table */}
            <div className="overflow-x-auto rounded-3xl border border-neutral-800 bg-neutral-900/60">
              <table className="w-full text-left text-xs text-neutral-300">
                <thead className="bg-neutral-900 border-b border-neutral-800 uppercase text-[10px] text-neutral-500 font-bold">
                  <tr>
                    <th className="p-4">Code / Date</th>
                    <th className="p-4">Traveler</th>
                    <th className="p-4">Tour Package</th>
                    <th className="p-4">Seats</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 font-medium">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-neutral-850/60 transition-colors">
                      <td className="p-4 font-mono">
                        <div className="font-bold text-white text-xs">{b.bookingCode}</div>
                        <div className="text-[10px] text-neutral-500">{b.travelDate}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-white">{b.customerName}</div>
                        <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                          <Phone className="w-3 h-3 text-emerald-400" />
                          <span>{b.customerPhone}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-white truncate max-w-xs">{b.packageTitleEn}</div>
                        <div className="text-[10px] text-neutral-500">Method: {b.paymentMethod.toUpperCase()}</div>
                      </td>
                      <td className="p-4 font-mono">{b.travelersCount.adults} Adults</td>
                      <td className="p-4 font-mono">
                        <span className="font-bold text-emerald-400">{formatCurrency(b.totalPrice)}</span>
                      </td>
                      <td className="p-4">
                        <select
                          value={b.bookingStatus}
                          onChange={(e) => onUpdateBookingStatus(b.id, e.target.value as any)}
                          className="bg-neutral-800 border border-neutral-700 text-[11px] rounded-lg px-2 py-1 outline-none font-bold text-white cursor-pointer"
                        >
                          <option value="confirmed">Confirmed</option>
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="p-4 text-right space-x-1.5 whitespace-nowrap">
                        <a
                          href={`https://wa.me/88${b.customerPhone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(b.customerName)},%20regarding%20your%20booking%20${b.bookingCode}%20at%20Cholo%20Ghuri%20Bangladesh.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 inline-flex items-center"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                        </a>
                        <button
                          onClick={() => onSelectBooking(b)}
                          className="p-1.5 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 inline-flex items-center"
                          title="View Official Voucher"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Tab 3: Customer Inquiries */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-5 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm">{inq.name}</h4>
                      <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-2">
                        <span>{inq.phone}</span>
                        <span>•</span>
                        <span>{inq.email}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-mono">{inq.createdAt}</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-xs text-neutral-300">
                    <span className="font-bold text-emerald-400 block mb-1">{inq.subject}</span>
                    <p className="leading-relaxed">{inq.message}</p>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <a
                      href={`tel:${inq.phone}`}
                      className="px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/88${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.name)},%20thank%20you%20for%20contacting%20Cholo%20Ghuri%20Bangladesh.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 fill-current" />
                      <span>WhatsApp Reply</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Add Tour Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-2xl text-neutral-100 space-y-5">
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Plus className="w-5 h-5 text-purple-400" />
                <span>Add New Tour Package</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTour} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold block mb-1">Package Title (Bangla) *</label>
                  <input
                    type="text"
                    required
                    value={newTitleBn}
                    onChange={(e) => setNewTitleBn(e.target.value)}
                    placeholder="e.g. বান্দরবান মেঘের রাজ্য ট্যুর"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold block mb-1">Package Title (English) *</label>
                  <input
                    type="text"
                    required
                    value={newTitleEn}
                    onChange={(e) => setNewTitleEn(e.target.value)}
                    placeholder="e.g. Bandarban Cloud Kingdom Tour"
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="font-bold block mb-1">Category *</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl outline-none"
                  >
                    <option value="natural">Natural Beauty</option>
                    <option value="historical">Historical Heritage</option>
                    <option value="beach">Beach & Coral</option>
                    <option value="hill">Hills & Clouds</option>
                    <option value="haor">Haor & Houseboat</option>
                    <option value="daytrip">Budget Day Trip</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold block mb-1">Discounted Price (৳) *</label>
                  <input
                    type="number"
                    required
                    value={newPriceDiscounted}
                    onChange={(e) => setNewPriceDiscounted(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl font-mono outline-none text-emerald-400 font-bold"
                  />
                </div>

                <div>
                  <label className="font-bold block mb-1">Regular Price (৳) *</label>
                  <input
                    type="number"
                    required
                    value={newPriceRegular}
                    onChange={(e) => setNewPriceRegular(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-xl font-mono outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold block mb-1">Featured Photo Image URL *</label>
                <input
                  type="url"
                  required
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3.5 py-2 bg-neutral-950 border border-neutral-800 rounded-xl font-mono outline-none"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Short Tagline (Bangla)</label>
                <input
                  type="text"
                  value={newTaglineBn}
                  onChange={(e) => setNewTaglineBn(e.target.value)}
                  placeholder="e.g. পাহাড়ের চূড়া ও মেঘের দেশে রোমাঞ্চকর ৩ দিন"
                  className="w-full px-3.5 py-2 bg-neutral-950 border border-neutral-800 rounded-xl outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Publish Package to Website
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
