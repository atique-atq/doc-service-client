import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dr. Zebin`;
    }, [title])
};

export default useTitle;