import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaRegClock } from 'react-icons/fa';  // Import an icon from react-icons

const CenteredModal = ({ modalHeader, modalBody, UpdatedDate, show, onHide }) => {
  const modalStyles = {
    modalContent: {
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    modalHeader: {
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd',
    },
    modalBody: {
      padding: '20px',
      backgroundColor: '#ffffff',
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#333',
    },
    modalUpdateInfo: {
      display: 'flex',
      alignItems: 'center',
      color: '#6c757d',
      marginBottom: '10px',
    },
    modalUpdateInfoText: {
      fontSize: '0.9rem',
      margin: '0',
    },
    modalBodyText: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#444',
      whiteSpace: 'pre-wrap',
    },
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="custom-modal"
      style={modalStyles.modalContent} // Apply inline style for the modal content
    >
      <Modal.Header closeButton style={modalStyles.modalHeader}>
        <Modal.Title id="contained-modal-title-vcenter" style={modalStyles.modalTitle}>
          {/* <FaRegClock style={{ marginRight: '8px' }} /> */}
          {modalHeader}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalStyles.modalBody}>
        {UpdatedDate && (
          <div style={modalStyles.modalUpdateInfo}>
            <FaRegClock style={{ marginRight: '6px' }} />
            <h6 style={modalStyles.modalUpdateInfoText}>Latest update: {UpdatedDate}</h6>
          </div>
        )}
        <p style={modalStyles.modalBodyText}>{modalBody}</p>
      </Modal.Body>
    </Modal>
  );
};

export default CenteredModal;
