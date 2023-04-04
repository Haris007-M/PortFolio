import Head from 'next/head'
import MainPage from '../Components/MainPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Haris Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MainPage/>
    </>
  )
}
