import { IMenuProps } from "@/ui/layouts/design-system/Menu"
import {
  TextT,
  Palette,
  Smiley,
  WaveSine,
  Rectangle,
  Pill,
  CheckCircle,
  RadioButton,
  UserCircle,
  Info,
  Sliders,
  WarningCircle,
  BellRinging,
  Table,
  Rows,
  Cards,
  Link,
  Tabs,
  StackSimple,
  Textbox,
  CloudArrowUp,
  Calendar,
  ChartLineUp,
  MapTrifold,
  BracketsAngle,
  SquaresFour,
} from "phosphor-react"

export const listCustomization: IMenuProps[] = [
  {
    text: "Typography",
    path: "/dashboard/typography",
    icon: <TextT size={26} weight={"bold"} />,
  },
  {
    text: "Shadows",
    path: "/dashboard/shadow",
    icon: <WaveSine size={26} weight={"bold"} />,
  },
  {
    text: "Colors",
    path: "/dashboard/color",
    icon: <Palette size={26} weight={"bold"} />,
  },
  {
    text: "Icons",
    path: "/dashboard/icon",
    icon: <Smiley size={26} weight={"bold"} />,
  },
  {
    text: "Spacing",
    path: "/dashboard/spacing",
    icon: <SquaresFour size={26} weight={"bold"} />,
  },
]

export const listMenuForms: IMenuProps[] = [
  {
    text: "Inputs",
    path: "/dashboard/input",
    icon: <Textbox size={26} weight={"bold"} />,
  },
  {
    text: "Checkbox",
    path: "/dashboard/checkbox",
    icon: <CheckCircle size={26} weight={"bold"} />,
  },
  {
    text: "Radio",
    path: "/dashboard/radio",
    icon: <RadioButton size={26} weight={"bold"} />,
  },
  {
    text: "Select",
    path: "/dashboard/select",
    icon: <Rows size={26} weight={"bold"} />,
  },
  {
    text: "Upload File",
    path: "/dashboard/upload-file",
    icon: <CloudArrowUp size={26} weight={"bold"} />,
  },
  {
    text: "Form Editor",
    path: "/dashboard/form-editor",
    icon: <BracketsAngle size={26} weight={"bold"} />,
  },
]

export const listComponents: IMenuProps[] = [
  {
    text: "Button",
    path: "/dashboard/button",
    icon: <Rectangle size={26} weight={"bold"} />,
  },
  {
    text: "Badge",
    path: "/dashboard/badge",
    icon: <Pill size={26} weight={"bold"} />,
  },

  {
    text: "Avatars",
    path: "/dashboard/avatar",
    icon: <UserCircle size={26} weight={"bold"} />,
  },
  {
    text: "Tooltips",
    path: "/dashboard/tooltip",
    icon: <Info size={26} weight={"bold"} />,
  },

  {
    text: "Alert",
    path: "/dashboard/alert",
    icon: <WarningCircle size={26} weight={"bold"} />,
  },
  {
    text: "Snackbar",
    path: "/dashboard/snackbar",
    icon: <BellRinging size={26} weight={"bold"} />,
  },
  {
    text: "Table",
    path: "/dashboard/table",
    icon: <Table size={26} weight={"bold"} />,
  },
  {
    text: "Accordion",
    path: "/dashboard/accordion",
    icon: <Rows size={26} weight={"bold"} />,
  },
  {
    text: "Card",
    path: "/dashboard/card",
    icon: <Cards size={26} weight={"bold"} />,
  },
  {
    text: "Breadcrumbs",
    path: "/dashboard/breadcrumb",
    icon: <Link size={26} weight={"bold"} />,
  },
  {
    text: "Tabs",
    path: "/dashboard/tabs",
    icon: <Tabs size={26} weight={"bold"} />,
  },
  {
    text: "Modal",
    path: "/dashboard/modal",
    icon: <StackSimple size={26} weight={"bold"} />,
  },
]

export const listExtraUI: IMenuProps[] = [
  {
    text: "Chart",
    path: "/dashboard/chart",
    icon: <ChartLineUp size={26} weight={"bold"} />,
  },
  {
    text: "Calendar",
    path: "/dashboard/calendar",
    icon: <Calendar size={26} weight={"bold"} />,
  },
  {
    text: "Sliders",
    path: "/dashboard/slider",
    icon: <Sliders size={26} weight={"bold"} />,
  },
  {
    text: "Map",
    path: "/dashboard/map",
    icon: <MapTrifold size={26} weight={"bold"} />,
  },
]
