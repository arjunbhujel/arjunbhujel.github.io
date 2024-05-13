import Image from "next/image"
import Link from "next/link"
import "@/styles/ui/header.css"
import { Navbar } from "./navBar"

const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_4_10)" />
      <path
        d="M12.8082 6.60004V30.8596C12.8082 30.8596 12.4603 33.3029 16.3 33.407"
        strokeMiterlimit="10"
        className="inner"
      />
      <path
        d="M16.2998 9.09882V30.0522"
        strokeMiterlimit="10"
        className="inner"
      />
      <path
        d="M18.063 23.3737V28.4815"
        strokeMiterlimit="10"
        className="inner"
      />
      <path
        d="M17.8174 22.2309H23.7918C23.7918 22.2309 24.8068 30.0522 19.843 30.0522"
        strokeMiterlimit="10"
        className="inner"
      />
      <path
        d="M18.0201 18.324V10.7906C18.0201 10.7906 24.6696 11.3604 23.694 18.3072L18.0201 18.324Z"
        strokeMiterlimit="10"
        className="inner"
      />
      <path
        d="M16.0095 6.6006C16.0095 6.6006 27.6316 6.37047 27.2893 14.9499L27.2967 30.0522C27.2967 30.0522 27.4282 33.4312 23.7925 33.4191"
        strokeMiterlimit="10"
        className="inner"
      />
      <defs id="logo_svg">
        <linearGradient
          id="paint0_linear_4_10"
          x1="40"
          y1="20"
          x2="0"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="colorleft" />
          <stop offset="1" className="colorright" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <Logo />
        </Link>

        <div className="heading_text">
          <p className="name">Arjun Bhujel</p>
          <p className="detail">Student</p>
        </div>
      </div>
      <Navbar />
    </header>
  )
}
