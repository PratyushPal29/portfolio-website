interface SectionHeadingProps {
  index: string
  title: string
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-lg text-primary">{index}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}
