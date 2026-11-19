export const colors = [
  { token: '--color-brand', value: '#57068C', note: 'NYU violet' },
  { token: '--color-brand-strong', value: '#3F0468', note: 'Hover / pressed' },
  { token: '--color-brand-tint', value: '#F4EEF9', note: 'Soft violet surface' },
  { token: '--color-on-brand', value: '#FFFFFF', note: 'Text on brand' },
  { token: '--color-on-brand-muted', value: '#E6D9F2', note: 'Secondary text on violet (≥ 7:1)' },
  { token: '--color-bg', value: '#FFFFFF', note: 'Page background' },
  { token: '--color-surface', value: '#F6F5F8', note: 'Cool surface' },
  { token: '--color-border', value: '#D9D6E0', note: 'Hairline / dividers' },
  { token: '--color-border-strong', value: '#8A8596', note: 'Form-control borders (≥ 3:1)' },
  { token: '--color-text', value: '#1B1A20', note: 'Body text' },
  { token: '--color-text-muted', value: '#55525F', note: 'Secondary text (≥ 7:1 on white)' },
  { token: '--color-focus', value: '#0B5FFF', note: 'Focus ring' },
  { token: '--color-placeholder', value: '#2A1A3B', note: 'Image fallback' },
]

export const typography = {
  families: [
    {
      token: '--font-sans',
      value: '"Helvetica Neue", Helvetica, Arial, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
      note: 'Primary UI and body',
    },
    {
      token: '--font-serif',
      value: 'Georgia, "Times New Roman", "Songti SC", serif',
      note: 'Declared in foundation',
    },
  ],
  scale: [
    { token: '--text-xs', value: '0.8125rem', note: '13px' },
    { token: '--text-sm', value: '0.9375rem', note: '15px' },
    { token: '--text-base', value: '1.0625rem', note: '17px' },
    { token: '--text-md', value: '1.25rem', note: '20px' },
    { token: '--text-lg', value: '1.5625rem', note: '25px' },
    { token: '--text-xl', value: '1.9375rem', note: '31px' },
    { token: '--text-2xl', value: '2.4375rem', note: '39px' },
  ],
  leading: [
    { token: '--leading-tight', value: '1.2', note: 'Headlines' },
    { token: '--leading-snug', value: '1.35', note: 'Compact blocks' },
    { token: '--leading-body', value: '1.6', note: 'Body copy' },
  ],
  weights: [
    { token: '--weight-regular', value: '400', note: '' },
    { token: '--weight-medium', value: '600', note: 'Labeled medium; value is 600' },
    { token: '--weight-bold', value: '700', note: '' },
  ],
  letterSpacing: [
    { token: 'headlines', value: '-0.01em', note: 'Page H1, section H2' },
    { token: 'labels', value: '0.06em', note: 'Uppercase kickers and labels' },
  ],
}

export const spacing = [
  { token: '--space-1', value: '0.25rem', note: '4px' },
  { token: '--space-2', value: '0.5rem', note: '8px' },
  { token: '--space-3', value: '0.75rem', note: '12px' },
  { token: '--space-4', value: '1rem', note: '16px' },
  { token: '--space-5', value: '1.5rem', note: '24px' },
  { token: '--space-6', value: '2rem', note: '32px' },
  { token: '--space-7', value: '3rem', note: '48px' },
  { token: '--space-8', value: '4rem', note: '64px' },
  { token: '--space-9', value: '6rem', note: '96px' },
]

export const layout = [
  { token: '--container', value: '70rem', note: '1120px max width' },
  { token: '--gutter', value: 'var(--space-4)', note: 'Becomes --space-5 at 48em' },
  { token: '--header-h', value: '3.5rem', note: '56px' },
  { token: '--tap', value: '2.75rem', note: '44px minimum target' },
]

export const breakpoints = [
  { token: '40em', value: '640px', note: 'Toolbar / collections / latest' },
  { token: '48em', value: '768px', note: 'Gutter bump, story row, CTA' },
  { token: '56em', value: '896px', note: 'Top story, footer, news grid' },
  { token: '64em', value: '1024px', note: 'Toolbar 4-col, aside, home hero' },
]

export const visual = [
  { token: '--radius', value: '4px', note: 'Primary corner radius' },
  { token: 'border-1', value: '1px', note: 'Hairlines with --color-border' },
  { token: 'border-2', value: '2px', note: 'Section underlines / button outlines' },
  { token: 'border-3', value: '3px', note: 'Keypoints top / focus ring width' },
  { token: 'border-4', value: '4px', note: 'Brand accent bars' },
  {
    token: 'focus',
    value: '3px solid var(--color-focus)',
    note: 'outline-offset: 2px',
  },
  { token: 'shadow', value: 'none', note: 'No elevation system in foundation' },
]

function rowsToTable(rows) {
  const lines = ['| Token | Value | Notes |', '| --- | --- | --- |']
  for (const row of rows) {
    lines.push(`| \`${row.token}\` | \`${row.value}\` | ${row.note || '—'} |`)
  }
  return lines.join('\n')
}

export function buildDesignMarkdown() {
  return [
    '# RITS Design Language',
    '',
    'Shared foundation tokens from rits_home_v3, rits_news_2, and rits_news_article_v2.',
    '',
    '## Color',
    '',
    rowsToTable(colors),
    '',
    '## Typography',
    '',
    '### Families',
    '',
    rowsToTable(typography.families),
    '',
    '### Scale (major third, 1.25)',
    '',
    rowsToTable(typography.scale),
    '',
    '### Leading',
    '',
    rowsToTable(typography.leading),
    '',
    '### Weights',
    '',
    rowsToTable(typography.weights),
    '',
    '### Letter-spacing conventions',
    '',
    rowsToTable(typography.letterSpacing),
    '',
    '## Spacing & layout',
    '',
    'Spacing uses a 4px base.',
    '',
    rowsToTable(spacing),
    '',
    '### Layout',
    '',
    rowsToTable(layout),
    '',
    '### Breakpoints',
    '',
    rowsToTable(breakpoints),
    '',
    '## Visual properties',
    '',
    rowsToTable(visual),
    '',
  ].join('\n')
}
