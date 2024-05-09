import "@/styles/ui/navBar.css"
import Link from "next/link"

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/blog": {
    name: "blog",
  },
}

export function Navbar() {
  return (
    <div className="nav">
      <nav>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link key={path} href={path} className="link">
              {name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
