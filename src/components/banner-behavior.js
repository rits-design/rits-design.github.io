/* Original header behaviour from rits_home_v3.html (hamburger, search, All NYU). */
export function initBannerBehavior(root = document) {
  const q = (s) => root.querySelector(s)
  const toggle = (el, on) => el && el.classList.toggle('open', on)

  const ham = q('.Header__NavHamburgerCont-sc-954rq4-6')
  if (ham && !ham.dataset.bound) {
    ham.dataset.bound = '1'
    ham.addEventListener('click', () => {
      const menu = q('.Header__NavMenu-sc-954rq4-15')
      const bars = q('.Header__NavHamburger-sc-954rq4-5')
      const on = !menu.classList.contains('open')
      toggle(menu, on)
      toggle(bars, on)
    })
  }

  const sBtn = q('.SearchBar__SearchButton-sc-1js0zaz-3')
  const sOv = q('.SearchBar__PopUpAllNyu1-sc-1js0zaz-9')
  const sIn = q('.SearchBar__SearchInput-sc-1js0zaz-1')
  const sClose = q('.SearchBar__PopUpAllNyuBtnCloseAllNyu-sc-1js0zaz-8')
  if (sBtn && !sBtn.dataset.bound) {
    sBtn.dataset.bound = '1'
    sBtn.addEventListener('click', () => {
      toggle(sOv, true)
      toggle(sIn, true)
      const i = sIn && sIn.querySelector('input')
      if (i) i.focus()
    })
  }
  if (sClose && !sClose.dataset.bound) {
    sClose.dataset.bound = '1'
    sClose.addEventListener('click', () => {
      toggle(sOv, false)
      toggle(sIn, false)
    })
  }

  const nBtn = q('.AllNYUOverlay__StyledButton-sc-uyrfjp-21')
  const nOv = q('.AllNYUOverlay__PopUpAllNyu1-sc-uyrfjp-2')
  const nClose = q('.AllNYUOverlay__PopUpAllNyuBtnCloseAllNyu-sc-uyrfjp-3')
  if (nBtn && !nBtn.dataset.bound) {
    nBtn.dataset.bound = '1'
    nBtn.addEventListener('click', () => toggle(nOv, true))
  }
  if (nClose && !nClose.dataset.bound) {
    nClose.dataset.bound = '1'
    nClose.addEventListener('click', () => toggle(nOv, false))
  }

  if (!root.dataset.escapeBound) {
    root.dataset.escapeBound = '1'
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggle(sOv, false)
        toggle(sIn, false)
        toggle(nOv, false)
      }
    })
  }
}
