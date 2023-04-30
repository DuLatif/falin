import { useEffect, useState } from "react"
import { IInputFileProps } from "./InputFile"

const useLogic = (propsParam: IInputFileProps) => {
  const { onChange, ...props } = propsParam
  const [fileName, setFileName] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [files, setFiles] = useState<FileList | File[]>([])

  useEffect(() => {
    if (file && onChange && !props.multiple) {
      onChange(file)
    }
  }, [file])

  useEffect(() => {
    if (files && onChange && props.multiple) {
      onChange(files)
    }
  }, [files])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (!props.multiple) {
        setFileName(e.target.files[0].name)
        setFile(e.target.files[0])
      } else {
        setFiles(e.target.files)
      }
    }
  }

  return {
    // --- state ---
    params: propsParam,
    fileName,
    files,

    // --- function ---
    setFiles,
    handleChangeInput,
  }
}

export default useLogic
