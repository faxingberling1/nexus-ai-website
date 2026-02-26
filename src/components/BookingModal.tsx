'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Video, Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const platforms = [
    { id: 'google-meet', name: 'Google Meet', icon: '🌐' },
    { id: 'zoom', name: 'Zoom', icon: '📹' },
    { id: 'teams', name: 'Microsoft Teams', icon: '👥' },
    { id: 'phone', name: 'Phone Call', icon: '📞' }
];

const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState(platforms[0].id);
    const [selectedTimezone, setSelectedTimezone] = useState("(UTC−05:00) Eastern Time (US & Canada)");
    const [isTzOpen, setIsTzOpen] = useState(false);
    const [tzSearch, setTzSearch] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
    const [captcha, setCaptcha] = useState({ q: '', a: 0 });
    const [userCaptcha, setUserCaptcha] = useState('');
    const [captchaError, setCaptchaError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Simple Calendar Logic
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const generateCaptcha = () => {
        const n1 = Math.floor(Math.random() * 10) + 1;
        const n2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ q: `${n1} + ${n2}`, a: n1 + n2 });
        setUserCaptcha('');
        setCaptchaError(false);
    };

    React.useEffect(() => {
        generateCaptcha();
    }, [isOpen]);

    const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const handleMonthChange = (offset: number) => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (parseInt(userCaptcha) !== captcha.a) {
            setCaptchaError(true);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    platform: selectedPlatform,
                    timezone: selectedTimezone,
                    date: selectedDate?.toLocaleDateString(),
                    time: selectedTime
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
            }
        } catch (error) {
            console.error('Booking failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const allTimezones = [
        { isCategory: true, label: "International / Pacific / Americas" },
        { offset: "(UTC−12:00)", label: "International Date Line West" },
        { offset: "(UTC−11:00)", label: "Coordinated Universal Time-11" },
        { offset: "(UTC−11:00)", label: "Samoa" },
        { offset: "(UTC−10:00)", label: "Hawaii" },
        { offset: "(UTC−09:00)", label: "Alaska" },
        { offset: "(UTC−08:00)", label: "Pacific Time (US & Canada)" },
        { offset: "(UTC−08:00)", label: "Baja California" },
        { offset: "(UTC−07:00)", label: "Mountain Time (US & Canada)" },
        { offset: "(UTC−07:00)", label: "Arizona" },
        { offset: "(UTC−07:00)", label: "Chihuahua, La Paz, Mazatlan" },
        { offset: "(UTC−06:00)", label: "Central Time (US & Canada)" },
        { offset: "(UTC−06:00)", label: "Central America" },
        { offset: "(UTC−06:00)", label: "Saskatchewan" },
        { offset: "(UTC−06:00)", label: "Guadalajara, Mexico City, Monterrey" },
        { offset: "(UTC−05:00)", label: "Eastern Time (US & Canada)" },
        { offset: "(UTC−05:00)", label: "Indiana (East)" },
        { offset: "(UTC−05:00)", label: "Bogota, Lima, Quito" },
        { offset: "(UTC−04:00)", label: "Atlantic Time (Canada)" },
        { offset: "(UTC−04:30)", label: "Caracas" },
        { offset: "(UTC−04:00)", label: "La Paz" },
        { offset: "(UTC−04:00)", label: "Santiago" },
        { offset: "(UTC−03:30)", label: "Newfoundland" },
        { isCategory: true, label: "South America / Atlantic" },
        { offset: "(UTC−03:00)", label: "Brasilia" },
        { offset: "(UTC−03:00)", label: "Buenos Aires" },
        { offset: "(UTC−03:00)", label: "Montevideo" },
        { offset: "(UTC−03:00)", label: "Greenland" },
        { isCategory: true, label: "Europe / Africa / Middle East" },
        { offset: "(UTC+00:00)", label: "Greenwich Mean Time" },
        { offset: "(UTC+00:00)", label: "Dublin, Edinburgh, Lisbon, London" },
        { offset: "(UTC+00:00)", label: "Monrovia, Reykjavik" },
        { offset: "(UTC+01:00)", label: "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" },
        { offset: "(UTC+01:00)", label: "Belgrade, Bratislava, Budapest, Ljubljana, Prague" },
        { offset: "(UTC+01:00)", label: "Brussels, Copenhagen, Madrid, Paris" },
        { offset: "(UTC+01:00)", label: "Sarajevo, Skopje, Warsaw, Zagreb" },
        { offset: "(UTC+01:00)", label: "West Central Africa" },
        { offset: "(UTC+02:00)", label: "Athens, Bucharest" },
        { offset: "(UTC+02:00)", label: "Istanbul" },
        { offset: "(UTC+02:00)", label: "Cairo" },
        { offset: "(UTC+02:00)", label: "Harare, Pretoria" },
        { offset: "(UTC+02:00)", label: "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius" },
        { offset: "(UTC+02:00)", label: "Jerusalem" },
        { offset: "(UTC+03:00)", label: "Moscow, St. Petersburg" },
        { offset: "(UTC+03:00)", label: "Baghdad" },
        { offset: "(UTC+03:00)", label: "Kuwait, Riyadh" },
        { offset: "(UTC+03:30)", label: "Tehran" },
        { offset: "(UTC+04:00)", label: "Abu Dhabi, Muscat" },
        { offset: "(UTC+04:00)", label: "Baku" },
        { offset: "(UTC+04:00)", label: "Tbilisi" },
        { offset: "(UTC+04:00)", label: "Yerevan" },
        { isCategory: true, label: "Asia / South Asia / Central Asia" },
        { offset: "(UTC+04:30)", label: "Kabul" },
        { offset: "(UTC+05:00)", label: "Islamabad, Karachi" },
        { offset: "(UTC+05:00)", label: "Ekaterinburg" },
        { offset: "(UTC+05:00)", label: "Tashkent" },
        { offset: "(UTC+05:30)", label: "Chennai, Kolkata, Mumbai, New Delhi" },
        { offset: "(UTC+05:30)", label: "Sri Jayawardenepura" },
        { offset: "(UTC+05:45)", label: "Kathmandu" },
        { offset: "(UTC+06:00)", label: "Dhaka" },
        { offset: "(UTC+06:00)", label: "Bhutan" },
        { offset: "(UTC+06:30)", label: "Yangon (Rangoon)" },
        { offset: "(UTC+07:00)", label: "Bangkok, Hanoi, Jakarta" },
        { offset: "(UTC+07:00)", label: "Krasnoyarsk" },
        { offset: "(UTC+08:00)", label: "Beijing, Chongqing, Hong Kong, Urumqi" },
        { offset: "(UTC+08:00)", label: "Kuala Lumpur, Singapore" },
        { offset: "(UTC+08:00)", label: "Perth" },
        { offset: "(UTC+08:00)", label: "Taipei" },
        { offset: "(UTC+08:00)", label: "Irkutsk" },
        { offset: "(UTC+08:00)", label: "Ulaanbaatar" },
        { isCategory: true, label: "East Asia / Oceania / Australia" },
        { offset: "(UTC+09:00)", label: "Osaka, Sapporo, Tokyo" },
        { offset: "(UTC+09:00)", label: "Seoul" },
        { offset: "(UTC+09:00)", label: "Yakutsk" },
        { offset: "(UTC+09:30)", label: "Adelaide" },
        { offset: "(UTC+09:30)", label: "Darwin" },
        { offset: "(UTC+10:00)", label: "Brisbane" },
        { offset: "(UTC+10:00)", label: "Canberra, Melbourne, Sydney" },
        { offset: "(UTC+10:00)", label: "Hobart" },
        { offset: "(UTC+10:00)", label: "Vladivostok" },
        { offset: "(UTC+10:30)", label: "Lord Howe Island" },
        { offset: "(UTC+11:00)", label: "Solomon Islands, New Caledonia" },
        { offset: "(UTC+12:00)", label: "Auckland, Wellington" },
        { offset: "(UTC+12:00)", label: "Fiji" },
        { offset: "(UTC+12:00)", label: "Kamchatka" },
        { offset: "(UTC+12:45)", label: "Chatham Islands" },
        { offset: "(UTC+13:00)", label: "Nuku’alofa" },
        { offset: "(UTC+13:00)", label: "Samoa" },
        { offset: "(UTC+14:00)", label: "Line Islands" }
    ];

    const filteredTimezones = tzSearch
        ? allTimezones.filter(tz => !tz.isCategory && `${tz.offset} ${tz.label}`.toLowerCase().includes(tzSearch.toLowerCase()))
        : allTimezones;


    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 sm:gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                />

                <div className="relative flex flex-col md:flex-row items-stretch gap-4 max-w-5xl w-full h-[90vh] md:h-[600px] pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full md:w-[640px] bg-[#121212] border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-white font-outfit">Book a Strategy Call</h3>
                                <p className="text-white/40 text-sm mt-1">Select a time that works for you.</p>
                            </div>
                            <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8 overflow-y-auto">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit}>
                                    {step === 1 && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {/* Date Selection */}
                                                <div className="space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Select Date</h4>
                                                        <div className="flex gap-2">
                                                            <button type="button" onClick={() => handleMonthChange(-1)} className="p-1 text-white/40 hover:text-white"><ChevronLeft size={16} /></button>
                                                            <button type="button" onClick={() => handleMonthChange(1)} className="p-1 text-white/40 hover:text-white"><ChevronRight size={16} /></button>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                                        <div className="text-center mb-4 text-xs font-bold text-[#FF6A00]">
                                                            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                                        </div>
                                                        <div className="grid grid-cols-7 gap-1 text-[10px] text-white/20 mb-2 text-center uppercase font-bold">
                                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={`${d}-${i}`}>{d}</div>)}
                                                        </div>
                                                        <div className="grid grid-cols-7 gap-1">
                                                            {Array.from({ length: firstDayOfMonth(currentMonth) }).map((_, i) => <div key={`empty-${i}`} />)}
                                                            {Array.from({ length: daysInMonth(currentMonth) }).map((_, i) => {
                                                                const day = i + 1;
                                                                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                                                const isSelected = selectedDate?.toDateString() === date.toDateString();
                                                                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                                                                return (
                                                                    <button
                                                                        key={day}
                                                                        type="button"
                                                                        disabled={isPast}
                                                                        onClick={() => setSelectedDate(date)}
                                                                        className={`aspect-square rounded-lg flex items-center justify-center text-xs transition-all ${isSelected ? 'bg-[#FF6A00] text-white' : isPast ? 'text-white/5 cursor-not-allowed' : 'text-white/60 hover:bg-white/10'}`}
                                                                    >
                                                                        {day}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Time Selection */}
                                                <div className="space-y-4">
                                                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Select Time</h4>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {timeSlots.map(time => (
                                                            <button
                                                                key={time}
                                                                type="button"
                                                                onClick={() => setSelectedTime(time)}
                                                                className={`py-3 rounded-xl border text-xs font-medium transition-all ${selectedTime === time ? 'bg-[#FF6A00]/10 border-[#FF6A00] text-[#FF6A00]' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'}`}
                                                            >
                                                                {time}
                                                            </button>
                                                        ))}
                                                    </div>

                                                    <div className="space-y-4 pt-2">
                                                        <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Timezone</label>
                                                        <div className="relative group">
                                                            <button
                                                                type="button"
                                                                onClick={() => setIsTzOpen(true)}
                                                                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-xs text-white flex items-center justify-between group-hover:border-white/20 transition-all outline-none ${isTzOpen ? 'border-[#FF6A00]' : 'border-white/10'}`}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-[#FF6A00]">🌐</span>
                                                                    <span className="truncate max-w-[180px]">{selectedTimezone}</span>
                                                                </div>
                                                                <ChevronRight size={14} className={`text-white/20 transition-transform ${isTzOpen ? 'translate-x-1' : ''}`} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                disabled={!selectedDate || !selectedTime}
                                                onClick={() => setStep(2)}
                                                className="w-full py-4 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Next Step: Your Details
                                            </button>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Full Name</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#FF6A00] outline-none transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Email Address</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#FF6A00] outline-none transition-all"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Preferred Meeting Platform</label>
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                                    {platforms.map(p => (
                                                        <button
                                                            key={p.id}
                                                            type="button"
                                                            onClick={() => setSelectedPlatform(p.id)}
                                                            className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${selectedPlatform === p.id ? 'bg-[#FF6A00]/10 border-[#FF6A00] text-[#FF6A00]' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20'}`}
                                                        >
                                                            <span className="text-lg">{p.icon}</span>
                                                            <span className="text-[10px] whitespace-nowrap">{p.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase font-bold text-white/30 ml-2">Message (Optional)</label>
                                                <textarea
                                                    value={formData.message}
                                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#FF6A00] outline-none transition-all h-24 resize-none"
                                                    placeholder="Tell us about your project..."
                                                />
                                            </div>

                                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] uppercase font-bold text-white/30">Quick Verification</label>
                                                    <p className="text-sm text-white font-medium">What is {captcha.q}?</p>
                                                </div>
                                                <div className="w-24">
                                                    <input
                                                        type="number"
                                                        required
                                                        value={userCaptcha}
                                                        onChange={(e) => setUserCaptcha(e.target.value)}
                                                        className={`w-full bg-white/5 border ${captchaError ? 'border-red-500' : 'border-white/10'} rounded-lg px-3 py-2 text-sm text-white text-center outline-none focus:border-[#FF6A00] transition-all`}
                                                        placeholder="?"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    className="flex-1 py-4 bg-white/5 text-white/40 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="flex-[2] py-4 bg-[#FF6A00] text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#FF8C33] transition-all shadow-lg shadow-[#FF6A00]/20 flex items-center justify-center gap-2"
                                                >
                                                    {isSubmitting ? 'Processing...' : (
                                                        <>Send Invitation <Send size={14} /></>
                                                    )}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </form>
                            ) : (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mx-auto">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white font-outfit">Strategy Call Requested!</h4>
                                        <p className="text-white/40 mt-2 max-w-sm mx-auto">Your request has been received. Our team will review the details and reach out to you shortly.</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 bg-white/5 text-white/60 rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
                                    >
                                        Close Window
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Side-Popup for Timezones */}
                    <AnimatePresence>
                        {isTzOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                className="w-full md:w-[320px] bg-[#1a1a1a] border border-white/10 rounded-[2rem] shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden pointer-events-auto"
                            >
                                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                    <h5 className="text-sm font-semibold text-white uppercase tracking-wider">Timezone</h5>
                                    <button onClick={() => { setIsTzOpen(false); setTzSearch(''); }} className="text-white/40 hover:text-white transition-colors">
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className="p-4 border-b border-white/5">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            autoFocus
                                            value={tzSearch}
                                            onChange={e => setTzSearch(e.target.value)}
                                            placeholder="Search markets..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#FF6A00] transition-all pl-10"
                                        />
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">
                                            <span className="text-sm">🔍</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                                    {filteredTimezones.length > 0 ? (
                                        filteredTimezones.map((tz, i) => {
                                            if (tz.isCategory) {
                                                return (
                                                    <div key={`cat-${i}`} className="px-4 py-3 mt-2 mb-1 text-[10px] font-bold uppercase tracking-widest text-[#FF6A00]/80 bg-[#FF6A00]/5 rounded-xl border border-[#FF6A00]/10">
                                                        {tz.label}
                                                    </div>
                                                );
                                            }

                                            const fullLabel = `${tz.offset} ${tz.label}`;
                                            const isSelected = selectedTimezone === fullLabel;

                                            return (
                                                <button
                                                    key={`tz-${i}`}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedTimezone(fullLabel);
                                                        setIsTzOpen(false);
                                                        setTzSearch('');
                                                    }}
                                                    className={`w-full px-4 py-3 text-left rounded-xl transition-all hover:bg-white/5 group ${isSelected ? 'bg-[#FF6A00]/10' : ''}`}
                                                >
                                                    <div className={`text-[10px] font-bold tracking-widest mb-1 ${isSelected ? 'text-[#FF6A00]' : 'text-white/40 group-hover:text-white/60'}`}>
                                                        {tz.offset}
                                                    </div>
                                                    <div className={`text-xs ${isSelected ? 'text-white' : 'text-white/60'}`}>
                                                        {tz.label}
                                                    </div>
                                                    {isSelected && (
                                                        <div className="mt-2 text-[9px] text-[#FF6A00]/60 italic font-medium">
                                                            Currently Selected
                                                        </div>
                                                    )}
                                                </button>
                                            );
                                        })
                                    ) : (
                                        <div className="px-4 py-12 text-center">
                                            <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest">No regions found</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </AnimatePresence>
    );
}
