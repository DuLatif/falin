import { useEffect, useRef, useState } from "react"

type TonChange = ((file: File | null) => void) | undefined
const useLogic = (onChange: TonChange) => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [isImage, setIsImage] = useState(false)
  const [imgSources, setImgSources] = useState<string | ArrayBuffer | null>(null)
  const [onDropZone, setOnDropZone] = useState(false)

  useEffect(() => {
    if (file) {
      const fileName = file?.name.split(".")
      const extension = fileName[fileName.length - 1]
      const imagesExtansion = ["jpg", "jpeg", "png"]
      setIsImage(imagesExtansion.includes(extension))
    }
    setIsImage(false)
  }, [file])

  const reset = () => {
    setFile(null)
    setIsImage(false)
    setImgSources(null)
  }

  const handleFile = (file: File | null) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result
        setImgSources(result)
      }
      reader.readAsDataURL(file)
    }
    setOnDropZone(false)
  }

  const handleDrop = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault()

    if (ev.dataTransfer.items) {
      handleFile(ev.dataTransfer.items[0].getAsFile())
    } else {
      handleFile(ev.dataTransfer.files[0])
    }
  }

  const handleDrag = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault()
    setOnDropZone(true)
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file) {
        setFile(file)
        const reader = new FileReader()
        reader.onload = () => {
          const result = reader.result
          setImgSources(result)
        }
        reader.readAsDataURL(file)
        if (onChange) onChange(file)
      }
    }
  }

  const handleUpload = () => fileInput?.current?.click()

  const removeFile = () => {
    setImgSources("")
    setFile(null)
    if (onChange) onChange(null)
  }

  return {
    // ----- state -----
    fileInput,
    imgSources,
    isImage,
    file,
    onDropZone,
    // ----- set state -----
    setOnDropZone,
    // ----- function -----
    reset,
    handleFile,
    handleDrop,
    handleDrag,
    handleChangeInput,
    handleUpload,
    removeFile,
  }
}

export default useLogic
