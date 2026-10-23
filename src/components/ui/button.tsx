import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandCrimson disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-brandCrimson text-white hover:bg-brandNavy hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline:
          'border-2 border-brandNavy text-brandNavy hover:bg-brandNavy hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-brandCrimson dark:hover:border-brandCrimson',
        secondary:
          'bg-brandNavy/10 text-brandNavy hover:bg-brandNavy/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
        ghost: 'hover:bg-gray-100 hover:text-brandNavy dark:hover:bg-white/10 dark:text-white',
        link: 'text-brandCrimson underline-offset-4 hover:underline',
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
