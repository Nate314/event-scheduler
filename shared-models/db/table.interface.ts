export interface Table<T> {
    convertFromAny(x: any): T;
}
