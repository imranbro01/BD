import React from 'react';
import { 
  X, 
  Printer, 
  Share2, 
  CheckCircle, 
  Compass, 
  MapPin, 
  Calendar, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles,
  QrCode,
  MessageCircle
} from 'lucide-react';
import { Booking } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface BookingVoucherModalProps {
  booking: Booking | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingVoucherModal: React.FC<BookingVoucherModalProps> = ({
  booking,
  isOpen,
  onClose,
}) => {
  const { language, t, formatCurrency, formatNumber } = useLanguage();

  if (!isOpen || !booking) return null;

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Cholo Ghuri Bangladesh, here is my confirmed booking voucher (Code: ${booking.bookingCode}) for ${booking.packageTitleEn} on ${booking.travelDate}. Traveler: ${booking.customerName} (${booking.customerPhone}).`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-neutral-900 dark:text-neutral-100 flex flex-col overflow-hidden shadow-2xl animate-scale-up">
        
        {/* Modal Top Action Bar */}
        <div className="p-3 sm:p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold">
              {language === 'bn' ? 'অফিসিয়াল ট্যুর বুকিং ভাউচার' : 'Official Tour Booking Voucher'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t('printVoucher')}</span>
            </button>

            <a
              href={`https://wa.me/8801312816223?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Ticket Voucher Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 bg-white text-neutral-900">
          
          {/* Brand Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-emerald-600/30 gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-neutral-900">
                  {language === 'bn' ? 'চলো ঘুরি বাংলাদেশ' : 'Cholo Ghuri Bangladesh'}
                </h3>
                <p className="text-[10px] text-emerald-800 font-semibold uppercase tracking-wider">
                  Govt. Approved Tour Operator & Travel Agency
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right text-[11px] text-neutral-600 font-mono space-y-0.5">
              <div className="font-bold text-emerald-700">Hotline: 01312816223</div>
              <div>eleashahmed6223@gmail.com</div>
              <div>House 14, Road 7, Banani, Dhaka</div>
            </div>
          </div>

          {/* Booking Code & Status Banner */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                {language === 'bn' ? 'বুকিং রেফারেন্স কোড' : 'Booking Code'}
              </span>
              <span className="text-base sm:text-lg font-mono font-extrabold text-emerald-950">
                {booking.bookingCode}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-xs">
                ✓ {language === 'bn' ? 'বুকিং কনফার্মড' : 'Booking Confirmed'}
              </span>
              <span className="text-[10px] text-neutral-500 font-mono">
                {booking.createdAt}
              </span>
            </div>
          </div>

          {/* Tour & Passenger Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            
            {/* Tour Info */}
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                {language === 'bn' ? 'ট্যুর প্যাকেজ তথ্য' : 'Tour Package Details'}
              </span>
              <div className="font-bold text-sm text-neutral-900">
                {language === 'bn' ? booking.packageTitleBn : booking.packageTitleEn}
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'bn' ? 'যাত্রা তারিখ:' : 'Travel Date:'} <strong>{booking.travelDate}</strong></span>
              </div>
              <div className="text-[11px] text-neutral-500">
                <span>{language === 'bn' ? 'যাত্রী সংখ্যা:' : 'Passengers:'} </span>
                <strong>{formatNumber(booking.travelersCount.adults)} {language === 'bn' ? 'জন প্রাপ্তবয়স্ক' : 'Adults'}</strong>
                {booking.travelersCount.children > 0 && (
                  <span>, {formatNumber(booking.travelersCount.children)} {language === 'bn' ? 'জন শিশু' : 'Children'}</span>
                )}
              </div>
            </div>

            {/* Passenger Info */}
            <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                {language === 'bn' ? 'প্রধান যাত্রী ও যোগাযোগ' : 'Lead Traveler'}
              </span>
              <div className="font-bold text-sm text-neutral-900">
                {booking.customerName}
              </div>
              <div className="flex items-center gap-2 text-neutral-600 font-mono">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{booking.customerPhone}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 truncate">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>{booking.customerEmail}</span>
              </div>
            </div>

          </div>

          {/* Payment & Financials */}
          <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] text-neutral-500 block">
                {language === 'bn' ? 'পেমেন্ট মেথড:' : 'Payment Method:'} <strong className="uppercase">{booking.paymentMethod}</strong>
              </span>
              <span className="text-xs text-neutral-700">
                {language === 'bn' ? 'পরিশোধিত অগ্রিম:' : 'Paid Advance:'} <strong className="font-mono text-emerald-700">{formatCurrency(booking.paidAmount)}</strong>
              </span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-neutral-400 block uppercase font-bold">
                {language === 'bn' ? 'সর্বমোট প্যাকেজ মূল্য' : 'Total Package Cost'}
              </span>
              <span className="text-xl font-extrabold font-mono text-neutral-900">
                {formatCurrency(booking.totalPrice)}
              </span>
            </div>
          </div>

          {/* Barcode / Stamp area */}
          <div className="pt-3 border-t border-dashed border-neutral-300 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <QrCode className="w-12 h-12 text-neutral-800" />
              <div className="text-[10px] text-neutral-500 font-mono">
                <div>VERIFIED TICKET: {booking.bookingCode}</div>
                <div>24/7 SUPPORT: 01312816223</div>
              </div>
            </div>

            {/* Stamp simulation */}
            <div className="border-2 border-emerald-600/60 rounded-xl px-3 py-1 text-center rotate-[-3deg] text-emerald-700 font-bold text-[10px] uppercase">
              <div>Cholo Ghuri BD</div>
              <div className="text-[8px]">OFFICIAL SEAL</div>
            </div>
          </div>

          {/* Footer Terms */}
          <p className="text-[9px] text-neutral-400 text-center italic">
            * Please keep this digital voucher or SMS on your travel day. For any urgent changes, call our 24/7 helpline 01312816223.
          </p>

        </div>

      </div>
    </div>
  );
};
