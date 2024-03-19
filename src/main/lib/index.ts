import { homedir } from 'node:os'
import { ensureDir } from 'fs-extra'
import { APP_DIRECTORY_NAME, FILE_ENCONDING } from '@shared/consts'
import { readdir, readFile, stat } from 'node:fs/promises'
import { NoteInfo } from '@shared/models'
import type { GetNotes } from '@shared/types'

export const ROOT_DIR = `${homedir()}/${APP_DIRECTORY_NAME}`

export const getNotesInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${ROOT_DIR}/${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const getNotes: GetNotes = async () => {
  await ensureDir(ROOT_DIR)

  const notesFileNames = await readdir(ROOT_DIR, {
    encoding: FILE_ENCONDING,
    withFileTypes: false
  })

  const notes = notesFileNames.filter(filename => filename.endsWith('.md'))

  return Promise.all(notes.map(getNotesInfoFromFilename))
}

export const readNote = async (filename: string) =>
  readFile(`${ROOT_DIR}/${filename}.md`, { encoding: FILE_ENCONDING })
