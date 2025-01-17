import Code from "@/components/Code";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { AppProvider } from "@/providers/provider";
import BrowserDemo from "../components/BrowserDemo";
import Header from "../components/Header";
import InstallationCode from "../components/InstallationCode";

export default function Home() {
  return (
    <AppProvider>
      <main className="h-screen overflow-hidden text-black transition-colors bg-gray-100 md:pt-4 dark:bg-gray-900 dark:text-white">
        <div className="flex h-full gap-8 p-12 md:flex-col">
          <div className="relative flex min-w-[700px] md:hidden">
            <BrowserDemo />
          </div>
          <div className="z-20 flex flex-col w-full overflow-hidden md:h-full md:justify-center">
            <Header />
            <InstallationCode />
            <Code />
            <div className="hidden w-full text-center text-gray-400 dark:text-gray-600 md:block">
              Interactive demo available on desktop site!
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </main>
    </AppProvider>
  );
}
