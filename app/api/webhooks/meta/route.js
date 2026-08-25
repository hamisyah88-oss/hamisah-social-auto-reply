import {NextResponse} from "next/server";
export async function GET(request){const u=new URL(request.url),m=u.searchParams.get("hub.mode"),t=u.searchParams.get("hub.verify_token"),c=u.searchParams.get("hub.challenge");if(m==="subscribe"&&t===process.env.META_VERIFY_TOKEN)return new Response(c,{status:200});return new Response("Forbidden",{status:403})}
export async function POST(request){try{const body=await request.json();console.log("META_WEBHOOK_EVENT",JSON.stringify(body));return NextResponse.json({ok:true})}catch(e){console.error(e);return NextResponse.json({ok:false},{status:500})}}
