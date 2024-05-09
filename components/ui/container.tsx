import "@/styles/ui/container.css"
import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode;
}

export default function Container({ children } : ContainerProps) {
  //Width will take either large, medium, or small

  return <div className={`container`}>{children}</div>
}
