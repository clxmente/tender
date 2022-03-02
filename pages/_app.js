import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-gray-50">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
