import { LuFileSignature } from 'react-icons/lu'
import { useSetAtom } from 'jotai'
import { ActionButton, type Props } from './ActionButton'
import { createEmptyNoteAtom } from '@/store'

export const NewNoteButton = ({ ...props }: Props) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  return (
    <ActionButton onClick={createEmptyNote} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
