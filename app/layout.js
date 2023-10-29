import './globals.css'


export const metadata = {
  title: 'Wonderland Indonesia',
  description: 'Most Beatifull website in indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-dark-gray hover:scrollbar-thumb-light-gray scrollbar-w-[.6rem] scrollbar-thumb-rounded-2xl">{children}</body>
    </html>
  )
}
