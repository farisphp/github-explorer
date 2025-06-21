import { useState } from 'react'
import { cn } from '@/lib/utils'

import Layout from '@/components/layout'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import ResultAccordion from '@/components/result-accordion'
import { useSearchUser } from '@/hooks/search'
import Spinner from '@/components/spinner'
import { Input } from './components/ui/input'

function App() {
  const [username, setUsername] = useState<string | undefined>()

  const { result, isLoading, searchUser, error } = useSearchUser()
  console.log({ isLoading, result })

  return (
    <Layout>
      <Container
        className={cn('flex w-full flex-1 py-8', {
          'flex-col': result?.data?.items,
          'items-center': !result?.data?.items
        })}
      >
        <div>
          <div className="space-y-2">
            <h1 className="text-5xl leading-tight tracking-wide">
              Github Repo Explorer
            </h1>
            <p className="text-lg">
              Find a user and their public repositories by typing their username
              into the input box below
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <form
              className="relative mt-4 flex items-center w-full"
              onSubmit={(e) => {
                e.preventDefault()
                searchUser(username)
              }}
            >
              <Input
                className="rounded-s-sm"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter github username"
              />
              <Button disabled={isLoading} className="rounded-e-sm">
                <Spinner className={cn('mr-1 hidden', { block: isLoading })} />{' '}
                Search
              </Button>
            </form>
          </div>
        </div>
        <div
          className={cn('w-full mt-5 flex-1', {
            hidden: !result?.data?.items
          })}
        >
          <span className="font-light">Results</span>

          {error?.message ? (
            <span className="block text-red-600">{error?.message}</span>
          ) : null}

          <ResultAccordion result={result} />
        </div>
      </Container>
    </Layout>
  )
}

export default App
