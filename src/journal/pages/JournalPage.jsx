import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../view";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
      <JournalLayout>
        <NoteView />
        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
              ':hover': { backgroundColor: "error.main", opacity: 0.8 },
            position: "fixed",
            bottom: 20,
            right: 20
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
  )
}
