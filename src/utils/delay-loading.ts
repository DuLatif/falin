/**
 *
 * @param importFn this function from React.lazy function
 * @returns Promise
 */
export const delayLoading = (importFn: any) => {
  return Promise.all([importFn, new Promise((resolve) => setTimeout(resolve, 2000))]).then(
    ([moduleExports]) => moduleExports
  )
}
