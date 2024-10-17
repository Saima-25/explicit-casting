let kind:unknown;
kind= 4;              // no error 
kind=true;             // no error  
kind="same";           // no error
let kind1:unknown=kind  // no error
let kind2:any=kind       // no error
/* error unknown is not assignable to type 'number'
let kind3:number=kind       
let kind4:string=kind
let kind5:boolean=kind
let kind6:null=kind
let kind7:undefined=kind
 Explicit casting*/
let kind3:number=kind as number      // no error    
let kind4:string=kind as string      
let kind5:boolean=kind as boolean
let kind6:null=kind as null 
let kind7:undefined=kind as undefined