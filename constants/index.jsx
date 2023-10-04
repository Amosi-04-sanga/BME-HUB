import {
  community,
  events,
  expert,
  gallery,
  home,
  library,
  questions,
  user,
  create,
  heartFilled,
  heart,
  search,
  reply,
  tag,
} from "../public/assets";

export const navLinks = [
  {
    imgURL: home,
    route: "/",
    label: "Home",
  },
  {
    imgURL: events,
    route: "/news",
    label: "News",
  },
  {
    imgURL: library,
    route: "https://drive.google.com/drive/folders/15oIe1Nj-P3Ay7Pauesh-Btc7pAqRNqJ",
    label: "Library",
  },

  {
    imgURL: gallery,
    route: "/gallery",
    label: "gallery",
  },
];

export const Faq = [
  {
    id: "QN one",
    question:
      "What is biomedical engineering, and what does a biomedical engineer do?",
    answer:
      " Biomedical engineering is a multidisciplinary field that combines principles of engineering, biology, and medicine to develop solutions for healthcare and medical challenges. Biomedical engineers design and create medical devices, prosthetics, imaging equipment, and other technologies that improve patient care and advance medical research.",
  },
  {
    id: "QN two",
    question: "How can I pursue a career in biomedical engineering?",
    answer:
      "To pursue a career in biomedical engineering, you typically need at least a bachelor's degree in biomedical engineering or a related field such as electrical engineering, mechanical engineering, or biology. After completing your education, you can seek internships or co-op programs to gain practical experience. It's also beneficial to stay updated on the latest advancements in the field and consider pursuing graduate studies for more specialized roles.",
  },
  {
    id: "QN three",
    question: " What are some recent advancements in biomedical engineering?",
    answer:
      "Recent advancements in biomedical engineering include breakthroughs in artificial organs and tissue engineering, the development of advanced diagnostic tools like wearable health monitors, the use of AI and machine learning in healthcare analytics, and the creation of personalized medicine approaches. These innovations are improving patient outcomes and revolutionizing healthcare.",
  },
  {
    id: "QN four",
    question:
      "Are there any scholarships or financial aid opportunities for biomedical engineering students?",
    answer:
      "Yes, there are various scholarships and financial aid opportunities available for biomedical engineering students. These can come from universities, government programs, private organizations, and industry associations. It's recommended to research and apply for scholarships early, as they can greatly help with tuition and educational expenses.",
  },
  {
    id: "QN five",
    question:
      "What are the key ethical considerations in biomedical engineering?",
    answer:
      "Biomedical engineers must consider several ethical principles in their work, including patient safety, informed consent for experimental treatments, data privacy and security, and the responsible use of emerging technologies like genetic engineering and AI in healthcare. Ethical decision-making is vital to ensure that biomedical innovations benefit society while minimizing potential harm.",
  },
];
