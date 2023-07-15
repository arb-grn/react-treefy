import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { Tree } from "react-treefy";
const tree = {
  label: "1",
  color: "#D3D5D9",
  children: [
    {
      label: "11",
    },
    {
      label: "14",
    },
    {
      label: "15",
    },
  ],
};

const App: React.FC = () => (
  <div
    style={{
      overflow: "auto",
      background: "#FDFDFD",
    }}
  >
    <Tree
      data={tree}
      node={(label) => (
        <Box
          sx={{
            border: "2px solid",
            borderColor: "#D3D5D9",
            width: "300px",
            borderRadius: "8px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            p={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid",
              borderColor: "#D3D5D9",
            }}
          >
            <Typography>BestRun Corporation</Typography>
          </Box>
          <Box p={2} display="flex" gap={2} alignItems="center">
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Box>
              <Typography>Travis Howard</Typography>
              <Typography>Cheif Operating Officer</Typography>
            </Box>
          </Box>
        </Box>
      )}
    />
  </div>
);

export default App;
