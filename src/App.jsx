import { useState } from 'react'
import {
  breakpoints,
  buildDesignMarkdown,
  colors,
  layout,
  spacing,
  typography,
  visual,
} from './tokens.js'

function copyText(text) {
  return navigator.clipboard.writeText(text)
}

function downloadMarkdown(markdown) {
  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'design.md'
  a.click()
  URL.revokeObjectURL(url)
}

function TokenRow({ token, value, note, swatch }) {
  const [copied, setCopied] = useState(false)
  const copyTarget = token.startsWith('--') ? token : value

  async function handleCopy() {
    await copyText(copyTarget)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button
      type="button"
      className={swatch ? 'token-row has-swatch' : 'token-row'}
      onClick={handleCopy}
    >
      {swatch ? (
        <span className="swatch" style={{ background: value }} aria-hidden="true" />
      ) : null}
      <span className="token-name">{token}</span>
      <span className="token-value">{value}</span>
      <span className="token-note">{copied ? 'Copied' : note}</span>
    </button>
  )
}

function TokenGroup({ title, rows, swatch }) {
  return (
    <div className="token-group">
      {title ? <h3>{title}</h3> : null}
      <div className="token-list">
        {rows.map((row) => (
          <TokenRow key={row.token} {...row} swatch={swatch} />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [barStatus, setBarStatus] = useState('')

  async function handleCopyAll() {
    await copyText(buildDesignMarkdown())
    setBarStatus('Copied')
    window.setTimeout(() => setBarStatus(''), 1200)
  }

  function handleExport() {
    downloadMarkdown(buildDesignMarkdown())
    setBarStatus('Exported')
    window.setTimeout(() => setBarStatus(''), 1200)
  }

  return (
    <>
      <header className="top-bar">
        <div className="top-bar-inner">
          <strong>RITS Design Language</strong>
          <div className="top-actions">
            {barStatus ? <span className="bar-status">{barStatus}</span> : null}
            <button type="button" onClick={handleCopyAll}>
              Copy
            </button>
            <button type="button" onClick={handleExport}>
              Export design.md
            </button>
          </div>
        </div>
      </header>

      <main className="page">
        <p className="lede">
          Shared foundation tokens from rits_home_v3, rits_news_2, and rits_news_article_v2.
          Click a token to copy its name.
        </p>

        <section>
          <h2>Color</h2>
          <TokenGroup rows={colors} swatch />
        </section>

        <section>
          <h2>Typography</h2>
          <TokenGroup title="Families" rows={typography.families} />
          <TokenGroup title="Scale (major third, 1.25)" rows={typography.scale} />
          <TokenGroup title="Leading" rows={typography.leading} />
          <TokenGroup title="Weights" rows={typography.weights} />
          <TokenGroup title="Letter-spacing conventions" rows={typography.letterSpacing} />
        </section>

        <section>
          <h2>Spacing &amp; layout</h2>
          <p className="section-note">Spacing uses a 4px base.</p>
          <TokenGroup title="Spacing" rows={spacing} />
          <TokenGroup title="Layout" rows={layout} />
          <TokenGroup title="Breakpoints" rows={breakpoints} />
        </section>

        <section>
          <h2>Visual properties</h2>
          <TokenGroup rows={visual} />
        </section>
      </main>
    </>
  )
}
