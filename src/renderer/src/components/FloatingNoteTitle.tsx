import { ComponentProps } from 'react'
import { cn } from '@/utils'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = 'Note title'

  return (
    <div className={cn('flex justify-center sticky top-0 backdrop-blur-sm', className)} {...props}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
