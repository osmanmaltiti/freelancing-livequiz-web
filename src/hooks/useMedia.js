import { useEffect, useState } from 'react';

const useMedia = (query) => {
  const [defaultMedia, setDefaultMedia] = useState();
  useEffect(() => {
    const init = window.matchMedia(query)
    setDefaultMedia(init)
  }, [query])

  const [state, setState] = useState(defaultMedia);
  useEffect(() => {
    const media = window.matchMedia(query);
  
    if(state !== media.matches) setState(media.matches)
    else setState(media.matches)

    const resize = () => setState(media.matches)

    media.addEventListener("change", resize)

    return () => media.removeEventListener("change", resize)
  }, [query, state])
  return state;
}

export default useMedia;