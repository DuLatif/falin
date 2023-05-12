import MaterialReactTable, { type MRT_ColumnDef, type MRT_Icons } from "material-react-table"
import {
  ArrowDown,
  CornersIn,
  CornersOut,
  DotsSix,
  DotsThreeOutline,
  DotsThreeOutlineVertical,
  EyeSlash,
  FadersHorizontal,
  Funnel,
  List,
  MagnifyingGlass,
  MagnifyingGlassMinus,
  PushPinSimple,
  SortAscending,
  SquareHalf,
} from "phosphor-react"
import React, { useMemo } from "react"
import { data, type Person } from "./makeData"

const phosphorIcon: Partial<MRT_Icons> = {
  ArrowDownwardIcon: (props: any) => <ArrowDown weight="regular" {...props} />,
  ClearAllIcon: () => <FadersHorizontal weight="regular" />,
  DensityLargeIcon: () => <List weight="regular" />,
  DensityMediumIcon: () => <List weight="regular" />,
  DensitySmallIcon: () => <List weight="regular" />,
  DragHandleIcon: () => <DotsSix weight="regular" />,
  FilterListIcon: (props: any) => <Funnel weight="regular" {...props} />,
  FilterListOffIcon: () => <Funnel weight="bold" />,
  FullscreenExitIcon: () => <CornersIn weight="regular" />,
  FullscreenIcon: () => <CornersOut weight="regular" />,
  SearchIcon: (props: any) => <MagnifyingGlass weight="regular" {...props} />,
  SearchOffIcon: () => <MagnifyingGlassMinus weight="regular" />,
  ViewColumnIcon: () => <SquareHalf weight="regular" />,
  MoreVertIcon: () => <DotsThreeOutlineVertical weight="regular" />,
  MoreHorizIcon: () => <DotsThreeOutline weight="regular" />,
  SortIcon: (props: any) => (
    <SortAscending weight="regular" {...props} /> //props so that style rotation transforms are applied
  ),
  PushPinIcon: (props: any) => (
    <PushPinSimple weight="regular" {...props} /> //props so that style rotation transforms are applied
  ),
  VisibilityOffIcon: () => <EyeSlash weight="regular" />,
}

function createData(name: string, status: boolean, role: string, email: string, teams: string[]) {
  return { name, status, role, email, teams }
}

const rows = [
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
  createData("Olivia Rhye", true, "Product Designer", "olivia@untitledui.com", ["Design", "Product", "Marketing"]),
]

const TableData: React.FC = () => {
  const columns = useMemo(
    //column definitions...
    () =>
      [
        {
          accessorKey: "firstName",
          header: "First Name",
        },
        {
          accessorKey: "lastName",
          header: "Last Name",
        },

        {
          accessorKey: "address",
          header: "Address",
        },
        {
          accessorKey: "city",
          header: "City",
        },

        {
          accessorKey: "state",
          header: "State",
        },
      ] as MRT_ColumnDef<Person>[],
    [] //end
  )

  return (
    <div>
      <MaterialReactTable columns={columns} data={data} enableColumnOrdering icons={phosphorIcon} />
    </div>
  )
}

export default TableData
