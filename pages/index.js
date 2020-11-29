import Head from 'next/head'

const analytics = process.env.NODE_ENV === 'development' ? null : (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-17713366-1"></script>
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-17713366-1');`
    }}/>
  </>
)

export default function Home() {
  return (
    <div className="justify-center">
      <Head>
        { analytics }
        <title>Stephen Fulljames</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <hgroup className="w-5/6 mx-auto">
        <h1 className="font-serif font-black text-white text-3xl">stephen fulljames</h1>
        <h2 className="font-serif font-bold italic text-white text-6xl mt-10 leading-9"><a href="/">Minimum Viable Portfolio</a></h2>
        </hgroup>
      </header>

      <section className="py-6 shadow-section">
        <ul className="w-5/6 mx-auto">
          <li className="inline-block mr-6">
            <a rel="external" className="text-red-800 text-sm font-bold hover:underline" href="http://www.twitter.com/fulljames">Twitter</a>
          </li>
          <li className="inline-block mr-6">
            <a rel="external" className="text-red-800 text-sm font-bold hover:underline" href="http://www.github.com/fulljames">Github</a>
          </li>
          <li className="inline-block mr-6">
            <a rel="external" className="text-red-800 text-sm font-bold hover:underline" href="http://www.flickr.com/emptyjames">Flickr</a>
          </li>
        </ul>
      </section>
    </div>
  )
}
