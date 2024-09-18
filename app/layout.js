import Providers from '../utils/providers/providers'
import Alert from '../components/Alert/Alert'
import './globals.css'

export const metadata = {
  title: 'Only Voyer',
  description: 'Contenido Only Voyer',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
        <div className='fixed bottom-0 left-0 p-4'>
          <Alert />
        </div>
      </body>
    </html>
  )
}
