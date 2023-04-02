import s from './button.module.scss';

export const ProofOfPayment = () => (
  <div className={`${s.optionsButton} ${s.accent}`} style={{ marginBottom: '12px' }}>
    Ждём подтверждения оплаты от отельера
  </div>
);
