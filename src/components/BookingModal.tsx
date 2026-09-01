import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Users, 
  Bus, 
  BedDouble, 
  CreditCard, 
  ShieldCheck, 
  Check, 
  Sparkles,
  Phone,
  Mail,
  User as UserIcon,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { TourPackage, Booking } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface BookingModalProps {
  tour: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (newBooking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  tour,
  isOpen,
  onClose,
  onBookingSuccess,
}) => {
  const { language, t, formatCurrency, formatNumber } = useLanguage();
  const { user } = useAuth();

  // Form State
  const [customerName, setCustomerName] = useState(user?.name || '');
  const [customerPhone, setCustomerPhone] = useState(user?.phone || '');
  const [customerEmail, setCustomerEmail] = useState(user?.email || '');
  const [travelDate, setTravelDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [transportType, setTransportType] = useState<'ac_bus' | 'non_ac_bus' | 'sedan_hiace' | 'train'>('non_ac_bus');
  const [roomType, setRoomType] = useState<'couple' | 'twin' | 'family' | 'dormitory'>('twin');
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'nagad' | 'rocket' | 'bank' | 'cash_office'>('bkash');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  useEffect(() => {
    if (tour && tour.upcomingDates && tour.upcomingDates.length > 0) {
      setTravelDate(tour.upcomingDates[0]);
    }
    if (user) {
      if (!customerName) setCustomerName(user.name);
      if (!customerEmail) setCustomerEmail(user.email);
      if (!customerPhone && user.phone) setCustomerPhone(user.phone);
    }
  }, [tour, user]);

  if (!isOpen || !tour) return null;

  // Pricing math
  const basePerAdult = tour.priceDiscounted;
  const basePerChild = Math.round(tour.priceDiscounted * 0.7); // 30% discount for children

  let transportSurchargePerPerson = 0;
  if (transportType === 'ac_bus') transportSurchargePerPerson = 1000;
  if (transportType === 'sedan_hiace') transportSurchargePerPerson = 1500;

  let roomSurcharge = 0;
  if (roomType === 'couple') roomSurcharge = 1000;

  const totalAdultCost = adults * (basePerAdult + transportSurchargePerPerson);
  const totalChildCost = childrenCount * (basePerChild + transportSurchargePerPerson);
  const grandTotal = totalAdultCost + totalChildCost + roomSurcharge;
  const minimumAdvance = Math.round(grandTotal * 0.3);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please provide your name and phone number');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newBooking: Booking = {
      id: 'bk_' + Date.now(),
      bookingCode: `CGB-2026-${randomNum}`,
      packageId: tour.id,
      packageTitleBn: tour.titleBn,
      packageTitleEn: tour.titleEn,
      packageImage: tour.featuredImage,
      userId: user?.id,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim() || 'traveler@chologhuri.com',
      travelDate: travelDate || 'Flexible Upcoming Batch',
      travelersCount: { adults, children: childrenCount },
      transportType,
      roomType,
      totalPrice: grandTotal,
      paidAmount: minimumAdvance,
      paymentMethod,
      paymentStatus: 'partial',
      bookingStatus: 'confirmed',
      specialRequirements: specialRequirements.trim(),
      createdAt: new Date().toISOString().split('T')[0]
    };

    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 }
    });

    onBookingSuccess(newBooking);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-3xl max-h-[92vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-neutral-900 dark:text-neutral-100 flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-emerald-600 text-white">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-emerald-200" />
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                {t('bookingModalTitle')}
              </h3>
              <p className="text-xs text-emerald-100 truncate max-w-sm sm:max-w-md">
                {language === 'bn' ? tour.titleBn : tour.titleEn} (
                {language === 'bn' ? tour.durationTextBn : tour.durationTextEn})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white hover:bg-emerald-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmitBooking} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Step 1: Passenger Personal Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <UserIcon className="w-3.5 h-3.5 text-emerald-500" />
              <span>১. {t('passengerInfo')}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('travelerName')} *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Imran Ahmed"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs sm:text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('travelerPhone')} *
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="01712345678"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs sm:text-sm font-mono outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('travelerEmail')}
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="traveler@gmail.com"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs sm:text-sm outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Date & Group Size */}
          <div className="space-y-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              <span>২. {language === 'bn' ? 'তারিখ ও যাত্রী সংখ্যা' : 'Date & Group Size'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('selectTravelDate')} *
                </label>
                <select
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs sm:text-sm outline-none font-semibold cursor-pointer"
                >
                  {tour.upcomingDates.map((dt, i) => (
                    <option key={i} value={dt}>{dt}</option>
                  ))}
                  <option value="Custom Date via Hotline">
                    {language === 'bn' ? 'কাস্টম তারিখ (হটলাইনে কথা বলব)' : 'Custom Date (Via Hotline)'}
                  </option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('adultCount')} (৳{formatNumber(basePerAdult)})
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-10 h-10 rounded-xl border border-neutral-300 dark:border-neutral-700 font-bold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold font-mono text-sm">{formatNumber(adults)}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-10 h-10 rounded-xl border border-neutral-300 dark:border-neutral-700 font-bold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('childCount')} (৳{formatNumber(basePerChild)})
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                    className="w-10 h-10 rounded-xl border border-neutral-300 dark:border-neutral-700 font-bold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold font-mono text-sm">{formatNumber(childrenCount)}</span>
                  <button
                    type="button"
                    onClick={() => setChildrenCount(childrenCount + 1)}
                    className="w-10 h-10 rounded-xl border border-neutral-300 dark:border-neutral-700 font-bold text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Transport & Room Preference */}
          <div className="space-y-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <Bus className="w-3.5 h-3.5 text-emerald-500" />
              <span>৩. {language === 'bn' ? 'যাতায়াত ও রুম পছন্দ' : 'Transport & Room Class'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('transportPreference')}
                </label>
                <select
                  value={transportType}
                  onChange={(e) => setTransportType(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs sm:text-sm outline-none cursor-pointer"
                >
                  <option value="non_ac_bus">{t('transportNonAcBus')}</option>
                  <option value="ac_bus">{t('transportAcBus')}</option>
                  <option value="sedan_hiace">{t('transportSedanHiace')}</option>
                  <option value="train">{t('transportTrain')}</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('roomPreference')}
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs sm:text-sm outline-none cursor-pointer"
                >
                  <option value="twin">{t('roomTwin')}</option>
                  <option value="couple">{t('roomCouple')}</option>
                  <option value="family">{t('roomFamily')}</option>
                  <option value="dormitory">{t('roomDorm')}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                {t('specialNotes')}
              </label>
              <input
                type="text"
                value={specialRequirements}
                onChange={(e) => setSpecialRequirements(e.target.value)}
                placeholder="e.g. Need window seats, vegetarian food, ground floor room..."
                className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl text-xs outline-none"
              />
            </div>
          </div>

          {/* Step 4: Payment Method */}
          <div className="space-y-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-emerald-500" />
              <span>৪. {t('paymentMethodTitle')}</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'bkash', label: 'bKash (বিকাশ)', color: 'border-pink-500 text-pink-600 dark:text-pink-400' },
                { id: 'nagad', label: 'Nagad (নগদ)', color: 'border-orange-500 text-orange-600 dark:text-orange-400' },
                { id: 'bank', label: 'Bank Transfer', color: 'border-blue-500 text-blue-600 dark:text-blue-400' },
                { id: 'cash_office', label: 'Pay at Office', color: 'border-emerald-500 text-emerald-600 dark:text-emerald-400' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPaymentMethod(m.id as any)}
                  className={`p-3 rounded-2xl border text-xs font-bold text-center transition-all ${
                    paymentMethod === m.id
                      ? `bg-emerald-500/10 border-emerald-500 ring-2 ring-emerald-500/30 text-emerald-600 dark:text-emerald-400`
                      : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/60 opacity-80'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 italic">
              {t('advancePayNotice')}
            </p>
          </div>

          {/* Pricing Calculation Summary Box */}
          <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-500/30 space-y-2 text-xs">
            <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
              <span>
                {language === 'bn' ? 'প্রাপ্তবয়স্ক যাত্রী' : 'Adult Passengers'} ({formatNumber(adults)} × {formatCurrency(basePerAdult)})
              </span>
              <span className="font-mono font-bold">{formatCurrency(adults * basePerAdult)}</span>
            </div>

            {childrenCount > 0 && (
              <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
                <span>
                  {language === 'bn' ? 'শিশু যাত্রী' : 'Child Passengers'} ({formatNumber(childrenCount)} × {formatCurrency(basePerChild)})
                </span>
                <span className="font-mono font-bold">{formatCurrency(childrenCount * basePerChild)}</span>
              </div>
            )}

            {transportSurchargePerPerson > 0 && (
              <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
                <span>{language === 'bn' ? 'এসি/প্রাইভেট ট্রান্সপোর্ট চার্জ' : 'Transport Upgrade Surcharge'}</span>
                <span className="font-mono font-bold">+{formatCurrency((adults + childrenCount) * transportSurchargePerPerson)}</span>
              </div>
            )}

            {roomSurcharge > 0 && (
              <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
                <span>{language === 'bn' ? 'কাপল প্রাইভেট রুম চার্জ' : 'Couple Private Room Surcharge'}</span>
                <span className="font-mono font-bold">+{formatCurrency(roomSurcharge)}</span>
              </div>
            )}

            <div className="pt-2 border-t border-emerald-500/30 flex justify-between items-baseline">
              <span className="text-sm font-bold text-neutral-900 dark:text-white">
                {t('grandTotal')}:
              </span>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400 block">
                  {formatCurrency(grandTotal)}
                </span>
                <span className="text-[10px] text-neutral-500 font-normal">
                  ({language === 'bn' ? 'অগ্রিম প্রদেয় নূন্যতম ৩০%:' : 'Min 30% Advance:'} {formatCurrency(minimumAdvance)})
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-transform active:scale-98 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('confirmBookingBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
