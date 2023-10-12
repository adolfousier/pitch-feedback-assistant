import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mint Ventures AI Demo!</title>
        <link rel="icon" href="/MV_favicon.svg" />
      </Head>

      <main>
        <Header title="Welcome to Mint Ventures AI Pitch Feedback Assistant Demo!" />
        <p className="description">
          Share your press pitch, and this AI agent will give you feedback from the perspective of a senior pitch deck analyst. Get started by clicking on the bot icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
