import { Box, Button, Chip, Stack, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { NotePencil, Trash } from "phosphor-react"
import React from "react"

function createData(name: string, status: boolean, role: string, email: string, teams: string[]) {
  return { name, status, role, email, teams }
}

const rows = [
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
]

const TableGuide: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6">Table Guide</Typography>
      <Box mt={4}>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Teams</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {row.status ? (
                      <Chip label="Active" size="small" color="success" />
                    ) : (
                      <Chip label="Offline" size="small" color="error" />
                    )}
                  </TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>
                    {row.teams.map((team) => (
                      <Chip size="small" key={team} color="primary" label={team} />
                    ))}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button data-shape="icon" variant="text" color="success">
                        <NotePencil size={22} weight="bold" />
                      </Button>
                      <Button data-shape="icon" variant="text" color="error">
                        <Trash size={22} weight="bold" />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default TableGuide
