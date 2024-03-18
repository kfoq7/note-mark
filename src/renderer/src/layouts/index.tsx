import { ComponentProps, forwardRef } from 'react'
import { TitleBar } from '@/components/TitleBar'
import { cn } from '@/utils'

export function RootLayout({ children, className, ...props }: ComponentProps<'main'>) {
  return (
    <main className={cn('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export function SideBar({ className, children, ...props }: ComponentProps<'aside'>) {
  return (
    <div className="w-[290px] flex flex-col items-start">
      {/* <TitleBar>asdf</TitleBar> */}

      <aside {...props} className={cn('grow overflow-y-auto w-full', className)}>
        {children}
      </aside>
    </div>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div className="w-full divide-y-[1px] divide-white/50 flex flex-col">
      <TitleBar className={className}>asdf</TitleBar>

      <div {...props} ref={ref} className={cn('grow overflow-y-auto', className)}>
        {children}
      </div>
    </div>
  )
)

Content.displayName = 'Content'
