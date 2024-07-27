import Navbar from "./component/navbar";
import Cover from "./component/cover";
import Body from "./component/body";
import {bebas} from './lib/constants';
import { supabase } from "./lib/supabase";
import UserNavbar from "./component/usernavbar";

export default function Home() {

  return (
    <main className={`flex  min-h-screen mx-auto flex-col ${bebas.className}`}>
      <Cover/>
      <Navbar/>
      <Body/>
    </main>
  );
}
