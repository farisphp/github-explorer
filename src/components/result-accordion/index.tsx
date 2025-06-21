import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import ResultItem from './result-item'
import type { RestEndpointMethodTypes } from '@octokit/rest'
import { SquareArrowOutUpRight } from 'lucide-react'

function ResultAccordion({
  result
}: {
  result: RestEndpointMethodTypes['search']['users']['response'] | undefined
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {result?.data?.items
        ? result?.data?.items?.map((item, idx) => {
            return (
              <AccordionItem key={`github-users-${idx}`} value={item.login}>
                <AccordionTrigger>
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      {item.login}{' '}
                      <img
                        src={item.avatar_url}
                        className="ml-1 h-6 w-6"
                        alt=""
                      />
                    </div>
                    <a
                      href={item.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="size-3" />
                    </a>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ResultItem username={item.login} />
                </AccordionContent>
              </AccordionItem>
            )
          })
        : null}
    </Accordion>
  )
}

export default ResultAccordion
