import { type ComponentProps } from 'react'
import { isEmpty } from 'lodash'
import { NotePreview } from './NotePreview'
import { useNotesList } from '@/hooks/useNotesList'
import { cn } from '@/utils'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export function NotePreviewList({ className, onSelect, ...props }: NotePreviewListProps) {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={cn('pt-2', className)} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
