import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import CircleLoader from "react-spinners/CircleLoader";

const Feeds = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Box flex={4} p={2}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "300px",
            }}
          >
            <CircleLoader
              loading={loading}
              color="blue"
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Box>
        ) : (
          <Post />
        )}
      </Box>
    </>
  );
};

export default Feeds;
