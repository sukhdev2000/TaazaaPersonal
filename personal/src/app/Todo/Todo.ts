export class Todo{
    sno:number;
    title:string;
    desc:string;
    Active:boolean;
    constructor(no:number,title:string,desc:string,Active:boolean)
    {
        this.sno=no;
        this.title=title;
        this.desc=desc;
        this.Active=Active;
    }
}