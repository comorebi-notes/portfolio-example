import Link from 'next/link'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
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
      </div>
    </section>
    <div className="top-hero-bg" />
  </Layout>
)

export default Index
