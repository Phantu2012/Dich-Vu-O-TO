import React, { useState } from 'react';

// !!! IMPORTANT: Replace this URL with your own Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvAgbhWo7buY8A882-xLcVG-Q2lnPKmFvBE6PpakYQaei3B55k19ywU8Gy2EPhA1PF/exec'; // <-- PASTE YOUR URL HERE

const CtaForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dealership, setDealership] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !dealership) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('HoVaTen', name);
    formData.append('SoDienThoai', phone);
    formData.append('TenDaiLy', dealership);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setName('');
          setPhone('');
          setDealership('');
        }, 5000);
      } else {
        throw new Error(result.error || 'An unknown error occurred.');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setError('Đã có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta-form" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SẴN SÀNG TRAO ĐỔI VỀ MỘT GIẢI PHÁP THỰC TẾ?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Mỗi đại lý có một câu chuyện và những thách thức riêng. Hãy chia sẻ với tôi vấn đề của bạn. Buổi trao đổi đầu tiên sẽ hoàn toàn không tốn chi phí, nhưng có thể sẽ mở ra một hướng đi mới cho phòng dịch vụ của bạn.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-8">
          {submitted ? (
            <div className="bg-green-500/10 border-l-4 border-green-500 text-green-300 p-4 rounded-md text-center" role="alert">
              <p className="font-bold">Cảm ơn bạn đã đăng ký!</p>
              <p>Chuyên gia Phan Anh Tú sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-2xl space-y-6 border border-slate-700">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Họ và Tên</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 text-white"
                  placeholder="Nguyễn Văn A"
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300">Số điện thoại</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 text-white"
                  placeholder="09xxxxxxxx"
                  required 
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="dealership" className="block text-sm font-medium text-slate-300">Tên Đại lý</label>
                <input 
                  type="text" 
                  id="dealership"
                  value={dealership}
                  onChange={(e) => setDealership(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 text-white"
                  placeholder="Công ty Cổ phần Ô tô XYZ"
                  required 
                  disabled={isSubmitting}
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 shadow-lg shadow-orange-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-orange-600 disabled:bg-slate-600 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ĐANG GỬI...' : 'ĐẶT LỊCH TRAO ĐỔI CÙNG CHUYÊN GIA'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaForm;