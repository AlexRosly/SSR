import { FooterLinks } from './FooterLinks';
import { AllRightsReserved } from './AllRightsReserved';
import scss from './Footer.module.scss';

export const Footer = ({ className = '' }: { className?: string }) => (
  <footer className={`${scss.footer} ${className}`}>
    <FooterLinks mode="light" />
    <AllRightsReserved />
  </footer>
);
