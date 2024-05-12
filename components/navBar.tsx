'use client'

import "@/styles/ui/navBar.css"
import Link from "next/link"
import Image from "next/image"

import { usePathname } from "next/navigation"


const navItems = {
  "/": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
  "/project": {
    name: "project",
  },
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="nav">
      <nav>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link key={path} href={path} className={pathname === path ? "link active-page" : "link idle-page" }>
               {name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
