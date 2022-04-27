import { styled } from "@mui/system";

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

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export default function Home() {
  //const { address } = useAuthContext();
  const wallet = useWallet();

  return (
    <Wrapper>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <MaterialUIWalletMultiButton />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Header />
      <BakeCard />
      <NutritionFacts />
      <ReferralLink address={wallet.publicKey && wallet.publicKey.toBase58()} />
      <Footer />

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
  );
}
