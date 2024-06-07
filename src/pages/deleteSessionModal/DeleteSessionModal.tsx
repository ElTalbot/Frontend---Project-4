import React from "react";
import { IUser } from "../../interfaces/user";
import DeleteSessionForm from "../deleteSessionForm/DeleteSessionForm";
import "./deleteSessionModal.scss";

interface DeleteModalProps {
  toggleDeleteModal: () => void;
  sessionId: string;
  user: null | IUser;
  fetchSessions: Function;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  toggleDeleteModal,
  sessionId,
  user,
  fetchSessions,
}) => {
  return (
    <div className="update">
      <section className="update__container">
        <section className="update__content">
          <DeleteSessionForm
            toggleDeleteModal={toggleDeleteModal}
            sessionId={sessionId}
            fetchSessions={fetchSessions}
          />
        </section>
      </section>
    </div>
  );
};

export default DeleteModal;
