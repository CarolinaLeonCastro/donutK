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
  
  function Cancel() {
    const [isOpen, setIsOpen] = useState(true);
  
    const handleClose = () => setIsOpen(false);
  
    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader
            fontFamily={"Gloria Hallelujah"}
            textColor={"red.400"}
            fontSize={"2xl"}
          >
            Cancelled Command
          </ModalHeader>
          <ModalBody>
            <p>Your command was cancelled. We're sorry to see you go!</p>
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
  
  export default Cancel;
  