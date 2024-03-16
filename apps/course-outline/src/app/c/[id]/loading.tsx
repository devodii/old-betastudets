import { Skeleton, Wrapper } from '@betastudents/ui'

export default function Loading() {
  return (
    <Wrapper>
      <ul className="w-full  max-w-xl grid grid-cols-1 gap-4">
        {Array.from({ length: 4 }, (_row, idx) => (
          <li key={idx}>
            <Skeleton className="bg-gray-400 h-5 w-full" />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}
