import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useCreateUser } from "../../hooks/useCreateUser";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useCreateUser();

  const submit = async (email: string, password: string) => {
    await createUser({
      variables: {
        createUserInput: {
          email,
          password,
        },
      },
    });
  };

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "35%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={() => submit(email, password)}>
        Register
      </Button>
    </Stack>
  );
};

export default RegisterPage;
