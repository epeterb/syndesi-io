import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Ventures from "./pages/Ventures";
import HowWeBuild from "./pages/HowWeBuild";
import ForFounders from "./pages/ForFounders";
import Advisory from "./pages/Advisory";
import About from "./pages/About";
import CaseStudyPartnerMind from "./pages/CaseStudyPartnerMind";
import CaseStudyLocalAnswer from "./pages/CaseStudyLocalAnswer";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/ventures" component={Ventures} />
      <Route path="/how-we-build" component={HowWeBuild} />
      <Route path="/for-founders" component={ForFounders} />
      <Route path="/advisory" component={Advisory} />
      <Route path="/about" component={About} />
      <Route path="/case-study/partnermind" component={CaseStudyPartnerMind} />
      <Route path="/case-study/localanswer" component={CaseStudyLocalAnswer} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
