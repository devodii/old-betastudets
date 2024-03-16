import { Spoiler } from '@betastudents/ui'

export const Footer = () => {
  return (
    <footer className="fixed flex items-center justify-center w-full bottom-4">
      <Spoiler
        redirectTo={process.env.NEXT_PUBLIC_BETASTUDENTS_ROOT_DOMAIN as string}
      />
    </footer>
  )
}
