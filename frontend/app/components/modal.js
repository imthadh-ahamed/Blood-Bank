import React from "react";
import Modal from "react-modal";

// Modal.setAppElement("#__next"); // This ensures screen readers are not hidden from the rest of the content

const CustomModal = ({ isOpen, onRequestClose, children }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        borderRadius: "8px",
      },
    }}
  >
    {children}
  </Modal>
);

export default CustomModal;
