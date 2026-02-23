// middleware.ts


import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";
export const proxy = createNextAuthMiddleware();

export const config = {
   matcher:["/(.*)"],
};



// 過去

// import { NextRequest , NextResponse } from "next/server";
// 
// export function middleware(request:NextRequest) {
//    console.log("middlewareは。。。:" + request.url)

//    return NextResponse.next();
// }
