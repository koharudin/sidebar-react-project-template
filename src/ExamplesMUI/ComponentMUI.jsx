import React from "react"
import ContinuousSlider from "./Example_ContinuousSlider.tsx"
import ComboBox from "./Example_Autocomplete.tsx"
import IconLabelButtons from "./Example_Button.tsx"
import SplitButton from "./Example_SplitButton.tsx"
import CheckboxLabels from "./Example_Checkbox.tsx"
import FloatingActionButtons from "./Example_FabIcons.tsx"
import RadioButtonsGroup from "./Example_RadioGroup.tsx"
import BasicRating from "./Example_Rating.tsx"
import SelectLabels from "./Example_Select.tsx"
import SliderSizes from "./Example_Slider.tsx"
import SwitchLabels from "./Example_Switch.tsx"
import ValidationTextFields from "./Example_Textfield.tsx"
import InputWithIcon from "./Example_Textfield2.tsx"
import SelectAllTransferList from "./Example_TransferList.tsx"
import CustomizedDividers from "./Example_ToggleButton.tsx"
import LetterAvatars from "./Example_Avatar.tsx"
import BadgeVisibility from "./Example_Badge.tsx"
import AvatarChips from "./Example_Chip.tsx"
import { List, ListItem, Table } from "@mui/material"
import IntroDivider from "./Example_Divider.tsx"
import CreateSvgIcon from "./Example_Icons.tsx"
import AlignItemsList from "./Example_List.tsx"
import DataTable from "./Example_Datagrid.tsx"
import AutoHeightOverlayNoSnap from "./Example_Layout.tsx"
import VariableWidth from "./Example_Tooltip.tsx"
import Types from "./Example_Typography.tsx"
import BasicAlerts from "./Example_Alerts.tsx"
import SimpleBackdrop from "./Example_Backdrop.tsx"
import MaxWidthDialog from "./Example_Dialog.tsx"
import CircularIntegration from "./Example_Progress.tsx"
import CustomizedSnackbars from "./Example_Snackbar.tsx"
import CustomizedAccordions from "./Example_Accordion.tsx"
import PrimarySearchAppBar from "./Example_Appbar.tsx"
import BottomAppBar from "./Example_BottomAppbar.tsx"
import RecipeReviewCard from "./Example_Card.tsx"
const ComponentMUI = (props) => {
  return (
    <>
      <List sx={{ width: "100%",  bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ComboBox />
        </ListItem>
        <ListItem>
          <IconLabelButtons />
        </ListItem>
        <ListItem>
          <SplitButton />
        </ListItem>
        <ListItem>
          <CheckboxLabels />
        </ListItem>
        <ListItem>
          {" "}
          <FloatingActionButtons />
        </ListItem>
        <ListItem>
          <IntroDivider />
        </ListItem>
        <ListItem>
          <CreateSvgIcon />
        </ListItem>
        <ListItem>
          <AlignItemsList />
        </ListItem>
        <ListItem>
          <RadioButtonsGroup />
        </ListItem>
        <ListItem>
          <BasicRating />
        </ListItem>
        <ListItem>
          <SelectLabels />
        </ListItem>
        <ListItem>
          <SliderSizes />
        </ListItem>
        <ListItem>
          <ContinuousSlider />
        </ListItem>
        <ListItem>
          <SwitchLabels />
        </ListItem>
        <ListItem>
          <ValidationTextFields />
        </ListItem>
        <ListItem>
          {" "}
          <InputWithIcon />
        </ListItem>
        <ListItem>
          {" "}
          <SelectAllTransferList />
        </ListItem>
        <ListItem>
          <CustomizedDividers />
        </ListItem>
        <ListItem>
          {" "}
          <LetterAvatars />
        </ListItem>
        <ListItem>
          {" "}
          <BadgeVisibility />
        </ListItem>
        <ListItem>
          <AvatarChips />
        </ListItem>
        <ListItem>
          <DataTable />
        </ListItem>
        <ListItem><AutoHeightOverlayNoSnap/></ListItem>
        <ListItem><VariableWidth/></ListItem>
        <ListItem><Types/></ListItem>
        <ListItem><BasicAlerts/></ListItem>
        <ListItem><SimpleBackdrop/></ListItem>
        <ListItem><MaxWidthDialog/></ListItem>
        <ListItem><CircularIntegration></CircularIntegration></ListItem>
        <ListItem><CustomizedSnackbars/></ListItem>
        <ListItem><CustomizedAccordions/></ListItem>
        <ListItem><PrimarySearchAppBar/></ListItem>
        <ListItem><BottomAppBar/></ListItem>
        <ListItem><RecipeReviewCard/></ListItem>
      </List>
    </>
  )
}
export default ComponentMUI
