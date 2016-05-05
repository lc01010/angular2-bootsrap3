export class tableModel {
    url:string;
    total: number;
    page :number;
    pagesize:number;
    filter: string;
    rows: any[];   
    constructor(total:number,page :number,pagesize:number,rows: any[],filter?: string,url?:string){
        this.total = total;
        this.page = page;
        this.pagesize = pagesize;
        this.rows = rows;
        this.filter = filter;
        this.url = url;
    }
}