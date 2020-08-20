import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout'

library.add(faCircle, faTwitter, faGithub, faYoutube, faPaperPlane)

const Index = () => (
  <Layout>
    <Head>
      <title>comorebi notes | yorozu no mono wo tsukurikeri.</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <section className="top-hero">
      <div className="top-hero-title">
        <span className="top-hero-title-before">
          {'comorebi notes'.split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </span>
        <h1 className="top-hero-title-after">comorebi notes</h1>
        <h2 className="top-hero-title-caption">yorozu no mono wo tsukurikeri.</h2>
        <div className="top-hero-title-caption-mask" />

        <ul className="top-hero-links list-inline">
          <li className="list-inline-item">
            <a href="https://twitter.com/kero_BIRUGE" target="_blank">
              <span className="fa-stack fa-2x">
                <FontAwesomeIcon icon="circle" className="fa-stack-2x fa-inverse" />
                <FontAwesomeIcon icon={['fab', 'twitter']} className="fa-stack-1x" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/comorebi-notes" target="_blank">
              <span className="fa-stack fa-2x">
                <FontAwesomeIcon icon="circle" className="fa-stack-2x fa-inverse" />
                <FontAwesomeIcon icon={['fab', 'github']} className="fa-stack-1x" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.youtube.com/channel/UC0A6iiT7FLg1xWsP9YnL7Sg" target="_blank">
              <span className="fa-stack fa-2x">
                <FontAwesomeIcon icon="circle" className="fa-stack-2x fa-inverse" />
                <FontAwesomeIcon icon={['fab', 'youtube']} className="fa-stack-1x" />
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:kero@comore.bi" target="_blank">
              <span className="fa-stack fa-2x">
                <FontAwesomeIcon icon="circle" className="fa-stack-2x fa-inverse" />
                <FontAwesomeIcon icon="paper-plane" className="fa-stack-1x" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div className="top-hero-bg" />
  </Layout>
)

export default Index
