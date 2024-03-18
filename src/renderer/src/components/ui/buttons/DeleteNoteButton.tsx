import { FaRegTrashCan } from 'react-icons/fa6'
import { ActionButton, type Props } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: Props) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
