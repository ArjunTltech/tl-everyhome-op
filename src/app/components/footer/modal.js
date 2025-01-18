'use client';

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Clock, Book, Info, AlertCircle, Mail } from 'lucide-react';

const CenteredModal = ({ modalHeader, modalBody, effectiveDate, lastDate, show, onHide }) => {
  const renderContent = (text) => {
    const sections = text.split('\n\n').map((section) => {
      if (/^\d+\./.test(section)) {
        const [title, ...content] = section.split('\n');
        const sectionNumber = title.split('.')[0];
        const sectionTitle = title.split('.')[1]?.trim();

        // Process content to identify bullet points or plain text
        const formattedContent = content.flatMap((item) => {
          if (item.trim().startsWith('•')) {
            return [{ type: 'bullet', content: item.trim().substring(1).trim() }];
          }
          return [{ type: 'text', content: item.trim() }];
        });

        return {
          type: 'section',
          number: sectionNumber,
          title: sectionTitle,
          content: formattedContent,
        };
      }

      // Treat everything else as a paragraph
      return { type: 'paragraph', content: section.trim() };
    });

    return sections.flatMap((item) => {
      if (item.type === 'section') {
        return [
          {
            type: 'section',
            number: item.number,
            title: item.title,
            content: item.content.map((contentItem) =>
              contentItem.type === 'bullet'
                ? contentItem
                : { type: 'text', content: contentItem.content }
            ),
          },
        ];
      }

      return item;
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="terms-modal"
    >
      <Modal.Header closeButton className="py-4">
        <div className="d-flex align-items-center">
          <Book className="me-3 text-primary" size={24} />
          <Modal.Title id="contained-modal-title-vcenter" className="mb-0 h4">
            {modalHeader}
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body className="p-0">
        {/* Date Information Banner */}
        <div className="bg-light border-top border-bottom px-4 py-3">
          <div className="d-flex flex-wrap gap-4">
            {effectiveDate && (
              <div className="d-flex align-items-center">
                <Clock size={18} className="text-secondary me-2" />
                <span className="text-secondary small">
                  Effective: <strong>{effectiveDate}</strong>
                </span>
              </div>
            )}
            {lastDate && (
              <div className="d-flex align-items-center">
                <Info size={18} className="text-secondary me-2" />
                <span className="text-secondary small">
                  Last Updated: <strong>{lastDate}</strong>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 terms-content">
          {renderContent(modalBody).map((item, index) => {
            if (item.type === 'paragraph') {
              return (
                <div key={index} className="mb-4">
                  <p className="text-secondary">{item.content}</p>
                </div>
              );
            }

            if (item.type === 'section') {
              return (
                <div key={index} className="mb-4 section-container">
                  <div className="d-flex align-items-start mb-3">
                    <div className="section-number me-3 h5 text-primary">
                      {item.number}
                    </div>
                    <h3 className="h5 mb-0 text-dark">{item.title}</h3>
                  </div>
                  <div className="ms-4">
                    {item.content.map((contentItem, i) => {
                      if (contentItem.type === 'bullet') {
                        return (
                          <div key={i} className="d-flex align-items-start mb-2">
                            <div className="bullet-point me-2">•</div>
                            <p className="mb-0 text-secondary">{contentItem.content}</p>
                          </div>
                        );
                      }
                      return (
                        <p key={i} className="mb-2 text-secondary">
                          {contentItem.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>


        {/* Contact Footer */}
        {modalBody.includes('Contact Us') && (
          <div className="border-top px-4 py-3 bg-light">
            <div className="d-flex align-items-center">
              <Mail size={18} className="text-primary me-2" />
              <span className="text-secondary small">
                Questions? Contact us at{' '}
                <strong>
                  <a href="mailto:sangi@tltechnologies.net" className="text-danger text-decoration-none">
                    sangi@tltechnologies.net
                  </a>
                </strong>
              </span>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default CenteredModal;