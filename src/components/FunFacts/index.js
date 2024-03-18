import { useState } from "react";

import Modal from "../Modal";

const FunFacts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="facts" className="facts-wrapper">
      <Modal modalOpen={modalOpen} onClose={closeModal} />
      <section className="facts container">
        <div className="facts-segment   ">
          <h2 className="sub-header">Superpowers</h2>
          <div className="facts-icon">
            <i className="fas fa-code"></i>
          </div>
          <ul>
            <li>Communicating technical concepts</li>
            <li>Learning new frameworks</li>
            <li>Results-driven development</li>
          </ul>
        </div>
        <div className="facts-segment  ">
          <h2 className="sub-header">Fun Facts</h2>
          <div className="facts-icon">
            <i className="fas fa-language"></i>
          </div>
          <ul>
            <li>Speak 3 languages: English, Spanish, German</li>
            <li>Lived in Mexico for 4 years</li>
            <li className="activate-modal" onClick={openModal}>
              <span className="modal-text">
                Regularly train Brazilian Jiu Jitsu
              </span>
              <i className="fas fa-video"></i>
            </li>
          </ul>
        </div>
        <div className="facts-segment  ">
          <h2 className="sub-header">What matters to me</h2>
          <div className="facts-icon">
            <i className="fas fa-heart"></i>
          </div>
          <ul>
            <li>Sincerity and honesty</li>
            <li>Being kind with yourself and others</li>
            <li>Appreciating each person's humanity</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FunFacts;
