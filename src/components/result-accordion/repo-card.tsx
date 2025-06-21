import { Star, SquareArrowOutUpRight } from 'lucide-react'
import type { RestEndpointMethodTypes } from '@octokit/rest'
import { formatDistanceToNow } from 'date-fns'

function RepoCard({
  data
}: {
  data: RestEndpointMethodTypes['repos']['listForUser']['response']['data'][0]
}) {
  return (
    <div key={data.html_url} className="rounded-lg border p-4">
      <div className="flex items-center space-x-2">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <h3 className="w-full border-b text-base font-semibold hover:border-black">
            {data.name}
          </h3>
          <SquareArrowOutUpRight className="size-3" />
        </a>

        <div className="flex items-center">
          <Star className="size-4" />
          <span className="ml-1">{data.stargazers_count}</span>
        </div>
        {data.language ? (
          <span className="rounded-md border p-1 text-sm font-light">
            {data.language}
          </span>
        ) : null}
      </div>
      {data.updated_at ? (
        <span className="mt-1 block">
          Last update {formatDistanceToNow(new Date(data.updated_at))}
        </span>
      ) : null}

      <p className="mt-2">{data.description}</p>
    </div>
  )
}

export default RepoCard
