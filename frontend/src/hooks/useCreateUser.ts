import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";
import type { User } from "../models/user";

interface CreateUserInput {
  createUserData: {
    email: string;
    password: string;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($createUserData: CreateUserInput!) {
    createUser(createUserData: $createUserData) {
      _id
      email
    }
  }
`;

const useCreateUser = () => {
  return useMutation<User, CreateUserInput>(CREATE_USER);
};
export { useCreateUser };
