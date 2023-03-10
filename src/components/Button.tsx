import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonPrimaryRootProps {
  children: ReactNode
  className?: string
  tipos: 'primary' | 'secundary'
}

function ButtonPrimaryRoot({
  children,
  className,
  tipos = 'primary'
}: ButtonPrimaryRootProps) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-2  w-full py-3 px-4 rounded-lg focus-within:ring-2 ring-brand-900 cursor-pointer',
        {
          'bg-brand-500 text-black': tipos === 'primary',
          'bg-gray-800 text-white focus:ring-2 ring-brand-500':
            tipos === 'secundary'
        },
        className
      )}
    >
      {children}
    </div>
  )
}

ButtonPrimaryRoot.displayName = 'ButtonPrimary.Root'

export interface ButtonPrimaryIconProps {
  children: ReactNode
}

function ButtonPrimaryIcon({ children }: ButtonPrimaryIconProps) {
  return <Slot className="w-[20px] h-[20px] text-gray-100">{children}</Slot>
}

ButtonPrimaryIcon.displayName = 'ButtonPrimary.Icon'

export interface ButtonPrimaryProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

function ButtonPrimaryPrimary({
  children,
  asChild,
  className,
  ...props
}: ButtonPrimaryProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'bg-transparent outline-none text-md font-medium',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

ButtonPrimaryPrimary.displayName = 'ButtonPrimary.Primary'

export const ButtonPrimary = {
  Root: ButtonPrimaryRoot,
  Button: ButtonPrimaryPrimary,
  Icon: ButtonPrimaryIcon
}
