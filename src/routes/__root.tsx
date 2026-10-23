import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { ThemeProvider } from '@/lib/theme'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-pageBg text-bodyText dark:bg-darkTheme dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </ThemeProvider>
  )
}
