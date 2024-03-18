import { type ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { noteMocks } from '@/store/mocks'
import { cn } from '@/utils'

export function NotePreviewList({ className, ...props }: ComponentProps<'ul'>) {
  if (noteMocks.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={cn('pt-2', className)} {...props}>
      {noteMocks.map(note => (
        <NotePreview key={note.title} {...note} />
      ))}
    </ul>
  )
}
