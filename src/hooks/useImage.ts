import ImgPlaceholder from "@/assets/img-placeholder.svg"
import { useEffect, useRef } from "react"

const useImage = ({ src }: { src: string }) => {
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (src) {
      imgRef.current?.addEventListener("error", (e) => {
        const img = e.target as HTMLImageElement
        img.setAttribute("src", ImgPlaceholder)
      })
    } else {
      const img = imgRef.current
      if (img) {
        img.setAttribute("src", ImgPlaceholder)
      }
    }
  }, [imgRef, src])

  return {
    ref: imgRef,
    src: src ?? "",
  }
}

export default useImage
