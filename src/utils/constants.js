import { Text, Spacer } from "@nextui-org/react";

export const constants = {
  BRAND_NAME: "Kyro",
  TITLE: "Marksheet Management",
  REGISTER_MARKSHEET: "Register Marksheet",
  RETRIEVE_MARKSHEET: "Retrieve Marksheet",
  SHORT_HOW_TO: () => (
    <Text blockquote>
      click on the "Register Marksheet" button to upload your marksheet image
      and it will be saved in our database.
      <Spacer y={1} />
      Alternatively, click on the "Retrieve Marksheet" button to search for a
      marksheet using the roll number.
    </Text>
  ),
  UPLOAD_MARKSHEET_TITLE: " Upload Marksheet Image",
  UPLOAD_BUTTON_TEXT: "Upload",
  UPLOAD_LOADING_TEXT: "Uploading Marksheet",
  SEARCH_LOADING_TEXT: "Retrieving Marksheet",
  SUBJECT_COLUMN_TEXT: "Subject",
  MARKS_COLUMN_TEXT: "Marks",
  NAVIGATE_HOME_TEXT: "Go Back",
  SEARCH_MARKSHEET_TITLE: "Search Marksheet using Roll Number",
  SEARCH_BUTTON_TEXT: "Search",
  SEARCH_INPUT_PLACEHOLDER: "Enter Roll Number",
};

export const API_ENDPOINT = "http://3.234.67.196:8000";
