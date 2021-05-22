export interface Articulo {
    [x: string]: any;
    forEach(arg0: (element: any) => void);
    id : number,
    cod_Articulo : string,
    marca : string,
    modelo : string,
    medida : string,
    cantidad : number
}