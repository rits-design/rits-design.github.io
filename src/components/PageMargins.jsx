import { useEffect, useState } from 'react'

function formatRem(value) {
  if (value == null) return '…'
  if (value === 0) return '0'
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.?0+$/, '')
}

function RepeatColumn({ className, label }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="margins-ruler-slot">
        <span className="margins-ruler-mark">{label}</span>
      </div>
      <div className="margins-ruler-slot">
        <span className="margins-ruler-mark">{label}</span>
      </div>
      <div className="margins-ruler-slot">
        <span className="margins-ruler-mark">{label}</span>
      </div>
    </div>
  )
}

export default function PageMargins() {
  const [sideRem, setSideRem] = useState(null)

  useEffect(() => {
    function measure() {
      const rootPx = parseFloat(getComputedStyle(document.documentElement).fontSize)
      const sidePx = Math.max(0, (window.innerWidth - 70 * rootPx) / 2)
      setSideRem(Math.round((sidePx / rootPx) * 100) / 100)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const sideLabel = `|---${formatRem(sideRem)}rem---|`

  return (
    <div className="margins-ruler" aria-label="Page margins">
      <div className="margins-ruler-row">
        <RepeatColumn className="margins-ruler-side" label={sideLabel} />
        <div className="margins-ruler-center">
          <span className="margins-ruler-gutter" />
          <RepeatColumn className="margins-ruler-center-stack" label="|-----max-70rem-----|" />
          <span className="margins-ruler-gutter" />
        </div>
        <RepeatColumn className="margins-ruler-side" label={sideLabel} />
      </div>
    </div>
  )
}
