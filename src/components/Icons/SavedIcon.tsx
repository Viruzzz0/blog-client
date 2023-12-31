import { type SVGProps } from 'react'

const SavedIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      d="M19 19.267V7.845c0-2.204-1.575-4.1-3.76-4.53a16.8 16.8 0 0 0-6.48 0C6.576 3.745 5 5.641 5 7.845v11.422c0 1.337 1.468 2.169 2.634 1.493l3.187-1.844a2.357 2.357 0 0 1 2.358 0l3.187 1.844c1.166.675 2.634-.156 2.634-1.493Z"
    />
  </svg>
)
export default SavedIcon
