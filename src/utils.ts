export function slash(str: string) {
  return str.replace(/\\/g, '/')
}

export function resolveBasePath(base: string) {
  if (isAbsolute(base))
    return base

  let basePath = base
  if (!basePath.endsWith('/'))
    basePath = `${basePath}/`

  if (!basePath.startsWith('/') && !basePath.startsWith('./'))
    basePath = `/${basePath}`

  return basePath
}

export function isAbsolute(url: string) {
  return url.match(/^(?:[a-z]+:)?\/\//i)
}

export function normalizePath(path: string) {
  return path.replace(/\\/g, '/')
}
