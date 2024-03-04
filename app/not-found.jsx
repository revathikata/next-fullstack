import Link from 'next/link'

function notFound() {
  return (
    <div>
        <h2>Not Found</h2>
        <p>sorry, the Page you are looking for not exist.</p>
        <Link href="/">Return to home</Link>
    </div>
  )
}

export default notFound