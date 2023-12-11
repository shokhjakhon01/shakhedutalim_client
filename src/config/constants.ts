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
