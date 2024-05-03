import LandingPage from './LandingPage';
import TransitionComponent from "@/components/Global/TransitionComponent"
export default function Home() {
  return (
    <main className="flex h-auto w-auto flex-col">
      <div className="flex flex-col items-center justify-center">
        <TransitionComponent/>
        <LandingPage/>
      </div>
    </main>
  );
}
