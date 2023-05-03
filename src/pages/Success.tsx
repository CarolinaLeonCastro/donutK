import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Success() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent bgColor={"cyan.100"}>
        <ModalHeader
          fontFamily={"Gloria Hallelujah"}
          textColor={"orange.300"}
          fontSize={"2xl"}
        >
          Successful Command
        </ModalHeader>
        <ModalBody>
          <p>Your command was successful. Thank you for shopping with us!</p>
        </ModalBody>

        <ModalFooter>
          <Link to="/showall">
            <Button
              bgColor={"pink.300"}
              rounded={"full"}
              mr={2}
              onClick={handleClose}
              fontFamily={"Gloria Hallelujah"}
             
            >
              Continue Shopping
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Success;
