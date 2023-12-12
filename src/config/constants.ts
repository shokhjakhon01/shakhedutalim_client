import {
  AiFillAmazonCircle,
  AiOutlineDashboard,
  AiOutlineDollar,
  AiOutlineUnorderedList,
} from "react-icons/ai"
import { CiViewList } from "react-icons/ci"
import {
  FaApplePay,
  FaBookReader,
  FaChalkboardTeacher,
  FaDraftingCompass,
  FaFirstdraft,
  FaListAlt,
  FaQuestionCircle,
  FaUserGraduate,
} from "react-icons/fa"
import { FiEdit } from "react-icons/fi"
import { ImBooks } from "react-icons/im"
import {
  MdImportContacts,
  MdOutlineContactMail,
  MdOutlineCreateNewFolder,
} from "react-icons/md"
import { RiMoneyDollarBoxLine } from "react-icons/ri"
import { SiAmd, SiCisco, SiLogitech, SiSpotify } from "react-icons/si"
import {
  AnnouncementIcons,
  CodingIcons,
  DesignIcons,
  EngIcons,
  FinishRightIcon,
  LaptopIcons,
  OnlineCourseIcon,
  OnlineLearningIcon,
  OnlineStudentIcon,
  PersonIcons,
  PrintIcons,
  RightLineIcon,
  RusIcons,
  TeachVal1Icon,
  TeachVal2Icon,
  TeachVal3Icon,
  TurkIcon,
  UzbIcons,
} from "src/icons"
import { CourseType } from "src/interfaces/course.interface"

export const courseCategory = [
  "Front-End",
  "Back-End",
  "Full-Stack",
  "Mobile Application",
  "Web Design",
  "Graphic Design",
]

export const courseLevel = ["Beginner", "Intermediate", "Expert"]

export const navigation = [
  {
    title: "sidebar_title_1",
    links: [
      {
        label: "sidebar_title_1_explore",
        route: "/",
        icon: AiOutlineDashboard,
      },
      {
        label: "sidebar_title_1_courses",
        route: "/courses",
        icon: CiViewList,
      },
      {
        label: "sidebar_title_1_books",
        route: "/books",
        icon: FaBookReader,
      },
      {
        label: "sidebar_title_1_articles",
        route: "/articles",
        icon: MdImportContacts,
      },
    ],
  },
  {
    title: "sidebar_title_2",
    links: [
      {
        label: "sidebar_title_2_about",
        route: "/about",
        icon: FaDraftingCompass,
      },
      {
        label: "sidebar_title_2_contact",
        route: "/contact",
        icon: MdOutlineContactMail,
      },
      {
        label: "sidebar_title_2_pricing",
        route: "/pricing",
        icon: AiOutlineDollar,
      },
      {
        label: "sidebar_title_2_faq",
        route: "/faq",
        icon: FaQuestionCircle,
      },
    ],
  },
]

export const categories = [
  {
    name: "design_category",
    id: 1,
    icon: DesignIcons,
  },
  {
    name: "sales_marketing_category",
    id: 2,
    icon: AnnouncementIcons,
  },
  {
    name: "development_it_category",
    id: 3,
    icon: CodingIcons,
  },
  {
    name: "engineering_architecture_category",
    id: 4,
    icon: PrintIcons,
  },
  {
    name: "personl_development_category",
    id: 5,
    icon: PersonIcons,
  },
  {
    name: "finance_accounting_category",
    id: 6,
    icon: LaptopIcons,
  },
]

export const trustedCompany = [
  AiFillAmazonCircle,
  SiAmd,
  SiCisco,
  FaApplePay,
  SiLogitech,
  SiSpotify,
]

export const language = [
  { nativeLng: "English", lng: "en", icon: EngIcons },
  { nativeLng: "O'zbek", lng: "uz", icon: UzbIcons },
  { nativeLng: "Türkçe", lng: "tr", icon: TurkIcon },
  { nativeLng: "Русский", lng: "ru", icon: RusIcons },
]

export const howItWorks = [
  {
    title: "how_it_works_first_step",
    icon: OnlineCourseIcon,
  },
  {
    icon: RightLineIcon,
  },
  {
    title: "how_it_works_second_step",
    icon: OnlineLearningIcon,
  },
  {
    icon: FinishRightIcon,
  },
  {
    title: "how_it_works_third_step",
    icon: OnlineStudentIcon,
  },
]

export const coursesFilter = [
  {
    title: "filter_category_title",
    id: "category",
    categoryList: courseCategory.map((c) => ({ name: c, id: c })),
  },
  {
    title: "fitler_rating_title",
    id: "rating",
    categoryList: [
      { name: "fitler_rating_item_1", id: "4.5" },
      { name: "fitler_rating_item_2", id: "4" },
      { name: "fitler_rating_item_3", id: "3.5" },
      { name: "fitler_rating_item_4", id: "3" },
    ],
  },
  {
    title: "filter_language_title",
    id: "language",
    categoryList: [
      { name: "filter_language_item_1", id: "en" },
      { name: "filter_language_item_2", id: "ru" },
      { name: "filter_language_item_3", id: "uz" },
      { name: "filter_language_item_4", id: "tr" },
    ],
  },
  {
    title: "filter_level_title",
    id: "level",
    categoryList: courseLevel.map((c) => ({ name: c, id: c })),
  },
]

export const courses: CourseType[] = [
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "Javascript full course",
    lessonCount: 100,
    totalHours: 15,
    level: "Beginner",
    price: 20,
    reviewAvarage: 4.5,
    reviewCount: 200,
    author: {
      firstName: "John",
      lastName: "Odil",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "Reactjs full course",
    lessonCount: 150,
    totalHours: 29.5,
    level: "Advanced",
    price: 30,
    reviewAvarage: 4.5,
    reviewCount: 200,
    author: {
      firstName: "John",
      lastName: "Odil",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "Nodejs full course",
    lessonCount: 150,
    totalHours: 29.5,
    level: "Advanced",
    price: 30,
    reviewAvarage: 4,
    reviewCount: 200,
    author: {
      firstName: "John",
      lastName: "Odil",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  },
]
