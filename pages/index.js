import Link from 'next/link'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <section className="top-hero">
      <h1>
        {'comorebi notes'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
    </section>
  </Layout>
)
