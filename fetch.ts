import type { Temtem } from './index.d.ts';

export const fetchData = async () => {
    const response = await fetch('https://temtem-api.mael.tech/api/temtems');
    const temtemData = await response.json<Array<Temtem>>();
    return temtemData;
}