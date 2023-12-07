'use server'
 
import { cookies } from 'next/headers'
 
async function Action() {
  cookies().delete(`sb-nrudbmtbaygkkolopcda-auth-token`)
}

export {Action}