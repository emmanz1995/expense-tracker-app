import { useState } from 'react';

const useOpen = () => {
    const [openClose, setOpenClose] = useState(false);
    const toggle = () => setOpenClose(!openClose);

    return { toggle, openClose };
}

export default useOpen;
