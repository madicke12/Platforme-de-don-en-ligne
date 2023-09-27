// HistoriqueDons.jsx
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  StackDivider,
  Box,
  Stack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import Loader from "./loader";
export const HistoriqueLoader = () => {
  try {
    const results = axios.get("http://localhost:8000/dons/historique", {
      withCredentials: true,
    });
    return defer({ historiques: results });
  } catch (err) {
    console.log(err);
  }
  return null;
};

const HistoriqueDons = () => {
  const Donations = useLoaderData();
  console.log(Donations);

  return (
    <Suspense fallback={<Loader />}>
      <div>
      <Heading size="md" textAlign={'center'}>Client Report</Heading>
        <Await resolve={Donations.historiques}>
          {(histori) => {
            return (
              <>
                {histori.data.map((donation) => (
                  
                  <Card key={donation._id}>
                    <CardBody>
                      <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            {donation.organisation}
                          </Heading>
                          <HStack align={"center"} display={'flex'} justify={"space-between"} p={'10px'}>
                          <Text  fontSize="sm">
                            {donation.montant + ' CFA'}
                          </Text>
                          <Text color={"blue.300"}>{donation.date}</Text>
                          </HStack>
                        </Box>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </>
            );
          }}
        </Await>
      </div>
    </Suspense>
  );
};

export default HistoriqueDons;
