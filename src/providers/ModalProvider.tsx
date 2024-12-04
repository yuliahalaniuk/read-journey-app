import { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { baseTheme } from "../theme";
import Modal from "../atoms/Modal";
import CloseIcon from "../assets/CloseIcon";
import { RemoveScroll } from "react-remove-scroll";

interface ModalContextProps {
  showModal: (
    content: ReactNode,
    options?: { bodySize?: "s" | "m"; isDrawer?: boolean }
  ) => void;
  hideModal: () => void;
  isExiting: boolean;
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
  const [isExiting, setIsExiting] = useState(false);
  const [bodySize, setBodySize] = useState<"s" | "m">("s");
  const [isDrawer, setIsDrawer] = useState(false);

  const showModal = (
    content: ReactNode,
    options?: { bodySize?: "s" | "m"; isDrawer?: boolean }
  ) => {
    setModalContent(content);
    setBodySize(options?.bodySize || "s");
    setIsDrawer(!!options?.isDrawer);
  };

  const hideModal = () => {
    setIsExiting(true);

    setTimeout(() => {
      setModalContent(null);
      setIsExiting(false);
    }, Number(baseTheme.animationTime));
  };

  const handleCloseOnBackdrop = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (ev.target === ev.currentTarget) {
      hideModal();
    }
  };

  return (
    <ModalCtx.Provider value={{ showModal, hideModal, isExiting }}>
      {children}

      {modalContent &&
        createPortal(
          <RemoveScroll>
            <Modal.Backdrop
              onClick={handleCloseOnBackdrop}
              $isExiting={isExiting}
            >
              {isDrawer ? (
                modalContent
              ) : (
                <Modal.Body $sizeType={bodySize} $isExiting={isExiting}>
                  <Modal.CloseBtn onClick={hideModal}>
                    <CloseIcon />
                  </Modal.CloseBtn>
                  {modalContent}
                </Modal.Body>
              )}
            </Modal.Backdrop>
          </RemoveScroll>,
          document.body
        )}
    </ModalCtx.Provider>
  );
};
