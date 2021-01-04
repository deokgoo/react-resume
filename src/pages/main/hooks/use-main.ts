import { useRef, useState } from 'react';

const useMain = () => {
  const [entry, updateEntry] = useState({});
  const aboutRef = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry))
  );
  const workExperienceRef = useRef(new window.IntersectionObserver(([entry]) => updateEntry(entry)));
  const skillRef = useRef(new window.IntersectionObserver(([entry]) => updateEntry(entry)));
  const contactRef = useRef(new window.IntersectionObserver(([entry]) => updateEntry(entry)));

  const refs = {
    aboutRef,
    workExperienceRef,
    skillRef,
    contactRef,
  }

  return {
    entry,
    refs,
  }
}

export default useMain;
