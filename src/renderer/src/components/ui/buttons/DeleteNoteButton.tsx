import { FaRegTrashCan } from 'react-icons/fa6'
import { ActionButton, type Props } from './ActionButton'
import { useSetAtom } from 'jotai'
import { deleteNoteAtom } from '@/store'

export const DeleteNoteButton = ({ ...props }: Props) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  return (
    <ActionButton onClick={deleteNote} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
