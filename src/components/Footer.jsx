import footerHtml from './footer.html?raw'

/** Site footer — copied from rits_home_v3.html */
export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
}
