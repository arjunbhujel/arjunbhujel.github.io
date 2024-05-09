import "@/styles/ui/container.css"

export default function Container({ children }) {
  //Width will take either large, medium, or small

  return <div className={`container`}>{children}</div>
}
