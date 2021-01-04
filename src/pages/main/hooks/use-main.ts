import { useRef } from 'react';

const useMain = () => {

  const refs = {
    aboutRef: useRef(),
    workExperienceRef: useRef(),
    skillRef: useRef(),
    contactRef: useRef(),
  }

  return {
    refs,
  }
}

export default useMain;
