import { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { getRefs } from 'utils';
import scss from './Drawer.module.scss';

const { root, drawer } = getRefs();

ReactModal.setAppElement(root);

const parentSelector = () => drawer;

type DrawerProps = {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
  children: ReactNode;
};

export const Drawer = ({ isDrawerOpen, closeDrawer, children }: DrawerProps) => (
  <ReactModal
    portalClassName="react-modal__portal"
    htmlOpenClassName="ReactModal__Html--open"
    parentSelector={parentSelector}
    isOpen={isDrawerOpen}
    onRequestClose={closeDrawer}
    className={{
      base: scss.drawer,
      afterOpen: scss.drawerAfterOpen,
      beforeClose: scss.drawerBeforeClose,
    }}
    overlayClassName={{
      base: scss.mobileOverlayBase,
      afterOpen: scss.mobileOverlayAfterOpen,
      beforeClose: scss.mobileOverlayBeforeClose,
    }}
    closeTimeoutMS={150}
    contentLabel="Mobile drawer"
  >
    <>{children}</>
  </ReactModal>
);
