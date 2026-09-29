import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
}
