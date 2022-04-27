import { flexbox, styled } from "@mui/system";

import Header from "./components/Header";
import BakeCard from "./components/BakeCard";
import NutritionFacts from "./components/NutritionFacts";
import ReferralLink from "./components/ReferralLink";
import { useWallet } from "@solana/wallet-adapter-react";
import Footer from "./components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import {
  WalletDialogProvider as MaterialUIWalletDialogProvider,
  WalletMultiButton as MaterialUIWalletMultiButton,
} from '@solana/wallet-adapter-material-ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imgKiss from '../assets/kisspng-white-coffee-stain-photography-cup-photoscape-effects-5aca1065ae80f1.0483033315231919097148.png';
import imgCup from '../assets/cup-coffee-stain-6.png';

const Wrapper = styled("div")(({ theme }) => ({
  position: 'relative',
  maxWidth: 500,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const WalletButton = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'row-reverse'
}))

export default function Home() {
  //const { address } = useAuthContext();
  const wallet = useWallet();

  return (
    <>
      
      <Wrapper>
      <WalletButton>
        <MaterialUIWalletMultiButton variant="text" color="black" style={{
          border: "5px solid black",
          fontWeight: 900,
          background: "transparent",
        }}>
          Connect
        </MaterialUIWalletMultiButton>
      </WalletButton>
        <Header />
        <BakeCard />
        <NutritionFacts />
        <ReferralLink address={wallet.publicKey && wallet.publicKey.toBase58()} />
        <Footer />

        <div style={{
          position: 'absolute',
          left: -120,
          bottom: 250,
          zIndex: -1
        }}>
          <img src={imgKiss} width={100} height={200} />
        </div>

        <div style={{
          position: 'absolute',
          right: -270,
          bottom: -50,
          zIndex: -1,
        }}>
          <img src={imgCup} width={450} height={450} rotate={"90deg"} />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Wrapper>
    </>
  );
}
