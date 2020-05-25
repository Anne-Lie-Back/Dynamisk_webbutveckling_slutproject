import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  FormField,
  TextInput,
  Button,
  Form,
  Box,
  ResponsiveContext,
} from "grommet";
import { Search } from "grommet-icons";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const responsive = useContext(ResponsiveContext);
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/shop/search/" + input);
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box direction="row">
        <FormField>
          <TextInput
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Sök"
            size="medium"
          />
        </FormField>
        <Button
          margin={{ right: "medium" }}
          icon={<Search size={responsive === "small" ? "1.7rem" : "2.3rem"} />}
          type="submit"
        />
      </Box>
    </Form>
  );
};

export default SearchBar;
