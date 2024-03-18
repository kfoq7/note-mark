import { useRef } from 'react'
import { Content, RootLayout, SideBar } from './layouts'
import { NotePreviewList } from './components/NotePreviewList'
import { MarkdownEditor } from './components/MarkdownEditor'
import { FloatingNoteTitle } from './components/FloatingNoteTitle'
import { ActionButtonsRow } from './components/ui/ActionButtonRow'

export default function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <RootLayout className="divide-x-[1px] divide-white/50">
      <SideBar className="py-2 px-3">
        <ActionButtonsRow className="flex justify-between mt-2" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </SideBar>

      <Content ref={contentContainerRef} className="bg-zinc-900/10">
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor />
      </Content>
    </RootLayout>
  )
}
