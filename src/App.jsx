import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav"
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/webgiviewer";
import Loader from "./components/Loader";
import { useRef } from 'react'
function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }
  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
