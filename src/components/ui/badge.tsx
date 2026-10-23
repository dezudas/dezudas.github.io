import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-brandCrimson/10 text-brandCrimson border border-brandCrimson/25 dark:bg-brandCrimson/20 dark:text-red-300',
        navy: 'bg-brandNavy/10 text-brandNavy border border-brandNavy/20 dark:bg-white/10 dark:text-white dark:border-white/20',
        secondary: 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-gray-300',
        outline: 'text-foreground border border-borderColor dark:border-white/20',
        success: 'bg-green-500/10 text-green-700 border border-green-500/20 dark:text-green-400',
        warning: 'bg-amber-500/10 text-amber-700 border border-amber-500/20 dark:text-amber-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
