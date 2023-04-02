import iconPeople from 'assets/images/pages/agents/iconPeople.svg';
import iconHouse from 'assets/images/pages/cabinetAgent/iconHouse.svg';

import EditableFieldSection from './EditableFieldSection/EditableFieldSection';
import AgentAccountSettings from './AgentAccountSettings/AgentAccountSettings';
import ReferralLink from 'components/AgentCabinet/ReferralLink/ReferralLink';
import TelegramLink from 'components/AgentsPage/TelegramLink/TelegramLink';
// import { Reviews } from 'components/Common/Reviews';
// import { Footer } from 'components/Common/Footer';

import Transactions from './Transactions/Transactions';
import transactionsForPayout from 'json/transactionsForPayout.json';
import transactionsObject from 'json/transactionsObject.json';
import transactionsAgent from 'json/transactionsAgent.json';

import { Aside } from 'components/Common/Aside';
import scss from './AgentCabinet.module.scss';

export const AgentCabinet = () => {
  return (
    <div className={scss.container}>
      <div className={scss.row}>
        <main className={scss.main}>
          <div className={scss.referralLinksWrapper}>
            <ReferralLink
              to="https://www.yourpricebooking.com/h7843437867"
              text="Referral link for hotelier registration"
              icon={iconHouse}
            />

            <ReferralLink
              to="https://www.ad.yourpricebooking.com/a7657687665677"
              text="Referral link for agent registration"
              icon={iconPeople}
            />
          </div>

          <TelegramLink
            to="https://t.me/agents_YourPriceBooking"
            text="t.me/agents_YourPriceBooking"
            actionWord="Join"
            callToAction=" the official telegram chat for agents"
          />

          <EditableFieldSection initValue="" />

          <AgentAccountSettings
            login="+ 380976752329"
            email="pochdsvdta423@gmail.com"
            agentId="12345678910"
            dateOfRegistration="22/12/2020"
          />

          <Transactions
            transactionsForPayout={transactionsForPayout}
            transactionsObject={transactionsObject}
            transactionsAgent={transactionsAgent}
          />
        </main>

        <Aside />
      </div>
    </div>
  );
};

/*
        <aside>
          <Reviews />
          <Footer />
        </aside>
*/
