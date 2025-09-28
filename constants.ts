import type { ProblemCard, SolutionPillar, TimelineEvent, Testimonial, FaqItem } from './types';
import { ChartBarIcon, UsersIcon, WrenchScrewdriverIcon, LockClosedIcon, BuildingLibraryIcon, PuzzlePieceIcon, UserCircleIcon, CogIcon, ArrowTrendingUpIcon } from './components/Icons';

export const problemCards: ProblemCard[] = [
  {
    icon: ChartBarIcon,
    title: 'Doanh thu ì ạch, cạnh tranh khốc liệt',
    description: 'Khách cũ mất dần, khách mới không có, bị đối thủ chèn ép giá và dịch vụ.',
  },
  {
    icon: UsersIcon,
    title: 'Nhân sự rệu rã',
    description: 'Đội ngũ CVDV làm việc thiếu hiệu suất, vô hồn, không có tinh thần chiến đấu.',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Quy trình rối loạn',
    description: 'Hệ thống vận hành như một mớ bòng bong, sự cố xảy ra không biết xử lý thế nào.',
  },
  {
    icon: LockClosedIcon,
    title: 'Lãnh đạo bị "trói chân"',
    description: 'Giám đốc không dám nghỉ một ngày vì phải xử lý mọi sự vụ nhỏ nhặt.',
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Văn hóa "ốc đảo"',
    description: 'Các phòng ban mặc kệ nhau, mệnh ai người nấy lo, thiếu sự kết nối và hợp tác.',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Bế tắc trong giải pháp',
    description: 'Tự loay hoay vá lỗi, các giải pháp rời rạc, không đồng bộ và cuối cùng thất bại.',
  },
];

export const solutionPillars: SolutionPillar[] = [
    {
        icon: UserCircleIcon,
        title: "Về CON NGƯỜI",
        description: "Vì đã từng là một CVDV đạt doanh thu cao nhất, tôi biết chính xác cách để thúc đẩy, đào tạo và xây dựng một đội ngũ 'thiện chiến' từ chính nội lực của họ, giúp họ tăng thu nhập một cách xứng đáng và tự hào."
    },
    {
        icon: CogIcon,
        title: "Về QUY TRÌNH",
        description: "Với 4 năm ở vai trò Giám đốc Dịch vụ, tôi sẽ giúp bạn gỡ rối và xây dựng lại một quy trình vận hành tinh gọn, kết nối các phòng ban, và thiết lập các hệ thống marketing - chăm sóc khách hàng hiệu quả."
    },
    {
        icon: ArrowTrendingUpIcon,
        title: "Về TĂNG TRƯỞNG",
        description: "Chúng ta sẽ cùng nhau phân tích chuỗi giá trị, tìm ra những 'mỏ vàng' doanh thu bị bỏ quên và áp dụng các chiến lược phù hợp, kể cả việc tích hợp công nghệ AI một cách hợp lý, để tạo ra sự tăng trưởng bền vững."
    }
];

export const timelineEvents: TimelineEvent[] = [
    { year: '2012', title: 'Cố Vấn Dịch Vụ Trẻ Nhất', description: 'Bắt đầu sự nghiệp và nhanh chóng khẳng định năng lực tại một trong những đại lý hàng đầu.' },
    { year: '2015', title: 'Top Doanh Thu Toàn Quốc', description: 'Liên tục đạt và vượt chỉ tiêu, trở thành một trong những CVDV có doanh thu cao nhất hệ thống.' },
    { year: '2018', title: 'Trưởng Nhóm Dịch Vụ', description: 'Đảm nhận vai trò quản lý, dẫn dắt đội nhóm đạt nhiều thành tích xuất sắc.' },
    { year: '2020', title: 'Giám Đốc Dịch Vụ Trẻ Nhất', description: 'Được bổ nhiệm vị trí GĐDV, chịu trách nhiệm chiến lược và vận hành toàn bộ phòng dịch vụ.' },
    { year: '2023', title: 'Chuyên Gia Tư Vấn Độc Lập', description: 'Bắt đầu hành trình chia sẻ kinh nghiệm, tư vấn giải pháp thực chiến cho các đại lý ô tô.' },
];

export const testimonials: Testimonial[] = [
    {
        quote: "Tú có một góc nhìn rất độc đáo, vừa sâu sát thực tế của anh em CVDV, vừa có tầm nhìn chiến lược của một người quản lý. Các giải pháp của cậu ấy luôn đi thẳng vào vấn đề.",
        avatar: "https://picsum.photos/100/100?random=1",
        name: "Nguyễn Văn A",
        title: "Tổng Giám Đốc",
        company: "Tập đoàn Ô tô XYZ"
    },
    {
        quote: "Sau khi làm việc với anh Tú, đội ngũ của chúng tôi như được 'lột xác'. Mọi người làm việc năng nổ hơn, quy trình cũng trơn tru hơn hẳn. Doanh thu tăng 20% chỉ sau 3 tháng.",
        avatar: "https://picsum.photos/100/100?random=2",
        name: "Trần Thị B",
        title: "Giám đốc Đại lý",
        company: "Auto Group ABC"
    }
];

export const faqItems: FaqItem[] = [
    {
        question: "Dịch vụ tư vấn của anh phù hợp với ai?",
        answer: "Dịch vụ của tôi phù hợp nhất với các Chủ/Giám đốc Đại lý ô tô đang cảm thấy phòng dịch vụ của mình hoạt động dưới tiềm năng, gặp các vấn đề về nhân sự, quy trình và muốn tạo ra một sự thay đổi thực chất để tăng trưởng bền vững."
    },
    {
        question: "Quá trình hợp tác diễn ra như thế nào?",
        answer: "Bắt đầu bằng một buổi trao đổi (miễn phí) để tôi hiểu rõ vấn đề của bạn. Sau đó, tôi sẽ đề xuất một lộ trình tư vấn, huấn luyện được 'may đo' riêng cho đại lý của bạn, bao gồm các giai đoạn: Khảo sát - Chẩn đoán, Xây dựng giải pháp, Triển khai & Huấn luyện, Đo lường & Tối ưu."
    },
    {
        question: "Sự khác biệt trong giải pháp của anh là gì?",
        answer: "Sự khác biệt lớn nhất là tính 'thực chiến'. Mọi giải pháp tôi đưa ra đều được đúc kết từ 12 năm kinh nghiệm ở mọi vị trí trong phòng dịch vụ. Tôi không dạy lý thuyết, tôi cùng bạn và đội ngũ của bạn xắn tay vào làm để tạo ra kết quả thực tế."
    },
    {
        question: "Chi phí tư vấn được tính như thế nào?",
        answer: "Chi phí sẽ phụ thuộc vào quy mô của đại lý và phạm vi của vấn đề cần giải quyết. Sau buổi trao đổi đầu tiên, tôi sẽ gửi bạn một báo giá chi tiết và minh bạch. Mục tiêu của tôi là mang lại giá trị lớn hơn nhiều lần so với chi phí bạn đầu tư."
    }
];
