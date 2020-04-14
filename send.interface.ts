import { IRequest, IResponse } from '../lambdahandler/Response.class'

export interface IPushSendRequest extends IRequest {
  to:string|string[]
  title:string
  body:string
  image?:string
  collapseTitle?:string
  name?:string
  data?:{
    [key:string]: string
  }
}


export interface IPushSendResponse extends IResponse {
  details:{
    multicast_id:number,
    success:number,
    failure:number,
    canonical_ids:number,
    results:{ message_id:string }[]
  }
}