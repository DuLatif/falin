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
    path: "/design-system/typography",
    icon: <TextT size={26} weight={"bold"} />,
  },
  {
    text: "Shadows",
    path: "/design-system/shadow",
    icon: <WaveSine size={26} weight={"bold"} />,
  },
  {
    text: "Colors",
    path: "/design-system/color",
    icon: <Palette size={26} weight={"bold"} />,
  },
  {
    text: "Icons",
    path: "/design-system/icon",
    icon: <Smiley size={26} weight={"bold"} />,
  },
  {
    text: "Spacing",
    path: "/design-system/spacing",
    icon: <SquaresFour size={26} weight={"bold"} />,
  },
]

export const listMenuForms: IMenuProps[] = [
  {
    text: "Inputs",
    path: "/design-system/input",
    icon: <Textbox size={26} weight={"bold"} />,
  },
  {
    text: "Checkbox",
    path: "/design-system/checkbox",
    icon: <CheckCircle size={26} weight={"bold"} />,
  },
  {
    text: "Radio",
    path: "/design-system/radio",
    icon: <RadioButton size={26} weight={"bold"} />,
  },
  {
    text: "Select",
    path: "/design-system/select",
    icon: <Rows size={26} weight={"bold"} />,
  },
  {
    text: "Upload File",
    path: "/design-system/upload-file",
    icon: <CloudArrowUp size={26} weight={"bold"} />,
  },
  {
    text: "Form Editor",
    path: "/design-system/form-editor",
    icon: <BracketsAngle size={26} weight={"bold"} />,
  },
]

export const listComponents: IMenuProps[] = [
  {
    text: "Button",
    path: "/design-system/button",
    icon: <Rectangle size={26} weight={"bold"} />,
  },
  {
    text: "Badge",
    path: "/design-system/badge",
    icon: <Pill size={26} weight={"bold"} />,
  },

  {
    text: "Avatars",
    path: "/design-system/avatar",
    icon: <UserCircle size={26} weight={"bold"} />,
  },
  {
    text: "Tooltips",
    path: "/design-system/tooltip",
    icon: <Info size={26} weight={"bold"} />,
  },

  {
    text: "Alert",
    path: "/design-system/alert",
    icon: <WarningCircle size={26} weight={"bold"} />,
  },
  {
    text: "Snackbar",
    path: "/design-system/snackbar",
    icon: <BellRinging size={26} weight={"bold"} />,
  },
  {
    text: "Table",
    path: "/design-system/table",
    icon: <Table size={26} weight={"bold"} />,
  },
  {
    text: "Accordion",
    path: "/design-system/accordion",
    icon: <Rows size={26} weight={"bold"} />,
  },
  {
    text: "Card",
    path: "/design-system/card",
    icon: <Cards size={26} weight={"bold"} />,
  },
  {
    text: "Breadcrumbs",
    path: "/design-system/breadcrumb",
    icon: <Link size={26} weight={"bold"} />,
  },
  {
    text: "Tabs",
    path: "/design-system/tabs",
    icon: <Tabs size={26} weight={"bold"} />,
  },
  {
    text: "Modal",
    path: "/design-system/modal",
    icon: <StackSimple size={26} weight={"bold"} />,
  },
]

export const listExtraUI: IMenuProps[] = [
  {
    text: "Chart",
    path: "/design-system/chart",
    icon: <ChartLineUp size={26} weight={"bold"} />,
  },
  {
    text: "Calendar",
    path: "/design-system/calendar",
    icon: <Calendar size={26} weight={"bold"} />,
  },
  {
    text: "Sliders",
    path: "/design-system/slider",
    icon: <Sliders size={26} weight={"bold"} />,
  },
  {
    text: "Map",
    path: "/design-system/map",
    icon: <MapTrifold size={26} weight={"bold"} />,
  },
]
