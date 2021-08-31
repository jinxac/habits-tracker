import React from "react";

import { Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import Heading from "./components/Heading";
import Body from "./components/Body";



const Home = () => {
  return (
    <>
      <Heading />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
          New Entry
      </Button>
      <Body />
    </>
  );
};

export default Home;