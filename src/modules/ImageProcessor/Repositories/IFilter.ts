export interface IFilter {
    process(imagemPath: string): Promise<void>;
}