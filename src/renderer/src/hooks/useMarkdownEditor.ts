import { useAtomValue } from 'jotai'
import { selectedNoteAtom } from '@/store'

export function useMarkdownEditor() {
  const selectedNote = useAtomValue(selectedNoteAtom)
  console.log(selectedNote)
  return {
    selectedNote
  }
}
