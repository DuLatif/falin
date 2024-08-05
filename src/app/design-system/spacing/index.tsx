import { spacing } from "@/theme/ts/spacing"
import { Box, Card, LinearProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import React from "react"

const SpacingGuide: React.FC = () => {
  const getLength = (value: number) => {
    return (value / spacing[spacing.length - 1]) * 100
  }

  return (
    <Box>
      <Typography variant="h6">Spacing Guide</Typography>
      <Box mt={4}>
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={80} align="center">
                  #
                </TableCell>
                <TableCell width={80}>Value</TableCell>
                <TableCell>Size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {spacing.map((item, i) => (
                <TableRow key={item}>
                  <TableCell align="center">{i}</TableCell>
                  <TableCell align="right">{item}px</TableCell>
                  <TableCell>
                    <LinearProgress
                      sx={{ padding: "4px", borderRadius: "4px" }}
                      variant="determinate"
                      value={getLength(item)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Box>
    </Box>
  )
}

export default SpacingGuide
