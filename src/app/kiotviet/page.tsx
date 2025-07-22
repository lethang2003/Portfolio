"use client";

import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

export default function KiotVietPage() {
  const [language, setLanguage] = useState<'vi' | 'en'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = {
    vi: {
      title: 'BẢNG BÁO GIÁ',
      subtitle: 'PHẦN MỀM KIOTVIET',
      note: 'Kèm hóa đơn điện tử và chữ ký số',
      support: 'GÓI HỖ TRỢ',
      supportPricing: [
        {
          duration: '12 tháng',
          price: '3.000.000 VNĐ',
          bonus: ['Tặng 5.000 HĐĐT (1.400.000 VNĐ)', '12 tháng chữ ký số (800.000 VNĐ)']
        },
        {
          duration: '24 tháng',
          price: '5.700.000 VNĐ',
          bonus: ['Tặng 5.000 HĐĐT (1.400.000 VNĐ)', '24 tháng chữ ký số (1.280.000 VNĐ)']
        },
        {
          duration: '60 tháng',
          price: '11.900.000 VNĐ',
          bonus: ['Tặng 5.000 HĐĐT (1.400.000 VNĐ)', '60 tháng chữ ký số (1.920.000 VNĐ)']
        }
      ],
      professional: 'GÓI CHUYÊN NGHIỆP',
      professionalPricing: [
        {
          duration: '12 tháng',
          price: '3.520.000 VNĐ',
          bonus: ['Tặng 20.000 HĐĐT (3.800.000 VNĐ)', '12 tháng chữ ký số (800.000 VNĐ)']
        },
        {
          duration: '24 tháng',
          price: '7.140.000 VNĐ',
          bonus: ['Tặng máy in + máy quét', '20.000 HĐĐT + 24 tháng chữ ký số']
        },
        {
          duration: '60 tháng',
          price: '16.000.000 VNĐ',
          bonus: ['Tặng máy in + máy quét', '20.000 HĐĐT + 60 tháng chữ ký số']
        }
      ],
      premium: 'GÓI CAO CẤP',
      premiumPricing: [
        {
          duration: '12 tháng',
          price: '5.580.000 VNĐ',
          bonus: ['Tặng 50.000 HĐĐT (8.000.000 VNĐ)', '12 tháng chữ ký số (800.000 VNĐ)']
        },
        {
          duration: '24 tháng',
          price: '10.860.000 VNĐ',
          bonus: ['Tặng máy in + máy quét', '50.000 HĐĐT + 24 tháng chữ ký số']
        },
        {
          duration: '60 tháng',
          price: '25.200.000 VNĐ',
          bonus: ['Tặng máy in + máy quét', '50.000 HĐĐT + 60 tháng chữ ký số']
        }
      ],
      contact: 'Thông Tin Liên Hệ',
      company: 'Công ty Cổ phần Công nghệ KiotViet',
      address: '199 Võ Văn Kiệt, P. An Hòa, Q. Bình Thủy, Tp. Cần Thơ',
      consultant: 'Nhân viên tư vấn',
      hotline: 'Tổng đài hỗ trợ',
      hotlineTime: '(8h00 - 22h00 mỗi ngày)',
      taxNote: 'Giá đã bao gồm thuế GTGT và miễn phí khởi tạo gian hàng ban đầu',
      footer: 'Chọn gói phù hợp với doanh nghiệp của bạn'
    },
    en: {
      title: 'PRICING TABLE',
      subtitle: 'KIOTVIET SOFTWARE',
      note: 'Includes e-invoices and digital signature',
      support: 'SUPPORT PACKAGE',
      supportPricing: [
        {
          duration: '12 months',
          price: '3,000,000 VND',
          bonus: ['Bonus 5,000 e-invoices (1,400,000 VND)', '12 months digital signature (800,000 VND)']
        },
        {
          duration: '24 months',
          price: '5,700,000 VND',
          bonus: ['Bonus 5,000 e-invoices (1,400,000 VND)', '24 months digital signature (1,280,000 VND)']
        },
        {
          duration: '60 months',
          price: '11,900,000 VND',
          bonus: ['Bonus 5,000 e-invoices (1,400,000 VND)', '60 months digital signature (1,920,000 VND)']
        }
      ],
      professional: 'PROFESSIONAL PACKAGE',
      professionalPricing: [
        {
          duration: '12 months',
          price: '3,520,000 VND',
          bonus: ['Bonus 20,000 e-invoices (3,800,000 VND)', '12 months digital signature (800,000 VND)']
        },
        {
          duration: '24 months',
          price: '7,140,000 VND',
          bonus: ['Bonus printer + scanner', '20,000 e-invoices + 24 months digital signature']
        },
        {
          duration: '60 months',
          price: '16,000,000 VND',
          bonus: ['Bonus printer + scanner', '20,000 e-invoices + 60 months digital signature']
        }
      ],
      premium: 'PREMIUM PACKAGE',
      premiumPricing: [
        {
          duration: '12 months',
          price: '5,580,000 VND',
          bonus: ['Bonus 50,000 e-invoices (8,000,000 VND)', '12 months digital signature (800,000 VND)']
        },
        {
          duration: '24 months',
          price: '10,860,000 VND',
          bonus: ['Bonus printer + scanner', '50,000 e-invoices + 24 months digital signature']
        },
        {
          duration: '60 months',
          price: '25,200,000 VND',
          bonus: ['Bonus printer + scanner', '50,000 e-invoices + 60 months digital signature']
        }
      ],
      contact: 'Contact Information',
      company: 'KiotViet Technology Joint Stock Company',
      address: '199 Vo Van Kiet, An Hoa Ward, Binh Thuy District, Can Tho City',
      consultant: 'Consultant',
      hotline: 'Support Hotline',
      hotlineTime: '(8:00 AM - 10:00 PM daily)',
      taxNote: 'Price includes VAT and free initial store setup',
      footer: 'Choose the right plan for your business'
    }
  }[language];

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto space-y-16 min-h-screen">
      <div className="absolute top-4 right-4 z-50">
        <button
  onClick={toggleLanguage}
  title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1.5 rounded-full backdrop-blur border border-white/20 shadow transition-all"
>
  <FaGlobe className="text-white" />
  {language === 'vi' ? 'EN' : 'VI'}
</button>
      </div>

      <div className="relative flex flex-col justify-center items-center z-10 text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
          {t.subtitle}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {t.note}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{
          name: t.support,
          color: 'cyan-400',
          data: t.supportPricing
        }, {
          name: t.professional,
          color: 'purple-400',
          data: t.professionalPricing
        }, {
          name: t.premium,
          color: 'pink-400',
          data: t.premiumPricing
        }].map((pkg, i) => (
          <div key={i} className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-white/30 transition-all duration-500">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="space-y-4">
                {pkg.data.map((item, idx) => (
                  <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="text-white font-semibold mb-2">{item.duration}: {item.price}</div>
                    <div className="text-gray-300 text-sm space-y-1">
                      {item.bonus.map((line, i) => (<div key={i}>✓ {line}</div>))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-20">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t.contact}</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-cyan-400 mt-1">🏢</div>
                <div>
                  <div className="font-semibold text-white">{t.company}</div>
                  <div className="text-gray-400">{t.address}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-purple-400">👨‍💼</div>
                <div>
                  <span className="font-semibold text-white">{t.consultant}: </span>
                  <span className="text-purple-400 font-semibold">0343 690 062 (Hùng Thắng)</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-pink-400">📞</div>
                <div>
                  <span className="font-semibold text-white">{t.hotline}: </span>
                  <span className="text-pink-400 font-semibold">1900 6522</span>
                  <div className="text-gray-400 text-sm">{t.hotlineTime}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm italic">{t.taxNote}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center mt-20">
        <div className="inline-flex items-center gap-3 text-gray-400">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <span className="text-sm font-medium">{t.footer}</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
