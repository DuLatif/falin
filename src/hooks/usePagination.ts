import { useState } from "react"

export interface IusePagination {
  total?: number
  page?: number
  limit?: number
  search?: string
  status?: string
}

const usePagination = ({ total = 10, page = 1, limit = 5, search = "", status = "" }: IusePagination) => {
  const [paginationState, setPaginationState] = useState({
    page: page,
    limit: limit,
    total: total,
    search: search,
    status: status,
    onPrev: () => {
      setPaginationState((prevState) => {
        return {
          ...paginationState,
          page: (prevState.page ?? 1) - 1,
        }
      })
    },
    onNext: () => {
      setPaginationState((prevState) => {
        return {
          ...paginationState,
          page: (prevState.page ?? 1) + 1,
        }
      })
    },
    onChange: (val: number) =>
      setPaginationState({
        ...paginationState,
        page: val,
      }),
  })

  return paginationState
}

export default usePagination
