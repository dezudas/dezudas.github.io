import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-[#111111] text-white hover:bg-[#262626] hover:text-white dark:bg-white dark:text-[#111111] dark:hover:bg-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline:
          'border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-[#111111]',
        secondary:
          'bg-[#111111]/5 text-[#111111] hover:bg-[#111111]/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
        ghost: 'hover:bg-black/5 hover:text-[#111111] dark:hover:bg-white/10 dark:text-white',
        link: 'text-[#111111] dark:text-white underline-offset-4 hover:underline font-bold',
      },
      size: {
        default: 'h-11 px-8 py-2.5',
        sm: 'h-9 px-5 text-xs',
        lg: 'h-14 px-10 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
