module.exports = {
  placeholder: {
    type: 'string',
    description: 'Placeholder content within the search box',
    default: 'Search',
  },
  renderHitContent: {
    type: 'function',
    description:
      'Render function for displaying search results. Function returns `hit` data and a `Highlight` component in an object as arguments.',
    required: true,
  },
  resolveHitLink: {
    type: 'function',
    description:
      'Optional function to transform the results of any given hit. Primarily used to remove `/index` from resuling urls',
  },
}