import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'
import type { NoteInfo } from '@shared/models'

export const loadNotes = async () => {
  const notes = await window.context.getNotes()

  return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

export const notesAtom = unwrap(notesAtomAsync, prev => prev)

export const selectedIndexAtom = atom<number | null>(null)

const selectedNoteAtomAsync = atom(async get => {
  const notes = get(notesAtom)
  const selectedIndex = get(selectedIndexAtom)

  if (selectedIndex == null || !notes) return null

  const selectedNote = notes[selectedIndex]
  const noteContent = await window.context.readNote(selectedNote.title)

  return {
    ...selectedNote,
    content: noteContent
  }
})

export const selectedNoteAtom = unwrap(
  selectedNoteAtomAsync,
  prev => prev ?? { title: '', content: '', lastEditTime: Date.now() }
)

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)

  if (!notes) return

  const newNote: NoteInfo = {
    title: `Note ${notes.length + 1}`,
    lastEditTime: Date.now()
  }

  set(notesAtom, [newNote, ...notes.filter(note => note.title !== newNote.title)])
  set(selectedIndexAtom, 0)
})

export const deleteNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)
  const selectedNote = get(selectedNoteAtom)

  if (!selectedNote || !notes) return

  set(
    notesAtom,
    notes.filter(note => note.title !== selectedNote.title)
  )
  set(selectedIndexAtom, null)
})
