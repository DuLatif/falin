import { Chip, Stack } from "@mui/material"

export interface IListFilesProps {
  files: FileList | File[]
  setFiles: React.Dispatch<React.SetStateAction<FileList | File[]>>
}
const ListFiles: React.FC<IListFilesProps> = ({ files, setFiles }) => {
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      spacing={1}
      rowGap={1}
      sx={{
        marginTop: "4px",
      }}
    >
      {Array.from(files).map((item) => (
        <Chip
          key={item.name}
          size="small"
          label={item.name}
          onDelete={() => setFiles(Array.from(files).filter((file) => file.name !== item.name))}
        />
      ))}
    </Stack>
  )
}

export default ListFiles
