import type { Temtem } from './index.d.ts';

export const fetchData = async () => {
    const response = await fetch('https://temtem-api.mael.tech/api/temtems');
    const responseData = await response.json<Temtem[]>();
    const temtemData: Temtem[] = [];
    for (const { number, name, types, wikiRenderAnimatedLumaUrl, catchRate, evolution, genderRatio, stats, wikiRenderStaticLumaUrl, wikiRenderStaticUrl } of responseData) {
        temtemData.push({ number, name, types, wikiRenderAnimatedLumaUrl, catchRate, evolution, genderRatio, stats, wikiRenderStaticLumaUrl, wikiRenderStaticUrl });
    }
    return temtemData;
}