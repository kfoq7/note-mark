import { notesAtom, selectedIndexAtom } from '@/store'
import { useAtom, useAtomValue } from 'jotai'

export function useNotesList({ onSelect }: { onSelect?: () => void }) {
  const notes = useAtomValue(notesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    if (onSelect) onSelect()
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
