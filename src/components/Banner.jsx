import { useEffect, useRef } from 'react'
import bannerHtml from './banner.html?raw'
import { initBannerBehavior } from './banner-behavior.js'

/** Site banner / legacy header — copied from rits_home_v3.html */
export default function Banner() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) initBannerBehavior(ref.current)
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: bannerHtml }} />
}
