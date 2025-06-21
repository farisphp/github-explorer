import Header from './header'
import Footer from './footer'

function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
