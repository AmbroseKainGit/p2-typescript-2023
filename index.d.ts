export interface Temtem {
    number: number;
    name: string;
    types: Array<string>;
    wikiRenderAnimatedLumaUrl: string;
    wikiRenderStaticLumaUrl: string;
    wikiRenderStaticUrl: string;
    catchRate: number;
    gameDescription: string;
    evolution: {
        evolves: boolean;
        name?: string;
        evolutionTree?: Array<any>;
        stage?: number;
        to?: {
            name: string;
            stage: number;
            number: number;
            level: number;
        };
    };
    genderRatio: {
        male: number;
        female: number;
    };
    stats: {
        hp: number;
        sta: number;
        spd: number;
        atk: number;
        def: number;
        spatk: number;
        spdef: number;
        total: number;
    }
}   