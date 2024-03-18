import { cn } from '@/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export function TitleBar({ children, className }: Props) {
  return <div className={cn('title-bar h-8 py-2 my-1', className)}>{children}</div>
}
