import { ComponentProps } from 'react'
import { NoteInfo } from '@shared/models'
import { cn, formatDateFromMS } from '@/utils'

export type NotePreviewProps = NoteInfo &
  ComponentProps<'div'> & {
    isActive?: boolean
  }

export function NotePreview({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) {
  const datetime = formatDateFromMS(lastEditTime)

  return (
    <div
      {...props}
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/50': isActive,
          'hover:bg-zinc-500/50': !isActive
        },
        className
      )}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light">{datetime}</span>
    </div>
  )
}
