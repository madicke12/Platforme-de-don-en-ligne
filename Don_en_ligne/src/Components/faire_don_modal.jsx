import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Select,
  Box
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { Form } from "react-router-dom";

const Faire_donModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Faire un don</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Faire un don</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Form method="post">
              <FormControl isRequired>
                <FormLabel>Montant du don</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="montant"
                  type="number"
                  name="montant"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Methode de payement</FormLabel>
                <Select placeholder="choisir une option" name="operateur">
                  <option value="wave">Wave</option>
                  <option value="orangeMoney">Orange Money</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Numero du compte correspondant</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Numero Compte"
                  type="number"
                  name="NumeroComptet"
                />
              </FormControl>
              <Box>
                <Button type="submit" colorScheme="blue" mt={5}>
                  Valider
                </Button>
              </Box>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Faire_donModal;
