import { atom } from 'jotai'
import { noteMocks } from './mocks'
import type { NoteInfo } from '@shared/models'

export const notesAtom = atom<NoteInfo[]>(noteMocks)

export const selectedIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom(get => {
  const notes = get(notesAtom)
  const selectedIndex = get(selectedIndexAtom)

  if (selectedIndex == null || !notes) return null

  const selectedNote = notes[selectedIndex]

  return {
    ...selectedNote,
    content: `Hello from Note ${selectedIndex}`
  }
})

export const createEmptyNoteAtom = atom(null, (get, set) => {
  const notes = get(notesAtom)
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

  if (!selectedNote) return

  set(
    notesAtom,
    notes.filter(note => note.title !== selectedNote.title)
  )
  set(selectedIndexAtom, null)
})
