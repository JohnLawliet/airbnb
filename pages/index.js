import Head from 'next/head'
import Banner from '../components/banner/banner.component'
import Body from '../components/body/body.component'
import Footer from '../components/footer/footer.component'
import Header from '../components/header/header.component'

export default function Home({exploreData, cardsData}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <Body exploreData={exploreData} cardsData={cardsData}/>

      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp").then(res => res.json())
  const cardsData = await fetch("https://links.papareact.com/zp1").then(res => res.json())
  return {
    props: {
      exploreData,
      cardsData
    }
  }

}
