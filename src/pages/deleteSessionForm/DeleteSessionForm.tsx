import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";
import { ISession } from "../../interfaces/session";
import "./deleteSessionForm.scss";

interface DeleteSessionFormProps {
  toggleDeleteModal: () => void;
  sessionId: string;
  fetchSessions: Function;
}

const DeleteSessionForm: React.FC<DeleteSessionFormProps> = ({
  toggleDeleteModal,
  sessionId,
  fetchSessions,
}) => {
  const [session, setSession] = useState<ISession | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchSession() {
      const resp = await fetch(`${baseUrl}/sessions/${sessionId}`);
      const sessionData = await resp.json();
      setSession(sessionData);
    }
    fetchSession();
  }, [sessionId]);

  async function deleteSession(sessionID: any) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${baseUrl}/sessions/${sessionId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toggleDeleteModal();
      navigate("/sessions");
    } catch (e: any) {
      console.error(e);
    }
  }

  return (
    <div className="show-form">
      <h4>Are you sure you want to delete {session && session.name}?</h4>
      <div className="show-form__buttons">
        <button
          className="show-form__deletebtn"
          onClick={() => {
            deleteSession(sessionId);
            fetchSessions();
          }}
        >
          Delete &nbsp;
          <i className="fa fa-trash"></i>
        </button>
        <button onClick={toggleDeleteModal} className="show-form__btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteSessionForm;
