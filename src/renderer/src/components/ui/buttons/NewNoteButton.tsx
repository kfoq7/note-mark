import { LuFileSignature } from 'react-icons/lu'
import { ActionButton, type Props } from './ActionButton'

export const NewNoteButton = ({ ...props }: Props) => {
  return (
    <ActionButton {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
