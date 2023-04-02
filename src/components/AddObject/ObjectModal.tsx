import type { ReactNode } from 'react';
import { useAppSelector } from 'features';
import { selectObjectActiveTabId } from 'features/objects';
import { Modal } from './Modal';
import sprite from 'assets/images/createObject/sprite-object.svg';
import { CloseModalButton } from 'components/Common/Buttons';
import { objectTabs } from './ObjectTabsNavigation';

type IconProps = { className: string; iconId: string };

export const Icon = ({ className, iconId }: IconProps) => (
  <svg className={className}>
    <use href={`${sprite}#${iconId}`} />
  </svg>
);

type CloseButtonProps = { closeModal: () => void };

const CloseButton = ({ closeModal }: CloseButtonProps) => (
  <CloseModalButton className="object__window-button" closeModal={closeModal}>
    <Icon className="object__window-icon" iconId="Close" />
  </CloseModalButton>
);

type AddObjectModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

const lastTabId = objectTabs.ids.length - 1;

export const AddObjectModal = ({ isModalOpen, closeModal, children }: AddObjectModalProps) => {
  const activeTabId = useAppSelector(selectObjectActiveTabId);
  const isLastTab = activeTabId === lastTabId;
  const backdropAfterOpen = `object__backdrop--after-open ${isLastTab ? 'isLastTab' : ''}`;

  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={isModalOpen}
      contentClassName="object__window"
      overlayClassName={{
        base: 'object__backdrop',
        afterOpen: backdropAfterOpen,
        beforeClose: 'object__backdrop--before-close',
      }}
      closeTimeoutMS={300}
      contentLabel="Add Object modal"
    >
      <CloseButton closeModal={closeModal} />

      {children}
    </Modal>
  );
};
