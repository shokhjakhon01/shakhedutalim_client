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
    title: "General",
    links: [
      {
        label: "Explore",
        route: "/",
        icon: AiOutlineDashboard,
      },
      {
        label: "Courses",
        route: "/courses",
        icon: CiViewList,
      },
      {
        label: "Books",
        route: "/books",
        icon: FaBookReader,
      },
      {
        label: "Articles",
        route: "/articles",
        icon: MdImportContacts,
      },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        label: "About",
        route: "/about",
        icon: FaDraftingCompass,
      },
      {
        label: "Contact",
        route: "/contact",
        icon: MdOutlineContactMail,
      },
      {
        label: "Pricing",
        route: "/pricing",
        icon: AiOutlineDollar,
      },
      {
        label: "Faq",
        route: "/faq",
        icon: FaQuestionCircle,
      },
    ],
  },
]
