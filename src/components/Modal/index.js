import { InstagramEmbed } from "react-social-media-embed";

const Modal = ({ modalOpen, onClose }) => {
  if (modalOpen !== true) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="close-icon">
          <i className="fas fa-times" onClick={onClose}></i>
        </div>
        <InstagramEmbed
          url="https://www.instagram.com/p/C3QJYkVAybq/"
          // width={328}
          className="embedded"
        />
      </div>
    </div>
  );
};

export default Modal;
