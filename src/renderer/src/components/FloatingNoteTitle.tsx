import { ComponentProps } from 'react'
import { useAtomValue } from 'jotai'
import { selectedNoteAtom } from '@/store'
import { cn } from '@/utils'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  console.log(selectedNote)
  if (!selectedNote) return null

  const { title } = selectedNote

  return (
    <div className={cn('flex justify-center sticky top-0 backdrop-blur-sm', className)} {...props}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
