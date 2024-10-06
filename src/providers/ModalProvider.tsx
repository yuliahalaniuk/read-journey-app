import { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";

interface ModalContextProps {
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

const ModalCtx = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalCtx);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
  };

  const hideModal = () => {
    setModalContent(null);
  };

  return (
    <ModalCtx.Provider value={{ showModal, hideModal }}>
      {children}

      {modalContent &&
        createPortal(
          <div className="modal-overlay">{modalContent}</div>,
          document.body
        )}
    </ModalCtx.Provider>
  );
};
