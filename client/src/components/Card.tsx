import type { ReactNode } from "react"

interface CardProps {
  title: string
  children: ReactNode
  className?: string
}

const Card = ({ title, children, className }: CardProps) => {
  return (
    <article className={`bg-white p-4 rounded-md border border-mischka/50 ${className}`}>
      <h6 className="text-xs uppercase font-semibold tracking-wider text-storm-gray mb-1.5">{title}</h6>
      <hr className="mb-2" />
      {children}
    </article>
  )
}

export default Card
