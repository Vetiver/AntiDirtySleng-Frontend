import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";

function ConfirmModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  return (
    <Modal isOpen={isOpen} isCentered={true} size={"sm"} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Проверьте вашу почту</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ConfirmModal;
