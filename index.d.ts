export interface temtem {
    wikiNumber: number;
    name: string;
    types: Array<string>;
    wikiRenderAnimatedLumaUrl: string;
    catchRate: number;
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