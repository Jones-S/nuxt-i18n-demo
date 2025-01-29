export const useVerifyLocale = (locale: string, path: string) => {
  if (path.startsWith(`/${locale}`)) {
    return path
  } else {
    return `/${locale}${path}`
  }
}

export const useRemoveLocale = (locale: string, path: string) => {
  if (path.startsWith(`/${locale}`)) {
    return path.replace(`/${locale}`, '')
  } else {
    return `${path}`
  }
}
