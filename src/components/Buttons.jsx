/** Buttons — copied from rits_home_v3 / shared CTA styles */
export default function Buttons() {
  return (
    <div className="buttons-demo">
      <div className="buttons-demo-row">
        <a className="btn btn-primary" href="#primary">
          Primary
        </a>
        <a className="btn btn-secondary" href="#secondary">
          Secondary
        </a>
      </div>
      <section className="cta" aria-label="CTA button variants" style={{ marginTop: 'var(--space-5)' }}>
        <div className="container">
          <div>
            <h2>On brand (CTA)</h2>
            <p>Light and ghost variants used inside the violet CTA band.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-light" href="#light">
              Light
            </a>
            <a className="btn btn-ghost" href="#ghost">
              Ghost
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
