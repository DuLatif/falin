import { Box, Button, Pagination as MuiPagination } from "@mui/material"
import React, { useId } from "react"
import classes from "./Pagination.module.scss"
import { ArrowLeft, ArrowRight } from "phosphor-react"

export interface PaginationProps {
  onNext: () => void
  onPrev: () => void
  page: number
  onChange: (val: number) => void
  total: number
  defaultPage?: number
}
const Pagination: React.FC<PaginationProps> = ({ onNext, onPrev, page, total, onChange, defaultPage = 1 }) => {
  const id = useId()

  return (
    <Box id={id} className={classes.Container}>
      <Button
        disabled={page === 1}
        variant="outlined"
        color="inherit"
        startIcon={<ArrowLeft size={18} weight="bold" />}
        onClick={onPrev}
      >
        Previous
      </Button>
      <MuiPagination
        onChange={(_, page) => onChange(page)}
        count={total}
        shape="rounded"
        page={page}
        defaultPage={defaultPage}
        hideNextButton={true}
        hidePrevButton={true}
      />
      <Button
        disabled={page === total}
        variant="outlined"
        color="inherit"
        endIcon={<ArrowRight size={18} weight="bold" />}
        onClick={onNext}
      >
        Next
      </Button>
    </Box>
  )
}

export default Pagination
