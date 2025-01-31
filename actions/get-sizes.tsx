import { Size } from "@/types";

const URL = `https://buy-hub-admin-ok1qxmcah-manav-chauhans-projects.vercel.app/api/42bcb651-d581-402d-bdb2-ce247a1f949b/sizes`; 

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL);

    return res.json();
}

export default getSizes;