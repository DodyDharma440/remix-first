import React from "react";
import { useLoaderData, LoaderFunction } from "remix";
import { Box } from "@chakra-ui/react";
import { IUserData } from "~/interfaces/user";
import { getUserData } from "~/api";

export const loader: LoaderFunction = async ({
  request,
  params,
}): Promise<IUserData> => {
  const { data } = await getUserData();

  return data.results[0];
};

const Home = () => {
  const data = useLoaderData<IUserData>();

  return (
    <Box>
      <p>react remix home</p>
      <h1>
        the data is : <pre>{JSON.stringify(data, null, 2)}</pre>
      </h1>
    </Box>
  );
};

export default Home;
