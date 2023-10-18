export interface ISoftware {
    id: number;
    name: string;
    price: number;
    detail: string;
    requirements: IRequirement[];
}

export interface IRequirement{
    id:number;
    description: string;
    cost: number;
    effort: number;
    softwareId: number;
}