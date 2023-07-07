import React from "react";
import { Box, Typography } from "@mui/material";

export default function LargeHorizontalProject({
  image = "",
  title = "Project",
  description = "Description",
  color = "neutral.main",
  textColor = "neutral.contrastText",
}) {
  return (
    <Box
      flexDirection={"column"}
      width={700}
      height={560}
      bgcolor={color}
      display={"flex"}
      alignItems={"center"}
    >
      <img src={image} alt="Project" width={700} height={400} />
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={4}
      >
        <Typography variant="h2" color={textColor}>
          {title}
        </Typography>
        <Typography variant="body1" color={textColor}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
